"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { BlendImage } from "@/components/BlendImage";
import { site } from "@/content/site";

export function Problem() {
  const s = site.problem;
  return (
    <section id="problem" className="relative py-28 sm:py-36 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader title={s.title} align="center" />

        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Body copy */}
          <div className="space-y-5 max-w-xl mx-auto lg:mx-0">
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
          </div>

          {/* Visual */}
          <BlendImage
            src="/images/network-three-cubes.png"
            alt="Three quantum processors connected as a small quantum network"
            aspect="aspect-[4/3]"
            maxWidth="max-w-xl"
            sizes="(max-width: 1024px) 90vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}
