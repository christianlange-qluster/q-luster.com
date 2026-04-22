"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/content/site";

export function WhyNow() {
  const s = site.whyNow;
  return (
    <section id="why-now" className="relative py-28 sm:py-36 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} sub={s.sub} />

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* horizontal connecting line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[42px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {s.steps.map((step, i) => (
              <motion.div
                key={step.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Node dot */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`relative h-7 w-7 rounded-full flex items-center justify-center ${
                        step.current
                          ? "bg-cyan"
                          : "bg-surface-2 border border-border"
                      }`}
                    >
                      {step.current && (
                        <span className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-60" />
                      )}
                      <span
                        className={`relative mono text-[0.65rem] font-bold ${
                          step.current ? "text-bg" : "text-muted"
                        }`}
                      >
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="lg:mt-6">
                    <div
                      className={`mono text-xs uppercase tracking-[0.2em] ${
                        step.current ? "text-cyan" : "text-faint"
                      }`}
                    >
                      {step.period}
                    </div>
                    <h3
                      className={`heading mt-2 text-lg ${
                        step.current ? "text-fg" : "text-fg/85"
                      }`}
                    >
                      {step.heading}
                      {step.current && (
                        <span className="ml-2 text-xs mono normal-case tracking-normal text-cyan-soft">
                          ← now
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed text-pretty">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
