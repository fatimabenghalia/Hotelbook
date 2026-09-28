import { Link } from 'react-router-dom'
import { FOOTER_COLUMNS, HOTEL } from '../../data/site'

export function Footer() {
  return (
    <footer className="py-16 px-8 md:px-16" style={{ borderTop: '1px solid rgba(201,169,110,0.12)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div
              className="w-5 h-5 flex items-center justify-center"
              style={{ border: '1px solid var(--color-gold)' }}
            >
              <span style={{ color: 'var(--color-gold)', fontSize: '9px', fontFamily: 'var(--font-display)' }}>
                {HOTEL.initial}
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.15em',
                color: 'var(--color-ivory)',
                fontSize: '0.9rem',
              }}
            >
              {HOTEL.name}
            </span>
          </Link>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--color-smoke)' }}>
            {HOTEL.address.map(line => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        {FOOTER_COLUMNS.map(col => (
          <div key={col.title}>
            <p className="text-xs tracking-widest mb-5" style={{ color: 'var(--color-gold)' }}>
              {col.title}
            </p>
            <div className="flex flex-col gap-3">
              {col.links.map(l => (
                <Link key={l.label} to={l.to} className="nav-link text-xs" style={{ color: 'var(--color-smoke)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(201,169,110,0.08)', paddingTop: '2rem' }}
      >
        <p className="text-xs tracking-wider" style={{ color: 'var(--color-smoke)' }}>
          © 2026 {HOTEL.name} Hotels Monaco. All rights reserved.
        </p>
        <p className="text-xs tracking-wider" style={{ color: 'var(--color-smoke)' }}>
          Privacy · Legal · Cookies
        </p>
      </div>
    </footer>
  )
}
