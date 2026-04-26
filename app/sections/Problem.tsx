"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/content/site";

export function Problem() {
  const s = site.problem;
  return (
    <section id="problem" className="relative py-28 sm:py-36 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeader title={s.title} align="center" />

        <div className="mt-12 space-y-5 max-w-2xl mx-auto">
          {s.body.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-fg/85 leading-relaxed text-pretty text-center"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
