import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How a Personal OS Compounds Over Time | Agents of Change',
  description: 'The leverage layer: memory, skills, capture pipelines, voice system, and shipping from the vault. What happens when a folder of markdown becomes a coworker.',
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
    <span class="hero-badge">The Long Game</span>
    <h1>How a Personal OS<br>Compounds Over Time</h1>
    <p>The leverage layer. Memory, skills, capture pipelines, voice, and shipping &mdash; the parts that turn a folder of markdown into a coworker who knows your work.</p>
</section>

<main class="container">

    <nav class="toc">
        <h3>What's in This Guide</h3>
        <ul>
            <li><a href="#where-leverage">Where the Leverage Actually Is</a></li>
            <li><a href="#memory">Memory in Cowork</a></li>
            <li><a href="#skills">The Skills Ecosystem</a></li>
            <li><a href="#capture">Capture Pipelines: The Input Layer</a></li>
            <li><a href="#voice">The Voice System</a></li>
            <li><a href="#companies">Companies as Wiki Entries</a></li>
            <li><a href="#shipping">Shipping From the Vault</a></li>
            <li><a href="#mcp">Connectors: What to Wire In</a></li>
            <li><a href="#guardrails">Writing Rules &amp; Guardrails</a></li>
            <li><a href="#lessons">Hard-Won Lessons</a></li>
            <li><a href="#weekly">The Weekly Rhythm</a></li>
        </ul>
    </nav>

    <div class="intro-box" id="where-leverage">
        <h3>Where the Leverage Actually Is</h3>
        <p>The first guide gets you to "useful filing system." Folders, a CLAUDE.md, two skills, a working daily rhythm.</p>
        <p>This guide is about what happens after. The parts that took me six months to build and that I'd build again on day one if I were starting fresh: a memory habit that keeps Claude current on how I work, a skills library that automates real workflows, capture pipelines that fill the vault while I'm in meetings, a voice system that lets Claude draft in my actual cadence, and the realization that the vault is also a workshop where I ship things to the web.</p>
        <p style="margin-bottom: 0;">Every section here describes something I use weekly. The audience is the same: working professionals who use Claude as a productivity tool and want the system to compound.</p>
    </div>

    <h2>Setup vs. Compounding: What Changes</h2>
    <p>The biggest shift is moving from <em>telling Claude what to do</em> to <em>Claude already knowing what to do</em>. Here's what that looks like:</p>

    <div class="level-grid">
        <div class="level-card before">
            <h4>Week 1</h4>
            <ul>
                <li>You explain your role each session</li>
                <li>Two skills: <code>/today</code> and <code>/shutdown</code></li>
                <li>CLAUDE.md has role and task schema</li>
                <li>Projects are folders with notes</li>
                <li>You write everything yourself</li>
                <li>Capture is manual</li>
            </ul>
        </div>
        <div class="level-card after">
            <h4>Month 6+</h4>
            <ul>
                <li>Claude knows your role, team, projects, vendors, voice</li>
                <li>30+ skills across daily rhythm, meetings, content, review, shipping</li>
                <li>CLAUDE.md plus a learnings file keep Claude current on how you work</li>
                <li>Companies are wiki entries; People link in; Calls update both</li>
                <li>Claude drafts in your voice using your actual speaking positions</li>
                <li>Recorder, Zoom transcripts, and phone-to-vault channels feed the system automatically</li>
            </ul>
        </div>
    </div>

    <!-- SECTION: Memory -->
    <h2 id="memory">Memory in Cowork</h2>

    <p>You want Claude to remember how you work without re-explaining it every session. In Cowork, two things carry that memory:</p>

    <ul>
        <li><strong>Your CLAUDE.md</strong> &mdash; the instructions and rules you write at the root of your folder. Claude reads it at the start of every session. When you correct Claude, say <em>"add that as a rule to my CLAUDE.md."</em></li>
        <li><strong>A learnings file</strong> &mdash; ask Claude to keep <code>99_System/learnings.md</code>, a running list of preferences and corrections it should honor. Point Claude at it when you start something new.</li>
    </ul>

    <div class="tip-box">
        <h4>Write the rule the moment something annoys you</h4>
        <p>Every time Claude does something you would correct, say "add that as a rule." A rule with its reason attached is the durable kind &mdash; "never suggest stopping, because I decide my own pace" survives edge cases that a bare instruction misses. Two weeks of this and most of the friction is gone.</p>
    </div>

    <div class="explanation">
        <strong>The self-writing version lives in Claude Code.</strong> Cowork has no equivalent of Claude Code's auto memory &mdash; the layer where Claude writes its own durable notes to disk and recalls them across every session, with no file for you to maintain. If that's what you want, it's the headline feature of <a href="/personal-os-3" style="color: var(--brand-blue); font-weight: 600;">Guide 3, the Claude Code build</a>.
    </div>

    <!-- SECTION: Skills -->
    <h2 id="skills">The Skills Ecosystem</h2>

    <p>The first guide kept it to a couple of saved shortcuts. A mature Personal OS leans on many more &mdash; each one a few lines of instructions Claude reuses, so you stop re-explaining a workflow. In Cowork you save a skill under <strong>Settings &rarr; Customize &rarr; Skills</strong>, or you simply ask Claude to run the workflow by name.</p>

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
    <p>Past the daily agenda, these do the most work in a typical week: meeting capture, pre-meeting prep, a learnings habit, Monday kickoff, and Friday wrap-up. In Cowork, save each as a skill (Settings &rarr; Customize &rarr; Skills), or paste the prompt below and have Claude keep them in your vault so you can ask for them by name.</p>

    <div class="prompt-box">
        <h4>Copy and paste into Claude:</h4>
        <pre>Please set up five workflows for me. For each, either save it as a skill (Settings &rarr; Customize &rarr; Skills) or keep the instructions in my vault so I can ask for it by name.

1. A "call" skill:

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


2. A "brief" skill:

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


3. A "remember" skill:

---
name: remember
description: Review the current session and save durable learnings to my vault.
---

# remember

Review what happened in the session and propose what to save.

## What to do

1. Scan the conversation for: corrections I gave, durable facts I shared, non-obvious choices that worked, patterns worth keeping.
2. For each candidate, propose a one-line entry.
3. Ask which to save; append the approved ones to 99_System/learnings.md, and add any lasting rules to my CLAUDE.md.


4. A "weekstart" skill:

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


5. A "weekend" skill:

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

    <!-- SECTION: Capture -->
    <h2 id="capture">Capture Pipelines: The Input Layer</h2>

    <p>The first guide treated the vault as a place you write into. The leverage move is to make it a place that fills itself from your real meetings. By the time you sit down to ask Claude "what did I learn this week?", the raw material is already there.</p>

    <p>The lowest-effort starting point is meeting transcripts, and the easiest path is Granola.</p>

    <h3>Granola for Meeting Capture</h3>
    <p>Granola sits on top of Zoom, Google Meet, and Microsoft Teams and captures transcripts plus AI-generated summaries for every call. It ships with a built-in Claude connector, so once you connect it, Claude can pull recent meetings on demand without you copying anything.</p>

    <p>Two parts to set up:</p>

    <div class="workflow-box">
        <h4>Connect Granola to Claude</h4>
        <div class="workflow-item">
            <div class="workflow-icon">1</div>
            <div class="workflow-content">
                <h5>Install Granola</h5>
                <p>Download Granola at <a href="https://granola.ai" target="_blank">granola.ai</a>. Sit it on top of your next meeting; it will start producing transcripts automatically.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">2</div>
            <div class="workflow-content">
                <h5>Enable the Granola connector in Claude</h5>
                <p>In Claude's desktop app, open Settings &rarr; Connectors and enable Granola. Claude then has tools like <code>list_meetings</code> and <code>get_meeting_transcript</code> available. (In Claude Code you add the Granola MCP server instead &mdash; see <a href="/personal-os-3">Guide 3</a>.)</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">3</div>
            <div class="workflow-content">
                <h5>Install the <code>/granola</code> skill</h5>
                <p>The skill below tells Claude how to use the connector to file meetings into the right vault folders. Paste the prompt to install it.</p>
            </div>
        </div>
    </div>

    <div class="prompt-box">
        <h4>Copy and paste into Claude:</h4>
        <pre>Please install a Granola filing skill for me.

Set this up as a "granola" skill (Settings &rarr; Customize &rarr; Skills), or keep it in my vault and run it by name:

---
name: granola
description: Pull recent Granola meeting transcripts and file them into 20_Areas/Calls/ as structured call notes. Skip routine internal meetings and solo notes.
allowed-tools: Read(*), Write(*), Edit(*), Glob(*)
---

# /granola

File recent Granola meetings into the vault as call notes.

## What to do

1. Use the Granola connector to list meetings since the last run (default: past 7 days).
2. For each meeting, decide whether to file or skip:
   - SKIP: solo notes, recurring 1:1s with my manager, routine internal ops syncs, social events, held meetings with no transcript
   - FILE: external calls, partner meetings, customer calls, new contacts, strategic discussions
3. For each meeting to file:
   - Pull the FULL transcript via get_meeting_transcript (never the AI summary; it drops and distorts decisions)
   - Check 20_Areas/People/ for the participants; create or update profiles
   - Check 20_Areas/Companies/ for their org; update Engagement Timeline
   - Create a call note at 20_Areas/Calls/YYYY-MM-DD_Meeting-Name.md
4. Report a summary: filed N, skipped M, and why each was skipped.

Confirm when the skill is installed.</pre>
    </div>

    <div class="tip-box">
        <h4>Other capture sources</h4>
        <p>If you use a wearable recorder, Otter, Fireflies, or any other source, the pattern is the same: a SKILL.md that knows where new transcripts arrive and how to file them. Tell Claude what you've got and ask it to scaffold a skill modeled on <code>/granola</code>.</p>
    </div>

    <!-- SECTION: Voice -->
    <h2 id="voice">The Voice System</h2>

    <p>Without a voice system, Claude writes in Generic Professional. With one, Claude writes in <em>your</em> voice &mdash; with your cadence, your word choices, your structure preferences, even your banned phrases. This is the difference between Claude as a draft generator and Claude as a ghostwriter who actually sounds like you.</p>

    <h3>Where Voice Lives</h3>
    <p>My voice system sits in <code>99_System/Context_Library/</code> as a small set of files:</p>

    <div class="folder-structure">
        <pre><span class="folder">99_System/Context_Library/</span>
│
├── <span class="file">speaking_positions.md</span>     <span class="comment"># My actual positions on the topics I'm known for</span>
├── <span class="file">quotable_moments.md</span>       <span class="comment"># Lines that landed on stage or in writing</span>
├── <span class="file">email_voice_guide.md</span>      <span class="comment"># How I actually write emails (tone, structure)</span>
├── <span class="file">audience_delight_profile.md</span> <span class="comment"># What I'm like as a speaker</span>
└── <span class="file">slide_playbook.md</span>         <span class="comment"># Visual and verbal patterns for decks</span></pre>
    </div>

    <h3>The Files That Carry the Most Weight</h3>

    <div class="skill-card">
        <h4>speaking_positions.md</h4>
        <p>The living synthesis of what I actually believe and say publicly on the topics I'm known for. Built up over time from calls, webinars, and stage moments. When I'm drafting a keynote, an op-ed, or a panel intro, this file is the source of truth for my point of view &mdash; not a generic LLM guess at what someone in my role would say.</p>
    </div>

    <div class="skill-card">
        <h4>quotable_moments.md</h4>
        <p>Lines that landed. Pulled from webinar transcripts, podcast appearances, and stage Q&amp;A. When Claude drafts content, it can reach for things I've already said well rather than inventing new phrasing.</p>
    </div>

    <div class="skill-card">
        <h4>email_voice_guide.md</h4>
        <p>How I actually write to different audiences &mdash; C-suite, legal, internal team, external partners. Built from my own sent mail. The <code>/janette-voice</code> skill loads this file when drafting any email so the result sounds like me, not like Claude.</p>
    </div>

    <h3>Build Your Voice Files</h3>
    <p>The most accurate source of your voice is your own sent mail. The prompt below tells Claude to use an email connector (Outlook, Gmail, or whatever you have wired up) to read your actual sent emails and produce the voice files from real evidence.</p>

    <div class="prompt-box">
        <h4>Copy and paste into Claude:</h4>
        <pre>I want you to build my voice system in 99_System/Context_Library/.

First: confirm you have access to an email connector (Outlook, Gmail, Microsoft 365, or similar). If no email connector is enabled in this Claude environment, tell me which one I should set up and walk me through enabling it. Do not proceed until email access is working.

Once you have email access:

1. Read 30 to 50 of my actual sent emails from the past 6 months. Prioritize emails I wrote from scratch over forwards or one-line replies. Include a mix of audiences: internal team, peers, external partners, vendors, and any leadership.

2. Analyze the patterns. Look for:
   - Voice and tone characteristics
   - Sentence and paragraph rhythm
   - Vocabulary I favor and vocabulary I avoid
   - Punctuation habits (em-dashes, parentheses, exclamation marks)
   - Salutations and closings I actually use
   - How my tone shifts across audiences

3. Create these four files in 99_System/Context_Library/:

   - email_voice_guide.md: how I write emails. Tone, structure, salutations, closings, banned phrases. Include 2-3 short before/after examples showing how generic professional writing would get rewritten in my voice.

   - speaking_positions.md: start with section headers for the topics that show up most in my outgoing mail (Strategy, Industry POV, Team Philosophy, etc.). Leave each section mostly empty with a one-line note that it will be filled in over time from calls and webinars.

   - quotable_moments.md: start blank with a brief explanation of what belongs here (lines that landed, on stage or in writing).

   - audience_delight_profile.md: start with what you can infer from my emails about how I show up with different audiences. Flag that this file will get richer once speaking transcripts are added.

4. Report back: how many emails you analyzed, what patterns stood out, and the four files you created.</pre>
    </div>

    <div class="explanation">
        <strong>The compounding move:</strong> Once the files exist, every substantive call you have gets distilled into <code>speaking_positions.md</code>. Every great line from a webinar or panel lands in <code>quotable_moments.md</code>. Over time, the voice files become a richer source of your actual point of view than any single artifact Claude could produce on demand.
    </div>

    <!-- SECTION: Companies -->
    <h2 id="companies">Companies as Wiki Entries</h2>

    <p>This is an architectural decision the first guide didn't cover. In my vault, every external organization that touches my work gets a <strong>Company file</strong> in <code>20_Areas/Companies/</code>. That file is the canonical wiki entry for the org &mdash; the place that consolidates partnership context, products, history, and strategic fit. People files are individual profiles that link <em>into</em> the Company file.</p>

    <h3>Why This Pattern</h3>
    <p>People come and go. Companies persist. When someone changes employers, I update the <code>company:</code> field on their People file &mdash; their relationship history stays intact, but the wiki entry stays attached to the org. When someone new joins an existing partner, I just add a row to that Company's Key People table and they inherit all the context.</p>

    <h3>What a Company File Looks Like</h3>

    <div class="code-block">
        <pre><span class="header">---
type: company
name: [Org Name]
website: [domain]
relationship: [strategic-partner | partner | vendor | press | other]
first_contact: YYYY-MM-DD
last_contact: YYYY-MM-DD
---

# [Org Name]

## What They Do
[One paragraph. Plain description.]

## Relationship Snapshot
[Why this org matters to my work right now.]

## Key People
| Name | Role | Contact | Note |
|------|------|---------|------|
| [[Person-Name]] | [Role] | [email] | [one line] |

## Internal Counterparts
[Who on my side owns this relationship.]

## Products / Workstreams
[Concrete things in play.]

## Engagement Timeline
| Date | Touchpoint | Call Note |
|------|------------|-----------|
| 2026-05-20 | Intro call | [[2026-05-20_Org-Name]] |

## Strategic Fit
[How this org sits relative to competitors and our strategy.]

## Open Items
- [ ] [item] &mdash; @owner &mdash; due YYYY-MM-DD

## Related
[Wikilinks to projects, parallel companies, reference memories.]</span></pre>
    </div>

    <h3>The Compounding Rule</h3>
    <p>Three cross-references happen automatically at creation time, enforced by my CLAUDE.md:</p>
    <ul>
        <li><strong>New person at an existing company</strong> &rarr; update that Company's Key People table in the same edit.</li>
        <li><strong>New company that already has People profiles</strong> &rarr; backfill the <code>company:</code> field on every existing person who works there.</li>
        <li><strong>New Call note involving an external org</strong> &rarr; link to the Company in the call's Related section, and add the row to the Company's Engagement Timeline.</li>
    </ul>

    <h3>Install the Templates</h3>
    <p>The prompt below installs the three templates (People, Companies, Calls) and adds the filing conventions to your root CLAUDE.md so Claude enforces the cross-reference rules automatically.</p>

    <div class="prompt-box">
        <h4>Copy and paste into Claude:</h4>
        <pre>I want to install the relationship-tracking pattern in my vault. Please:

1. Create 20_Areas/People/_template_person.md with this frontmatter:

---
type: person
name:
company: "[[Company-Name]]"
role:
relationship: # client | colleague | partner | vendor
first_contact:
last_contact:
follow_up: false
tags: []
---

## Context
&lt;!-- Role, how we met, what they care about --&gt;

## Relationship History
&lt;!-- Key interactions, auto-appended from calls --&gt;

## Personal Details
&lt;!-- Family, interests, preferences --&gt;

## Open Items
&lt;!-- Commitments made, questions to follow up on --&gt;


2. Create 20_Areas/Companies/_template_company.md with this frontmatter and sections:

---
type: company
name:
website:
industry:
relationship: # strategic-partner | partner | vendor | press | other
first_contact:
last_contact:
tags: []
---

## What They Do
[One paragraph.]

## Relationship Snapshot
[Why this org matters to my work right now.]

## Key People
| Name | Role | Contact | Note |
|------|------|---------|------|

## Internal Counterparts
[Who on my side owns this relationship.]

## Products / Workstreams
## Engagement Timeline
| Date | Touchpoint | Call Note |
|------|------------|-----------|

## Strategic Fit
## Open Items
## Related


3. Create 20_Areas/Calls/_template_call.md with:

---
type: call
contact: "[[Person-Name]]"
company: "[[Company-Name]]"
date:
tags: []
---

## Context
## Discussion
## Decisions
## Action Items
## Follow-up


4. Add a "Filing Conventions" section to my root CLAUDE.md that explains:
   - Companies are wiki entries; the canonical hub for an org.
   - People link to their company via the company: frontmatter field.
   - Calls link to both.
   - When a new person is added at an existing company, also update that Company's Key People table.
   - When a new company is added and People profiles already exist for that org, backfill the company: field on those People files.
   - When a new call note is created, also update the Company's Engagement Timeline and append a line to the person's Relationship History.

Create all three templates and the CLAUDE.md addition now.</pre>
    </div>

    <div class="success-box">
        <h4>The payoff</h4>
        <p>Once installed, you can say "prep me on [Company Name]" and Claude opens the Company file, reads the Key People table, scans recent Engagement Timeline entries, surfaces open items, and gives you a brief with everything you need. The Company file is the single hub; everything else links into it.</p>
    </div>

    <!-- SECTION: Shipping -->
    <h2 id="shipping">Shipping From the Vault</h2>

    <p>The vault doubles as a workshop where I produce branded artifacts and deploy them to the web.</p>

    <h3>What I Ship From Here</h3>

    <div class="why-grid">
        <div class="why-card">
            <h4>Single-use sites</h4>
            <p>A skill (<code>/single-use-site</code>) takes a recipient name and a purpose, scaffolds an HTML page using the right brand identity, adds favicon and logos, deploys to Vercel under the correct team, and disables SSO so the recipient can open it without a login. From "build me a walkthrough page for X" to a live URL takes about 90 seconds.</p>
        </div>
        <div class="why-card">
            <h4>Webinar pages</h4>
            <p>A skill (<code>/add-webinar</code>) takes a video file, uploads to Mux, auto-generates a transcript, drafts page metadata, adds a card to my homepage, rebuilds the site, and deploys. One command turns a recording into a public, searchable webinar page.</p>
        </div>
        <div class="why-card">
            <h4>Branded presentations</h4>
            <p>A skill (<code>/build-pptx</code>) that handles brand detection, layout planning, color and typography application, and logo placement. I describe the deck, Claude produces a polished PPTX.</p>
        </div>
        <div class="why-card">
            <h4>LinkedIn carousels</h4>
            <p>A skill (<code>/linkedin-carousel</code>) that takes source material (a transcript, a webinar, a call), pulls images from my image library, applies brand styling, and produces a print-ready PDF carousel. Learns my voice over time through a recursive improvement loop.</p>
        </div>
    </div>

    <h3>Why Shipping Belongs in the Vault</h3>
    <p>Two reasons:</p>
    <ul>
        <li><strong>Source material is already here.</strong> The transcript I want to turn into a webinar page is in <code>20_Areas/Keynotes/</code>. The brand logo files are in <code>30_Resources/</code>. The voice that should narrate the page is in <code>99_System/Context_Library/</code>. Building elsewhere means dragging all that context to a new tool.</li>
        <li><strong>Skills can compose.</strong> A skill like <code>/add-webinar</code> uses the voice system to draft the page copy, the brand resources for visuals, and the deploy infrastructure to ship. Each piece was built for a different reason; the skill stitches them together.</li>
    </ul>

    <h3>Build Your Own Shipping Skill</h3>
    <p>Shipping skills are the most personal part of a Personal OS &mdash; they depend on what you publish, your brand, and your deploy infrastructure. The prompt below works for any recurring publishing workflow you've done manually two or three times.</p>

    <div class="prompt-box">
        <h4>Copy and paste into Claude:</h4>
        <pre>I have a recurring publishing workflow I want to turn into a skill. Walk me through the build.

Ask me these questions one at a time:

1. What's the artifact I'm shipping? (one-pager, slide deck, webinar page, social post, branded PDF, etc.)
2. Where does the source material live? (vault folder, Drive, transcript service, etc.)
3. What does the artifact need from my voice or brand system? (writing voice, logos, colors, templates)
4. Where does it get published? (Vercel, GitHub Pages, S3, LinkedIn, Drive, intranet, etc.)
5. What manual steps do I currently do, in order?

Once I've answered all five:

1. Propose a skill name and short description.
2. Draft a SKILL.md that orchestrates the full workflow: pulling sources, applying voice and brand, producing the artifact, deploying or filing it, confirming success.
3. Flag any external setup I need (API keys, account access, MCP connectors).
4. Save it as a skill (Settings &rarr; Customize &rarr; Skills) and tell me how to trigger it.</pre>
    </div>

    <!-- SECTION: MCP -->
    <h2 id="mcp">Connectors: What to Wire In</h2>

    <p>Connectors let Claude reach beyond your folder &mdash; into project management tools, calendars, CRMs, your inbox, cloud storage. In Cowork you turn them on under <strong>Settings &rarr; Connectors</strong>. After months of use, only a few are load-bearing.</p>

    <h3>What I Actually Use</h3>

    <table class="comparison-table">
        <tr>
            <th>Connector</th>
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

    <div class="warning-box">
        <h4>Don't connect everything</h4>
        <p>Each connector adds its tools to Claude's context window. Turn on the two or three that match your real workflow and leave the rest off.</p>
    </div>

    <div class="explanation">
        <strong>In Claude Code, connectors are MCP servers</strong> you configure in files rather than toggle in Settings, with separate configs for the editor and the desktop app. The full setup, including the config gotchas, is in <a href="/personal-os-3" style="color: var(--brand-blue); font-weight: 600;">Guide 3</a>.
    </div>

    <div class="tip-box">
        <h4>Start with your project management tool</h4>
        <p>For most people, the highest-leverage first connector is whichever project management tool runs your day. Once Claude can see your tasks, deadlines, and assignments, <code>/today</code> becomes meaningfully better &mdash; it pulls from your vault and your PM tool in the same view.</p>
    </div>

    <!-- SECTION: Writing Rules -->
    <h2 id="guardrails">Writing Rules &amp; Guardrails</h2>

    <p>Beyond the voice system (which teaches Claude how you write), guardrails are rules that prevent Claude from producing content you'd have to heavily edit or that could embarrass you. These live in your CLAUDE.md or in feedback memories.</p>

    <h3>Communication Guardrails</h3>
    <p>If you work in an industry where AI hype language is common, write a rule that pulls drafts back to specifics:</p>

    <div class="code-block">
        <pre><span class="header">## Communication Guardrails</span>

When drafting communications, presentations, or talking points
for internal audiences, keep AI framing practical and grounded.
Focus on specific tools and wins. Flag if a draft leans too heavy
on sweeping transformation language.</pre>
    </div>

    <h3>Internal vs. External Content</h3>
    <p>Claude can easily mix internal language (project codenames, partner pricing details, internal tool nicknames) into content meant for external audiences. The fix is a one-line rule:</p>

    <div class="code-block">
        <pre><span class="header">## Content Creation</span>

When creating content for external audiences (partners, clients,
press, industry contacts), always ask "Is this internal or external?"
if it's unclear. Never include partner pricing, financial figures,
internal program names, or compliance-sensitive language in external
deliverables.</pre>
    </div>

    <h3>Data Honesty</h3>
    <p>If Claude is helping you with reports, analytics, or research, this rule prevents quiet fabrication:</p>

    <div class="code-block">
        <pre><span class="header">## Data &amp; Reports</span>

Never fabricate or extrapolate data. If I provide three months
of data, do NOT create year-over-year comparisons. Verify
relationships, geography, numbers, and frameworks before writing
them into scripts or briefings. When source data is insufficient,
flag it instead of filling the gap.</pre>
    </div>

    <div class="tip-box">
        <h4>The rule-writing habit</h4>
        <p>Every time Claude produces something that makes you wince, write a rule for it. After two weeks, you'll have a tight set of guardrails that catch 90% of the recurring problems. Most rules are one or two lines.</p>
    </div>

    <!-- SECTION: Lessons -->
    <h2 id="lessons">Hard-Won Lessons</h2>

    <p>These come from months of daily use. Each one represents a problem that took time to diagnose.</p>

    <div class="step">
        <span class="step-number">1</span>
        <h3>Context Window Management</h3>
        <p>Claude holds a finite amount of information at once. If your CLAUDE.md is bloated with profile files, project specs, and detailed context that loads on every session, Claude runs out of room for the actual work. Keep the root CLAUDE.md tight. Push detail into memory files and project-level CLAUDE.md files that load on demand.</p>
    </div>

    <div class="step">
        <span class="step-number">2</span>
        <h3>Write a Rule When Something Surprises You</h3>
        <p>The highest-leverage habit. When Claude does something unexpectedly right, ask it to note that as a rule. When it does something wrong, ask it to add the correction. Either way, the system compounds. Skip this step and you'll have the same correction conversation three times.</p>
    </div>

    <div class="step">
        <span class="step-number">3</span>
        <h3>Capture Pipelines Are the Highest-Leverage Build</h3>
        <p>One hour spent wiring a transcript pipeline saves you ten hours of manual filing over the next month. If you have a recorder, get the pipeline running first. If you take Zoom meetings, get Granola or equivalent connected first. Everything downstream &mdash; call notes, People profiles, debriefs &mdash; gets easier when capture is automatic.</p>
    </div>

    <div class="step">
        <span class="step-number">4</span>
        <h3>Data Hallucination Is Real</h3>
        <p>Claude will cheerfully invent year-over-year comparisons from three months of data, attribute quotes to the wrong person, or assert facts that sound right but aren't. Add explicit "never fabricate" rules to your CLAUDE.md, and for high-stakes content, always verify before publishing.</p>
    </div>

    <div class="step">
        <span class="step-number">5</span>
        <h3>Browser Automation Has Hard Limits</h3>
        <p>If a task involves interacting with 50+ different websites you don't control &mdash; diverse UIs, varying forms, captchas &mdash; browser automation will fail. I learned this trying to subscribe to 600 DMO newsletters. The better approach: have Claude build you a manual workflow tool (an HTML checklist with copy-paste prefills) that optimizes the human steps instead.</p>
    </div>

    <div class="step">
        <span class="step-number">6</span>
        <h3>Always Verify Deployments</h3>
        <p>When Claude pushes code to Vercel, GitHub Pages, or anywhere live, don't assume the deployment succeeded. Add a rule: always confirm the deployment URL after push, and check that the build actually worked. Claude will report "deployed" based on the push completing, not on the build succeeding.</p>
    </div>

    <div class="step">
        <span class="step-number">7</span>
        <h3>When Something Annoys You, Write the Rule Immediately</h3>
        <p>The two-week version of "this would be a nice rule" never gets written. The in-the-moment version of "Claude, never do that again &mdash; save it" does. Capture friction at the moment of friction.</p>
    </div>

    <!-- SECTION: Weekly Rhythm -->
    <h2 id="weekly">The Weekly Rhythm</h2>

    <p>A mature system benefits from a weekly maintenance pass. About 15 minutes. Most of it runs through skills.</p>

    <div class="workflow-box">
        <h4>The Weekly Loop</h4>
        <div class="workflow-item">
            <div class="workflow-icon">1</div>
            <div class="workflow-content">
                <h5>Monday: <code>/weekstart</code></h5>
                <p>Daily agenda, overdue triage, project health check, people follow-ups due, and a one-line focus for the week.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">2</div>
            <div class="workflow-content">
                <h5>Daily: <code>/today</code> + <code>/shutdown</code></h5>
                <p>Morning agenda, end-of-day capture. Built up across the week, these feed the Friday summary.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">3</div>
            <div class="workflow-content">
                <h5>Friday: <code>/weekend</code></h5>
                <p>Weekly review, unresolved items, updates to process notes, and a one-page summary of what moved.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">4</div>
            <div class="workflow-content">
                <h5>Periodically: <code>/remember</code></h5>
                <p>When a pattern emerges across the week, ask Claude to save it to your learnings file or add a rule to your CLAUDE.md. Friday is a natural moment &mdash; have Claude review the week's calls and decisions and propose what's worth keeping.</p>
            </div>
        </div>
        <div class="workflow-item">
            <div class="workflow-icon">5</div>
            <div class="workflow-content">
                <h5>Monthly: archive and prune</h5>
                <p>Move completed projects to <code>40_Archives/</code>. Scan your skills folder for skills you haven't used in 60 days and decide whether to keep, fix, or delete.</p>
            </div>
        </div>
    </div>

    <!-- SECTION: Evolved Structure -->
    <h2>The Vault After Six Months</h2>

    <p>Here's what mine looks like now. Items in <span style="color: var(--brand-green); font-weight: 600;">green</span> are additions beyond the foundation setup. They all emerged from real workflows.</p>

    <div class="folder-structure">
        <pre><span class="folder">Personal_OS/</span>
│
├── <span class="folder">00_Inbox/</span>                          <span class="comment"># Daily agendas, transcripts, captures</span>
│
├── <span class="folder">10_Projects/</span>                       <span class="comment"># Active work, each with its own CLAUDE.md</span>
│
├── <span class="folder">20_Areas/</span>
│   ├── <span class="folder">Calls/</span>                         <span class="comment"># Meeting notes (per call)</span>
│   ├── <span class="new">Companies/</span>                     <span class="comment"># Wiki entry per external org (NEW)</span>
│   ├── <span class="folder">People/</span>                        <span class="comment"># Individual profiles, linked to Companies</span>
│   ├── <span class="new">Keynotes/</span>                      <span class="comment"># Speaking engagement archive (NEW)</span>
│   ├── <span class="new">Events/</span>                        <span class="comment"># Conference session notes (audience-side) (NEW)</span>
│   ├── <span class="new">Market_Research/</span>               <span class="comment"># Ongoing research area (NEW)</span>
│   └── <span class="new">Press_Coverage/</span>                <span class="comment"># Media mentions log (NEW)</span>
│
├── <span class="folder">30_Resources/</span>
│   ├── <span class="new">Research/AI/</span>                   <span class="comment"># Sources, Digests, Stats_Library (NEW)</span>
│   ├── <span class="new">Research/Tourism/</span>              <span class="comment"># Same structure, different domain (NEW)</span>
│   ├── <span class="new">Webinar_Transcripts/</span>           <span class="comment"># With TOPIC_INDEX for voice retrieval (NEW)</span>
│   ├── <span class="new">Brand_Resources/</span>               <span class="comment"># Logos, colors, fonts, usage rules (NEW)</span>
│   └── <span class="new">AI_Generated_Images/</span>           <span class="comment"># Reusable image library (NEW)</span>
│
├── <span class="folder">40_Archives/</span>
│
├── <span class="folder">50_Personal/</span>                       <span class="comment"># Personal projects, kept separate</span>
│
├── <span class="folder">99_System/</span>
│   ├── <span class="folder">Context_Library/</span>
│   │   ├── <span class="new">speaking_positions.md</span>      <span class="comment"># Voice system (NEW)</span>
│   │   ├── <span class="new">quotable_moments.md</span>        <span class="comment"># Voice system (NEW)</span>
│   │   ├── <span class="new">email_voice_guide.md</span>       <span class="comment"># Voice system (NEW)</span>
│   │   ├── <span class="new">slide_playbook.md</span>          <span class="comment"># Deck design system (NEW)</span>
│   │   └── <span class="new">recurring_meetings/</span>        <span class="comment"># Standing roster files (NEW)</span>
│   ├── <span class="folder">Profiles/</span>
│   ├── <span class="new">Scripts/</span>                       <span class="comment"># Automation scripts and cron jobs (NEW)</span>
│   └── <span class="file">claude_code_config.md</span>
│
├── <span class="new">Apps/</span>                              <span class="comment"># Software projects deployed from here (NEW)</span>
│
└── <span class="file">CLAUDE.md</span></pre>
    </div>

    <p>The structure isn't the system &mdash; the structure is the residue of the system. Folders appear because workflows need a home. Skills appear because patterns repeat. Memories appear because lessons stick. None of it was planned upfront. All of it was built one piece at a time.</p>

    <div class="cta-section">
        <h2>The System Grows With You</h2>
        <p>None of this is a checklist. It's a direction. Start with one capture pipeline, ask Claude to save your first rule the next time you correct it, ship one thing from the vault to prove it can be done, and add the rest as the friction calls for it. Six months from now, you'll have something nobody else has &mdash; an AI coworker who knows your work.</p>
        <a href="/personal-os-3" class="cta-button">Go Deeper: The Claude Code Build &rarr;</a>
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
