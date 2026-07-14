import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccessCheck from '@/components/AccessCheck'
import { ExternalLink } from 'lucide-react'
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
    title: 'Travel Tech Insider — "Future Destinations: The Evolving Role of the DMO"',
    description:
      'With hosts Gilad Berenstein and Cara Whitehill, alongside co-guest Meaghan Ferrigno — how DMOs are redefining their role as AI-generated content and new discovery behaviors reshape destination marketing.',
    url: 'https://open.spotify.com/episode/1cxj6FoSKRuvSVdtR7Daud',
    dateDisplay: 'July 14, 2026',
  },
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

// The lead pull quote — promoted from the Travel Weekly entry above.
const leadQuote = pressItems.find((item) => item.id === 'travel-weekly-high-stakes')!

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

        <div className="min-h-screen">
          {/* Page header */}
          <section className="border-b border-brand-navy">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
              <div className="dateline text-brand-cyan mb-5">In the Media</div>
              <h1 className="font-display font-medium text-4xl md:text-6xl text-brand-navy leading-none">
                Press
              </h1>
              <p className="mt-6 text-xl text-brand-navy leading-relaxed max-w-3xl">
                Coverage, interviews, and conversations on AI, destination marketing, and the future
                of how travelers discover the United States.
              </p>
            </div>
          </section>

          {/* Lead moment — the Travel Weekly pull quote */}
          <section className="bg-brand-paper2 border-b border-brand-sand">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
              <blockquote className="font-display italic text-3xl md:text-5xl leading-tight text-brand-navy">
                <span className="text-brand-cyan">&ldquo;</span>
                {leadQuote.quote}
                <span className="text-brand-cyan">&rdquo;</span>
              </blockquote>
              <cite className="dateline text-brand-slate block mt-6 not-italic">
                {leadQuote.publication} &middot; &ldquo;{leadQuote.title}&rdquo; &middot; {leadQuote.dateDisplay}
              </cite>
            </div>
          </section>

          {/* In the News */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
            <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
              <span>In the News</span>
              <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
            </div>
            <div className="border-t border-brand-navy">
              {pressItems.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_auto] gap-x-6 gap-y-2 py-10 border-b border-brand-sand"
                >
                  <span className="dateline text-brand-cyan">{item.publication}</span>
                  <h3 className="font-display text-2xl leading-tight text-brand-navy">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-cyan transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <span className="dateline text-brand-slate sm:text-right whitespace-nowrap">
                    {item.dateDisplay}
                  </span>
                  <div className="sm:col-start-2 sm:col-span-2">
                    <blockquote className="mt-3">
                      <p className="font-display italic text-xl md:text-2xl leading-snug text-brand-navy">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                      <cite className="dateline text-brand-slate block mt-2 not-italic">
                        &mdash; Janette Roush
                      </cite>
                    </blockquote>
                    <p className="mt-4 text-brand-gray-blue leading-relaxed">{item.summary}</p>
                    <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-1">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 dateline text-brand-navy hover:text-brand-cyan transition-colors"
                      >
                        Read on {item.publication}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      {item.reporter && (
                        <span className="dateline text-brand-slate">By {item.reporter}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Podcasts & Appearances */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
            <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
              <span>Podcasts &amp; Appearances</span>
              <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
            </div>
            <div className="border-t border-brand-navy">
              {appearances.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 sm:grid-cols-[10rem_1fr_auto] gap-x-6 gap-y-1 py-7 border-b border-brand-sand"
                >
                  <span className="dateline text-brand-slate">{item.dateDisplay}</span>
                  <div>
                    <h3 className="font-display text-xl leading-snug text-brand-navy group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-brand-gray-blue leading-relaxed">{item.description}</p>
                  </div>
                  <ExternalLink
                    className="h-4 w-4 text-brand-slate group-hover:text-brand-cyan transition-colors mt-1 justify-self-start sm:justify-self-end"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </AccessCheck>
    </>
  )
}
