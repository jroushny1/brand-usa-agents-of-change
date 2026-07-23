import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build Your Personal OS in Claude Code (VS Code) | Agents of Change',
  description: 'The advanced track. The full Claude Code engine: filesystem skills as real slash commands, auto memory that persists across sessions, and MCP servers. For people who have outgrown the Cowork setup.',
}

const personalOs3Schema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Build Your Personal OS in Claude Code (VS Code)',
  url: 'https://janetteroush.com/personal-os-3',
  description:
    'The advanced track. The full Claude Code engine: filesystem skills as real slash commands, auto memory that persists across sessions, and MCP servers. For people who have outgrown the Cowork setup.',
  author: {
    '@type': 'Person',
    name: 'Janette Roush',
    jobTitle: 'SVP, Innovation and Chief AI Officer',
    affiliation: { '@type': 'Organization', name: 'Brand USA' },
  },
  publisher: { '@type': 'Organization', name: 'Agents of Change', url: 'https://janetteroush.com' },
  isPartOf: { '@type': 'WebSite', name: 'Agents of Change', url: 'https://janetteroush.com' },
}

export default function PersonalOS3GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personalOs3Schema) }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
.pos3-page {
            --brand-navy: #1a2744;
            --brand-cyan: #00d4ff;
            --brand-sky: #7dd3fc;
            --brand-blue: #3b82f6;
            --brand-purple: #8b5cf6;
            --brand-red: #ef4444;
            --brand-green: #22c55e;
            --brand-amber: #f59e0b;
            --text-gray: #4b5563;
            --text-light: #6b7280;
            --bg-light: #f8fafc;
            --white: #ffffff;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            color: var(--text-gray);
            line-height: 1.7;
            background: var(--white);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--brand-navy) 0%, #2d3a52 60%, #1a3a5c 100%);
            color: var(--white);
            padding: 80px 20px;
            text-align: center;
        }

        .hero-badge {
            display: inline-block;
            background: var(--brand-cyan);
            color: var(--brand-navy);
            padding: 8px 20px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 24px;
        }

        .hero h1 {
            font-family: 'Oswald', sans-serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.1;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }

        .hero-cta {
            display: inline-block;
            background: var(--brand-cyan);
            color: var(--brand-navy);
            padding: 14px 28px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .hero-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
        }

        /* Main Content */
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        h2 {
            font-family: 'Oswald', sans-serif;
            font-size: 2rem;
            color: var(--brand-navy);
            margin-bottom: 20px;
            margin-top: 60px;
        }

        h2:first-of-type {
            margin-top: 0;
        }

        h3 {
            font-family: 'Oswald', sans-serif;
            font-size: 1.4rem;
            color: var(--brand-navy);
            margin-bottom: 15px;
            margin-top: 35px;
        }

        p {
            margin-bottom: 16px;
        }

        .intro-box {
            background: linear-gradient(135deg, var(--brand-navy) 0%, #2d3a52 100%);
            color: var(--white);
            padding: 30px;
            border-radius: 16px;
            margin-bottom: 40px;
        }

        .intro-box h3 {
            color: var(--brand-cyan);
            margin-top: 0;
        }

        .intro-box a {
            color: var(--brand-cyan);
            text-decoration: none;
            font-weight: 600;
        }

        /* Table of Contents */
        .toc {
            background: var(--bg-light);
            border-radius: 12px;
            padding: 24px 30px;
            margin-bottom: 40px;
        }

        .toc h3 {
            margin-top: 0;
            margin-bottom: 16px;
        }

        .toc ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .toc li {
            margin-bottom: 8px;
        }

        .toc a {
            color: var(--brand-blue);
            text-decoration: none;
            font-weight: 500;
        }

        .toc a:hover {
            text-decoration: underline;
        }

        /* Why Grid */
        .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            margin: 30px 0;
        }

        .why-card {
            background: var(--bg-light);
            padding: 24px;
            border-radius: 12px;
            border-left: 4px solid var(--brand-cyan);
        }

        .why-card h4 {
            font-family: 'Oswald', sans-serif;
            font-size: 1.1rem;
            color: var(--brand-navy);
            margin-bottom: 10px;
        }

        .why-card p {
            font-size: 0.95rem;
            margin-bottom: 0;
        }

        /* Requirements */
        .requirements-box {
            background: var(--bg-light);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 40px;
        }

        .requirements-box h3 {
            margin-top: 0;
            margin-bottom: 20px;
        }

        .requirements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
        }

        .requirement-item {
            background: var(--white);
            padding: 16px 20px;
            border-radius: 8px;
            border-left: 4px solid var(--brand-cyan);
        }

        .requirement-item h4 {
            font-family: 'Oswald', sans-serif;
            font-size: 1rem;
            color: var(--brand-navy);
            margin-bottom: 6px;
        }

        .requirement-item p {
            font-size: 0.9rem;
            margin-bottom: 0;
            color: var(--text-light);
        }

        .requirement-item a {
            color: var(--brand-blue);
            text-decoration: none;
        }

        /* Folder Structure */
        .folder-structure {
            background: var(--brand-navy);
            padding: 30px;
            border-radius: 12px;
            overflow-x: auto;
            margin: 20px 0;
        }

        .folder-structure pre {
            font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.6;
            margin: 0;
            color: var(--brand-cyan);
            white-space: pre;
        }

        .folder-structure .folder {
            color: var(--brand-sky);
            font-weight: 600;
        }

        .folder-structure .file {
            color: #94a3b8;
        }

        .folder-structure .comment {
            color: #64748b;
            font-style: italic;
        }

        .folder-structure .new {
            color: var(--brand-green);
            font-weight: 600;
        }

        /* Code Blocks */
        .code-block {
            background: #1e293b;
            padding: 24px;
            border-radius: 12px;
            overflow-x: auto;
            margin: 20px 0;
        }

        .code-block pre {
            font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
            font-size: 0.85rem;
            line-height: 1.7;
            margin: 0;
            color: #e2e8f0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .code-block .header {
            color: var(--brand-cyan);
            font-weight: 600;
        }

        .code-block .keyword {
            color: var(--brand-purple);
            font-weight: 600;
        }

        .code-block .string {
            color: #86efac;
        }

        .code-block .comment {
            color: #64748b;
        }

        .code-block .bullet {
            color: var(--brand-cyan);
        }

        .code-block .label {
            display: inline-block;
            background: var(--brand-cyan);
            color: var(--brand-navy);
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 700;
            margin-bottom: 12px;
        }

        /* Prompt Box */
        .prompt-box {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            border: 2px solid #86efac;
            border-radius: 12px;
            padding: 24px;
            margin: 20px 0;
        }

        .prompt-box h4 {
            font-family: 'Oswald', sans-serif;
            color: #166534;
            margin-bottom: 12px;
            font-size: 1.1rem;
        }

        .prompt-box p {
            color: #166534;
            font-size: 0.95rem;
            margin-bottom: 12px;
        }

        .prompt-box pre {
            background: var(--white);
            border: 1px solid #86efac;
            border-radius: 8px;
            padding: 16px;
            font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
            font-size: 0.85rem;
            line-height: 1.6;
            white-space: pre-wrap;
            word-wrap: break-word;
            color: var(--text-gray);
        }

        /* Explanation Box */
        .explanation {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border-left: 4px solid var(--brand-blue);
            padding: 20px 24px;
            border-radius: 0 12px 12px 0;
            margin: 20px 0;
        }

        .explanation strong {
            color: var(--brand-navy);
        }

        /* Tool Box */
        .tool-box {
            background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
            border-left: 4px solid var(--brand-purple);
            padding: 20px 24px;
            border-radius: 0 12px 12px 0;
            margin: 20px 0;
        }

        .tool-box strong {
            color: var(--brand-navy);
        }

        .tool-box h4 {
            font-family: 'Oswald', sans-serif;
            color: var(--brand-navy);
            margin-bottom: 12px;
            font-size: 1.1rem;
        }

        /* Warning Box */
        .warning-box {
            background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
            border-left: 4px solid var(--brand-red);
            padding: 20px 24px;
            border-radius: 0 12px 12px 0;
            margin: 20px 0;
        }

        .warning-box h4 {
            font-family: 'Oswald', sans-serif;
            color: #991b1b;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        .warning-box p {
            color: #7f1d1d;
            margin-bottom: 8px;
        }

        .warning-box p:last-child {
            margin-bottom: 0;
        }

        /* Success Box */
        .success-box {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            border-left: 4px solid var(--brand-green);
            padding: 20px 24px;
            border-radius: 0 12px 12px 0;
            margin: 20px 0;
        }

        .success-box h4 {
            font-family: 'Oswald', sans-serif;
            color: #166534;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        .success-box p {
            color: #14532d;
            margin-bottom: 0;
        }

        /* Amber/tip box */
        .tip-box {
            background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
            border-left: 4px solid var(--brand-amber);
            padding: 20px 24px;
            border-radius: 0 12px 12px 0;
            margin: 20px 0;
        }

        .tip-box h4 {
            font-family: 'Oswald', sans-serif;
            color: #92400e;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        .tip-box p {
            color: #78350f;
            margin-bottom: 8px;
        }

        .tip-box p:last-child {
            margin-bottom: 0;
        }

        /* Skill Cards */
        .skill-card {
            background: var(--white);
            border: 2px solid var(--brand-cyan);
            border-radius: 12px;
            padding: 24px;
            margin: 20px 0;
        }

        .skill-card h4 {
            font-family: 'Oswald', sans-serif;
            color: var(--brand-navy);
            font-size: 1.3rem;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .skill-card h4 code {
            background: var(--brand-cyan);
            color: var(--brand-navy);
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 1rem;
        }

        /* Workflow Box */
        .workflow-box {
            background: var(--white);
            border: 2px solid var(--brand-purple);
            border-radius: 12px;
            padding: 24px;
            margin: 20px 0;
        }

        .workflow-box h4 {
            font-family: 'Oswald', sans-serif;
            color: var(--brand-navy);
            margin-bottom: 16px;
            font-size: 1.2rem;
        }

        .workflow-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 16px;
        }

        .workflow-item:last-child {
            margin-bottom: 0;
        }

        .workflow-icon {
            background: var(--brand-purple);
            color: var(--white);
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.9rem;
            flex-shrink: 0;
        }

        .workflow-content h5 {
            font-family: 'Oswald', sans-serif;
            color: var(--brand-navy);
            font-size: 1rem;
            margin-bottom: 4px;
        }

        .workflow-content p {
            font-size: 0.9rem;
            margin-bottom: 0;
            color: var(--text-light);
        }

        /* Inline Code */
        code {
            background: #f1f5f9;
            color: var(--brand-navy);
            padding: 2px 8px;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
            font-size: 0.9em;
        }

        /* Lists */
        ul, ol {
            margin: 16px 0 16px 24px;
        }

        li {
            margin-bottom: 10px;
        }

        /* Step Cards */
        .step {
            background: var(--white);
            border: 2px solid #e2e8f0;
            border-radius: 16px;
            padding: 30px;
            margin: 30px 0;
            position: relative;
        }

        .step-number {
            position: absolute;
            top: -15px;
            left: 30px;
            background: var(--brand-cyan);
            color: var(--brand-navy);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Oswald', sans-serif;
            font-weight: 700;
            font-size: 1.2rem;
        }

        .step h3 {
            margin-top: 10px;
        }

        .step h4 {
            font-family: 'Oswald', sans-serif;
            font-size: 1.1rem;
            color: var(--brand-navy);
            margin: 25px 0 12px 0;
        }

        .step h4:first-of-type {
            margin-top: 20px;
        }

        /* Substeps */
        .substep {
            background: var(--bg-light);
            border-radius: 8px;
            padding: 16px 20px;
            margin: 12px 0;
        }

        .substep p {
            margin-bottom: 8px;
            font-size: 0.95rem;
        }

        .substep p:last-child {
            margin-bottom: 0;
        }

        /* Comparison Table */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border-radius: 12px;
            overflow: hidden;
        }

        .comparison-table th {
            background: var(--brand-navy);
            color: var(--white);
            font-family: 'Oswald', sans-serif;
            padding: 14px 20px;
            text-align: left;
            font-size: 1rem;
        }

        .comparison-table td {
            padding: 12px 20px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 0.95rem;
        }

        .comparison-table tr:nth-child(even) td {
            background: var(--bg-light);
        }

        .comparison-table code {
            font-size: 0.85em;
        }

        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, var(--brand-navy) 0%, #2d3a52 100%);
            color: var(--white);
            padding: 50px 30px;
            border-radius: 16px;
            text-align: center;
            margin-top: 60px;
        }

        .cta-section h2 {
            color: var(--white);
            margin-top: 0;
        }

        .cta-section p {
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto 30px;
        }

        .cta-button {
            display: inline-block;
            background: var(--brand-cyan);
            color: var(--brand-navy);
            padding: 14px 32px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .footer a {
            color: var(--brand-blue);
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero {
                padding: 60px 20px;
            }

            .container {
                padding: 40px 20px;
            }

            .step {
                padding: 25px 20px;
            }

            .folder-structure pre,
            .code-block pre {
                font-size: 0.8rem;
            }

            .why-grid {
                grid-template-columns: 1fr;
            }

            .requirements-grid {
                grid-template-columns: 1fr;
            }
        }
      ` }} />
      <div className="pos3-page" dangerouslySetInnerHTML={{ __html: `
<section class="hero">
    <span class="hero-badge">Advanced &middot; Claude Code in VS Code</span>
    <h1>Build Your Personal OS<br>in Claude Code</h1>
    <p>The full engine. Filesystem skills that run as real slash commands, auto memory that persists across sessions, and MCP servers wired into your day. This is the technical track.</p>
    <a href="#setup" class="hero-cta">Jump to Setup</a>
</section>

<main class="container">

    <div class="intro-box">
        <h3>Who This Guide Is For</h3>
        <p>The first two guides set up your Personal OS in <strong>Claude Cowork</strong> &mdash; the friendly desktop path where you point Claude at a folder and ask it to work. That is the right place to start, and for most people it is enough.</p>
        <p>This guide is for when you outgrow it. Claude Code, running inside VS Code, gives you three things Cowork does not: skills that live on your own machine and fire as <code>/slash</code> commands, an auto-memory layer that writes itself across every session, and MCP servers configured to your exact workflow. It is more technical. The payoff is a system that does more with less prompting.</p>
        <p style="margin-bottom: 0;">New here? Start with <a href="/personal-os">Guide 1 (Cowork foundation)</a> and <a href="/personal-os-2">Guide 2 (Cowork, going deeper)</a>, then come back when you want the full build.</p>
    </div>

    <nav class="toc">
        <h3>What's in This Guide</h3>
        <ul>
            <li><a href="#cowork-vs-code">Cowork vs. Claude Code: What Actually Changes</a></li>
            <li><a href="#setup">Day-1 Setup in VS Code</a></li>
            <li><a href="#memory">Auto Memory (How It Really Works)</a></li>
            <li><a href="#skills">The Skills Ecosystem</a></li>
            <li><a href="#mcp">MCP Servers: What's Actually Worth Connecting</a></li>
            <li><a href="#carry-over">What Carries Over From Guides 1 &amp; 2</a></li>
        </ul>
    </nav>

    <h2 id="cowork-vs-code">Cowork vs. Claude Code: What Actually Changes</h2>
    <p>The folder, the CLAUDE.md, and the PARA structure are identical across both. What changes is the engine underneath.</p>

    <table class="comparison-table">
        <tr>
            <th></th>
            <th>Claude Cowork (Guides 1 &amp; 2)</th>
            <th>Claude Code (this guide)</th>
        </tr>
        <tr>
            <td><strong>Where it runs</strong></td>
            <td>Claude desktop app</td>
            <td>VS Code, on your local filesystem</td>
        </tr>
        <tr>
            <td><strong>Skills</strong></td>
            <td>Added one at a time through Settings; you often just ask Claude directly</td>
            <td>Live in <code>~/.claude/skills/</code>, fire as <code>/slash</code> commands, auto-trigger from their descriptions</td>
        </tr>
        <tr>
            <td><strong>Memory</strong></td>
            <td>CLAUDE.md plus a learnings file you ask Claude to keep</td>
            <td>Auto memory: Claude writes its own durable notes to <code>~/.claude</code> across every session</td>
        </tr>
        <tr>
            <td><strong>Outside tools</strong></td>
            <td>Connectors toggled in Settings</td>
            <td>MCP servers configured per project and per environment</td>
        </tr>
        <tr>
            <td><strong>Best for</strong></td>
            <td>Getting started, conversational use, less setup</td>
            <td>Heavy daily use, batch automation, a wide skill library</td>
        </tr>
    </table>

    <div class="explanation">
        <strong>You don't have to choose forever.</strong> Your folder and CLAUDE.md work in both. Many people keep Cowork open for quick conversational work and use Claude Code in VS Code for the heavy filing, automation, and skill-driven routines. A skill you build here is one ZIP export away from also working in Cowork.
    </div>

    <h2 id="setup">Day-1 Setup in VS Code</h2>
    <p>Claude does most of the work. You install two tools, create one empty folder, and let Claude interview you to build the rest.</p>

    <div class="step">
        <span class="step-number">1</span>
        <h3>Install VS Code</h3>
        <p>Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a> and run the installer. Default settings are fine.</p>
    </div>

    <div class="step">
        <span class="step-number">2</span>
        <h3>Install Claude Code</h3>
        <div class="substep">
            <p>Open VS Code. Click the Extensions icon in the left sidebar, or press <code>Cmd+Shift+X</code> (Mac) / <code>Ctrl+Shift+X</code> (Windows).</p>
        </div>
        <div class="substep">
            <p>Search for "Claude" and install the official extension by Anthropic. Sign in with your Claude account when prompted. You need a Claude Pro or Max subscription.</p>
        </div>
    </div>

    <div class="step">
        <span class="step-number">3</span>
        <h3>Create Your Personal_OS Folder</h3>
        <p>One empty folder. This is the only thing you create by hand.</p>
        <div class="substep">
            <p><strong>Mac:</strong> Finder &rarr; Documents &rarr; Right-click &rarr; New Folder &rarr; name it <code>Personal_OS</code></p>
        </div>
        <div class="substep">
            <p><strong>Windows:</strong> File Explorer &rarr; Documents &rarr; Right-click &rarr; New &rarr; Folder &rarr; name it <code>Personal_OS</code></p>
        </div>
    </div>

    <div class="step">
        <span class="step-number">4</span>
        <h3>Open the Folder in VS Code</h3>
        <div class="substep">
            <p>VS Code: File &rarr; Open Folder &rarr; select your <code>Personal_OS</code> folder &rarr; Open. If VS Code asks "Do you trust the authors?", click "Yes."</p>
        </div>
        <div class="substep">
            <p>Open the Claude Code panel and set the model to <strong>Opus 4.8</strong> before you start the conversation. You can't switch models mid-chat.</p>
        </div>
    </div>

    <div class="step">
        <span class="step-number">5</span>
        <h3>Have Claude Interview You and Build the Structure</h3>
        <p>Paste this prompt. Claude interviews you first, then writes everything from your answers &mdash; so the CLAUDE.md reflects how you actually work instead of a generic guess.</p>

        <div class="prompt-box">
            <h4>Copy and paste into Claude Code:</h4>
            <pre>Please set up a Personal OS for me, and interview me to get it right.

First, interview me ONE question at a time, waiting for each answer
before asking the next. Do not dump all the questions at once. Cover:
  - My name, title, and organization
  - What I do day to day and who I work with most
  - How I want you to behave: concise or more explanatory, tone
  - The 2-3 projects or responsibilities that matter most right now
Tell me I can answer by voice if that's faster.

Once I've answered, create:

1. These folders:
   00_Inbox, 10_Projects, 20_Areas, 20_Areas/Calls,
   20_Areas/People, 20_Areas/Companies, 30_Resources,
   40_Archives, 50_Personal,
   99_System/Context_Library/project_specs, 99_System/Scripts, Apps

2. A CLAUDE.md at the root, built from my interview answers, with:
   - Role: you are my Chief of Staff for this vault
   - Who I Am: my name, title, organization, and context
   - Core Behavior: edit files directly, keep changes minimal,
     read local files before asking, confirm before deleting,
     concise responses, AND: whenever you set something new up,
     interview me one question at a time rather than guessing
   - Architecture: the folders above
   - Task Schema: YAML with type, status, created, due_date,
     priority, tags

3. A Someday_Maybe.md in 20_Areas/ with Ideas, Long-Term Projects,
   Things to Explore, Wishlist.

Create everything once I've answered.</pre>
        </div>

        <p>Claude creates all the folders and files. You'll see them appear in VS Code's file explorer on the left.</p>

        <div class="tip-box">
            <h4>The interview is the point</h4>
            <p>The single biggest reason a fresh Personal OS feels generic is a CLAUDE.md filled in from a blank template. The interview mandate &mdash; one question at a time, baked into Core Behavior &mdash; forces the system to learn you. It also means every future "set this up for me" gets the same treatment instead of guessing.</p>
        </div>
    </div>

    <div class="step">
        <span class="step-number">6</span>
        <h3>Install Your First Two Skills</h3>
        <p>Skills are folders inside <code>~/.claude/skills/</code> with a <code>SKILL.md</code> file describing what they do. Claude reads the descriptions and triggers them when relevant. The <code>/</code> prefix forces a specific skill to run. Paste this:</p>

        <div class="prompt-box">
            <h4>Copy and paste into Claude Code:</h4>
            <pre>Please create two skills for me.

1. ~/.claude/skills/today/SKILL.md with this content:

---
name: today
description: Scans the vault for tasks due today and creates a daily agenda.
allowed-tools: Bash(*), Read(*), Write(*)
---

# /today

Build today's agenda by scanning all .md files in 10_Projects/ and
00_Inbox/ for YAML frontmatter with a due_date field.

## What to do

1. Group tasks: Overdue, Due Today, Due This Week, Due Next Week
2. Create a new file in 00_Inbox/ named YYYY-MM-DD_Agenda.md
3. Format with sections for each group, plus Daily Focus and Quick Notes
4. Tell me: "Your agenda is ready: [filename]"


2. ~/.claude/skills/shutdown/SKILL.md with this content:

---
name: shutdown
description: End-of-day ritual. Captures what moved, what didn't, and what's queued for tomorrow.
allowed-tools: Bash(*), Read(*), Write(*), Edit(*)
---

# /shutdown

End-of-day capture.

## What to do

1. Review today's agenda in 00_Inbox/
2. For each task: mark done, carry over, or mark as waiting
3. Append a brief end-of-day summary to today's agenda file:
   - What moved (3-5 lines max)
   - What stalled and why
   - Tomorrow's top 3 candidates
4. Tell me: "Shutdown complete. Tomorrow's queue: [top 3]"

Create both skills now.</pre>
        </div>
    </div>

    <div class="step">
        <span class="step-number">7</span>
        <h3>Test It</h3>
        <p>Type <code>/today</code> in the Claude Code panel. Claude creates your first daily agenda file in <code>00_Inbox/</code>. Open it in VS Code and hit <code>Cmd+Shift+V</code> (Mac) / <code>Ctrl+Shift+V</code> (Windows) to preview it formatted, with headings and lists. This is how you read your agenda each morning without a separate notes app.</p>
    </div>

    <h2 id="memory">Auto Memory (How It Really Works)</h2>

    <p>This is the part Cowork doesn't have. Claude Code carries knowledge across sessions two ways: <strong>CLAUDE.md</strong> (instructions you write) and <strong>auto memory</strong> (notes Claude writes itself). The first is covered above. This section is the second &mdash; the layer that turns Claude into a coworker who learns from how you actually work.</p>

    <h3>CLAUDE.md vs. Auto Memory</h3>

    <table class="comparison-table">
        <tr>
            <th></th>
            <th>CLAUDE.md</th>
            <th>Auto Memory</th>
        </tr>
        <tr>
            <td><strong>Who writes it</strong></td>
            <td>You</td>
            <td>Claude</td>
        </tr>
        <tr>
            <td><strong>Contains</strong></td>
            <td>Instructions and rules</td>
            <td>Learnings and patterns</td>
        </tr>
        <tr>
            <td><strong>Best for</strong></td>
            <td>Architecture, conventions, "always do X" rules</td>
            <td>Corrections, preferences Claude discovers, durable facts</td>
        </tr>
        <tr>
            <td><strong>Loaded into context</strong></td>
            <td>Every session, in full</td>
            <td>Every session (first 200 lines or 25KB of the index)</td>
        </tr>
    </table>

    <p>Use CLAUDE.md when you want to instruct. Auto memory lets Claude take notes for itself based on your corrections, without you writing anything.</p>

    <div class="tip-box">
        <h4>Requires Claude Code v2.1.59 or later</h4>
        <p>Auto memory is on by default in current versions. Check yours with <code>claude --version</code>. To toggle it, run <code>/memory</code> in a session.</p>
    </div>

    <h3>Where Auto Memory Lives</h3>
    <p>Each project gets its own auto memory directory:</p>
    <div class="code-block">
        <pre>~/.claude/projects/&lt;project&gt;/memory/</pre>
    </div>

    <p>The <code>&lt;project&gt;</code> path is derived from the git repository, so all worktrees and subdirectories within the same repo share one auto memory directory. Outside a git repo, the project root is used instead.</p>

    <p>Inside that folder, two things matter:</p>
    <ul>
        <li><strong>MEMORY.md</strong> &mdash; an index file. The first 200 lines or 25KB (whichever comes first) load into Claude's context at the start of every session.</li>
        <li><strong>Topic files</strong> &mdash; additional markdown files Claude creates as memories accumulate. These are <em>lazy-loaded</em>: Claude reads them on demand when something in the current conversation makes them relevant.</li>
    </ul>

    <div class="explanation">
        <strong>Why this design works:</strong> The index is small enough that loading it every session is cheap. Topic files can be detailed without bloating Claude's context window. You get instant awareness of every rule and reference Claude has ever saved, plus deep detail on the ones that come up in the current conversation. Claude keeps <code>MEMORY.md</code> concise by moving longer notes into topic files.
    </div>

    <h3>The <code>/memory</code> Command</h3>
    <p>Run <code>/memory</code> in any Claude Code session to:</p>
    <ul>
        <li>See which CLAUDE.md and rules files are loaded in your current session</li>
        <li>Toggle auto memory on or off</li>
        <li>Open the auto memory folder in your editor to browse, edit, or delete files</li>
    </ul>

    <p>Auto memory is plain markdown. You can read and edit any file by hand &mdash; Claude treats your edits as the source of truth.</p>

    <h3>How Auto Memory Gets Written</h3>
    <p>Claude decides what's worth remembering based on whether the information would help in a future conversation. The common triggers:</p>
    <ul>
        <li><strong>You correct Claude.</strong> "Don't do that again" tends to become a durable note.</li>
        <li><strong>You confirm a non-obvious choice was right.</strong> Worth saving so Claude doesn't second-guess the same call next month.</li>
        <li><strong>You teach Claude a durable fact.</strong> Vendor relationships, process details, who handles what.</li>
        <li><strong>You say "remember this."</strong> Direct trigger.</li>
    </ul>

    <p>When you see "Writing memory" or "Recalled memory" in the Claude Code interface, Claude is actively updating or reading from your auto memory folder.</p>

    <h3>What a Real Auto Memory File Looks Like</h3>
    <p>This is one of my feedback memories:</p>

    <div class="code-block">
        <pre><span class="label">REAL AUTO MEMORY EXAMPLE</span>

---
<span class="keyword">name:</span> <span class="string">feedback-no-stopping-suggestions</span>
<span class="keyword">description:</span> <span class="string">Never suggest stopping, pausing, or saving work for later.
  She decides when to stop.</span>
<span class="keyword">type:</span> <span class="string">feedback</span>
---

Never suggest stopping, pausing, deferring, or "saving for later" &mdash;
including soft framings like "clean stopping point," "pause here,"
"call it for tonight," or "fresh eyes tomorrow."

<span class="header">**Why:**</span> I flagged this directly after Claude repeatedly offered
exit ramps during a productive Saturday session. The pattern was
Claude pattern-matching on session length as a signal I should stop.
That signal is wrong. Time of day and accumulated progress carry
zero information about my capacity to continue.

<span class="header">**How to apply:**</span>
<span class="bullet">-</span> Continue executing. When one piece finishes, offer the next concrete
  option.
<span class="bullet">-</span> If multiple options exist, present them as choices to make.
<span class="bullet">-</span> If I want a break, I'll say so directly.</pre>
    </div>

    <div class="tip-box">
        <h4>The "Why" line is load-bearing</h4>
        <p>A rule without a reason is brittle. The next time Claude faces an edge case, the reason is what tells it whether the rule applies. The headline ("never suggest stopping") is enough 95% of the time. The reason is what lets Claude judge the 5% intelligently.</p>
    </div>

    <h2 id="skills">The Skills Ecosystem</h2>

    <p>The Cowork guides used a handful of skills. A mature Claude Code Personal OS has 30+. Each one is a folder inside <code>~/.claude/skills/</code> with a <code>SKILL.md</code> file describing what it does and when to use it. Claude reads the descriptions and triggers automatically when a request matches. The <code>/</code> prefix is shorthand to force a specific skill to run.</p>

    <h3>What I Actually Run</h3>
    <p>Here's how mine cluster, by job:</p>

    <table class="comparison-table">
        <tr>
            <th>Category</th>
            <th>Skills</th>
        </tr>
        <tr>
            <td><strong>Daily rhythm</strong></td>
            <td><code>/today</code> &middot; <code>/weekstart</code> &middot; <code>/shutdown</code> &middot; <code>/weekend</code> &middot; <code>/remember</code></td>
        </tr>
        <tr>
            <td><strong>Meeting capture</strong></td>
            <td><code>/call</code> &middot; <code>/granola</code> &middot; <code>/brief</code> &middot; <code>/conference</code> &middot; <code>/conference-prep</code> &middot; <code>/attendee-brief</code> &middot; <code>/keynote</code></td>
        </tr>
        <tr>
            <td><strong>Content production</strong></td>
            <td><code>/linkedin-carousel</code> &middot; <code>/build-pptx</code> &middot; <code>/keynote-writer</code> &middot; <code>/text-to-html</code> &middot; <code>/janette-voice</code> &middot; <code>/editorial-style</code></td>
        </tr>
        <tr>
            <td><strong>Review &amp; research</strong></td>
            <td><code>/brand-review</code> &middot; <code>/advisory</code> &middot; <code>/file-research</code> &middot; <code>/deep-research</code> &middot; <code>/review</code></td>
        </tr>
        <tr>
            <td><strong>Shipping</strong></td>
            <td><code>/deploy</code> &middot; <code>/single-use-site</code> &middot; <code>/add-webinar</code> &middot; <code>/site-audit</code></td>
        </tr>
        <tr>
            <td><strong>Ops &amp; automation</strong></td>
            <td><code>/tent-cards</code> &middot; <code>/social-boosting</code> &middot; <code>/ingest</code></td>
        </tr>
    </table>

    <div class="explanation">
        <strong>The pattern that emerged:</strong> Each skill replaces a 15-30 minute task that I used to do manually. Built up slowly &mdash; one or two a month &mdash; whenever I noticed myself repeating a workflow. The library is wide because the workflows are real, not because I went on a skill-building spree.
    </div>

    <h3>How a Skill Is Structured</h3>
    <p>A SKILL.md file looks like this:</p>

    <div class="code-block">
        <pre>---
<span class="keyword">name:</span> <span class="string">call</span>
<span class="keyword">description:</span> <span class="string">Create or update a call note in 20_Areas/Calls/.
  Auto-populates People and Companies directories.</span>
<span class="keyword">allowed-tools:</span> <span class="string">Glob(*), Read(*), Write(*), Edit(*)</span>
---

<span class="header"># /call</span>

Create a structured call note.

<span class="header">## What to do</span>

1. Ask for contact name and date (default today).
2. Check if the person exists in 20_Areas/People/. If yes, read their
   profile for context. If no, create from the template.
3. Check the contact's company in 20_Areas/Companies/. If exists,
   update Engagement Timeline; if not, create from template.
4. Create the call note in 20_Areas/Calls/YYYY-MM-DD_Contact-Name.md
   using the call schema in CLAUDE.md.
5. When the source is a Granola meeting, always read the full transcript
   via get_meeting_transcript. Never rely on the AI-generated summary.
6. Surface any prior notes with this contact from past calls.</pre>
    </div>

    <div class="tip-box">
        <h4>Build skills out of friction</h4>
        <p>The skills I use most weren't planned. They came from noticing the third or fourth time I was repeating the same multi-step prompt. When that happens, ask Claude: "Turn this into a skill." Claude writes the SKILL.md, drops it in the right place, and the next time you need that workflow it's one trigger away.</p>
    </div>

    <h3>Install the Core Five</h3>
    <p>Past <code>/today</code> and <code>/shutdown</code>, these five do the most work in a typical week: meeting capture, pre-meeting prep, auto memory hygiene, Monday kickoff, and Friday wrap-up. Paste this into Claude Code to install all five at once.</p>

    <div class="prompt-box">
        <h4>Copy and paste into Claude Code:</h4>
        <pre>Please install five skills for me. Each lives at ~/.claude/skills/&lt;name&gt;/SKILL.md.

1. ~/.claude/skills/call/SKILL.md

---
name: call
description: Create or update a structured call note in 20_Areas/Calls/. Auto-populates People and Companies entries.
allowed-tools: Glob(*), Read(*), Write(*), Edit(*)
---

# /call

Create a structured call note.

## What to do

1. Ask for the contact name and date (default today).
2. Check 20_Areas/People/ for the contact. If found, read their profile for context. If not, create one from the template.
3. Check 20_Areas/Companies/ for their company. If exists, update Engagement Timeline. If not, create from template.
4. Create the call note at 20_Areas/Calls/YYYY-MM-DD_Contact-Name.md.
5. When the source is a Granola meeting, ALWAYS read the full transcript via get_meeting_transcript. Never work from the AI-generated summary; summaries drop and distort decisions.
6. Surface any prior notes with this contact.
7. Append a Relationship History line to the person's profile.


2. ~/.claude/skills/brief/SKILL.md

---
name: brief
description: Generate a one-page pre-meeting brief for a person, company, or topic. Pulls vault context for a structured briefing.
allowed-tools: Glob(*), Read(*), Write(*)
---

# /brief

Generate a one-page brief.

## What to do

1. Ask what or who the brief is about.
2. Search 20_Areas/People/, 20_Areas/Companies/, and 20_Areas/Calls/ for relevant context.
3. Synthesize into a brief with: who/what, relationship history, open items, recommended angles for the meeting.
4. Save to 00_Inbox/YYYY-MM-DD_Brief_Topic.md and tell me where it is.


3. ~/.claude/skills/remember/SKILL.md

---
name: remember
description: Review the current session and save durable learnings to auto memory.
allowed-tools: Read(*), Write(*), Edit(*)
---

# /remember

Review what happened in the session and propose memory updates.

## What to do

1. Scan the conversation for: corrections I gave, durable facts I shared, non-obvious choices that worked, patterns worth keeping.
2. For each candidate, propose a memory file name and a one-line summary.
3. Ask which to save; write the approved ones to ~/.claude/projects/&lt;this-project&gt;/memory/.
4. Update MEMORY.md index with new entries.


4. ~/.claude/skills/weekstart/SKILL.md

---
name: weekstart
description: Monday kickoff. Daily agenda, overdue triage, project health, people follow-ups, weekly focus.
allowed-tools: Bash(*), Read(*), Write(*)
---

# /weekstart

Monday morning routine.

## What to do

1. Run the same scan as /today to build today's agenda.
2. Scan 10_Projects/ for projects with no activity in 7+ days. Flag them.
3. Scan 20_Areas/People/ for entries where last_contact is more than 14 days ago and follow_up is true.
4. Ask me for a one-line focus for the week.
5. Save everything as 00_Inbox/YYYY-MM-DD_Weekstart.md.


5. ~/.claude/skills/weekend/SKILL.md

---
name: weekend
description: Friday wrap-up. Weekly review, unresolved items, next week preview.
allowed-tools: Bash(*), Read(*), Write(*)
---

# /weekend

Friday wrap-up.

## What to do

1. Read this week's daily agenda files in 00_Inbox/.
2. Summarize what moved, what stalled, and what got committed to.
3. Pull open action items into a single list.
4. Propose 3 priorities for next week.
5. Save as 00_Inbox/YYYY-MM-DD_Weekend.md.


Create all five now and confirm when done.</pre>
    </div>

    <div class="success-box">
        <h4>Take a skill back to Cowork</h4>
        <p>Built a skill here you want for a Cowork demo? Zip the skill's folder (so the ZIP contains <code>skill-name/SKILL.md</code>), then in the Claude desktop app go to Settings &rarr; Customize &rarr; Skills &rarr; "+" &rarr; Upload a skill. There is no automatic sync between Claude Code and Cowork &mdash; each keeps its own copy &mdash; so test it once in Cowork before you rely on it live.</p>
    </div>

    <h2 id="mcp">MCP Servers: What's Actually Worth Connecting</h2>

    <p>MCP (Model Context Protocol) servers let Claude reach beyond your filesystem &mdash; into project management tools, calendars, CRMs, BigQuery, your inbox. In Cowork these appear as one-click Connectors. In Claude Code you configure them yourself, which is more work and more control. After months of use, only a few are load-bearing.</p>

    <h3>What I Actually Use</h3>

    <table class="comparison-table">
        <tr>
            <th>Server</th>
            <th>What It Unlocks</th>
        </tr>
        <tr>
            <td><strong>Project management (Wrike, Asana, Linear)</strong></td>
            <td>Tasks, due dates, and team workload show up in <code>/today</code> alongside vault tasks. Replaces tab-switching between Claude and the PM tool.</td>
        </tr>
        <tr>
            <td><strong>Slack</strong></td>
            <td>Search past messages, post drafts to channels, read DMs Claude was @-mentioned in. Useful for context retrieval and async delivery.</td>
        </tr>
        <tr>
            <td><strong>Meeting transcript service (Granola, Otter, etc.)</strong></td>
            <td>Pull Zoom transcripts directly into the vault without manual download. Foundation for the capture pipeline.</td>
        </tr>
        <tr>
            <td><strong>Calendar / email (Outlook, Google)</strong></td>
            <td>Read inbox for meeting context, draft replies in voice.</td>
        </tr>
        <tr>
            <td><strong>Data warehouse (BigQuery, Snowflake)</strong></td>
            <td>Query your own org's data. High-leverage if you do any analysis work.</td>
        </tr>
        <tr>
            <td><strong>Cloud storage (Drive, Box, SharePoint)</strong></td>
            <td>Read files from team shared drives without downloading. Essential when collaborators store things outside your vault.</td>
        </tr>
    </table>

    <h3>Two Environments, Two Configs</h3>
    <p>If you use both Claude Code (in VS Code) and Claude Desktop, MCP servers are configured separately:</p>

    <table class="comparison-table">
        <tr>
            <th>Claude Code</th>
            <th>Claude Desktop</th>
        </tr>
        <tr>
            <td>Config: <code>.claude/.mcp.json</code> in your project, plus <code>enabledMcpjsonServers</code> in settings</td>
            <td>Config: <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></td>
        </tr>
        <tr>
            <td>Best for: file work, coding, vault management, batch automation</td>
            <td>Best for: research, browsing, conversational use, email reading</td>
        </tr>
        <tr>
            <td>Same servers can be enabled in both, but each needs its own setup</td>
            <td>Some MCP servers only work in Desktop (e.g. Outlook integrations)</td>
        </tr>
    </table>

    <div class="warning-box">
        <h4>Two gotchas worth knowing</h4>
        <p><strong>Claude Desktop overwrites its config on restart.</strong> If you're editing <code>claude_desktop_config.json</code>, quit Desktop first (Cmd+Q on Mac, not just close the window), then edit, then relaunch.</p>
        <p><strong>MCP servers consume context.</strong> Each connected server adds its tool descriptions to Claude's context window. Don't connect everything. Connect the two or three that match your real workflow and turn the rest off.</p>
    </div>

    <div class="tip-box">
        <h4>Start with your project management tool</h4>
        <p>For most people, the highest-leverage first MCP server is whichever project management tool runs your day. Once Claude can see your tasks, deadlines, and assignments, <code>/today</code> becomes meaningfully better &mdash; it pulls from your vault and your PM tool in the same view.</p>
    </div>

    <h2 id="carry-over">What Carries Over From Guides 1 &amp; 2</h2>
    <p>Everything in the Cowork guides works here too, and gets sharper because skills and memory are doing more of the lifting. You don't need to relearn any of it:</p>

    <div class="why-grid">
        <div class="why-card">
            <h4>Capture pipelines</h4>
            <p>Granola, recorders, and transcript filing &mdash; the same <code>/granola</code> and <code>/call</code> patterns, now firing as real slash commands. See <a href="/personal-os-2" style="color: var(--brand-blue); text-decoration: none; font-weight: 600;">Guide 2</a>.</p>
        </div>
        <div class="why-card">
            <h4>The voice system</h4>
            <p>The <code>99_System/Context_Library/</code> files that let Claude draft in your voice. Built once, used everywhere. See <a href="/personal-os-2" style="color: var(--brand-blue); text-decoration: none; font-weight: 600;">Guide 2</a>.</p>
        </div>
        <div class="why-card">
            <h4>Companies as wiki entries</h4>
            <p>The People / Companies / Calls cross-linking pattern. Identical structure; auto memory makes the enforcement stick. See <a href="/personal-os-2" style="color: var(--brand-blue); text-decoration: none; font-weight: 600;">Guide 2</a>.</p>
        </div>
        <div class="why-card">
            <h4>Shipping from the vault</h4>
            <p>Single-use sites, webinar pages, branded decks, carousels &mdash; the place where Claude Code's filesystem access and deploy skills earn their keep. See <a href="/personal-os-2" style="color: var(--brand-blue); text-decoration: none; font-weight: 600;">Guide 2</a>.</p>
        </div>
    </div>

    <div class="cta-section">
        <h2>The Full Engine</h2>
        <p>Filesystem skills, auto memory, MCP servers. This is the build I run every day. Start with the Cowork guides if you haven't, get one capture pipeline working, and add the rest as the friction calls for it.</p>
        <a href="/personal-os" class="cta-button">Back to Guide 1 (Cowork)</a>
    </div>

</main>

<footer class="footer">
    <p>Created by <a href="https://janetteroush.com">Janette Roush</a> | Agents of Change</p>
    <p style="margin-top: 8px; font-size: 0.85rem;">This guide is part of the AI Lab for Travel Innovation.</p>
</footer>
      ` }} />
    </>
  )
}
