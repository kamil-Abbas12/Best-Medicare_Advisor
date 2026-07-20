import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#eef2f7]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        {/* Top */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="flex-1">
            <Image
              src="/logo.png"
              alt="Best Medicare Advisor"
              width={220}
              height={52}
              className="mb-6 h-auto w-40 sm:w-44 md:w-48"
            />

            <div className="space-y-5 text-[12px] leading-6 text-gray-600 sm:text-[13px]">
              <p>
                BestMedicareAdvisor is not affiliated with or endorsed by any
                government agency. The information we collect will be provided
                to a licensed insurance agent. You may be contacted by a
                licensed insurance agent for your Medicare plans. The plans we
                represent do not discriminate on the basis of race, color,
                national origin, age, disability, or sex. "Opt-Out" or
                "Unsubscribe" anytime with opt-out/unsubscribe link.
              </p>

              <p>
                This website is not connected with the federal government or the
                federal Medicare program. The purpose of this website is the
                solicitation of insurance.
              </p>

              <p>
                We do not offer every plan available in your area. Currently we
                represent five organizations which offer eight plans in your
                area. Please contact Medicare.gov, 1-800-MEDICARE, or your local
                State Health Insurance Program to get information on all of your
                options.
              </p>

              <p>
                www.bestmedicareadvisor.com is owned and operated by Maxfort Media
                LLC, a non-government entity. This site is not maintained by,
                affiliated with, endorsed by, or acting on behalf of the U.S.
                Government or any of its agencies or programs.
              </p>

              <p>
                www.bestmedicareadvisor.com represents Medicare Advantage (HMO,
                PPO, or PFFS) organizations and/or Medicare-approved Part D
                sponsors that have a Medicare contract. Enrollment depends on
                the plan's contract renewal.
              </p>

              <p>
                Not all plans offer all available benefits. Benefits vary by
                carrier, plan, and location. Deductibles, copays, coinsurance
                may apply. Allowance amounts cannot be combined with other
                benefit allowances. Limitations and exclusions may apply.
                Enrollment in a plan may be limited to certain times of the year
                unless you qualify for a special enrollment period.
              </p>

              <p>MULTIPLAN_MEMSOC1202026_M</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:w-[180px] lg:justify-end lg:self-start lg:pt-2">
            <Image
              src="/norton-logo.svg"
              alt="Norton Secured"
              width={150}
              height={80}
              className="h-auto w-24 sm:w-28 md:w-32"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 bg-[#e8eaee]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-gray-600 sm:px-6 md:flex-row">
          <p className="text-xs sm:text-sm">
            © 2026 Best Medicare Advisor. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:gap-6 sm:text-sm">
            <Link href="/privacy-policy" className="hover:text-[#233A73]">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service" className="hover:text-[#233A73]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
