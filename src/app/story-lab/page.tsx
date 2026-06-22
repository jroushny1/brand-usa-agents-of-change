import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Story Lab — The Periodic Table of Travel Storytelling',
  description:
    'An interactive lab for travel storytelling: combine elements into a Story Starter, run a client intake to find the story to design and sell, or scan copy for inert clichés. Built for Brand USA, US destinations.',
  openGraph: {
    title: 'Story Lab | Agents of Change',
    description:
      'The Periodic Table of Travel Storytelling — turn story elements into usable, US-focused copy.',
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
