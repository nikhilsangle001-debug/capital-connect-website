import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const expertise = [
  'Corporate & Structured Debt',
  'Capital Structuring',
  'Banking & Institutional Relationships',
  'Real Estate & Project Finance',
  'Risk Assessment & Underwriting',
  'Transaction Advisory',
]

export function Leadership() {
  return (
    <section id="leadership" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src="/images/sunil-original.png"
                alt="Sunil Poojari, Founder of Capital Connect"
                className="aspect-[4/5] w-full rounded-sm object-cover object-[center_35%]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8">
                <p className="font-serif text-2xl font-semibold text-primary-foreground">
                  Sunil Poojari
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-accent">
                  Founder | Capital Connect
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Leadership"
              title="Two decades of banking and financial services expertise"
            />

            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-serif text-5xl font-semibold text-primary">22+</span>
              <span className="text-sm leading-snug text-muted-foreground">
                Years of Banking &amp; Financial
                <br />
                Services Experience
              </span>
            </div>

            <div className="relative mt-8 border-l-2 border-accent pl-6">
              <Quote className="absolute -left-3 -top-2 h-5 w-5 rotate-180 bg-background text-accent" />
              <p className="text-pretty text-base leading-relaxed text-foreground/85">
                Sunil Poojari brings over 22 years of leadership across banking
                and financial services, having structured and executed debt and
                equity transactions across corporate, MSME and real estate
                segments. His deep institutional relationships and disciplined
                advisory approach anchor Capital Connect&apos;s commitment to
                delivering outcomes that stand the test of scrutiny.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
                Areas of Expertise
              </p>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {expertise.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
