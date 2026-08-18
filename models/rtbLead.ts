export interface RtbLeadDocument {
  phone: string;
  zip: string;
  campaignKey: string;
  rtbResponse?: unknown;
  routedNumber?: string;
  submittedAt: Date;
  source: string;
  userAgent?: string;
  ip?: string;
}