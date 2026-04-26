"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhotonGlow } from "@/components/PhotonGlow";
import { site } from "@/content/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] flex items-center pt-40 sm:pt-28 pb-16 overflow-hidden"
    >
      <PhotonGlow />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 w-full text-center">
        <motion.h1
          {...fadeUp(0)}
          className="heading text-5xl sm:text-7xl lg:text-8xl text-fg leading-[1.02] tracking-tight text-balance"
        >
          {site.hero.headline[0]}
          <br />
          <span className="bg-gradient-to-r from-cyan via-cyan-soft to-gold bg-clip-text text-transparent">
            {site.hero.headline[1]}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.12)}
          className="mt-8 mx-auto max-w-2xl text-lg sm:text-xl text-muted leading-relaxed text-pretty"
        >
          {site.hero.sub}
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={site.hero.primaryCta.href}
            className="inline-flex items-center rounded-full bg-cyan px-7 py-3.5 text-sm font-medium text-bg hover:bg-cyan-soft transition-colors"
          >
            {site.hero.primaryCta.label}
          </Link>
          <Link
            href={site.hero.secondaryCta.href}
            className="inline-flex items-center rounded-full border border-border bg-surface/40 px-7 py-3.5 text-sm text-fg hover:border-cyan/40 hover:text-cyan-soft transition-colors"
          >
            {site.hero.secondaryCta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
