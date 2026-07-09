import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
// We serve it inside an iframe so its CSS stays isolated, with the real site Header
// and an editorial page header on top.
export default function StoryLabPage() {
  return (
    <>
      <div className="flex h-[100dvh] flex-col overflow-hidden">
        <Header />

        {/* Editorial page header — the instrument fills the rest of the viewport */}
        <div className="border-b border-brand-navy">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="dateline text-brand-cyan mb-3">The Lab</div>
            <h1 className="font-display font-medium text-3xl md:text-4xl leading-tight text-brand-navy">
              Story Lab
            </h1>
            <p className="mt-2 max-w-3xl leading-relaxed text-brand-slate">
              Every travel story is built from a finite set of elements. Combine them into story hooks, scan copy for inert clichés, and see why specificity is retrievability in the AI search era.
            </p>
          </div>
        </div>

        <iframe
          src="/story-lab.html"
          title="Story Lab — The Periodic Table of Travel Storytelling"
          className="block w-full flex-1 border-0"
        />
      </div>
      <Footer />
    </>
  )
}
