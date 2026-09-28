import { useState, useEffect, useRef } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      el.style.transform = `translateY(${center * speed}px)`
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [speed])
  return ref
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`section-reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const ROOMS = [
  {
    name: 'Horizon Suite',
    category: 'Suite · Floor 32',
    price: '€920',
    size: '95 m²',
    img: 'https://images.unsplash.com/photo-1637730827702-de34e9ae4ede?w=800&h=600&fit=crop&auto=format',
    desc: 'Panoramic city-to-sea views from a wraparound terrace. Custom walnut joinery, heated marble floors.',
  },
  {
    name: 'Atelier Room',
    category: 'Deluxe · Floor 18',
    price: '€480',
    size: '58 m²',
    img: 'https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?w=800&h=600&fit=crop&auto=format',
    desc: 'Gallery-white walls, curated contemporary art, and a deep soaking tub overlooking the skyline.',
  },
  {
    name: 'Garden Pavilion',
    category: 'Villa · Garden Level',
    price: '€1,280',
    size: '140 m²',
    img: 'https://images.unsplash.com/photo-1775811091644-69162fa36ea1?w=800&h=600&fit=crop&auto=format',
    desc: 'Private plunge pool, outdoor dining terrace, and direct garden access. Total seclusion.',
  },
]

const AMENITIES = [
  { icon: '◈', label: 'Infinity Pool', sub: 'Rooftop · 34th Floor' },
  { icon: '◉', label: 'Spa & Wellness', sub: '2,400 m² sanctuary' },
  { icon: '◇', label: 'Michelin Dining', sub: '3 restaurants · 1 bar' },
  { icon: '◈', label: 'Private Cinema', sub: 'Screening on request' },
  { icon: '◉', label: 'Concierge 24/7', sub: 'Personal host service' },
  { icon: '◇', label: 'Helipad Access', sub: 'Sky arrivals welcome' },
]

const MARQUEE_ITEMS = ['ARRIVE·', 'TRANSCEND·', 'LUXE·', 'ASCENDANCE·', 'PRIVACY·', 'CRAFTED·', 'TIMELESS·', 'ARRIVE·', 'TRANSCEND·', 'LUXE·', 'ASCENDANCE·', 'PRIVACY·', 'CRAFTED·', 'TIMELESS·']

export default function App() {
  const [activeRoom, setActiveRoom] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const parallaxBg = useParallax(0.25)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-obsidian)' }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(10,9,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.12)' : '1px solid transparent',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-sm flex items-center justify-center" style={{ border: '1px solid var(--color-gold)' }}>
            <span style={{ color: 'var(--color-gold)', fontSize: '10px', fontFamily: 'var(--font-display)' }}>A</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.12em', color: 'var(--color-ivory)' }}>
            ASCEND
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Rooms', 'Experiences', 'Dining', 'Spa', 'Events'].map(item => (
            <a key={item} href="#" className="nav-link text-sm tracking-widest" style={{ color: 'var(--color-mist)', letterSpacing: '0.1em' }}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        <a href="#" className="btn-gold hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-xs tracking-widest"
          style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>
          <span>RESERVE</span>
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="block w-6 h-px transition-all" style={{ background: 'var(--color-gold)', transform: menuOpen ? 'rotate(45deg) translateY(5px)' : '' }} />
          <span className="block w-6 h-px transition-all" style={{ background: 'var(--color-gold)', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all" style={{ background: 'var(--color-gold)', transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : '' }} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden"
        style={{
          backgroundColor: 'var(--color-obsidian)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
        }}>
        {['Rooms', 'Experiences', 'Dining', 'Spa', 'Events'].map(item => (
          <a key={item} href="#" onClick={() => setMenuOpen(false)}
            className="text-2xl tracking-widest" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ivory)' }}>
            {item}
          </a>
        ))}
        <a href="#" className="mt-4 px-10 py-3 text-sm tracking-widest" style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>
          RESERVE A STAY
        </a>
      </div>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center">
        <div ref={parallaxBg} className="absolute inset-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1759462692354-404b2c995c99?w=1600&h=1000&fit=crop&auto=format"
            alt="ASCEND Hotel lobby — a luminous contemporary space with curated art installations"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.45) saturate(0.8)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,9,8,0.3) 0%, transparent 30%, rgba(10,9,8,0.7) 100%)' }} />
        </div>

        {/* Decorative corner marks */}
        <div className="absolute top-24 left-8 md:left-16 w-12 h-12" style={{ borderTop: '1px solid rgba(201,169,110,0.4)', borderLeft: '1px solid rgba(201,169,110,0.4)' }} />
        <div className="absolute top-24 right-8 md:right-16 w-12 h-12" style={{ borderTop: '1px solid rgba(201,169,110,0.4)', borderRight: '1px solid rgba(201,169,110,0.4)' }} />
        <div className="absolute bottom-16 left-8 md:left-16 w-12 h-12" style={{ borderBottom: '1px solid rgba(201,169,110,0.4)', borderLeft: '1px solid rgba(201,169,110,0.4)' }} />
        <div className="absolute bottom-16 right-8 md:right-16 w-12 h-12" style={{ borderBottom: '1px solid rgba(201,169,110,0.4)', borderRight: '1px solid rgba(201,169,110,0.4)' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="animate-fade-in delay-100 text-xs tracking-[0.35em] mb-8" style={{ color: 'var(--color-gold)' }}>
            MONACO · ESTABLISHED 2019
          </p>
          <h1 className="animate-fade-up delay-200 leading-none mb-6" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            fontWeight: 300,
            color: 'var(--color-ivory)',
            letterSpacing: '-0.02em',
          }}>
            Where Silence<br />
            <em style={{ fontStyle: 'italic' }}>Speaks Luxury</em>
          </h1>
          <p className="animate-fade-up delay-300 text-base md:text-lg max-w-md mx-auto mb-12" style={{ color: 'var(--color-mist)', lineHeight: 1.8 }}>
            Thirty-four floors above Monaco. An address that needs no introduction.
          </p>
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#rooms" className="btn-gold px-10 py-4 text-xs tracking-widest" style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>
              <span>EXPLORE ROOMS</span>
            </a>
            <a href="#" className="text-xs tracking-widest underline underline-offset-4" style={{ color: 'var(--color-mist)' }}>
              WATCH FILM
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float">
          <span className="text-xs tracking-widest" style={{ color: 'var(--color-smoke)' }}></span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--color-gold-dim), transparent)' }} />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden py-4" style={{ borderTop: '1px solid rgba(201,169,110,0.15)', borderBottom: '1px solid rgba(201,169,110,0.15)', background: 'var(--color-charcoal)' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="text-xs tracking-[0.3em] mx-8" style={{ color: 'var(--color-gold-dim)' }}>{item}</span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="py-32 md:py-40 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] mb-6" style={{ color: 'var(--color-gold)' }}>THE ASCEND PHILOSOPHY</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: 'var(--color-ivory)',
            }}>
              Crafted for those<br />who know the<br /><em>difference</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-mist)' }}>
              ASCEND is not a hotel. It is a private world — 87 rooms and suites conceived by architect Léa Marchetti and furnished by seven European ateliers. Every surface is an intention. Every silence, deliberate.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-mist)' }}>
              We host fewer than 140 guests at any moment. Not by capacity — by choice.
            </p>
            <div className="flex items-center gap-10">
              {[['87', 'Rooms & Suites'], ['34', 'Floors of Sky'], ['3', 'Michelin Stars']].map(([n, l]) => (
                <div key={n}>
                  <div className="number-display">{n}</div>
                  <p className="text-xs tracking-widest mt-1" style={{ color: 'var(--color-smoke)' }}>{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-24 md:py-32 px-8 md:px-16" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16 md:mb-20">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <p className="text-xs tracking-[0.3em] mb-4" style={{ color: 'var(--color-gold)' }}>ACCOMMODATIONS</p>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontWeight: 300,
                  color: 'var(--color-ivory)',
                }}>
                  Your private sky
                </h2>
              </div>
              <a href="#" className="text-xs tracking-widest nav-link" style={{ color: 'var(--color-gold)' }}>VIEW ALL ROOMS →</a>
            </div>
          </Reveal>

          {/* Featured Room */}
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-3 img-reveal rounded-sm overflow-hidden relative" style={{ height: '520px', background: 'var(--color-graphite)' }}>
              <img
                src={ROOMS[activeRoom].img}
                alt={ROOMS[activeRoom].name}
                className="w-full h-full object-cover transition-all duration-700"
                style={{ filter: 'brightness(0.75)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.9) 0%, transparent 100%)' }}>
                <p className="text-xs tracking-widest mb-2" style={{ color: 'var(--color-gold)' }}>{ROOMS[activeRoom].category}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--color-ivory)' }}>
                  {ROOMS[activeRoom].name}
                </h3>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-between p-2">
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-4">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--color-gold)' }}>
                    {ROOMS[activeRoom].price}
                  </span>
                  <span className="text-xs tracking-widest" style={{ color: 'var(--color-smoke)' }}>/ NIGHT</span>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-mist)' }}>{ROOMS[activeRoom].desc}</p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs" style={{ color: 'var(--color-smoke)' }}>SIZE</span>
                  <span className="text-xs" style={{ color: 'var(--color-ivory)' }}>{ROOMS[activeRoom].size}</span>
                </div>
                <a href="#" className="btn-gold inline-flex px-8 py-3.5 text-xs tracking-widest" style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>
                  <span>BOOK THIS ROOM</span>
                </a>
              </div>

              <div className="flex flex-col gap-3">
                {ROOMS.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRoom(i)}
                    className="text-left px-5 py-4 transition-all duration-300"
                    style={{
                      border: `1px solid ${i === activeRoom ? 'rgba(201,169,110,0.5)' : 'rgba(201,169,110,0.1)'}`,
                      background: i === activeRoom ? 'rgba(201,169,110,0.06)' : 'transparent',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ fontFamily: 'var(--font-display)', color: i === activeRoom ? 'var(--color-ivory)' : 'var(--color-mist)' }}>
                        {r.name}
                      </span>
                      <span className="text-xs" style={{ color: i === activeRoom ? 'var(--color-gold)' : 'var(--color-smoke)' }}>{r.price}</span>
                    </div>
                    <p className="text-xs mt-1 tracking-wider" style={{ color: 'var(--color-smoke)' }}>{r.category}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="py-32 md:py-40 px-8 md:px-16 max-w-7xl mx-auto">
        <Reveal className="mb-20">
          <p className="text-xs tracking-[0.3em] mb-4" style={{ color: 'var(--color-gold)' }}>EXPERIENCES</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 300,
            color: 'var(--color-ivory)',
          }}>
            The art of<br /><em>doing nothing — perfectly</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'rgba(201,169,110,0.1)' }}>
          {AMENITIES.map((a, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className="group p-8 md:p-10 cursor-default transition-all duration-400"
                style={{ background: 'var(--color-obsidian)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-charcoal)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-obsidian)')}
              >
                <div className="text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 inline-block" style={{ color: 'var(--color-gold)' }}>
                  {a.icon}
                </div>
                <h3 className="text-base mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ivory)', fontWeight: 400 }}>{a.label}</h3>
                <p className="text-xs tracking-wider" style={{ color: 'var(--color-smoke)' }}>{a.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* POOL FEATURE */}
      <section className="relative overflow-hidden" style={{ height: '80vh', minHeight: '500px' }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1644329685726-22a3af3f705c?w=1600&h=900&fit=crop&auto=format"
            alt="ASCEND rooftop infinity pool illuminated at night overlooking Monaco"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) saturate(0.7)' }}
          />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,9,8,0.7) 100%)' }} />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Reveal>
            <p className="text-xs tracking-[0.3em] mb-6" style={{ color: 'var(--color-gold)' }}>ROOFTOP · FLOOR 34</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontWeight: 300,
              color: 'var(--color-ivory)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              Infinity Pool<br />at 110 metres
            </h2>
            <p className="max-w-sm mx-auto mb-10 text-base" style={{ color: 'var(--color-mist)', lineHeight: 1.8 }}>
              Open year-round. Temperature-controlled to 32°C. Champagne service until midnight.
            </p>
            <a href="#" className="btn-gold inline-flex px-10 py-4 text-xs tracking-widest" style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>
              <span>DISCOVER THE POOL</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 md:py-40 px-8 md:px-16" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="text-5xl mb-10" style={{ color: 'var(--color-gold-dim)', fontFamily: 'var(--font-display)' }}>"</div>
            <blockquote className="mb-10" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: 'var(--color-ivory)',
            }}>
              Nothing prepares you for the moment you realize the city below has become irrelevant.
            </blockquote>
            <div className="w-12 h-px mx-auto mb-6" style={{ background: 'var(--color-gold)' }} />
            <p className="text-xs tracking-widest" style={{ color: 'var(--color-smoke)' }}>ELENA VASQUEZ · HORIZON SUITE · MAY 2026</p>
          </Reveal>
        </div>
      </section>

      {/* BOOKING STRIP */}
      <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-4 gap-px overflow-hidden rounded-sm" style={{ background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.2)' }}>
            {[
              { label: 'CHECK IN', placeholder: 'Select date' },
              { label: 'CHECK OUT', placeholder: 'Select date' },
              { label: 'GUESTS', placeholder: '2 Adults' },
              { label: 'ROOM TYPE', placeholder: 'Any preference' },
            ].map((f, i) => (
              <div key={i} className="px-6 py-5 transition-colors duration-200 cursor-pointer" style={{ background: 'var(--color-graphite)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-graphite)')}>
                <p className="text-xs tracking-widest mb-2" style={{ color: 'var(--color-gold)' }}>{f.label}</p>
                <p className="text-sm" style={{ color: 'var(--color-mist)' }}>{f.placeholder}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <a href="#" className="btn-gold inline-flex px-16 py-4 text-xs tracking-widest" style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>
              <span>CHECK AVAILABILITY</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-8 md:px-16" style={{ borderTop: '1px solid rgba(201,169,110,0.12)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 flex items-center justify-center" style={{ border: '1px solid var(--color-gold)' }}>
                <span style={{ color: 'var(--color-gold)', fontSize: '9px', fontFamily: 'var(--font-display)' }}>A</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.15em', color: 'var(--color-ivory)', fontSize: '0.9rem' }}>ASCEND</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-smoke)' }}>
              34 Avenue Princesse Grace<br />
              Monaco, MC 98000<br />
              +377 98 06 30 00
            </p>
          </div>
          {[
            { title: 'HOTEL', links: ['Our Story', 'Rooms & Suites', 'Press', 'Careers'] },
            { title: 'EXPERIENCES', links: ['Dining', 'Spa & Wellness', 'Events', 'Helipad'] },
            { title: 'CONNECT', links: ['Instagram', 'Newsletter', 'Gift Cards', 'Loyalty'] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-xs tracking-widest mb-5" style={{ color: 'var(--color-gold)' }}>{col.title}</p>
              <div className="flex flex-col gap-3">
                {col.links.map(l => (
                  <a key={l} href="#" className="nav-link text-xs" style={{ color: 'var(--color-smoke)' }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(201,169,110,0.08)', paddingTop: '2rem' }}>
          <p className="text-xs tracking-wider" style={{ color: 'var(--color-smoke)' }}>© 2026 ASCEND Hotels Monaco. All rights reserved.</p>
          <p className="text-xs tracking-wider" style={{ color: 'var(--color-smoke)' }}>Privacy · Legal · Cookies</p>
        </div>
      </footer>
    </div>
  )
}
