import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Play, Clock, ArrowRight } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { webinarCards as webinars } from '@/data/webinar-cards'
import { shortFormVideos } from '@/data/shorts'
import { webinarData } from '@/data/webinars'

// Conference talks live in webinarData (flagged isConferenceTalk) and get their
// own homepage section instead of webinar cards.
const conferenceTalks = Object.values(webinarData).filter(
  (w) => w.isConferenceTalk
)

export const metadata: Metadata = {
  // alternates is replaced (not merged) when a page defines it, so the RSS
  // autodiscovery link from layout.tsx must be repeated here.
  alternates: {
    canonical: 'https://janetteroush.com',
    types: {
      'application/rss+xml': 'https://janetteroush.com/notes/feed.xml',
    },
  },
}


// Curated "latest" index for the front page — newest items across press,
// podcasts, and field notes. Edit this list by hand when something new lands.
const latestIndex = [
  { date: 'May 21 ’26', title: 'What Should DMOs Actually Be Doing With AI Right Now?', category: 'Podcast', href: '/press' },
  { date: 'May 4 ’26', title: 'Destinations’ high-stakes game with AI — Travel Weekly', category: 'Press', href: '/press' },
  { date: 'Mar 7 ’26', title: 'The Leapfrog Thesis: Why Some Teams Should Skip Chatbots Entirely', category: 'Field Note', href: '/notes/leapfrog-thesis' },
  { date: 'Mar 4 ’26', title: 'From Voice Recording to Live Website: How I Built the Wyoming Keynote Recap', category: 'Field Note', href: '/notes/plaud-to-website' },
  { date: 'Feb ’26', title: 'The Taylor Swift of Travel AI — Hospitality Daily', category: 'Podcast', href: '/press' },
]

// Story Lab element tiles shown on the front-page Lab card (real identifiers
// from the Periodic Table of Storytelling chart).
const storyLabTiles = [
  { symbol: 'C', name: 'Conflict' },
  { symbol: 'Re', name: 'Reveal' },
  { symbol: 'Cmx', name: 'Climax' },
  { symbol: 'Den', name: 'Dénouement' },
]

// Featured walkthrough
const featuredWalkthrough = {
  title: 'Building a Personal Operating System',
  description: 'A live walkthrough of Claude Code + VS Code + the PARA method. See how a local file-based system gives AI full context about your work, your brand, and your projects — from folder structure to API automations.',
  duration: '65 min',
  href: '/personal-os/walkthrough',
  thumbnail: 'https://image.mux.com/kFK1tI42m01NNgSm02ZVjzlZLZ01kWPwH7La7ICRrABz8g/thumbnail.png?width=800&height=450&time=5',
}



// Shared sameAs anchors — used across every entity reference below so AI engines
// resolve our org / people / place to the same canonical knowledge-graph nodes.
const BRAND_USA_SAMEAS = [
  "https://en.wikipedia.org/wiki/Brand_USA",
  "https://www.wikidata.org/wiki/Q52556956",
  "https://www.linkedin.com/company/brand-usa",
  "https://www.thebrandusa.com",
  "https://x.com/VisitTheUSA",
  "https://www.instagram.com/visittheusa",
  "https://www.facebook.com/VisitTheUSA"
]

const BRAND_USA_AOC_SAMEAS = [
  "https://www.thebrandusa.com",
  "https://janetteroush.com"
]

const JANETTE_SAMEAS = [
  "https://www.linkedin.com/in/janetteroush/",
  "https://janetteroush.com"
]

const UNITED_STATES_SAMEAS = [
  "https://en.wikipedia.org/wiki/United_States",
  "https://www.wikidata.org/wiki/Q30"
]

export default function HomePage() {
  // Organization Schema (clean, no teaches/audience)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "name": "Brand USA Agents of Change",
    "alternateName": "Agents of Change",
    "description": "Official AI learning platform for U.S. destination marketing organizations and tourism professionals. Provides comprehensive training on AI agents, Custom GPTs, Model Context Protocol, and AI governance for the tourism industry.",
    "url": "https://janetteroush.com",
    "sameAs": BRAND_USA_AOC_SAMEAS,
    "parentOrganization": {
      "@type": "Organization",
      "name": "Brand USA",
      "description": "The destination marketing organization for the United States",
      "sameAs": BRAND_USA_SAMEAS
    },
    "founder": {
      "@type": "Person",
      "name": "Janette Roush",
      "jobTitle": "Chief AI Officer, SVP Innovation",
      "sameAs": JANETTE_SAMEAS,
      "affiliation": {
        "@type": "Organization",
        "name": "Brand USA",
        "sameAs": BRAND_USA_SAMEAS
      }
    },
    "knowsAbout": [
      "AI for tourism marketing",
      "Destination marketing AI strategy",
      "Model Context Protocol (MCP)",
      "AI agents for DMOs",
      "Custom GPTs for tourism",
      "CRIT framework for AI prompts",
      "Agentic AI in destination marketing",
      "AI governance in tourism industry",
      "Claude Artifacts for DMO operations",
      "Tourism industry automation"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "United States",
      "sameAs": UNITED_STATES_SAMEAS,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.0902,
        "longitude": -95.7129
      }
    }
  }

  // Course Schema (with teaches and audience)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI for Destination Marketing Organizations",
    "description": "Comprehensive training program covering AI fundamentals, strategy, and implementation for tourism marketing professionals",
    "provider": {
      "@type": "Organization",
      "name": "Brand USA Agents of Change",
      "sameAs": BRAND_USA_AOC_SAMEAS
    },
    "audience": {
      "@type": "EducationalAudience",
      "audienceType": "tourism professionals",
      "educationalRole": [
        "destination marketing organization staff",
        "tourism board employees",
        "convention and visitors bureau staff",
        "state tourism office employees",
        "national tourism organization staff"
      ]
    },
    "coursePrerequisites": "No technical background required",
    "educationalLevel": "Professional",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT8H"
    },
    "teaches": [
      "The four types of AI agents: Operator, Researcher, Builder, and Automator",
      "CRIT (Context, Role, Interview, Task) framework for effective AI prompting",
      "Model Context Protocol (MCP) implementation as a source of truth for AI systems",
      "Building Custom GPTs for tourism marketing workflows",
      "AI governance frameworks for destination marketing organizations",
      "Practical applications of Claude Artifacts for DMO operations",
      "Prompt engineering strategies specific to tourism industry contexts",
      "Workflow automation using AI agents for tourism operations"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "AI Agents"
      },
      {
        "@type": "Thing",
        "name": "Model Context Protocol"
      },
      {
        "@type": "Thing",
        "name": "Destination Marketing"
      }
    ],
    "numberOfCredits": 8,
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "contentLocation": {
      "@type": "Place",
      "name": "United States",
      "sameAs": UNITED_STATES_SAMEAS,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.0902,
        "longitude": -95.7129
      }
    }
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Brand USA Agents of Change",
    "url": "https://janetteroush.com",
    "description": "AI Learning Platform for Destination Marketing Organizations and US tourism professionals",
    "about": {
      "@type": "Thing",
      "name": "AI Education for Destination Marketing",
      "description": "Comprehensive training platform for tourism professionals learning to implement AI in destination marketing operations"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brand USA",
      "sameAs": BRAND_USA_SAMEAS
    }
  }

  // CollectionPage Schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Training Collection for Tourism Professionals",
    "description": "Curated collection of webinars, conversations, and resources for destination marketing professionals learning AI",
    "hasPart": [
      {
        "@type": "Course",
        "name": "AI Fundamentals Webinar Series",
        "description": `${webinars.length} comprehensive webinars covering AI fundamentals, strategy, and implementation for tourism marketing`,
        "numberOfCredits": 9,
        "provider": {
          "@type": "Organization",
          "name": "Brand USA Agents of Change",
          "sameAs": BRAND_USA_AOC_SAMEAS
        },
        "teaches": [
          "AI agent taxonomy and categorization",
          "CRIT framework for AI prompts",
          "Model Context Protocol implementation",
          "Custom GPT development",
          "AI governance for DMOs"
        ]
      },
      {
        "@type": "Course",
        "name": "Industry Conversations Series",
        "description": "13 expert conversations exploring AI&apos;s impact on destination marketing from 2023-2025",
        "numberOfCredits": 13,
        "provider": {
          "@type": "Organization",
          "name": "Brand USA Agents of Change"
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for Homepage - Server-Rendered OUTSIDE client components */}
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      ></script>
      <script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      ></script>
      <script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      ></script>
      <script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      ></script>

      <AccessCheck>
        <Header />

      {/* Hero — full-bleed stage photo, hairline frame, headline on paper chips */}
      <section className="relative">
        <div className="relative h-[80vh] min-h-[540px] max-h-[760px] overflow-hidden bg-[#0A1220]">
          <Image
            src="/hero-keynote.jpg"
            alt="Janette Roush delivering a keynote on the Destination as a Service framework to a full room"
            fill
            className="object-cover object-[50%_38%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1220]/10 via-transparent to-[#0A1220]/40" />
          <div className="absolute inset-5 border border-brand-paper/90 z-10 pointer-events-none" />
          <div className="absolute top-10 left-10 md:left-12 z-20 dateline text-brand-paper bg-[#0A1220]/55 px-3 py-2">
            Keynotes · Tools · Field Notes
          </div>
          <div className="absolute bottom-10 right-10 md:right-12 z-20 dateline text-brand-paper bg-[#0A1220]/55 px-3 py-1.5">
            From the stage archive · 2026
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-20 -mt-24 md:-mt-36 pb-14 border-b border-brand-navy">
            <h1 className="font-display font-medium text-brand-navy leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-col items-start">
              <span className="bg-brand-paper px-3 md:px-4 pt-3 pb-1">Working <em>inside</em></span>
              <span className="bg-brand-paper px-3 md:px-4 pt-2 pb-3">of AI.</span>
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-brand-navy">
              Keynotes, working tools, and field notes from the person building the thing she talks about on stage.
            </p>
          </div>
        </div>
      </section>

      {/* Front page — the Lab lead + latest index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
          <span>The Lab &amp; the latest</span>
          <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <Link href="/story-lab" className="group block relative border border-brand-navy p-6 hover:border-brand-cyan transition-colors">
              <span className="absolute -top-2.5 left-5 bg-brand-paper px-2 dateline text-brand-cyan">The Lab</span>
              <h3 className="font-display text-3xl text-brand-navy group-hover:text-brand-cyan transition-colors">Story Lab</h3>
              <p className="mt-2 mb-6 text-brand-gray-blue">
                The Periodic Table of Travel Storytelling — score any destination&apos;s content against the elements of narrative.
              </p>
              <div className="flex gap-2" aria-hidden="true">
                {storyLabTiles.map((tile, i) => (
                  <div
                    key={tile.symbol}
                    className={`w-14 h-16 border p-1.5 flex flex-col justify-between ${
                      i === 1 ? 'bg-brand-cyan border-brand-cyan' : 'bg-brand-paper2 border-brand-sand'
                    }`}
                  >
                    <span className={`font-display text-lg leading-none ${i === 1 ? 'text-brand-paper' : 'text-brand-navy'}`}>
                      {tile.symbol}
                    </span>
                    <span className={`font-mono text-[8px] uppercase tracking-wide leading-tight ${i === 1 ? 'text-brand-paper/85' : 'text-brand-slate'}`}>
                      {tile.name}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
            <Link href="/ai-audit" className="group block relative border border-brand-navy p-6 hover:border-brand-cyan transition-colors">
              <span className="absolute -top-2.5 left-5 bg-brand-paper px-2 dateline text-brand-cyan">The Lab</span>
              <h3 className="font-display text-3xl text-brand-navy group-hover:text-brand-cyan transition-colors">AI Site Audit</h3>
              <p className="mt-2 mb-5 text-brand-gray-blue">Run any DMO website through the readiness scan.</p>
              <div className="border-t border-brand-sand">
                {['Schema coverage', 'Site hygiene', 'Content patterns'].map((row) => (
                  <div key={row} className="flex justify-between items-baseline py-2 border-b border-brand-sand dateline text-brand-navy">
                    <span>{row}</span>
                    <span className="text-brand-cyan" aria-hidden="true">→</span>
                  </div>
                ))}
              </div>
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-brand-navy">
              {latestIndex.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group grid grid-cols-1 sm:grid-cols-[6.5rem_1fr_auto] gap-2 sm:gap-5 items-baseline py-5 border-b border-brand-sand"
                >
                  <span className="dateline text-brand-slate">{item.date}</span>
                  <h4 className="text-xl leading-snug text-brand-navy group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h4>
                  <span className="dateline text-brand-cyan whitespace-nowrap">{item.category}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section id="webinars" className="border-t border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
            <span>Webinar Series</span>
            <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            {webinars.map((webinar, index) => (
              <Link key={webinar.id} href={`/webinar/${webinar.id}`} className="group">
                <div className="relative aspect-video overflow-hidden bg-brand-navy">
                  <Image
                    src={webinar.thumbnail}
                    alt={webinar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-3 border border-brand-paper/80 pointer-events-none" />
                </div>
                <div className="mt-4 flex items-baseline justify-between dateline">
                  <span className="text-brand-cyan">{webinar.level}</span>
                  <span className="text-brand-slate">{webinar.duration}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight text-brand-navy group-hover:text-brand-cyan transition-colors">
                  {webinar.title}
                </h3>
                <p className="mt-2 text-brand-gray-blue line-clamp-2">
                  {webinar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Walkthrough — ink band */}
      <section className="bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="dateline text-[#E0559B] mb-5">Video Walkthrough</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-brand-paper mb-5">
              {featuredWalkthrough.title}
            </h2>
            <p className="text-lg text-brand-paper/80 leading-relaxed mb-6 max-w-xl">
              {featuredWalkthrough.description}
            </p>
            <div className="flex items-center gap-6 mb-8 dateline text-brand-paper/70">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {featuredWalkthrough.duration}
              </span>
              <span>9 focused clips</span>
            </div>
            <Link
              href={featuredWalkthrough.href}
              className="inline-flex items-center dateline text-brand-paper border border-brand-paper px-5 py-3 hover:bg-brand-paper hover:text-brand-navy transition-colors"
            >
              Watch the Walkthrough
              <Play className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <Link href={featuredWalkthrough.href} className="group relative block">
            <div className="aspect-video relative overflow-hidden bg-[#0A1220]">
              <Image
                src={featuredWalkthrough.thumbnail}
                alt={featuredWalkthrough.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-3 border border-brand-paper/80 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-paper/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 text-brand-navy" fill="currentColor" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Short-Form Videos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
          <span>Quick Demos &amp; Tutorials</span>
          <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {shortFormVideos.map((video) => (
            <Link key={video.id} href="/shorts" className="group">
              <div className="relative aspect-video overflow-hidden bg-brand-navy">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-3 border border-brand-paper/80 pointer-events-none" />
              </div>
              <div className="mt-4 flex items-baseline justify-between dateline">
                <span className="text-brand-cyan">{video.category}</span>
                <span className="text-brand-slate">{video.duration}</span>
              </div>
              <h3 className="mt-2 font-display text-xl leading-tight text-brand-navy group-hover:text-brand-cyan transition-colors line-clamp-2">
                {video.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Conference Talks */}
      <section className="border-t border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
            <span>Conference Talks</span>
            <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            {conferenceTalks.map((talk) => (
              <Link key={talk.id} href={`/webinar/${talk.id}`} className="group">
                <div className="relative aspect-video overflow-hidden bg-brand-navy">
                  <Image
                    src={`https://image.mux.com/${talk.muxPlaybackId}/thumbnail.png?width=800&height=450&time=10`}
                    alt={talk.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-3 border border-brand-paper/80 pointer-events-none" />
                </div>
                <div className="mt-4 flex items-baseline justify-between dateline">
                  <span className="text-brand-cyan">Conference Talk</span>
                  <span className="text-brand-slate">{talk.duration}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight text-brand-navy group-hover:text-brand-cyan transition-colors">
                  {talk.title}
                </h3>
                <p className="mt-2 text-brand-gray-blue line-clamp-2">
                  {talk.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* In the Media — press as pull quotes */}
      <section className="bg-brand-paper2 border-t border-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
            <span>In the Media</span>
            <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
          </div>
          <blockquote className="font-display italic text-3xl md:text-5xl leading-tight max-w-4xl text-brand-navy">
            <span className="text-brand-cyan">&ldquo;</span>AI isn&rsquo;t giving us a roadmap. As a DMO, we have to figure it out.<span className="text-brand-cyan">&rdquo;</span>
          </blockquote>
          <cite className="dateline text-brand-slate block mt-6 not-italic">
            Travel Weekly · &ldquo;Destinations&rsquo; high-stakes game with AI&rdquo; · May 2026
          </cite>
          <Link
            href="/press"
            className="mt-10 inline-flex items-center dateline text-brand-navy border border-brand-navy px-5 py-3 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
          >
            All press &amp; podcast appearances
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />

      </AccessCheck>
    </>
  )
}
