export type Room = {
  slug: string
  name: string
  category: string
  price: string
  size: string
  img: string
  desc: string
  features: string[]
}

export const ROOMS: Room[] = [
  {
    slug: 'horizon-suite',
    name: 'Horizon Suite',
    category: 'Suite · Floor 32',
    price: '€920',
    size: '95 m²',
    img: 'https://images.unsplash.com/photo-1637730827702-de34e9ae4ede?w=800&h=600&fit=crop&auto=format',
    desc: 'Panoramic city-to-sea views from a wraparound terrace. Custom walnut joinery, heated marble floors.',
    features: ['Wraparound terrace', 'Walnut joinery', 'Heated marble floors', 'Butler on call'],
  },
  {
    slug: 'atelier-room',
    name: 'Atelier Room',
    category: 'Deluxe · Floor 18',
    price: '€480',
    size: '58 m²',
    img: 'https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?w=800&h=600&fit=crop&auto=format',
    desc: 'Gallery-white walls, curated contemporary art, and a deep soaking tub overlooking the skyline.',
    features: ['Curated art', 'Deep soaking tub', 'Skyline outlook', 'Espresso atelier'],
  },
  {
    slug: 'garden-pavilion',
    name: 'Garden Pavilion',
    category: 'Villa · Garden Level',
    price: '€1,280',
    size: '140 m²',
    img: 'https://images.unsplash.com/photo-1775811091644-69162fa36ea1?w=800&h=600&fit=crop&auto=format',
    desc: 'Private plunge pool, outdoor dining terrace, and direct garden access. Total seclusion.',
    features: ['Private plunge pool', 'Dining terrace', 'Direct garden access', 'Private entrance'],
  },
]
