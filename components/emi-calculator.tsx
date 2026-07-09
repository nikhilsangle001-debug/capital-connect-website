'use client'

import { useState, useMemo } from 'react'
import { TrendingUp, Calendar, IndianRupee, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

function calcEMI(principal: number, annualRate: number, months: number) {
  if (months <= 0 || principal <= 0) return { emi: 0, totalInterest: 0, total: 0 }
  const r = annualRate / 12 / 100
  if (r === 0) {
    const emi = principal / months
    return { emi, totalInterest: 0, total: principal }
  }
  const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
  const total = emi * months
  return { emi, totalInterest: total - principal, total }
}

function formatINR(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`
  return `₹${Math.round(n).toLocaleString('en-IN')}`
}

export function EmiCalculator() {
  const [amount, setAmount] = useState(5000000) // 50L
  const [rate, setRate] = useState(9.5)
  const [tenure, setTenure] = useState(20) // years

  const months = tenure * 12
  const { emi, totalInterest, total } = useMemo(() => calcEMI(amount, rate, months), [amount, rate, months])

  const principalPct = total > 0 ? (amount / total) * 100 : 0
  const interestPct = 100 - principalPct

  // Donut chart geometry
  const R = 80
  const C = 2 * Math.PI * R
  const principalDash = (principalPct / 100) * C
  const interestDash = (interestPct / 100) * C

  return (
    <section id="calculator" className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="absolute -left-32 top-20 aurora-blob h-72 w-72 bg-primary/20" />
      <div className="absolute -right-20 bottom-10 aurora-blob h-80 w-80 bg-accent/20" style={{ animationDelay: '4s' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Plan Instantly"
            title="Estimate your monthly EMI in seconds"
            description="Adjust the sliders to see your indicative monthly outflow, total interest and overall cost — instantly."
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-40px_rgba(22,35,63,0.4)]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* Controls */}
              <div className="p-8 sm:p-10">
                <SliderField
                  icon={<IndianRupee className="h-4 w-4" />}
                  label="Loan Amount"
                  value={amount}
                  min={500000}
                  max={50000000}
                  step={100000}
                  format={formatINR}
                  onChange={setAmount}
                />
                <SliderField
                  icon={<TrendingUp className="h-4 w-4" />}
                  label="Interest Rate (% p.a.)"
                  value={rate}
                  min={6}
                  max={18}
                  step={0.1}
                  format={(n) => `${n.toFixed(1)}%`}
                  onChange={setRate}
                />
                <SliderField
                  icon={<Calendar className="h-4 w-4" />}
                  label="Tenure (Years)"
                  value={tenure}
                  min={1}
                  max={30}
                  step={1}
                  format={(n) => `${n} yrs`}
                  onChange={setTenure}
                />

                <div className="mt-8 rounded-xl bg-primary p-6 text-center">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Monthly EMI</p>
                  <p className="mt-2 font-serif text-4xl font-semibold text-primary-foreground sm:text-5xl">
                    {formatINR(emi)}
                  </p>
                  <p className="mt-2 text-xs text-primary-foreground/60">per month · indicative</p>
                </div>
              </div>

              {/* Donut + breakdown */}
              <div className="flex flex-col items-center justify-center border-t border-border bg-gradient-to-br from-secondary/60 to-background p-8 sm:p-10 lg:border-l lg:border-t-0">
                <div className="relative">
                  <svg viewBox="0 0 200 200" className="h-52 w-52 -rotate-90">
                    <circle cx="100" cy="100" r={R} fill="none" stroke="currentColor" strokeWidth="22" className="text-secondary" />
                    <circle
                      cx="100" cy="100" r={R} fill="none" stroke="currentColor" strokeWidth="22"
                      className="text-primary transition-all duration-500"
                      strokeDasharray={`${principalDash} ${C}`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="100" cy="100" r={R} fill="none" stroke="currentColor" strokeWidth="22"
                      className="text-accent transition-all duration-500"
                      strokeDasharray={`${interestDash} ${C}`}
                      strokeDashoffset={-principalDash}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-muted-foreground">Total Payable</p>
                    <p className="mt-1 font-serif text-xl font-semibold text-foreground">{formatINR(total)}</p>
                  </div>
                </div>

                <div className="mt-8 w-full max-w-xs space-y-4">
                  <LegendRow color="bg-primary" label="Principal" value={formatINR(amount)} pct={principalPct} />
                  <LegendRow color="bg-accent" label="Total Interest" value={formatINR(totalInterest)} pct={interestPct} />
                </div>

                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                  Get a tailored quote
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-muted-foreground">
            Figures are indicative and for illustration only. Actual rates and eligibility depend on lender assessment, credit profile and applicable terms.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function SliderField({
  icon,
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  icon: React.ReactNode
  label: string
  value: number
  min: number
  max: number
  step: number
  format: (n: number) => string
  onChange: (n: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="mb-7">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-primary">{icon}</span>
          {label}
        </label>
        <span className="rounded-lg bg-secondary px-3 py-1.5 font-serif text-base font-semibold text-primary">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        className="cc-range mt-4 w-full"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ ['--val' as string]: `${pct}%` }}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

function LegendRow({ color, label, value, pct }: { color: string; label: string; value: string; pct: number }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className={cn('h-3 w-3 rounded-full', color)} />
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <div className="text-right">
        <span className="font-semibold text-foreground">{value}</span>
        <span className="ml-2 text-xs text-muted-foreground">{pct.toFixed(0)}%</span>
      </div>
    </div>
  )
}
