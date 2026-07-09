import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { DebtSolutions } from '@/components/debt-solutions'
import { EquitySolutions } from '@/components/equity-solutions'
import { Leadership } from '@/components/leadership'
import { CoreStrengths } from '@/components/core-strengths'
import { VisionMission } from '@/components/vision-mission'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <DebtSolutions />
        <EquitySolutions />
        <Leadership />
        <CoreStrengths />
        <VisionMission />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
