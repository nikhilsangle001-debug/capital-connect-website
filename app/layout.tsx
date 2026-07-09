import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const siteUrl = 'https://capitalconnect.example'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Capital Connect | Integrated Debt, Equity & Capital Advisory',
    template: '%s | Capital Connect',
  },
  description:
    'Capital Connect is a professionally managed capital advisory firm delivering structured debt and equity solutions for individuals, MSMEs, corporates and real estate developers across India.',
  keywords: [
    'capital advisory',
    'debt advisory',
    'equity solutions',
    'structured finance',
    'project finance',
    'MSME loans',
    'private debt',
    'growth capital',
    'India investment banking',
  ],
  authors: [{ name: 'Capital Connect' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: 'Capital Connect | Integrated Debt, Equity & Capital Advisory',
    description:
      'Structured funding solutions for individuals, MSMEs, corporates and real estate developers.',
    siteName: 'Capital Connect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capital Connect | Integrated Debt, Equity & Capital Advisory',
    description:
      'Structured funding solutions for individuals, MSMEs, corporates and real estate developers.',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#16233f',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Capital Connect',
  description:
    'Integrated debt, equity and capital advisory platform providing structured funding solutions across India.',
  url: siteUrl,
  areaServed: 'IN',
  founder: {
    '@type': 'Person',
    name: 'Sunil Poojari',
    jobTitle: 'Founder',
  },
  serviceType: [
    'Debt Advisory',
    'Equity Advisory',
    'Structured Finance',
    'Capital Structuring',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98765-43210',
    contactType: 'customer service',
    email: 'contact@capitalconnect.in',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
