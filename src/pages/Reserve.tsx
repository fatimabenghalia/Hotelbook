import { useState } from 'react'
import type { FormEvent } from 'react'
import { ROOMS } from '../data/rooms'
import { HOTEL } from '../data/site'
import { Reveal } from '../components/ui/Reveal'

const inputStyle = {
  background: 'var(--color-graphite)',
  border: '1px solid rgba(201,169,110,0.2)',
  color: 'var(--color-ivory)',
}

export default function Reserve() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="pt-40 pb-28 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.35em] mb-6" style={{ color: 'var(--color-gold)' }}>
            RESERVATIONS
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--color-ivory)',
            }}
          >
            Reserve
            <br />
            <em style={{ fontStyle: 'italic' }}>your ascent</em>
          </h1>
          <p className="max-w-xl mb-14 text-base" style={{ color: 'var(--color-mist)', lineHeight: 1.8 }}>
            Tell us when, and a host will reply within the hour. For same-day arrivals call{' '}
            {HOTEL.address[2]}.
          </p>
        </Reveal>

        {submitted ? (
          <Reveal>
            <div className="p-12 text-center" style={{ border: '1px solid rgba(201,169,110,0.3)' }}>
              <p className="text-xs tracking-[0.3em] mb-4" style={{ color: 'var(--color-gold)' }}>
                REQUEST RECEIVED
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 300,
                  color: 'var(--color-ivory)',
                }}
              >
                A host is preparing your arrival.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <Field label="FULL NAME">
                <input required type="text" className="w-full px-4 py-3 text-sm" style={inputStyle} />
              </Field>
              <Field label="EMAIL">
                <input required type="email" className="w-full px-4 py-3 text-sm" style={inputStyle} />
              </Field>
              <Field label="CHECK IN">
                <input required type="date" className="w-full px-4 py-3 text-sm" style={inputStyle} />
              </Field>
              <Field label="CHECK OUT">
                <input required type="date" className="w-full px-4 py-3 text-sm" style={inputStyle} />
              </Field>
              <Field label="GUESTS">
                <select className="w-full px-4 py-3 text-sm" style={inputStyle} defaultValue="2">
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="ROOM TYPE">
                <select className="w-full px-4 py-3 text-sm" style={inputStyle} defaultValue={ROOMS[0].slug}>
                  {ROOMS.map(r => (
                    <option key={r.slug} value={r.slug}>
                      {r.name} — {r.price} / night
                    </option>
                  ))}
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="NOTES FOR YOUR HOST">
                  <textarea rows={4} className="w-full px-4 py-3 text-sm" style={inputStyle} />
                </Field>
              </div>
              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="btn-gold px-16 py-4 text-xs tracking-widest"
                  style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}
                >
                  <span>SEND REQUEST</span>
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-widest mb-2" style={{ color: 'var(--color-gold)' }}>
        {label}
      </span>
      {children}
    </label>
  )
}
