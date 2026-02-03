import Link from 'next/link'
import Image from 'next/image'
import { Play, Clock, Video, Headphones, Wrench, ArrowRight } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'
import Header from '@/components/Header'

// Temporary data - we'll move this to Supabase later
const webinars = [
  {
    id: 'ai-101',
    title: 'AI 101',
    description: 'LLMs predict the next word—they don\'t check facts. Why ChatGPT hallucinated a fake bio with awards Janette never won.',
    duration: '45 min',
    muxPlaybackId: 'ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8',
    thumbnail: 'https://image.mux.com/ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8/thumbnail.png?width=800&height=450&time=10',
    level: 'Strategic',
  },
  {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Four agent types: Operator, Researcher, Builder, Automator. "Agentic" is just a made-up fancy word for the same thing.',
    duration: '38 min',
    muxPlaybackId: '3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs',
    thumbnail: 'https://image.mux.com/3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams.',
    duration: '44 min',
    muxPlaybackId: 'H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA',
    thumbnail: 'https://image.mux.com/H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation.',
    duration: '41 min',
    muxPlaybackId: 'NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE',
    thumbnail: 'https://image.mux.com/NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE/thumbnail.png?width=800&height=450&time=10',
    level: 'Strategic',
  },
  {
    id: 'custom-gpts',
    title: 'Custom GPTs: Your New AI Colleague!',
    description: 'Discover how to create and deploy custom GPT assistants that revolutionize your tourism marketing workflows.',
    duration: '34 min',
    muxPlaybackId: 'aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8',
    thumbnail: 'https://image.mux.com/aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'ai-convention-sales',
    title: 'AI for Convention Sales',
    description: 'Master Custom GPTs for meeting follow-up and lead research, then discover vibe coding to build AI-powered tools for business events.',
    duration: '42 min',
    muxPlaybackId: '5xZnY5oJP5nlS5wQsEGv00U00gsf201r00aF00Y902ug26K9o',
    thumbnail: 'https://image.mux.com/5xZnY5oJP5nlS5wQsEGv00U00gsf201r00aF00Y902ug26K9o/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'crit-framework',
    title: 'AI Prompting Using the CRIT Framework',
    description: 'This video introduces the CRIT (Context, Role, Interview, Task) framework for creating effective AI prompts, emphasizing that providing detailed, spoken context leads to much better results than simple typed commands. It then provides two in-depth demonstrations: first, using the CRIT method to plan a detailed one-hour workshop, and second, brainstorming a low-budget marketing activation by uploading a PDF for the AI to use as a source of truth.',
    duration: '12 min',
    muxPlaybackId: 'OC72C8icortMHMBjS87615i9PRYu3C2dGt7XA22JlWU',
    thumbnail: 'https://image.mux.com/OC72C8icortMHMBjS87615i9PRYu3C2dGt7XA22JlWU/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'crit-framework-workshop',
    title: 'CRIT Prompting Framework Workshop',
    description: 'Live demos across ChatGPT, Gemini, Claude. Voice-to-text is the future—typing takes too long. Claude is "a real jerk about rate limits."',
    duration: '42 min',
    muxPlaybackId: 'aKLdc9rK00v6pXvaCk01x02FBzfWOsUFodgvtn6sla5jks',
    thumbnail: 'https://image.mux.com/aKLdc9rK00v6pXvaCk01x02FBzfWOsUFodgvtn6sla5jks/thumbnail.png?width=800&height=450&time=10',
    level: 'Tactical',
  },
  {
    id: 'model-context-protocol',
    title: 'Model Context Protocol',
    description: '91% of travelers excited about AI, but only 6% trust it. MCP is the "source of truth" that fixes the hallucination problem.',
    duration: '27 min',
    muxPlaybackId: 'V1DanWAF02sOwwIFov4BXNaTzwT3Kn41TnUWdcyNZfZk',
    thumbnail: 'https://image.mux.com/V1DanWAF02sOwwIFov4BXNaTzwT3Kn41TnUWdcyNZfZk/thumbnail.png?width=800&height=450&time=10',
    level: 'Strategic',
  },
  {
    id: 'ai-policy-governance',
    title: 'AI Policy & Governance for Organizations',
    description: 'Three questions every AI policy must answer: What are we protecting? What are we providing? What are we expecting? Includes Brand USA\'s actual policy.',
    duration: '40 min',
    muxPlaybackId: 'MIs97m4ZKNZZJwNPP35c02VDqDqIgkZKgmnWhUtzi1s4',
    thumbnail: 'https://image.mux.com/MIs97m4ZKNZZJwNPP35c02VDqDqIgkZKgmnWhUtzi1s4/thumbnail.png?width=800&height=450&time=10',
    level: 'Strategic',
  },
]

// Short-form video content - demos, quick tutorials, and bite-sized learning
const shortFormVideos = [
  {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature—described as a reusable prompt similar to a custom GPT—to build a "Business Trip Packing Assistant." The app\'s design was inspired by the iconic virtual closet from the movie Clueless. Learn how the tool was developed entirely with natural language prompts (like "make it more sparkly"), resulting in a "sparkly, interactive app" that any employee can now use to plan their clothing for business trips.',
    duration: '1 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    thumbnail: 'https://image.mux.com/O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo/thumbnail.png?width=800&height=450&time=10',
    category: 'Demo',
  },
  {
    id: 'ai-presentations',
    title: 'How AI Can Help with Presentations',
    description: 'Janette walks you through her complete AI-powered workflow for creating compelling presentations from the ground up. She shares her entire process, from organizing research in ChatGPT and brainstorming narrative frameworks to generating custom images and even getting AI-powered rehearsal feedback from Gemini.',
    duration: '9 min',
    muxPlaybackId: 'qZkSL00Sd00Qe01OLuiv6TdEiIVYKXZKKk1UPR5RckP2fM',
    thumbnail: 'https://image.mux.com/qZkSL00Sd00Qe01OLuiv6TdEiIVYKXZKKk1UPR5RckP2fM/thumbnail.png?width=800&height=450&time=10',
    category: 'Tutorial',
  },
]


export default function HomePage() {
  // Organization Schema (clean, no teaches/audience)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "name": "Brand USA Agents of Change",
    "alternateName": "Agents of Change",
    "description": "Official AI learning platform for U.S. destination marketing organizations and tourism professionals. Provides comprehensive training on AI agents, Custom GPTs, Model Context Protocol, and AI governance for the tourism industry.",
    "url": "https://brand-usa-agents-of-change.vercel.app",
    "sameAs": [
      "https://www.thebrandusa.com"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Brand USA",
      "description": "The destination marketing organization for the United States"
    },
    "founder": {
      "@type": "Person",
      "name": "Janette Roush",
      "jobTitle": "Chief AI Officer, SVP Innovation",
      "affiliation": {
        "@type": "Organization",
        "name": "Brand USA"
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
      "name": "Brand USA Agents of Change"
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
    "url": "https://brand-usa-agents-of-change.vercel.app",
    "description": "AI Learning Platform for Destination Marketing Organizations and US tourism professionals",
    "about": {
      "@type": "Thing",
      "name": "AI Education for Destination Marketing",
      "description": "Comprehensive training platform for tourism professionals learning to implement AI in destination marketing operations"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brand USA"
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
        "description": "9 comprehensive webinars covering AI fundamentals, strategy, and implementation for tourism marketing",
        "numberOfCredits": 9,
        "provider": {
          "@type": "Organization",
          "name": "Brand USA Agents of Change"
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
        "description": "13 expert conversations exploring AI's impact on destination marketing from 2023-2025",
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
                9 comprehensive webinars covering AI fundamentals, strategy, and implementation for tourism marketing
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
                13 expert conversations exploring AI's impact on destination marketing from 2023-2025
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
            {shortFormVideos.map((video, index) => (
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
