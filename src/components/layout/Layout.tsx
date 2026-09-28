import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-obsidian)' }}
    >
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
