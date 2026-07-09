import { Rocket, TrendingUp, PieChart, Handshake, Users, Banknote, ArrowUpRight } from 'lucide-react'
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
    <section id="equity" className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div className="aurora-blob left-[15%] top-[20%] h-72 w-72 bg-accent/20" />
      <div className="aurora-blob right-[10%] bottom-[15%] h-80 w-80 bg-primary-foreground/8" style={{ animationDelay: '6s' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
              <div className="group relative h-full overflow-hidden rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.04] p-8 transition-all duration-400 hover:-translate-y-2 hover:border-accent/50 hover:bg-primary-foreground/[0.08]">
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 text-accent transition-all duration-400 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-6 font-serif text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-primary-foreground/65">
                  {item.text}
                </p>
                <a
                  href="#contact"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Enquire
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
