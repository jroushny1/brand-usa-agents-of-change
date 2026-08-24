import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StoryLabFrame from '@/components/StoryLabFrame'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Story Lab — The Periodic Table of Travel Storytelling',
  description:
    'Every travel story is built from a finite set of elements. Combine them into story hooks, scan copy for inert clichés, and see why specificity is retrievability in the AI search era.',
  alternates: { canonical: 'https://janetteroush.com/story-lab' },
  openGraph: {
    title: 'Story Lab',
    description:
      'The Periodic Table of Travel Storytelling — an instrument for copy machines can cite and travelers can feel.',
  },
}

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
    url: 'https://janetteroush.com',
  },
  isPartOf: { '@type': 'WebSite', name: 'Janette Roush', url: 'https://janetteroush.com' },
}

export default function StoryLabPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storyLabSchema) }}
      />
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-10">
        <div className="border-b border-brand-navy pb-10">
          <div className="dateline text-brand-cyan mb-4">The Lab</div>
          <h1 className="font-display font-medium text-4xl md:text-6xl leading-none text-brand-navy">
            Story Lab
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-brand-navy">
            Every travel story is built from a finite set of elements. Combine them into story hooks, scan copy for inert clichés, and see why specificity is retrievability in the AI search era.
          </p>
        </div>
      </section>

      <StoryLabFrame />

      <Footer />
    </>
  )
}
