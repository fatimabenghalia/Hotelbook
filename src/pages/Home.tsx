import { Amenities } from '../components/home/Amenities'
import { BookingStrip } from '../components/home/BookingStrip'
import { Hero } from '../components/home/Hero'
import { Intro } from '../components/home/Intro'
import { Marquee } from '../components/home/Marquee'
import { PoolFeature } from '../components/home/PoolFeature'
import { RoomShowcase } from '../components/home/RoomShowcase'
import { Testimonial } from '../components/home/Testimonial'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <RoomShowcase />
      <Amenities />
      <PoolFeature />
      <Testimonial />
      <BookingStrip />
    </>
  )
}
