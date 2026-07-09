import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      role="img"
      aria-label="Capital Connect logo"
    >
      <rect x="1" y="1" width="38" height="38" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M27 13.5c-1.6-1.7-3.9-2.8-6.5-2.8-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9c2.6 0 4.9-1.1 6.5-2.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M22 20h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}
