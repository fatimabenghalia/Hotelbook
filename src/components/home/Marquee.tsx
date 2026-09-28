import { MARQUEE_ITEMS } from '../../data/site'

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        borderTop: '1px solid rgba(201,169,110,0.15)',
        borderBottom: '1px solid rgba(201,169,110,0.15)',
        background: 'var(--color-charcoal)',
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="text-xs tracking-[0.3em] mx-8" style={{ color: 'var(--color-gold-dim)' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
