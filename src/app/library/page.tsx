import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, BookOpen, ExternalLink, FileText, Video, Podcast, Code } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'

// External resources and links
const resources = [
  {
    category: 'Official Brand USA Resources',
    items: [
      {
        title: 'Brand USA Partner Resources',
        description: 'Official partner resources, brand guidelines, and marketing materials.',
        url: 'https://www.thebrandusa.com/partner-resources?tab-order=3',
        icon: FileText,
      },
    ]
  },
  {
    category: 'Industry Programs',
    items: [
      {
        title: 'AI Opener for Destinations',
        description: 'Expert program for implementing AI strategies in destination marketing.',
        url: 'https://www.aiopenerfordestinations.com/',
        icon: BookOpen,
      },
    ]
  },
  {
    category: 'Podcast Appearances',
    items: [
      {
        title: 'Architects of Destination Advocacy – "A.I. For Advocacy"',
        description: 'Host Andreas Weissenborn welcomes Janette Roush to discuss how AI can be leveraged for destination advocacy, exploring non-traditional AI topics and ethical considerations for DMOs. (July 30, 2023)',
        url: 'https://destinationsinternational.org/podcasts/ai-advocacy',
        icon: Podcast,
      },
      {
        title: 'The Future of Tourism – "Expanding Applications We\'re Just Beginning to Grasp"',
        description: 'Janette Roush and Paul McLeod discuss the state of generative AI in tourism, where the tech is headed, and both positive and negative use cases for destinations. (Oct 5, 2023)',
        url: 'https://podcasts.apple.com/us/podcast/the-future-of-ai-expanding-applications-were/id1518309902?i=1000630306284',
        icon: Podcast,
      },
      {
        title: 'Destination Marketing Podcast – "The #1 AI Thought Leader in Tourism"',
        description: 'Host Adam Stoker chats with Janette Roush about how she became a leading voice on AI in destination marketing, why marketers must embrace AI, and tips for identifying the right AI solutions. (May 31, 2024)',
        url: 'https://mytourismiq.com/posts/321-a-conversation-with-the-1-ai-thought-leader-in-tourism-janette-roush',
        icon: Podcast,
      },
      {
        title: 'The Travel Marketing Podcast – "AI and Destination Marketing"',
        description: 'Janette Roush joins Brennen Bliss to share NYC Tourism\'s innovative approaches to integrating AI into destination marketing, discussing storytelling, measurement challenges, and AI\'s impact on creative processes. (July 30, 2024)',
        url: 'https://podcasts.apple.com/pa/podcast/ai-and-destination-marketing/id1637462704?i=1000663833090',
        icon: Podcast,
      },
      {
        title: 'The Future of Tourism – "The New Electricity: Let\'s Talk AI"',
        description: 'Janette Roush and Cody Chomiak help demystify AI for the travel industry, framing it as an approachable technology and discussing its impact on visitor experiences and destination marketing. (Oct 10, 2024)',
        url: 'https://podcasts.apple.com/us/podcast/the-new-electricity-lets-talk-ai-in-tourism-with/id1518309902?i=1000674194888',
        icon: Podcast,
      },
      {
        title: 'Hospitality Daily – "America\'s Chief AI Officer for Travel Shares Advice for 2025"',
        description: 'Janette Roush shares practical advice on how AI can drive innovation in tourism, including frameworks for adopting AI and insights into the future of travel marketing. (Dec 2024)',
        url: 'https://podcasts.apple.com/us/podcast/americas-chief-ai-officer-for-travel-shares-advice/id1652126356?i=1000713243276',
        icon: Podcast,
      },
      {
        title: 'Pass the Mic – "Get Comfortable With Being Uncomfortable"',
        description: 'SVP of Innovation and Chief AI Officer at Brand USA Janette Roush discusses with Laura Fernandez how embracing discomfort drives professional growth, learning, and workplace positivity. Topics include stepping beyond comfort zones, expanding professional horizons, taking strategic risks, and creating your own career trajectory. (Jan 24, 2025)',
        url: 'https://www.siriusxmmedia.com/insights/get-comfortable-with-being-uncomfortable-janette-roush-from-brand-usa?tag=pass-the-mic',
        icon: Podcast,
      },
      {
        title: 'Brand USA Talks Travel – "AI for DMOs"',
        description: 'Guest host Janette Roush leads a discussion with Esra Calvert and Signe Jungersted on how AI can enhance destination marketing strategy, exploring practical ways DMOs can integrate AI. (March 11, 2025)',
        url: 'https://podcasts.apple.com/us/podcast/ai-for-dmos-how-travel-organizations-can-leverage-ai-today/id1593907064?i=1000698806117',
        icon: Podcast,
      },
      {
        title: 'Destination Discourse – "Is There a Right Way to Roll Out AI?"',
        description: 'Panel debate on how DMOs should implement AI. Janette Roush advocates quick experimentation while discussing AI governance policies and strategies for building internal support. (May 22, 2025)',
        url: 'https://mytourismiq.com/posts/31-is-there-a-right-way-to-roll-out-ai-janette-roush-vimal-vyas',
        icon: Podcast,
      },
      {
        title: 'The Future of Tourism – "AI Governance for DMOs and Their Leaders"',
        description: 'Janette Roush outlines the urgent need for DMO leaders to devise ethical AI strategies, covering opportunities, risks, and how to implement AI responsibly across tourism organizations. (June 4, 2025)',
        url: 'https://podcasts.apple.com/de/podcast/symposium-special-ai-governance-for-dmos-and-their-leaders/id1518309902?i=1000711206699',
        icon: Podcast,
      },
      {
        title: 'Tourpreneur – "Demystifying AI for Tour Operators"',
        description: 'Mitch Bach sits down with Janette Roush to discuss practical ways tour operators can start using AI, offering a beginner-friendly approach for companies overwhelmed by rapid AI changes. (June 26, 2025)',
        url: 'https://podcasts.apple.com/ca/podcast/tourpreneur-tour-business-podcast/id1447408463',
        icon: Podcast,
      },
      {
        title: 'Arival\'s The Best Part of Travel – "AI, Androids & Destination Experiences"',
        description: 'Discussion on how AI is shaping the tours and activities sector, covering AI\'s impact on travel websites, content creation, language translation, and destination marketing. (July 10, 2025)',
        url: 'https://arival.travel/podcast/',
        icon: Podcast,
      },
      {
        title: 'Travel Trends – "The Impact of AI on Destination Marketing"',
        description: 'Dan Christian kicks off an AI-focused mini-series discussing how destination marketing is evolving as trip planning shifts from traditional search to chatbots and AI itineraries. (Oct 9, 2025)',
        url: 'https://www.listennotes.com/podcasts/travel-trends-with/the-impact-of-ai-on-9G8EexwrySJ/',
        icon: Podcast,
      },
    ]
  },
  {
    category: 'Learning Resources',
    items: [
      {
        title: 'AI Training Videos',
        description: 'Full collection of AI training webinars and tutorials.',
        url: '/',
        icon: Video,
        isInternal: true,
      },
      {
        title: 'Short-Form Tutorials',
        description: 'Quick demos and practical AI applications.',
        url: '/shorts',
        icon: Video,
        isInternal: true,
      },
    ]
  },
  {
    category: 'AI Tools & Platforms',
    items: [
      {
        title: 'ChatGPT',
        description: 'Conversational AI platform for custom GPTs and workflow automation.',
        url: 'https://chat.openai.com',
        icon: Code,
      },
      {
        title: 'Claude',
        description: 'AI assistant with Artifacts for rapid prototyping.',
        url: 'https://claude.ai',
        icon: Code,
      },
      {
        title: 'Agent.ai',
        description: 'Build AI agents for lead research and competitive analysis.',
        url: 'https://agent.ai',
        icon: Code,
      },
      {
        title: 'Replit',
        description: '"Vibe Coding" platform for building applications with natural language.',
        url: 'https://replit.com',
        icon: Code,
      },
      {
        title: 'Monologue',
        description: 'Local voice-to-text transcription for detailed AI prompting.',
        url: 'https://monologue.app',
        icon: Code,
      },
      {
        title: 'Wispr Flow',
        description: 'Voice-to-text dictation for creating detailed AI prompts.',
        url: 'https://www.wispr.ai',
        icon: Code,
      },
    ]
  },
]

// Generate JSON-LD structured data for the resource library
const generateLibrarySchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Learning Library for Tourism Professionals',
    description: 'Curated collection of AI resources, tools, and learning materials specifically designed for destination marketing organizations (DMOs), convention bureaus, and tourism professionals.',
    author: {
      '@type': 'Person',
      name: 'Janette Roush',
      jobTitle: 'Chief AI Officer, Brand USA',
    },
    about: [
      'Artificial Intelligence in Tourism',
      'Destination Marketing',
      'AI Tools and Applications',
      'DMO Strategy',
      'Convention Sales',
      'AI Workflow Automation'
    ],
  }
}

export default function LibraryPage() {
  const schema = generateLibrarySchema()

  return (
    <AccessCheck>
      <>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center text-[#191B56] hover:text-[#0056D2] transition-colors"
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

        {/* Page Header */}
        <section className="bg-gradient-to-b from-white to-[#F7F0DE] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-[#191B56] mb-4">
              AI Tools & Resources
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Podcasts, tools, guides, and industry links curated for tourism professionals
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* Resource Categories */}
            <div className="space-y-16">
              {resources.map((category, categoryIndex) => {
                // Define gradient colors by category
                const getCategoryGradient = () => {
                  if (category.category.includes('Podcast')) return 'from-[#AB606F] to-[#950E1D]'
                  if (category.category.includes('AI Tools')) return 'from-[#DEB041] to-[#A66326]'
                  if (category.category.includes('Industry')) return 'from-[#066466] to-[#191B56]'
                  if (category.category.includes('Official')) return 'from-[#0056D2] to-[#6BA6AA]'
                  if (category.category.includes('Learning')) return 'from-[#0056D2] to-[#6BA6AA]'
                  return 'from-[#0056D2] to-[#6BA6AA]'
                }

                return (
                  <section key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                    <div className="flex items-center mb-8">
                      <h2 className="text-3xl font-bold text-[#191B56]">
                        {category.category}
                      </h2>
                      <span className="ml-3 text-lg text-gray-500">
                        ({category.items.length})
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {category.items.map((item, itemIndex) => {
                        const Icon = item.icon
                        return (
                          <a
                            key={itemIndex}
                            href={item.url}
                            target={(item as any).isInternal ? undefined : "_blank"}
                            rel={(item as any).isInternal ? undefined : "noopener noreferrer"}
                            className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                          >
                            {/* Icon - Larger and more prominent */}
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                              <Icon className="h-8 w-8 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-semibold text-[#191B56] mb-2 line-clamp-2 min-h-[2.5rem]">
                              {item.title}
                            </h3>

                            {/* CTA */}
                            <div className="mt-auto">
                              <span className="text-xs font-semibold text-[#0056D2] group-hover:text-[#0056D2]/80">
                                {(item as any).isInternal ? 'View' : 'Visit'}
                              </span>
                            </div>
                          </a>
                        )
                      })}
                    </div>
                  </section>
                )
              })}
            </div>

            {/* Footer Note */}
            <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
              <h3 className="text-lg font-semibold text-[#191B56] mb-2">Have a Resource to Share?</h3>
              <p className="text-gray-700">
                Found a helpful AI tool or resource for tourism professionals? Email <a href="mailto:jroush@thebrandusa.com" className="text-[#0056D2] hover:underline font-semibold">jroush@thebrandusa.com</a> to suggest additions to this library.
              </p>
            </div>
          </div>
        </main>
      </>
    </AccessCheck>
  )
}
