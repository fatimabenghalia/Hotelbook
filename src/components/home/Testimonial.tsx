import { Reveal } from '../ui/Reveal'

export function Testimonial() {
  return (
    <section className="py-32 md:py-40 px-8 md:px-16" style={{ background: 'var(--color-charcoal)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="text-5xl mb-10" style={{ color: 'var(--color-gold-dim)', fontFamily: 'var(--font-display)' }}>
            &ldquo;
          </div>
          <blockquote
            className="mb-10"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: 'var(--color-ivory)',
            }}
          >
            Nothing prepares you for the moment you realize the city below has become irrelevant.
          </blockquote>
          <div className="w-12 h-px mx-auto mb-6" style={{ background: 'var(--color-gold)' }} />
          <p className="text-xs tracking-widest" style={{ color: 'var(--color-smoke)' }}>
            ELENA VASQUEZ · HORIZON SUITE · MAY 2026
          </p>
        </Reveal>
      </div>
    </section>
  )
}
