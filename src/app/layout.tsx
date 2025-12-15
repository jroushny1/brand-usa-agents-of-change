import type { Metadata } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Janette Roush | Chief AI Officer & Innovation Keynote Speaker',
  description: 'Janette Roush is the SVP of Innovation & Chief AI Officer at Brand USA. A LinkedIn Top Voice and Broadway veteran, she specializes in Generative AI strategy for travel and marketing.',
  alternates: {
    canonical: 'https://www.janetteroush.com',
  },
  openGraph: {
    title: 'Janette Roush | Chief AI Officer & Innovation Keynote Speaker',
    description: 'Janette Roush is the SVP of Innovation & Chief AI Officer at Brand USA. A LinkedIn Top Voice and Broadway veteran, she specializes in Generative AI strategy for travel and marketing.',
    images: ['/og-image.png'],
    url: 'https://www.janetteroush.com',
    siteName: 'Janette Roush - Brand USA Agents of Change',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janette Roush | Chief AI Officer & Innovation Keynote Speaker',
    description: 'Janette Roush is the SVP of Innovation & Chief AI Officer at Brand USA. A LinkedIn Top Voice and Broadway veteran, she specializes in Generative AI strategy for travel and marketing.',
    creator: '@janetteroush',
  },
  metadataBase: new URL('https://www.janetteroush.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Janette Roush",
    "jobTitle": "SVP of Innovation and Chief AI Officer",
    "affiliation": {
      "@type": "Organization",
      "name": "Brand USA"
    },
    "url": "https://www.janetteroush.com",
    "sameAs": [
      "https://www.linkedin.com/in/janetteroush/"
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
      <body className={`${montserrat.variable} ${oswald.variable} font-sans`}>
        <div className="min-h-screen bg-white">
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
      </body>
    </html>
  )
}
