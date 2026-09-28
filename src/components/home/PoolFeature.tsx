import { GoldButton } from '../ui/GoldButton'
import { Reveal } from '../ui/Reveal'

export function PoolFeature() {
  return (
    <section className="relative overflow-hidden" style={{ height: '80vh', minHeight: '500px' }}>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1644329685726-22a3af3f705c?w=1600&h=900&fit=crop&auto=format"
          alt="ASCEND rooftop infinity pool illuminated at night overlooking Monaco"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) saturate(0.7)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,9,8,0.7) 100%)' }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <p className="text-xs tracking-[0.3em] mb-6" style={{ color: 'var(--color-gold)' }}>
            ROOFTOP · FLOOR 34
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontWeight: 300,
              color: 'var(--color-ivory)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Infinity Pool
            <br />
            at 110 metres
          </h2>
          <p className="max-w-sm mx-auto mb-10 text-base" style={{ color: 'var(--color-mist)', lineHeight: 1.8 }}>
            Open year-round. Temperature-controlled to 32°C. Champagne service until midnight.
          </p>
          <GoldButton to="/experiences" label="DISCOVER THE POOL" />
        </Reveal>
      </div>
    </section>
  )
}
