import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-architecture.png"
          alt="Modern financial district architecture at dusk"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/60" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="fade-up flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Institutional Capital Advisory
          </p>

          <h1 className="fade-up mt-8 text-balance font-serif text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl" style={{ animationDelay: '120ms' }}>
            Integrated Debt, Equity &amp; Capital Advisory Platform
          </h1>

          <p className="fade-up mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75" style={{ animationDelay: '240ms' }}>
            Structured funding solutions for individuals, MSMEs, corporates and
            real estate developers.
          </p>

          <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '360ms' }}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold tracking-wide text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Schedule Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#debt"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/25 px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Explore Solutions
            </a>
          </div>

          <dl className="fade-up mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-primary-foreground/15 pt-8" style={{ animationDelay: '480ms' }}>
            {[
              { value: '22+', label: 'Years of Expertise' },
              { value: '50+', label: 'Lending Relationships' },
              { value: 'Pan-India', label: 'Advisory Reach' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-accent">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
