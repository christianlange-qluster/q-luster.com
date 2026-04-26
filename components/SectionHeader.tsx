"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, sub, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && (
          <span className="mono text-xs uppercase tracking-[0.2em] text-cyan">
            {eyebrow}
          </span>
        )}
        <h2
          className={`heading text-3xl sm:text-4xl lg:text-5xl text-fg leading-[1.1] text-balance ${
            eyebrow ? "mt-4" : ""
          }`}
        >
          {title}
        </h2>
        {sub && (
          <p className="mt-5 text-lg text-muted leading-relaxed text-pretty">
            {sub}
          </p>
        )}
      </motion.div>
    </div>
  );
}
