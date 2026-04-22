"use client";

import Image from "next/image";
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
      className="relative isolate min-h-[100svh] flex items-center pt-20 pb-16 overflow-hidden"
    >
      <PhotonGlow />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left: text */}
        <div className="lg:col-span-7 lg:pr-6">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-xs mono uppercase tracking-[0.15em] text-cyan-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-soft animate-pulse" />
              {site.hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="heading mt-6 text-5xl sm:text-6xl lg:text-7xl text-fg leading-[1.02] tracking-tight"
          >
            {site.hero.headline[0]}
            <br />
            <span className="bg-gradient-to-r from-cyan via-cyan-soft to-gold bg-clip-text text-transparent">
              {site.hero.headline[1]}
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-lg sm:text-xl text-muted leading-relaxed text-pretty"
          >
            {site.hero.sub}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={site.hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-medium text-bg hover:bg-cyan-soft transition-colors"
            >
              {site.hero.primaryCta.label}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </Link>
            <Link
              href={site.hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm text-fg hover:border-cyan/40 hover:text-cyan-soft transition-colors"
            >
              {site.hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        {/* Right: hero render */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/3] w-full">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,212,255,0.35), transparent 60%)",
              }}
            />
            <Image
              src="/images/source-between-processors.png"
              alt="QLuster photon source linking two quantum processors"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              priority
              className="object-contain relative drop-shadow-[0_0_60px_rgba(0,212,255,0.25)]"
            />
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-faint text-xs mono uppercase tracking-[0.2em]">
        <span>Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-faint to-transparent" />
      </div>
    </section>
  );
}
