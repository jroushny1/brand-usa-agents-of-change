import { NextResponse } from 'next/server'

// Field notes data - keep in sync with page.tsx
const fieldNotes = [
  {
    id: 'leapfrog-thesis',
    title: 'The Leapfrog Thesis: Why Some Teams Should Skip Chatbots Entirely',
    date: '2026-03-07',
    tags: ['AI Strategy', 'Agentic AI', 'Digital Leapfrogging', 'DMO Leadership'],
    content: `In the early 2000s, entire regions of sub-Saharan Africa skipped landline telephone infrastructure and went directly to mobile phones. Banking in Kenya skipped branch networks for M-Pesa. Estonia skipped paper government for digital-first citizen services. The pattern is always the same: when a transitional technology arrives alongside a more advanced alternative, the organizations that skip the middle step gain a structural advantage.

We are watching this same pattern emerge in AI adoption for destination marketing. The transitional technology is the chatbot workflow—ChatGPT, Copilot, Gemini—where a human types a prompt, reads the output, copies it somewhere else, and manually verifies the result. The more advanced alternative is supervised agentic AI: tools that operate directly in your systems, complete actual tasks, and submit their work for human review.

Most DMOs are currently stuck in the chatbot phase. Many haven't even arrived there yet. The conventional wisdom says they need to "get comfortable with AI" before advancing. The leapfrog thesis says the opposite: the chatbot phase is optional, and skipping it may actually be the faster path to real value.

Why the Chatbot Phase Stalls: The chatbot adoption playbook looks something like this: buy enterprise licenses, train the team on prompting, designate "AI champions," build a prompt library, create an acceptable use policy, and wait for adoption to spread organically. Here is what actually happens: 20% of the team uses it regularly, 30% tried it and stopped, and 50% never logged in. The AI champions burn out. The prompt library becomes stale. Leadership asks for ROI metrics and gets anecdotes. This isn't a failure of the people. It's a failure of the paradigm. The chatbot workflow requires every individual on the team to develop a new skill—prompt engineering—before any organizational value is created.

The Review-First Model: The alternative is a model where AI does the work and humans review it. In this model, you describe what you need at a high level. The agent reads your codebase, understands the existing patterns, writes the code, runs the tests, and presents you with a complete set of changes to review. Your job is to review and approve, not to operate. Reviewing work is something experienced professionals already know how to do. The barrier to value drops from "everyone learns prompting" to "leadership can review work."

The Trust Architecture: Version control means every change AI makes is tracked, diffable, and reversible. Branch isolation means AI works on a separate branch, never touching production directly. Automated testing catches obvious errors before a human ever sees them. Audit trails log every action the agent took. This is the same infrastructure software teams have used for decades.

What Gets Leapfrogged: The leapfrog applies to operational AI adoption, not all AI use. Brainstorming and exploratory research still benefit from chatbot interaction. What gets leapfrogged is the institutional investment in chatbot-as-workflow: prompt libraries, copy-paste pipelines, and processes where a human mediates every interaction between AI and actual systems.

The leapfrog path: identify one technical workflow that's currently manual. Set up an agentic tool with proper version control and review processes. Train the team lead to review AI-generated work, not to operate AI tools. Measure the output and expand from there. For teams that haven't yet committed to the middle step, the question isn't whether to leapfrog—it's whether you can afford not to.`,
  },
  {
    id: 'ai-agents-taxonomy',
    title: 'AI Agents Taxonomy: Four Types That Matter for Tourism',
    date: '2025-01-15',
    tags: ['AI Agents', 'Framework', 'Tourism Strategy'],
    content: `After analyzing hundreds of AI tools and their applications in destination marketing, a clear taxonomy has emerged. There are four distinct types of AI agents, each serving different operational needs:

Operator Agents automate browser-based tasks—the digital equivalent of "using the mouse for you." For DMOs, this means automated lead generation, competitive web scraping, and data extraction. Tools like Browse.ai and Manus.im fall into this category.

Researcher Agents perform deep analysis and synthesis. Unlike simple search tools, these agents can analyze dozens of competitors simultaneously, synthesize market research, and generate comprehensive reports. This is where strategic intelligence happens.

Builder Agents create digital products from natural language prompts. Lovable.ai generates functional websites; Claude Artifacts builds interactive applications. For tourism marketers, this means rapid prototyping without engineering resources.

Automator Agents orchestrate workflows across multiple platforms. N8N, Agent.ai, and Google Gemini Gems connect disparate systems and automate multi-step processes. This is the infrastructure layer for AI-powered operations.

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

The CRIT Framework (Context, Role, Interview, Task) emerged from observing what separates exceptional AI outputs from generic ones: rich context.

Context: Tourism professionals operate in a specialized domain. AI doesn't inherently understand DMO budget cycles, state tourism office hierarchies, or CVB stakeholder dynamics. Providing this context—often through voice input for natural explanation—transforms output quality.

Role: Assigning AI a specific role ("You are a convention sales director with 15 years of experience") activates relevant training data patterns and adjusts tone appropriately.

Interview: Before jumping to the task, let AI ask clarifying questions. This surfaces assumptions and ensures alignment. The best strategic outputs come after 2-3 rounds of AI-led questioning.

Task: Only after establishing context, role, and conducting an interview should you specify the task. By this point, AI has sufficient context to produce strategic-level work.

This framework was developed specifically for tourism professionals because our industry's context is too nuanced for generic prompting advice. The difference in output quality is not incremental—it's transformational.`,
  },
]

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const baseUrl = 'https://www.janetteroush.com'
  const buildDate = new Date().toUTCString()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Field Notes | Agents of Change</title>
    <link>${baseUrl}/notes</link>
    <description>Research notes, insights, and evolving definitions from the AI Lab for tourism innovation. By Janette Roush, Chief AI Officer.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/notes/feed.xml" rel="self" type="application/rss+xml"/>
    <dc:creator>Janette Roush</dc:creator>
    <dc:rights>Copyright ${new Date().getFullYear()} Janette Roush</dc:rights>
${fieldNotes
  .map(
    (note) => `    <item>
      <title>${escapeXml(note.title)}</title>
      <link>${baseUrl}/notes#${note.id}</link>
      <guid isPermaLink="false">${note.id}</guid>
      <pubDate>${new Date(note.date).toUTCString()}</pubDate>
      <dc:creator>Janette Roush</dc:creator>
      <category>${escapeXml(note.tags.join(', '))}</category>
      <description>${escapeXml(note.content.substring(0, 300) + '...')}</description>
      <content:encoded xmlns:content="http://purl.org/rss/1.0/modules/content/">
        <![CDATA[${note.content}]]>
      </content:encoded>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
