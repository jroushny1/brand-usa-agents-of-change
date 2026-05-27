import Header from '@/components/Header'
import AccessCheck from '@/components/AccessCheck'
import { Newspaper, ExternalLink, Mic } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press coverage, interviews, and podcast appearances featuring Janette Roush, SVP of Innovation and Chief AI Officer at Brand USA, on AI, destination marketing, and the future of travel discovery.',
  openGraph: {
    title: 'Press | Agents of Change',
    description: 'Press coverage, interviews, and podcast appearances featuring Janette Roush on AI and the future of destination marketing.',
  },
}

// Articles & interviews. Add new entries to the top (reverse chronological).
// Pull quotes are verified verbatim from the published pieces.
const pressItems = [
  {
    id: 'travel-weekly-high-stakes',
    publication: 'Travel Weekly',
    reporter: 'Emma Weissmann',
    dateDisplay: 'May 4, 2026',
    date: '2026-05-04',
    title: "Destinations' high-stakes game with AI",
    url: 'https://www.travelweekly.com/Travel-News/Travel-Technology/Destinations-high-stakes-game-with-AI',
    summary:
      'On how DMOs hold their place as the trusted source of truth as travelers shift from search engines to AI, plus practical guidance for teams just getting started.',
    quote: "AI isn't giving us a roadmap. As a DMO, we have to figure it out.",
  },
  {
    id: 'phocuswire-daas',
    publication: 'PhocusWire',
    reporter: 'Morgan Hines',
    dateDisplay: 'May 4, 2026',
    date: '2026-05-04',
    title: 'DMOs shift toward destination-as-a-service model in AI era',
    url: 'https://www.phocuswire.com/news/technology/dmo-destination-as-a-service-ai',
    summary:
      'The first trade-press feature on "destination as a service" — a verification layer plus portable, structured destination data that AI tools can pull from the local authority.',
    quote: 'We are the local authority that can verify what is real.',
  },
  {
    id: 'phocuswire-ai-visibility',
    publication: 'PhocusWire',
    reporter: 'Morgan Hines',
    dateDisplay: 'March 25, 2026',
    date: '2026-03-25',
    title: 'Travel players weigh approaches to winning AI visibility',
    url: 'https://www.phocuswire.com/news/technology/ai-visibility-seo-geo-aeo-phocuswright-travel-marketing-ai-summit',
    summary:
      'From the Phocuswright Travel Marketing AI Summit: why content portability and structured data — not just SEO — decide whether a brand surfaces in the age of AI.',
    quote:
      'I want my Claude Code set up to talk to Marriott directly … so I can make my booking right there without leaving the platform.',
  },
  {
    id: 'leisure-group-travel',
    publication: 'Leisure Group Travel',
    reporter: '',
    dateDisplay: 'October 2025',
    date: '2025-10-01',
    title: 'Janette Roush, SVP Innovation & Chief AI Officer of Brand USA',
    url: 'https://leisuregrouptravel.com/janette-roush-of-brand-usa-interview/',
    summary:
      'A wide-ranging interview on getting started with AI, building small tools without being a developer, and freeing up time for the human work that makes group travel memorable.',
    quote: "Don't wait for permission! Nobody will give it to you.",
  },
  {
    id: 'marketing-ai-institute-maicon',
    publication: 'Marketing AI Institute',
    reporter: 'Cathy McPhillips',
    dateDisplay: 'July 24, 2025',
    date: '2025-07-24',
    title: 'How to Spark AI Adoption in Your Organization (MAICON 2025 Speaker Series)',
    url: 'https://www.marketingaiinstitute.com/blog/marketing-ai-conference-janette-roush',
    summary:
      'On creating the conditions for teams to lean into AI, why Model Context Protocol is a major unlock, and reframing AI use as part of doing good work.',
    quote: "It's not cheating to use AI at work.",
  },
  {
    id: 'siriusxm-pass-the-mic',
    publication: 'SiriusXM Media',
    reporter: 'Laura Fernandez',
    dateDisplay: 'January 24, 2025',
    date: '2025-01-24',
    title: 'Get Comfortable With Being Uncomfortable (Pass the Mic)',
    url: 'https://www.siriusxmmedia.com/insights/get-comfortable-with-being-uncomfortable-janette-roush-from-brand-usa',
    summary:
      'A conversation on how embracing discomfort drives professional growth, taking strategic risks, and building your own career trajectory.',
    quote: 'We need to get comfortable with being uncomfortable.',
  },
]

// Podcast & video appearances (guest or host). Reverse chronological.
const appearances = [
  {
    title: 'Destination Discourse — "What Should DMOs Actually Be Doing With AI Right Now?" (with Dan Holowack)',
    description:
      'A no-fluff conversation with Stuart Butler and Adam Stoker on the shift from "using AI" to "working inside AI," why every DMO needs an AI champion now, and why doing nothing is the biggest risk.',
    url: 'https://www.youtube.com/watch?v=xxO4Sh0un1Q',
    dateDisplay: 'May 21, 2026',
  },
  {
    title: 'Hospitality Daily — "The Taylor Swift of Travel AI" on Agentic AI, Upskilling, and Trust',
    description:
      'On agentic AI, organizational upskilling strategies, and building trust in AI systems while keeping a human-centered approach to adoption.',
    url: 'https://podcast.hospitalitydaily.com/janette-roush-2026/',
    dateDisplay: 'Feb 2026',
  },
  {
    title: 'SEEN Saturday Series — "The AI Blueprint: Strategic Insights on Innovation from Brand USA"',
    description:
      'Bridging complex technology and practical application for sports tourism leaders — the "what now" and "what next" of AI in destination marketing and event planning.',
    url: 'https://www.buzzsprout.com/2244915/episodes/18559752',
    dateDisplay: 'Jan 31, 2026',
  },
  {
    title: 'Destination Discourse — "What Happens When AI Becomes the Primary Interface for Travel?"',
    description:
      'A provocative exploration of what happens to DMOs when AI becomes the primary interface for travel inspiration, planning, and booking.',
    url: 'https://www.youtube.com/watch?v=gvCOpVNtvHY&t=2729s',
    dateDisplay: 'Nov 20, 2025',
  },
  {
    title: 'Travel Trends — "The Impact of AI on Destination Marketing"',
    description:
      'How destination marketing evolves as trip planning shifts from traditional search to chatbots and AI itineraries.',
    url: 'https://www.listennotes.com/podcasts/travel-trends-with/the-impact-of-ai-on-9G8EexwrySJ/',
    dateDisplay: 'Oct 9, 2025',
  },
  {
    title: "Arival's The Best Part of Travel — \"AI, Androids & Destination Experiences\"",
    description:
      "How AI is shaping the tours and activities sector, covering AI's impact on travel websites, content creation, translation, and destination marketing.",
    url: 'https://arival.travel/podcast/',
    dateDisplay: 'July 10, 2025',
  },
  {
    title: 'Tourpreneur — "Demystifying AI for Tour Operators"',
    description:
      'A beginner-friendly conversation with Mitch Bach on practical ways tour operators can start using AI.',
    url: 'https://podcasts.apple.com/ca/podcast/tourpreneur-tour-business-podcast/id1447408463',
    dateDisplay: 'June 26, 2025',
  },
  {
    title: 'The Future of Tourism — "AI Governance for DMOs and Their Leaders"',
    description:
      'The urgent need for DMO leaders to devise ethical AI strategies — opportunities, risks, and responsible implementation.',
    url: 'https://podcasts.apple.com/de/podcast/symposium-special-ai-governance-for-dmos-and-their-leaders/id1518309902?i=1000711206699',
    dateDisplay: 'June 4, 2025',
  },
  {
    title: 'Destination Discourse — "Is There a Right Way to Roll Out AI?"',
    description:
      'A panel debate on how DMOs should implement AI, advocating quick experimentation alongside governance and internal buy-in.',
    url: 'https://mytourismiq.com/posts/31-is-there-a-right-way-to-roll-out-ai-janette-roush-vimal-vyas',
    dateDisplay: 'May 22, 2025',
  },
  {
    title: 'Fandom Unpacked — "AI\'s Impact on Live Entertainment"',
    description:
      'How AI is transforming live entertainment discovery and fan experiences across sports, arts, and ticketed events.',
    url: 'https://www.buzzsprout.com/2449648/episodes/17030825',
    dateDisplay: 'April 23, 2025',
  },
  {
    title: 'Brand USA Talks Travel — "AI for DMOs" (guest host)',
    description:
      'Leading a discussion with Esra Calvert and Signe Jungersted on practical ways DMOs can integrate AI into destination marketing.',
    url: 'https://podcasts.apple.com/us/podcast/ai-for-dmos-how-travel-organizations-can-leverage-ai-today/id1593907064?i=1000698806117',
    dateDisplay: 'March 11, 2025',
  },
  {
    title: "Hospitality Daily — \"America's Chief AI Officer for Travel Shares Advice for 2025\"",
    description:
      'Practical advice on how AI can drive innovation in tourism, including frameworks for adoption and the future of travel marketing.',
    url: 'https://podcasts.apple.com/us/podcast/americas-chief-ai-officer-for-travel-shares-advice/id1652126356?i=1000713243276',
    dateDisplay: 'Dec 2024',
  },
  {
    title: 'The Future of Tourism — "The New Electricity: Let\'s Talk AI"',
    description:
      'With Cody Chomiak, demystifying AI for the travel industry and its impact on visitor experiences and destination marketing.',
    url: 'https://podcasts.apple.com/us/podcast/the-new-electricity-lets-talk-ai-in-tourism-with/id1518309902?i=1000674194888',
    dateDisplay: 'Oct 10, 2024',
  },
  {
    title: 'The Travel Marketing Podcast — "AI and Destination Marketing"',
    description:
      "With Brennen Bliss on NYC Tourism's approaches to AI in destination marketing — storytelling, measurement, and AI's impact on creative.",
    url: 'https://podcasts.apple.com/pa/podcast/ai-and-destination-marketing/id1637462704?i=1000663833090',
    dateDisplay: 'July 30, 2024',
  },
  {
    title: 'Destination Marketing Podcast — "The #1 AI Thought Leader in Tourism"',
    description:
      'With Adam Stoker on becoming a leading voice on AI in destination marketing and identifying the right AI solutions.',
    url: 'https://mytourismiq.com/posts/321-a-conversation-with-the-1-ai-thought-leader-in-tourism-janette-roush',
    dateDisplay: 'May 31, 2024',
  },
  {
    title: 'The Future of Tourism — "Expanding Applications We\'re Just Beginning to Grasp"',
    description:
      'With Paul McLeod on the state of generative AI in tourism, where the tech is headed, and use cases for destinations.',
    url: 'https://podcasts.apple.com/us/podcast/the-future-of-ai-expanding-applications-were/id1518309902?i=1000630306284',
    dateDisplay: 'Oct 5, 2023',
  },
  {
    title: 'Architects of Destination Advocacy — "A.I. For Advocacy"',
    description:
      'With Andreas Weissenborn on leveraging AI for destination advocacy and the ethical considerations for DMOs.',
    url: 'https://destinationsinternational.org/podcasts/ai-advocacy',
    dateDisplay: 'July 30, 2023',
  },
]

export default function PressPage() {
  // ItemList schema (articles) for AI discoverability
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Press Coverage — Janette Roush',
    'description':
      'Articles and interviews featuring Janette Roush, SVP of Innovation and Chief AI Officer at Brand USA.',
    'itemListElement': pressItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'NewsArticle',
        'headline': item.title,
        'url': item.url,
        'datePublished': item.date,
        'publisher': { '@type': 'Organization', 'name': item.publication },
        ...(item.reporter ? { 'author': { '@type': 'Person', 'name': item.reporter } } : {}),
        'about': {
          '@type': 'Person',
          'name': 'Janette Roush',
          'jobTitle': 'SVP, Innovation and Chief AI Officer',
          'affiliation': { '@type': 'Organization', 'name': 'Brand USA' },
        },
      },
    })),
  }

  return (
    <>
      <script
        id="press-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <AccessCheck>
        <Header />

        <div className="min-h-screen bg-gray-50">
          {/* Header Section */}
          <section className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="h-10 w-10 text-brand-cyan" />
                <h1 className="text-4xl md:text-5xl font-bold text-brand-navy font-display">
                  Press
                </h1>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
                Coverage, interviews, and conversations on AI, destination marketing, and the future
                of how travelers discover the United States.
              </p>
            </div>
          </section>

          {/* In the News */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <h2 className="text-3xl font-bold text-brand-navy font-display mb-8">In the News</h2>
            <div className="space-y-8">
              {pressItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-sm">
                    <span className="font-semibold text-brand-blue uppercase tracking-wide">
                      {item.publication}
                    </span>
                    <span className="text-gray-400">&bull;</span>
                    <span className="text-gray-600">{item.dateDisplay}</span>
                    {item.reporter && (
                      <>
                        <span className="text-gray-400">&bull;</span>
                        <span className="text-gray-600">By {item.reporter}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-brand-navy font-display mb-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-cyan transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>

                  <blockquote className="border-l-4 border-brand-cyan pl-5 my-5">
                    <p className="text-xl md:text-2xl text-brand-navy font-display leading-snug italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <cite className="block mt-2 text-sm not-italic text-gray-500">
                      &mdash; Janette Roush
                    </cite>
                  </blockquote>

                  <p className="text-base text-gray-700 leading-relaxed mb-6">{item.summary}</p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
                  >
                    Read on {item.publication}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Podcasts & Appearances */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
            <div className="flex items-center gap-3 mb-8">
              <Mic className="h-7 w-7 text-brand-cyan" />
              <h2 className="text-3xl font-bold text-brand-navy font-display">
                Podcasts &amp; Appearances
              </h2>
            </div>
            <div className="space-y-4">
              {appearances.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-cyan transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.dateDisplay}</div>
                      <h3 className="text-lg font-bold text-brand-navy font-display group-hover:text-brand-cyan transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-brand-cyan transition-colors flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </AccessCheck>
    </>
  )
}
