"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { FounderCard } from "@/components/FounderCard";
import { site } from "@/content/site";

export function Team() {
  const s = site.team;
  return (
    <section id="team" className="relative py-28 sm:py-36 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} sub={s.sub} align="center" />

        <div className="mt-16 grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {s.founders.map((f, i) => (
            <FounderCard
              key={f.name}
              name={f.name}
              title={f.title}
              image={f.image}
              bio={f.bio}
              delay={i * 0.1}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs mono uppercase tracking-[0.2em] text-faint">
          Hover or focus a portrait to read full background
        </p>
      </div>
    </section>
  );
}
