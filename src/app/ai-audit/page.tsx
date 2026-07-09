import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuditClient from './AuditClient'

export const metadata: Metadata = {
  title: 'AI Vision Simulator — AI Readiness Audit',
  description: 'See what ChatGPT, Claude, and Perplexity see on your site. An interactive AI readiness audit for destination marketing organizations: robots.txt, schema markup, and content visibility.',
  alternates: { canonical: 'https://janetteroush.com/ai-audit' },
  openGraph: {
    title: 'AI Vision Simulator — AI Readiness Audit',
    description: 'See what ChatGPT, Claude, and Perplexity see on your site. An interactive AI readiness audit for destination marketing organizations.',
  },
}

export default function AIAuditPage() {
  return (
    <>
      <Header />

      {/* Editorial page header — the audit tool itself renders below, untouched */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-10">
        <div className="border-b border-brand-navy pb-10">
          <div className="dateline text-brand-cyan mb-4">The Lab</div>
          <h1 className="font-display font-medium text-4xl md:text-6xl leading-none text-brand-navy">
            AI Site Audit
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-brand-navy">
            See what ChatGPT, Claude, and Perplexity see on your site. An interactive AI readiness audit for destination marketing organizations: robots.txt, schema markup, and content visibility.
          </p>
        </div>
      </section>

      <AuditClient />

      <Footer />
    </>
  )
}
