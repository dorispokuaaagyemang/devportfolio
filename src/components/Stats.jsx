import Card from "./ui/Card";
import { STATS } from "../data/portfolioData";

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <Card className="grid grid-cols-2 gap-6 p-8 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="text-2xl font-bold text-violet-500 dark:text-violet-400 sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}
