export interface LeadDocument {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  dob: string;
  medicarePartAB: "yes" | "no";
  preferredTime: string;
  submittedAt: Date;
  source: string;
  userAgent?: string;
  ip?: string;
}

// Call once (e.g. from a setup script) to ensure useful indexes exist.
export async function ensureLeadIndexes(db: import("mongodb").Db) {
  const collection = db.collection<LeadDocument>("leads");
  await collection.createIndex({ email: 1 });
  await collection.createIndex({ phone: 1 });
  await collection.createIndex({ submittedAt: -1 });
}