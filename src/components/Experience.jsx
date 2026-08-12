import Card from "./ui/Card";
import SectionLabel from "./ui/SectionLabel";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-10">
      <SectionLabel>Experience</SectionLabel>
      <Card className="p-6 sm:p-8">
        <ol className="space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
          {EXPERIENCE.map((item) => (
            <li key={item.role} className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-violet-500 ring-4 ring-white dark:ring-slate-900" />
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.org}</p>
              <p className="mt-1 text-xs font-medium text-violet-500 dark:text-violet-400">
                {item.period}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}
