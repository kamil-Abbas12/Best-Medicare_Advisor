import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the Best Medicare Advisor website and services.",
  alternates: { canonical: "https://bestmedicareadvisor.com/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <section className="hero">
      <div className="hero-card" style={{ gridTemplateColumns: "1fr", maxWidth: "820px" }}>
        <div className="hero-content" style={{ padding: "56px 48px" }}>
          <div className="eyebrow">Legal</div>
          <h1 style={{ fontSize: "2.2rem" }}>Terms of Service</h1>
          <p className="hero-sub" style={{ marginBottom: "8px" }}>
            Last updated: July 2026
          </p>

          <p className="hero-sub">
            These Terms of Service (&quot;Terms&quot;) govern your use of
            www.bestmedicareadvisor.com (the &quot;Site&quot;), owned and operated by Top Dog
            Leads LLC. By using the Site, calling the number listed, or submitting your
            information, you agree to these Terms.
          </p>

          <h2>Purpose of This Site</h2>
          <p className="hero-sub">
            This Site is a solicitation of insurance. We are not the federal government, Medicare,
            or any government agency, and we are not connected with or endorsed by the United
            States government or the federal Medicare program. The purpose of this Site is to
            connect visitors with licensed insurance agents who can provide information about
            Medicare Advantage, Medicare Supplement, and Medicare Part D plans.
          </p>

          <h2>No Insurance Advice or Guarantee</h2>
          <p className="hero-sub">
            Information on this Site is for general informational purposes only and does not
            constitute insurance, legal, or financial advice. We do not offer every plan available
            in your area. Currently we represent five organizations which offer eight plans in
            your area. For a complete listing of plans available in your area, contact
            Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program.
          </p>

          <h2>Eligibility and Enrollment</h2>
          <p className="hero-sub">
            Plan availability, benefits, and enrollment eligibility vary by carrier, plan, and
            location, and are subject to change. Enrollment in a plan may be limited to specific
            enrollment periods unless you qualify for a Special Enrollment Period. Enrollment
            depends on the plan&apos;s contract renewal with Medicare.
          </p>

          <h2>Consent to Contact</h2>
          <p className="hero-sub">
            By submitting your information through this Site or calling the number provided, you
            authorize a licensed insurance agent to contact you by phone, text, or email regarding
            Medicare plan options, including through automated technology, even if your number is
            on a Do Not Call list. This consent is not required to obtain any product or service.
            You may opt out at any time.
          </p>

          <h2>Use of the Site</h2>
          <p className="hero-sub">
            You agree to use this Site only for lawful purposes and to provide accurate
            information when submitting a request. You may not use this Site to submit false,
            misleading, or another person&apos;s information without their consent.
          </p>

          <h2>Intellectual Property</h2>
          <p className="hero-sub">
            All content on this Site, including text, graphics, logos, and design, is the
            property of Top Dog Leads LLC or its licensors and may not be copied, reproduced, or
            distributed without permission.
          </p>

          <h2>Third-Party Links and Carriers</h2>
          <p className="hero-sub">
            Carrier names referenced on this Site are the property of their respective owners.
            Reference to a carrier does not imply endorsement by that carrier. This Site may
            contain links to third-party sites; we are not responsible for the content or
            practices of those sites.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p className="hero-sub">
            This Site and its content are provided &quot;as is&quot; without warranties of any
            kind, express or implied. We do not guarantee that any plan discussed will be
            available, suitable, or the lowest-cost option for your circumstances.
          </p>

          <h2>Limitation of Liability</h2>
          <p className="hero-sub">
            To the fullest extent permitted by law, Top Dog Leads LLC will not be liable for any
            indirect, incidental, or consequential damages arising from your use of this Site or
            reliance on information provided through it.
          </p>

          <h2>Changes to These Terms</h2>
          <p className="hero-sub">
            We may revise these Terms at any time. Continued use of the Site after changes are
            posted constitutes acceptance of the updated Terms.
          </p>

          <h2>Contact Us</h2>
          <p className="hero-sub">
            Questions about these Terms can be directed to{" "}
            <a href="tel:16802251325">1-680-225-1325</a> or Top Dog Leads LLC.
          </p>
        </div>
      </div>
    </section>
  );
}