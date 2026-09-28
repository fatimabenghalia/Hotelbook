import { ROOMS } from '../data/rooms'
import { GoldButton } from '../components/ui/GoldButton'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'

export default function Rooms() {
  return (
    <>
      <PageHero
        eyebrow="ACCOMMODATIONS"
        title="Eighty-seven ways"
        italic="to wake up"
        intro="Every room is a separate commission — different joinery, different light, the same devotion to quiet. Rates include breakfast, the spa circuit, and your host."
        img={ROOMS[0].img}
        alt="Suite interior at ASCEND with panoramic Monaco views"
      />

      <section className="py-24 md:py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-20 md:gap-28">
          {ROOMS.map((room, i) => (
            <Reveal key={room.slug}>
              <article className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 ? 'md:[direction:rtl]' : ''}`}>
                <div className="img-reveal rounded-sm overflow-hidden" style={{ height: '440px', direction: 'ltr' }}>
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.78)' }}
                  />
                </div>

                <div style={{ direction: 'ltr' }}>
                  <p className="text-xs tracking-[0.3em] mb-4" style={{ color: 'var(--color-gold)' }}>
                    {room.category}
                  </p>
                  <h2
                    className="mb-5"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 300,
                      color: 'var(--color-ivory)',
                    }}
                  >
                    {room.name}
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-mist)' }}>
                    {room.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {room.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <span style={{ color: 'var(--color-gold)' }}>◇</span>
                        <span className="text-sm" style={{ color: 'var(--color-mist)' }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-8 mb-8">
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '2.2rem',
                          fontWeight: 300,
                          color: 'var(--color-gold)',
                        }}
                      >
                        {room.price}
                      </span>
                      <span className="text-xs tracking-widest ml-2" style={{ color: 'var(--color-smoke)' }}>
                        / NIGHT
                      </span>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest" style={{ color: 'var(--color-smoke)' }}>
                        SIZE
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-ivory)' }}>
                        {room.size}
                      </p>
                    </div>
                  </div>

                  <GoldButton to="/reserve" label="RESERVE THIS ROOM" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
