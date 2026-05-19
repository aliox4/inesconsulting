"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquer le scroll body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-editorial ${
        scrolled
          ? "border-b border-line/60 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between sm:h-20">
        <Logo />

        {/* Navigation desktop */}
        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Navigation principale"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary hidden sm:inline-flex"
          >
            Parler de mon projet
          </a>

          {/* Toggle menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative h-10 w-10 rounded-full border border-ink/15 transition-colors hover:border-ink/40 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-ink transition-transform duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-ink transition-transform duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 z-40 origin-top overflow-hidden border-b border-line bg-paper-soft transition-all duration-300 ease-editorial md:hidden ${
          open
            ? "max-h-[80vh] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          className="container-editorial flex flex-col gap-1 py-6"
          aria-label="Navigation mobile"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-4 font-display text-2xl text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full"
          >
            Parler de mon projet
          </a>
        </nav>
      </div>
    </header>
  );
}
