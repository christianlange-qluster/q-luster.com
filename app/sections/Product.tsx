"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { site } from "@/content/site";

export function Product() {
  const s = site.product;
  return (
    <section
      id="product"
      className="relative py-28 sm:py-36 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={s.eyebrow} title={s.title} sub={s.sub} />

            {/* Product visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-12 aspect-[4/3] rounded-3xl overflow-hidden border border-border/60 bg-surface"
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,212,255,0.12), transparent 70%)",
                }}
              />
              <Image
                src="/images/chip-photon-outputs.png"
                alt="QLuster nanophotonic chip with fiber-coupled photon outputs"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Spec grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
              {s.specs.map((spec, i) => (
                <StatCard
                  key={spec.label}
                  label={spec.label}
                  value={spec.value}
                  unit={spec.unit}
                  delay={i * 0.05}
                />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-sm text-muted leading-relaxed border-l-2 border-cyan/40 pl-5 text-pretty"
            >
              {s.footnote}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
