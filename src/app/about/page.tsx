import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccessCheck from '@/components/AccessCheck'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import { pressItems, type PressItem } from '@/data/press'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About Janette Roush',
  description: 'Janette Roush is SVP, Innovation and Chief AI Officer at Brand USA. She speaks to destination marketing organizations and industry audiences about putting AI to work in tourism — the practical tools and workflows her team uses every day.',
  openGraph: {
    title: 'About Janette Roush | Agents of Change',
    description: 'SVP, Innovation and Chief AI Officer at Brand USA. AI strategy for the business of travel.',
  },
}

// The "Where Janette speaks" section is parked in
// src/components/parked/SpeakingWall.tsx (2026-08-24) along with its data.

// Press features shown on this page — the three most recent articles, pulled by id
// from the shared press module so the headlines and links can never drift from /press.
const FEATURED_PRESS_IDS = [
  'phocuswire-daas',
  'travel-weekly-high-stakes',
  'phocuswire-ai-visibility',
]

const press = FEATURED_PRESS_IDS
  .map((id) => pressItems.find((item) => item.id === id))
  .filter((item): item is PressItem => Boolean(item))

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
          'text': 'Yes! Janette Roush speaks to industry partners and stakeholders about putting AI to work in tourism. Visit thebrandusa.com/about/brand-usa-speakers to view speaker availability.'
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

        {/* ===== Hero — editorial profile ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: positioning */}
            <div className="lg:col-span-7">
              <div className="dateline text-brand-cyan mb-2">
                SVP, Innovation &amp; Chief AI Officer · Brand USA
              </div>
              <div className="dateline text-brand-slate mb-6">
                Expert advisor · AI Opener for Destinations, Europe &amp; North America
              </div>
              <h1 className="font-display font-medium text-brand-navy leading-none text-6xl md:text-7xl lg:text-8xl mb-7">
                Janette Roush
              </h1>
              <p className="font-display text-2xl md:text-3xl text-brand-navy leading-snug mb-7">
                AI strategy for the business of travel.
              </p>
              <p className="max-w-[68ch] text-lg leading-relaxed text-brand-gray-blue mb-10">
                25+ years in travel, from theater ticketing in the 1990s to leading
                AI strategy for international tourism marketing. Janette started experimenting
                with AI the week ChatGPT launched and committed to trying something new with it
                every day at work. That daily practice became a career pivot — and the
                Agents of Change program, where she shares the tools and workflows her team
                uses at Brand USA so the industry can put them to work. She also serves as an
                expert advisor to the European and North American cohorts of AI Opener for
                Destinations, Group NAO&rsquo;s program for destination organizations putting
                AI strategy into practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.thebrandusa.com/about/brand-usa-speakers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ga-event="speaker_availability_click"
                  className="inline-flex items-center justify-center dateline text-brand-navy border border-brand-navy px-5 py-3 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                >
                  View Speaker Availability via Brand USA
                </a>
                <Link
                  href="/library"
                  className="inline-flex items-center justify-center dateline text-brand-navy border border-brand-navy px-5 py-3 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                >
                  Follow the work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: speaker reel */}
            <div className="lg:col-span-5">
              <Script
                src="https://cdn.jsdelivr.net/npm/@mux/mux-player@3/dist/mux-player.mjs"
                type="module"
                strategy="afterInteractive"
              />
              <div className="relative overflow-hidden bg-[#0A1220]">
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
                <div className="absolute inset-3 border border-brand-paper/80 pointer-events-none" />
              </div>
              <p className="dateline text-brand-slate text-center mt-4">
                Speaking on AI in tourism · Brand USA
              </p>
            </div>
          </div>
        </section>

        {/* ===== Signature point of view ===== */}
        <section className="border-t border-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
              <span>A point of view</span>
              <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-brand-navy mb-12 max-w-3xl">
              Two ideas Janette is known for in the travel industry
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* DaaS */}
              <div className="relative border border-brand-navy p-8">
                <span className="absolute -top-2.5 left-6 bg-brand-paper px-2 dateline text-brand-cyan">01</span>
                <h3 className="font-display text-2xl text-brand-navy mb-4">
                  Destination as a Service
                </h3>
                <p className="text-brand-gray-blue leading-relaxed mb-6">
                  As AI systems begin to answer travelers directly, destinations have a new job
                  to do. Janette frames it as two parts: a verification layer, where AI checks
                  claims against the local authority, and content portability, where a
                  destination&apos;s first-person storytelling is made machine-readable so AI
                  systems can use it.
                </p>
                <blockquote className="border-l border-brand-cyan pl-5 font-display italic text-xl text-brand-navy leading-relaxed">
                  &ldquo;We&apos;re shifting from only being a creator of content to also being a
                  steward of data. We still need to make the content — that&apos;s what feeds the
                  systems.&rdquo;
                </blockquote>
              </div>

              {/* Operating system */}
              <div className="relative border border-brand-navy p-8">
                <span className="absolute -top-2.5 left-6 bg-brand-paper px-2 dateline text-brand-cyan">02</span>
                <h3 className="font-display text-2xl text-brand-navy mb-4">
                  AI as the operating system of business
                </h3>
                <p className="text-brand-gray-blue leading-relaxed mb-6">
                  Janette&apos;s daily practice reshaped how she works, and it points to where the
                  whole industry is heading. The shift she describes is from using AI in a separate
                  window to doing the actual work inside it.
                </p>
                <blockquote className="border-l border-brand-cyan pl-5 font-display italic text-xl text-brand-navy leading-relaxed">
                  &ldquo;AI isn&apos;t just a thing that lives inside a separate chat window that you
                  go to ask questions to. It is now the operating system of business.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Pull-quote band — ink ===== */}
        <section className="bg-brand-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <blockquote className="font-display italic text-3xl md:text-5xl leading-tight text-brand-paper">
              <span className="text-[#E0559B]">&ldquo;</span>Most of us use AI. Few of us work inside of it. That&apos;s the shift.<span className="text-[#E0559B]">&rdquo;</span>
            </blockquote>
            <cite className="dateline text-brand-paper/70 block mt-6 not-italic">
              Janette Roush
            </cite>
          </div>
        </section>

        {/* ===== Press ===== */}
        <section className="bg-brand-paper2 border-t border-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
              <span>In the press</span>
              <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-brand-navy mb-12">
              Featured in the travel trade
            </h2>
            <div className="border-t border-brand-navy">
              {press.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 sm:grid-cols-[8.5rem_1fr_auto] gap-1 sm:gap-5 items-baseline py-5 border-b border-brand-sand"
                >
                  <span className="dateline text-brand-cyan">{p.publication}</span>
                  <span className="text-xl leading-snug text-brand-navy group-hover:text-brand-cyan transition-colors">
                    &ldquo;{p.title}&rdquo;
                    <ExternalLink className="inline-block ml-2 h-4 w-4 align-baseline text-brand-slate group-hover:text-brand-cyan transition-colors" aria-hidden="true" />
                  </span>
                  <span className="dateline text-brand-slate whitespace-nowrap">{p.dateDisplay}</span>
                </a>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/press"
                className="inline-flex items-center dateline text-brand-navy border border-brand-navy px-5 py-3 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
              >
                See all press coverage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Selected work ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
            <span>What her team builds</span>
            <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-brand-navy mb-12">
            Selected work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link href="/personal-os" className="group border border-brand-navy p-6 hover:border-brand-cyan transition-colors">
              <h3 className="font-display text-2xl text-brand-navy mb-3 group-hover:text-brand-cyan transition-colors">Personal Operating System</h3>
              <p className="text-brand-gray-blue leading-relaxed mb-5">A live system for giving AI full context on your work — built with Claude Code and a file-based vault.</p>
              <span className="inline-flex items-center dateline text-brand-cyan">Explore<ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link href="/ai-audit" className="group border border-brand-navy p-6 hover:border-brand-cyan transition-colors">
              <h3 className="font-display text-2xl text-brand-navy mb-3 group-hover:text-brand-cyan transition-colors">AI Visibility Audit</h3>
              <p className="text-brand-gray-blue leading-relaxed mb-5">A tool to see how a destination shows up when travelers ask AI search engines where to go.</p>
              <span className="inline-flex items-center dateline text-brand-cyan">Try it<ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
            <Link href="/library" className="group border border-brand-navy p-6 hover:border-brand-cyan transition-colors">
              <h3 className="font-display text-2xl text-brand-navy mb-3 group-hover:text-brand-cyan transition-colors">Agents of Change Library</h3>
              <p className="text-brand-gray-blue leading-relaxed mb-5">Webinars, tools, and resources the Brand USA team uses, shared for destination marketers.</p>
              <span className="inline-flex items-center dateline text-brand-cyan">Browse<ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          </div>
        </section>

        {/* ===== Closing CTA — ink band ===== */}
        <section className="bg-brand-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-brand-paper mb-5">
              Bring AI in tourism to your stage
            </h2>
            <p className="text-lg text-brand-paper/80 leading-relaxed mb-9">
              Janette speaks to industry partners and stakeholders about putting AI to work
              in tourism. Speaking is arranged through Brand USA.
            </p>
            <a
              href="https://www.thebrandusa.com/about/brand-usa-speakers/"
              target="_blank"
              rel="noopener noreferrer"
              data-ga-event="speaker_availability_click"
              className="inline-flex items-center justify-center dateline text-brand-paper border border-brand-paper px-5 py-3 hover:bg-brand-paper hover:text-brand-navy transition-colors"
            >
              View Speaker Availability via Brand USA
            </a>
          </div>
        </section>

        <Footer />
      </AccessCheck>
    </>
  )
}
