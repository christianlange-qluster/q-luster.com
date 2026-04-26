"use client";

import { motion } from "framer-motion";
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
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="heading text-3xl sm:text-4xl lg:text-5xl text-fg leading-[1.1] text-balance"
        >
          {s.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex items-center justify-center"
        >
          <a
            href={`mailto:${c.email}`}
            className="inline-flex items-center rounded-full bg-cyan px-8 py-3.5 text-sm font-medium text-bg hover:bg-cyan-soft transition-colors"
          >
            {c.ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
