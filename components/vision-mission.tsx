import { Eye, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="/images/hero-architecture.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Vision &amp; Mission
            <span className="h-px w-8 bg-accent" />
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-center font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
            Building enduring value through principled capital advisory
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {[
            {
              icon: Eye,
              label: 'Our Vision',
              text: 'To be India\u2019s most trusted integrated capital advisory platform \u2014 the definitive bridge between ambitious enterprises and the capital that powers their growth.',
            },
            {
              icon: Target,
              label: 'Our Mission',
              text: 'To deliver structured, transparent and outcome-driven debt and equity solutions, leveraging deep institutional relationships and rigorous financial expertise to serve every client with integrity.',
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 120}>
              <div className="h-full rounded-sm border border-primary-foreground/12 bg-primary-foreground/[0.04] p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 font-serif text-2xl font-semibold text-primary-foreground">
                  {item.label}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
