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
      {
        title: 'Brand USA Agents of Change',
        description: 'Register for upcoming webinars here.',
        url: 'https://www.thebrandusa.com/events/webinars',
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
    category: 'Conversations on AI in Tourism',
    items: [
      {
        title: 'Destination Discourse – "What Happens When AI Becomes the Primary Interface for Travel?"',
        description: 'Stuart and Adam are joined by Brand USA\'s Janette Roush for a provocative exploration of the question no one in tourism wants to ask out loud: what happens to DMOs when AI becomes the primary interface for travel inspiration, planning, and booking?',
        url: 'https://www.youtube.com/watch?v=gvCOpVNtvHY&t=2729s',
        icon: Podcast,
        date: 'Nov 20, 2025',
      },
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
    category: 'Tourism Voices in AI',
    items: [
      {
        title: 'Travel Trends Podcast with Dan Christian',
        description: 'Tourism industry podcast exploring AI trends, destination marketing innovation, and technology adoption in travel.',
        url: 'https://www.traveltrendspodcast.com/',
        icon: Podcast,
      },
      {
        title: 'Destination Discourse',
        description: 'A robust discussion show featuring some of the smartest minds in the destination marketing industry. If you\'re a destination marketer or supplier this show will challenge you to think outside of the constraints of everyday marketing tactics and will encourage you to challenge the status quo.',
        url: 'https://www.youtube.com/@DestinationDiscourse',
        icon: Podcast,
      },
      {
        title: 'Everything AI in Travel by Tony Carne',
        description: 'Newsletter covering artificial intelligence applications, trends, and innovations specifically for the travel and tourism industry.',
        url: 'https://everythingaiintravel.beehiiv.com/',
        icon: FileText,
      },
      {
        title: 'Kara Franker - AI in Tourism',
        description: 'Insights and analysis on AI applications in destination marketing, tourism trends, and industry innovation.',
        url: 'https://karafranker.substack.com/',
        icon: FileText,
      },
      {
        title: 'CEO.AI Newsletter by Greg Oates',
        description: 'LinkedIn newsletter on AI strategy, leadership, and implementation for executives and decision-makers.',
        url: 'https://www.linkedin.com/newsletters/ceo-ai-7346953760369164290/',
        icon: FileText,
      },
      {
        title: 'Janette Roush - Chief AI Officer, Brand USA',
        description: 'Follow for insights on AI strategy, implementation, and innovation in destination marketing and tourism.',
        url: 'https://www.linkedin.com/in/janetteroush/',
        icon: FileText,
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
      {
        title: 'Microsoft Copilot',
        description: 'Microsoft\'s AI assistant with web search, image generation, and deep integration with Microsoft 365 applications.',
        url: 'https://copilot.microsoft.com',
        icon: Code,
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
    category: 'Research & Productivity',
    items: [
      {
        title: 'Google NotebookLM',
        description: 'AI-powered research and note-taking tool that synthesizes information from your documents, creates study guides, and generates podcast-style audio overviews.',
        url: 'https://notebooklm.google.com',
        icon: Code,
        logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
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
      {
        title: 'Napkin.ai',
        description: 'AI tool that transforms text into visual diagrams, infographics, and presentations with automatic smart layouts.',
        url: 'https://www.napkin.ai',
        icon: Code,
      },
    ]
  },
  {
    category: 'Image & Video Generation',
    items: [
      {
        title: 'Pika',
        description: 'AI video generation platform that creates and edits videos from text prompts and images with cinematic effects.',
        url: 'https://pika.art',
        icon: Code,
      },
      {
        title: 'Midjourney',
        description: 'Leading AI image generation platform known for artistic, high-quality outputs from text descriptions.',
        url: 'https://www.midjourney.com',
        icon: Code,
      },
      {
        title: 'Runway',
        description: 'Professional AI video editor with text-to-video, image-to-video, and advanced editing capabilities for creators.',
        url: 'https://runwayml.com',
        icon: Code,
      },
    ]
  },
  {
    category: 'Copywriting & Content',
    items: [
      {
        title: 'Jasper',
        description: 'AI writing assistant specialized in marketing copy, blog posts, and long-form content creation with brand voice customization.',
        url: 'https://www.jasper.ai',
        icon: Code,
      },
    ]
  },
  {
    category: 'AI Agents & Automation',
    items: [
      {
        title: 'Agent.ai',
        description: 'Platform for building autonomous AI agents that perform lead research, competitive analysis, and data enrichment tasks.',
        url: 'https://agent.ai',
        icon: Code,
      },
      {
        title: 'N8N',
        description: 'Open-source workflow automation platform that connects AI models with apps and services for complex automation workflows.',
        url: 'https://n8n.io',
        icon: Code,
      },
      {
        title: 'Supabase',
        description: 'Open-source Firebase alternative with PostgreSQL database, authentication, and real-time subscriptions for building AI applications.',
        url: 'https://supabase.com',
        icon: Code,
        logo: 'https://supabase.com/favicon/favicon-96x96.png',
      },
    ]
  },
  {
    category: 'AI Learning & Certifications',
    items: [
      {
        title: 'AI Marketing Institute',
        description: 'Professional AI training and certification programs for marketers, offering courses on AI strategy and implementation.',
        url: 'https://www.marketingaiinstitute.com',
        icon: BookOpen,
      },
      {
        title: 'Allie K. Miller - AI Learning',
        description: 'AI educator and advisor sharing practical guidance on AI adoption, strategy, and implementation for business leaders.',
        url: 'https://www.alliekmiller.com',
        icon: BookOpen,
      },
      {
        title: 'Every.to',
        description: 'Every is a media and software company that publishes a daily newsletter about what comes next in technology. We also build software products, offer courses, and provide AI consulting and training services.',
        url: 'https://every.to/newsletter',
        icon: BookOpen,
      },
    ]
  },
  {
    category: 'AI Governance & Policy',
    items: [
      {
        title: 'IAPP (International Association of Privacy Professionals)',
        description: 'Leading global resource for AI governance, privacy certification, and professional development in data protection and AI ethics.',
        url: 'https://iapp.org',
        icon: FileText,
      },
      {
        title: 'Dr. David Privacy',
        description: 'Expert insights on privacy, data protection, and AI governance frameworks for organizations navigating compliance and ethical AI implementation.',
        url: 'https://drdavidprivacy.com',
        icon: FileText,
      },
      {
        title: 'Luiza\'s Newsletter',
        description: 'In-depth analysis and practical guidance on AI policy, governance frameworks, and regulatory developments affecting organizations.',
        url: 'https://luizasnewsletter.com',
        icon: FileText,
      },
      {
        title: 'Oliver Patel\'s Newsletter',
        description: 'Strategic perspectives on AI governance, policy analysis, and best practices for building responsible AI systems in organizations.',
        url: 'https://oliverpatel.substack.com',
        icon: FileText,
      },
      {
        title: 'Brand USA AI Policy',
        description: 'Public example of organizational AI policy with practical guidelines for implementing AI governance in tourism and destination marketing.',
        url: 'https://thebrandusa.app.box.com/s/bbsg85jl4w1rbgolcyg2kwjzy7he9g64',
        icon: FileText,
      },
      {
        title: 'City of Boston AI Guidelines',
        description: 'Municipal AI policy example providing guidelines for using generative AI in government and organizational settings.',
        url: 'https://www.boston.gov/sites/default/files/file/2023/05/Guidelines-for-Using-Generative-AI-2023.pdf',
        icon: FileText,
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
                className="flex items-center text-brand-navy hover:text-brand-cyan transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
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
        <section className="relative bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan py-8 sm:py-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
              AI Tools & Resources
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Podcasts, tools, guides, and industry links curated for tourism professionals
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12">

            {/* Resource Categories */}
            <div className="space-y-6 sm:space-y-10 md:space-y-12">
              {resources.map((category, categoryIndex) => {
                const isPodcast = category.category.includes('Podcast')
                const isTools = category.category.includes('AI') && !category.category.includes('Podcast')

                // Define gradient colors by category
                const getCategoryGradient = () => {
                  if (isPodcast) return 'from-brand-blue to-brand-navy'
                  if (isTools) return 'from-brand-cyan to-brand-blue'
                  if (category.category.includes('Industry')) return 'from-brand-accent-blue to-brand-navy'
                  if (category.category.includes('Official')) return 'from-brand-blue to-brand-cyan'
                  if (category.category.includes('Learning')) return 'from-brand-blue to-brand-cyan'
                  return 'from-brand-blue to-brand-cyan'
                }

                const getBgColor = () => {
                  if (isPodcast) return 'bg-gradient-to-br from-blue-50 to-cyan-50'
                  if (isTools) return 'bg-gradient-to-br from-cyan-50 to-blue-50'
                  return 'bg-white'
                }

                return (
                  <section key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')} className={`${getBgColor()} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm`}>
                    {/* Section Header */}
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-brand-navy">
                        {category.category}
                      </h2>
                    </div>

                    {/* Podcast Layout - Grid of Small Cards with Logos */}
                    {isPodcast ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 list-none">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          // Extract podcast name and episode title from the title
                          const [podcastName, episodeTitle] = item.title.includes('–')
                            ? item.title.split('–').map(s => s.trim())
                            : [item.title, '']

                          return (
                            <li key={itemIndex}>
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Listen to ${item.title}${(item as any).date ? ` from ${(item as any).date}` : ''}`}
                                className="group bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-lg hover:border-brand-blue hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full"
                              >
                                {/* Podcast Icon & Name */}
                                <div className="flex items-start gap-2 sm:gap-3 mb-2">
                                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center">
                                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                                  </div>
                                  {/* Podcast Name & Date */}
                                  <div className="flex-1 pt-0.5">
                                    <div className="text-xs font-semibold text-brand-blue leading-tight">
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
                                  <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-1.5 sm:mb-2 group-hover:text-brand-cyan transition-colors line-clamp-2">
                                    {episodeTitle}
                                  </h3>
                                )}

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2">
                                  {item.description}
                                </p>

                                {/* Listen Link */}
                                <div className="mt-auto pt-1.5 sm:pt-2 border-t border-gray-100">
                                  <span className="text-xs font-semibold text-brand-blue group-hover:text-brand-cyan inline-flex items-center gap-1">
                                    Listen Now
                                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                                  </span>
                                </div>
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    ) : isTools ? (
                      /* AI Tools Layout - Logo Grid */
                      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 list-none">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          return (
                            <li key={itemIndex}>
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Explore ${item.title}: ${item.description}`}
                                className="group bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-lg hover:border-brand-cyan hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full"
                              >
                                {/* Logo */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden mb-2 sm:mb-3 group-hover:scale-105 transition-transform flex items-center justify-center bg-gray-50">
                                  {(item as any).logo ? (
                                    <img
                                      src={(item as any).logo}
                                      alt=""
                                      aria-hidden="true"
                                      className="w-full h-full object-contain p-1.5 sm:p-2"
                                    />
                                  ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center`}>
                                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" aria-hidden="true" />
                                    </div>
                                  )}
                                </div>

                                {/* Title */}
                                <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-1.5 sm:mb-2 group-hover:text-brand-cyan transition-colors line-clamp-1">
                                  {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2 line-clamp-2 sm:line-clamp-3">
                                  {item.description}
                                </p>

                                {/* CTA */}
                                <div className="inline-flex items-center text-xs sm:text-sm font-semibold text-brand-cyan group-hover:gap-1 transition-all mt-auto">
                                  Explore
                                  <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                                </div>
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    ) : (
                      /* Other Resources - Compact Cards */
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 list-none">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          return (
                            <li key={itemIndex}>
                              <a
                                href={item.url}
                                target={(item as any).isInternal ? undefined : "_blank"}
                                rel={(item as any).isInternal ? undefined : "noopener noreferrer"}
                                aria-label={`${(item as any).isInternal ? 'View' : 'Visit'} ${item.title}: ${item.description}`}
                                className="group bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex gap-3 items-start h-full"
                              >
                                {/* Icon */}
                                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-1 sm:mb-1.5 group-hover:text-brand-cyan transition-colors">
                                    {item.title}
                                  </h3>
                                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>

                                {/* Arrow */}
                                {(item as any).isInternal ? (
                                  <div className="flex-shrink-0 text-brand-cyan text-lg sm:text-xl" aria-hidden="true">→</div>
                                ) : (
                                  <ExternalLink className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-brand-cyan transition-colors" aria-hidden="true" />
                                )}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </section>
                )
              })}
            </div>

            {/* Footer Note */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-brand-navy to-brand-blue rounded-xl sm:rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-2 sm:mb-3">Have a Resource to Share?</h3>
              <p className="text-white/90 text-sm sm:text-base md:text-lg">
                Found a helpful AI tool or resource for tourism professionals? Email <a href="mailto:jroush@thebrandusa.com" className="text-white hover:text-brand-cyan underline font-semibold transition-colors">jroush@thebrandusa.com</a> to suggest additions to this library.
              </p>
            </div>
          </div>
        </main>
      </>
    </AccessCheck>
  )
}
