export default function Philosophy() {
  return (
    <section className="texture-bone">
      <div className="container-x grid gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl font-bold leading-[0.95] text-iron-950 sm:text-5xl">
            No shortcuts.
            <br />
            No gimmicks.
          </h2>
        </div>
        <div className="space-y-6 text-[17px] leading-relaxed text-steel-700 md:col-span-7 md:col-start-6">
          <p>
            Tanveer Fitness was started with one idea: give Gulgasht a gym
            that takes training seriously without the noise. That means real
            barbells and plates, machines that are kept in working order, and
            coaches who correct your form instead of just counting your reps.
          </p>
          <p>
            We run a floor for beginners learning the basics and for lifters
            chasing a personal best — separate hours, separate space, and a
            program for each. Whatever brought you in, someone on our team
            has trained for the same goal and can show you the way there.
          </p>
          <div className="rule grid grid-cols-3 gap-6 border-t pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-rust-600">6AM–11PM</p>
              <p className="mt-1 text-[13px] text-steel-500">Open daily</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-rust-600">7</p>
              <p className="mt-1 text-[13px] text-steel-500">Days a week</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-rust-600">2–5PM</p>
              <p className="mt-1 text-[13px] text-steel-500">Women-only hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
