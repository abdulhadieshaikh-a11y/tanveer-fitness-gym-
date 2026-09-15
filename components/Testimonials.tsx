const QUOTES = [
  {
    quote:
      "I'd tried two other gyms in Multan before this one. The difference is the coaching — they actually watch your squat and fix it, they don't just hand you a card.",
    name: "Ahmed Raza",
    detail: "Member since 2019",
  },
  {
    quote:
      "The women-only hours made it possible for me to start at all. Two years later I'm still here, and I've kept every kilo of the weight off.",
    name: "Sana Malik",
    detail: "Member since 2022",
  },
  {
    quote:
      "Close enough to Chungi #6 that I can walk over after work. That alone is why I still show up four days a week.",
    name: "Bilal Hussain",
    detail: "Member since 2021",
  },
];

export default function Testimonials() {
  return (
    <section className="texture-bone">
      <div className="container-x py-20 md:py-28">
        <h2 className="font-display text-4xl font-bold text-iron-950 sm:text-5xl">
          From the floor
        </h2>

        <div className="rule mt-12 grid gap-x-8 gap-y-10 border-t pt-10 md:mt-16 md:grid-cols-3">
          {QUOTES.map((item) => (
            <figure key={item.name} className="flex h-full flex-col">
              <blockquote className="flex-1 font-display text-[22px] font-medium leading-snug text-iron-900">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[14px] text-steel-500">
                <span className="font-semibold text-iron-950">{item.name}</span>
                {" — "}
                {item.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
