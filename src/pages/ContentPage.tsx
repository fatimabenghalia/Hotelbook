import type { PageContent } from '../data/pages'
import { GoldButton } from '../components/ui/GoldButton'
import { OfferingGrid } from '../components/ui/OfferingGrid'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { StatRow } from '../components/ui/StatRow'

export function ContentPage({ content }: { content: PageContent }) {
  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        italic={content.italic}
        intro={content.intro}
        img={content.heroImg}
        alt={content.heroAlt}
      />

      <section className="py-24 md:py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <OfferingGrid offerings={content.offerings} />
      </section>

      <section className="py-24 px-8 md:px-16" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <Reveal>
            <StatRow stats={content.notes} />
          </Reveal>
          <Reveal delay={150}>
            <GoldButton to="/reserve" label="PLAN YOUR STAY" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
