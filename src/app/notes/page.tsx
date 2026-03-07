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
    id: 'leapfrog-thesis',
    title: 'The Leapfrog Thesis: Why Some Teams Should Skip Chatbots Entirely',
    date: '2026-03-07',
    tags: ['AI Strategy', 'Agentic AI', 'Digital Leapfrogging', 'DMO Leadership'],
    content: `In the early 2000s, entire regions of sub-Saharan Africa skipped landline telephone infrastructure and went directly to mobile phones. Banking in Kenya skipped branch networks for M-Pesa. Estonia skipped paper government for digital-first citizen services. The pattern is always the same: when a transitional technology arrives alongside a more advanced alternative, the organizations that skip the middle step gain a structural advantage.

We are watching this same pattern emerge in AI adoption for destination marketing. The transitional technology is the chatbot workflow—ChatGPT, Copilot, Gemini—where a human types a prompt, reads the output, copies it somewhere else, and manually verifies the result. The more advanced alternative is supervised agentic AI: tools that operate directly in your systems, complete actual tasks, and submit their work for human review.

Most DMOs are currently stuck in the chatbot phase. Many haven't even arrived there yet. The conventional wisdom says they need to "get comfortable with AI" before advancing. The leapfrog thesis says the opposite: **the chatbot phase is optional, and skipping it may actually be the faster path to real value.**

**Why the Chatbot Phase Stalls**

The chatbot adoption playbook looks something like this: buy enterprise licenses, train the team on prompting, designate "AI champions," build a prompt library, create an acceptable use policy, and wait for adoption to spread organically.

Here is what actually happens: 20% of the team uses it regularly, 30% tried it and stopped, and 50% never logged in. The AI champions burn out. The prompt library becomes stale. Leadership asks for ROI metrics and gets anecdotes.

This isn't a failure of the people. It's a failure of the paradigm. The chatbot workflow requires **every individual on the team** to develop a new skill—prompt engineering—before any organizational value is created. That's a literacy barrier disguised as a tool deployment. It's like requiring every employee to learn to code before you can modernize your website.

The deeper problem is that the chatbot workflow puts the human in the wrong role. You're operating the AI—typing prompts, evaluating outputs, manually transferring results. You're essentially a translator between the AI and your actual work systems. This is cognitively expensive, interruptive, and the value disappears the moment you close the chat window.

**The Review-First Model**

The alternative is a model where AI does the work and humans review it. This isn't hypothetical—it's how agentic coding tools like Claude Code already operate.

In this model, you describe what you need at a high level: "Update the event listings page to include the new summer concert series." The agent reads your codebase, understands the existing patterns, writes the code, runs the tests, and presents you with a complete set of changes to review. Your job is to review and approve, not to operate.

This is a fundamentally different skill than prompt engineering. **Reviewing work is something experienced professionals already know how to do.** A destination marketing director who has reviewed hundreds of creative briefs, campaign plans, and vendor proposals already has the core competency needed to supervise AI work. They don't need to learn a new skill—they need to apply an existing one in a new context.

The organizational implications are significant. Instead of requiring every team member to develop AI literacy before any value is created, the review-first model requires only that decision-makers can evaluate outputs—a skill they were hired for. The barrier to value drops from "everyone learns prompting" to "leadership can review work," which is already true on day one.

**The Trust Architecture**

The most common objection to leapfrogging is trust: "Our team isn't ready to let AI make changes." This objection conflates autonomy with agency. In a well-designed agentic workflow, AI has agency (it can do work) but not autonomy (it can't ship work without human approval).

The trust architecture that makes this possible has several layers:

- **Version control** means every change AI makes is tracked, diffable, and reversible. If an agent makes a bad change, you revert it—the same way you'd handle a bad commit from a junior developer.
- **Branch isolation** means AI works on a separate branch, never touching production code directly. Changes only merge after human review.
- **Automated testing** means the agent runs your test suite before presenting work, catching obvious errors before a human ever sees them.
- **Audit trails** mean every action the agent took is logged—what files it read, what changes it made, what reasoning it followed.

This isn't theoretical. It's the standard workflow for agentic tools today. The trust infrastructure already exists because it's the same infrastructure software teams have used for decades. Git, CI/CD, code review—these are battle-tested systems for managing contributions from imperfect agents, whether those agents are junior developers, contractors, or AI.

**What Gets Leapfrogged (And What Doesn't)**

To be clear about scope: the leapfrog applies to **operational AI adoption**, not all AI use. Some work genuinely benefits from the chatbot interaction model—brainstorming, exploratory research, conversational strategy sessions. These are valuable, and nobody should skip them.

What gets leapfrogged is the institutional investment in chatbot-as-workflow: the prompt libraries, the copy-paste pipelines, the "AI-assisted content creation" processes where a human mediates every interaction between AI and the actual systems where work lives.

The leapfrog is most compelling for teams with **technical deliverables**: websites, data systems, reporting dashboards, content management workflows, analytics pipelines. These are domains where agentic tools can complete tasks end-to-end, where version control provides a natural safety net, and where the output is objectively verifiable.

It's less applicable for teams whose primary AI use case is pure content generation—writing social posts, drafting press releases, creating marketing copy. For that work, the chatbot may actually be the right tool, not a transitional one. Though even here, the line is blurring as agentic tools learn to operate content management systems directly.

**The Advantage of Starting Late**

There's an underappreciated advantage to being a late adopter in this particular moment. Teams that invested early in chatbot workflows now have institutional habits built around copy-paste, prompt libraries, and "AI-assisted" (read: human-mediated) processes. These habits create organizational inertia. The team that "knows how to use ChatGPT" may actually resist the shift to agentic tools because it invalidates their hard-won expertise.

Teams starting from zero have no habits to unlearn. They can go directly to the more advanced paradigm, the same way a new company today would choose cloud infrastructure over on-premise servers. The absence of legacy investment is itself an advantage.

This doesn't mean the chatbot-experienced teams wasted their time. Their AI literacy—understanding what AI can and can't do, how to evaluate AI outputs, how to identify hallucination—transfers directly to the review-first model. But the specific workflows, prompt libraries, and operational patterns they built? Those are the landline infrastructure that gets leapfrogged.

**What This Means for DMO Leadership**

If your organization hasn't fully committed to the chatbot workflow yet, you have a strategic choice: invest in the transitional technology everyone else adopted, or leapfrog directly to the model that's replacing it.

The leapfrog path looks like this: identify one technical workflow that's currently manual and time-consuming—website updates, data reporting, content publishing. Set up an agentic tool on that specific workflow with proper version control and review processes. Train the relevant team lead to review AI-generated work, not to operate AI tools. Measure the output—tasks completed, time saved, error rates—and expand from there.

This is a narrower, more focused adoption path than "give everyone ChatGPT licenses and see what happens." It requires less organizational change, produces measurable results faster, and builds toward the paradigm that's clearly winning.

The chatbot era gave us an important proof of concept: AI can do useful work. The agentic era delivers on the actual promise: AI can do the work where it lives, under human supervision, with built-in safety rails. For teams that haven't yet committed to the middle step, the question isn't whether to leapfrog—it's whether you can afford not to.`,
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
        "name": "What is digital leapfrogging in AI adoption for destination marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital leapfrogging means skipping the chatbot workflow phase (ChatGPT, Copilot, Gemini copy-paste workflows) and going directly to supervised agentic AI tools like Claude Code that complete tasks end-to-end. The chatbot phase requires every team member to learn prompt engineering before value is created. The agentic model requires only that decision-makers can review AI-generated work—a skill they already have. Teams that haven't invested in chatbot workflows can leapfrog directly to the review-first model, avoiding the institutional habits and sunk costs that slow early adopters."
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
                      // Helper: render **bold** markdown within any text
                      const renderBold = (text: string) => {
                        if (!text.includes('**')) return text
                        const parts = text.split('**')
                        return parts.map((part: string, i: number) =>
                          i % 2 === 1 ? <strong key={i} className="text-brand-navy font-semibold">{part}</strong> : part
                        )
                      }

                      // Handle bullet point lists (lines starting with "- ")
                      const lines = paragraph.split('\n')
                      const bulletLines = lines.filter(l => l.startsWith('- '))
                      if (bulletLines.length > 1) {
                        const intro = lines.filter(l => !l.startsWith('- ')).join(' ').trim()
                        return (
                          <div key={idx} className="mb-4">
                            {intro && <p className="text-gray-700 leading-relaxed mb-2">{renderBold(intro)}</p>}
                            <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700 leading-relaxed">
                              {bulletLines.map((line, li) => (
                                <li key={li}>{renderBold(line.substring(2))}</li>
                              ))}
                            </ul>
                          </div>
                        )
                      }

                      // Regular paragraph with bold support
                      return (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                          {renderBold(paragraph)}
                        </p>
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
