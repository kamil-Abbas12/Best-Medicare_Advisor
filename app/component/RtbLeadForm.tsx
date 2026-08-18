"use client";

import { useState } from "react";

interface FormState {
  phone: string;
  zip: string;
  website: string; // honeypot
}

const initialState: FormState = { phone: "", zip: "", website: "" };

export default function RtbLeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    try {
      const res = await fetch("/api/rtb-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors ?? { form: "Something went wrong. Please try again." });
        setStatus("error");
        return;
      }

      setPhoneNumber(data.phoneNumber);
      setStatus("success");

      if (data.phoneNumber) {
        window.location.href = `tel:${data.phoneNumber}`;
      }
    } catch (err) {
      console.error(err);
      setErrors({ form: "Something went wrong. Please try again." });
      setStatus("error");
    }
  };

  if (status === "success" && phoneNumber) {
    return (
      <div className="rtb-success">
        <p>Connecting you now &mdash; tap below if the call didn&apos;t start automatically.</p>
        <a href={`tel:${phoneNumber}`} className="call-block">
          <span className="call-text">
            <span className="call-label">Call Now</span>
            <br />
            <span className="call-number">{phoneNumber}</span>
          </span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange("website")}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-field">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          inputMode="numeric"
          placeholder="(555) 555-5555"
          value={form.phone}
          onChange={handleChange("phone")}
          required
        />
        {errors.phone && <span className="field-error">{errors.phone}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="zip">Zip Code</label>
        <input
          id="zip"
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="90210"
          value={form.zip}
          onChange={handleChange("zip")}
          required
        />
        {errors.zip && <span className="field-error">{errors.zip}</span>}
      </div>

      {errors.form && <div className="field-error">{errors.form}</div>}

      <button type="submit" disabled={status === "submitting"} className="get-quote-btn">
        {status === "submitting" ? "Connecting..." : "Get My Free Quote"}
      </button>
    </form>
  );
}