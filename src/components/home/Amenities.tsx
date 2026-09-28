import { AMENITIES } from '../../data/amenities'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Amenities() {
  return (
    <section className="py-32 md:py-40 px-8 md:px-16 max-w-7xl mx-auto">
      <Reveal className="mb-20">
        <SectionHeading eyebrow="EXPERIENCES">
          The art of
          <br />
          <em>doing nothing — perfectly</em>
        </SectionHeading>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'rgba(201,169,110,0.1)' }}>
        {AMENITIES.map((a, i) => (
          <Reveal key={a.label} delay={i * 80}>
            <div
              className="group p-8 md:p-10 cursor-default transition-all duration-400"
              style={{ background: 'var(--color-obsidian)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-charcoal)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-obsidian)')}
            >
              <div
                className="text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 inline-block"
                style={{ color: 'var(--color-gold)' }}
              >
                {a.icon}
              </div>
              <h3
                className="text-base mb-1"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ivory)', fontWeight: 400 }}
              >
                {a.label}
              </h3>
              <p className="text-xs tracking-wider" style={{ color: 'var(--color-smoke)' }}>
                {a.sub}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
