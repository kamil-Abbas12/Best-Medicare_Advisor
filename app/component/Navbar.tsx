import Image from "next/image";

export default function Navbar() {
  return (
    <section className="w-full">
      {/* Logo Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5">
          <Image
            src="/logo.png"
            alt="Best Medicare Advisor"
            width={220}
            height={52}
            priority
            className="h-auto w-40 sm:w-48 md:w-52"
          />
        </div>
      </div>

      {/* Call Banner */}
      <div className="bg-[#233A73] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row md:gap-6 md:py-5">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-sm font-semibold leading-snug sm:text-base md:text-lg lg:text-xl">
              Call now to get help signing up for plans from licensed insurance
              agents!
            </h1>

            <p className="mt-1 text-xs font-medium sm:text-sm md:text-base">
              No obligation to enroll. Mon-Fri: 9AM-6PM ET
            </p>
          </div>

          {/* Right Content */}
          <div className="text-center md:text-right">
            <p className="text-xs font-semibold sm:text-sm md:text-base">
              Call Now:
              <span className="ml-1 text-sm font-bold sm:text-base md:text-lg">
                1-844-767-6458
              </span>
            </p>

            <p className="mt-1 text-xs font-semibold sm:text-sm md:text-base">
              TTY:
              <span className="ml-1 text-sm font-bold sm:text-base md:text-lg">
                1-877-486-2048
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
