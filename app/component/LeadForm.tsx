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
        <p>
          A licensed agent will reach out at your preferred time. You can also call us now at{" "}
          <a href="tel:16802251325">1-680-225-1325</a>.
        </p>

        <style jsx>{`
          .lead-form-success {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 40px 32px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
          }
          .lead-form-success h3 {
            margin: 0 0 12px;
            font-size: 1.4rem;
            color: #0f172a;
          }
          .lead-form-success p {
            margin: 0;
            color: #475569;
            font-size: 0.98rem;
            line-height: 1.6;
          }
          .lead-form-success a {
            color: #2563eb;
            font-weight: 600;
            text-decoration: none;
          }
          .lead-form-success a:hover {
            text-decoration: underline;
          }
        `}</style>
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
        <div className="field-group">
          <div className={`field ${errors.firstName ? "invalid" : ""}`}>
            <User size={16} className="field-icon" />
            <input
              placeholder="First Name*"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
            />
          </div>
          {errors.firstName && <p className="field-error">{errors.firstName}</p>}
        </div>
        <div className="field-group">
          <div className={`field ${errors.lastName ? "invalid" : ""}`}>
            <User size={16} className="field-icon" />
            <input
              placeholder="Last Name*"
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
            />
          </div>
          {errors.lastName && <p className="field-error">{errors.lastName}</p>}
        </div>
      </div>

      <div className="field-group">
        <div className={`field ${errors.phone ? "invalid" : ""}`}>
          <Phone size={16} className="field-icon" />
          <input
            placeholder="Phone Number* (10 digits)"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
        {errors.phone && <p className="field-error">{errors.phone}</p>}
      </div>

      <div className="field-group">
        <div className={`field ${errors.email ? "invalid" : ""}`}>
          <Mail size={16} className="field-icon" />
          <input
            type="email"
            placeholder="Email Address*"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
        {errors.email && <p className="field-error">{errors.email}</p>}
      </div>

      <div className="field-group">
        <div className={`field ${errors.streetAddress ? "invalid" : ""}`}>
          <MapPin size={16} className="field-icon" />
          <input
            placeholder="Street Address*"
            value={form.streetAddress}
            onChange={(e) => update("streetAddress", e.target.value)}
          />
        </div>
        {errors.streetAddress && <p className="field-error">{errors.streetAddress}</p>}
      </div>

      <div className="form-row two-col">
        <div className="field-group">
          <div className={`field ${errors.city ? "invalid" : ""}`}>
            <Building2 size={16} className="field-icon" />
            <input
              placeholder="City*"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
            />
          </div>
          {errors.city && <p className="field-error">{errors.city}</p>}
        </div>
        <div className="field-group">
          <div className={`field ${errors.state ? "invalid" : ""}`}>
            <MapPin size={16} className="field-icon" />
            <input
              placeholder="State* (e.g. NY)"
              value={form.state}
              onChange={(e) => update("state", e.target.value)}
            />
          </div>
          {errors.state && <p className="field-error">{errors.state}</p>}
        </div>
      </div>

      <div className="field-group">
        <div className={`field ${errors.zip ? "invalid" : ""}`}>
          <MapPin size={16} className="field-icon" />
          <input
            placeholder="ZIP Code* (5 digits)"
            value={form.zip}
            onChange={(e) => update("zip", e.target.value)}
          />
        </div>
        {errors.zip && <p className="field-error">{errors.zip}</p>}
      </div>

      <div className="field-group">
        <div className={`field ${errors.dob ? "invalid" : ""}`}>
          <Calendar size={16} className="field-icon" />
          <input
            type="date"
            value={form.dob}
            onChange={(e) => update("dob", e.target.value)}
          />
        </div>
        {errors.dob && <p className="field-error">{errors.dob}</p>}
      </div>

      <div className="field-group">
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
      </div>

      <div className="field-group">
        <div className={`field ${errors.preferredTime ? "invalid" : ""}`}>
          <Clock size={16} className="field-icon" />
          <input
            placeholder="Preferred Time to Receive a Call*"
            value={form.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
          />
        </div>
        {errors.preferredTime && <p className="field-error">{errors.preferredTime}</p>}
      </div>

      <div className="field-group">
        <label className="privacy-row">
          <input
            type="checkbox"
            checked={form.agreedToPrivacyPolicy}
            onChange={(e) => update("agreedToPrivacyPolicy", e.target.checked)}
          />
          <span>
            By submitting the form I agree with the{" "}
            <a href="/privacy-policy">Privacy policy</a>
          </span>
        </label>
        {errors.agreedToPrivacyPolicy && (
          <p className="field-error">{errors.agreedToPrivacyPolicy}</p>
        )}
      </div>

      <button type="submit" className="submit-btn" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>

      <div className="secure-line">🔒 Your information is safe and secure.</div>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="field-error center">Something went wrong. Please try again.</p>
      )}

      <style jsx>{`
  .lead-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 10px 30px rgba(7, 26, 44, 0.1);
    font-family: var(--font-inter), "Segoe UI", Arial, sans-serif;
  }

  .hp-field {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .form-row.two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .field {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 12px 14px;
    background: var(--bg);
    transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  }

  .field:focus-within {
    border-color: var(--blue-600);
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(37, 99, 166, 0.14);
  }

  .field.invalid {
    border-color: #c23b3b;
  }

  :global(.field-icon) {
    flex-shrink: 0;
    color: var(--muted);
  }

  .field input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-size: 0.96rem;
    color: var(--ink);
    font-family: var(--font-inter), sans-serif;
  }

  .field input::placeholder {
    color: #9aa7b4;
  }

  .question-row {
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 2px;
  }

  .radio-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 12px 14px;
    background: var(--bg);
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--ink);
    transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
  }

  .radio-field.active {
    border-color: var(--blue-600);
    background: #eaf2f9;
    color: var(--navy-800);
    font-weight: 700;
  }

  .radio-field input {
    accent-color: var(--blue-600);
  }

  .privacy-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.85rem;
    color: var(--muted);
    line-height: 1.5;
    cursor: pointer;
  }

  .privacy-row input {
    margin-top: 3px;
    accent-color: var(--blue-600);
  }

  .privacy-row a {
    color: var(--blue-600);
    text-decoration: underline;
    font-weight: 600;
  }

  .field-error {
    margin: 0;
    font-size: 0.82rem;
    color: #c23b3b;
    font-weight: 600;
  }

  .field-error.center {
    text-align: center;
  }

  .submit-btn {
    margin-top: 4px;
    background: var(--teal-600);
    color: var(--white);
    border: none;
    border-radius: 10px;
    padding: 15px 20px;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.01em;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
    font-family: var(--font-inter), sans-serif;
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--teal-500);
  }

  .submit-btn:active:not(:disabled) {
    transform: scale(0.99);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .secure-line {
    text-align: center;
    font-size: 0.82rem;
    color: var(--muted);
  }

  @media (max-width: 480px) {
    .form-row.two-col {
      grid-template-columns: 1fr;
    }
    .lead-form {
      padding: 24px 18px;
    }
  }
`}</style>
    </form>
  );
}