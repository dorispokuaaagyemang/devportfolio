export default function TextInput({ as = "input", placeholder, rows, ...props }) {
  const Comp = as;
  return (
    <Comp
      placeholder={placeholder}
      rows={rows}
      {...props}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:placeholder:text-slate-500"
    />
  );
}
