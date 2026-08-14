"use client";

import { useState } from "react";
import { User, Phone, Mail, MapPin, Calendar, Clock, Building2 } from "lucide-react";

type FormState = {
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
  website: string; // honeypot field, must stay empty
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  dob: "",
  medicarePartAB: "",
  preferredTime: "",
  agreedToPrivacyPolicy: false,
  website: "",
};

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="lead-form-success">
        <h3>You&apos;re all set!</h3>
        <p>A licensed agent will reach out at your preferred time. You can also call us now at{" "}
          <a href="tel:16802251325">1-680-225-1325</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field - hidden from real users */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => update("website", e.target.value)}
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-row two-col">
        <div className="field">
          <User size={16} className="field-icon" />
          <input
            placeholder="First Name*"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
        </div>
        <div className="field">
          <User size={16} className="field-icon" />
          <input
            placeholder="Last Name*"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
        </div>
      </div>
      {(errors.firstName || errors.lastName) && (
        <p className="field-error">{errors.firstName || errors.lastName}</p>
      )}

      <div className="field">
        <Phone size={16} className="field-icon" />
        <input
          placeholder="Phone Number* (10 digits)"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </div>
      {errors.phone && <p className="field-error">{errors.phone}</p>}

      <div className="field">
        <Mail size={16} className="field-icon" />
        <input
          type="email"
          placeholder="Email Address*"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </div>
      {errors.email && <p className="field-error">{errors.email}</p>}

      <div className="field">
        <MapPin size={16} className="field-icon" />
        <input
          placeholder="Street Address*"
          value={form.streetAddress}
          onChange={(e) => update("streetAddress", e.target.value)}
        />
      </div>
      {errors.streetAddress && <p className="field-error">{errors.streetAddress}</p>}

      <div className="form-row two-col">
        <div className="field">
          <Building2 size={16} className="field-icon" />
          <input
            placeholder="City*"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          />
        </div>
        <div className="field">
          <MapPin size={16} className="field-icon" />
          <input
            placeholder="State* (e.g. NY)"
            value={form.state}
            onChange={(e) => update("state", e.target.value)}
          />
        </div>
      </div>
      {(errors.city || errors.state) && (
        <p className="field-error">{errors.city || errors.state}</p>
      )}

      <div className="field">
        <MapPin size={16} className="field-icon" />
        <input
          placeholder="ZIP Code* (5 digits)"
          value={form.zip}
          onChange={(e) => update("zip", e.target.value)}
        />
      </div>
      {errors.zip && <p className="field-error">{errors.zip}</p>}

      <div className="field">
        <Calendar size={16} className="field-icon" />
        <input
          type="date"
          value={form.dob}
          onChange={(e) => update("dob", e.target.value)}
        />
      </div>
      {errors.dob && <p className="field-error">{errors.dob}</p>}

      <div className="question-row">Are you currently enrolled in Medicare Part A and B?*</div>
      <div className="form-row two-col">
        <label className={`radio-field ${form.medicarePartAB === "yes" ? "active" : ""}`}>
          Yes
          <input
            type="radio"
            name="medicarePartAB"
            checked={form.medicarePartAB === "yes"}
            onChange={() => update("medicarePartAB", "yes")}
          />
        </label>
        <label className={`radio-field ${form.medicarePartAB === "no" ? "active" : ""}`}>
          No
          <input
            type="radio"
            name="medicarePartAB"
            checked={form.medicarePartAB === "no"}
            onChange={() => update("medicarePartAB", "no")}
          />
        </label>
      </div>
      {errors.medicarePartAB && <p className="field-error">{errors.medicarePartAB}</p>}

      <div className="field">
        <Clock size={16} className="field-icon" />
        <input
          placeholder="Preferred Time to Receive a Call*"
          value={form.preferredTime}
          onChange={(e) => update("preferredTime", e.target.value)}
        />
      </div>
      {errors.preferredTime && <p className="field-error">{errors.preferredTime}</p>}

      <label className="privacy-row">
        <input
          type="checkbox"
          checked={form.agreedToPrivacyPolicy}
          onChange={(e) => update("agreedToPrivacyPolicy", e.target.checked)}
        />
        By submitting the form I agree with the <a href="/privacy-policy">Privacy policy</a>
      </label>
      {errors.agreedToPrivacyPolicy && (
        <p className="field-error">{errors.agreedToPrivacyPolicy}</p>
      )}

      <button type="submit" className="submit-btn" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>

      <div className="secure-line">🔒 Your information is safe and secure.</div>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="field-error">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}