import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Story Lab — The Periodic Table of Travel Storytelling',
  description:
    'Every travel story is built from a finite set of elements. Combine them into story hooks, scan copy for inert clichés, and see why specificity is retrievability in the AI search era.',
  openGraph: {
    title: 'Story Lab | Agents of Change',
    description:
      'The Periodic Table of Travel Storytelling — an instrument for copy machines can cite and travelers can feel.',
  },
}

// The instrument is a self-contained static document with its own dark design system.
// We serve it inside an iframe so its CSS stays isolated, with the real site Header on top.
const storyLabSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Story Lab — The Periodic Table of Travel Storytelling',
  url: 'https://janetteroush.com/story-lab',
  description:
    'Every travel story is built from a finite set of elements. Combine them into story hooks, scan copy for inert clichés, and see why specificity is retrievability in the AI search era.',
  applicationCategory: 'Travel content tool',
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

export default function StoryLabPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', overflow: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storyLabSchema) }}
      />
      <Header />
      <iframe
        src="/story-lab.html"
        title="Story Lab — The Periodic Table of Travel Storytelling"
        style={{ flex: 1, width: '100%', border: 0, display: 'block' }}
      />
    </div>
  )
}
