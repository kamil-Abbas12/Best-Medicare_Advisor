import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import type { RtbLeadDocument } from "@/models/rtbLead";

const CAMPAIGN_KEY = "2f61ccf89b595d2a4ca01896894063c4";
const RTB_BASE_URL =
  "https://rtb.moja.cloud/inbound_rtb/inbound_rtb_1787075326026_2fc4cc6b";
const FALLBACK_NUMBER = process.env.RTB_FALLBACK_NUMBER ?? "18333507584";
interface RtbPayload {
  phone: string;
  zip: string;
  website?: string; // honeypot
}

function validate(data: Partial<RtbPayload>) {
  const errors: Record<string, string> = {};
  const digitsOnly = (data.phone ?? "").replace(/\D/g, "");
  if (!/^\d{10}$/.test(digitsOnly)) errors.phone = "Enter a valid 10-digit phone number.";
  if (!data.zip || !/^\d{5}$/.test(data.zip)) errors.zip = "Enter a valid 5-digit ZIP code.";
  return errors;
}

function extractPhoneNumber(data: unknown): string | undefined {
  if (typeof data === "string") {
    const match = data.match(/(\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/);
    return match ? match[1].replace(/\D/g, "") : undefined;
  }

  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;
    const candidateKeys = [
      "number",
      "phoneNumber",
      "phone_number",
      "target",
      "Target",
      "DialString",
      "dial_string",
      "routing_number",
      "routingNumber",
    ];
    for (const key of candidateKeys) {
      const val = obj[key];
      if (typeof val === "string" && val.trim() !== "") {
        return val.replace(/\D/g, "");
      }
    }
  }

  return undefined;
}

export async function POST(req: NextRequest) {
  let body: Partial<RtbPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Silent bot check
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const phone = body.phone!.replace(/\D/g, "");
  const zip = body.zip!.trim();

  const rtbUrl = `${RTB_BASE_URL}?CALLER_ID=${encodeURIComponent(phone)}&caller_zip=${encodeURIComponent(zip)}`;

  let rtbData: unknown = null;
  let routedNumber: string | undefined;

  try {
    const rtbRes = await fetch(rtbUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    const contentType = rtbRes.headers.get("content-type") ?? "";

    if (contentType.includes("application/json")) {
      rtbData = await rtbRes.json();
    } else {
      rtbData = await rtbRes.text();
    }

    routedNumber = extractPhoneNumber(rtbData);
  } catch (err) {
    console.error("RTB ping failed:", err);
  }

  const finalNumber = routedNumber || FALLBACK_NUMBER;

  const lead: RtbLeadDocument = {
    phone,
    zip,
    campaignKey: CAMPAIGN_KEY,
    rtbResponse: rtbData ?? undefined,
    routedNumber: finalNumber,
    submittedAt: new Date(),
    source: "medicare-rtb-form",
    userAgent: req.headers.get("user-agent") ?? undefined,
    ip: req.headers.get("x-forwarded-for") ?? undefined,
  };

  try {
    const db = await getDb();
    await db.collection<RtbLeadDocument>("rtb_leads").insertOne(lead);
  } catch (err) {
    console.error("Failed to save RTB lead to MongoDB:", err);
  }

  return NextResponse.json({ success: true, phoneNumber: finalNumber });
}