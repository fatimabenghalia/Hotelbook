export const HOTEL = {
  name: 'ASCEND',
  initial: 'A',
  tagline: 'MONACO · ESTABLISHED 2019',
  address: ['34 Avenue Princesse Grace', 'Monaco, MC 98000', '+377 98 06 30 00'],
}

export type NavLink = {
  label: string
  to: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Rooms', to: '/rooms' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Dining', to: '/dining' },
  { label: 'Spa', to: '/spa' },
  { label: 'Events', to: '/events' },
]

export const FOOTER_COLUMNS = [
  {
    title: 'HOTEL',
    links: [
      { label: 'Our Story', to: '/' },
      { label: 'Rooms & Suites', to: '/rooms' },
      { label: 'Press', to: '/experiences' },
      { label: 'Careers', to: '/experiences' },
    ],
  },
  {
    title: 'EXPERIENCES',
    links: [
      { label: 'Dining', to: '/dining' },
      { label: 'Spa & Wellness', to: '/spa' },
      { label: 'Events', to: '/events' },
      { label: 'Helipad', to: '/experiences' },
    ],
  },
  {
    title: 'CONNECT',
    links: [
      { label: 'Reserve', to: '/reserve' },
      { label: 'Newsletter', to: '/reserve' },
      { label: 'Gift Cards', to: '/reserve' },
      { label: 'Loyalty', to: '/reserve' },
    ],
  },
]

export const MARQUEE_ITEMS = [
  'ARRIVE·',
  'TRANSCEND·',
  'LUXE·',
  'ASCENDANCE·',
  'PRIVACY·',
  'CRAFTED·',
  'TIMELESS·',
]
