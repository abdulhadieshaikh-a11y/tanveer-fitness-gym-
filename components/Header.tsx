import { IconPhone, IconPin } from "./icons";

const NAV_LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#timings", label: "Timings" },
  { href: "#facility", label: "Facility" },
  { href: "#membership", label: "Membership" },
  { href: "#location", label: "Location" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-iron-950 text-bone-100">
        <div className="container-x flex h-9 items-center justify-between text-[13px]">
          <div className="hidden items-center gap-1.5 text-steel-300 sm:flex">
            <IconPin className="h-3.5 w-3.5 text-brass-400" />
            <span>Gulgasht Ave, near Chungi #6, Colony Block C, Multan</span>
          </div>
          <a
            href="tel:+923144274441"
            className="ml-auto flex items-center gap-1.5 font-medium tracking-wide text-bone-100 hover:text-brass-400"
          >
            <IconPhone className="h-3.5 w-3.5 text-brass-400" />
            0314 4274441
          </a>
        </div>
      </div>

      <div className="border-b border-iron-950/10 bg-bone-100/95 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-extrabold tracking-tight text-iron-950">
              TANVEER
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-rust-600">
              FITNESS
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-grow text-[15px] font-medium text-iron-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#membership"
            className="hidden shrink-0 border border-iron-950 bg-iron-950 px-5 py-2.5 text-[14px] font-semibold text-bone-100 transition-colors hover:bg-brass-500 hover:border-brass-500 sm:inline-block"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
}
