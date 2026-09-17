import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Programs from "@/components/Programs";
import Timings from "@/components/Timings";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Programs />
        <Timings />
        <Facilities />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
}
