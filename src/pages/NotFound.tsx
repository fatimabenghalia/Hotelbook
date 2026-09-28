import { GoldButton } from '../components/ui/GoldButton'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <p className="text-xs tracking-[0.35em] mb-6" style={{ color: 'var(--color-gold)' }}>
        ERROR 404
      </p>
      <h1
        className="mb-8"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 300,
          color: 'var(--color-ivory)',
          lineHeight: 1.1,
        }}
      >
        This floor
        <br />
        <em style={{ fontStyle: 'italic' }}>does not exist</em>
      </h1>
      <GoldButton to="/" label="RETURN TO LOBBY" />
    </section>
  )
}
