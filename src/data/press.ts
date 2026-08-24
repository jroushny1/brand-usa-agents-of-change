// Press coverage and appearances — the single source of truth.
// Rendered on /press, and the three most recent articles are surfaced on /about.
// Add new entries to the top of each list (reverse chronological).
// Pull quotes are verified verbatim from the published pieces.

export interface PressItem {
  id: string
  publication: string
  reporter?: string
  dateDisplay: string
  date: string
  title: string
  url: string
  summary: string
  quote?: string
}

// Articles & interviews. Add new entries to the top (reverse chronological).
// Pull quotes are verified verbatim from the published pieces.
export const pressItems: PressItem[] = [
  {
    id: 'jtf-curating-trust',
    publication: 'Journal of Tourism Futures',
    reporter: 'Bernadett Papp',
    dateDisplay: 'July 24, 2026',
    date: '2026-07-24',
    title: 'Curating trust for an AI future: an interview with Janette Roush on the evolving roles of NTOs and DMOs',
    url: 'https://www.emerald.com/jtf/article/doi/10.1108/JTF-06-2026-0288/1388605/Curating-trust-for-an-AI-future-an-interview-with',
    summary:
      'A peer-reviewed, open-access interview on how NTOs and DMOs evolve from marketing organizations into intelligence hubs and validators of destination information — data coordination, content provenance, and transparency as the foundation of traveler trust.',
    quote: "I think it's time to start thinking about AI not as a chatbot, but as your personal operating system.",
  },
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
export const appearances = [
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
