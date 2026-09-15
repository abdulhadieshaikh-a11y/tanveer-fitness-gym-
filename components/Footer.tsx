export default function Footer() {
  return (
    <footer className="bg-iron-950 text-steel-300">
      <div className="container-x flex flex-col gap-6 py-10 text-[14px] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xl font-bold text-bone-100">
          TANVEER <span className="text-rust-600">FITNESS</span>
        </p>
        <p>
          Gulgasht Ave, near Chungi #6, Colony Block C, Multan, 60700 &middot;{" "}
          <a href="tel:+923144274441" className="link-grow text-bone-100">
            0314 4274441
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Tanveer Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
}
