'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { supabase } from '@/lib/supabase'

const WHATSAPP_NUMBER = '919876543210'

const details = [
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email', value: 'contact@capitalconnect.in', href: 'mailto:contact@capitalconnect.in' },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Bandra Kurla Complex, Mumbai, Maharashtra 400051, India',
    href: 'https://maps.google.com/?q=Bandra+Kurla+Complex+Mumbai',
  },
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      requirement: String(formData.get('requirement') || ''),
      message: String(formData.get('message') || ''),
    }

    setStatus('loading')
    try {
      const { error } = await supabase.from('enquiries').insert(payload)
      if (error) throw error
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute -right-16 top-1/4 aurora-blob h-72 w-72 bg-accent/10" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title={'Let\u2019s discuss your capital requirement'}
              description="Share a few details about your funding objective and our team will arrange a confidential consultation within 24 hours."
            />

            <div className="mt-10 space-y-6">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.label === 'Office' ? '_blank' : undefined}
                  rel={d.label === 'Office' ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-accent">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-1 text-base text-foreground transition-colors group-hover:text-primary">
                      {d.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Capital Connect, I would like to discuss a funding requirement.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#128C4A] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_20px_60px_-40px_rgba(22,35,63,0.5)] sm:p-10">
              {status === 'success' ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/15">
                    <CheckCircle2 className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">Thank you</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Your enquiry has been received. A member of our advisory team
                    will be in touch shortly to arrange your consultation.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full Name" name="name" type="text" required placeholder="Your name" />
                    <Field label="Phone" name="phone" type="tel" required placeholder="+91" />
                  </div>
                  <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
                  <div>
                    <label htmlFor="requirement" className="mb-2 block text-sm font-medium text-foreground">
                      Requirement
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                    >
                      <option value="" disabled>Select a solution</option>
                      <option>Debt Advisory</option>
                      <option>Equity Advisory</option>
                      <option>Project / Construction Finance</option>
                      <option>Structured / Private Debt</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your funding objective"
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/30"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      Something went wrong. Please try again or reach us directly by phone.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Schedule Consultation
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string
  name: string
  type: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}
