import type { Metadata } from 'next'
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

const aiAuditSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'AI Vision Simulator — AI Readiness Audit',
  url: 'https://janetteroush.com/ai-audit',
  description:
    'See what ChatGPT, Claude, and Perplexity see on your site. An interactive AI readiness audit for destination marketing organizations: robots.txt, schema markup, and content visibility.',
  applicationCategory: 'AI readiness tool',
  operatingSystem: 'Web browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  creator: {
    '@type': 'Person',
    name: 'Janette Roush',
    jobTitle: 'SVP, Innovation and Chief AI Officer',
    affiliation: { '@type': 'Organization', name: 'Brand USA' },
  },
  isPartOf: { '@type': 'WebSite', name: 'Agents of Change', url: 'https://janetteroush.com' },
}

export default function AIAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiAuditSchema) }}
      />
      <AuditClient />
    </>
  )
}
