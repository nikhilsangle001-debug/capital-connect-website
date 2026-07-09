import { Landmark, Building2, Banknote, Coins, Wallet, Factory, ShieldCheck, Layers } from 'lucide-react'

const partners = [
  { icon: Landmark, name: 'Leading Banks' },
  { icon: Building2, name: 'NBFCs' },
  { icon: Banknote, name: 'Financial Institutions' },
  { icon: Coins, name: 'Private Capital' },
  { icon: Wallet, name: 'Alternative Lenders' },
  { icon: Factory, name: 'HFCs' },
  { icon: ShieldCheck, name: 'Insurance Partners' },
  { icon: Layers, name: 'Structured Funds' },
]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Backed by 50+ institutional relationships
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max gap-12">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 text-muted-foreground/70"
              >
                <p.icon className="h-6 w-6 text-primary/60" />
                <span className="font-serif text-lg font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
