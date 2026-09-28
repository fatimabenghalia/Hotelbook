import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  children: ReactNode
  size?: string
}

export function SectionHeading({
  eyebrow,
  children,
  size = 'clamp(2rem, 4.5vw, 3.5rem)',
}: SectionHeadingProps) {
  return (
    <>
      <p className="text-xs tracking-[0.3em] mb-4" style={{ color: 'var(--color-gold)' }}>
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: size,
          fontWeight: 300,
          lineHeight: 1.2,
          color: 'var(--color-ivory)',
        }}
      >
        {children}
      </h2>
    </>
  )
}
