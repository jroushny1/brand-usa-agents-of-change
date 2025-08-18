'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Play, Clock, TrendingUp, Users } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'

// Temporary data - we'll move this to Supabase later
const webinars = [
  {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies.',
    duration: '45 min',
    muxPlaybackId: 'DZMjucH02v9101xDceIuIa017xewOTUq5Qhat3TW902vMRw',
    thumbnail: 'https://image.mux.com/DZMjucH02v9101xDceIuIa017xewOTUq5Qhat3TW902vMRw/thumbnail.png?width=800&height=450',
    level: 'Intermediate',
  },
  {
    id: 'ai-101',
    title: 'AI 101',
    description: 'Foundation concepts of AI for tourism professionals. Start here to build your AI knowledge base.',
    duration: '40 min',
    muxPlaybackId: 'pending', // Update when uploaded
    thumbnail: '/placeholder-1.jpg',
    level: 'Beginner',
  },
  {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams.',
    duration: '50 min',
    muxPlaybackId: 'pending', // Update when uploaded
    thumbnail: '/placeholder-2.jpg',
    level: 'Intermediate',
  },
  {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation.',
    duration: '45 min',
    muxPlaybackId: 'pending', // Update when uploaded
    thumbnail: '/placeholder-3.jpg',
    level: 'Advanced',
  },
]

const stats = [
  { label: 'Hours of Content', value: '3+', icon: Clock },
  { label: 'Expert-Led Sessions', value: '4', icon: Users },
  { label: 'Completion Certificate', value: '✓', icon: TrendingUp },
]

export default function HomePage() {
  return (
    <AccessCheck>
      <>
        {/* Header */}
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
            <nav className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Link>
              <Link 
                href="/register" 
                className="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-brand-navy transition"
              >
                Get Started
              </Link>
            </nav>
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
              Join Brand USA's exclusive AI learning platform designed for tourism professionals ready to lead the future of tourism.
            </p>
            <div className="flex justify-center">
              <a 
                href="#webinars" 
                className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
              >
                Watch Webinars
                <Play className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-sky/10 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-brand-sky" />
                  </div>
                  <div className="text-3xl font-bold text-brand-navy">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
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
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  {webinar.muxPlaybackId !== 'pending' ? (
                    <Image
                      src={webinar.thumbnail}
                      alt={webinar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <span className="text-gray-500 font-medium">Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white">
                      <Play className="h-10 w-10 mr-3 drop-shadow-lg" fill="white" />
                      <span className="font-semibold text-lg drop-shadow-lg">Play Video</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      webinar.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      webinar.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {webinar.level}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {webinar.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {webinar.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Destination Marketing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join tourism professionals across the USA who are leading with AI.
          </p>
          <div className="space-y-4 text-sm text-blue-100">
            <p>Access code required for beta access</p>
            <p>Questions? Email <a href="mailto:partners@thebrandusa.com" className="underline">partners@thebrandusa.com</a></p>
          </div>
        </div>
      </section>
    </>
    </AccessCheck>
  )
}
