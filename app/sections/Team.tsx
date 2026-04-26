"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { FounderCard } from "@/components/FounderCard";
import { site } from "@/content/site";

export function Team() {
  const s = site.team;
  return (
    <section id="team" className="relative py-28 sm:py-36 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader title={s.title} align="center" />

        <div className="mt-12 grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
}
