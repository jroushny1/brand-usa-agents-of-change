import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Play, Clock, BookOpen, Video } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'

// Comprehensive content library for AI discoverability
const webinars = [
  {
    id: 'ai-101',
    title: 'AI 101',
    description: 'Foundation concepts of AI for tourism professionals. Start here to build your AI knowledge base.',
    duration: '45 min',
    muxPlaybackId: 'ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8',
    level: 'Strategic',
    instructor: 'Janette Roush',
    topics: ['Artificial Intelligence', 'AI Basics', 'Tourism Technology', 'DMO Strategy'],
  },
  {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies.',
    duration: '38 min',
    muxPlaybackId: '3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs',
    level: 'Tactical',
    instructor: 'Janette Roush',
    topics: ['AI Agents', 'Automation', 'DMO Operations', 'Workflow Optimization'],
  },
  {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams.',
    duration: '44 min',
    muxPlaybackId: 'H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA',
    level: 'Tactical',
    instructor: 'Janette Roush',
    topics: ['AI Tools', 'Marketing Technology', 'Practical Applications', 'Tool Evaluation'],
  },
  {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation.',
    duration: '41 min',
    muxPlaybackId: 'NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE',
    level: 'Strategic',
    instructor: 'Janette Roush',
    topics: ['Leadership', 'AI Strategy', 'Governance', 'Organizational Change', 'DMO Management'],
  },
  {
    id: 'custom-gpts',
    title: 'Custom GPTs: Your New AI Colleague!',
    description: 'Discover how to create and deploy custom GPT assistants that revolutionize your tourism marketing workflows.',
    duration: '34 min',
    muxPlaybackId: 'aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8',
    level: 'Tactical',
    instructor: 'Janette Roush',
    topics: ['Custom GPTs', 'ChatGPT', 'AI Assistants', 'Workflow Automation', 'Team Collaboration'],
  },
  {
    id: 'ai-convention-sales',
    title: 'AI for Convention Sales',
    description: 'Master Custom GPTs for meeting follow-up and lead research, then discover vibe coding to build AI-powered tools for business events.',
    duration: '42 min',
    muxPlaybackId: '5xZnY5oJP5nlS5wQsEGv00U00gsf201r00aF00Y902ug26K9o',
    level: 'Tactical',
    instructor: 'Janette Roush',
    topics: ['Convention Sales', 'Business Events', 'Custom GPTs', 'Vibe Coding', 'Lead Research', 'CRM Integration', 'Sales Operations'],
    keyTakeaways: [
      'AI Enhances Sales Capacity, Not Replaces Jobs',
      'Custom GPTs Enable Team-Wide Consistency & Quality',
      '"Vibe Coding" Rapidly Turns Ideas into Prototypes',
      'AI Agents Automate Complex Research',
      'Workflow Mapping is Key to AI Integration'
    ],
  },
  {
    id: 'crit-framework',
    title: 'AI Prompting Using the CRIT Framework',
    description: 'This video introduces the CRIT (Context, Role, Interview, Task) framework for creating effective AI prompts, emphasizing that providing detailed, spoken context leads to much better results than simple typed commands.',
    duration: '12 min',
    muxPlaybackId: 'OC72C8icortMHMBjS87615i9PRYu3C2dGt7XA22JlWU',
    level: 'Tactical',
    instructor: 'Janette Roush',
    topics: ['Prompt Engineering', 'CRIT Framework', 'AI Communication', 'Workshop Planning'],
  },
  {
    id: 'model-context-protocol',
    title: 'Model Context Protocol',
    description: 'This presentation introduces the Model Context Protocol (MCP) as a technical breakthrough designed to solve AI\'s trustworthiness problem in travel planning by acting as a "source of truth."',
    duration: '27 min',
    muxPlaybackId: 'V1DanWAF02sOwwIFov4BXNaTzwT3Kn41TnUWdcyNZfZk',
    level: 'Strategic',
    instructor: 'Janette Roush',
    topics: ['Model Context Protocol', 'MCP', 'AI Trustworthiness', 'Travel Planning', 'Technical Strategy'],
  },
]

const shortFormVideos = [
  {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature to build a "Business Trip Packing Assistant." Learn how the tool was developed entirely with natural language prompts.',
    duration: '1 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    category: 'Demo',
    instructor: 'Janette Roush',
    topics: ['Claude Artifacts', 'Rapid Prototyping', 'AI Development', 'Practical Applications'],
  },
  {
    id: 'ai-presentations',
    title: 'How AI Can Help with Presentations',
    description: 'Janette walks you through her complete AI-powered workflow for creating compelling presentations from the ground up.',
    duration: '9 min',
    muxPlaybackId: 'qZkSL00Sd00Qe01OLuiv6TdEiIVYKXZKKk1UPR5RckP2fM',
    category: 'Tutorial',
    instructor: 'Janette Roush',
    topics: ['Presentations', 'Content Creation', 'ChatGPT', 'Image Generation', 'Gemini'],
  },
]

// Generate JSON-LD structured data for the entire library
const generateLibrarySchema = () => {
  const allVideos = [...webinars, ...shortFormVideos]

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Learning Library for Tourism Professionals',
    description: 'Comprehensive collection of AI training videos, tutorials, and resources specifically designed for destination marketing organizations (DMOs), convention bureaus, and tourism professionals.',
    author: {
      '@type': 'Person',
      name: 'Janette Roush',
      jobTitle: 'AI Strategy Consultant',
      description: 'AI strategy consultant specializing in practical AI implementation for tourism and destination marketing organizations.',
    },
    about: [
      'Artificial Intelligence in Tourism',
      'Destination Marketing',
      'AI Tools and Applications',
      'DMO Strategy',
      'Convention Sales',
      'AI Workflow Automation'
    ],
    hasPart: allVideos.map(video => ({
      '@type': 'VideoObject',
      name: video.title,
      description: video.description,
      duration: video.duration,
      thumbnailUrl: `https://image.mux.com/${video.muxPlaybackId}/thumbnail.png`,
      contentUrl: `https://stream.mux.com/${video.muxPlaybackId}.m3u8`,
      uploadDate: '2024-01-01',
      creator: {
        '@type': 'Person',
        name: video.instructor,
      },
      keywords: (video as any).topics?.join(', ') || '',
      educationalLevel: (video as any).level || (video as any).category || 'Professional',
    })),
  }
}

export default function LibraryPage() {
  const schema = generateLibrarySchema()

  return (
    <AccessCheck>
      <>
        {/* JSON-LD Structured Data for AI Discoverability */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center text-brand-navy hover:text-brand-sky"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
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

        {/* Main Content */}
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-12 w-12 text-brand-sky" />
              </div>
              <h1 className="text-4xl font-bold text-brand-navy mb-4">
                AI Learning Library
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your comprehensive resource for AI education in tourism and destination marketing.
                Expert-led videos, practical tutorials, and implementation guides.
              </p>
            </div>

            {/* Strategic & Tactical Videos */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Video className="h-6 w-6 text-brand-navy mr-2" />
                <h2 className="text-2xl font-bold text-brand-navy">
                  Full-Length Training Videos
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webinars.map((video) => (
                  <Link
                    key={video.id}
                    href={`/webinar/${video.id}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200"
                  >
                    <div className="relative aspect-video bg-gray-100">
                      <Image
                        src={`https://image.mux.com/${video.muxPlaybackId}/thumbnail.png?width=800&height=450&time=10`}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <Play className="h-16 w-16 text-white" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          video.level === 'Strategic'
                            ? 'bg-purple-500 text-white'
                            : 'bg-brand-sky text-white'
                        }`}>
                          {video.level}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-brand-navy mb-2 group-hover:text-brand-sky transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {video.duration}
                        </div>
                      </div>
                      {(video as any).topics && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {(video as any).topics.slice(0, 3).map((topic: string, idx: number) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Short-Form Videos */}
            <section>
              <div className="flex items-center mb-6">
                <Play className="h-6 w-6 text-brand-navy mr-2" />
                <h2 className="text-2xl font-bold text-brand-navy">
                  Quick Tutorials & Demos
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {shortFormVideos.map((video) => (
                  <Link
                    key={video.id}
                    href="/shorts"
                    className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200"
                  >
                    <div className="flex gap-4 p-4">
                      <div className="relative w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={`https://image.mux.com/${video.muxPlaybackId}/thumbnail.png?width=400&height=400&time=10`}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-brand-sky px-2 py-1 rounded text-xs font-semibold text-white">
                            {video.category}
                          </span>
                          <span className="text-sm text-gray-500">{video.duration}</span>
                        </div>
                        <h3 className="font-semibold text-brand-navy mb-2 group-hover:text-brand-sky transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {video.description}
                        </p>
                        {(video as any).topics && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {(video as any).topics.slice(0, 3).map((topic: string, idx: number) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* AI Discoverability Note */}
            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-semibold text-brand-navy mb-2">About This Library</h3>
              <p className="text-sm text-gray-700">
                This learning library is designed for AI discoverability. All content includes structured data
                markup (Schema.org JSON-LD) to help AI tools like ChatGPT, Claude, and Perplexity cite and
                reference these resources when answering questions about AI in tourism, destination marketing,
                and convention sales.
              </p>
            </div>
          </div>
        </main>
      </>
    </AccessCheck>
  )
}
