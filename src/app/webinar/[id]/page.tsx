import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import HLSPlayer from './hls-player'
import KeyTakeawaysList from '@/components/webinar/KeyTakeawaysList'
import LearningOutcomesList from '@/components/webinar/LearningOutcomesList'
import TranscriptSection from '@/components/webinar/TranscriptSection'
import ChaptersList from '@/components/webinar/ChaptersList'
import ResourcesList from '@/components/webinar/ResourcesList'
import { webinarData, webinarIds, webinarMentions } from '@/data/webinars'

export function generateStaticParams() {
  return webinarIds.map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const webinar = webinarData[id as keyof typeof webinarData]
  if (!webinar) return {}
  return {
    title: webinar.title,
    description: webinar.description,
    alternates: { canonical: `https://www.janetteroush.com/webinar/${id}` },
    openGraph: {
      title: webinar.title,
      description: webinar.description,
      type: 'video.other',
      images: [`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png?width=1200&height=630&time=10`],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function WebinarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const webinar = webinarData[id as keyof typeof webinarData]

  if (!webinar) {
    notFound()
  }


  // Generate enhanced JSON-LD schema for AI discoverability
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: webinar.title,
    description: webinar.description,
    duration: webinar.duration,
    thumbnailUrl: `https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`,
    contentUrl: `https://stream.mux.com/${webinar.muxPlaybackId}.m3u8`,
    uploadDate: (webinar as any).publishDate || '2024-01-01',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    contentLocation: {
      '@type': 'Place',
      name: 'United States',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 37.0902,
        longitude: -95.7129
      }
    },
    creator: {
      '@type': 'Person',
      name: webinar.instructor,
      jobTitle: webinar.instructorTitle,
    },
    author: {
      '@type': 'Person',
      name: 'Janette Roush',
      jobTitle: 'Chief AI Officer, SVP Innovation',
      affiliation: {
        '@type': 'Organization',
        name: 'Brand USA'
      },
      knowsAbout: [
        'AI for tourism marketing',
        'Destination marketing AI strategy',
        'Model Context Protocol (MCP)',
        'AI agents for DMOs',
        'Custom GPTs for tourism',
        'CRIT framework for AI prompts',
        'Agentic AI in destination marketing',
        'AI governance in tourism industry',
        'Claude Artifacts for DMO operations',
        'Tourism industry automation'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brand USA Agents of Change',
      url: 'https://www.janetteroush.com'
    },
    isPartOf: {
      '@type': 'Course',
      name: 'AI for Destination Marketing Organizations',
      provider: {
        '@type': 'Organization',
        name: 'Brand USA Agents of Change'
      }
    },
    educationalLevel: (webinar as any).level || 'Professional',
    keywords: (webinar as any).topics?.join(', ') || '',
    about: (webinar as any).topics?.map((topic: string) => ({
      '@type': 'Thing',
      name: topic
    })) || [],
    ...(webinar as any).keyTakeaways && {
      teaches: (webinar as any).keyTakeaways
    },
    ...(webinar as any).learningOutcomes && {
      educationalUse: (webinar as any).learningOutcomes
    },
    ...(webinar as any).targetAudience && {
      audience: {
        '@type': 'Audience',
        audienceType: (webinar as any).targetAudience.primary
      }
    },
    ...(webinarMentions[id] && {
      mentions: webinarMentions[id]
    })
  }

  // BreadcrumbList schema for navigation hierarchy
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.janetteroush.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Webinars',
        item: 'https://www.janetteroush.com/#webinars'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: webinar.title,
        item: `https://www.janetteroush.com/webinar/${id}`
      }
    ]
  }

  // FAQPage schema - the key to AI discoverability (like StackList's "AI Discoverability" feature)
  // Transforms key takeaways into Q&A pairs that AI crawlers can easily parse
  const faqSchema = (webinar as any).keyTakeaways && (webinar as any).keyTakeaways.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': (webinar as any).keyTakeaways.map((takeaway: string, index: number) => {
      // Generate contextual questions based on webinar content
      const questions = [
        `What are the main concepts covered in "${webinar.title}"?`,
        `What practical tools are demonstrated in this ${(webinar as any).level === 'Strategic' ? 'strategic' : 'tactical'} webinar?`,
        `What are the key risks or limitations discussed in "${webinar.title}"?`,
        `How does this webinar envision the future of AI in destination marketing?`,
        `What security or governance considerations are covered?`
      ]
      return {
        '@type': 'Question',
        'name': questions[index] || `What is key insight #${index + 1} from "${webinar.title}"?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': takeaway
        }
      }
    })
  } : null

  // Course schema for educational content
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': webinar.title,
    'description': webinar.description,
    'url': `https://www.janetteroush.com/webinar/${id}`,
    'provider': {
      '@type': 'Organization',
      'name': 'Brand USA Agents of Change',
      'url': 'https://www.janetteroush.com'
    },
    'instructor': {
      '@type': 'Person',
      'name': webinar.instructor,
      'jobTitle': webinar.instructorTitle
    },
    'educationalLevel': 'Professional',
    'audience': {
      '@type': 'EducationalAudience',
      'audienceType': 'tourism professionals',
      'educationalRole': 'destination marketing organization staff'
    },
    'teaches': (webinar as any).learningOutcomes || [],
    'isAccessibleForFree': true,
    'inLanguage': 'en-US'
  }

  return (
    <>
      {/* JSON-LD Structured Data for AI Discoverability - Server-Rendered OUTSIDE client components */}
      <script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      ></script>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      ></script>
      <script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      ></script>
      {faqSchema && (
        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        ></script>
      )}

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
              {/* Header actions can go here */}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {(webinar as any).isShortForm ? (
          // TikTok-style vertical layout for short-form videos
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              {/* Vertical Video Player */}
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: '9/16' }}>
                <HLSPlayer
                  playbackId={webinar.muxPlaybackId}
                  poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`}
                />
              </div>

              {/* Video Info Below Player */}
              <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-brand-navy mb-2">
                  {webinar.title}
                </h1>
                <p className="text-gray-600 mb-4">{webinar.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {webinar.duration}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
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

              {/* Resources - only show if resources exist */}
              {(webinar as any).resources && (webinar as any).resources.length > 0 && (
                <div className="w-full max-w-md">
                  <ResourcesList resources={(webinar as any).resources} />
                </div>
              )}
            </div>
          </div>
        ) : (
          // Standard horizontal layout for webinars
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                <HLSPlayer
                  playbackId={webinar.muxPlaybackId}
                  poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`}
                />
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
            <ChaptersList chapters={webinar.chapters} />

            {/* Key Takeaways - only show if exists */}
            {(webinar as any).keyTakeaways && (webinar as any).keyTakeaways.length > 0 && (
              <KeyTakeawaysList takeaways={(webinar as any).keyTakeaways} />
            )}

            {/* Learning Outcomes - only show if exists */}
            {(webinar as any).learningOutcomes && (webinar as any).learningOutcomes.length > 0 && (
              <LearningOutcomesList outcomes={(webinar as any).learningOutcomes} />
            )}

            {/* Transcript - Server-rendered HTML for SEO/GEO crawlability */}
            {(webinar as any).transcript && (
              <TranscriptSection transcript={(webinar as any).transcript} />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources - only show if resources exist */}
            {(webinar as any).resources && (webinar as any).resources.length > 0 && (
              <ResourcesList resources={(webinar as any).resources} />
            )}

            {/* Related Resources/Tools - only show if exists */}
            {(webinar as any).relatedResources && (webinar as any).relatedResources.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">Tools Mentioned</h2>
                <div className="space-y-3">
                  {(webinar as any).relatedResources.map((resource: any, index: number) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="font-medium text-brand-navy mb-1">{resource.name}</div>
                      <div className="text-xs text-gray-600">{resource.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </>
  )
}