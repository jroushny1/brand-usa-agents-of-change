// Markdown copies of the key public pages, plus /llms.txt.
//
// Rule: every copy carries the same words a person reads on the HTML page.
// Nothing here is written for machines only. /press.md, /library.md and the
// conference-talk copies are generated from the same data modules the pages
// render. /about.md, /ai-audit.md and /story-lab.md repeat copy that lives in
// the page components, so an edit to that page copy needs the same edit here.
// `npm run check:markdown [baseUrl]` compares every copy against its HTML page.

import { pressItems, appearances, featuredPressIds, type PressItem } from '@/data/press'
import { resources } from '@/data/resources'
import { webinarData } from '@/data/webinars'

export const SITE = 'https://janetteroush.com'

const abs = (url: string) => (url.startsWith('/') ? `${SITE}${url}` : url)

const header = (title: string, htmlPath: string) =>
  `# ${title}\n\nHTML page: ${SITE}${htmlPath}\n`

// ---------------------------------------------------------------- /about.md

export function aboutMarkdown(): string {
  const press = featuredPressIds
    .map((id) => pressItems.find((item) => item.id === id))
    .filter((item): item is PressItem => Boolean(item))

  return `${header('Janette Roush', '/about')}
SVP, Innovation & Chief AI Officer · Brand USA

Expert advisor · AI Opener for Destinations, Europe & North America

AI strategy for the business of travel.

25+ years in travel, from theater ticketing in the 1990s to leading AI strategy for international tourism marketing. Janette started experimenting with AI the week ChatGPT launched and committed to trying something new with it every day at work. That daily practice became a career pivot — and the Agents of Change program, where she shares the tools and workflows her team uses at Brand USA so the industry can put them to work. She also serves as an expert advisor to the European and North American cohorts of AI Opener for Destinations, Group NAO’s program for destination organizations putting AI strategy into practice.

- [View Speaker Availability via Brand USA](https://www.thebrandusa.com/about/brand-usa-speakers/)
- [Follow the work](${SITE}/library)

Speaking on AI in tourism · Brand USA

Video: Nolan Nichols · Joe York, Miles Partnership

## A point of view

Two ideas Janette is known for in the travel industry

### 01 Destination as a Service

As AI systems begin to answer travelers directly, destinations have a new job to do. Janette frames it as two parts: a verification layer, where AI checks claims against the local authority, and content portability, where a destination's first-person storytelling is made machine-readable so AI systems can use it.

> “We're shifting from only being a creator of content to also being a steward of data. We still need to make the content — that's what feeds the systems.”

### 02 AI as the operating system of business

Janette's daily practice reshaped how she works, and it points to where the whole industry is heading. The shift she describes is from using AI in a separate window to doing the actual work inside it.

> “AI isn't just a thing that lives inside a separate chat window that you go to ask questions to. It is now the operating system of business.”

> “Most of us use AI. Few of us work inside of it. That's the shift.”
>
> Janette Roush

## In the press

Featured in the travel trade

${press.map((p) => `- ${p.publication}: [“${p.title}”](${p.url}) ${p.dateDisplay}`).join('\n')}

[See all press coverage](${SITE}/press)

## What her team builds

Selected work

- [Personal Operating System](https://www.thebrandusa.com/insights-resources/ai-innovation/the-shape-of-a-personal-os-for-claude/): A live system for giving AI full context on your work — built with Claude Code and a file-based vault.
- [AI Visibility Audit](${SITE}/ai-audit): A tool to see how a destination shows up when travelers ask AI search engines where to go.
- [Agents of Change Library](${SITE}/library): Webinars, tools, and resources the Brand USA team uses, shared for destination marketers.

## Bring AI in tourism to your stage

Janette speaks to industry partners and stakeholders about putting AI to work in tourism. Speaking is arranged through Brand USA.

[View Speaker Availability via Brand USA](https://www.thebrandusa.com/about/brand-usa-speakers/)
`
}

// ---------------------------------------------------------------- /press.md

export function pressMarkdown(): string {
  const lead = pressItems.find((item) => item.id === 'travel-weekly-high-stakes')

  const articles = pressItems
    .map((item) => {
      const lines = [
        `### [${item.title}](${item.url})`,
        '',
        `${item.publication} · ${item.dateDisplay}`,
      ]
      if (item.quote) lines.push('', `> “${item.quote}”`, '>', '> — Janette Roush')
      lines.push('', item.summary, '', `[Read on ${item.publication}](${item.url})`)
      if (item.reporter) lines.push('', `By ${item.reporter}`)
      return lines.join('\n')
    })
    .join('\n\n')

  const shows = appearances
    .map((item) => `### [${item.title}](${item.url})\n\n${item.dateDisplay}\n\n${item.description}`)
    .join('\n\n')

  return `${header('Press', '/press')}
In the Media

Coverage, interviews, and conversations on AI, destination marketing, and the future of how travelers discover the United States.
${
  lead?.quote
    ? `\n> “${lead.quote}”\n>\n> ${lead.publication} · “${lead.title}” · ${lead.dateDisplay}\n`
    : ''
}
## In the News

${articles}

## Podcasts & Appearances

${shows}
`
}

// -------------------------------------------------------------- /library.md

export function libraryMarkdown(): string {
  const sections = resources
    .map((category) => {
      const items = category.items
        .map((item) => {
          const meta = [
            item.date,
            item.status === 'recorded' ? 'Recorded' : undefined,
            item.status === 'upcoming' ? 'Upcoming' : undefined,
          ].filter(Boolean)
          return `- [${item.title}](${abs(item.url)}): ${item.description}${
            meta.length ? ` (${meta.join(' · ')})` : ''
          }`
        })
        .join('\n')
      return `## ${category.category}\n\n${items}`
    })
    .join('\n\n')

  return `${header('AI Tools & Resources', '/library')}
The Library

Guides, tools, and industry links curated for tourism professionals

${sections}
`
}

// ------------------------------------------------- /ai-audit.md, /story-lab.md

export function aiAuditMarkdown(): string {
  return `${header('AI Vision Simulator', '/ai-audit')}
The Lab

See what ChatGPT, Claude, and Perplexity see on your site. An interactive AI readiness audit for destination marketing organizations: robots.txt, schema markup, and content visibility.

The interactive tool runs on the HTML page: ${SITE}/ai-audit
`
}

export function storyLabMarkdown(): string {
  return `${header('Story Lab', '/story-lab')}
The Lab

Every travel story is built from a finite set of elements. Combine them into story hooks, scan copy for inert clichés, and see why specificity is retrievability in the AI search era.

The interactive tool runs on the HTML page: ${SITE}/story-lab
`
}

// ------------------------------------------------------ /webinar/<id>.md

// The three recordings of live conference talks that stay on this site.
export const conferenceTalkIds = Object.values(webinarData)
  .filter((w) => w.isConferenceTalk)
  .map((w) => w.id)

const timestamp = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`

export function webinarMarkdown(id: string): string | null {
  const w = webinarData[id]
  if (!w || !w.isConferenceTalk) return null

  const parts: string[] = [
    header(w.title, `/webinar/${id}`).trimEnd(),
    w.description,
    `${w.duration} · ${w.chapters.length} chapters`,
    `${w.instructor}\n\n${w.instructorTitle}`,
  ]

  if (w.chapters.length) {
    parts.push(`## Chapters\n\n${w.chapters.map((c) => `- ${timestamp(c.time)} ${c.title}`).join('\n')}`)
  }
  if (w.keyTakeaways?.length) {
    parts.push(`## Key Takeaways\n\n${w.keyTakeaways.map((t) => `- ${t}`).join('\n')}`)
  }
  if (w.learningOutcomes?.length) {
    parts.push(`## What You'll Learn\n\n${w.learningOutcomes.map((o) => `- ${o}`).join('\n')}`)
  }
  if (w.resources?.length) {
    parts.push(
      `## Resources\n\n${w.resources.map((r) => `- [${r.name}](${abs(r.url)}): ${r.description}`).join('\n')}`
    )
  }
  if (w.relatedResources?.length) {
    parts.push(
      `## Tools Mentioned\n\n${w.relatedResources
        .map((r) => `- [${r.name}](${abs(r.url)}): ${r.description}`)
        .join('\n')}`
    )
  }
  if (w.transcript) {
    parts.push(`## Full Transcript: AI for Tourism Professionals\n\n${w.transcript}`)
  }

  return parts.join('\n\n') + '\n'
}

// ---------------------------------------------------------------- /llms.txt

// Titles and descriptions repeat each page's published <title> and meta
// description. `npm run check:markdown` confirms every description below
// against the live meta tag.
export const llmsPages = [
  {
    path: '/',
    title: 'Janette Roush | Working Inside of AI',
    description:
      'Janette Roush is the SVP, Innovation and Chief AI Officer at Brand USA. A LinkedIn Top Voice and Broadway veteran, she specializes in Generative AI strategy for travel and marketing.',
  },
  {
    path: '/about',
    markdown: '/about.md',
    title: 'About Janette Roush',
    description:
      'Janette Roush is SVP, Innovation and Chief AI Officer at Brand USA. She speaks to destination marketing organizations and industry audiences about putting AI to work in tourism — the practical tools and workflows her team uses every day.',
  },
  {
    path: '/press',
    markdown: '/press.md',
    title: 'Press',
    description:
      'Press coverage, interviews, and podcast appearances featuring Janette Roush, SVP of Innovation and Chief AI Officer at Brand USA, on AI, destination marketing, and the future of travel discovery.',
  },
  {
    path: '/library',
    markdown: '/library.md',
    title: 'AI Tools & Resources',
    description:
      'Guides, tools, and industry links curated for tourism professionals — the Personal OS guides, the Agents of Change webinar library, AI Opener for Destinations, and AI governance references.',
  },
  {
    path: '/ai-audit',
    markdown: '/ai-audit.md',
    title: 'AI Vision Simulator — AI Readiness Audit',
    description:
      'See what ChatGPT, Claude, and Perplexity see on your site. An interactive AI readiness audit for destination marketing organizations: robots.txt, schema markup, and content visibility.',
  },
  {
    path: '/story-lab',
    markdown: '/story-lab.md',
    title: 'Story Lab — The Periodic Table of Travel Storytelling',
    description:
      'Every travel story is built from a finite set of elements. Combine them into story hooks, scan copy for inert clichés, and see why specificity is retrievability in the AI search era.',
  },
]

export function llmsTxt(): string {
  const [home, ...pages] = llmsPages
  const talks = conferenceTalkIds.map((id) => webinarData[id])

  const pageLine = (p: (typeof llmsPages)[number]) =>
    `- [${p.title}](${SITE}${p.path}): ${p.description}`

  return `# Janette Roush

> ${home.description}

## Pages

${pages.map(pageLine).join('\n')}

## Conference talks

${talks.map((w) => `- [${w.title}](${SITE}/webinar/${w.id}): ${w.description}`).join('\n')}

## Markdown copies

Each Markdown file carries the same content as its HTML page.

${pages.map((p) => `- [${p.title}](${SITE}${p.markdown})`).join('\n')}
${talks.map((w) => `- [${w.title}](${SITE}/webinar/${w.id}.md)`).join('\n')}
`
}

// ------------------------------------------------------------------ helpers

export function markdownResponse(body: string, htmlPath: string): Response {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      // The HTML page stays the canonical URL for search engines.
      Link: `<${SITE}${htmlPath}>; rel="canonical"`,
    },
  })
}
