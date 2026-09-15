import { IconPin, IconPhone, IconClock } from "./icons";

const ADDRESS =
  "Gulgasht Ave, near Chungi #6, Colony Block C, Multan, 60700, Pakistan";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS
)}`;

export default function Location() {
  return (
    <section id="location" className="texture-iron text-bone-100">
      <div className="container-x grid gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl font-bold leading-[0.95] sm:text-5xl">
            Find us in
            <br />
            Colony Block C
          </h2>

          <dl className="rule-light mt-10 space-y-6 border-t pt-8">
            <div className="flex gap-4">
              <IconPin className="mt-1 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <dt className="text-[13px] text-steel-300">Address</dt>
                <dd className="mt-1 text-[16px]">
                  Gulgasht Ave, near Chungi #6,
                  <br />
                  Colony Block C, Multan, 60700
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <IconPhone className="mt-1 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <dt className="text-[13px] text-steel-300">Phone</dt>
                <dd className="mt-1 text-[16px]">
                  <a href="tel:+923144274441" className="link-grow">
                    0314 4274441
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <IconClock className="mt-1 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <dt className="text-[13px] text-steel-300">Hours</dt>
                <dd className="mt-1 text-[16px]">
                  Every day, 6:00 AM – 11:00 PM
                </dd>
              </div>
            </div>
          </dl>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block bg-brass-500 px-7 py-3.5 text-[15px] font-semibold text-iron-950 transition-colors hover:bg-brass-400"
          >
            Get directions
          </a>
        </div>

        <div className="md:col-span-7">
          <iframe
            title="Tanveer Fitness location map"
            src={MAP_SRC}
            className="h-[380px] w-full grayscale-[15%] md:h-full"
            style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
