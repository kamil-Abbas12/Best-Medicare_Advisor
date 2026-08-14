import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import type { LeadDocument } from "@/models/lead";

interface LeadPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  dob: string;
  medicarePartAB: "yes" | "no" | "";
  preferredTime: string;
  agreedToPrivacyPolicy: boolean;
  website?: string; // honeypot
}

function validate(data: Partial<LeadPayload>) {
  const errors: Record<string, string> = {};

  if (!data.firstName?.trim()) errors.firstName = "First name is required.";
  if (!data.lastName?.trim()) errors.lastName = "Last name is required.";

  const digitsOnly = (data.phone ?? "").replace(/\D/g, "");
  if (!/^\d{10}$/.test(digitsOnly)) errors.phone = "Enter a valid 10-digit phone number.";

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";

  if (!data.streetAddress?.trim()) errors.streetAddress = "Street address is required.";
  if (!data.city?.trim()) errors.city = "City is required.";
  if (!data.state?.trim()) errors.state = "State is required.";
  if (!data.zip || !/^\d{5}$/.test(data.zip)) errors.zip = "Enter a valid 5-digit ZIP code.";
  if (!data.dob) errors.dob = "Date of birth is required.";

  if (data.medicarePartAB !== "yes" && data.medicarePartAB !== "no")
    errors.medicarePartAB = "Please select yes or no.";

  if (!data.preferredTime?.trim()) errors.preferredTime = "Preferred call time is required.";
  if (!data.agreedToPrivacyPolicy) errors.agreedToPrivacyPolicy = "You must agree to the privacy policy.";

  return errors;
}

export async function POST(req: NextRequest) {
  let body: Partial<LeadPayload>;

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

  const lead: LeadDocument = {
    firstName: body.firstName!.trim(),
    lastName: body.lastName!.trim(),
    phone: body.phone!.replace(/\D/g, ""),
    email: body.email!.trim().toLowerCase(),
    streetAddress: body.streetAddress!.trim(),
    city: body.city!.trim(),
    state: body.state!.trim().toUpperCase(),
    zip: body.zip!.trim(),
    dob: body.dob!,
    medicarePartAB: body.medicarePartAB as "yes" | "no",
    preferredTime: body.preferredTime!.trim(),
    submittedAt: new Date(),
    source: "quote-page-form",
    userAgent: req.headers.get("user-agent") ?? undefined,
    ip: req.headers.get("x-forwarded-for") ?? undefined,
  };

  try {
    const db = await getDb();
    const result = await db.collection<LeadDocument>("leads").insertOne(lead);

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("Failed to save lead to MongoDB:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your information. Please try again." },
      { status: 500 }
    );
  }
}