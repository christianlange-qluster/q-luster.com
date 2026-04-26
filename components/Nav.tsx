"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
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
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 min-h-16 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <Link href="#top" className="flex items-center gap-2.5 group shrink-0">
          <Logo className="h-7 w-7 text-cyan transition-colors group-hover:text-cyan-soft" />
          <span className="heading text-fg text-lg tracking-tight">QLuster</span>
        </Link>

        {/* Mobile: grid of pill buttons */}
        <div className="grid grid-cols-5 gap-1 sm:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex min-w-0 items-center justify-center rounded-full border px-1.5 py-1.5 text-[0.7rem] transition-colors ${
                item.href === "#contact"
                  ? "border-cyan/40 bg-cyan/10 font-medium text-cyan-soft hover:bg-cyan/20 hover:border-cyan/60"
                  : "border-border/70 bg-surface/30 text-fg/80 hover:border-cyan/40 hover:text-cyan-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop: flex row */}
        <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex min-w-0 items-center justify-center rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                item.href === "#contact"
                  ? "border-cyan/40 bg-cyan/10 font-medium text-cyan-soft hover:bg-cyan/20 hover:border-cyan/60"
                  : "border-border/70 bg-surface/30 text-fg/80 hover:border-cyan/40 hover:text-cyan-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
