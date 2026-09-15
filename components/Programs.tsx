import {
  IconFreeWeights,
  IconFunctional,
  IconCardio,
  IconRecovery,
} from "./icons";

const PROGRAMS = [
  {
    icon: IconFreeWeights,
    name: "Strength & Powerlifting",
    detail: "Squat, bench, and deadlift technique built up from an empty bar, with progressive programming for competition or personal goals.",
    tag: "Free weights floor",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: IconFunctional,
    name: "Bodybuilding",
    detail: "Split routines and hypertrophy blocks for lifters training for size and shape, with form checks built into every session.",
    tag: "Free weights + machines",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: IconCardio,
    name: "Fat Loss & Conditioning",
    detail: "Circuit-based sessions pairing resistance work with conditioning, plus a simple food plan you can actually follow in Multan.",
    tag: "Turf + cardio deck",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: IconRecovery,
    name: "Personal Coaching",
    detail: "One-to-one sessions for anyone recovering from injury, training around a health condition, or wanting a program built around them.",
    tag: "By appointment",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="texture-bone">
      <div className="container-x py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <h2 className="font-display text-4xl font-bold text-iron-950 sm:text-5xl">
            Train with a plan
          </h2>
          <p className="hidden max-w-xs text-right text-[15px] text-steel-500 sm:block">
            Every membership includes a starting assessment so your first
            week isn&rsquo;t a guess.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {PROGRAMS.map((program) => (
            <div
              key={program.name}
              className="group overflow-hidden border border-iron-950/10 bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="image-wash h-44">
                <img src={program.image} alt={`${program.name} training session`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold text-iron-950">{program.name}</h3>
                  <program.icon className="h-7 w-7 shrink-0 text-brass-500" />
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-steel-700">{program.detail}</p>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.13em] text-rust-600">{program.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
