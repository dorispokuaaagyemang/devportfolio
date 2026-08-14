import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./ui/Buttons";
import SocialIcon from "./ui/SocialIcon";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.20),transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:border-violet-500/40 dark:text-violet-300">
            Fullstack Developer
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Hi, I'm <span className="text-violet-500 dark:text-violet-400">Doris Pokuaa Agyemang</span>
            <br />I build web apps that solve real problems.
          </h1>
          <p className="mt-5 max-w-md text-slate-600 dark:text-slate-400">
            Fullstack developer specialized in building exceptional digital
            experiences. Currently focused on building accessible,
            human-centered products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton icon={ArrowRight}>View My Work</PrimaryButton>
            <SecondaryButton icon={Download}>Download CV</SecondaryButton>
          </div>
          <div className="mt-8 flex gap-3">
            <SocialIcon icon={Github} label="GitHub" />
            <SocialIcon icon={Linkedin} label="LinkedIn" />
            <SocialIcon icon={Twitter} label="Twitter" />
            <SocialIcon icon={Mail} label="Email" />
          </div>
        </div>

        <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-violet-600/30 via-fuchsia-500/15 to-transparent blur-2xl" />
          <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-[2.5rem] border border-slate-200 bg-linear-to-b from-slate-100 to-slate-200 dark:border-slate-800 dark:from-slate-800 dark:to-slate-900">
            <span className="pb-6 text-7xl">🧑🏾‍💻</span>
          </div>
          <div className="absolute -left-6 top-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sky-500 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-sky-400">
            ⚛
          </div>
          <div className="absolute -left-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-green-600 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-green-500">
            node
          </div>
          <div className="absolute -right-4 bottom-16 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-blue-600 text-xs font-bold text-white shadow-lg dark:border-slate-700">
            TS
          </div>
        </div>
      </div>
    </section>
  );
}
