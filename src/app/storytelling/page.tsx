import Header from '@/components/Header'
import AccessCheck from '@/components/AccessCheck'
import StorytellingLab from '@/components/StorytellingLab'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Periodic Table of Storytelling',
  description:
    'An interactive AI lab built on the Periodic Table of Storytelling: scan any film to reveal the tropes in its DNA, or select narrative elements to synthesize an original story concept.',
  openGraph: {
    title: 'Periodic Table of Storytelling | Agents of Change',
    description:
      'Scan a film to reveal its storytelling DNA, or combine narrative elements into an original concept — an interactive AI demo.',
  },
}

export default function StorytellingPage() {
  return (
    <AccessCheck>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: '#f4efe3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 text-center">
          <h1 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wide text-brand-navy">
            The Periodic Table of Storytelling
          </h1>
        </div>
        <StorytellingLab />
      </main>
    </AccessCheck>
  )
}
