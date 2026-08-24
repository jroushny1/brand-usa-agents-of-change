import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'
import Footer from '@/components/Footer'
import { resources } from '@/data/resources'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools & Resources',
  description: 'Podcasts, tools, guides, and industry links curated for tourism professionals — Personal OS guides, Brand USA resources, AI conversations, and more.',
  alternates: { canonical: 'https://janetteroush.com/library' },
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
    'url': 'https://janetteroush.com/library',
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
      const podcastItem: Record<string, unknown> = {
        '@type': 'PodcastEpisode',
        'name': item.title,
        'description': item.description,
        'url': item.url
      }

      // Add Event schema if status and recordedDate exist
      if (item.status === 'recorded' && item.recordedDate) {
        podcastItem.recordingOf = {
          '@type': 'Event',
          'name': item.title,
          'eventStatus': 'https://schema.org/EventScheduled',
          'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
          'startDate': item.recordedDate,
          'endDate': item.recordedDate,
          'location': {
            '@type': 'VirtualLocation',
            'url': 'https://janetteroush.com'
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

  // Featured guides get the bordered Lab-card treatment; everything else is
  // rendered as a rule-separated editorial index.
  const featuredCategories = ['Personal OS Guides']

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
        <header className="bg-brand-paper/95 backdrop-blur-sm border-b border-brand-navy sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center dateline text-brand-navy hover:text-brand-cyan transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-brand-navy">
          <div className="dateline text-brand-cyan mb-5">The Library</div>
          <h1 className="font-display font-medium text-brand-navy leading-none text-5xl sm:text-6xl md:text-7xl">
            AI Tools &amp; Resources
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-navy">
            Podcasts, tools, guides, and industry links curated for tourism professionals
          </p>
        </section>

        {/* Main Content */}
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

            {/* Resource Categories */}
            <div className="space-y-16 lg:space-y-20">
              {resources.map((category, categoryIndex) => {
                const isFeatured = featuredCategories.includes(category.category)

                return (
                  <section key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                    {/* Section Label */}
                    <div className="flex items-center gap-4 mb-10">
                      <h2 className="dateline text-brand-slate">{category.category}</h2>
                      <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
                    </div>

                    {isFeatured ? (
                      /* Featured guides — bordered Lab cards */
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a
                              href={item.url}
                              target={item.isInternal ? undefined : '_blank'}
                              rel={item.isInternal ? undefined : 'noopener noreferrer'}
                              aria-label={`${item.isInternal ? 'View' : 'Visit'} ${item.title}: ${item.description}`}
                              className="group relative block h-full border border-brand-navy p-6 hover:border-brand-cyan transition-colors"
                            >
                              <span className="absolute -top-2.5 left-5 bg-brand-paper px-2 dateline text-brand-cyan">
                                Guide {String(itemIndex + 1).padStart(2, '0')}
                              </span>
                              <h3 className="font-display text-2xl leading-tight text-brand-navy group-hover:text-brand-cyan transition-colors">
                                {item.title}
                              </h3>
                              <p className="mt-3 text-brand-gray-blue">
                                {item.description}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      /* Editorial index — rule-separated rows */
                      <ul className="border-t border-brand-navy list-none">
                        {category.items.map((item, itemIndex) => {
                          const RowLink = ({ children, className }: { children: React.ReactNode; className: string }) =>
                            item.isInternal ? (
                              <Link
                                href={item.url}
                                aria-label={`View ${item.title}: ${item.description}`}
                                className={className}
                              >
                                {children}
                              </Link>
                            ) : (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${item.title}: ${item.description}`}
                                className={className}
                              >
                                {children}
                              </a>
                            )

                          return (
                            <li key={itemIndex}>
                              <RowLink className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-5 border-b border-brand-sand">
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-display text-xl leading-snug text-brand-navy group-hover:text-brand-cyan transition-colors">
                                    {item.title}
                                  </h3>
                                  <p className="mt-1.5 text-brand-gray-blue">
                                    {item.description}
                                  </p>
                                </div>
                                <div className="flex items-baseline gap-4 dateline whitespace-nowrap">
                                  {item.date && (
                                    <span className="text-brand-slate">{item.date}</span>
                                  )}
                                  {item.status === 'recorded' && (
                                    <span className="text-brand-slate">Recorded</span>
                                  )}
                                  {item.status === 'upcoming' && (
                                    <span className="text-brand-cyan">Upcoming</span>
                                  )}
                                  {item.isInternal ? (
                                    <span className="text-brand-cyan" aria-hidden="true">→</span>
                                  ) : (
                                    <ExternalLink
                                      className="h-3.5 w-3.5 self-center text-brand-slate group-hover:text-brand-cyan transition-colors"
                                      aria-hidden="true"
                                    />
                                  )}
                                </div>
                              </RowLink>
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
            <div className="relative mt-20 border border-brand-navy p-6 sm:p-8">
              <span className="absolute -top-2.5 left-5 bg-brand-paper px-2 dateline text-brand-cyan">Contribute</span>
              <h3 className="font-display text-2xl sm:text-3xl text-brand-navy mb-3">Have a Resource to Share?</h3>
              <p className="text-lg text-brand-gray-blue leading-relaxed">
                Found a helpful AI tool or resource for tourism professionals? Email <a href="mailto:jroush@thebrandusa.com" className="text-brand-cyan underline underline-offset-2 hover:text-brand-navy transition-colors">jroush@thebrandusa.com</a> to suggest additions to this library.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </>
    </AccessCheck>
  )
}
