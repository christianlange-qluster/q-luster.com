"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  value: string;
  unit?: string;
  delay?: number;
};

export function StatCard({ label, value, unit, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-border/60 bg-surface/40 p-6 backdrop-blur-sm hover:border-cyan/40 transition-colors"
    >
      {/* subtle inner glow on hover */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, rgba(0,212,255,0.08), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="flex items-baseline gap-1.5">
          <span className="heading text-4xl sm:text-5xl text-fg tabular-nums">
            {value}
          </span>
          {unit && (
            <span className="mono text-sm text-cyan-soft uppercase tracking-wider">
              {unit}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-muted leading-relaxed">{label}</p>
      </div>
    </motion.div>
  );
}
