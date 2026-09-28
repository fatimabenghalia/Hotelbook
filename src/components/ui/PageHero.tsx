type PageHeroProps = {
  eyebrow: string
  title: string
  italic: string
  intro: string
  img: string
  alt: string
}

export function PageHero({ eyebrow, title, italic, intro, img, alt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden flex items-end" style={{ height: '70vh', minHeight: '460px' }}>
      <div className="absolute inset-0">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45) saturate(0.8)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,9,8,0.7) 0%, transparent 40%, rgba(10,9,8,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 pb-16 max-w-7xl mx-auto">
        <p className="animate-fade-in text-xs tracking-[0.35em] mb-6" style={{ color: 'var(--color-gold)' }}>
          {eyebrow}
        </p>
        <h1
          className="animate-fade-up delay-100 mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: 'var(--color-ivory)',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
          <br />
          <em style={{ fontStyle: 'italic' }}>{italic}</em>
        </h1>
        <p
          className="animate-fade-up delay-200 max-w-xl text-base"
          style={{ color: 'var(--color-mist)', lineHeight: 1.8 }}
        >
          {intro}
        </p>
      </div>
    </section>
  )
}
