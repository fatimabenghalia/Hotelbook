import { Link } from 'react-router-dom'
import { HOTEL } from '../../data/site'
import { useParallax } from '../../hooks/useParallax'
import { GoldButton } from '../ui/GoldButton'

export function Hero() {
  const parallaxBg = useParallax(0.25)

  return (
    <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center">
      <div ref={parallaxBg} className="absolute inset-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1759462692354-404b2c995c99?w=1600&h=1000&fit=crop&auto=format"
          alt="ASCEND Hotel lobby — a luminous contemporary space with curated art installations"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45) saturate(0.8)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,9,8,0.3) 0%, transparent 30%, rgba(10,9,8,0.7) 100%)',
          }}
        />
      </div>

      <div
        className="absolute top-24 left-8 md:left-16 w-12 h-12"
        style={{ borderTop: '1px solid rgba(201,169,110,0.4)', borderLeft: '1px solid rgba(201,169,110,0.4)' }}
      />
      <div
        className="absolute top-24 right-8 md:right-16 w-12 h-12"
        style={{ borderTop: '1px solid rgba(201,169,110,0.4)', borderRight: '1px solid rgba(201,169,110,0.4)' }}
      />
      <div
        className="absolute bottom-16 left-8 md:left-16 w-12 h-12"
        style={{ borderBottom: '1px solid rgba(201,169,110,0.4)', borderLeft: '1px solid rgba(201,169,110,0.4)' }}
      />
      <div
        className="absolute bottom-16 right-8 md:right-16 w-12 h-12"
        style={{ borderBottom: '1px solid rgba(201,169,110,0.4)', borderRight: '1px solid rgba(201,169,110,0.4)' }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="animate-fade-in delay-100 text-xs tracking-[0.35em] mb-8" style={{ color: 'var(--color-gold)' }}>
          {HOTEL.tagline}
        </p>
        <h1
          className="animate-fade-up delay-200 leading-none mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            fontWeight: 300,
            color: 'var(--color-ivory)',
            letterSpacing: '-0.02em',
          }}
        >
          Where Silence
          <br />
          <em style={{ fontStyle: 'italic' }}>Speaks Luxury</em>
        </h1>
        <p
          className="animate-fade-up delay-300 text-base md:text-lg max-w-md mx-auto mb-12"
          style={{ color: 'var(--color-mist)', lineHeight: 1.8 }}
        >
          Thirty-four floors above Monaco. An address that needs no introduction.
        </p>
        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <GoldButton to="/rooms" label="EXPLORE ROOMS" />
          <Link
            to="/experiences"
            className="text-xs tracking-widest underline underline-offset-4"
            style={{ color: 'var(--color-mist)' }}
          >
            WATCH FILM
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float">
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--color-gold-dim), transparent)' }}
        />
      </div>
    </section>
  )
}
