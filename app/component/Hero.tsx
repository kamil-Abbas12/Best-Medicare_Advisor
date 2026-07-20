import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#eef3f8]">
      {/* Main Hero */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-[42px] lg:leading-[1.15]">
              Find the right Medicare plan for any situation-quickly and easily!
            </h2>

            <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-black sm:text-base sm:leading-7">
              Whether you're turning 65, moving, lost coverage, or simply need a
              review of your options, we've got you covered!
            </p>

            <p className="mt-6 max-w-lg text-xs leading-5 text-gray-700 sm:text-sm">
              Plans in your area may be provided by Aetna®, Cigna Healthcare®,
              Humana®, UnitedHealthcare®, Wellcare®
            </p>

            {/* Medicare Question Card */}
            <div className="mt-8 w-full max-w-md rounded-xl bg-white p-6 shadow-md sm:p-8">
              <div className="flex justify-center">
                <Image
                   src="/logo.png"
              alt="Best Medicare Advisor"
                  width={180}
                  height={42}
                  className="h-auto w-36 sm:w-40"
                />
              </div>

              <h3 className="mt-5 text-center text-lg font-semibold text-black sm:text-xl">
                Do you have Medicare Part A and B?
              </h3>

              <div className="mt-6 flex items-center justify-center gap-4">
                <button className="min-w-[90px] rounded-md bg-[#233A73] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b2d5a]">
                  Yes
                </button>
                <button className="min-w-[90px] rounded-md bg-[#233A73] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b2d5a]">
                  No
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] lg:block xl:w-[54%]">
          <Image
            src="/hero-couple.png"
            alt="Happy senior couple"
            fill
            priority
            className="object-contain object-right-bottom"
          />
        </div>

        {/* Mobile / Tablet Hero Image */}
        <div className="relative mx-auto block h-[260px] w-full max-w-7xl px-4 sm:h-[340px] sm:px-6 lg:hidden">
          <Image
            src="/hero.png"
            alt="Happy senior couple"
            fill
            priority
            className="object-contain object-center"
          />
        </div>

        {/* Norton Logo */}
        <div className="absolute bottom-4 right-4 z-20 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
          <Image
            src="/norton-logo.svg"
            alt="Norton Secured"
            width={120}
            height={64}
            className="h-auto w-20 sm:w-24 md:w-28"
          />
        </div>
      </div>

      {/* Quote Strip / Third Image */}
      <div className="bg-[#233A73]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row">
          <h3 className="text-center text-xl font-bold text-white sm:text-2xl md:text-left md:text-3xl">
            We do the shopping. You do the saving.
          </h3>

         <form className="flex w-full max-w-sm items-stretch justify-center md:w-auto">
  <input
    type="text"
    placeholder="Enter Zip"
    className="w-full rounded-l-md border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/80 outline-none"
  />
  <button
    type="submit"
    className="rounded-r-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
  >
    Get Quote
  </button>
</form>

        </div>
      </div>
    </section>
  );
}
