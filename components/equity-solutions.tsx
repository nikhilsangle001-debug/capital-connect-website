import { Rocket, TrendingUp, PieChart, Handshake, Users, Banknote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const solutions = [
  { icon: Rocket, title: 'Startup Funding', text: 'Early-stage capital to help founders scale with confidence.' },
  { icon: TrendingUp, title: 'Growth Capital', text: 'Expansion funding for established, high-potential businesses.' },
  { icon: PieChart, title: 'Private Equity Placement', text: 'Access institutional and private equity investors.' },
  { icon: Handshake, title: 'Strategic Partnerships', text: 'Identify and structure value-accretive alliances.' },
  { icon: Users, title: 'Joint Ventures', text: 'Structure equitable, well-governed JV arrangements.' },
  { icon: Banknote, title: 'Promoter Equity Infusion', text: 'Advisory on promoter capital and stake optimisation.' },
]

export function EquitySolutions() {
  return (
    <section id="equity" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Equity Solutions"
            title="Equity advisory that aligns capital with ambition"
            description="We connect promoters and businesses with the right equity partners, structuring investments that create durable value."
            inverted
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <Reveal as="article" key={item.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-sm border border-primary-foreground/12 bg-primary-foreground/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-primary-foreground/[0.06]">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-accent/40 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
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
