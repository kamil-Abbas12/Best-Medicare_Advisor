import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Best Medicare Advisor collects, uses, and protects your personal information when you request Medicare plan guidance.",
  alternates: { canonical: "https://bestmedicareadvisor.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="hero">
      <div className="hero-card" style={{ gridTemplateColumns: "1fr", maxWidth: "820px" }}>
        <div className="hero-content" style={{ padding: "56px 48px" }}>
          <div className="eyebrow">Legal</div>
          <h1 style={{ fontSize: "2.2rem" }}>Privacy Policy</h1>
          <p className="hero-sub" style={{ marginBottom: "8px" }}>
            Last updated: July 2026
          </p>

          <p className="hero-sub">
            www.bestmedicareadvisor.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
            owned and operated by Top Dog Leads LLC. This Privacy Policy explains how we collect,
            use, share, and protect information when you visit our website or submit your
            information to request help finding a Medicare plan.
          </p>

          <h2>Information We Collect</h2>
          <p className="hero-sub">
            When you contact us by phone or submit a form on this site, we may collect your name,
            phone number, email address, ZIP code, date of birth, and information about your
            current Medicare coverage or eligibility. We also automatically collect certain
            technical information, such as your IP address, browser type, device type, and
            browsing behavior on our site, through cookies and similar technologies.
          </p>

          <h2>How We Use Your Information</h2>
          <p className="hero-sub">
            We use the information you provide to connect you with a licensed insurance agent who
            can discuss Medicare Advantage, Medicare Supplement, and Medicare Part D plan options
            available in your area. We do not sell insurance directly and are not the insurer,
            plan sponsor, or administrator of any Medicare plan.
          </p>

          <h2>How We Share Your Information</h2>
          <p className="hero-sub">
            The information you submit will be shared with one or more licensed insurance agents
            or agencies so they can contact you about Medicare plan options. We currently
            represent five organizations offering Medicare plans in your area. We do not sell your
            personal information to unrelated third parties for their own marketing purposes.
          </p>

          <h2>Consent to Be Contacted</h2>
          <p className="hero-sub">
            By submitting your information or calling the number listed on this site, you consent
            to be contacted by a licensed insurance agent by phone, text message, or email,
            including through the use of automated dialing technology or prerecorded messages,
            even if your number is listed on a state or federal Do Not Call registry. Consent is
            not a condition of purchasing any product or service. Message and data rates may
            apply. You may opt out or unsubscribe at any time using the opt-out/unsubscribe
            instructions provided in any communication, or by contacting us directly.
          </p>

          <h2>Cookies and Tracking</h2>
          <p className="hero-sub">
            We use cookies and similar tracking technologies to understand how visitors use our
            site and to improve our content and advertising. You can control cookies through your
            browser settings; disabling cookies may affect site functionality.
          </p>

          <h2>Data Security</h2>
          <p className="hero-sub">
            We use reasonable administrative, technical, and physical safeguards to protect the
            information you provide. However, no method of transmission over the internet is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Choices</h2>
          <p className="hero-sub">
            You may request access to, correction of, or deletion of your personal information, or
            opt out of future contact, by reaching out to us using the contact information below.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p className="hero-sub">
            This website is not directed at individuals under the age of 18, and we do not
            knowingly collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p className="hero-sub">
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p className="hero-sub">
            If you have questions about this Privacy Policy, call us at{" "}
            <a href="tel:16802251325">1-680-225-1325</a> or write to Top Dog Leads LLC.
          </p>
        </div>
      </div>
    </section>
  );
}