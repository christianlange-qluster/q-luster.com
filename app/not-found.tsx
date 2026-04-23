/**
 * Branded 404 page. Also used as the gate page when SITE_PUBLISHED is false
 * in app/page.tsx — keeps q-luster.com private until launch.
 */
import { Logo } from "@/components/Logo";

export const metadata = {
  title: "404 — Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center px-6 text-center">
      <div className="flex items-center gap-3 mb-8 opacity-70">
        <Logo className="h-6 w-6 text-cyan/70" />
        <span className="heading text-fg/80 text-sm tracking-tight">
          QLuster Photonics
        </span>
      </div>
      <p className="mono text-xs uppercase tracking-[0.25em] text-cyan">
        404
      </p>
      <h1 className="heading mt-4 text-3xl sm:text-4xl text-fg">
        Not found.
      </h1>
      <p className="mt-4 max-w-sm text-muted">
        There&apos;s nothing here.
      </p>
    </main>
  );
}
