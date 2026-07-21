"use client";

import Image from "next/image";
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
          <a href="/" className="logo" aria-label="Best Medicare Advisor">
            <Image
              src="/logo.png"
              alt="Best Medicare Advisor"
              width={220}
              height={80}
              priority
              className="navbar-logo"
            />
          </a>

          <div className="header-right">
            <div className="hours">
              <span className="dot" />
              Mon&ndash;Fri: 9AM&ndash;6PM ET
            </div>

            <a href="tel:16802251325" className="header-call">
              Call 1-680-225-1325
            </a>
          </div>
        </div>
      </header>
    </>
  );
}