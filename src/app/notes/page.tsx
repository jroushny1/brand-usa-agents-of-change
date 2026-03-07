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
    tags: ['AI Strategy', 'Agentic AI', 'Digital Leapfrogging', 'Personal OS'],
    content: `In the early 2000s, entire regions of sub-Saharan Africa skipped landline telephone infrastructure and went directly to mobile phones. Banking in Kenya skipped branch networks for M-Pesa. Estonia skipped paper government for digital-first citizen services. The pattern is always the same: when a transitional technology arrives alongside a more advanced alternative, the organizations that skip the middle step gain a structural advantage.

I believe we are watching this pattern play out right now in AI adoption. The transitional technology is the chatbot workflow—ChatGPT, Copilot, Gemini—where a human types a prompt, reads the output, copies it somewhere else, and manually verifies the result. The more advanced alternative is what I use every day: a setup where AI operates directly in my files and systems, completes actual tasks, and submits its work for my review.

I am not a developer. I am a Chief AI Officer. And I do all my work inside a code editor—not because I learned to code, but because **that's where the AI lives.**

**What My Actual Workflow Looks Like**

My entire work life runs through a system I call a Personal OS. It's a folder of markdown files on my local machine, organized with a simple numbered structure: 00_Inbox for daily agendas, 10_Projects for active work, 20_Areas for ongoing responsibilities, 30_Resources for reference materials, and 99_System for configuration files that teach Claude how to work with me.

At the root sits a file called CLAUDE.md. Claude reads this automatically every time I start a session. It tells Claude its role ("Chief of Staff for Personal Operating System"), where my files live, and how to behave ("Read local files before asking for context. Concise, actionable responses—no lectures."). Every project folder can have its own CLAUDE.md with project-specific instructions.

Here is what a typical work session looks like: I open VS Code, type /today, and Claude scans all my project folders for tasks with due dates, checks what's overdue, and creates a daily agenda in my Inbox. Then I start working. "Add the new podcast episode to the site." Claude reads my PODCAST_GUIDE.md—a markdown file I wrote that teaches it exactly how to update the three files involved—then makes the changes across the codebase, and presents me with a clean diff to review. I approve. The site deploys automatically.

I didn't write a single line of code. I didn't copy-paste anything. I didn't translate between a chat window and my actual systems. **I described the work, reviewed the output, and approved it.** The same way I'd review work from any team member.

And it's not just website work. When I'm preparing for a keynote, the same system applies. I tell Claude I'm building a 30-minute talk for a specific audience—say, state tourism directors who've never used AI tools. Claude reads my context files, pulls from my field notes on frameworks I've developed, and drafts a narrative arc with section beats. I reshape it, ask for a tighter opening, swap in a better example. Each round, Claude updates the working draft in my project folder. By the time I'm rehearsing, I have a complete outline, speaker notes, and supporting data points—all built iteratively in my files, not copied from a chat window. The process looks exactly like working with a speechwriter, except the speechwriter read my entire body of work before the first draft.

**Why the Chatbot Phase Stalls**

The chatbot adoption playbook looks something like this: buy enterprise licenses, train the team on prompting, designate "AI champions," build a prompt library, create an acceptable use policy, and wait for adoption to spread organically.

Here is what actually happens: 20% of the team uses it regularly, 30% tried it and stopped, and 50% never logged in. The AI champions burn out. The prompt library becomes stale. Leadership asks for ROI metrics and gets anecdotes.

This isn't a failure of the people. It's a failure of the paradigm. The chatbot workflow requires **every individual on the team** to develop a new skill—prompt engineering—before any organizational value is created. That's a literacy barrier disguised as a tool deployment. It's like requiring every employee to learn to code before you can modernize your website.

The deeper problem is that the chatbot workflow puts the human in the wrong role. You're operating the AI—typing prompts, evaluating outputs, manually transferring results into the systems where work actually lives. You're a translator. This is cognitively expensive, interruptive, and the value disappears the moment you close the chat window. Nothing persists. Nothing compounds.

**Why Markdown Files Change Everything**

The Personal OS approach solves the persistence problem completely. Every project has a process_notes.md file that logs what happened in each session—decisions made, context gathered, what's still pending. When I come back tomorrow, Claude reads those notes and picks up exactly where we left off. No re-explaining. No lost context.

But here's the deeper insight: **the markdown files aren't just notes. They're instructions.** My PODCAST_GUIDE.md doesn't just document how to add a podcast—it teaches Claude the exact steps, file locations, and data formats. When I write a guide once, Claude can execute that workflow forever. I'm not prompting anymore. I'm building systems.

This is the difference between a chatbot and an operating system. A chatbot answers questions. An operating system runs your life. Every markdown file I create makes Claude more capable for the next session. The value compounds instead of resetting.

**The Review-First Model**

The key reframe is this: the critical skill for working with AI isn't prompting. It's reviewing.

In my workflow, I describe what I need at a high level. Claude reads the relevant context files, does the work across multiple files and systems, and presents me with changes to approve. My job is to review and accept—the same skill I've used for twenty years reviewing creative briefs, campaign strategies, and vendor proposals.

**Reviewing work is something experienced professionals already know how to do.** A destination marketing director, a convention sales lead, a communications VP—they all have deep expertise in evaluating whether work product meets the standard. That expertise transfers directly to reviewing AI output. No new skill required.

The organizational implications are significant. Instead of requiring every team member to develop AI literacy before any value is created, this model requires only that decision-makers can evaluate outputs—a skill they were hired for. The barrier to value drops from "everyone learns prompting" to "leadership can review work," which is already true on day one.

**Trust Through Transparency**

The most common objection is trust: "We're not ready to let AI make changes." This objection conflates autonomy with agency. In my setup, Claude has agency (it can do work) but not autonomy (nothing ships without my approval).

The trust architecture has several layers:

- **Version control** tracks every change Claude makes. Every edit is diffable and reversible. If something is wrong, I revert it—same as I'd handle any bad edit.
- **Branch isolation** means Claude works on a separate branch. Changes only reach the live site after I review and merge them.
- **Process notes** create a transparent log of what Claude did, why it did it, and what decisions were made. This is the audit trail.
- **CLAUDE.md guardrails** set boundaries upfront: don't touch the archives, don't preload profiles unless asked, always confirm before deleting.

This infrastructure isn't exotic. It's the same system software teams have used for decades. What's new is that a non-developer—a strategist—can use it just as effectively, because Claude handles the technical mechanics while I handle the judgment.

**What Gets Leapfrogged (And What Doesn't)**

To be clear about scope: the leapfrog applies to **operational AI adoption**, not all AI use. Chatbot conversations are still valuable for brainstorming, exploratory research, and strategy sessions. Nobody should skip those.

What gets leapfrogged is the institutional investment in chatbot-as-workflow: the prompt libraries, the copy-paste pipelines, the "AI-assisted content creation" processes where a human mediates every interaction between AI and the systems where work actually happens.

The leapfrog is most compelling for teams with **digital deliverables**: websites, data reporting, content management workflows, analytics dashboards. These are domains where an agentic tool can complete tasks end-to-end, where version control provides a natural safety net, and where the output is objectively verifiable.

**The Advantage of Starting Late**

There's an underappreciated advantage to being a late adopter right now. Teams that invested early in chatbot workflows have institutional habits built around copy-paste, prompt libraries, and human-mediated processes. These habits create organizational inertia. The team that "knows how to use ChatGPT" may actually resist the shift because it invalidates their hard-won expertise.

Teams starting from zero have no habits to unlearn. They can go directly to the more advanced paradigm—the same way a new company today would choose cloud infrastructure over on-premise servers. The absence of legacy investment is itself an advantage.

This doesn't mean chatbot-experienced teams wasted their time. Their AI literacy—understanding what AI can and can't do, how to evaluate outputs, how to spot hallucination—transfers directly to the review-first model. But the specific workflows and prompt libraries they built? Those are the landline infrastructure that gets leapfrogged.

**What This Means for Your Team**

If your organization hasn't fully committed to the chatbot workflow yet, you have a strategic choice: invest in the transitional technology everyone else adopted, or leapfrog directly to the model that's replacing it.

The leapfrog path is concrete. Set up a Personal OS—a folder of markdown files with a CLAUDE.md that gives Claude context about your work. Pick one workflow that's currently manual: website updates, event listings, content publishing. Write a simple guide in markdown that teaches Claude how that workflow works. Then let Claude do the work while you review the output.

This is a narrower, more focused adoption path than "give everyone ChatGPT licenses and see what happens." It requires less organizational change, produces measurable results faster, and builds toward the paradigm that's clearly winning.

The chatbot era gave us an important proof of concept: AI can do useful work. The Personal OS era delivers on the actual promise: **AI can do the work where it lives, under human supervision, with compounding context that gets smarter every session.** For teams that haven't yet committed to the middle step, the question isn't whether to leapfrog—it's whether you can afford not to.`,
  },
  {
    id: 'ai-adoption-tips-linkedin',
    title: 'AI Adoption Tips for DMOs: A 5-Post LinkedIn Series',
    date: '2026-03-07',
    tags: ['LinkedIn', 'AI Strategy', 'DMO Leadership', 'Content Strategy', 'Personal OS'],
    content: `This is a five-part LinkedIn series designed for DMO leaders who want to share what AI adoption actually looks like—not hype, not vendor pitches, but the real operational shift. Each post stands alone but builds a cumulative argument: the teams that skip the chatbot phase and go straight to agentic AI will have a structural advantage.

**Post 1: The Pattern**

In the early 2000s, Kenya skipped landlines and went straight to mobile. Then skipped bank branches for M-Pesa. Estonia skipped paper government for digital-first services. The pattern is always the same: when a transitional technology arrives alongside a more advanced alternative, the teams that skip the middle step win.

This is happening right now in AI adoption. The transitional technology is the chatbot workflow—copy a prompt into ChatGPT, read the output, paste it somewhere else, repeat. The advanced alternative is agentic AI: tools that operate directly in your files and systems, complete real tasks, and submit work for your review.

I'm not a developer. I'm a Chief AI Officer. And I do all my work inside a code editor—not because I learned to code, but because that's where the AI lives. The question for DMO leaders isn't "should we get ChatGPT licenses?" It's "should we skip that step entirely?"

**Post 2: The Review-First Model**

The biggest misconception about AI adoption is that everyone on your team needs to learn prompt engineering. That's like saying everyone needs to learn to code before you can modernize your website.

Here's the reframe: the critical skill isn't prompting. It's reviewing. In my workflow, I describe what I need at a high level. Claude reads my context files, does the work across multiple files and systems, and presents me with changes to approve. My job is to review and accept—the same skill I've used for twenty years reviewing creative briefs, campaign strategies, and vendor proposals.

A destination marketing director, a convention sales lead, a communications VP—they all have deep expertise in evaluating whether work product meets the standard. That expertise transfers directly to reviewing AI output. No new skill required. The barrier to value drops from "everyone learns prompting" to "leadership can review work," which is already true on day one.

**Post 3: The Persistence Problem**

Every DMO leader I talk to has the same complaint about AI: "We tried it, some people loved it, but nothing stuck." Here's why.

Chatbot conversations reset every time. You close the tab, the context is gone. Tomorrow you're re-explaining your brand voice, your audience segments, your campaign calendar. The value never compounds. It's a treadmill.

The fix is embarrassingly simple: markdown files. I keep a folder of plain text files that give AI persistent context about my work. A file called CLAUDE.md tells the AI its role, where my files live, and how to behave. Each project has a process_notes.md that logs decisions, progress, and what's pending. When I start a session tomorrow, the AI reads those files and picks up exactly where we left off.

These aren't just notes. They're instructions. My PODCAST_GUIDE.md doesn't just document how to publish an episode—it teaches the AI the exact steps. I write the guide once, the AI executes that workflow forever. This is the difference between a chatbot and an operating system. One answers questions. The other runs your operations.

**Post 4: The Trust Architecture**

"We're not ready to let AI make changes to our systems." I hear this from every cautious DMO leader. Good instinct, wrong conclusion.

The answer isn't to avoid AI agency. It's to build trust infrastructure. My setup gives AI agency (it can do work) but not autonomy (nothing ships without my approval). The layers are simple:

- Version control tracks every change. Every edit is reversible.
- Branch isolation means AI works on a copy. Changes only go live after I review and merge.
- Process notes create a transparent audit trail of what the AI did and why.
- Guardrail files set boundaries upfront: don't touch the archives, always confirm before deleting.

This isn't exotic technology. It's the same system software teams have used for decades. What's new is that a non-developer—a strategist—can use it because the AI handles the technical mechanics while you handle the judgment.

**Post 5: The Late-Mover Advantage**

Here's the part nobody talks about: if your DMO hasn't fully committed to AI yet, you might actually be in a better position than the early adopters.

Teams that invested early in chatbot workflows now have institutional habits built around copy-paste, prompt libraries, and human-mediated processes. Those habits create inertia. The team that "knows how to use ChatGPT" may resist the shift to agentic AI because it invalidates their hard-won expertise.

Your team has no habits to unlearn. You can go directly to the more advanced paradigm—the same way a startup today would choose cloud infrastructure over on-premise servers.

The starting point is concrete: set up a Personal OS (a folder of markdown files with context about your work). Pick one workflow that's currently manual—website updates, event listings, content publishing. Write a simple guide that teaches AI how that process works. Then let the AI do the work while you review the output.

This is a narrower, more focused path than "give everyone ChatGPT licenses and see what happens." It produces measurable results faster. And it builds toward the paradigm that's clearly winning.

**How to Use This Series**

Post one per week over five weeks. Each post works as a standalone insight but the series builds a complete argument. Encourage comments by ending each post with a direct question to your network. Reshare the series as a PDF or blog post after the five weeks are complete.`,
  },
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
      },
      {
        "@type": "Question",
        "name": "How should DMO leaders talk about AI adoption on LinkedIn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DMO leaders can use a 5-post LinkedIn series covering the core shifts in AI adoption: (1) The Pattern - why teams should leapfrog chatbot workflows for agentic AI, (2) The Review-First Model - the critical skill is reviewing AI output, not prompt engineering, (3) The Persistence Problem - markdown files give AI persistent context so value compounds across sessions, (4) The Trust Architecture - version control, branch isolation, and guardrail files let AI work without unsupervised autonomy, (5) The Late-Mover Advantage - teams without chatbot habits can skip directly to the advanced paradigm. Post one per week for five weeks."
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
