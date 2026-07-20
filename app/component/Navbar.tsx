"use client";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        Licensed insurance agents available now &mdash; no obligation to enroll
      </div>

      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <div className="logo-mark">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z"
                  fill="#fff"
                />
                <path
                  d="M9 12.2l2 2 4-4.4"
                  stroke="#7C3AED"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="logo-text">
              Best<span className="accent-word">Medicare</span>Advisor
            </div>
          </div>

         

          <div className="header-right">
            <div className="hours">
              <span className="dot" />
              Mon&ndash;Fri: 9AM&ndash;6PM ET
            </div>
            <a href="tel:18447676458" className="header-call">
              Call 1-844-767-6458
            </a>

          </div>
        </div>

       
      </header>
    </>
  );
}              