"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/content/site";

export function Bottleneck() {
  const s = site.bottleneck;
  return (
    <section id="bottleneck" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} />

        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: body copy */}
          <div className="lg:col-span-6 space-y-5">
            {s.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg text-fg/85 leading-relaxed text-pretty"
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-2xl border-l-2 border-gold bg-gold/5 p-6"
            >
              <h3 className="heading text-xl text-gold">{s.callout.title}</h3>
              <p className="mt-2 text-fg/80 text-pretty">{s.callout.body}</p>
            </motion.div>
          </div>

          {/* Right: visual — 6 quantum cubes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden border border-border/60 bg-surface">
              <Image
                src="/images/network-three-cubes.png"
                alt="Quantum processors with no way to communicate"
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 mono text-xs uppercase tracking-[0.2em] text-fg/60">
                Quantum processors → no interconnect → no scale
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
