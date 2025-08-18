'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Download, CheckCircle, Clock, BookOpen, MessageSquare } from 'lucide-react'

// This would come from your database
const webinarData = {
  'intro-ai-agents': {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies.',
    duration: '38 min',
    muxPlaybackId: '3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Introduction' },
      { time: 180, title: 'What are AI Agents?' },
      { time: 600, title: 'DMO Use Cases' },
      { time: 1200, title: 'Implementation Strategy' },
      { time: 1800, title: 'Best Practices' },
      { time: 2100, title: 'Q&A Session' },
    ],
    resources: [
      { name: 'AI Agents Playbook', url: '/resources/ai-agents-playbook.pdf' },
      { name: 'Implementation Checklist', url: '/resources/implementation-checklist.pdf' },
      { name: 'Prompt Templates', url: '/resources/prompt-templates.pdf' },
    ],
  },
  'ai-101': {
    id: 'ai-101',
    title: 'AI 101',
    description: 'Foundation concepts of AI for tourism professionals. Start here to build your AI knowledge base.',
    duration: '45 min',
    muxPlaybackId: 'ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Welcome & Introduction' },
      { time: 300, title: 'What is AI?' },
      { time: 900, title: 'Machine Learning Basics' },
      { time: 1500, title: 'Natural Language Processing' },
      { time: 2100, title: 'AI in Tourism' },
      { time: 2400, title: 'Getting Started' },
    ],
    resources: [
      { name: 'AI Fundamentals Guide', url: '/resources/ai-fundamentals.pdf' },
      { name: 'Glossary of AI Terms', url: '/resources/ai-glossary.pdf' },
      { name: 'Further Reading List', url: '/resources/reading-list.pdf' },
    ],
  },
  'ai-tool-playground': {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams.',
    duration: '44 min',
    muxPlaybackId: 'H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Introduction to AI Tools' },
      { time: 300, title: 'Content Generation Tools' },
      { time: 900, title: 'Image & Video AI' },
      { time: 1500, title: 'Data Analysis Tools' },
      { time: 2100, title: 'Chatbots & Customer Service' },
      { time: 2400, title: 'Live Demo & Practice' },
    ],
    resources: [
      { name: 'Tool Comparison Chart', url: '/resources/tool-comparison.pdf' },
      { name: 'Quick Start Guides', url: '/resources/quick-start-guides.pdf' },
      { name: 'DMO Tool Templates', url: '/resources/dmo-templates.pdf' },
    ],
  },
  'ai-dmo-leadership': {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation.',
    duration: '41 min',
    muxPlaybackId: 'NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Executive Overview' },
      { time: 300, title: 'Building an AI Strategy' },
      { time: 900, title: 'Governance & Ethics' },
      { time: 1500, title: 'Team Development' },
      { time: 2100, title: 'ROI & Metrics' },
      { time: 2400, title: 'Future Roadmap' },
    ],
    resources: [
      { name: 'AI Strategy Template', url: '/resources/ai-strategy-template.pdf' },
      { name: 'Governance Framework', url: '/resources/governance-framework.pdf' },
      { name: 'Executive Brief', url: '/resources/executive-brief.pdf' },
    ],
  },
}

export default function WebinarPage({ params }: { params: { id: string } }) {
  const webinar = webinarData[params.id as keyof typeof webinarData]
  const [completed, setCompleted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Load progress from localStorage (we'll move to Supabase later)
  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${params.id}`)
    if (savedProgress) {
      const progress = JSON.parse(savedProgress)
      setCompleted(progress.completed)
      setCurrentTime(progress.currentTime || 0)
    }
  }, [params.id])

  // Save progress
  const saveProgress = (time: number, completed: boolean = false) => {
    const progress = {
      currentTime: time,
      completed,
      lastUpdated: new Date().toISOString(),
    }
    localStorage.setItem(`progress_${params.id}`, JSON.stringify(progress))
  }

  if (!webinar) {
    return <div>Webinar not found</div>
  }

  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Link>
              <Image
                src="/brandusa-logo.png"
                alt="Brand USA"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              {completed && (
                <span className="flex items-center text-green-600 text-sm font-medium">
                  <CheckCircle className="h-5 w-5 mr-1" />
                  Completed
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-black">
              <video
                controls
                className="w-full"
                src={`https://stream.mux.com/${webinar.muxPlaybackId}/high.mp4`}
                poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png?width=1920&height=1080&time=5`}
                onTimeUpdate={(e) => {
                  const time = (e.target as HTMLVideoElement).currentTime
                  setCurrentTime(time)
                  saveProgress(time)
                }}
                onEnded={() => {
                  setCompleted(true)
                  saveProgress(currentTime, true)
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h1 className="text-2xl font-bold text-brand-navy mb-2">
                {webinar.title}
              </h1>
              <p className="text-gray-600 mb-4">{webinar.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {webinar.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {webinar.chapters.length} chapters
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                    {webinar.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">{webinar.instructor}</div>
                    <div className="text-sm text-gray-500">{webinar.instructorTitle}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-brand-navy mb-4">Chapters</h2>
              <div className="space-y-2">
                {webinar.chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const player = document.querySelector('video') as any
                      if (player) {
                        player.currentTime = chapter.time
                        player.play()
                      }
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition text-left"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-12">
                        {Math.floor(chapter.time / 60)}:{(chapter.time % 60).toString().padStart(2, '0')}
                      </span>
                      <span className="ml-3 text-gray-900">{chapter.title}</span>
                    </div>
                    {currentTime >= chapter.time && currentTime < (webinar.chapters[index + 1]?.time || Infinity) && (
                      <span className="text-brand-blue text-sm font-medium">Playing</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-brand-navy mb-4">Resources</h2>
              <div className="space-y-3">
                {webinar.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-brand-blue hover:bg-blue-50 transition group"
                  >
                    <div className="flex items-center">
                      <Download className="h-5 w-5 text-gray-400 group-hover:text-brand-blue mr-3" />
                      <span className="text-gray-900 group-hover:text-brand-blue font-medium">
                        {resource.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">PDF</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Ask a Question */}
            <div className="bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl shadow-sm p-6 text-white">
              <div className="flex items-center mb-3">
                <MessageSquare className="h-6 w-6 mr-2" />
                <h2 className="text-lg font-semibold">AI Q&A</h2>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Ask questions about this webinar content and get instant AI-powered answers.
              </p>
              <button className="w-full bg-white text-brand-blue px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                Coming Soon
              </button>
            </div>

            {/* Progress Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-brand-navy mb-4">Your Progress</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Watch Progress</span>
                    <span className="font-medium text-gray-900">
                      {Math.round((currentTime / (webinar.duration.includes('45') ? 2700 : 2400)) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-brand-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.round((currentTime / (webinar.duration.includes('45') ? 2700 : 2400)) * 100)}%` }}
                    />
                  </div>
                </div>
                {completed && (
                  <div className="pt-3 border-t border-gray-200">
                    <button className="w-full bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-navy transition">
                      Download Certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
