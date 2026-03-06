import Header from '@/components/Header'
import AccessCheck from '@/components/AccessCheck'
import { FileText, Calendar, Tag } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Field Notes',
  description: 'Research notes, insights, and evolving definitions from the AI Lab. A living knowledge base for tourism innovation.',
  openGraph: {
    title: 'Field Notes | Agents of Change',
    description: 'Research notes, insights, and evolving definitions from the AI Lab. A living knowledge base for tourism innovation.',
  },
}

// Field notes data - will expand this over time
const fieldNotes = [
  {
    id: 'dmo-ai-strategy-framework',
    title: 'Building Your DMO\'s AI Strategy: The Two-Priority Framework',
    date: '2026-03-06',
    tags: ['AI Strategy', 'DMO', 'Framework', 'Source of Truth', 'GEO'],
    content: `Every DMO needs an AI strategy. The question is what goes in it. After working with destination organizations across the country, a clear framework has emerged: your AI strategy has two priorities, and both are required.

**Priority One: Source of Truth.** Your destination's information needs to be accurate wherever someone encounters it — your website, ChatGPT, Google AI Overviews, Perplexity, Gemini, or any third-party platform. Managing the destination narrative has always been the DMO's core job. AI added new channels to the same mandate.

**Priority Two: AI-Capable.** Every function in your organization uses AI fluently — marketing, research, partner services, operations. Team-wide capability with clear protocols. The value of AI compounds when the whole team uses it.

These two priorities reinforce each other. A strong Source of Truth makes your team's AI work more effective, and a capable team builds better data.

**Start with the AI Audit.** Before you build anything, you need to know where you stand. Three steps to do today:

1. Open ChatGPT, Perplexity, and Google AI Overviews. Ask each about your destination. Write down what's wrong, outdated, or missing. That list is your work order.
2. Search your top three visitor experiences. Does AI cite your website as the source — or someone else's?
3. Do your key pages have schema markup? Run them through Google's Rich Results Test. The answer will tell you where you are.

**What Source of Truth Requires:**

Schema Markup (JSON-LD) — structured tags on your attractions, events, and accommodations. This is how AI crawlers understand your content as data, not just web text.

GEO-Optimized Content — Generative Engine Optimization means writing long-form, authoritative content that directly answers the questions AI tools are trained to respond to.

Structured Data Feeds — machine-readable feeds for your key assets. AI platforms ingest structured data. Unstructured content gets ignored or misquoted.

Authoritative Citations — AI systems favor sources that credible third parties reference. Earned media, strong backlinks, and verified profiles all reinforce your standing.

**The Two-Year Roadmap.** The content layer has to exist before the integration layer can work. Year One focuses on the content layer: AI visibility audit, schema markup, GEO-optimized content, verified profiles on AI-indexed directories, and a content freshness protocol (AI values recency). Year Two builds the integration layer: real-time partner data feeds, dynamic content, API partnerships with AI travel platforms, a destination AI assistant for owned channels, and analytics tracking AI-sourced discovery traffic.

**Becoming AI-Capable Across the Organization.** The second priority means AI fluency in every department. In marketing: audience analysis and targeting — using AI to identify emerging feeder markets, synthesize visitor research, and sharpen campaign targeting. In research: rapid insight synthesis — analyzing visitor surveys, competitive landscapes, and trend reports in hours. In partner services: personalized outreach — tailoring communications, co-op proposals, and grant summaries to each recipient. In operations: board prep and reporting — summarizing monthly metrics and building briefing documents in a fraction of the time.

**Build the Governance.** Without structure, AI adoption stalls at the enthusiasts and risk exposure grows quietly. Three things to stand up: an AI use policy (set guardrails before tools proliferate — short and actionable beats comprehensive and ignored), an AI champion per department (one designated advocate per function who shares wins, surfaces blockers, and keeps their team moving), and an AI steering committee (cross-functional, meets quarterly, evaluates tools, tracks ROI, and aligns AI investment with strategic priorities).

**Your First Three Moves:**

1. Run the AI audit. Ask ChatGPT, Perplexity, and Google AI Overviews about your destination today. Document the gaps.
2. Check your schema markup. Use Google's Rich Results Test on your five most important pages.
3. Name one AI champion per department. That's your governance structure, started.

A state DMO, city DMO, and national tourism organization face different constraints. The strategic categories translate — the specifics are yours to define.`,
  },
  {
    id: 'plaud-to-website',
    title: 'From Voice Recording to Live Website: How I Built the Wyoming Keynote Recap',
    date: '2026-03-04',
    tags: ['Claude Code', 'Plaud', 'Workflow', 'Case Study'],
    content: `I gave a keynote at the Wyoming Governor's Conference on Tourism in February 2026. The talk covered AI's dual impact on tourism — how it's changing traveler behavior and how it's changing the way we work. I recorded the entire session on my Plaud device, a pocket-sized AI recorder that generates transcripts automatically.

Here's what happened next: I took that transcript and fed it into Claude Code. Within a single working session, Claude Code turned a raw voice recording into a fully designed, responsive website — complete with slide imagery, Brand USA typography, structured sections, and social sharing metadata. The result is live at wyoming-keynote-recap.vercel.app.

**The workflow was three steps:**

**Step 1: Record with Plaud.** I clipped the device to my outfit and let it capture the full 60-minute session. Plaud generated a raw transcript — no speaker labels, just a continuous stream of text — which gave me a starting point for everything I said, including the Q&A.

**Step 2: Build with Claude Code.** I gave Claude Code the transcript, my presentation slides, and Brand USA's design system (colors, fonts, logo specs). Claude Code read through the transcript, matched content to slides, and generated a complete HTML page with embedded slide imagery, responsive layout, and proper Open Graph tags for social sharing. The entire build happened in conversation — I described what I wanted, reviewed iterations, and refined the design through dialogue.

**Step 3: Deploy to Vercel.** One push to Bitbucket, connected to Vercel, and the site was live. Total time from raw recording to public URL: one working session.

**Why this matters for tourism professionals:**

This workflow eliminates the gap between "event happened" and "content published." Every conference keynote, panel discussion, or stakeholder meeting generates valuable content that typically dies in a notebook or recording app. With a voice recorder and an AI coding tool, that content becomes a shareable, searchable, branded digital asset — the same day.

The Wyoming recap page serves multiple purposes: it's a reference for the 300 attendees who were in the room, a portfolio piece for future speaking engagements, and a discoverable resource for anyone searching for AI applications in tourism. One recording, three outcomes.

**Tools used:** Plaud (recording and transcript — one-time device cost plus subscription), Claude Code (website generation), Vercel (hosting), Bitbucket (version control).

See the live result: <a href="https://wyoming-keynote-recap.vercel.app" target="_blank" rel="noopener noreferrer">wyoming-keynote-recap.vercel.app</a>`,
  },
  {
    id: 'ai-agents-taxonomy',
    title: 'AI Agents Taxonomy: Four Types That Matter for Tourism',
    date: '2025-01-15',
    tags: ['AI Agents', 'Framework', 'Tourism Strategy'],
    content: `After analyzing hundreds of AI tools and their applications in destination marketing, a clear taxonomy has emerged. There are four distinct types of AI agents, each serving different operational needs:

**Operator Agents** automate browser-based tasks—the digital equivalent of "using the mouse for you." For DMOs, this means automated lead generation, competitive web scraping, and data extraction. Tools like Browse.ai and Manus.im fall into this category.

**Researcher Agents** perform deep analysis and synthesis. Unlike simple search tools, these agents can analyze dozens of competitors simultaneously, synthesize market research, and generate comprehensive reports. This is where strategic intelligence happens.

**Builder Agents** create digital products from natural language prompts. Lovable.ai generates functional websites; Claude Artifacts builds interactive applications. For tourism marketers, this means rapid prototyping without engineering resources.

**Automator Agents** orchestrate workflows across multiple platforms. N8N, Agent.ai, and Google Gemini Gems connect disparate systems and automate multi-step processes. This is the infrastructure layer for AI-powered operations.

Understanding this taxonomy helps DMOs make strategic technology decisions. Each type solves different problems. Most organizations will eventually need all four.`,
  },
  {
    id: 'mcp-breakthrough',
    title: 'Model Context Protocol: Solving the Trust Problem',
    date: '2025-01-10',
    tags: ['MCP', 'Technical', 'Data Accuracy'],
    content: `AI hallucination isn't a bug—it's a feature of how large language models work. They generate plausible text based on patterns, not facts. This is fine for creative writing, catastrophic for travel planning.

The Model Context Protocol (MCP) represents a paradigm shift. Instead of trying to train AI to "know" facts, MCP creates a standardized way for AI to query authoritative data sources in real-time. Think of it as an API layer specifically designed for AI agents.

For tourism, the implications are profound:
- Accessible travel route verification (no more hallucinated ramp locations)
- Real-time venue capacity checks (critical for meeting planners)
- Authoritative attraction operating hours (not "best guess" information)

The technical architecture is elegant: DMOs maintain their "source of truth" databases, MCP provides the query protocol, and AI agents can reliably access verified information. This shifts DMO strategy from "creating content for humans to read" to "maintaining data for AI to query."

This is not future speculation. Anthropic's Claude Desktop already implements MCP. The question is no longer "will this happen?" but "which DMOs will adopt it first?"`,
  },
  {
    id: 'crit-framework-origin',
    title: 'Why CRIT Framework Matters: Context Over Commands',
    date: '2025-01-05',
    tags: ['CRIT Framework', 'Prompting', 'Methodology'],
    content: `Most AI prompt guidance focuses on the task: "Write me an email." "Create a social media post." This approach consistently produces mediocre results for strategic work.

The CRIT Framework (Context, Role, Interview, Task) emerged from observing what separates exceptional AI outputs from generic ones: **rich context**.

**Context:** Tourism professionals operate in a specialized domain. AI doesn't inherently understand DMO budget cycles, state tourism office hierarchies, or CVB stakeholder dynamics. Providing this context—often through voice input for natural explanation—transforms output quality.

**Role:** Assigning AI a specific role ("You are a convention sales director with 15 years of experience") activates relevant training data patterns and adjusts tone appropriately.

**Interview:** Before jumping to the task, let AI ask clarifying questions. This surfaces assumptions and ensures alignment. The best strategic outputs come after 2-3 rounds of AI-led questioning.

**Task:** Only after establishing context, role, and conducting an interview should you specify the task. By this point, AI has sufficient context to produce strategic-level work.

This framework was developed specifically for tourism professionals because our industry's context is too nuanced for generic prompting advice. The difference in output quality is not incremental—it's transformational.`,
  },
]

export default function FieldNotesPage() {
  // TechArticle Schema for research notes
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AI Research Field Notes",
    "description": "Research notes and insights on AI for destination marketing",
    "url": "https://www.janetteroush.com/notes",
    "author": {
      "@type": "Person",
      "name": "Janette Roush",
      "jobTitle": "Chief AI Officer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brand USA Agents of Change"
    },
    "blogPost": fieldNotes.map(note => ({
      "@type": "TechArticle",
      "headline": note.title,
      "datePublished": note.date,
      "author": {
        "@type": "Person",
        "name": "Janette Roush"
      },
      "keywords": note.tags.join(", "),
      "articleBody": note.content
    }))
  }

  // FAQPage schema - key to AI discoverability (like StackList)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should a DMO's AI strategy include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A DMO's AI strategy has two priorities: (1) Source of Truth — ensuring your destination's information is accurate across your website, ChatGPT, Google AI Overviews, Perplexity, and third-party platforms through schema markup (JSON-LD), GEO-optimized content, structured data feeds, and authoritative citations; (2) AI-Capable — building team-wide AI fluency across marketing, research, partner services, and operations with governance structures including an AI use policy, departmental AI champions, and a steering committee. Start by running an AI audit: ask major AI platforms about your destination and document the gaps."
        }
      },
      {
        "@type": "Question",
        "name": "How can tourism professionals turn a voice recording into a website using AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Record your event with a Plaud device to get an automatic transcript, then use Claude Code to generate a fully designed responsive website from that transcript and your slides. Deploy via Vercel for a live URL. This three-step workflow (record, build, deploy) turns any keynote, panel, or meeting into a branded, searchable digital asset in a single working session."
        }
      },
      {
        "@type": "Question",
        "name": "What are the four types of AI agents for tourism marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The four types of AI agents for tourism are: (1) Operator Agents - automate browser tasks like lead generation and web scraping (Browse.ai, Manus.im); (2) Researcher Agents - perform deep analysis and synthesize market research; (3) Builder Agents - create digital products from natural language (Lovable.ai, Claude Artifacts); (4) Automator Agents - orchestrate workflows across platforms (N8N, Agent.ai, Google Gemini Gems)."
        }
      },
      {
        "@type": "Question",
        "name": "What is Model Context Protocol (MCP) and why does it matter for tourism AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Model Context Protocol (MCP) solves the AI hallucination problem by creating a standardized way for AI to query authoritative data sources in real-time. For tourism, this means verifiable accessible travel routes, real-time venue capacity checks, and accurate attraction operating hours. Instead of AI guessing, MCP lets AI query your 'source of truth' database. This shifts DMO strategy from 'content for humans' to 'data for AI to query.'"
        }
      },
      {
        "@type": "Question",
        "name": "What is the CRIT Framework for AI prompting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The CRIT Framework (Context, Role, Interview, Task) produces superior AI outputs by providing rich context before tasks. Context: Explain your specialized domain (DMO budget cycles, stakeholder dynamics). Role: Assign AI a specific persona ('convention sales director with 15 years experience'). Interview: Let AI ask clarifying questions before proceeding. Task: Only specify the task after establishing context. This framework was developed specifically for tourism professionals because the industry context is too nuanced for generic prompting."
        }
      }
    ]
  }

  return (
    <>
      <script
        id="tech-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      ></script>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      ></script>

      <AccessCheck>
        <Header />

        <div className="min-h-screen bg-gray-50">
          {/* Header Section */}
          <section className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-10 w-10 text-brand-cyan" />
                <h1 className="text-4xl md:text-5xl font-bold text-brand-navy font-display">
                  Field Notes
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                A research log of emerging AI concepts, frameworks, and technical insights for destination marketing.
                These are living documents—observations and definitions that evolve as the technology advances.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <span>By Janette Roush</span>
                <span>•</span>
                <span>Updated regularly</span>
                <span>•</span>
                <a
                  href="/notes/feed.xml"
                  className="text-brand-cyan hover:underline inline-flex items-center gap-1"
                >
                  <span>RSS</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"/>
                    <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Notes List */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-12">
              {fieldNotes.map((note) => (
                <article
                  key={note.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={note.date}>
                        {new Date(note.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 leading-tight">
                    {note.title}
                  </h2>

                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-6 flex-wrap">
                    <Tag className="h-4 w-4 text-gray-400" />
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 bg-brand-accent-cream text-brand-navy rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="prose prose-lg max-w-none">
                    {note.content.split('\n\n').map((paragraph, idx) => {
                      // Convert **bold** to <strong> tags
                      const html = paragraph.replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-brand-navy font-semibold">$1</strong>'
                      )
                      return (
                        <p
                          key={idx}
                          className="text-gray-700 leading-relaxed mb-4"
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      )
                    })}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-brand-blue text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">
                Subscribe to Field Notes
              </h2>
              <p className="text-blue-100 mb-6">
                New research insights published regularly. Subscribe via RSS to stay updated.
              </p>
              <a
                href="/notes/feed.xml"
                className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"/>
                  <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"/>
                </svg>
                Subscribe via RSS
              </a>
            </div>
          </section>
        </div>
      </AccessCheck>
    </>
  )
}
