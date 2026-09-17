const HOURS = [
  { day: "Monday", hours: "6:00 AM - 2:00 AM", note: "Boys / general access" },
  { day: "Tuesday", hours: "6:00 AM - 2:00 AM", note: "Boys / general access" },
  { day: "Wednesday", hours: "6:00 AM - 2:00 AM", note: "Boys / general access" },
  { day: "Thursday", hours: "6:00 AM - 2:00 AM", note: "Boys / general access" },
  { day: "Friday", hours: "11:00 PM - 2:00 AM", note: "Late-night training" },
  { day: "Saturday", hours: "6:00 AM - 2:00 AM", note: "Boys / general access" },
  { day: "Sunday", hours: "6:00 AM - 2:00 AM", note: "Boys / general access" },
];

export default function Timings() {
  return (
    <section id="timings" className="bg-[#e8eee9]">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#d95b3e]">Plan your session</p>
          <h2 className="font-display text-4xl font-bold leading-[0.95] text-iron-950 sm:text-5xl">Good hours make good habits.</h2>
          <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-steel-700">Train on your schedule with clear daily hours, a dedicated ladies-only slot, and a floor that stays ready for serious work.</p>
          <div className="mt-8 border-l-2 border-[#d95b3e] pl-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-iron-950">Ladies-only hours</p>
            <p className="mt-1 font-display text-2xl font-bold text-[#d95b3e]">Every day, 3:00 - 5:00 PM</p>
            <p className="mt-1 text-sm text-steel-500">A focused, comfortable training window for women.</p>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="border-t border-iron-950/15">
            {HOURS.map((item, index) => (
              <div key={item.day} className="grid gap-2 border-b border-iron-950/15 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
                <div>
                  <p className="font-display text-2xl font-bold text-iron-950">{item.day}</p>
                  <p className="mt-1 text-sm text-steel-500">{item.note} · Ladies-only 3:00 - 5:00 PM</p>
                </div>
                <p className={`font-display text-2xl font-bold ${index === 0 ? "text-[#d95b3e]" : "text-iron-900"}`}>{item.hours}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.14em] text-steel-500">Last entry is 30 minutes before closing</p>
        </div>
      </div>
    </section>
  );
}
