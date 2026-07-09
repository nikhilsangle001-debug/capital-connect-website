import {
  Home, Landmark, Briefcase, Wallet, Factory, HardHat,
  Building2, Layers, Receipt, RefreshCw, Scale, Coins,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const solutions = [
  { icon: Home, title: 'Home Loans', text: 'Competitive housing finance sourced across leading lenders.' },
  { icon: Landmark, title: 'Loan Against Property', text: 'Unlock liquidity from residential and commercial assets.' },
  { icon: Briefcase, title: 'Business Loans', text: 'Secured and unsecured funding to fuel enterprise growth.' },
  { icon: Wallet, title: 'Working Capital Finance', text: 'Cash credit, overdraft and short-term facilities.' },
  { icon: Factory, title: 'MSME & SME Loans', text: 'Purpose-built credit for small and mid-sized enterprises.' },
  { icon: HardHat, title: 'Project & Construction Finance', text: 'Structured funding across the project lifecycle.' },
  { icon: Building2, title: 'Builder & Developer Funding', text: 'Capital solutions for real estate developers.' },
  { icon: Layers, title: 'Structured Debt', text: 'Tailored instruments aligned to complex requirements.' },
  { icon: Receipt, title: 'Lease Rental Discounting', text: 'Monetise future rental cash flows efficiently.' },
  { icon: RefreshCw, title: 'Debt Consolidation & Refinancing', text: 'Optimise cost of capital and repayment terms.' },
  { icon: Scale, title: 'Balance Sheet Restructuring', text: 'Rebalance liabilities to strengthen financial health.' },
  { icon: Coins, title: 'Private Debt & Mezzanine', text: 'Flexible capital from private and alternative lenders.' },
]

export function DebtSolutions() {
  return (
    <section id="debt" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute -left-20 top-1/3 aurora-blob h-72 w-72 bg-primary/8" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Debt Solutions"
            title="Comprehensive debt advisory across the capital spectrum"
            description="From retail credit to complex structured facilities, we architect and arrange funding tailored to each mandate."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <Reveal as="article" key={item.title} delay={(i % 3) * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-400 hover:border-accent/50 hover:shadow-[0_20px_50px_-25px_rgba(22,35,63,0.4)] hover-lift">
                {/* Shine sweep on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-400 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-6 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <a
                  href="#contact"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100"
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
