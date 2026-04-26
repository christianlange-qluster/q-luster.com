"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { BlendImage } from "@/components/BlendImage";
import { site } from "@/content/site";

export function Market() {
  const s = site.market;

  return (
    <section
      id="market"
      className="relative py-28 sm:py-36 border-t border-border/40 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(244,184,96,0.07), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader title={s.title} align="center" />

        <div className="mt-14">
          <BlendImage
            src="/images/source-fanout.png"
            alt="A single QLuster photon source distributing photons across many quantum applications"
            aspect="aspect-[5/1]"
            maxWidth="max-w-6xl"
            sizes="(max-width: 1024px) 95vw, 1152px"
          />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {s.points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border/60 bg-surface/40 p-6 hover:border-gold/40 transition-colors"
            >
              <div className="mono text-xs uppercase tracking-[0.2em] text-gold">
                0{i + 1}
              </div>
              <h3 className="heading mt-4 text-xl text-fg">{point.title}</h3>
              <p className="mt-3 text-muted leading-relaxed text-pretty">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
