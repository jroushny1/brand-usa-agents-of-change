import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, BookOpen, ExternalLink, FileText, Video, Podcast, Code, Wrench } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'
import { resources } from '@/data/resources'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools & Resources',
  description: 'Podcasts, tools, guides, and industry links curated for tourism professionals — Personal OS guides, Brand USA resources, AI conversations, and more.',
  alternates: { canonical: 'https://www.janetteroush.com/library' },
  openGraph: {
    title: 'AI Tools & Resources',
    description: 'Podcasts, tools, guides, and industry links curated for tourism professionals.',
  },
}

// Generate JSON-LD structured data for the resource library
const generateLibrarySchema = () => {
  // CollectionPage schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'AI Learning Library for Tourism Professionals',
    'description': 'Curated collection of AI resources, tools, and learning materials specifically designed for destination marketing organizations (DMOs), convention bureaus, and tourism professionals.',
    'url': 'https://www.janetteroush.com/library',
    'author': {
      '@type': 'Person',
      'name': 'Janette Roush',
      'jobTitle': 'Chief AI Officer, Brand USA',
    },
    'about': [
      'Artificial Intelligence in Tourism',
      'Destination Marketing',
      'AI Tools and Applications',
      'DMO Strategy',
      'Convention Sales',
      'AI Workflow Automation'
    ],
    'hasPart': resources.flatMap(category =>
      category.items.map(item => ({
        '@type': 'CreativeWork',
        'name': item.title,
        'description': item.description,
        'url': item.url
      }))
    )
  }

  // ItemList schema for podcasts
  const podcastListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'AI in Tourism Podcast Collection',
    'description': 'Expert conversations exploring AI\'s impact on destination marketing from 2023-2026',
    'numberOfItems': resources.find(r => r.category === 'Conversations on AI in Tourism')?.items.length || 0,
    'itemListElement': (resources.find(r => r.category === 'Conversations on AI in Tourism')?.items || []).map((item, index) => {
      const podcastItem: any = {
        '@type': 'PodcastEpisode',
        'name': item.title,
        'description': item.description,
        'url': item.url
      }

      // Add Event schema if status and recordedDate exist
      if ((item as any).status === 'recorded' && (item as any).recordedDate) {
        podcastItem.recordingOf = {
          '@type': 'Event',
          'name': item.title,
          'eventStatus': 'https://schema.org/EventScheduled',
          'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
          'startDate': (item as any).recordedDate,
          'endDate': (item as any).recordedDate,
          'location': {
            '@type': 'VirtualLocation',
            'url': 'https://brand-usa-agents-of-change.vercel.app'
          }
        }
      }

      return {
        '@type': 'ListItem',
        'position': index + 1,
        'item': podcastItem
      }
    })
  }

  // FAQPage schema - key to AI discoverability (like StackList)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What AI resources does Brand USA provide for destination marketing organizations?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Brand USA provides a comprehensive AI learning library including 9+ training webinars, 13+ podcast episodes featuring industry experts, curated AI tools, industry programs like AI Opener for Destinations, and official Brand USA resources. Topics cover AI agents, Custom GPTs, Model Context Protocol (MCP), CRIT framework, and AI governance.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What podcasts feature Janette Roush discussing AI in tourism?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Janette Roush has appeared on multiple podcasts including: SEEN Saturday Series, Destination Discourse, Travel Trends, Arival\'s Best Part of Travel, Tourpreneur, The Future of Tourism, Fandom Unpacked, Brand USA Talks Travel, Pass the Mic, Hospitality Daily, Travel Marketing Podcast, and Destination Marketing Podcast. These conversations cover AI governance, destination marketing strategy, practical AI implementation for DMOs, and bridging complex technology with sports tourism applications.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where can DMOs learn about AI governance and policy?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Brand USA\'s Agents of Change program offers comprehensive AI governance training through the "AI Policy & Governance for Organizations" webinar. It covers the three key questions every AI policy must answer: What are we protecting? What are we providing? What are we expecting? Real-world examples include Brand USA\'s own AI policy.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can sports tourism organizations apply AI to their destination marketing?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Janette Roush, Brand USA\'s Chief AI Officer, discussed practical AI applications for sports tourism on the SEEN Saturday Series podcast. As the first Chief AI Officer for a national DMO, she bridges complex technology with practical applications for sports event planning, venue marketing, and sports destination strategies. The conversation covers implementing AI while maintaining authenticity in sports tourism marketing.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is agentic AI and how can tourism organizations use it?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Janette Roush, dubbed "The Taylor Swift of Travel AI," discusses agentic AI on the Hospitality Daily podcast. Agentic AI refers to autonomous AI systems that can take action and make decisions independently. For tourism organizations, this includes AI agents that can handle complex tasks like research, content creation, and workflow automation. Roush emphasizes the importance of organizational upskilling and building trust as teams adopt these advanced AI capabilities.'
        }
      }
    ]
  }

  return { collectionSchema, podcastListSchema, faqSchema }
}

export default function LibraryPage() {
  const { collectionSchema, podcastListSchema, faqSchema } = generateLibrarySchema()

  return (
    <AccessCheck>
      <>
        {/* JSON-LD Structured Data for AI Discoverability */}
        <script
          id="collection-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <script
          id="podcast-list-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastListSchema) }}
        />
        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center text-brand-navy hover:text-brand-cyan transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
                Back to Home
              </Link>
              <div className="flex items-center">
                <Image
                  src="/brandusa-logo.png"
                  alt="Brand USA"
                  width={100}
                  height={33}
                  className="h-7 w-auto"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Header */}
        <section className="relative bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan py-8 sm:py-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
              AI Tools & Resources
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Podcasts, tools, guides, and industry links curated for tourism professionals
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12">

            {/* Resource Categories */}
            <div className="space-y-6 sm:space-y-10 md:space-y-12">
              {resources.map((category, categoryIndex) => {
                const isPodcast = category.category.includes('Podcast') || category.category === 'Conversations on AI in Tourism'
                const isTools = category.category.includes('AI') && !category.category.includes('Podcast') && category.category !== 'Conversations on AI in Tourism'

                // Define gradient colors by category
                const getCategoryGradient = () => {
                  if (isPodcast) return 'from-brand-blue to-brand-navy'
                  if (isTools) return 'from-brand-cyan to-brand-blue'
                  if (category.category.includes('Industry')) return 'from-brand-accent-blue to-brand-navy'
                  if (category.category.includes('Official')) return 'from-brand-blue to-brand-cyan'
                  if (category.category.includes('Learning')) return 'from-brand-blue to-brand-cyan'
                  return 'from-brand-blue to-brand-cyan'
                }

                const getBgColor = () => {
                  if (isPodcast) return 'bg-gradient-to-br from-blue-50 to-cyan-50'
                  if (isTools) return 'bg-gradient-to-br from-cyan-50 to-blue-50'
                  return 'bg-white'
                }

                return (
                  <section key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')} className={`${getBgColor()} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm`}>
                    {/* Section Header */}
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-brand-navy">
                        {category.category}
                      </h2>
                    </div>

                    {/* Podcast Layout - Improved Cards with Full Text */}
                    {isPodcast ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 list-none">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          // Extract podcast name and episode title from the title
                          const [podcastName, episodeTitle] = item.title.includes('–')
                            ? item.title.split('–').map(s => s.trim())
                            : [item.title, '']

                          const isInternalLink = (item as any).isInternal
                          const targetUrl = item.url

                          return (
                            <li key={itemIndex}>
                              <Link
                                href={targetUrl}
                                target={isInternalLink ? undefined : "_blank"}
                                rel={isInternalLink ? undefined : "noopener noreferrer"}
                                aria-label={`Listen to ${item.title}${(item as any).date ? ` from ${(item as any).date}` : ''}`}
                                className="group bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-xl hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[240px]"
                              >
                                {/* Podcast Icon & Name - Larger */}
                                <div className="flex items-start gap-3 mb-4">
                                  <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                                  </div>
                                  {/* Podcast Name & Date */}
                                  <div className="flex-1">
                                    <div className="text-base font-bold text-brand-blue leading-tight mb-1">
                                      {podcastName}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      {(item as any).date && (
                                        <div className="text-sm text-gray-500">
                                          {(item as any).date}
                                        </div>
                                      )}
                                      {(item as any).status === 'recorded' && (
                                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                                          RECORDED
                                        </span>
                                      )}
                                      {(item as any).status === 'upcoming' && (
                                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                                          UPCOMING
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Episode Title - No Truncation */}
                                {episodeTitle && (
                                  <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-cyan transition-colors leading-snug">
                                    {episodeTitle}
                                  </h3>
                                )}

                                {/* Description - More Visible */}
                                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4 flex-grow">
                                  {item.description}
                                </p>

                                {/* Action Link */}
                                <div className="mt-auto pt-3 border-t border-gray-100">
                                  <span className="text-sm font-semibold text-brand-blue group-hover:text-brand-cyan inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                    {isInternalLink ? 'View Full Episode' : 'Listen Now'}
                                    {isInternalLink ? (
                                      <span className="text-lg" aria-hidden="true">→</span>
                                    ) : (
                                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                    )}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    ) : isTools ? (
                      /* AI Tools Layout - Logo Grid */
                      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 list-none">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          return (
                            <li key={itemIndex}>
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Explore ${item.title}: ${item.description}`}
                                className="group bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-lg hover:border-brand-cyan hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full"
                              >
                                {/* Logo */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden mb-2 sm:mb-3 group-hover:scale-105 transition-transform flex items-center justify-center bg-gray-50">
                                  {(item as any).logo ? (
                                    <img
                                      src={(item as any).logo}
                                      alt=""
                                      aria-hidden="true"
                                      className="w-full h-full object-contain p-1.5 sm:p-2"
                                    />
                                  ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center`}>
                                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" aria-hidden="true" />
                                    </div>
                                  )}
                                </div>

                                {/* Title */}
                                <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-1.5 sm:mb-2 group-hover:text-brand-cyan transition-colors line-clamp-1">
                                  {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2 line-clamp-2 sm:line-clamp-3">
                                  {item.description}
                                </p>

                                {/* CTA */}
                                <div className="inline-flex items-center text-xs sm:text-sm font-semibold text-brand-cyan group-hover:gap-1 transition-all mt-auto">
                                  Explore
                                  <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                                </div>
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    ) : (
                      /* Other Resources - Compact Cards */
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 list-none">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          return (
                            <li key={itemIndex}>
                              <a
                                href={item.url}
                                target={(item as any).isInternal ? undefined : "_blank"}
                                rel={(item as any).isInternal ? undefined : "noopener noreferrer"}
                                aria-label={`${(item as any).isInternal ? 'View' : 'Visit'} ${item.title}: ${item.description}`}
                                className="group bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex gap-3 items-start h-full"
                              >
                                {/* Icon */}
                                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-1 sm:mb-1.5 group-hover:text-brand-cyan transition-colors">
                                    {item.title}
                                  </h3>
                                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>

                                {/* Arrow */}
                                {(item as any).isInternal ? (
                                  <div className="flex-shrink-0 text-brand-cyan text-lg sm:text-xl" aria-hidden="true">→</div>
                                ) : (
                                  <ExternalLink className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-brand-cyan transition-colors" aria-hidden="true" />
                                )}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </section>
                )
              })}
            </div>

            {/* Footer Note */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-brand-navy to-brand-blue rounded-xl sm:rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-2 sm:mb-3">Have a Resource to Share?</h3>
              <p className="text-white/90 text-sm sm:text-base md:text-lg">
                Found a helpful AI tool or resource for tourism professionals? Email <a href="mailto:jroush@thebrandusa.com" className="text-white hover:text-brand-cyan underline font-semibold transition-colors">jroush@thebrandusa.com</a> to suggest additions to this library.
              </p>
            </div>
          </div>
        </main>
      </>
    </AccessCheck>
  )
}
