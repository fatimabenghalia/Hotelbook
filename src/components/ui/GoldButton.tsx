import { Link } from 'react-router-dom'

type GoldButtonProps = {
  to: string
  label: string
  className?: string
}

export function GoldButton({ to, label, className = 'px-10 py-4' }: GoldButtonProps) {
  return (
    <Link
      to={to}
      className={`btn-gold inline-flex items-center gap-2 text-xs tracking-widest ${className}`}
      style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}
    >
      <span>{label}</span>
    </Link>
  )
}
