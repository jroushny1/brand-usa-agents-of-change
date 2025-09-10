import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

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
        <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
      </head>
      <body className={inter.className}>
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
