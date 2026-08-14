import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Card from "./ui/Card";
import SectionLabel from "./ui/SectionLabel";
import { PROJECT_FILTERS, PROJECTS } from "../data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SectionLabel>My Projects</SectionLabel>
        <button className="mb-8 inline-flex items-center gap-1 rounded-xl border border-slate-300 px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500">
          View All Projects
        </button>
      </div>

      <div className="-mt-4 mb-6 flex flex-wrap gap-2">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
              filter === f
                ? "bg-violet-600 text-white"
                : "border border-slate-300 text-slate-500 hover:text-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <Card key={p.title} className="overflow-hidden">
            <div className={`flex h-40 items-center justify-center bg-linear-to-br ${p.gradient} text-white/70`}>
              <ExternalLink size={22} />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-500 dark:text-violet-400">
                  {p.tag}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
