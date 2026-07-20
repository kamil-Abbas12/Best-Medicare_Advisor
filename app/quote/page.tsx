import Image from "next/image";

export default function QuotePage() {
  return (
    <section className="bg-[#eef2f7]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              You are in the right place for Medicare plans, let's find your
              match!
            </h1>

            <p className="mt-8 text-xl">
              Thank you for providing your details. You're just one step away
              from meeting your Medicare needs today!
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-800">
              For immediate assistance, please don't hesitate to call the phone
              numbers provided below. Our dedicated team is here to help you
              find the coverage that suits your needs with just one call.
              Explore exclusive plan options available in your area by speaking
              to one of our experienced benefit advisors today.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-800">
              Your call will be answered by an expert who will connect you with
              the licensed insurance agent of your state.
            </p>

            <div className="mt-10 flex max-w-xl overflow-hidden rounded-lg border bg-white shadow">
              <div className="flex-1 p-6">
                <h2 className="text-4xl font-bold text-[#233A73]">
                  1-844-767-6458
                </h2>

                <p className="mt-2 text-xl font-semibold">
                  TTY: 1-877-486-2048
                </p>
              </div>

              <div className="flex items-center border-l px-8">
                <div>
                  <p className="text-xl font-semibold">
                    Mon - Fri:
                  </p>

                  <p className="text-xl font-semibold">
                    8am - 9pm ET
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div>
            <Image
              src="/call.png"
              alt="Advisor"
              width={700}
              height={800}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}