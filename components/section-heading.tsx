import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverted?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p
        className={cn(
          'flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-5 text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl',
          inverted ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-pretty text-base leading-relaxed',
            inverted ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
