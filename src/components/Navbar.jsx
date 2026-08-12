import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-slate-900 dark:text-white">
          <span className="rounded-lg bg-violet-500/10 px-2 py-1 font-mono text-sm text-violet-600 dark:bg-violet-600/20 dark:text-violet-400">
            {"</>"}
          </span>
          <span className="text-lg font-semibold">DevPortfolio</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition hover:text-violet-500 dark:hover:text-violet-400 ${
                i === 0 ? "text-violet-600 dark:text-violet-400" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:border-violet-500 hover:text-violet-500 dark:border-slate-700 dark:text-slate-300 dark:hover:text-violet-400"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-500 dark:border-slate-700 dark:text-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-3 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-violet-500 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
