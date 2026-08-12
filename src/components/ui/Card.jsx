export default function Card({ children, className = "", id }) {
  return (
    <div
      id={id}
      className={`rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 ${className}`}
    >
      {children}
    </div>
  );
}
