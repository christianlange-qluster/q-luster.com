import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Product } from "./sections/Product";
import { Market } from "./sections/Market";
import { Team } from "./sections/Team";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Product />
        <Market />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
