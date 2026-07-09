import { Building2, Landmark, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: Landmark,
    title: 'Institutional Relationships',
    text: 'Direct access to banks, NBFCs, financial institutions and private capital providers.',
  },
  {
    icon: Building2,
    title: 'Structured Solutions',
    text: 'Bespoke debt and equity structures engineered around each mandate.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Governance',
    text: 'A disciplined, advisory-led approach built on transparency and diligence.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src="/images/about-boardroom.png"
                alt="Capital Connect advisory boardroom overlooking a city skyline"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-sm bg-primary p-6 shadow-xl sm:block">
                <p className="font-serif text-lg leading-snug text-primary-foreground">
                  Where capital meets opportunity.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Capital Connect"
              title="A capital advisory firm built on relationships and rigour"
              description="Capital Connect is a professionally managed financial services and capital advisory firm providing structured debt and equity solutions through relationships with banks, NBFCs, financial institutions and private capital providers."
            />

            <div className="mt-10 grid gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-secondary text-primary">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
