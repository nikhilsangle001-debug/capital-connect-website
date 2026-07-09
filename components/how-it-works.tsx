import { Search, FileText, Handshake, Banknote, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: Search,
    title: 'Discover & Assess',
    text: 'We understand your funding objective, business profile and constraints to scope the right solution.',
  },
  {
    icon: FileText,
    title: 'Structure & Prepare',
    text: 'Our advisors engineer the optimal debt or equity structure and prepare a lender-ready proposal.',
  },
  {
    icon: Handshake,
    title: 'Match & Negotiate',
    text: 'We leverage 50+ institutional relationships to source competitive terms and negotiate on your behalf.',
  },
  {
    icon: Banknote,
    title: 'Execute & Disburse',
    text: 'Disciplined end-to-end execution — from due diligence to sanction and final disbursement.',
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute right-0 top-1/4 aurora-blob h-72 w-72 bg-accent/10" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From mandate to disbursement — a disciplined path"
            description="A transparent, four-step advisory process designed to get you funded efficiently."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-400 hover:border-accent/50 hover:shadow-[0_20px_50px_-25px_rgba(22,35,63,0.35)] hover-lift">
                <span className="absolute right-6 top-6 font-serif text-5xl font-bold text-secondary transition-colors group-hover:text-accent/30">
                  0{i + 1}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent transition-transform duration-400 group-hover:scale-110">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>

                {/* Connector arrow on desktop */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background text-accent lg:flex">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-14 flex max-w-md flex-col items-center text-center">
            <p className="text-sm text-muted-foreground">
              Typical turnaround from mandate to disbursement: <span className="font-semibold text-foreground">3–6 weeks</span>
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Start your funding journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
