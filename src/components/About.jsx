import { Code2, Users, Sparkles, BookOpen, Download } from "lucide-react";
import Card from "./ui/Card";
import SectionLabel from "./ui/SectionLabel";
import { PrimaryButton } from "./ui/Buttons";
import { ABOUT_CARDS_META } from "../data/portfolioData";

const ICONS = {
  cleanCode: Code2,
  problemSolver: Users,
  collaborative: Sparkles,
  learning: BookOpen,
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel>About Me</SectionLabel>
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-slate-700 dark:text-slate-300">
            I'm a passionate Fullstack Developer who loves building web
            applications that are fast, responsive and user-friendly.
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            I enjoy turning complex problems into simple, beautiful and
            intuitive solutions. I'm always eager to learn new technologies
            and build things that make an impact.
          </p>
          <div className="mt-6">
            <PrimaryButton icon={Download}>Download CV</PrimaryButton>
          </div>
        </div>
        <div className="relative mx-auto aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 dark:border-slate-800 dark:from-slate-800 dark:to-slate-900">
          <div className="flex h-full w-full items-center justify-center text-6xl">
            🧑🏾‍💻
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_CARDS_META.map(({ key, title, desc }) => {
          const Icon = ICONS[key];
          return (
            <Card key={key} className="p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500 dark:text-violet-400">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{desc}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
