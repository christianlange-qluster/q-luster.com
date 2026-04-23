import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "./sections/Hero";
import { Bottleneck } from "./sections/Bottleneck";
import { Breakthrough } from "./sections/Breakthrough";
import { WhyNow } from "./sections/WhyNow";
import { Product } from "./sections/Product";
import { Team } from "./sections/Team";
import { Contact } from "./sections/Contact";

/**
 * ▼▼▼ LAUNCH SWITCH ▼▼▼
 *
 *   Set to `true` when ready to publish q-luster.com publicly.
 *   While `false`, the homepage returns a real 404 (Vercel serves the
 *   branded not-found page) so the site stays private during dev.
 *
 *   Override locally for testing: set NEXT_PUBLIC_SITE_LIVE=true in
 *   .env.local (or just set this const to true and remember to flip
 *   back before pushing).
 */
const SITE_PUBLISHED = false;

const isLive =
  SITE_PUBLISHED ||
  process.env.NEXT_PUBLIC_SITE_LIVE === "true" ||
  process.env.NODE_ENV === "development";

export default function Home() {
  if (!isLive) {
    notFound();
  }

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
