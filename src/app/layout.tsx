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
  title: 'Brand USA Agents of Change',
  description: 'AI Learning Platform for Destination Marketing Organizations and US tourism professionals',
  openGraph: {
    title: 'Brand USA Agents of Change',
    description: 'AI Learning Platform for Destination Marketing Organizations and US tourism professionals',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/hls.js@latest" strategy="beforeInteractive" />
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
