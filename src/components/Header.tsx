"use client";

import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "01 山之誌" },
  { href: "/#mountains", label: "02 山林秘境" },
  { href: "/blog", label: "03 山林生態" },
  { href: "/#footer", label: "04 聯絡我們" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-[#f7f1e1]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-4 py-5 sm:px-6">
        <a href="/" className="flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl font-bold tracking-tight text-emerald-950">
            台灣山林
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-emerald-700/50 sm:inline">
            Taiwan Ranges
          </span>
        </a>

        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.2em] text-emerald-900 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "關閉選單" : "開啟選單"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-emerald-950 transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-emerald-950 transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        className={`grid overflow-hidden border-t border-emerald-950/10 bg-[#f7f1e1] text-xs uppercase tracking-[0.2em] text-emerald-900 transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 transition-colors hover:bg-emerald-950/5 hover:text-amber-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
