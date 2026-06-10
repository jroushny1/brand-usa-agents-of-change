import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Podcast as PodcastIcon, Calendar, Users, ExternalLink } from 'lucide-react'
import ResourcesList from '@/components/webinar/ResourcesList'
import PodcastTranscript from './PodcastTranscript'
import { podcastData, podcastIds } from '@/data/podcasts'

export function generateStaticParams() {
  return podcastIds.map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const podcast = podcastData[id as keyof typeof podcastData]
  if (!podcast) return {}
  return {
    title: podcast.title,
    description: podcast.description,
    alternates: { canonical: `https://janetteroush.com/podcast/${id}` },
    openGraph: {
      title: podcast.title,
      description: podcast.description,
    },
    twitter: { card: 'summary' },
  }
}

export default async function PodcastPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const podcast = podcastData[id as keyof typeof podcastData]

  if (!podcast) {
    notFound()
  }

  // PodcastEpisode schema for AI discoverability
  const podcastEpisodeSchema = {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    '@id': `https://janetteroush.com/podcast/${id}`,
    'name': podcast.title,
    'description': podcast.description,
    'url': `https://janetteroush.com/podcast/${id}`,
    'datePublished': podcast.publishDate,
    'episodeNumber': podcast.episode,
    'partOfSeason': {
      '@type': 'PodcastSeason',
      'seasonNumber': podcast.season
    },
    'partOfSeries': {
      '@type': 'PodcastSeries',
      'name': podcast.podcastName,
      'url': `https://janetteroush.com/library`
    },
    'author': podcast.hosts.map(host => ({
      '@type': 'Person',
      'name': host
    })),
    'contributor': podcast.guests.map(guest => ({
      '@type': 'Person',
      'name': guest
    })),
    'associatedMedia': {
      '@type': 'AudioObject',
      'contentUrl': podcast.audioUrl,
      'encodingFormat': 'audio/mpeg'
    },
    'about': (podcast.topics || []).slice(0, 10).map(topic => ({
      '@type': 'Thing',
      'name': topic
    })),
    'keywords': (podcast.topics || []).join(', ')
  }

  // FAQPage schema - key to AI discoverability (StackList's secret sauce)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `What is the "${podcast.podcastName}" episode "${podcast.title}" about?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': podcast.description
        }
      },
      {
        '@type': 'Question',
        'name': `Who are the guests on this ${podcast.podcastName} episode about AI in tourism?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `This episode features ${podcast.guests.join(', ')} as guest${podcast.guests.length > 1 ? 's' : ''}, hosted by ${podcast.hosts.join(', ')}. The discussion focuses on AI's impact on destination marketing and tourism.`
        }
      },
      {
        '@type': 'Question',
        'name': `What AI and tourism topics are covered in "${podcast.title}"?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `This episode covers: ${(podcast.topics || []).join(', ')}. It's part of Brand USA's Agents of Change program featuring insights from Janette Roush, Chief AI Officer.`
        }
      }
    ]
  }

  // BreadcrumbList for navigation
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://janetteroush.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Library',
        'item': 'https://janetteroush.com/library'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': podcast.title,
        'item': `https://janetteroush.com/podcast/${id}`
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for AI Discoverability */}
      <script
        id="podcast-episode-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastEpisodeSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
          <PodcastTranscript id={id} />

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
