import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Play, Clock, Video, Headphones, Wrench, ArrowRight } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'
import Header from '@/components/Header'
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

      {/* Hero Section */}
      <section className="relative overflow-hidden h-[600px] flex items-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2070&auto=format&fit=crop"
            alt="Times Square in New York City illuminated at night with crowds of tourists - representing destination marketing and tourism innovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy opacity-85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-xs tracking-widest text-gray-400 uppercase mb-4 font-medium">
              Curated by Janette Roush
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              The AI Lab for Travel Innovation
            </h1>
            <div className="text-xs text-gray-400 mb-4">
              Last Updated: {new Date().toISOString().split('T')[0]}
            </div>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              A strategic toolkit and research library for the Agents of Change program.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="#webinars"
                className="bg-white text-brand-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center shadow-lg hover:shadow-xl text-lg"
              >
                Start Learning
                <Play className="ml-2 h-5 w-5" />
              </a>
              <Link
                href="/library"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center text-lg"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Navigation Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-navy mb-4 font-display">
              Explore Our Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your learning path with curated content designed for tourism professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* AI Training Videos Card */}
            <Link
              href="#webinars"
              className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-6">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy mb-3">
                AI Training Videos
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {webinars.length} comprehensive webinars covering AI fundamentals, strategy, and implementation for tourism marketing
              </p>
              <div className="inline-flex items-center text-brand-cyan font-semibold group-hover:gap-2 transition-all">
                Watch Now
                <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Podcasts & Interviews Card */}
            <Link
              href="/library#podcasts"
              className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center mb-6">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy mb-3">
                Podcasts & Interviews
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                13 expert conversations exploring AI&apos;s impact on destination marketing from 2023-2025
              </p>
              <div className="inline-flex items-center text-brand-cyan font-semibold group-hover:gap-2 transition-all">
                Listen
                <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* AI Tools & Resources Card */}
            <Link
              href="/library"
              className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy mb-3">
                AI Tools & Resources
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Curated AI tools, platforms, templates, and industry resources for immediate implementation
              </p>
              <div className="inline-flex items-center text-brand-cyan font-semibold group-hover:gap-2 transition-all">
                Browse
                <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section id="webinars" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Webinar Series
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep-dive sessions from industry experts on AI implementation for tourism marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <Link
                key={webinar.id}
                href={`/webinar/${webinar.id}`}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={webinar.thumbnail}
                    alt={webinar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white">
                      <Play className="h-10 w-10 mr-3 drop-shadow-lg" fill="white" />
                      <span className="font-semibold text-lg drop-shadow-lg">Play Video</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      webinar.level === 'Tactical' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {webinar.level}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {webinar.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {webinar.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Walkthrough */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-navy to-[#1a2d4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs tracking-widest text-brand-cyan uppercase mb-4 font-semibold">
                Video Walkthrough
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                {featuredWalkthrough.title}
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {featuredWalkthrough.description}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <span className="flex items-center text-gray-400 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredWalkthrough.duration}
                </span>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan">
                  9 focused clips
                </span>
              </div>
              <Link
                href={featuredWalkthrough.href}
                className="inline-flex items-center bg-brand-cyan text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
              >
                Watch the Walkthrough
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <Link href={featuredWalkthrough.href} className="group relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative overflow-hidden bg-gray-900">
                <Image
                  src={featuredWalkthrough.thumbnail}
                  alt={featuredWalkthrough.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Short-Form Videos Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Quick Demos & Tutorials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bite-sized videos showcasing practical AI applications and hands-on demonstrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortFormVideos.map((video) => (
              <Link
                key={video.id}
                href="/shorts"
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-brand-sky text-white text-xs font-semibold px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center text-white">
                      <Play className="h-8 w-8 mr-2 drop-shadow-lg" fill="white" />
                      <span className="font-semibold drop-shadow-lg">{video.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Talks */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Conference Talks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keynotes and live sessions from tourism industry events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conferenceTalks.map((talk) => (
              <Link
                key={talk.id}
                href={`/webinar/${talk.id}`}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={`https://image.mux.com/${talk.muxPlaybackId}/thumbnail.png?width=800&height=450&time=10`}
                    alt={talk.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white">
                      <Play className="h-10 w-10 mr-3 drop-shadow-lg" fill="white" />
                      <span className="font-semibold text-lg drop-shadow-lg">Play Video</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                      Conference Talk
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {talk.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {talk.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {talk.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Destination Marketing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join tourism professionals across the USA who are leading with AI.
          </p>
          <div className="space-y-4 text-sm text-blue-100">
            <p>Questions? Email <a href="mailto:jroush@thebrandusa.com" className="underline">jroush@thebrandusa.com</a></p>
          </div>
        </div>
      </section>
      </AccessCheck>
    </>
  )
}
