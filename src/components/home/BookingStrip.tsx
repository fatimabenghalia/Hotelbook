import { Link } from 'react-router-dom'
import { GoldButton } from '../ui/GoldButton'
import { Reveal } from '../ui/Reveal'

const FIELDS = [
  { label: 'CHECK IN', placeholder: 'Select date' },
  { label: 'CHECK OUT', placeholder: 'Select date' },
  { label: 'GUESTS', placeholder: '2 Adults' },
  { label: 'ROOM TYPE', placeholder: 'Any preference' },
]

export function BookingStrip() {
  return (
    <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
      <Reveal>
        <div
          className="grid md:grid-cols-4 gap-px overflow-hidden rounded-sm"
          style={{ background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.2)' }}
        >
          {FIELDS.map(f => (
            <Link
              key={f.label}
              to="/reserve"
              className="px-6 py-5 transition-colors duration-200"
              style={{ background: 'var(--color-graphite)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-graphite)')}
            >
              <p className="text-xs tracking-widest mb-2" style={{ color: 'var(--color-gold)' }}>
                {f.label}
              </p>
              <p className="text-sm" style={{ color: 'var(--color-mist)' }}>
                {f.placeholder}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <GoldButton to="/reserve" label="CHECK AVAILABILITY" className="px-16 py-4" />
        </div>
      </Reveal>
    </section>
  )
}
