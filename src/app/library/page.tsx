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
        description: 'Access official partner resources, brand guidelines, and marketing materials from Brand USA.',
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
        description: 'Learn about the AI Opener for Destinations program where Janette Roush serves as an expert advisor for both the North America and Europe editions, helping destinations implement AI strategies.',
        url: 'https://www.aiopenerfordestinations.com/',
        icon: BookOpen,
      },
    ]
  },
  {
    category: 'AI Tools & Platforms',
    items: [
      {
        title: 'ChatGPT',
        description: 'OpenAI\'s conversational AI platform. Create custom GPTs and automate workflows.',
        url: 'https://chat.openai.com',
        icon: Code,
      },
      {
        title: 'Claude',
        description: 'Anthropic\'s AI assistant. Features Artifacts for rapid prototyping and development.',
        url: 'https://claude.ai',
        icon: Code,
      },
      {
        title: 'Agent.ai',
        description: 'Platform for building AI agents for lead research and competitive analysis.',
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
        description: 'Local voice-to-text transcription software for detailed AI prompting (mentioned in CRIT Framework video).',
        url: 'https://monologue.app',
        icon: Code,
      },
      {
        title: 'Wispr Flow',
        description: 'Voice-to-text dictation tool for creating rich, detailed AI prompts.',
        url: 'https://www.wispr.ai',
        icon: Code,
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
        description: 'Watch our full collection of AI training webinars and tutorials.',
        url: '/',
        icon: Video,
        isInternal: true,
      },
      {
        title: 'Short-Form Tutorials',
        description: 'Quick demos and practical AI applications in TikTok-style format.',
        url: '/shorts',
        icon: Video,
        isInternal: true,
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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-12 w-12 text-brand-sky" />
              </div>
              <h1 className="text-4xl font-bold text-brand-navy mb-4">
                Learning Library
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Curated resources, tools, and links to help you implement AI in your tourism organization.
              </p>
            </div>

            {/* Resource Categories */}
            <div className="space-y-10">
              {resources.map((category, categoryIndex) => (
                <section key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">
                    {category.category}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {category.items.map((item, itemIndex) => {
                      const Icon = item.icon
                      return (
                        <a
                          key={itemIndex}
                          href={item.url}
                          target={(item as any).isInternal ? undefined : "_blank"}
                          rel={(item as any).isInternal ? undefined : "noopener noreferrer"}
                          className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-200 hover:border-brand-sky"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start flex-1">
                              <div className="flex-shrink-0 mr-4">
                                <div className="h-12 w-12 bg-brand-sky/10 rounded-lg flex items-center justify-center group-hover:bg-brand-sky/20 transition-colors">
                                  <Icon className="h-6 w-6 text-brand-sky" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-brand-navy mb-2 group-hover:text-brand-sky transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-brand-sky transition-colors" />
                            </div>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-semibold text-brand-navy mb-2">Have a Resource to Share?</h3>
              <p className="text-sm text-gray-700">
                Found a helpful AI tool or resource for tourism professionals? Email <a href="mailto:jroush@thebrandusa.com" className="text-brand-sky hover:underline">jroush@thebrandusa.com</a> to suggest additions to this library.
              </p>
            </div>
          </div>
        </main>
      </>
    </AccessCheck>
  )
}
