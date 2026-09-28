export type Offering = {
  title: string
  meta: string
  desc: string
  img: string
}

export type PageContent = {
  eyebrow: string
  title: string
  italic: string
  intro: string
  heroImg: string
  heroAlt: string
  offerings: Offering[]
  notes: [string, string][]
}

export const EXPERIENCES: PageContent = {
  eyebrow: 'EXPERIENCES',
  title: 'The art of',
  italic: 'doing nothing — perfectly',
  intro:
    'Days at ASCEND are composed, not scheduled. Our hosts shape each itinerary around the pace you arrive with — and the one you leave carrying.',
  heroImg:
    'https://images.unsplash.com/photo-1644329685726-22a3af3f705c?w=1600&h=900&fit=crop&auto=format',
  heroAlt: 'ASCEND rooftop infinity pool illuminated at night overlooking Monaco',
  offerings: [
    {
      title: 'Rooftop Infinity Pool',
      meta: 'Floor 34 · Year-round',
      desc: 'Temperature-controlled to 32°C, suspended 110 metres above the Mediterranean. Champagne service until midnight.',
      img: 'https://images.unsplash.com/photo-1644329685726-22a3af3f705c?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Coastal Yacht Days',
      meta: 'Port Hercule · On request',
      desc: 'A private crew, a chilled cellar, and the Riviera coastline from the only angle that matters.',
      img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Private Cinema',
      meta: 'Floor 3 · 14 seats',
      desc: 'Curated screenings, restored classics, and premieres before they reach the coast.',
      img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Helipad Arrivals',
      meta: 'Floor 34 · Sky access',
      desc: 'Seven minutes from Nice. Your suite is opened before the rotors have stopped.',
      img: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&h=600&fit=crop&auto=format',
    },
  ],
  notes: [
    ['24/7', 'Personal host service'],
    ['7 min', 'From Nice by helicopter'],
    ['140', 'Guests at any moment'],
  ],
}

export const DINING: PageContent = {
  eyebrow: 'DINING',
  title: 'Three kitchens,',
  italic: 'one obsession',
  intro:
    'Three restaurants and a bar, each with its own cellar and its own silence. Reservations open sixty days ahead — residents always first.',
  heroImg:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop&auto=format',
  heroAlt: 'Candlelit fine dining room at ASCEND',
  offerings: [
    {
      title: 'Vertex',
      meta: '★★★ · Floor 33 · Dinner',
      desc: 'Chef Amaury Sellier reads the Mediterranean in fourteen courses. One seating each evening.',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Sel',
      meta: 'Seafood · Garden Level · All day',
      desc: 'Line-caught from Ligurian waters, finished over olive wood. Lunch stretches as long as you let it.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Kaiso',
      meta: 'Kaiseki · Floor 12 · Dinner',
      desc: 'Eight counter seats, a single menu, and produce flown from Tsukiji twice weekly.',
      img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Bar Noir',
      meta: 'Cocktails · Floor 33 · Until 2am',
      desc: 'Low light, rare spirits, and a pianist who never announces himself.',
      img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop&auto=format',
    },
  ],
  notes: [
    ['3', 'Michelin Stars'],
    ['1,400', 'References in cellar'],
    ['60', 'Days booking window'],
  ],
}

export const SPA: PageContent = {
  eyebrow: 'SPA & WELLNESS',
  title: 'Two thousand metres',
  italic: 'of quiet',
  intro:
    'A 2,400 m² sanctuary carved beneath the tower — thermal circuits, private hammams, and practitioners who work without a clock.',
  heroImg:
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&h=900&fit=crop&auto=format',
  heroAlt: 'Candlelit spa treatment room at ASCEND',
  offerings: [
    {
      title: 'Thermal Circuit',
      meta: '90 min · Garden Level',
      desc: 'Salt sauna, cold plunge, marble hammam, and a rest gallery lit only by candle.',
      img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Signature Ascent',
      meta: '120 min · Couples available',
      desc: 'Deep tissue and lymphatic work with oils blended for you the morning of your treatment.',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Sky Movement Studio',
      meta: 'Floor 31 · Daily 6am',
      desc: 'Yoga, pilates and breathwork above the cloud line, capped at eight guests.',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Longevity Consultations',
      meta: 'By appointment',
      desc: 'Diagnostics, sleep architecture and nutrition designed with our resident physician.',
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop&auto=format',
    },
  ],
  notes: [
    ['2,400', 'Square metres'],
    ['11', 'Treatment rooms'],
    ['6am', 'Doors open daily'],
  ],
}

export const EVENTS: PageContent = {
  eyebrow: 'EVENTS',
  title: 'Occasions held',
  italic: 'in confidence',
  intro:
    'Weddings, board retreats and private dinners — planned by a team that has never once published a photograph of a guest.',
  heroImg:
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&h=900&fit=crop&auto=format',
  heroAlt: 'Elegant candlelit event setup at ASCEND',
  offerings: [
    {
      title: 'The Sky Ballroom',
      meta: 'Floor 33 · 220 guests',
      desc: 'Full-height glazing on three sides, blackout capability, and a private arrival lift.',
      img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Garden Terrace Weddings',
      meta: 'Garden Level · 120 guests',
      desc: 'Olive trees, open sky, and a ceremony lawn that belongs to you for the whole day.',
      img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Board Retreats',
      meta: 'Floor 30 · 24 seats',
      desc: 'Signal-shielded rooms, dedicated catering, and a host who stays outside the door.',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format',
    },
    {
      title: 'Private Dinners',
      meta: 'Vertex · 14 guests',
      desc: 'The Michelin kitchen closed to the public, the menu written around your table.',
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop&auto=format',
    },
  ],
  notes: [
    ['220', 'Maximum guests'],
    ['4', 'Private venues'],
    ['1', 'Dedicated planner'],
  ],
}
