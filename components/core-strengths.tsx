import { Layers, Boxes, LineChart, Network, ShieldAlert, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const strengths = [
  { icon: Layers, title: 'Structured Debt Advisory', text: 'Designing debt instruments matched precisely to cash flows and objectives.' },
  { icon: Boxes, title: 'Capital Structuring', text: 'Optimising the mix of debt and equity to maximise value.' },
  { icon: LineChart, title: 'Equity Raise Advisory', text: 'End-to-end guidance across the equity fundraising journey.' },
  { icon: Network, title: 'Institutional Relationships', text: 'A trusted network spanning banks, NBFCs and private capital.' },
  { icon: ShieldAlert, title: 'Risk Assessment', text: 'Rigorous diligence and risk analysis on every transaction.' },
  { icon: CheckCircle2, title: 'Transaction Execution', text: 'Disciplined execution from mandate to disbursement.' },
]

export function CoreStrengths() {
  return (
    <section id="strengths" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Core Strengths"
            title="Capabilities that define our advisory practice"
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, i) => (
            <Reveal as="article" key={item.title} delay={(i % 3) * 80}>
              <div className="group flex h-full flex-col rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_12px_40px_-20px_rgba(22,35,63,0.4)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
