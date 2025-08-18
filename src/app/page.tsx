'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Play, Clock } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'

// Temporary data - we'll move this to Supabase later
const webinars = [
  {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description:
      'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies.',
    duration: '45 min',
    muxPlaybackId: 'DZMjucH02v9101xDceIuIa017xewOTUq5Qhat3TW902vMRw',
    thumbnail:
      'https://image.mux.com/DZMjucH02v9101xDceIuIa017xewOTUq5Qhat3TW902vMRw/thumbnail.png?width=1200&height=675&fit_mode=preserve',
    level: 'Intermediate',
  },
  {
    id: 'ai-101',
    title: 'AI 101',
    description:
      'Foundation concepts of AI for tourism professionals. Start here to build your AI knowledge base.',
    duration: '40 min',
    muxPlaybackId: 'pending', // Update when uploaded
    thumbnail: '/placeholder-1.jpg',
    level: 'Beginner',
  },
  {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description:
      'Hands-on exploration of AI tools specifically curated for destination marketing teams.',
    duration: '50 min',
    muxPlaybackId: 'pending', // Update when uploaded
    thumbnail: '/placeholder-2.jpg',
    level: 'Intermediate',
  },
  {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description:
      'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation.',
    duration: '45 min',
    muxPlaybackId: 'pending', // Update when uploaded
    thumbnail: '/placeholder-3.jpg',
    level: 'Advanced',
  },
]

// Slim, accurate stats. To remove the stats entirely, delete the section where it's rendered.
const stats = [
  { label: 'Webinars', value: '4' },
  { label: 'Hours of Content', value: '3+' },
]

export default function HomePage() {
  return (
    <AccessCheck>
      <>
        {/* Header (simplified—removed Sign In / Get Started) */}
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Image
                  src="/brandusa-logo.png"
                  alt="Brand USA"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="ml-3 text-xl font-semibold text-brand-navy">
                  Agents of Change
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Become an AI Agent of Change
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                {/* Text updated per request */}
                Join Brand USA&apos;s exclusive AI learning platform designed for tourism professionals ready to lead the future of tourism.
              </p>
              <div className="flex justify-center">
                {/* Single clear CTA that scrolls to the grid */}
                <Link
                  href="#webinars"
                  className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
                >
                  Browse Content
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent pointer-events-none" />
        </section>

        {/* Stats Section (minimal + accurate). Remove this block if you’d prefer no stats. */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-brand-navy">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section id="webinars" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Webinar Series
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deep-dive sessions from industry experts on AI implementation for tourism marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webinars.map((webinar) => (
                <Link
                  key={webinar.id}
                  href={`/webinar/${webinar.id}`}
                  className="group relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-gray-300 transition-all duration-300 bg-white"
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    {webinar.muxPlaybackId !== 'pending' ? (
                      <Image
                        src={webinar.thumbnail}
                        alt={webinar.title}
                        fill
                        priority={false}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <span className="text-gray-500 font-medium">Coming Soon</span>
                      </div>
                    )}

                    {/* Polished overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    {/* Duration pill */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/60 text-white text-xs font-semibold px-3 py-1 backdrop-blur">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{webinar.duration}</span>
                    </div>

                    {/* Level pill */}
                    <div className="absolute top-3 right-3 rounded-full bg-white/85 text-gray-900 text-xs font-semibold px-3 py-1 backdrop-blur">
                      {webinar.level}
                    </div>

                    {/* Play affordance on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 rounded-full bg-white/90 text-brand-navy font-semibold px-4 py-2 shadow">
                        <Play className="h-5 w-5" />
                        <span>Watch</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{webinar.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA removed to avoid redundancy. 
            If you want a gentle footer nudge later, consider a simple anchor back to #webinars or a note about upcoming lessons. */}
      </>
    </AccessCheck>
  )
}
