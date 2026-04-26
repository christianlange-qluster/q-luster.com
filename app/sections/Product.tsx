"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { BlendImage } from "@/components/BlendImage";
import { site } from "@/content/site";

export function Product() {
  const s = site.product;

  return (
    <section
      id="product"
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
        <SectionHeader title={s.title} align="center" />

        {/* Linker text + visual */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <h3 className="heading text-2xl sm:text-3xl text-fg leading-snug text-balance">
              {s.linker.title}
            </h3>
            <p className="mt-5 text-lg text-fg/85 leading-relaxed text-pretty">
              {s.linker.body}
            </p>
          </motion.div>

          <BlendImage
            src="/images/problem-vs-solution.png"
            alt="Slow probabilistic photon source vs. QLuster's deterministic source"
            aspect="aspect-[4/3]"
            maxWidth="max-w-xl"
            sizes="(max-width: 1024px) 90vw, 560px"
          />
        </div>

        {/* Today vs QLuster */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border/60 bg-surface/40 p-7"
          >
            <span className="mono text-xs uppercase tracking-[0.2em] text-rb-red/90">
              {s.problem.title}
            </span>
            <p className="mt-3 text-muted leading-relaxed text-pretty">
              {s.problem.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border border-cyan/30 bg-cyan/[0.04] p-7 overflow-hidden"
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
              {s.solution.title}
            </span>
            <p className="mt-3 text-fg/85 leading-relaxed text-pretty">
              {s.solution.body}
            </p>
          </motion.div>
        </div>

        {/* Capability details */}
        <div className="mt-16 grid sm:grid-cols-3 gap-3">
          {s.capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-border/60 bg-surface-2/60 p-5 hover:border-cyan/40 transition-colors"
            >
              <div className="mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan">
                {cap.title}
              </div>
              <p className="mt-2 text-sm text-fg/85 leading-relaxed text-pretty">
                {cap.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
