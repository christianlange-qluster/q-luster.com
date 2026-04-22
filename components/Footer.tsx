import { Logo } from "./Logo";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-6 text-cyan/70" />
          <span className="heading text-fg/90 text-base">
            {site.brand.name}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted">
          <a
            className="hover:text-cyan-soft transition-colors"
            href={`mailto:${site.contact.email}`}
          >
            {site.contact.email}
          </a>
          <span className="hidden sm:inline text-faint">·</span>
          <span className="text-faint mono text-xs">
            © {new Date().getFullYear()} QLuster Photonics
          </span>
        </div>
      </div>
    </footer>
  );
}
