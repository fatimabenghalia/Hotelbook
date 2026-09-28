import { Reveal } from '../ui/Reveal'
import { StatRow } from '../ui/StatRow'

const STATS: [string, string][] = [
  ['87', 'Rooms & Suites'],
  ['34', 'Floors of Sky'],
  ['3', 'Michelin Stars'],
]

export function Intro() {
  return (
    <section className="py-32 md:py-40 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] mb-6" style={{ color: 'var(--color-gold)' }}>
            THE ASCEND PHILOSOPHY
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: 'var(--color-ivory)',
            }}
          >
            Crafted for those
            <br />
            who know the
            <br />
            <em>difference</em>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-mist)' }}>
            ASCEND is not a hotel. It is a private world — 87 rooms and suites conceived by architect Léa Marchetti
            and furnished by seven European ateliers. Every surface is an intention. Every silence, deliberate.
          </p>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-mist)' }}>
            We host fewer than 140 guests at any moment. Not by capacity — by choice.
          </p>
          <StatRow stats={STATS} />
        </Reveal>
      </div>
    </section>
  )
}
