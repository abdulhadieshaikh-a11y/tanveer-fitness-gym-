const HOURS = [
  { day: "Monday - Friday", hours: "6:00 AM - 11:00 PM", note: "Women-only 2:00 - 5:00 PM" },
  { day: "Saturday", hours: "7:00 AM - 10:00 PM", note: "Open gym floor" },
  { day: "Sunday", hours: "8:00 AM - 8:00 PM", note: "Recovery-friendly pace" },
];

export default function Timings() {
  return (
    <section id="timings" className="bg-[#e8eee9]">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#d95b3e]">Plan your session</p>
          <h2 className="font-display text-4xl font-bold leading-[0.95] text-iron-950 sm:text-5xl">Good hours make good habits.</h2>
          <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-steel-700">Come early for a quiet floor, or train after work with the full crew. Your membership gives you room to build a routine that lasts.</p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="border-t border-iron-950/15">
            {HOURS.map((item, index) => (
              <div key={item.day} className="grid gap-2 border-b border-iron-950/15 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
                <div>
                  <p className="font-display text-2xl font-bold text-iron-950">{item.day}</p>
                  <p className="mt-1 text-sm text-steel-500">{item.note}</p>
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
