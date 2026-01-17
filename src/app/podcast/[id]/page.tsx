'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Podcast as PodcastIcon, Calendar, Users, ExternalLink } from 'lucide-react'
import TranscriptSection from '@/components/webinar/TranscriptSection'
import ResourcesList from '@/components/webinar/ResourcesList'

// Podcast data structure
const podcastData = {
  'fandom-unpacked-ai-live-entertainment': {
    id: 'fandom-unpacked-ai-live-entertainment',
    title: 'AI\'s Impact on Live Entertainment: Unpacking the Business Effects on Sports, Arts, and Ticketed Events',
    podcastName: 'Fandom Unpacked',
    season: 1,
    episode: 9,
    publishDate: 'April 23, 2025',
    hosts: ['Damian Bazadona', 'Peter Yagecic', 'Maureen Andersen'],
    guests: ['Janette Roush'],
    description: 'This episode explores how artificial intelligence is transforming live entertainment discovery and fan experiences. The discussion covers AI-powered recommendations moving away from keyword-driven search toward personalized fan connections, practical tools like ChatGPT Team, Claude, Google Notebook LM, Midjourney, and Descript, and envisions a future where personal AI assistants proactively recommend experiences based on individual preferences and schedules.',
    audioUrl: 'https://www.buzzsprout.com/2449648/17030825-ai-s-impact-on-live-entertainment-unpacking-the-business-effects-on-sports-arts-and-ticketed-events.mp3',
    buzzsproutEmbedUrl: 'https://www.buzzsprout.com/2449648/episodes/17030825',
    thumbnailUrl: '',
    duration: '',
    topics: [
      'AI in Live Entertainment',
      'Fan Experience',
      'Personalized Recommendations',
      'ChatGPT',
      'Claude',
      'Google Notebook LM',
      'Midjourney',
      'Descript',
      'Marketing AI',
      'Sports & Entertainment'
    ],
    relatedResources: [
      {
        name: 'Presentation Slides',
        description: 'Download the full presentation from the episode',
        url: 'https://situationlive.com/aipdf'
      },
      {
        name: 'Listen on Apple Podcasts',
        description: 'Subscribe and listen on Apple Podcasts',
        url: 'https://podcasts.apple.com/podcast/fandom-unpacked'
      },
      {
        name: 'Listen on Spotify',
        description: 'Subscribe and listen on Spotify',
        url: 'https://open.spotify.com/show/fandom-unpacked'
      }
    ]
  }
}

export default function PodcastPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const podcast = podcastData[id as keyof typeof podcastData]
  const [transcript, setTranscript] = useState<string>('')
  const [transcriptLoading, setTranscriptLoading] = useState(true)

  useEffect(() => {
    async function loadTranscript() {
      try {
        const res = await fetch(`/transcripts/podcasts/${id}.md`)
        if (res.ok) {
          const text = await res.text()
          setTranscript(text)
        }
      } catch (error) {
        console.error('Error loading transcript:', error)
      } finally {
        setTranscriptLoading(false)
      }
    }
    loadTranscript()
  }, [id])

  if (!podcast) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-navy mb-4">Podcast Not Found</h1>
          <Link href="/library" className="text-brand-blue hover:text-brand-cyan">
            Return to Library
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              href="/library"
              className="flex items-center text-brand-navy hover:text-brand-cyan transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
              Back to Library
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Podcast Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center">
                <PodcastIcon className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-1">
                  {podcast.podcastName}
                </div>
                <div className="text-sm text-gray-500">
                  Season {podcast.season}, Episode {podcast.episode}
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              {podcast.title}
            </h1>

            {/* Metadata Row */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {podcast.publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {podcast.guests.length} Guest{podcast.guests.length > 1 ? 's' : ''}
              </div>
            </div>

            {/* Hosts & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Hosts
                </div>
                <div className="text-sm text-brand-navy">
                  {podcast.hosts.join(', ')}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Guest{podcast.guests.length > 1 ? 's' : ''}
                </div>
                <div className="text-sm text-brand-navy">
                  {podcast.guests.join(', ')}
                </div>
              </div>
            </div>

            {/* Audio Player Embed */}
            <div className="mb-6">
              <iframe
                src={`${podcast.buzzsproutEmbedUrl}/embed`}
                loading="lazy"
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                title={`${podcast.podcastName} - ${podcast.title}`}
                className="rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="prose prose-gray max-w-none">
              <h2 className="text-lg font-semibold text-brand-navy mb-3">About This Episode</h2>
              <p className="text-gray-700 leading-relaxed">
                {podcast.description}
              </p>
            </div>
          </div>

          {/* Topics */}
          {podcast.topics && podcast.topics.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-lg font-semibold text-brand-navy mb-4">Topics Covered</h2>
              <div className="flex flex-wrap gap-2">
                {podcast.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Transcript */}
          {!transcriptLoading && transcript && (
            <div className="bg-white rounded-2xl shadow-lg mb-8">
              <TranscriptSection transcript={transcript} />
            </div>
          )}

          {/* Related Resources */}
          {podcast.relatedResources && podcast.relatedResources.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <ResourcesList resources={podcast.relatedResources} />
            </div>
          )}

          {/* Listen Elsewhere CTA */}
          <div className="mt-8 p-6 bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl shadow-lg text-white text-center">
            <h3 className="text-xl font-bold mb-2">Enjoyed this episode?</h3>
            <p className="mb-4 text-white/90">
              Subscribe to Fandom Unpacked on your favorite podcast platform
            </p>
            <a
              href={podcast.buzzsproutEmbedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Listen on Buzzsprout
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
