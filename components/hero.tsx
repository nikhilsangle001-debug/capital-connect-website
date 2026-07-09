'use client'

import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Counter, useInView } from '@/components/counter'

const stats = [
  { value: 22, suffix: '+', label: 'Years of Expertise' },
  { value: 50, suffix: '+', label: 'Lending Relationships' },
  { value: 1200, suffix: '+', label: 'Mandates Delivered', decimals: 0 },
]

export function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden mesh-bg">
      {/* Floating aurora blobs */}
      <div className="aurora-blob left-[10%] top-[15%] h-72 w-72 bg-accent/40" />
      <div className="aurora-blob right-[12%] top-[25%] h-80 w-80 bg-primary/50" style={{ animationDelay: '5s' }} />
      <div className="aurora-blob bottom-[15%] left-[40%] h-64 w-64 bg-accent/25" style={{ animationDelay: '9s' }} />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="fade-up flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
              Institutional Capital Advisory
            </p>
          </div>

          <h1
            className="fade-up mt-8 text-balance font-serif text-4xl font-semibold leading-[1.06] text-primary-foreground sm:text-5xl lg:text-[4.2rem]"
            style={{ animationDelay: '120ms' }}
          >
            Capital that moves with
            <span className="block text-gradient-animated">your ambition.</span>
          </h1>

          <p
            className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/75"
            style={{ animationDelay: '240ms' }}
          >
            Integrated debt, equity &amp; capital advisory — structured funding
            solutions for individuals, MSMEs, corporates and real estate
            developers across India.
          </p>

          <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '360ms' }}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wide text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(255,200,100,0.5)]"
            >
              <Sparkles className="h-4 w-4" />
              Schedule Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Calculate Your EMI
            </a>
          </div>

          {/* Stats with animated counters */}
          <dl
            ref={ref}
            className="fade-up mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-primary-foreground/15 pt-8"
            style={{ animationDelay: '480ms' }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-accent sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} start={inView} />
                </dt>
                <dd className="mt-1.5 text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
