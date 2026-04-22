"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  name: string;
  title: string;
  image: string;
  bio: string;
  delay?: number;
};

export function FounderCard({ name, title, image, bio, delay = 0 }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-surface focus:outline-none focus:ring-2 focus:ring-cyan/60 focus:ring-offset-2 focus:ring-offset-bg"
    >
      {/* Portrait — desaturates slightly on hover to make text legible */}
      <Image
        src={image}
        alt={`Portrait of ${name}`}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 480px"
        className={`object-cover object-center transition-all duration-700 ${
          hovered ? "scale-105 brightness-[0.4]" : "scale-100 brightness-100"
        }`}
        priority={false}
      />

      {/* Bottom gradient + name (always visible) */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-bg via-bg/80 to-transparent pointer-events-none">
        <h3 className="heading text-2xl text-fg">{name}</h3>
        <p className="mono text-xs text-cyan-soft uppercase tracking-wider mt-1">
          {title}
        </p>
      </div>

      {/* Hover overlay — bio fades in */}
      <motion.div
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : 12,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 pointer-events-none"
      >
        <h3 className="heading text-2xl text-fg">{name}</h3>
        <p className="mono text-xs text-cyan-soft uppercase tracking-wider mt-1 mb-4">
          {title}
        </p>
        <p className="text-sm sm:text-[0.95rem] text-fg/90 leading-relaxed max-w-md">
          {bio}
        </p>
      </motion.div>

      {/* Cyan border glow on hover */}
      <div
        aria-hidden
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: "inset 0 0 0 1px rgba(0,212,255,0.45), 0 0 60px -10px rgba(0,212,255,0.4)",
        }}
      />
    </motion.div>
  );
}
