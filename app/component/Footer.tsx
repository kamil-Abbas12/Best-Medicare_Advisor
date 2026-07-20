import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          BestMedicareAdvisor is not affiliated with or endorsed by any government agency. The
          information we collect will be provided to a licensed insurance agent. You may be
          contacted by a licensed insurance agent for your Medicare plans. The plans we represent
          do not discriminate on the basis of race, color, national origin, age, disability, or
          sex. &quot;Opt-Out&quot; or &quot;Unsubscribe&quot; anytime with opt-out/unsubscribe
          link.
        </p>
        <p>
          This website is not connected with the federal government or the federal Medicare
          program. The purpose of this website is the solicitation of insurance.
        </p>
        <p>
          We do not offer every plan available in your area. Currently we represent five
          organizations which offer eight plans in your area. Please contact Medicare.gov,
          1-800-MEDICARE, or your local State Health Insurance Program to get information on all
          of your options.
        </p>
        <p>
          www.bestmedicareadvisor.com is owned and operated by Maxfort Media LLC, a non-government
          entity. This site is not maintained by, affiliated with, endorsed by, or acting on
          behalf of the U.S. Government or any of its agencies or programs.
        </p>
        <p>
          www.bestmedicareadvisor.com represents Medicare Advantage (HMO, PPO, or PFFS)
          organizations and/or Medicare-approved Part D sponsors that have a Medicare contract.
          Enrollment depends on the plan&apos;s contract renewal.
        </p>
        <p>
          Not all plans offer all available benefits. Benefits vary by carrier, plan, and
          location. Deductibles, copays, coinsurance may apply. Allowance amounts cannot be
          combined with other benefit allowances. Limitations and exclusions may apply. Enrollment
          in a plan may be limited to certain times of the year unless you qualify for a special
          enrollment period.
        </p>
        <p>MULTIPLAN_MEMSOC1202026_M &nbsp;&bull;&nbsp; &copy; 2026 Best Medicare Advisor. All rights reserved.</p>

        <div className="footer-links">
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}