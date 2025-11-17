'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Play, Clock, TrendingUp, Users, BookOpen } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'

// Temporary data - we'll move this to Supabase later
const webinars = [
  {
    id: 'ai-101',
    title: 'AI 101',
    description: 'Foundation concepts of AI for tourism professionals. Start here to build your AI knowledge base.',
    duration: '45 min',
    muxPlaybackId: 'ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8',
    thumbnail: 'https://image.mux.com/ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8/thumbnail.png?width=800&height=450&time=10',
    level: 'Strategic',
  },
  {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies.',
    duration: '38 min',
    muxPlaybackId: '3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs',
    thumbnail: 'https://image.mux.com/3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams.',
    duration: '44 min',
    muxPlaybackId: 'H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA',
    thumbnail: 'https://image.mux.com/H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation.',
    duration: '41 min',
    muxPlaybackId: 'NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE',
    thumbnail: 'https://image.mux.com/NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE/thumbnail.png?width=800&height=450&time=10',
    level: 'Strategic',
  },
  {
    id: 'custom-gpts',
    title: 'Custom GPTs: Your New AI Colleague!',
    description: 'Discover how to create and deploy custom GPT assistants that revolutionize your tourism marketing workflows.',
    duration: '34 min',
    muxPlaybackId: 'aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8',
    thumbnail: 'https://image.mux.com/aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'ai-convention-sales',
    title: 'AI for Convention Sales',
    description: 'Master Custom GPTs for meeting follow-up and lead research, then discover vibe coding to build AI-powered tools for business events.',
    duration: '42 min',
    muxPlaybackId: '5xZnY5oJP5nlS5wQsEGv00U00gsf201r00aF00Y902ug26K9o',
    thumbnail: 'https://image.mux.com/5xZnY5oJP5nlS5wQsEGv00U00gsf201r00aF00Y902ug26K9o/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'crit-framework',
    title: 'AI Prompting Using the CRIT Framework',
    description: 'This video introduces the CRIT (Context, Role, Interview, Task) framework for creating effective AI prompts, emphasizing that providing detailed, spoken context leads to much better results than simple typed commands. It then provides two in-depth demonstrations: first, using the CRIT method to plan a detailed one-hour workshop, and second, brainstorming a low-budget marketing activation by uploading a PDF for the AI to use as a source of truth.',
    duration: '12 min',
    muxPlaybackId: 'OC72C8icortMHMBjS87615i9PRYu3C2dGt7XA22JlWU',
    thumbnail: 'https://image.mux.com/OC72C8icortMHMBjS87615i9PRYu3C2dGt7XA22JlWU/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'model-context-protocol',
    title: 'Model Context Protocol',
    description: 'This presentation introduces the Model Context Protocol (MCP) as a technical breakthrough designed to solve AI\'s trustworthiness problem in travel planning by acting as a "source of truth." Janette explains how this technology allows personal AIs to reliably connect with real-time data, demonstrates practical applications for tourism, and outlines the strategic shift for destination marketing organizations.',
    duration: '27 min',
    muxPlaybackId: 'V1DanWAF02sOwwIFov4BXNaTzwT3Kn41TnUWdcyNZfZk',
    thumbnail: 'https://image.mux.com/V1DanWAF02sOwwIFov4BXNaTzwT3Kn41TnUWdcyNZfZk/thumbnail.png?width=800&height=450&time=10',
    level: 'Strategic',
  },
]

// Short-form video content - demos, quick tutorials, and bite-sized learning
const shortFormVideos = [
  {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature—described as a reusable prompt similar to a custom GPT—to build a "Business Trip Packing Assistant." The app\'s design was inspired by the iconic virtual closet from the movie Clueless. Learn how the tool was developed entirely with natural language prompts (like "make it more sparkly"), resulting in a "sparkly, interactive app" that any employee can now use to plan their clothing for business trips.',
    duration: '1 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    thumbnail: 'https://image.mux.com/O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo/thumbnail.png?width=800&height=450&time=10',
    category: 'Demo',
  },
  {
    id: 'ai-presentations',
    title: 'How AI Can Help with Presentations',
    description: 'Janette walks you through her complete AI-powered workflow for creating compelling presentations from the ground up. She shares her entire process, from organizing research in ChatGPT and brainstorming narrative frameworks to generating custom images and even getting AI-powered rehearsal feedback from Gemini.',
    duration: '9 min',
    muxPlaybackId: 'qZkSL00Sd00Qe01OLuiv6TdEiIVYKXZKKk1UPR5RckP2fM',
    thumbnail: 'https://image.mux.com/qZkSL00Sd00Qe01OLuiv6TdEiIVYKXZKKk1UPR5RckP2fM/thumbnail.png?width=800&height=450&time=10',
    category: 'Tutorial',
  },
]

const stats = [
  { label: 'Hours of Content', value: '6+', icon: Clock },
  { label: 'Total Videos', value: '10', icon: Users },
  { label: 'Certificate', value: 'Coming Soon', icon: TrendingUp },
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
              {/* Password protection removed - Exit Beta button hidden */}
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

          {/* Library CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/library"
              className="inline-flex items-center px-6 py-3 bg-brand-sky text-white font-semibold rounded-lg hover:bg-brand-sky/90 transition-colors shadow-md hover:shadow-lg"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Browse Full Learning Library
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              All content structured for AI discoverability and citations
            </p>
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
            {webinars.map((webinar, index) => (
              <Link
                key={webinar.id}
                href={`/webinar/${webinar.id}`}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={webinar.thumbnail}
                    alt={webinar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
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
                      webinar.level === 'Tactical' ? 'bg-blue-100 text-blue-700' :
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

      {/* Short-Form Videos Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Quick Demos & Tutorials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Bite-sized videos showcasing practical AI applications and hands-on demonstrations.
            </p>
            <Link
              href="/shorts"
              className="inline-flex items-center text-brand-blue hover:text-brand-navy font-semibold"
            >
              Watch in TikTok-style feed
              <Play className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortFormVideos.map((video, index) => (
              <Link
                key={video.id}
                href="/shorts"
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-brand-sky text-white text-xs font-semibold px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center text-white">
                      <Play className="h-8 w-8 mr-2 drop-shadow-lg" fill="white" />
                      <span className="font-semibold drop-shadow-lg">{video.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {video.description}
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
            <p>Questions? Email <a href="mailto:jroush@thebrandusa.com" className="underline">jroush@thebrandusa.com</a></p>
          </div>
        </div>
      </section>
    </>
    </AccessCheck>
  )
}
