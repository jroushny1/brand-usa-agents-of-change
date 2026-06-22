import Header from '@/components/Header'
import AccessCheck from '@/components/AccessCheck'
import Link from 'next/link'
import { Mic, Calendar, Newspaper, ArrowRight, Sparkles, Wrench } from 'lucide-react'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About Janette Roush',
  description: 'Janette Roush is SVP, Innovation and Chief AI Officer at Brand USA. She speaks to destination marketing organizations and industry audiences about putting AI to work in tourism — the practical tools and workflows her team uses every day.',
  openGraph: {
    title: 'About Janette Roush | Agents of Change',
    description: 'SVP, Innovation and Chief AI Officer at Brand USA. AI strategy for the business of travel.',
  },
}

// Upcoming and recent stages, sourced from 20_Areas/Keynotes/ and
// 20_Areas/Topics/Speaking-and-Keynotes.md. Future-dated events are listed as
// upcoming so the page stays accurate.
const upcomingTalks = [
  { event: 'Virtuoso Travel Tech Summit', place: 'Las Vegas', when: 'Aug 2026' },
  { event: "West Virginia Governor's Conference on Tourism", place: 'Charleston, WV', when: 'Sept 2026' },
  { event: 'ATIA Annual Convention & Trade Show', place: 'Fairbanks, AK', when: 'Oct 2026' },
  { event: 'American Indian Tourism Conference', place: 'United States', when: 'Oct 2026' },
]

const recentTalks = [
  { event: 'IPW — AI Theatre', place: 'Fort Lauderdale, FL', when: 'May 2026' },
  { event: 'micebook C-Suite Summit', place: 'NeueHouse, NYC', when: 'May 2026' },
  { event: 'City Nation Place Americas', place: 'Vancouver', when: 'Apr 2026' },
  { event: 'Maine Tourism Conference', place: 'Maine', when: 'Apr 2026' },
  { event: 'Phocuswright Travel Marketing AI Summit', place: 'New York City', when: 'Mar 2026' },
  { event: "Wyoming Governor's Conference on Tourism", place: 'Wyoming', when: 'Feb 2026' },
]

// Press features, sourced from 20_Areas/Press_Coverage/. Positive coverage only.
const press = [
  { outlet: 'PhocusWire', headline: 'DMOs shift toward destination-as-a-service model in AI era', when: 'May 2026' },
  { outlet: 'Travel Weekly', headline: "Destinations' high-stakes game with AI", when: 'May 2026' },
  { outlet: 'PhocusWire', headline: 'Travel players weigh approaches to winning AI visibility', when: 'Mar 2026' },
]

export default function AboutPage() {
  // EducationalOrganization schema for AI discoverability
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Agents of Change',
    'alternateName': 'Brand USA Agents of Change',
    'description': 'The Agents of Change program is dedicated to advancing AI literacy in the tourism industry. Janette Roush shares the AI tools and frameworks her team uses at Brand USA, so destination marketers can put them to work in their own organizations.',
    'url': 'https://janetteroush.com/about',
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
        'name': 'What is the Agents of Change?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The Agents of Change program is dedicated to advancing AI literacy in the tourism industry. Janette Roush shares the AI tools and frameworks her team uses at Brand USA, so destination marketers can put them to work in their own organizations.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Who leads the Brand USA AI initiative?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Janette Roush, SVP, Innovation and Chief AI Officer at Brand USA, leads the Agents of Change program.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I book Janette Roush as a speaker for AI in tourism?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! Janette Roush speaks to industry partners and stakeholders about putting AI to work in tourism. Visit thebrandusa.com/requestspeaker to view speaker availability.'
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

        {/* ===== Hero — person-forward ===== */}
        <section className="relative bg-brand-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-[#1a2d4a]" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: positioning */}
              <div>
                <div className="text-xs tracking-[0.2em] text-brand-cyan uppercase font-semibold mb-5">
                  SVP, Innovation &amp; Chief AI Officer · Brand USA
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight font-display mb-6">
                  Janette Roush
                </h1>
                <p className="text-2xl text-white/90 leading-snug mb-6">
                  AI strategy for the business of travel.
                </p>
                <p className="text-lg text-white/75 leading-relaxed max-w-xl mb-8">
                  25+ years in travel, from theater ticketing in the 1990s to leading
                  AI strategy for international tourism marketing. Janette started experimenting
                  with AI the week ChatGPT launched and committed to trying something new with it
                  every day at work. That daily practice became a career pivot — and the
                  Agents of Change program, where she shares the tools and workflows her team
                  uses at Brand USA so the industry can put them to work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.thebrandusa.com/requestspeaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ga-event="speaker_availability_click"
                    className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-brand-navy px-7 py-3.5 rounded-lg font-semibold hover:bg-white transition-colors"
                  >
                    <Mic className="h-5 w-5" />
                    View Speaker Availability via Brand USA
                  </a>
                  <Link
                    href="/notes"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Follow the work
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Right: speaker reel */}
              <div>
                <Script
                  src="https://cdn.jsdelivr.net/npm/@mux/mux-player@3/dist/mux-player.mjs"
                  type="module"
                  strategy="afterInteractive"
                />
                <div className="overflow-hidden rounded-2xl shadow-2xl bg-black ring-1 ring-white/10">
                  {/* @ts-expect-error - mux-player is a web component loaded via script */}
                  <mux-player
                    playback-id="IS37ei5cyOT43UHAFBqrEmWP9Dsmi02o7VEgc3NlHCag"
                    stream-type="on-demand"
                    autoplay="muted"
                    loop
                    muted
                    playsinline
                    accent-color="#00A9E0"
                    metadata-video-title="Janette Roush — Speaker Reel"
                    style={{ aspectRatio: '1 / 1', width: '100%', display: 'block' }}
                  />
                </div>
                <p className="text-center text-xs text-white/50 mt-3 tracking-wide">
                  Speaking on AI in tourism · Brand USA
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Signature point of view ===== */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-6 w-6 text-brand-cyan" />
              <span className="text-xs tracking-[0.2em] text-brand-blue uppercase font-semibold">
                A point of view
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display mb-12 max-w-3xl">
              Two ideas Janette is known for in the travel industry
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DaaS */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  Destination as a Service
                </h3>
                <p className="text-gray-700 leading-relaxed mb-5">
                  As AI systems begin to answer travelers directly, destinations have a new job
                  to do. Janette frames it as two parts: a verification layer, where AI checks
                  claims against the local authority, and content portability, where a
                  destination&apos;s first-person storytelling is made machine-readable so AI
                  systems can use it.
                </p>
                <blockquote className="border-l-4 border-brand-cyan pl-5 text-brand-navy italic leading-relaxed">
                  &ldquo;We&apos;re shifting from only being a creator of content to also being a
                  steward of data. We still need to make the content — that&apos;s what feeds the
                  systems.&rdquo;
                </blockquote>
              </div>

              {/* Operating system */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  AI as the operating system of business
                </h3>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Janette&apos;s daily practice reshaped how she works, and it points to where the
                  whole industry is heading. The shift she describes is from using AI in a separate
                  window to doing the actual work inside it.
                </p>
                <blockquote className="border-l-4 border-brand-cyan pl-5 text-brand-navy italic leading-relaxed">
                  &ldquo;AI isn&apos;t just a thing that lives inside a separate chat window that you
                  go to ask questions to. It is now the operating system of business.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Pull-quote band ===== */}
        <section className="bg-brand-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <p className="text-3xl md:text-4xl font-bold leading-snug font-display">
              &ldquo;Most of us use AI. Few of us work inside of it. That&apos;s the shift.&rdquo;
            </p>
            <p className="text-brand-cyan/90 text-sm tracking-widest uppercase mt-6">
              Janette Roush
            </p>
          </div>
        </section>

        {/* ===== Speaking wall ===== */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="h-6 w-6 text-brand-cyan" />
              <span className="text-xs tracking-[0.2em] text-brand-blue uppercase font-semibold">
                On stage
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display mb-3">
              Where Janette speaks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-12">
              Talks on AI in tourism — for governors&apos; conferences, global summits,
              and destination marketing organizations across the country and beyond.
            </p>

            {/* Upcoming */}
            <h3 className="text-sm font-semibold tracking-widest uppercase text-brand-cyan mb-5">
              Upcoming
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {upcomingTalks.map((t) => (
                <div
                  key={t.event}
                  className="flex items-start justify-between gap-4 border border-brand-cyan/30 bg-brand-cyan/5 rounded-xl p-5"
                >
                  <div>
                    <div className="font-bold text-brand-navy">{t.event}</div>
                    <div className="text-sm text-gray-600">{t.place}</div>
                  </div>
                  <div className="text-sm font-semibold text-brand-blue whitespace-nowrap">{t.when}</div>
                </div>
              ))}
            </div>

            {/* Recent */}
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-5">
              Recent stages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recentTalks.map((t) => (
                <div
                  key={t.event}
                  className="flex items-start justify-between gap-4 border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors"
                >
                  <div>
                    <div className="font-bold text-brand-navy">{t.event}</div>
                    <div className="text-sm text-gray-600">{t.place}</div>
                  </div>
                  <div className="text-sm font-medium text-gray-500 whitespace-nowrap">{t.when}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Press ===== */}
        <section className="bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center gap-3 mb-3">
              <Newspaper className="h-6 w-6 text-brand-cyan" />
              <span className="text-xs tracking-[0.2em] text-brand-blue uppercase font-semibold">
                In the press
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display mb-12">
              Featured in the travel trade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {press.map((p) => (
                <div key={p.headline} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-brand-blue">{p.outlet}</span>
                    <span className="text-sm text-gray-500">{p.when}</span>
                  </div>
                  <p className="text-gray-700 leading-snug">&ldquo;{p.headline}&rdquo;</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/press" className="inline-flex items-center gap-1 text-brand-blue font-semibold hover:gap-2 transition-all">
                See all press coverage
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Selected work ===== */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center gap-3 mb-3">
              <Wrench className="h-6 w-6 text-brand-cyan" />
              <span className="text-xs tracking-[0.2em] text-brand-blue uppercase font-semibold">
                What her team builds
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display mb-12">
              Selected work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/personal-os" className="group border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">Personal Operating System</h3>
                <p className="text-gray-600 leading-relaxed mb-4">A live system for giving AI full context on your work — built with Claude Code and a file-based vault.</p>
                <span className="inline-flex items-center gap-1 text-brand-cyan font-semibold group-hover:gap-2 transition-all">Explore<ArrowRight className="h-4 w-4" /></span>
              </Link>
              <Link href="/ai-audit" className="group border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">AI Visibility Audit</h3>
                <p className="text-gray-600 leading-relaxed mb-4">A tool to see how a destination shows up when travelers ask AI search engines where to go.</p>
                <span className="inline-flex items-center gap-1 text-brand-cyan font-semibold group-hover:gap-2 transition-all">Try it<ArrowRight className="h-4 w-4" /></span>
              </Link>
              <Link href="/library" className="group border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">Agents of Change Library</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Webinars, tools, and resources the Brand USA team uses, shared for destination marketers.</p>
                <span className="inline-flex items-center gap-1 text-brand-cyan font-semibold group-hover:gap-2 transition-all">Browse<ArrowRight className="h-4 w-4" /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Closing CTA ===== */}
        <section className="bg-brand-navy text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Bring AI in tourism to your stage
            </h2>
            <p className="text-lg text-white/75 mb-8">
              Janette speaks to industry partners and stakeholders about putting AI to work
              in tourism. Speaking is arranged through Brand USA.
            </p>
            <a
              href="https://www.thebrandusa.com/requestspeaker"
              target="_blank"
              rel="noopener noreferrer"
              data-ga-event="speaker_availability_click"
              className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-brand-navy px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              <Mic className="h-5 w-5" />
              View Speaker Availability via Brand USA
            </a>
          </div>
        </section>
      </AccessCheck>
    </>
  )
}
