"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/data/content";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || menuOpen
          ? "border-steel/40 bg-graphite/95 backdrop-blur-md"
          : "border-mist/10 bg-graphite/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-2.5 text-mist [animation:fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
        >
          <Logo
            className="w-auto shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            style={{ height: "34px" }}
          />
          <span className="ml-1.5 hidden items-center gap-1.5 border-l border-mist/20 pl-3 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan [animation:blink_1.8s_ease-in-out_infinite]" />
            <span className="eyebrow text-cyan/80">Онлайн</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="focus-ring eyebrow group relative animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_both] px-4 py-2 text-mist/70 transition-colors hover:text-mist"
              style={{ animationDelay: `${0.2 + i * 0.07}s` }}
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-1 h-px scale-x-0 bg-safety transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link
          href="/#contacts"
          className="focus-ring eyebrow hidden shrink-0 animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.55s_both] border border-safety bg-safety/10 px-5 py-2.5 text-safety-2 transition-colors hover:bg-safety hover:text-mist lg:inline-block"
        >
          Связаться
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="focus-ring relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 text-mist lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-steel/30 bg-graphite transition-[max-height] duration-500 ease-out lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              onClick={() => setMenuOpen(false)}
              className="focus-ring border-b border-mist/10 py-3.5 font-display text-lg uppercase tracking-wide text-mist"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contacts"
            onClick={() => setMenuOpen(false)}
            className="focus-ring eyebrow mt-4 border border-safety bg-safety/10 px-5 py-3 text-center text-safety-2"
          >
            Связаться
          </Link>
        </nav>
      </div>
    </header>
  );
}
