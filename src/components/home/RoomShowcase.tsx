import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROOMS } from '../../data/rooms'
import { GoldButton } from '../ui/GoldButton'
import { Reveal } from '../ui/Reveal'

export function RoomShowcase() {
  const [activeRoom, setActiveRoom] = useState(0)
  const room = ROOMS[activeRoom]

  return (
    <section id="rooms" className="py-24 md:py-32 px-8 md:px-16" style={{ background: 'var(--color-charcoal)' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 md:mb-20">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] mb-4" style={{ color: 'var(--color-gold)' }}>
                ACCOMMODATIONS
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontWeight: 300,
                  color: 'var(--color-ivory)',
                }}
              >
                Your private sky
              </h2>
            </div>
            <Link to="/rooms" className="text-xs tracking-widest nav-link" style={{ color: 'var(--color-gold)' }}>
              VIEW ALL ROOMS →
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div
            className="md:col-span-3 img-reveal rounded-sm overflow-hidden relative"
            style={{ height: '520px', background: 'var(--color-graphite)' }}
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-full object-cover transition-all duration-700"
              style={{ filter: 'brightness(0.75)' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-8"
              style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.9) 0%, transparent 100%)' }}
            >
              <p className="text-xs tracking-widest mb-2" style={{ color: 'var(--color-gold)' }}>
                {room.category}
              </p>
              <h3
                style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--color-ivory)' }}
              >
                {room.name}
              </h3>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col justify-between p-2">
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span
                  style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--color-gold)' }}
                >
                  {room.price}
                </span>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-smoke)' }}>
                  / NIGHT
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-mist)' }}>
                {room.desc}
              </p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs" style={{ color: 'var(--color-smoke)' }}>
                  SIZE
                </span>
                <span className="text-xs" style={{ color: 'var(--color-ivory)' }}>
                  {room.size}
                </span>
              </div>
              <GoldButton to="/reserve" label="BOOK THIS ROOM" className="px-8 py-3.5" />
            </div>

            <div className="flex flex-col gap-3">
              {ROOMS.map((r, i) => (
                <button
                  key={r.slug}
                  onClick={() => setActiveRoom(i)}
                  className="text-left px-5 py-4 transition-all duration-300"
                  style={{
                    border: `1px solid ${i === activeRoom ? 'rgba(201,169,110,0.5)' : 'rgba(201,169,110,0.1)'}`,
                    background: i === activeRoom ? 'rgba(201,169,110,0.06)' : 'transparent',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: i === activeRoom ? 'var(--color-ivory)' : 'var(--color-mist)',
                      }}
                    >
                      {r.name}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: i === activeRoom ? 'var(--color-gold)' : 'var(--color-smoke)' }}
                    >
                      {r.price}
                    </span>
                  </div>
                  <p className="text-xs mt-1 tracking-wider" style={{ color: 'var(--color-smoke)' }}>
                    {r.category}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
