export default function SocialIcon({ icon: Icon, href = "#", label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:border-violet-500 hover:text-violet-500 dark:border-slate-700 dark:text-slate-300 dark:hover:text-violet-400"
    >
      <Icon size={16} />
    </a>
  );
}
