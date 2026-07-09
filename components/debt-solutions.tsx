import {
  Home,
  Landmark,
  Briefcase,
  Wallet,
  Factory,
  HardHat,
  Building2,
  Layers,
  Receipt,
  RefreshCw,
  Scale,
  Coins,
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
    <section id="debt" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Debt Solutions"
            title="Comprehensive debt advisory across the capital spectrum"
            description="From retail credit to complex structured facilities, we architect and arrange funding tailored to each mandate."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <Reveal as="article" key={item.title} delay={(i % 3) * 80}>
              <div className="group h-full bg-card p-8 transition-colors duration-300 hover:bg-primary">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-secondary text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
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
