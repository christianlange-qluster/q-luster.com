import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "./sections/Hero";
import { Bottleneck } from "./sections/Bottleneck";
import { Breakthrough } from "./sections/Breakthrough";
import { WhyNow } from "./sections/WhyNow";
import { Product } from "./sections/Product";
import { Team } from "./sections/Team";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Bottleneck />
        <Breakthrough />
        <WhyNow />
        <Product />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
