import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { About } from '@/components/about'
import { DebtSolutions } from '@/components/debt-solutions'
import { EquitySolutions } from '@/components/equity-solutions'
import { EmiCalculator } from '@/components/emi-calculator'
import { HowItWorks } from '@/components/how-it-works'
import { Leadership } from '@/components/leadership'
import { CoreStrengths } from '@/components/core-strengths'
import { VisionMission } from '@/components/vision-mission'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { AiAssistant } from '@/components/ai-assistant'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <DebtSolutions />
        <EquitySolutions />
        <EmiCalculator />
        <HowItWorks />
        <Leadership />
        <CoreStrengths />
        <VisionMission />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <AiAssistant />
    </>
  )
}
