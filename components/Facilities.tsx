import {
  IconFreeWeights,
  IconTurf,
  IconCardio,
  IconLocker,
  IconRecovery,
  IconFunctional,
} from "./icons";

const FACILITIES = [
  { icon: IconFreeWeights, name: "Free weights zone", detail: "Full rack of Olympic bars, bumper and iron plates from 1.25kg to 25kg, and six power racks." },
  { icon: IconTurf, name: "Functional turf", detail: "Sled pushes, battle ropes, and sandbags on a dedicated 40ft turf strip." },
  { icon: IconCardio, name: "Cardio deck", detail: "Treadmills, spin bikes, and rowers facing the street-side windows." },
  { icon: IconFunctional, name: "Machines & cables", detail: "A full circuit of selectorized machines for accessory and rehab work." },
  { icon: IconLocker, name: "Locker rooms", detail: "Separate men's and women's changing rooms with hot-water showers." },
  { icon: IconRecovery, name: "Recovery corner", detail: "Foam rollers, resistance bands, and a stretching mat area, no booking needed." },
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
          <p className="max-w-sm text-[16px] leading-relaxed text-steel-300 md:col-span-5 md:col-start-8">A bright, considered training space with the equipment and breathing room to make every set count.</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="image-wash h-64 sm:col-span-2 sm:h-80"><img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85" alt="Gym floor with strength equipment" className="h-full w-full object-cover" /></div>
          <div className="image-wash h-64 sm:h-80"><img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85" alt="Athlete lifting a barbell" className="h-full w-full object-cover" /></div>
          <div className="image-wash h-64 sm:h-80"><img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85" alt="Modern gym machines and free weights" className="h-full w-full object-cover" /></div>
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
