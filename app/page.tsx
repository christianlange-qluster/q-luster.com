import { cookies } from "next/headers";
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
import { PREVIEW_COOKIE, PREVIEW_KEY } from "@/lib/preview";

/**
 * ▼▼▼ LAUNCH SWITCH ▼▼▼
 *
 *   When `false`, the homepage is private:
 *     - Public visitors see a real 404.
 *     - Anyone with the preview unlock URL can view (cookie-based).
 *
 *   When `true`, the homepage is fully public.
 *
 *   Local dev (NODE_ENV=development) is always live regardless of this flag.
 */
const SITE_PUBLISHED = false;

export default async function Home() {
  const isProdPrivate =
    !SITE_PUBLISHED && process.env.NODE_ENV === "production";

  if (isProdPrivate) {
    const cookieStore = await cookies();
    const hasPreview =
      cookieStore.get(PREVIEW_COOKIE)?.value === PREVIEW_KEY;
    if (!hasPreview) {
      notFound();
    }
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
