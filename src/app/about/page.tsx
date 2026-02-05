import Header from '@/components/Header'
import AccessCheck from '@/components/AccessCheck'
import { BookOpen, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'The Agents of Change program is dedicated to advancing AI literacy in the tourism industry. This research lab serves as a central archive for frameworks, tools, and strategies developed to help DMOs navigate the generative AI revolution.',
  openGraph: {
    title: 'About | Agents of Change',
    description: 'The Agents of Change program is dedicated to advancing AI literacy in the tourism industry.',
  },
}

export default function AboutPage() {
  // EducationalOrganization schema for AI discoverability
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Agents of Change AI Lab',
    'alternateName': 'Brand USA AI Lab',
    'description': 'The Agents of Change program is dedicated to advancing AI literacy in the tourism industry. This research lab serves as a central archive for frameworks, tools, and strategies developed to help DMOs navigate the generative AI revolution.',
    'url': 'https://www.janetteroush.com/about',
    'founder': {
      '@type': 'Person',
      'name': 'Janette Roush',
      'jobTitle': 'SVP, Innovation and Chief AI Officer',
      'affiliation': { '@type': 'Organization', 'name': 'Brand USA' }
    },
    'parentOrganization': {
      '@type': 'Organization',
      'name': 'Brand USA',
      'url': 'https://www.thebrandusa.com'
    },
    'knowsAbout': [
      'AI for tourism marketing',
      'Destination marketing AI strategy',
      'Model Context Protocol (MCP)',
      'AI agents for DMOs',
      'Custom GPTs for tourism',
      'CRIT framework for AI prompts',
      'AI governance in tourism'
    ],
    'areaServed': { '@type': 'Country', 'name': 'United States' }
  }

  // FAQPage schema - key to AI discoverability
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the Agents of Change AI Lab?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The Agents of Change program is dedicated to advancing AI literacy in the tourism industry. This research lab serves as a central archive for frameworks, tools, and strategies developed to help DMOs navigate the generative AI revolution.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Who leads the Brand USA AI initiative?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Janette Roush, SVP, Innovation and Chief AI Officer at Brand USA, leads the Agents of Change program and the Brand USA innovation team.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I book Janette Roush as a speaker for AI in tourism?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! Janette Roush and the Brand USA innovation team are available to present AI findings to industry partners and stakeholders. Visit thebrandusa.com/requestspeaker to view speaker availability.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What AI frameworks does Brand USA teach for destination marketing?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Brand USA teaches several AI frameworks including: the CRIT Framework (Context, Role, Interview, Task) for effective AI prompting, Model Context Protocol (MCP) for connecting AI to trusted data sources, Custom GPTs for tourism workflows, and AI governance best practices for DMOs.'
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for AI Discoverability */}
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AccessCheck>
        <Header />

        <div className="min-h-screen bg-gray-50">
          {/* Header Section */}
          <section className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-10 w-10 text-brand-cyan" />
                <h1 className="text-4xl md:text-5xl font-bold text-brand-navy font-display">
                  About the Agents of Change Lab
                </h1>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
                The Agents of Change program is dedicated to advancing AI literacy in the tourism industry. This research lab serves as a central archive for frameworks, tools, and strategies developed to help DMOs navigate the generative AI revolution.
              </p>
            </div>
          </section>

          {/* Educational Outreach Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-brand-blue" />
                <h2 className="text-3xl font-bold text-brand-navy">
                  Educational Outreach
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Janette Roush and the Brand USA innovation team are available to present these findings to industry partners and stakeholders.
              </p>
              <a
                href="https://www.thebrandusa.com/requestspeaker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors"
              >
                View Speaker Availability via Brand USA
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </AccessCheck>
    </>
  )
}
