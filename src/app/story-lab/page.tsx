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
export default function StoryLabPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', overflow: 'hidden' }}>
      <Header />
      <iframe
        src="/story-lab.html"
        title="Story Lab — The Periodic Table of Travel Storytelling"
        style={{ flex: 1, width: '100%', border: 0, display: 'block' }}
      />
    </div>
  )
}
