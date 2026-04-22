"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/content/site";

export function Breakthrough() {
  const s = site.breakthrough;
  return (
    <section
      id="breakthrough"
      className="relative py-28 sm:py-36 border-t border-border/40"
    >
      {/* subtle backdrop wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,212,255,0.06), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} align="center" />

        {/* Visual — full bleed render */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 relative aspect-[16/9] sm:aspect-[21/9] max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border/60"
        >
          <Image
            src="/images/source-fanout.png"
            alt="QLuster photon source distributing photons across a quantum network"
            fill
            sizes="(max-width: 1024px) 95vw, 1024px"
            className="object-cover"
          />
        </motion.div>

        {/* Problem vs Solution */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border/60 bg-surface/40 p-7"
          >
            <span className="mono text-xs uppercase tracking-[0.2em] text-rb-red/90">
              Today
            </span>
            <h3 className="heading mt-3 text-xl text-fg">{s.problem.title}</h3>
            <p className="mt-3 text-muted leading-relaxed text-pretty">
              {s.problem.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border border-cyan/30 bg-cyan/[0.04] p-7"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 80% 0%, rgba(0,212,255,0.08), transparent 60%)",
              }}
            />
            <span className="mono text-xs uppercase tracking-[0.2em] text-cyan-soft">
              QLuster
            </span>
            <h3 className="heading mt-3 text-xl text-fg">{s.solution.title}</h3>
            <p className="mt-3 text-fg/85 leading-relaxed text-pretty">
              {s.solution.body}
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid sm:grid-cols-3 gap-3">
          {s.pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-border/60 bg-surface-2/60 p-5"
            >
              <div className="mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan">
                {p.label}
              </div>
              <div className="mt-2 text-fg font-medium">{p.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
