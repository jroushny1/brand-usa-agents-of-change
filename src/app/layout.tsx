import type { Metadata } from 'next'
import { Fraunces, Newsreader, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import AnalyticsEvents from '@/components/AnalyticsEvents'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Janette Roush | Working Inside of AI',
    template: '%s | Janette Roush',
  },
  description: 'Janette Roush is the SVP, Innovation and Chief AI Officer at Brand USA. A LinkedIn Top Voice and Broadway veteran, she specializes in Generative AI strategy for travel and marketing.',
  // Note: no global canonical here — a layout-level canonical is inherited by
  // every page that doesn't override it, marking them all as duplicates of the
  // homepage. The homepage sets its own canonical in src/app/page.tsx.
  alternates: {
    types: {
      'application/rss+xml': 'https://janetteroush.com/notes/feed.xml',
    },
  },
  openGraph: {
    title: 'Janette Roush | Working Inside of AI',
    description: 'Janette Roush is the SVP, Innovation and Chief AI Officer at Brand USA. A LinkedIn Top Voice and Broadway veteran, she specializes in Generative AI strategy for travel and marketing.',
    images: ['/og-image.png'],
    url: 'https://janetteroush.com',
    siteName: 'Janette Roush',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janette Roush | Working Inside of AI',
    description: 'Janette Roush is the SVP, Innovation and Chief AI Officer at Brand USA. A LinkedIn Top Voice and Broadway veteran, she specializes in Generative AI strategy for travel and marketing.',
    creator: '@janetteroush',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://janetteroush.com'),
  verification: {
    google: 'kjR3px6l5eGFqgVwWwl8Gu1D3OVuDKC3NhP8cLPuPTs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const BRAND_USA_SAMEAS = [
    "https://en.wikipedia.org/wiki/Brand_USA",
    "https://www.wikidata.org/wiki/Q52556956",
    "https://www.linkedin.com/company/brand-usa",
    "https://www.thebrandusa.com",
    "https://x.com/VisitTheUSA",
    "https://www.instagram.com/visittheusa",
    "https://www.facebook.com/VisitTheUSA"
  ]

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Janette Roush",
    "jobTitle": "SVP, Innovation and Chief AI Officer",
    "affiliation": {
      "@type": "Organization",
      "name": "Brand USA",
      "sameAs": BRAND_USA_SAMEAS
    },
    "url": "https://janetteroush.com",
    "sameAs": [
      "https://www.linkedin.com/in/janetteroush/",
      "https://janetteroush.com"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Destination Marketing",
      "Broadway",
      "Generative AI",
      "Innovation Strategy"
    ]
  }

  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/hls.js@latest" strategy="beforeInteractive" />
        {/* JSON-LD for Janette Roush Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-body`}>
        <div className="min-h-screen">
          {children}
        </div>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DXWHJGXCKD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DXWHJGXCKD');
          `}
        </Script>
        <AnalyticsEvents />
      </body>
    </html>
  )
}
