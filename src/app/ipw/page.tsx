import Header from '@/components/Header'
import { CalendarDays, MapPin, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Sessions at IPW 2026',
  description: 'Join Brand USA for AI-focused sessions at IPW 2026 in Fort Lauderdale. Details coming soon.',
  openGraph: {
    title: 'AI Sessions at IPW 2026 | Agents of Change',
    description: 'Join Brand USA for AI-focused sessions at IPW 2026 in Fort Lauderdale. Details coming soon.',
  },
}

export default function IPWPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-brand-navy via-brand-navy to-brand-blue-900">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span className="text-brand-cyan text-sm font-medium font-display uppercase tracking-wider">Coming Soon</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            AI Sessions at IPW 2026
          </h1>

          <div className="flex items-center justify-center gap-6 text-brand-gray-300 mb-10">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-cyan" />
              Fort Lauderdale
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-brand-cyan" />
              May 19–21, 2026
            </span>
          </div>

          <p className="text-lg text-brand-gray-300 leading-relaxed mb-12 max-w-xl mx-auto">
            Brand USA is bringing AI to IPW with hands-on sessions designed for tourism leaders and practitioners. Full session details, times, and registration information will be available here soon.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-brand-gray-400 text-sm">
              Check back for the full schedule, or reach out to{' '}
              <a href="mailto:jroush@thebrandusa.com" className="text-brand-cyan hover:underline">
                jroush@thebrandusa.com
              </a>{' '}
              for more information.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
