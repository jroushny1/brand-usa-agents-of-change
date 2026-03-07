import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Level Up Your Personal OS for Claude Code | Agents of Change',
  description: 'Week-2+ guide for optimizing your Personal OS: memory files, slash commands, writing profiles, People directory, and advanced workflows.',
}

export default function PersonalOS2GuidePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
.pos2-page {
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

        /* Level cards - for week 1 vs week 3 comparison */
        .level-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin: 30px 0;
        }

        .level-card {
            padding: 24px;
            border-radius: 12px;
        }

        .level-card.before {
            background: #fef2f2;
            border-left: 4px solid #fca5a5;
        }

        .level-card.after {
            background: #f0fdf4;
            border-left: 4px solid var(--brand-green);
        }

        .level-card h4 {
            font-family: 'Oswald', sans-serif;
            font-size: 1.1rem;
            color: var(--brand-navy);
            margin-bottom: 10px;
        }

        .level-card p, .level-card li {
            font-size: 0.95rem;
        }

        .level-card ul {
            margin: 10px 0 0 20px;
        }

        .level-card li {
            margin-bottom: 6px;
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

        .substep-label {
            font-weight: 600;
            color: var(--brand-navy);
            font-size: 0.9rem;
            margin-bottom: 8px;
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

            .level-grid {
                grid-template-columns: 1fr;
            }

            .why-grid {
                grid-template-columns: 1fr;
            }
        }
      ` }} />
      <div className="pos2-page" dangerouslySetInnerHTML={{ __html: `
<section class="hero">
    <span class="hero-badge">Guide 2.0</span>
    <h1>Level Up Your<br>Personal OS</h1>
    <p>You built the foundation. Here's how to turn it into the system that runs your work life.</p>
    <a href="#optimize-claude-md" class="hero-cta">Jump to Optimizations</a>
</section>

<main class="container">

    <nav class="toc">
        <h3>What's in This Guide</h3>
        <ul>
            <li><a href="#where-you-are">Where You Are Now</a></li>
            <li><a href="#optimize-claude-md">Optimize Your CLAUDE.md</a></li>
            <li><a href="#global-instructions">The Global CLAUDE.md (Your Second Brain)</a></li>
            <li><a href="#memory">The Memory System</a></li>
            <li><a href="#people-directory">Build a People Directory</a></li>
            <li><a href="#call-notes">Call Notes & Meeting Capture</a></li>
            <li><a href="#profiles">Profiles: Teaching Claude Your Voice</a></li>
            <li><a href="#context-library">The Context Library</a></li>
            <li><a href="#slash-commands-advanced">Slash Commands Beyond /today and /log</a></li>
            <li><a href="#project-patterns">Real Project Patterns</a></li>
            <li><a href="#mcp-servers">MCP Servers: Claude's App Store</a></li>
            <li><a href="#writing-rules">Writing Rules & Guardrails</a></li>
            <li><a href="#hard-lessons">Hard-Won Lessons</a></li>
            <li><a href="#weekly-review">The Weekly Review</a></li>
        </ul>
    </nav>

    <div class="intro-box" id="where-you-are">
        <h3>You've Had Your Personal OS for a Few Weeks. Now What?</h3>
        <p>You set up the folders. You ran <code>/today</code> a few times. You created a project or two. It works&mdash;but it probably still feels like a fancy filing cabinet.</p>
        <p>This guide covers the features that transform a Personal OS from "organized folder" into a genuine work partner. Every technique here comes from real usage patterns&mdash;weeks of daily work where Claude handles meeting prep, builds presentations, tracks contacts, writes in your voice, and remembers decisions from three weeks ago.</p>
        <p style="margin-bottom: 0;">The audience for this guide is the same as the first: tourism marketing professionals (and anyone in a similar role) who use Claude as a productivity tool. You already have the basics. This is about depth.</p>
    </div>

    <h2>Week 1 vs. Week 3: What Changes</h2>
    <p>The biggest shift is moving from <em>telling Claude what to do</em> to <em>Claude already knowing what to do</em>. Here's what that looks like in practice:</p>

    <div class="level-grid">
        <div class="level-card before">
            <h4>Week 1</h4>
            <ul>
                <li>You explain your job and context each session</li>
                <li>Two slash commands: <code>/today</code> and <code>/log</code></li>
                <li>CLAUDE.md has basic role and architecture</li>
                <li>Projects are folders with files</li>
                <li>You manually describe your writing style</li>
            </ul>
        </div>
        <div class="level-card after">
            <h4>Week 3+</h4>
            <ul>
                <li>Claude knows your role, team, current projects, and preferences</li>
                <li>8+ slash commands for calls, keynotes, reviews, presentations</li>
                <li>CLAUDE.md has task schemas, call schemas, people directory rules, deployment checklists</li>
                <li>Projects have process notes, spec files, and auto-populated contacts</li>
                <li>A writing profile teaches Claude your exact voice</li>
            </ul>
        </div>
    </div>

    <!-- SECTION: Optimize CLAUDE.md -->
    <h2 id="optimize-claude-md">Optimize Your CLAUDE.md</h2>
    <p>Your project-level CLAUDE.md probably started with a role description and basic guidelines. Here's how to evolve it into a genuinely useful operating manual.</p>

    <h3>Add a Task Schema</h3>
    <p>When Claude creates tasks, it needs a consistent format. Define the schema once, and every task Claude creates will be scannable by <code>/today</code>:</p>

    <div class="code-block">
        <pre><span class="header">## Task Schema (Required)</span>

\`\`\`yaml
<span class="keyword">type:</span> <span class="string">task</span>
<span class="keyword">status:</span> <span class="string">[todo, in-progress, done, waiting]</span>
<span class="keyword">created:</span> <span class="string">YYYY-MM-DD</span>
<span class="keyword">due_date:</span> <span class="string">YYYY-MM-DD</span>
<span class="keyword">priority:</span> <span class="string">[high, medium, low]</span>
<span class="keyword">tags:</span> <span class="string">[]</span>
\`\`\`

Default <span class="string">\`tags\`</span> to empty list <span class="string">\`[]\`</span> if none provided.</pre>
    </div>

    <div class="explanation">
        <strong>Why this matters:</strong> Without a defined schema, Claude invents a different format every time. Then <code>/today</code> misses tasks because it's looking for <code>due_date</code> and Claude used <code>deadline</code> instead. Consistency here saves you from silent failures.
    </div>

    <h3>Add Action Rules</h3>
    <p>The most useful additions to your CLAUDE.md are behavioral rules you discover through friction. Here are real examples that solve real annoyances:</p>

    <div class="code-block">
        <pre><span class="header">## General Rules</span>

When I ask you to fix or change something, ALWAYS make
the actual edit to the file. Apply the change directly.

Before creating any new files or project structures,
always ask me: 'Should this be (1) local to your vault,
(2) shared via GitHub, or (3) deployed to a website?'
Then set up accordingly.

<span class="header">## Content Creation</span>

When creating content intended for external audiences
(partners, clients, industry contacts), always ask
'Is this internal or external?' if unclear.

<span class="header">## Data & Reports</span>

Never fabricate or extrapolate data. If I provide 3
months of data, do NOT create year-over-year comparisons.
Always flag when source data is insufficient.</pre>
    </div>

    <div class="tip-box">
        <h4>How to Discover Your Own Rules</h4>
        <p>Every time Claude does something that makes you pause&mdash;explains instead of editing, creates a file in the wrong place, invents data you didn't provide&mdash;write a rule for it. Within two weeks, you'll have a set of instructions that eliminate 90% of the friction.</p>
    </div>

    <h3>Add Professional Context</h3>
    <p>One line at the bottom of your CLAUDE.md that tells Claude who you are saves you from re-explaining your role in every session:</p>

    <div class="code-block">
        <pre><span class="header">## User Professional Context</span>

[Your name] is [your title] at [your organization].
[One sentence of relevant career history that shapes
your perspective.]</pre>
    </div>

    <p>This line flows into every interaction. When Claude drafts an email, it knows your title. When it prepares talking points, it knows your background.</p>

    <!-- SECTION: Global CLAUDE.md -->
    <h2 id="global-instructions">The Global CLAUDE.md: Your Second Brain</h2>

    <p>Here's something the first guide mentioned briefly but deserves its own section: Claude reads <em>two</em> CLAUDE.md files. Your project-level file (in your Personal OS folder) and a <strong>global file</strong> at <code>~/.claude/CLAUDE.md</code> that applies everywhere&mdash;across all projects, all folders, all sessions.</p>

    <div class="explanation">
        <strong>Where to find it:</strong> The global file lives at <code>~/.claude/CLAUDE.md</code> (the <code>~</code> means your home directory). You can edit it by asking Claude: "Edit my global CLAUDE.md file."
    </div>

    <h3>What Goes Global vs. What Stays in the Project?</h3>

    <table class="comparison-table">
        <tr>
            <th>Global (~/.claude/CLAUDE.md)</th>
            <th>Project (Personal_OS/CLAUDE.md)</th>
        </tr>
        <tr>
            <td>Writing style rules that apply everywhere</td>
            <td>Folder architecture and file locations</td>
        </tr>
        <tr>
            <td>Communication tone preferences</td>
            <td>Task schemas and frontmatter formats</td>
        </tr>
        <tr>
            <td>Tool-specific instructions (how to restart Claude Code, etc.)</td>
            <td>Call note schemas and People directory rules</td>
        </tr>
        <tr>
            <td>"Read files before asking for context"</td>
            <td>Project-specific context and deployment instructions</td>
        </tr>
        <tr>
            <td>Environment details (Claude Code vs. Claude Desktop)</td>
            <td>Brand resources and design asset locations</td>
        </tr>
    </table>

    <h3>Real Example: Writing Style as a Global Rule</h3>
    <p>If you have a strong writing style preference&mdash;say you prefer direct positive statements over negative constructions&mdash;put it in your global file so it applies to everything Claude writes, in any project:</p>

    <div class="code-block">
        <pre><span class="header">## Writing Style</span>

State what things ARE. Use direct positive statements.

<span class="header">## Communication Guardrails</span>

When drafting communications for internal audiences,
keep AI framing practical and grounded. Focus on
specific tools and wins. Flag if a draft leans too
heavy on sweeping transformation language.</pre>
    </div>

    <!-- SECTION: Memory System -->
    <h2 id="memory">The Memory System</h2>

    <p>Claude Code has a built-in memory feature that most users overlook. When you use the <code>/remember</code> command (or when Claude learns something important about your workflow), it stores notes in a memory file that persists across sessions.</p>

    <h3>Where Memory Lives</h3>
    <p>Memory files are stored at: <code>~/.claude/projects/[project-path]/memory/MEMORY.md</code></p>

    <p>Claude reads this file automatically at the start of every session. It's where Claude stores things like:</p>

    <ul>
        <li><strong>Project index:</strong> What you're building, where it lives, and how to deploy it</li>
        <li><strong>Workflow patterns:</strong> Conference capture workflows, call note habits, deployment checklists</li>
        <li><strong>Hard-won lessons:</strong> "Browser automation fails for diverse sites," "macOS grep works differently than Linux grep"</li>
        <li><strong>Current state:</strong> "ComplianceTrack Phase 3 complete, service worker cache at v5"</li>
    </ul>

    <div class="code-block">
        <pre><span class="label">REAL MEMORY EXAMPLE</span>

<span class="header"># Memory</span>

<span class="header">## Project Index</span>
<span class="bullet">-</span> <span class="keyword">NutriSnap</span> <span class="comment">— Personal calorie/macro tracking PWA.
  Source in Apps/NutriSnap/, deployed to GitHub Pages.</span>
<span class="bullet">-</span> <span class="keyword">DMO Newsletter Tracker</span> <span class="comment">— Subscribe to ~600
  US DMO newsletters. Master CSV in
  10_Projects/DMO_Newsletter_Tracker/</span>
<span class="bullet">-</span> <span class="keyword">ComplianceTrack</span> <span class="comment">— ATS PWA for compliance
  recruiting. Phase 3 complete. SW cache at v5.</span>

<span class="header">## Automation Lessons</span>
<span class="bullet">-</span> <span class="keyword">Browser automation fails for diverse sites.</span>
  <span class="comment">agent-browser CLI across 600+ different websites
  produced 0% real success across 3 iterations.</span>
<span class="bullet">-</span> <span class="keyword">Rule of thumb:</span> <span class="comment">If a task involves >50 different
  websites you don't control, skip automation and
  optimize the manual workflow instead.</span></pre>
    </div>

    <div class="tip-box">
        <h4>Feeding the Memory</h4>
        <p>You can explicitly tell Claude to remember something: "Remember that the ComplianceTrack service worker is at cache v5." Or use <code>/remember</code> at the end of a session to let Claude review what it learned and update the memory file automatically.</p>
    </div>

    <h3>Memory vs. Process Notes: What Goes Where?</h3>

    <table class="comparison-table">
        <tr>
            <th>Memory (MEMORY.md)</th>
            <th>Process Notes (process_notes.md)</th>
        </tr>
        <tr>
            <td>Cross-session facts: project locations, deploy URLs, version numbers</td>
            <td>Session-by-session history: what changed, what was decided</td>
        </tr>
        <tr>
            <td>Lessons learned that apply going forward</td>
            <td>Chronological log of work done</td>
        </tr>
        <tr>
            <td>Claude reads this automatically every session</td>
            <td>Claude reads this when working in that specific project</td>
        </tr>
        <tr>
            <td>Short, factual, current-state</td>
            <td>Detailed, narrative, historical</td>
        </tr>
    </table>

    <!-- SECTION: People Directory -->
    <h2 id="people-directory">Build a People Directory</h2>

    <p>This is one of the highest-value additions you can make to your Personal OS. A People directory in <code>20_Areas/People/</code> gives Claude a relationship memory that carries across sessions.</p>

    <h3>How It Works</h3>
    <p>Create a template file and tell Claude (in your CLAUDE.md) to auto-populate contacts from call notes:</p>

    <div class="code-block">
        <pre><span class="header">## People Directory</span>

Contact profiles live in <span class="string">\`20_Areas/People/\`</span>.
Auto-populated from Calls.

<span class="header">### Individuals</span>
<span class="bullet">-</span> <span class="keyword">Template:</span> <span class="string">\`_template_person.md\`</span>
<span class="bullet">-</span> <span class="keyword">Schema:</span> type: person, name, company, role,
  relationship, first_contact, last_contact, tags
<span class="bullet">-</span> <span class="keyword">Relationship tags:</span> #client, #colleague, #partner,
  #vendor, #stakeholder

<span class="header">### Auto-population Rules</span>
1. When creating a call note, check if person exists
2. If not, create from template with available context
3. If exists, update <span class="string">\`last_contact\`</span> and append to history
4. Extract and preserve: personal details mentioned,
   commitments made, open questions</pre>
    </div>

    <h3>The Person Template</h3>

    <div class="code-block">
        <pre>---
<span class="keyword">type:</span> <span class="string">person</span>
<span class="keyword">name:</span>
<span class="keyword">company:</span>
<span class="keyword">role:</span>
<span class="keyword">relationship:</span> <span class="comment"># client | colleague | partner | vendor</span>
<span class="keyword">first_contact:</span>
<span class="keyword">last_contact:</span>
<span class="keyword">tags:</span> <span class="string">[]</span>
---

<span class="header">## Context</span>
<span class="comment">&lt;!-- Role, how you met, what they care about --&gt;</span>

<span class="header">## Relationship History</span>
<span class="comment">&lt;!-- Key interactions, auto-updated from Calls --&gt;</span>

<span class="header">## Personal Details</span>
<span class="comment">&lt;!-- Family, interests, preferences --&gt;</span>

<span class="header">## Open Items</span>
<span class="comment">&lt;!-- Commitments made, questions to follow up on --&gt;</span></pre>
    </div>

    <h3>What This Looks Like in Practice</h3>
    <p>After a few weeks, you have a contact file that reads like this:</p>

    <div class="code-block">
        <pre><span class="label">REAL CONTACT EXAMPLE</span>

---
<span class="keyword">type:</span> <span class="string">person</span>
<span class="keyword">name:</span> <span class="string">Kyle Hudson</span>
<span class="keyword">company:</span> <span class="string">Stack (StackList)</span>
<span class="keyword">role:</span> <span class="string">Founder</span>
<span class="keyword">relationship:</span> <span class="string">partner</span>
<span class="keyword">first_contact:</span> <span class="string">2026-01-28</span>
<span class="keyword">last_contact:</span> <span class="string">2026-02-02</span>
<span class="keyword">tags:</span> <span class="string">[partner, AI, structured-data]</span>
---

<span class="header">## Context</span>
Founder of Stack/StackList - browser extension for
saving "cards" into shareable collections. Key value:
content is highly discoverable by AI due to atomic
structure and auto-generated metadata.

<span class="header">## Relationship History</span>
<span class="bullet">-</span> <span class="keyword">2026-01-28:</span> Intro call. Discussed B2B use case,
  analytics, AI discoverability features.
<span class="bullet">-</span> <span class="keyword">2026-02-02:</span> Demo walkthrough. Saw AI
  Discoverability button (generates FAQ data,
  structured metadata, regenerates every 2 weeks).

<span class="header">## Open Items</span>
<span class="bullet">-</span> [ ] Play around with StackList extension
<span class="bullet">-</span> [ ] Research FAQ schema for AI discoverability
<span class="bullet">-</span> [ ] Follow up end of February</pre>
    </div>

    <div class="success-box">
        <h4>The Payoff</h4>
        <p>Before your next call with this person, tell Claude: "I have a call with Kyle Hudson tomorrow. Prep me." Claude reads the contact file, pulls the relationship history, surfaces the open items, and gives you a brief with everything you need&mdash;automatically.</p>
    </div>

    <h3>Groups Too</h3>
    <p>For recurring team meetings or external working groups, create a group template. Same auto-population rules apply. This is especially useful for standing meetings where you want Claude to track themes, decisions, and action items across weeks.</p>

    <!-- SECTION: Call Notes -->
    <h2 id="call-notes">Call Notes & Meeting Capture</h2>

    <p>The <code>/call</code> command is one of the most-used skills in a mature Personal OS. It creates structured call notes that feed into the People directory and can be referenced in future sessions.</p>

    <h3>The Call Schema</h3>
    <p>Add this to your CLAUDE.md so every call note follows the same format:</p>

    <div class="code-block">
        <pre><span class="header">## Calls & Meeting Notes</span>

Call transcripts live in <span class="string">\`20_Areas/Calls/\`</span>.
Use <span class="string">\`/call\`</span> to create or update notes.

<span class="bullet">-</span> <span class="keyword">Naming:</span> <span class="string">\`YYYY-MM-DD_Contact-Name.md\`</span>
<span class="bullet">-</span> <span class="keyword">Schema:</span> type: call, contact, company, date,
  tags, follow_up
<span class="bullet">-</span> Before follow-up calls, search this folder by
  contact name to surface prior context</pre>
    </div>

    <h3>Dictation Mode</h3>
    <p>The real power is dictation. Add this instruction to your CLAUDE.md:</p>

    <div class="code-block">
        <pre><span class="header">### Call Notes / Dictation</span>

When I dictate call notes or meeting content, capture
everything immediately into a markdown file without
asking clarifying questions. Append incrementally
as I continue talking.</pre>
    </div>

    <p>This means you can talk to Claude during or right after a meeting&mdash;"Just had a call with the tech team, here's what happened..."&mdash;and Claude creates a properly formatted, searchable call note instantly. No forms, no prompts, no friction.</p>

    <div class="tip-box">
        <h4>Call Prep Is Where It Gets Good</h4>
        <p>Say "Prep me for my call with [name] tomorrow." Claude searches <code>20_Areas/Calls/</code> for past notes with that contact, reads their People directory entry, pulls open items, and gives you a brief. Two weeks of captured call notes creates a powerful relationship memory.</p>
    </div>

    <!-- SECTION: Profiles -->
    <h2 id="profiles">Profiles: Teaching Claude Your Voice</h2>

    <p>Your <code>99_System/Profiles/</code> folder is where you store personality instructions that Claude loads on demand. The most immediately useful one is a <strong>writing profile</strong>.</p>

    <h3>Why a Writing Profile Matters</h3>
    <p>Without one, Claude writes in Generic Professional. With one, Claude writes in <em>your</em> voice&mdash;with your rhythm, your word choices, your structure preferences, and even your banned phrases.</p>

    <h3>What a Real Writing Profile Contains</h3>

    <div class="code-block">
        <pre><span class="label">WRITING PROFILE EXAMPLE</span>

<span class="header"># Writing Profile</span>

<span class="header">## Voice in One Line</span>
Pragmatic builder-teacher who makes AI feel usable,
ethical, and a little fun&mdash;anchored in specifics,
curiosity, and lived experimentation.

<span class="header">## Core Qualities</span>
<span class="bullet">-</span> <span class="keyword">Practical evangelist:</span> Build, test, translate.
  Real examples always.
<span class="bullet">-</span> <span class="keyword">Approachable expert:</span> Intelligence through
  clarity, not terminology.
<span class="bullet">-</span> <span class="keyword">Warm but direct:</span> Collegial without saccharine.

<span class="header">## Structure Pattern</span>
Most pieces follow:
<span class="keyword">Hook &rarr; Context &rarr; Translation &rarr; Examples &rarr; Caveat &rarr; CTA</span>

<span class="header">## Style Mechanics</span>
<span class="bullet">-</span> Em dashes as primary transition tool&mdash;heavy user
<span class="bullet">-</span> Short paragraphs with whitespace
<span class="bullet">-</span> No semicolons. Parentheses for quick clarifications.
<span class="bullet">-</span> Exclamation points used genuinely&mdash;1-2 per email max

<span class="header">## Banned</span>
Never use: "revolutionary," "game-changing," "paradigm
shift," "stakeholders," "leverage," "synergy," "circle
back," "low-hanging fruit," "Dear," "Sincerely,"
"I hope this email finds you well"

<span class="header">## Quick Test</span>
Before finishing: Would this sound natural if read
aloud by me on stage? Does it teach or demo something
usable? Is there at least one specific example?</pre>
    </div>

    <h3>How to Use It</h3>
    <p>Tell Claude: "Load writing mode" or "Use my writing profile." Claude reads <code>99_System/Profiles/writing_profile.md</code> and adjusts its output accordingly. The key instruction in your CLAUDE.md is:</p>

    <div class="code-block">
        <pre><span class="header">## Context & Profiles</span>

Load <span class="keyword">only</span> when explicitly requested:

<span class="bullet">-</span> "Writing Mode" &rarr; <span class="string">\`Profiles/writing_profile.md\`</span>
<span class="bullet">-</span> "Coding Mode" &rarr; <span class="string">\`Profiles/coding_profile.md\`</span>

<span class="keyword">Do NOT preload profiles based on inferred task type.</span></pre>
    </div>

    <div class="explanation">
        <strong>Why "do NOT preload"?</strong> Because profiles consume context window space. If Claude loads your writing profile, coding profile, and three project specs at the start of every session, it runs out of room for the actual work. Load profiles on demand.
    </div>

    <h3>Building Your Writing Profile</h3>
    <p>The easiest way to build one from scratch:</p>

    <div class="prompt-box">
        <h4>Copy and paste this into Claude:</h4>
        <pre>I want to create a writing profile so you can match my voice. Here are 3 examples of things I've written recently:

[Paste 3 emails, LinkedIn posts, or other writing samples]

Analyze these for: voice, structure patterns, word choices I favor, phrases I use, things I avoid, punctuation habits, and paragraph length. Create a writing_profile.md in 99_System/Profiles/ based on what you find.</pre>
    </div>

    <h3>A Coding Profile Too</h3>
    <p>If you work with code (even occasionally, as a non-developer using AI tools to build things), a coding profile tells Claude your skill level and preferred explanations:</p>

    <div class="code-block">
        <pre><span class="label">CODING PROFILE EXAMPLE</span>

<span class="header"># Coding Profile</span>

<span class="header">## The Essential Truth</span>
I'm an AI-fluent executive who occasionally needs to
touch code. My goal is to be a capable <span class="keyword">user</span> of AI
coding tools.

<span class="header">## What This Means for Claude</span>
<span class="bullet">-</span> Explain what commands do <span class="keyword">before</span> I run them
<span class="bullet">-</span> Explain <span class="keyword">why</span> we're doing each step
<span class="bullet">-</span> When something breaks, help me understand the error
  before jumping to fixes
<span class="bullet">-</span> Incremental wins&mdash;small working steps over big leaps
  that might break</pre>
    </div>

    <!-- SECTION: Context Library -->
    <h2 id="context-library">The Context Library</h2>

    <p>Your <code>99_System/Context_Library/</code> is the reference shelf. It holds index files and detailed specs that Claude loads when you're working on specific topics.</p>

    <h3>The Structure</h3>

    <div class="folder-structure">
        <pre><span class="folder">99_System/Context_Library/</span>
│
├── <span class="file">business_profile.md</span>       <span class="comment"># Index of work context</span>
├── <span class="file">personal_profile.md</span>       <span class="comment"># Index of personal context</span>
│
├── <span class="folder">project_specs/</span>            <span class="comment"># Detailed project briefs</span>
│   ├── <span class="file">keynote_spec.md</span>
│   ├── <span class="file">social_automation.md</span>
│   └── <span class="file">research_hub.md</span>
│
└── <span class="folder">personal_specs/</span>           <span class="comment"># Personal project briefs</span>
    └── <span class="file">home_office.md</span></pre>
    </div>

    <h3>Business Profile: Your Work Index</h3>
    <p>The business profile is a single file that lists your role, your organization, your active projects (with links to their spec files), and the tools you use. Claude reads this when you say "load business context" and immediately knows what you're working on:</p>

    <div class="code-block">
        <pre><span class="header"># Business Profile</span>

<span class="header">## Current Role</span>
[Your name] - [Title] at [Organization]

<span class="header">## Organization</span>
[One-paragraph description of what your org does]

<span class="header">## Active Projects</span>
Load the relevant spec from
<span class="string">\`Context_Library/project_specs/\`</span> when working on these:

| Project           | Spec File              | Status     |
|-------------------|------------------------|------------|
| Keynote Prep      | <span class="string">keynote_spec.md</span>       | Active     |
| Social Automation | <span class="string">social_automation.md</span>  | Active     |
| Research Hub      | <span class="string">research_hub.md</span>       | Long-term  |

<span class="header">## Tools & Systems</span>
<span class="bullet">-</span> [Project management tool]
<span class="bullet">-</span> [CRM]
<span class="bullet">-</span> [Social media platform]</pre>
    </div>

    <h3>Project Specs: Deep Context on Demand</h3>
    <p>Each project spec is a detailed brief that Claude loads when you're actively working on that project. A keynote spec might include the event date, audience size, audience demographics, approved title and description, key themes, and research to incorporate.</p>

    <div class="explanation">
        <strong>The pattern:</strong> Business profile is the table of contents. Project specs are the chapters. Claude reads the table of contents frequently, and loads individual chapters when you're doing focused work on that project.
    </div>

    <!-- SECTION: Slash Commands Advanced -->
    <h2 id="slash-commands-advanced">Slash Commands Beyond /today and /log</h2>

    <p>The original guide covered <code>/today</code> and <code>/log</code>. A mature Personal OS has 8-10+ slash commands, each built for a specific workflow. Here's the full toolkit:</p>

    <table class="comparison-table">
        <tr>
            <th>Command</th>
            <th>What It Does</th>
        </tr>
        <tr>
            <td><code>/today</code></td>
            <td>Scan vault for tasks due today, create daily agenda</td>
        </tr>
        <tr>
            <td><code>/log</code></td>
            <td>Append session summary to project's process_notes.md</td>
        </tr>
        <tr>
            <td><code>/call</code></td>
            <td>Create or update a call note, auto-populate People directory</td>
        </tr>
        <tr>
            <td><code>/remember</code></td>
            <td>Review session learnings, update memory files</td>
        </tr>
        <tr>
            <td><code>/review</code></td>
            <td>Generate weekly/monthly summaries of accomplishments, calls, and open items</td>
        </tr>
        <tr>
            <td><code>/keynote-writer</code></td>
            <td>Generate keynote content from call notes and past presentations</td>
        </tr>
        <tr>
            <td><code>/text-to-html</code></td>
            <td>Convert plain text into email-safe inline HTML formatting</td>
        </tr>
        <tr>
            <td><code>/brand-usa-pptx</code></td>
            <td>Create branded presentations from ideas to polished PPTX</td>
        </tr>
        <tr>
            <td><code>/insights</code></td>
            <td>Analyze your last 30 days of chat sessions and generate an interactive HTML report (built into Claude Code)</td>
        </tr>
    </table>

    <div class="tip-box">
        <h4>The /insights Command: Your Monthly Reality Check</h4>
        <p><code>/insights</code> is built directly into Claude Code&mdash;you already have it. It analyzes your last 30 days of local chat sessions and generates an interactive HTML report showing how you actually use AI: which tools you rely on, what types of tasks dominate your sessions, and where you spend the most time.</p>
        <p>This is powerful for Personal OS users because it reveals patterns you can act on. If you discover that 40% of your sessions involve call prep, that's a signal to invest in a richer <code>/callprep</code> skill. If you see repetitive tasks that could be automated, that's your cue to build a new slash command. Run <code>/insights</code> once a month to see how your system is actually performing versus how you think it's performing.</p>
    </div>

    <h3>Building Your Own Slash Commands</h3>
    <p>Every slash command is a <code>SKILL.md</code> file in <code>~/.claude/skills/[name]/</code>. The format:</p>

    <div class="code-block">
        <pre>---
<span class="keyword">name:</span> <span class="string">call</span>
<span class="keyword">description:</span> <span class="string">Create or update a call note</span>
<span class="keyword">allowed-tools:</span> <span class="string">Glob(*), Read(*), Write(*), Edit(*)</span>
---

<span class="header"># /call - Meeting Note Creator</span>

Create a call note in 20_Areas/Calls/.

<span class="header">## What to Do</span>

1. Ask for the contact name and date (default today)
2. Check if person/group exists in People/
3. Create call note with proper schema
4. Update the People directory entry
5. Surface any prior notes with this contact</pre>
    </div>

    <div class="prompt-box">
        <h4>Create a new slash command:</h4>
        <pre>Create a new slash command called /[name] that [description of what it should do]. Save it to ~/.claude/skills/[name]/SKILL.md with the proper frontmatter format.</pre>
    </div>

    <div class="tip-box">
        <h4>The /review Command: Surprisingly Useful</h4>
        <p>Set up <code>/review</code> to scan your past week of call notes, process notes, and completed tasks, then generate a summary. This is invaluable for weekly reports, status updates, or prepping for a manager check-in. One command replaces 30 minutes of manual summary work.</p>
    </div>

    <!-- SECTION: Project Patterns -->
    <h2 id="project-patterns">Real Project Patterns</h2>

    <p>After a few weeks, your projects develop a consistent internal structure. Here's the evolved pattern:</p>

    <div class="folder-structure">
        <pre><span class="folder">10_Projects/</span>
│
├── <span class="folder">Wyoming_Keynote/</span>
│   ├── <span class="file">call_notes.md</span>          <span class="comment"># Planning call context</span>
│   └── <span class="file">process_notes.md</span>       <span class="comment"># Session-by-session log</span>
│
├── <span class="folder">ComplianceTrack/</span>
│   ├── <span class="file">process_notes.md</span>       <span class="comment"># Detailed build log</span>
│   ├── <span class="folder">docs/</span>
│   │   └── <span class="folder">plans/</span>              <span class="comment"># Architecture plans</span>
│   ├── <span class="folder">css/</span>
│   ├── <span class="folder">js/</span>
│   └── <span class="file">index.html</span>
│
└── <span class="folder">Social_Boosting_Automation/</span>
    └── <span class="file">process_notes.md</span></pre>
    </div>

    <h3>Process Notes: The Real Secret Weapon</h3>
    <p>Process notes are where the compounding value lives. Every session logged with <code>/log</code> adds context that Claude can reference later. After 5-10 entries, Claude can:</p>

    <ul>
        <li>Pick up exactly where you left off, even after a week away</li>
        <li>Reference decisions made in earlier sessions ("We decided to use CSS Grid over Flexbox because...")</li>
        <li>Surface open items that haven't been addressed yet</li>
        <li>Avoid repeating mistakes documented in earlier sessions</li>
    </ul>

    <div class="code-block">
        <pre><span class="label">REAL PROCESS NOTES EXAMPLE</span>

<span class="header">## 2026-02-13 - Phase 1 Build, Review, Deploy</span>

<span class="keyword">Summary:</span>
Built complete Phase 1 (Candidates MVP) from plan
through two review cycles. Deployed to GitHub Pages.

<span class="keyword">Decisions:</span>
<span class="bullet">-</span> Vanilla HTML/CSS/JS with ES modules: zero build
  tools, zero dependencies beyond PapaParse for CSV
<span class="bullet">-</span> IndexedDB for all storage: offline-first

<span class="keyword">Notes:</span>
<span class="bullet">-</span> Two full review passes caught 14 total issues
<span class="bullet">-</span> Lesson: be careful with replace_all on function
  calls that share a name with definitions</pre>
    </div>

    <div class="explanation">
        <strong>The "Notes" section is key.</strong> Lessons captured in process notes travel forward. The next time Claude encounters a similar situation, it remembers the lesson and avoids the same mistake.
    </div>

    <h3>Keynote Workflow: A Full-Lifecycle Example</h3>
    <p>Here's how a mature Personal OS handles a real workflow end-to-end:</p>

    <div class="workflow-box">
        <h4>Keynote Preparation Lifecycle</h4>
        <div class="workflow-item">
            <div class="workflow-icon">1</div>
            <div class="workflow-content">
                <h5>Planning Call</h5>
                <p>Use <code>/call</code> to capture the planning call. Claude creates the note, populates the contact in People/, and flags follow-up items.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">2</div>
            <div class="workflow-content">
                <h5>Project Spec</h5>
                <p>Create a spec in <code>Context_Library/project_specs/</code> with audience, event details, themes, and deliverable checklist.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">3</div>
            <div class="workflow-content">
                <h5>Content Development</h5>
                <p>Load writing profile + project spec. Use <code>/keynote-writer</code> to draft. Claude pulls from your archived keynotes and common talking points library.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">4</div>
            <div class="workflow-content">
                <h5>Deck Creation</h5>
                <p>Use <code>/brand-usa-pptx</code> (or your equivalent) to generate a branded presentation file from the draft content.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">5</div>
            <div class="workflow-content">
                <h5>Post-Event Archive</h5>
                <p>Export the final presentation as PDF. Create a markdown summary capturing stories that landed, data points that resonated, audience questions, and what you'd change.</p>
            </div>
        </div>
    </div>

    <div class="success-box">
        <h4>The Compounding Effect</h4>
        <p>Each keynote you archive makes the next one easier. By your fourth or fifth archived presentation, Claude has a library of your proven stories, audience-tested data points, and structure patterns that it can adapt to any new audience.</p>
    </div>

    <!-- SECTION: MCP Servers -->
    <h2 id="mcp-servers">MCP Servers: Claude's App Store</h2>

    <p>MCP (Model Context Protocol) servers extend Claude's capabilities by connecting it to external tools and data sources. Think of them as apps that give Claude new abilities.</p>

    <h3>What MCP Servers Can Do</h3>

    <div class="why-grid">
        <div class="why-card">
            <h4>Project Management</h4>
            <p>Connect to Wrike, Asana, or similar tools. Claude can read tasks, update statuses, and sync deadlines with your <code>/today</code> agenda.</p>
        </div>
        <div class="why-card">
            <h4>Web & Research</h4>
            <p>Fetch live web content, access Google Maps data, or search specialized databases&mdash;all from within Claude.</p>
        </div>
        <div class="why-card">
            <h4>File Systems</h4>
            <p>Access files on your Desktop or Downloads folder. Useful for processing reports or attachments without moving them to your vault.</p>
        </div>
        <div class="why-card">
            <h4>Domain-Specific Tools</h4>
            <p>Connect to budget tools (YNAB), health trackers (Whoop), or industry-specific APIs for your organization's data.</p>
        </div>
    </div>

    <h3>Where MCP Servers Live</h3>
    <p>MCP servers are configured differently depending on which Claude environment you use:</p>

    <table class="comparison-table">
        <tr>
            <th>Claude Desktop</th>
            <th>Claude Code (VS Code)</th>
        </tr>
        <tr>
            <td>Config at: <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></td>
            <td>Config at: <code>.claude/settings.local.json</code> in your project</td>
        </tr>
        <tr>
            <td>Supports many MCP servers</td>
            <td>Typically fewer servers needed (focused on file work)</td>
        </tr>
        <tr>
            <td>Great for research, data analysis, browsing</td>
            <td>Great for file editing, coding, vault management</td>
        </tr>
    </table>

    <div class="tip-box">
        <h4>Start With One</h4>
        <p>The most useful first MCP server for most people is <strong>fetch</strong>&mdash;it lets Claude retrieve web content. If you use a project management tool like Wrike or Asana, adding that server is a high-value second step. Ask Claude: "Help me set up the [tool name] MCP server."</p>
    </div>

    <h3>Add an Environment Note to Your CLAUDE.md</h3>
    <p>Since you might use both Claude Desktop and Claude Code, add this to your CLAUDE.md:</p>

    <div class="code-block">
        <pre><span class="header">## Environment</span>

I work across two environments: Claude Code (terminal)
AND Claude Desktop. When editing MCP configs or
settings, always ask which environment I mean,
or apply to both.</pre>
    </div>

    <!-- SECTION: Writing Rules -->
    <h2 id="writing-rules">Writing Rules & Guardrails</h2>

    <p>Beyond the writing profile (which captures your voice), you can add specific rules that prevent Claude from producing content you'd have to heavily edit.</p>

    <h3>Communication Guardrails</h3>
    <p>If you work in an industry where AI hype language is common, add guardrails:</p>

    <div class="code-block">
        <pre><span class="header">## Communication Guardrails</span>

When drafting communications or presentations for
internal audiences, keep AI framing practical and
grounded. Focus on specific tools and wins.
Flag if a draft leans too heavy on
"AI is changing everything" messaging.</pre>
    </div>

    <h3>Internal vs. External Content Rules</h3>
    <p>This one catches a lot of people off guard. Claude can easily mix internal language (testing frameworks, reauthorization processes, internal tool names) into content meant for external audiences:</p>

    <div class="code-block">
        <pre><span class="header">## Content Creation</span>

When creating content intended for external audiences
(partners, clients, industry contacts), always ask
'Is this internal or external?' if unclear.</pre>
    </div>

    <!-- SECTION: Hard Lessons -->
    <h2 id="hard-lessons">Hard-Won Lessons</h2>

    <p>These come directly from weeks of daily usage. Each one represents a real problem that took time to diagnose.</p>

    <div class="step">
        <span class="step-number">1</span>
        <h3>Context Window Management</h3>
        <p>Claude can only hold so much information at once. If you load your writing profile, coding profile, three project specs, and a full contact database at the start of every session, Claude has very little room left for the actual work. <strong>Load profiles and specs on demand</strong>, and tell Claude explicitly in your CLAUDE.md to avoid preloading.</p>
    </div>

    <div class="step">
        <span class="step-number">2</span>
        <h3>Data Hallucination</h3>
        <p>Claude will cheerfully create year-over-year comparisons from three months of data if you let it. Add an explicit "Never fabricate or extrapolate data" rule to your CLAUDE.md. This is especially important if you work with reports, analytics, or financial data.</p>
    </div>

    <div class="step">
        <span class="step-number">3</span>
        <h3>Automation Has Limits</h3>
        <p>If a task involves interacting with 50+ different websites you do not control (filling out forms, clicking through diverse UIs), browser automation will fail. The better approach: have Claude build you a manual workflow tool (like an HTML checklist with copy-paste prefills) that optimizes the human steps instead.</p>
    </div>

    <div class="step">
        <span class="step-number">4</span>
        <h3>Deployment Verification</h3>
        <p>When asking Claude to deploy code to GitHub Pages, Vercel, or similar: always verify the repo exists, the build command works locally first, and confirm the deployment URL after push. Add this as a rule in your CLAUDE.md. Claude will assume deployment succeeded unless you tell it to check.</p>
    </div>

    <div class="step">
        <span class="step-number">5</span>
        <h3>Skills vs. Legacy Commands</h3>
        <p>Claude Code has two systems: <strong>skills</strong> (in <code>~/.claude/skills/</code>) and <strong>commands</strong> (in <code>.claude/commands/</code> inside your project). Only skills work as invocable slash commands. If you created command files in your project folder and they don't trigger when you type the slash command, move them to skills.</p>
    </div>

    <div class="step">
        <span class="step-number">6</span>
        <h3>PDF Processing</h3>
        <p>Claude can read PDFs, but comparing multiple PDF reports works much better if you convert them to markdown first. Add a PDF processing rule to your CLAUDE.md with the conversion command, so Claude handles this automatically before starting any analysis.</p>
    </div>

    <!-- SECTION: Weekly Review -->
    <h2 id="weekly-review">The Weekly Review</h2>

    <p>A mature Personal OS benefits from a weekly maintenance cycle. This takes about 15 minutes and keeps everything running smoothly.</p>

    <div class="workflow-box">
        <h4>Weekly Review Workflow</h4>
        <div class="workflow-item">
            <div class="workflow-icon">1</div>
            <div class="workflow-content">
                <h5>Run /review</h5>
                <p>Get a summary of completed tasks, call notes from the week, and open items.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">2</div>
            <div class="workflow-content">
                <h5>Check Open Items</h5>
                <p>Review People directory entries for any follow-ups that are due. Scan call notes for action items you committed to.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">3</div>
            <div class="workflow-content">
                <h5>Archive Completed Projects</h5>
                <p>Move anything finished to <code>40_Archives/</code>. Keep your <code>10_Projects/</code> folder lean&mdash;only active work lives there.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">4</div>
            <div class="workflow-content">
                <h5>Update Memory</h5>
                <p>Run <code>/remember</code> to let Claude update its memory with anything from the past week that matters going forward.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">5</div>
            <div class="workflow-content">
                <h5>Update Business Profile</h5>
                <p>If project statuses changed (completed, paused, new ones started), update the active projects table in your business profile.</p>
            </div>
        </div>
    </div>

    <div class="prompt-box">
        <h4>Weekly review prompt:</h4>
        <pre>Run /review for this past week. Then check 20_Areas/People/ for any contacts where follow_up is true and last_contact was more than 2 weeks ago. List anything that needs attention.</pre>
    </div>

    <!-- SECTION: Evolved Folder Structure -->
    <h2>Your Evolved Folder Structure</h2>

    <p>Here's what the full structure looks like after a few weeks of active use:</p>

    <div class="folder-structure">
        <pre><span class="folder">Personal_OS/</span>
│
├── <span class="folder">00_Inbox/</span>                     <span class="comment"># Daily agendas</span>
│
├── <span class="folder">10_Projects/</span>                  <span class="comment"># Active work</span>
│   ├── <span class="folder">Keynote_Prep/</span>
│   │   ├── <span class="file">process_notes.md</span>
│   │   └── <span class="file">call_notes.md</span>
│   └── <span class="folder">Newsletter_Tracker/</span>
│       └── <span class="file">process_notes.md</span>
│
├── <span class="folder">20_Areas/</span>                     <span class="comment"># Ongoing responsibilities</span>
│   ├── <span class="new">Calls/</span>                    <span class="comment"># Meeting notes (NEW)</span>
│   │   ├── <span class="file">2026-02-10_Contact.md</span>
│   │   └── <span class="file">_index.md</span>
│   ├── <span class="new">People/</span>                   <span class="comment"># Contact directory (NEW)</span>
│   │   ├── <span class="file">_template_person.md</span>
│   │   ├── <span class="file">_group_template.md</span>
│   │   ├── <span class="file">People_Index.md</span>
│   │   └── <span class="file">Kyle-Hudson.md</span>
│   ├── <span class="new">Keynotes/</span>                 <span class="comment"># Presentation archive (NEW)</span>
│   │   ├── <span class="file">_workflow_guide.md</span>
│   │   ├── <span class="file">common_talking_points.md</span>
│   │   └── <span class="file">2026-02-09_Event.pdf</span>
│   └── <span class="file">Someday_Maybe.md</span>
│
├── <span class="folder">30_Resources/</span>                <span class="comment"># Reference materials</span>
│
├── <span class="folder">40_Archives/</span>                 <span class="comment"># Completed items</span>
│
├── <span class="folder">99_System/</span>
│   ├── <span class="folder">Context_Library/</span>
│   │   ├── <span class="file">business_profile.md</span>
│   │   ├── <span class="file">personal_profile.md</span>
│   │   ├── <span class="folder">project_specs/</span>
│   │   └── <span class="new">personal_specs/</span>       <span class="comment"># Personal projects (NEW)</span>
│   ├── <span class="folder">Profiles/</span>
│   │   ├── <span class="file">writing_profile.md</span>
│   │   ├── <span class="file">coding_profile.md</span>
│   │   └── <span class="new">coding_reference.md</span>   <span class="comment"># Tech environment (NEW)</span>
│   ├── <span class="folder">Scripts/</span>
│   └── <span class="new">claude_code_config.md</span>     <span class="comment"># Skills reference (NEW)</span>
│
└── <span class="file">CLAUDE.md</span></pre>
    </div>

    <p>Items marked in <span style="color: var(--brand-green); font-weight: 600;">green</span> are additions beyond the original 1.0 setup. They emerge naturally from daily use&mdash;you build them as you need them.</p>

    <!-- SECTION: Quick Reference -->
    <h2>Quick Reference: The Full Optimization Checklist</h2>

    <p>Use this as a checklist. You can tackle these in any order&mdash;each one is independent.</p>

    <table class="comparison-table">
        <tr>
            <th>Optimization</th>
            <th>Time to Set Up</th>
            <th>Daily Value</th>
        </tr>
        <tr>
            <td>Add task schema to CLAUDE.md</td>
            <td>5 minutes</td>
            <td>High&mdash;consistent task format for /today</td>
        </tr>
        <tr>
            <td>Add action rules to CLAUDE.md</td>
            <td>10 minutes</td>
            <td>High&mdash;eliminates recurring friction</td>
        </tr>
        <tr>
            <td>Create a writing profile</td>
            <td>15 minutes</td>
            <td>High&mdash;Claude writes in your voice</td>
        </tr>
        <tr>
            <td>Set up People directory</td>
            <td>10 minutes (template + CLAUDE.md rules)</td>
            <td>High&mdash;relationship memory across sessions</td>
        </tr>
        <tr>
            <td>Set up /call command</td>
            <td>10 minutes</td>
            <td>High&mdash;structured meeting notes in seconds</td>
        </tr>
        <tr>
            <td>Create business profile</td>
            <td>15 minutes</td>
            <td>Medium&mdash;Claude knows your org context</td>
        </tr>
        <tr>
            <td>Set up /review command</td>
            <td>10 minutes</td>
            <td>Medium&mdash;weekly summaries in one command</td>
        </tr>
        <tr>
            <td>Create global CLAUDE.md</td>
            <td>10 minutes</td>
            <td>Medium&mdash;preferences apply everywhere</td>
        </tr>
        <tr>
            <td>Set up first MCP server</td>
            <td>15 minutes</td>
            <td>Varies&mdash;depends on which tool you connect</td>
        </tr>
        <tr>
            <td>Create Keynotes archive</td>
            <td>20 minutes</td>
            <td>Compounds&mdash;each presentation makes the next faster</td>
        </tr>
    </table>

    <div class="cta-section">
        <h2>Your Personal OS Grows With You</h2>
        <p>These optimizations add up. The more context Claude has&mdash;your contacts, your decisions, your writing voice, your project history&mdash;the more it shifts from assistant to partner. Start with the highest-value items from the checklist above and add more as your workflow demands them.</p>
        <a href="https://janetteroush.com" class="cta-button">Explore More at Agents of Change</a>
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
