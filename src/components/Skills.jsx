import { useState } from "react";
import Card from "./ui/Card";
import SectionLabel from "./ui/SectionLabel";
import { SKILL_TABS } from "../data/portfolioData";

export default function Skills() {
  const tabs = Object.keys(SKILL_TABS);
  const [active, setActive] = useState(tabs[0]);
  const data = SKILL_TABS[active];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
      <SectionLabel>My Skills</SectionLabel>
      <Card className="p-6 sm:p-8">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 dark:border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                active === tab
                  ? "bg-violet-600 text-white"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {data.icons.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl text-sm font-bold ${s.bg} ${s.fg}`}
              >
                {s.label}
              </div>
              <span className="text-center text-xs text-slate-500 dark:text-slate-400">
                {s.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {data.bars.map((bar) => (
            <div key={bar.label}>
              <div className="mb-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span>{bar.label}</span>
                <span className="text-slate-400 dark:text-slate-500">{bar.value}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400"
                  style={{ width: `${bar.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
