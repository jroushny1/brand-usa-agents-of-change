import { BookOpen, Code, FileText, Podcast, Video, Wrench, type LucideIcon } from 'lucide-react'

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
export const resources: ResourceCategory[] = [
  {
    category: 'Personal OS Guides',
    items: [
      {
        title: 'Set Up Your Personal OS for Claude Code',
        description: 'Start here. A simple file system that helps AI understand your work and become a true productivity partner. Covers folder structure, CLAUDE.md, task schema, and your first two slash commands.',
        url: '/personal-os',
        icon: Wrench,
      },
      {
        title: 'Level Up Your Personal OS (2.0)',
        description: 'For week-2+ users. Covers memory files, the People directory, writing profiles, advanced slash commands (/call, /review, /insights, /remember), MCP servers, and the weekly review workflow.',
        url: '/personal-os-2',
        icon: Wrench,
      },
    ]
  },
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
        title: 'Podcasts & Appearances \u2192 Press',
        description: 'Janette\u2019s podcast and video appearances now live on the Press page, alongside articles and interviews.',
        url: '/press',
        icon: Podcast,
        isInternal: true,
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
    category: 'Tourism Voices in AI',
    items: [
      {
        title: 'Destination Discourse',
        description: 'A robust discussion show featuring some of the smartest minds in the destination marketing industry. If you\'re a destination marketer or supplier this show will challenge you to think outside of the constraints of everyday marketing tactics and will encourage you to challenge the status quo.',
        url: 'https://www.youtube.com/@DestinationDiscourse',
        icon: Podcast,
      },
      {
        title: 'Every Podcast',
        description: 'Weekly conversations about AI, business, and technology with writers, founders, and researchers. Deep dives on AI applications, agent workflows, and the future of work.',
        url: 'https://every.to/chain-of-thought',
        icon: Podcast,
      },
      {
        title: 'Hard Fork',
        description: 'New York Times podcast covering the latest in tech, AI breakthroughs, and Silicon Valley news. Hosted by Kevin Roose and Casey Newton, exploring AI\'s impact on society and business.',
        url: 'https://www.nytimes.com/column/hard-fork',
        icon: Podcast,
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
      {
        title: 'How I AI with Claire Vo',
        description: 'Podcast featuring practical AI implementation stories from operators and builders. Claire Vo interviews practitioners about real-world AI applications, workflows, and tools they use daily.',
        url: 'https://www.howiai.com/',
        icon: Podcast,
      },
      {
        title: 'Marketing Against the Grain',
        description: 'Marketing podcast exploring unconventional strategies, AI tools, and growth tactics. Hosted by Kipp Bodnar (HubSpot CMO) and Kieran Flanagan (HubSpot SVP), featuring practical insights on modern marketing and AI adoption.',
        url: 'https://www.marketingagainstthegrain.com/',
        icon: Podcast,
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
        logo: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=128',
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
        logo: 'https://www.google.com/s2/favicons?domain=replit.com&sz=128',
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
        logo: 'https://www.monologueapp.com/i/Icon-web.png',
      },
      {
        title: 'Wispr Flow',
        description: 'Real-time voice-to-text dictation software optimized for natural speech patterns and creating detailed AI prompts.',
        url: 'https://www.wispr.ai',
        icon: Code,
        logo: 'https://www.google.com/s2/favicons?domain=wispr.ai&sz=128',
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
        logo: 'https://www.google.com/s2/favicons?domain=beautiful.ai&sz=128',
      },
      {
        title: 'Descript',
        description: 'AI-powered video and podcast editor with text-based editing, transcription, voice cloning, and studio sound enhancement.',
        url: 'https://www.descript.com',
        icon: Code,
        logo: 'https://www.google.com/s2/favicons?domain=descript.com&sz=128',
      },
      {
        title: 'Napkin.ai',
        description: 'AI tool that transforms text into visual diagrams, infographics, and presentations with automatic smart layouts.',
        url: 'https://www.napkin.ai',
        icon: Code,
      },
      {
        title: 'Gamma',
        description: 'AI-powered presentation tool that generates beautiful slides, docs, and webpages from a single prompt. Create polished presentations with smart layouts, images, and content in minutes.',
        url: 'https://gamma.app',
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

