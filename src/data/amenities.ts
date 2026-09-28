export type Amenity = {
  icon: string
  label: string
  sub: string
}

export const AMENITIES: Amenity[] = [
  { icon: '◈', label: 'Infinity Pool', sub: 'Rooftop · 34th Floor' },
  { icon: '◉', label: 'Spa & Wellness', sub: '2,400 m² sanctuary' },
  { icon: '◇', label: 'Michelin Dining', sub: '3 restaurants · 1 bar' },
  { icon: '◈', label: 'Private Cinema', sub: 'Screening on request' },
  { icon: '◉', label: 'Concierge 24/7', sub: 'Personal host service' },
  { icon: '◇', label: 'Helipad Access', sub: 'Sky arrivals welcome' },
]
