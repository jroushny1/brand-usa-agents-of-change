import { BookOpen, Code, FileText, Video, Wrench, type LucideIcon } from 'lucide-react'

export interface ResourceItem {
  title: string
  description: string
  url: string
  icon: LucideIcon
  /** Internal links open in the same tab and get a different arrow treatment. */
  isInternal?: boolean
  /** Remote logo image; falls back to the icon when absent. */
  logo?: string
  date?: string
  status?: 'recorded' | 'upcoming'
  recordedDate?: string
}

export interface ResourceCategory {
  category: string
  items: ResourceItem[]
}

// Categorized resource links rendered on /library and in its JSON-LD schemas.
//
// The Personal OS guides are published on thebrandusa.com. The cards stay here —
// this is where people look for them — but every click goes to the canonical
// Brand USA page. Those clicks fire the `personal_os_open` GA4 event as outbound
// (see AnalyticsEvents.tsx), so the guides stay measurable after the handoff.
export const resources: ResourceCategory[] = [
  {
    category: 'Personal OS Guides',
    items: [
      {
        title: 'Set Up Your Personal OS in Claude Cowork',
        description: 'Start here. A simple folder of files that helps Claude understand your work and become a true productivity partner. Covers the desktop app, folder structure, CLAUDE.md, task schema, and an interview-driven setup.',
        url: 'https://www.thebrandusa.com/insights-resources/ai-innovation/the-shape-of-a-personal-os-for-claude/',
        icon: Wrench,
      },
      {
        title: 'Level Up Your Personal OS in Cowork (2.0)',
        description: 'For week-2+ users. Capture pipelines (Granola), a voice system, the People and Companies wiki, shipping branded work from the vault, connectors, and the weekly review rhythm.',
        url: 'https://www.thebrandusa.com/insights-resources/ai-innovation/how-a-personal-oscompounds-over-time/',
        icon: Wrench,
      },
      {
        title: 'The Claude Code Build (Advanced)',
        description: 'For power users who work in an editor. The full engine: filesystem skills as real slash commands, auto memory that persists across sessions, and MCP servers. Runs in VS Code with Claude Code.',
        url: 'https://www.thebrandusa.com/insights-resources/ai-innovation/build-your-personal-osin-claude-code/',
        icon: Code,
      },
    ]
  },
  {
    category: 'Official Brand USA Resources',
    items: [
      {
        title: 'AI & Innovation at Brand USA',
        description: 'The Agents of Change home. Register for the next live webinar, watch recordings of past sessions, read the three Personal OS guides, and follow The AI Edit — Brand USA’s running coverage of how AI is changing travel planning.',
        url: 'https://www.thebrandusa.com/insights-resources/ai-innovation/',
        icon: FileText,
      },
    ]
  },
  {
    category: 'Industry Programs',
    items: [
      {
        title: 'AI Opener for Destinations',
        description: 'Group NAO’s expert program for destination organizations putting AI strategy into practice. Janette is an expert advisor to both the European and North American cohorts.',
        url: 'https://www.aiopenerfordestinations.com/',
        icon: BookOpen,
      },
    ]
  },
  {
    category: 'Learning Resources',
    items: [
      {
        title: 'AI Training Videos',
        description: 'The webinar series, on the front page of this site — full sessions with transcripts and chapter markers, free to watch, no sign-in.',
        url: '/#webinars',
        icon: Video,
        isInternal: true,
      },
    ]
  },
  {
    category: 'Conference Talks',
    items: [
      {
        title: 'Generative AI and Tourism: Practical Applications for Minnesota\'s Global Future',
        description: 'Conference presentation exploring how generative AI is transforming destination marketing and tourism, with practical applications and strategies for leveraging AI in the travel industry.',
        url: '/webinar/minnesota-ai-tourism',
        icon: Video,
        date: 'Feb 19, 2025',
        isInternal: true,
      },
      {
        title: 'AI Ideas Exchange',
        description: 'Interactive conference session sharing innovative AI ideas and strategies for the tourism and destination marketing industry.',
        url: '/webinar/ai-ideas-exchange',
        icon: Video,
        date: 'Feb 19, 2025',
        isInternal: true,
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
