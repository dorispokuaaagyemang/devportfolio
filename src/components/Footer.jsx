export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400 dark:border-slate-800/80 dark:text-slate-500">
      © {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind CSS.
    </footer>
  );
}
