const STATS = [
  { value: "2014", label: "Opened on Gulgasht Ave" },
  { value: "1,200+", label: "Members trained" },
  { value: "9,000", label: "Sq. ft of floor space" },
  { value: "6", label: "Full-time coaches" },
];

export default function Hero() {
  return (
    <section id="top" className="texture-iron relative overflow-hidden text-bone-100">
      <div className="absolute inset-0 image-wash">
        <img src="https://images.unsplash.com/photo-1689877020200-403d8542d95d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltc3xlbnwwfHwwfHx8MA%3D%3D" alt="Athlete training in the Tanveer Fitness gym" className="h-full w-full object-cover opacity-45" />
      </div>
      <div className="container-x relative grid gap-12 pb-20 pt-16 md:grid-cols-12 md:gap-8 md:pb-28 md:pt-24">
        <div className="reveal-up md:col-span-7">
          <h1 className="font-display text-[15vw] font-extrabold leading-[0.86] tracking-tightest text-bone-100 sm:text-[9vw] md:text-[5.4vw]">
            Strength,
            <br />
            built on
            <br />
            <span className="text-brass-400">Gulgasht Ave.</span>
          </h1>

          <p className="mt-8 max-w-md text-[17px] leading-relaxed text-steel-300">
            Tanveer Fitness is a straightforward strength and conditioning gym
            in Colony Block C, Multan — free weights, honest coaching, and a
            floor built for people who show up and do the work.
          </p>

          <div className="mt-7 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 border-y border-bone-100/20 py-4 text-sm text-bone-200 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-brass-400">7 days</p>
              <p className="mt-1 text-steel-300">Open every week</p>
            </div>
            <div>
              <p className="font-semibold text-brass-400">3 - 5 PM</p>
              <p className="mt-1 text-steel-300">Ladies-only hours</p>
            </div>
            <div>
              <p className="font-semibold text-brass-400">Free trial</p>
              <p className="mt-1 text-steel-300">Visit the floor</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:+923144274441"
              className="bg-brass-500 px-7 py-3.5 text-[15px] font-semibold text-iron-950 transition-colors hover:bg-brass-400"
            >
              Call for a free trial
            </a>
            <a
              href="#membership"
              className="link-grow border-b border-transparent py-3.5 text-[15px] font-medium text-bone-100"
            >
              See membership plans
            </a>
          </div>
        </div>

        <div className="hidden items-end justify-center md:col-span-5 md:flex">
          <div className="border-l border-brass-400/70 pl-6 text-sm text-bone-200">
            <p className="font-display text-3xl font-bold text-brass-400">Train your way</p>
            <p className="mt-2 max-w-[180px] leading-relaxed">Strength equipment, practical coaching, and dedicated ladies-only hours.</p>
          </div>
        </div>
      </div>

      <div className="rule-light border-t">
        <dl className="container-x grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="display-num font-display text-4xl font-bold text-brass-400 sm:text-5xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-[13px] text-steel-300">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
