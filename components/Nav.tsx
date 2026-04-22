"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5 group">
          <Logo className="h-7 w-7 text-cyan transition-colors group-hover:text-cyan-soft" />
          <span className="heading text-fg text-lg tracking-tight">QLuster</span>
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 text-sm font-medium text-cyan-soft hover:bg-cyan/20 hover:border-cyan/60 transition-colors"
        >
          Contact
          <span aria-hidden>→</span>
        </Link>
      </nav>
    </header>
  );
}
