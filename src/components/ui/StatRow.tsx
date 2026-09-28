export function StatRow({ stats }: { stats: [string, string][] }) {
  return (
    <div className="flex flex-wrap items-center gap-10 md:gap-16">
      {stats.map(([n, label]) => (
        <div key={label}>
          <div className="number-display">{n}</div>
          <p className="text-xs tracking-widest mt-1" style={{ color: 'var(--color-smoke)' }}>
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}
