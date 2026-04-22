"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/content/site";

export function Contact() {
  const s = site.contactSection;
  const c = site.contact;

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 border-t border-border/40 overflow-hidden"
    >
      {/* Backdrop glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.08), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} sub={s.sub} align="center" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${c.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-medium text-bg hover:bg-cyan-soft transition-colors"
          >
            {c.email}
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>↗</span>
          </a>
          <a
            href={c.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-7 py-3.5 text-sm text-fg hover:border-cyan/40 hover:text-cyan-soft transition-colors mono"
          >
            {c.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
