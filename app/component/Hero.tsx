"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [hasPartAB, setHasPartAB] = useState(true);

  return (
    <section className="hero">
      <div className="hero-card">
        <div className="hero-content">

          <div className="eyebrow">Medicare Plan Guidance</div>

          <h1>
           Discover the perfect Medicare plan tailored to your life.
          </h1>

          <p className="hero-sub">
           Turning 65, relocating, or losing coverage? Or maybe you just want to see if you can get a better rate. Whatever your situation, we're here to help. Speak with a licensed insurance agent today.
          </p>

          <div className="trust-chips">
            <span className="trust-chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12.2l2 2 4-4.4"
                  stroke="#1F8A5F"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="9.5" stroke="#1F8A5F" strokeWidth="1.6" />
              </svg>
              No obligation to enroll
            </span>
            <span className="trust-chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z"
                  stroke="#123A5E"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              Licensed agents
            </span>
            <span className="trust-chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="#2563A6" strokeWidth="1.6" />
                <path
                  d="M12 7v5l3 2"
                  stroke="#2563A6"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              Free plan comparison
            </span>
          </div>

          <a href="tel:18447676458" className="call-block">
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
              <span className="call-number">1 680-225-1325</span>
            </span>
          </a>
          <div className="no-obligation">No obligation to enroll.</div>

          
        </div>

        <div className="quote-panel">
          <h2>We handle the search. </h2>
          <div className="tag">You enjoy the savings.</div>

          <div className="question-row">Do you have Medicare Part A and B?</div>
          <div className="toggle-row">
            <button
              type="button"
              className={`toggle-btn ${hasPartAB ? "active" : ""}`}
              onClick={() => setHasPartAB(true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`toggle-btn ${!hasPartAB ? "active" : ""}`}
              onClick={() => setHasPartAB(false)}
            >
              No
            </button>
          </div>

          <button
            type="button"
            className="get-quote-btn"
            onClick={() => router.push("/quote")}
          >
            Get Quote
          </button>
          <div className="savings-line">Compare plans from 5 organizations</div>
        </div>
      </div>
    </section>
  );
}