import { useState } from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'
import { HOTEL, NAV_LINKS } from '../../data/site'
import { useScrolled } from '../../hooks/useScrolled'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(10,9,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.12)' : '1px solid transparent',
        }}
      >
        <Link to="/" className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-sm flex items-center justify-center"
            style={{ border: '1px solid var(--color-gold)' }}
          >
            <span style={{ color: 'var(--color-gold)', fontSize: '10px', fontFamily: 'var(--font-display)' }}>
              {HOTEL.initial}
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              letterSpacing: '0.12em',
              color: 'var(--color-ivory)',
            }}
          >
            {HOTEL.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(item => (
            <RouterNavLink
              key={item.to}
              to={item.to}
              className="nav-link text-sm tracking-widest"
              style={({ isActive }) => ({
                color: isActive ? 'var(--color-gold)' : 'var(--color-mist)',
                letterSpacing: '0.1em',
              })}
            >
              {item.label.toUpperCase()}
            </RouterNavLink>
          ))}
        </div>

        <Link
          to="/reserve"
          className="btn-gold hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-xs tracking-widest"
          style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}
        >
          <span>RESERVE</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className="block w-6 h-px transition-all"
            style={{ background: 'var(--color-gold)', transform: menuOpen ? 'rotate(45deg) translateY(5px)' : '' }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{ background: 'var(--color-gold)', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{ background: 'var(--color-gold)', transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : '' }}
          />
        </button>
      </nav>

      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden"
        style={{
          backgroundColor: 'var(--color-obsidian)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        {NAV_LINKS.map(item => (
          <RouterNavLink
            key={item.to}
            to={item.to}
            onClick={closeMenu}
            className="text-2xl tracking-widest"
            style={({ isActive }) => ({
              fontFamily: 'var(--font-display)',
              color: isActive ? 'var(--color-gold)' : 'var(--color-ivory)',
            })}
          >
            {item.label}
          </RouterNavLink>
        ))}
        <Link
          to="/reserve"
          onClick={closeMenu}
          className="mt-4 px-10 py-3 text-sm tracking-widest"
          style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}
        >
          RESERVE A STAY
        </Link>
      </div>
    </>
  )
}
