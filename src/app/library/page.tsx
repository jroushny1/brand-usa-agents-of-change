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
        title: 'Travel Trends – "The Impact of AI on Destination Marketing"',
        description: 'Dan Christian kicks off an AI-focused mini-series discussing how destination marketing is evolving as trip planning shifts from traditional search to chatbots and AI itineraries.',
        url: 'https://www.listennotes.com/podcasts/travel-trends-with/the-impact-of-ai-on-9G8EexwrySJ/',
        icon: Podcast,
        date: 'Oct 9, 2025',
      },
      {
        title: 'Arival\'s The Best Part of Travel – "AI, Androids & Destination Experiences"',
        description: 'Discussion on how AI is shaping the tours and activities sector, covering AI\'s impact on travel websites, content creation, language translation, and destination marketing.',
        url: 'https://arival.travel/podcast/',
        icon: Podcast,
        date: 'July 10, 2025',
      },
      {
        title: 'Tourpreneur – "Demystifying AI for Tour Operators"',
        description: 'Mitch Bach sits down with Janette Roush to discuss practical ways tour operators can start using AI, offering a beginner-friendly approach for companies overwhelmed by rapid AI changes.',
        url: 'https://podcasts.apple.com/ca/podcast/tourpreneur-tour-business-podcast/id1447408463',
        icon: Podcast,
        date: 'June 26, 2025',
      },
      {
        title: 'The Future of Tourism – "AI Governance for DMOs and Their Leaders"',
        description: 'Janette Roush outlines the urgent need for DMO leaders to devise ethical AI strategies, covering opportunities, risks, and how to implement AI responsibly across tourism organizations.',
        url: 'https://podcasts.apple.com/de/podcast/symposium-special-ai-governance-for-dmos-and-their-leaders/id1518309902?i=1000711206699',
        icon: Podcast,
        date: 'June 4, 2025',
      },
      {
        title: 'Destination Discourse – "Is There a Right Way to Roll Out AI?"',
        description: 'Panel debate on how DMOs should implement AI. Janette Roush advocates quick experimentation while discussing AI governance policies and strategies for building internal support.',
        url: 'https://mytourismiq.com/posts/31-is-there-a-right-way-to-roll-out-ai-janette-roush-vimal-vyas',
        icon: Podcast,
        date: 'May 22, 2025',
      },
      {
        title: 'Brand USA Talks Travel – "AI for DMOs"',
        description: 'Guest host Janette Roush leads a discussion with Esra Calvert and Signe Jungersted on how AI can enhance destination marketing strategy, exploring practical ways DMOs can integrate AI.',
        url: 'https://podcasts.apple.com/us/podcast/ai-for-dmos-how-travel-organizations-can-leverage-ai-today/id1593907064?i=1000698806117',
        icon: Podcast,
        date: 'March 11, 2025',
      },
      {
        title: 'Pass the Mic – "Get Comfortable With Being Uncomfortable"',
        description: 'SVP of Innovation and Chief AI Officer at Brand USA Janette Roush discusses with Laura Fernandez how embracing discomfort drives professional growth, learning, and workplace positivity. Topics include stepping beyond comfort zones, expanding professional horizons, taking strategic risks, and creating your own career trajectory.',
        url: 'https://www.siriusxmmedia.com/insights/get-comfortable-with-being-uncomfortable-janette-roush-from-brand-usa?tag=pass-the-mic',
        icon: Podcast,
        date: 'Jan 24, 2025',
      },
      {
        title: 'Hospitality Daily – "America\'s Chief AI Officer for Travel Shares Advice for 2025"',
        description: 'Janette Roush shares practical advice on how AI can drive innovation in tourism, including frameworks for adopting AI and insights into the future of travel marketing.',
        url: 'https://podcasts.apple.com/us/podcast/americas-chief-ai-officer-for-travel-shares-advice/id1652126356?i=1000713243276',
        icon: Podcast,
        date: 'Dec 2024',
      },
      {
        title: 'The Future of Tourism – "The New Electricity: Let\'s Talk AI"',
        description: 'Janette Roush and Cody Chomiak help demystify AI for the travel industry, framing it as an approachable technology and discussing its impact on visitor experiences and destination marketing.',
        url: 'https://podcasts.apple.com/us/podcast/the-new-electricity-lets-talk-ai-in-tourism-with/id1518309902?i=1000674194888',
        icon: Podcast,
        date: 'Oct 10, 2024',
      },
      {
        title: 'The Travel Marketing Podcast – "AI and Destination Marketing"',
        description: 'Janette Roush joins Brennen Bliss to share NYC Tourism\'s innovative approaches to integrating AI into destination marketing, discussing storytelling, measurement challenges, and AI\'s impact on creative processes.',
        url: 'https://podcasts.apple.com/pa/podcast/ai-and-destination-marketing/id1637462704?i=1000663833090',
        icon: Podcast,
        date: 'July 30, 2024',
      },
      {
        title: 'Destination Marketing Podcast – "The #1 AI Thought Leader in Tourism"',
        description: 'Host Adam Stoker chats with Janette Roush about how she became a leading voice on AI in destination marketing, why marketers must embrace AI, and tips for identifying the right AI solutions.',
        url: 'https://mytourismiq.com/posts/321-a-conversation-with-the-1-ai-thought-leader-in-tourism-janette-roush',
        icon: Podcast,
        date: 'May 31, 2024',
      },
      {
        title: 'The Future of Tourism – "Expanding Applications We\'re Just Beginning to Grasp"',
        description: 'Janette Roush and Paul McLeod discuss the state of generative AI in tourism, where the tech is headed, and both positive and negative use cases for destinations.',
        url: 'https://podcasts.apple.com/us/podcast/the-future-of-ai-expanding-applications-were/id1518309902?i=1000630306284',
        icon: Podcast,
        date: 'Oct 5, 2023',
      },
      {
        title: 'Architects of Destination Advocacy – "A.I. For Advocacy"',
        description: 'Host Andreas Weissenborn welcomes Janette Roush to discuss how AI can be leveraged for destination advocacy, exploring non-traditional AI topics and ethical considerations for DMOs.',
        url: 'https://destinationsinternational.org/podcasts/ai-advocacy',
        icon: Podcast,
        date: 'July 30, 2023',
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
    category: 'AI Language Models',
    items: [
      {
        title: 'ChatGPT',
        description: 'OpenAI\'s frontier language model with custom GPTs, web search, image generation, and advanced reasoning capabilities.',
        url: 'https://chat.openai.com',
        icon: Code,
        logo: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png',
      },
      {
        title: 'Claude',
        description: 'Anthropic\'s frontier language model with extended context windows, Artifacts for rapid prototyping, and advanced analysis.',
        url: 'https://claude.ai',
        icon: Code,
        logo: 'https://claude.ai/images/claude_app_icon.png',
      },
      {
        title: 'Gemini',
        description: 'Google\'s frontier language model with deep search, multimodal capabilities, and seamless integration with Google Workspace.',
        url: 'https://gemini.google.com',
        icon: Code,
        logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
      },
    ]
  },
  {
    category: 'AI Coding Platforms',
    items: [
      {
        title: 'Lovable',
        description: 'AI-powered full-stack web app builder that generates production-ready code from natural language prompts.',
        url: 'https://lovable.dev',
        icon: Code,
      },
      {
        title: 'Replit',
        description: 'Collaborative browser-based IDE with AI code generation for building and deploying applications entirely with natural language.',
        url: 'https://replit.com',
        icon: Code,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png',
      },
    ]
  },
  {
    category: 'Voice-to-Text Tools',
    items: [
      {
        title: 'Monologue',
        description: 'Privacy-focused local voice-to-text transcription that runs entirely on your device for creating detailed AI prompts.',
        url: 'https://monologue.app',
        icon: Code,
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f5/85/cd/f585cd02-26c7-0c20-5f86-6b3f7d4ee0f5/AppIcon-0-0-1x_U007epad-0-0-0-85-220.png/460x0w.webp',
      },
      {
        title: 'Wispr Flow',
        description: 'Real-time voice-to-text dictation software optimized for natural speech patterns and creating detailed AI prompts.',
        url: 'https://www.wispr.ai',
        icon: Code,
        logo: 'https://framerusercontent.com/images/ORiXlZ8KPRSH3F3ZVcGEa99kRLM.png',
      },
    ]
  },
  {
    category: 'Content Creation Tools',
    items: [
      {
        title: 'Beautiful.ai',
        description: 'AI-powered presentation software that automatically designs professional slides with smart templates and layouts.',
        url: 'https://www.beautiful.ai',
        icon: Code,
        logo: 'https://assets-global.website-files.com/5f3ebf5c3dcbf4601c9d53cd/632e95db3dcbf40e6b4f71f5_Beautiful.ai%20logo%20square.png',
      },
      {
        title: 'Descript',
        description: 'AI-powered video and podcast editor with text-based editing, transcription, voice cloning, and studio sound enhancement.',
        url: 'https://www.descript.com',
        icon: Code,
        logo: 'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6408f6907936855c20961f84_descript-logo.png',
      },
    ]
  },
  {
    category: 'AI Agents & Research',
    items: [
      {
        title: 'Agent.ai',
        description: 'Platform for building autonomous AI agents that perform lead research, competitive analysis, and data enrichment tasks.',
        url: 'https://agent.ai',
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
        <section className="relative bg-gradient-to-br from-[#191B56] via-[#0056D2] to-[#6BA6AA] py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Tools & Resources
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Podcasts, tools, guides, and industry links curated for tourism professionals
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* Resource Categories */}
            <div className="space-y-20">
              {resources.map((category, categoryIndex) => {
                const isPodcast = category.category.includes('Podcast')
                const isTools = category.category.includes('AI') && !category.category.includes('Podcast')

                // Define gradient colors by category
                const getCategoryGradient = () => {
                  if (isPodcast) return 'from-[#AB606F] to-[#950E1D]'
                  if (isTools) return 'from-[#DEB041] to-[#A66326]'
                  if (category.category.includes('Industry')) return 'from-[#066466] to-[#191B56]'
                  if (category.category.includes('Official')) return 'from-[#0056D2] to-[#6BA6AA]'
                  if (category.category.includes('Learning')) return 'from-[#0056D2] to-[#6BA6AA]'
                  return 'from-[#0056D2] to-[#6BA6AA]'
                }

                const getBgColor = () => {
                  if (isPodcast) return 'bg-gradient-to-br from-purple-50 to-pink-50'
                  if (isTools) return 'bg-gradient-to-br from-amber-50 to-yellow-50'
                  return 'bg-white'
                }

                return (
                  <section key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')} className={`${getBgColor()} rounded-3xl p-8 md:p-12 shadow-sm`}>
                    {/* Section Header */}
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-[#191B56]">
                        {category.category}
                      </h2>
                    </div>

                    {/* Podcast Layout - Grid of Small Cards with Logos */}
                    {isPodcast ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          // Extract podcast name and episode title from the title
                          const [podcastName, episodeTitle] = item.title.includes('–')
                            ? item.title.split('–').map(s => s.trim())
                            : [item.title, '']

                          return (
                            <a
                              key={itemIndex}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-xl hover:border-[#AB606F] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                              {/* Podcast Icon & Name */}
                              <div className="flex items-start gap-3 mb-3">
                                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#AB606F] to-[#950E1D] flex items-center justify-center">
                                  <Icon className="h-6 w-6 text-white" />
                                </div>
                                {/* Podcast Name & Date */}
                                <div className="flex-1 pt-1">
                                  <div className="text-xs font-semibold text-[#AB606F] leading-tight">
                                    {podcastName}
                                  </div>
                                  {(item as any).date && (
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {(item as any).date}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Episode Title */}
                              {episodeTitle && (
                                <h3 className="text-base font-bold text-[#191B56] mb-2 group-hover:text-[#0056D2] transition-colors line-clamp-2">
                                  {episodeTitle}
                                </h3>
                              )}

                              {/* Description */}
                              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">
                                {item.description}
                              </p>

                              {/* Listen Link */}
                              <div className="mt-auto pt-2 border-t border-gray-100">
                                <span className="text-xs font-semibold text-[#AB606F] group-hover:text-[#0056D2] inline-flex items-center gap-1">
                                  Listen Now
                                  <ExternalLink className="h-3 w-3" />
                                </span>
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    ) : isTools ? (
                      /* AI Tools Layout - Logo Grid */
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          return (
                            <a
                              key={itemIndex}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-[#DEB041] hover:-translate-y-1 transition-all duration-300"
                            >
                              {/* Logo */}
                              <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform flex items-center justify-center bg-gray-50">
                                {(item as any).logo ? (
                                  <img
                                    src={(item as any).logo}
                                    alt={item.title}
                                    className="w-full h-full object-contain p-2"
                                  />
                                ) : (
                                  <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center`}>
                                    <Icon className="h-8 w-8 text-white" />
                                  </div>
                                )}
                              </div>

                              {/* Title */}
                              <h3 className="text-lg font-bold text-[#191B56] mb-2 group-hover:text-[#0056D2] transition-colors">
                                {item.title}
                              </h3>

                              {/* Description */}
                              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                {item.description}
                              </p>

                              {/* CTA */}
                              <div className="inline-flex items-center text-sm font-semibold text-[#DEB041] group-hover:gap-1 transition-all">
                                Explore
                                <ExternalLink className="ml-1 h-4 w-4" />
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    ) : (
                      /* Other Resources - Compact Cards */
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          return (
                            <a
                              key={itemIndex}
                              href={item.url}
                              target={(item as any).isInternal ? undefined : "_blank"}
                              rel={(item as any).isInternal ? undefined : "noopener noreferrer"}
                              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start"
                            >
                              {/* Icon */}
                              <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                <Icon className="h-7 w-7 text-white" />
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-bold text-[#191B56] mb-2 group-hover:text-[#0056D2] transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>

                              {/* Arrow */}
                              {(item as any).isInternal ? (
                                <div className="flex-shrink-0 text-[#0056D2]">→</div>
                              ) : (
                                <ExternalLink className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-[#0056D2] transition-colors" />
                              )}
                            </a>
                          )
                        })}
                      </div>
                    )}
                  </section>
                )
              })}
            </div>

            {/* Footer Note */}
            <div className="mt-20 p-10 bg-gradient-to-br from-[#191B56] to-[#0056D2] rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3">Have a Resource to Share?</h3>
              <p className="text-white/90 text-lg">
                Found a helpful AI tool or resource for tourism professionals? Email <a href="mailto:jroush@thebrandusa.com" className="text-white hover:text-[#DEB041] underline font-semibold transition-colors">jroush@thebrandusa.com</a> to suggest additions to this library.
              </p>
            </div>
          </div>
        </main>
      </>
    </AccessCheck>
  )
}
