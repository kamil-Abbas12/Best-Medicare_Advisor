import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Medicare Quote",
  description:
    "You're one step away from your Medicare match. Call now to speak with a licensed insurance agent in your state.",
};

export default function QuotePage() {
  return (
    <section className="hero">
      <div
        className="hero-card"
        style={{ gridTemplateColumns: "1fr", maxWidth: "820px" }}
      >
        <div className="hero-content" style={{ textAlign: "center", padding: "56px 48px" }}>
          <div className="eyebrow" style={{ margin: "0 auto 22px" }}>
            Free &middot; No Obligation
          </div>

          <h1 style={{ fontSize: "2.2rem" }}>
            You&apos;re in the right place &mdash;{" "}
            <span className="accent">let&apos;s find your match.</span>
          </h1>

          <p className="hero-sub" style={{ margin: "0 auto 32px" }}>
            Thank you for sharing your details. You&apos;re just one call away from Medicare
            coverage that fits your needs.
          </p>

          <p style={{ color: "var(--muted)", marginBottom: "16px", fontSize: "0.98rem" }}>
            For immediate help, call the number below. Our team connects you with a licensed
            insurance agent in your state who can walk through your options and answer any
            questions, at no cost to you.
          </p>

          <p style={{ color: "var(--muted)", marginBottom: "32px", fontSize: "0.98rem" }}>
            Your call is answered by a real person who matches you with the right local agent
            &mdash; no automated menus to fight through.
          </p>

          <a
            href="tel:18447676458"
            className="call-block"
            style={{ margin: "0 auto", display: "inline-flex" }}
          >
            <span className="call-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8Z"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="call-text">
              <span className="call-label">Call Now</span>
              <br />
              <span className="call-number">1-844-767-6458</span>
            </span>
          </a>

          <div className="no-obligation" style={{ textAlign: "center" }}>
            No obligation to enroll.
          </div>

          <div className="tty-line" style={{ textAlign: "center" }}>
            <strong>TTY:</strong> 1-877-486-2048 &nbsp;&bull;&nbsp; Mon&ndash;Fri, 8am&ndash;9pm ET
          </div>
        </div>
      </div>
    </section>
  );
}