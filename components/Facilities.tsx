import {
  IconFreeWeights,
  IconTurf,
  IconCardio,
  IconLocker,
  IconRecovery,
  IconFunctional,
} from "./icons";

const FACILITIES = [
  { icon: IconFreeWeights, name: "Free weights zone", detail: "Olympic bars, bumper and iron plates from 1.25kg to 25kg, plus six power racks for squats, bench and deadlifts." },
  { icon: IconTurf, name: "Functional turf", detail: "A dedicated 40ft strip for sled pushes, battle ropes, carries and sandbag conditioning." },
  { icon: IconCardio, name: "Cardio deck", detail: "Treadmills, spin bikes and rowers facing the street-side windows for warm-ups and conditioning finishers." },
  { icon: IconFunctional, name: "Machines & cables", detail: "A complete selectorized circuit for accessory work, controlled movement and rehab-friendly training." },
  { icon: IconLocker, name: "Locker rooms", detail: "Separate men's and women's changing rooms with secure storage and hot-water showers." },
  { icon: IconRecovery, name: "Recovery corner", detail: "Foam rollers, resistance bands and a dedicated stretching area to help you leave ready for the next session." },
];

export default function Facilities() {
  return (
    <section id="facility" className="texture-iron text-bone-100">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brass-400">Inside the gym</p>
            <h2 className="font-display max-w-lg text-4xl font-bold leading-[0.95] sm:text-5xl">One floor, everything you need</h2>
          </div>
          <p className="max-w-sm text-[16px] leading-relaxed text-steel-300 md:col-span-5 md:col-start-8">Everything is arranged for a better session: strong equipment, clear floor space, fresh air and the practical details that keep your routine moving.</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          <div className="group relative h-72 overflow-hidden sm:col-span-2 lg:col-span-6 lg:h-96">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=85" alt="Gym floor with strength equipment" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-iron-950/90 to-transparent p-6 pt-16"><p className="font-display text-2xl font-bold">Built for heavy work</p><p className="mt-1 text-sm text-steel-300">Power racks, plates and open floor space</p></div>
          </div>
          <div className="group relative h-72 overflow-hidden sm:h-80 lg:col-span-3 lg:h-96">
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85" alt="Athlete lifting a barbell" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-iron-950/90 to-transparent p-5 pt-14"><p className="font-display text-xl font-bold">Serious equipment</p></div>
          </div>
          <div className="group relative h-72 overflow-hidden sm:h-80 lg:col-span-3 lg:h-96">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85" alt="Modern gym machines and free weights" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-iron-950/90 to-transparent p-5 pt-14"><p className="font-display text-xl font-bold">Room to move</p></div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-y border-bone-100/15 py-8 sm:grid-cols-4">
          <div><p className="font-display text-3xl font-bold text-brass-400">6</p><p className="mt-1 text-sm text-steel-300">Power racks</p></div>
          <div><p className="font-display text-3xl font-bold text-brass-400">40 ft</p><p className="mt-1 text-sm text-steel-300">Functional turf</p></div>
          <div><p className="font-display text-3xl font-bold text-brass-400">7 days</p><p className="mt-1 text-sm text-steel-300">Open every week</p></div>
          <div><p className="font-display text-3xl font-bold text-brass-400">2</p><p className="mt-1 text-sm text-steel-300">Changing rooms</p></div>
        </div>

        <div className="rule-light mt-14 grid gap-x-8 gap-y-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility) => (
            <div key={facility.name}>
              <facility.icon className="h-8 w-8 text-brass-400" />
              <h3 className="mt-4 font-display text-xl font-bold">
                {facility.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-steel-300">
                {facility.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
