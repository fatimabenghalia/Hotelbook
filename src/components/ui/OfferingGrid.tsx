import type { Offering } from '../../data/pages'
import { Reveal } from './Reveal'

export function OfferingGrid({ offerings }: { offerings: Offering[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {offerings.map((o, i) => (
        <Reveal key={o.title} delay={(i % 2) * 120}>
          <article className="room-card h-full" style={{ border: '1px solid rgba(201,169,110,0.12)' }}>
            <div className="img-reveal overflow-hidden" style={{ height: '300px' }}>
              <img
                src={o.img}
                alt={o.title}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.75)' }}
              />
            </div>
            <div className="p-8">
              <p className="text-xs tracking-widest mb-3" style={{ color: 'var(--color-gold)' }}>
                {o.meta}
              </p>
              <h3
                className="mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--color-ivory)' }}
              >
                {o.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-mist)' }}>
                {o.desc}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
