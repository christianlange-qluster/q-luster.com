"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
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

        {/* Linker card: photon source -> quantum network */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 max-w-3xl mx-auto rounded-2xl border border-cyan/30 bg-cyan/[0.04] p-8 sm:p-10 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 0%, rgba(0,212,255,0.08), transparent 60%)",
            }}
          />
          <h3 className="heading text-xl sm:text-2xl text-fg leading-snug text-balance">
            {s.linker.title}
          </h3>
          <p className="mt-4 text-fg/85 leading-relaxed text-pretty">
            {s.linker.body}
          </p>
        </motion.div>

        {/* Capability details */}
        <div className="mt-12 grid sm:grid-cols-3 gap-3">
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
