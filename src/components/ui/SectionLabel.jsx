export default function SectionLabel({ children }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
        {children}
      </h2>
      <span className="mt-2 block h-1 w-10 rounded-full bg-violet-500" />
    </div>
  );
}
