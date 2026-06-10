import type { Metadata } from 'next'
import AuditClient from './AuditClient'

export const metadata: Metadata = {
  title: 'AI Vision Simulator — AI Readiness Audit',
  description: 'See what ChatGPT, Claude, and Perplexity see on your site. An interactive AI readiness audit for destination marketing organizations: robots.txt, schema markup, and content visibility.',
  alternates: { canonical: 'https://www.janetteroush.com/ai-audit' },
  openGraph: {
    title: 'AI Vision Simulator — AI Readiness Audit',
    description: 'See what ChatGPT, Claude, and Perplexity see on your site. An interactive AI readiness audit for destination marketing organizations.',
  },
}

export default function AIAuditPage() {
  return <AuditClient />
}
