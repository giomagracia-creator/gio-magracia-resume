"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-stone-900 transition hover:text-teal-700">Gio Franz Magracia</a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => <a key={l.href} href={l.href} className="text-sm text-slate-600 transition hover:text-teal-700">{l.label}</a>)}
          <a href="https://www.linkedin.com/in/giofranzmagracia" target="_blank" rel="noopener noreferrer" className="rounded-full border border-teal-700/25 bg-teal-700/8 px-3.5 py-1.5 text-sm font-medium text-teal-800 transition hover:bg-teal-700/15">LinkedIn</a>
        </nav>
        <button type="button" aria-label="Toggle menu" className="rounded-lg border border-stone-300 p-2 text-slate-700 transition hover:border-teal-700/50 hover:text-teal-800 md:hidden" onClick={() => setOpen((v) => !v)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-stone-200 md:hidden">
            <div className="flex flex-col gap-1 px-5 py-3">
              {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-stone-100 hover:text-teal-800">{l.label}</a>)}
              <a href="https://www.linkedin.com/in/giofranzmagracia" target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2.5 text-sm text-teal-800 hover:bg-stone-100">LinkedIn</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
