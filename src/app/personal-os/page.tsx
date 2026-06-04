import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Shape of a Personal OS for Claude | Agents of Change',
  description: 'A folder of markdown files that turns Claude from a chatbot into a coworker who knows your work. The foundation guide.',
}

export default function PersonalOSGuidePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .pos-page {
          --brand-navy: #1a2744;
          --brand-cyan: #00d4ff;
          --brand-sky: #7dd3fc;
          --brand-blue: #3b82f6;
          --brand-purple: #8b5cf6;
          --brand-red: #ef4444;
          --text-gray: #4b5563;
          --text-light: #6b7280;
          --bg-light: #f8fafc;
          --white: #ffffff;
          font-family: 'Montserrat', sans-serif;
          color: var(--text-gray);
          line-height: 1.7;
          background: var(--white);
        }

        .pos-page .hero {
          background: linear-gradient(135deg, var(--brand-navy) 0%, #2d3a52 100%);
          color: var(--white);
          padding: 80px 20px;
          text-align: center;
        }

        .pos-page .hero-badge {
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

        .pos-page .hero h1 {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .pos-page .hero p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 30px;
          opacity: 0.9;
        }

        .pos-page .hero-cta {
          display: inline-block;
          background: var(--brand-cyan);
          color: var(--brand-navy);
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pos-page .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
        }

        .pos-page .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .pos-page h2 {
          font-family: 'Oswald', sans-serif;
          font-size: 2rem;
          color: var(--brand-navy);
          margin-bottom: 20px;
          margin-top: 60px;
        }

        .pos-page h2:first-of-type {
          margin-top: 0;
        }

        .pos-page h3 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.4rem;
          color: var(--brand-navy);
          margin-bottom: 15px;
          margin-top: 35px;
        }

        .pos-page p {
          margin-bottom: 16px;
        }

        .pos-page .intro-box {
          background: linear-gradient(135deg, var(--brand-navy) 0%, #2d3a52 100%);
          color: var(--white);
          padding: 30px;
          border-radius: 16px;
          margin-bottom: 40px;
        }

        .pos-page .intro-box h3 {
          color: var(--brand-cyan);
          margin-top: 0;
        }

        .pos-page .requirements-box {
          background: var(--bg-light);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 40px;
        }

        .pos-page .requirements-box h3 {
          margin-top: 0;
          margin-bottom: 20px;
        }

        .pos-page .requirements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .pos-page .requirement-item {
          background: var(--white);
          padding: 16px 20px;
          border-radius: 8px;
          border-left: 4px solid var(--brand-cyan);
        }

        .pos-page .requirement-item h4 {
          font-family: 'Oswald', sans-serif;
          font-size: 1rem;
          color: var(--brand-navy);
          margin-bottom: 6px;
        }

        .pos-page .requirement-item p {
          font-size: 0.9rem;
          margin-bottom: 0;
          color: var(--text-light);
        }

        .pos-page .requirement-item a {
          color: var(--brand-blue);
          text-decoration: none;
        }

        .pos-page .requirement-item a:hover {
          text-decoration: underline;
        }

        .pos-page .warning-box {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border-left: 4px solid var(--brand-red);
          padding: 20px 24px;
          border-radius: 0 12px 12px 0;
          margin: 20px 0;
        }

        .pos-page .warning-box h4 {
          font-family: 'Oswald', sans-serif;
          color: #991b1b;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .pos-page .warning-box p {
          color: #7f1d1d;
          margin-bottom: 0;
        }

        .pos-page .warning-box ul {
          color: #7f1d1d;
          margin: 12px 0 0 20px;
        }

        .pos-page .warning-box li {
          margin-bottom: 4px;
        }

        .pos-page .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 30px 0;
        }

        .pos-page .why-card {
          background: var(--bg-light);
          padding: 24px;
          border-radius: 12px;
          border-left: 4px solid var(--brand-cyan);
        }

        .pos-page .why-card h4 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.1rem;
          color: var(--brand-navy);
          margin-bottom: 10px;
        }

        .pos-page .why-card p {
          font-size: 0.95rem;
          margin-bottom: 0;
        }

        .pos-page .folder-structure {
          background: var(--brand-navy);
          padding: 30px;
          border-radius: 12px;
          overflow-x: auto;
          margin: 20px 0;
        }

        .pos-page .folder-structure pre {
          font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
          color: var(--brand-cyan);
          white-space: pre;
        }

        .pos-page .folder-structure .folder {
          color: var(--brand-sky);
          font-weight: 600;
        }

        .pos-page .folder-structure .file {
          color: #94a3b8;
        }

        .pos-page .folder-structure .comment {
          color: #64748b;
          font-style: italic;
        }

        .pos-page .code-block {
          background: #1e293b;
          padding: 24px;
          border-radius: 12px;
          overflow-x: auto;
          margin: 20px 0;
        }

        .pos-page .code-block pre {
          font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
          font-size: 0.85rem;
          line-height: 1.7;
          margin: 0;
          color: #e2e8f0;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        .pos-page .code-block .header {
          color: var(--brand-cyan);
          font-weight: 600;
        }

        .pos-page .code-block .keyword {
          color: var(--brand-purple);
          font-weight: 600;
        }

        .pos-page .code-block .string {
          color: #86efac;
        }

        .pos-page .code-block .comment {
          color: #64748b;
        }

        .pos-page .code-block .bullet {
          color: var(--brand-cyan);
        }

        .pos-page .prompt-box {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border: 2px solid #86efac;
          border-radius: 12px;
          padding: 24px;
          margin: 20px 0;
        }

        .pos-page .prompt-box h4 {
          font-family: 'Oswald', sans-serif;
          color: #166534;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .pos-page .prompt-box p {
          color: #166534;
          font-size: 0.95rem;
          margin-bottom: 12px;
        }

        .pos-page .prompt-box pre {
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

        .pos-page .step {
          background: var(--white);
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 30px;
          margin: 30px 0;
          position: relative;
        }

        .pos-page .step-number {
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

        .pos-page .step h3 {
          margin-top: 10px;
        }

        .pos-page .step h4 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.1rem;
          color: var(--brand-navy);
          margin: 25px 0 12px 0;
        }

        .pos-page .step h4:first-of-type {
          margin-top: 20px;
        }

        .pos-page .substep {
          background: var(--bg-light);
          border-radius: 8px;
          padding: 16px 20px;
          margin: 12px 0;
        }

        .pos-page .substep p {
          margin-bottom: 8px;
          font-size: 0.95rem;
        }

        .pos-page .substep p:last-child {
          margin-bottom: 0;
        }

        .pos-page .explanation {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-left: 4px solid var(--brand-blue);
          padding: 20px 24px;
          border-radius: 0 12px 12px 0;
          margin: 20px 0;
        }

        .pos-page .explanation strong {
          color: var(--brand-navy);
        }

        .pos-page .tool-box {
          background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
          border-left: 4px solid var(--brand-purple);
          padding: 20px 24px;
          border-radius: 0 12px 12px 0;
          margin: 20px 0;
        }

        .pos-page .tool-box strong {
          color: var(--brand-navy);
        }

        .pos-page .tool-box h4 {
          font-family: 'Oswald', sans-serif;
          color: var(--brand-navy);
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .pos-page ul, .pos-page ol {
          margin: 16px 0 16px 24px;
        }

        .pos-page li {
          margin-bottom: 10px;
        }

        .pos-page .skill-card {
          background: var(--white);
          border: 2px solid var(--brand-cyan);
          border-radius: 12px;
          padding: 24px;
          margin: 20px 0;
        }

        .pos-page .skill-card h4 {
          font-family: 'Oswald', sans-serif;
          color: var(--brand-navy);
          font-size: 1.3rem;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pos-page .skill-card h4 code {
          background: var(--brand-cyan);
          color: var(--brand-navy);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 1rem;
        }

        .pos-page code {
          background: #f1f5f9;
          color: var(--brand-navy);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
          font-size: 0.9em;
        }

        .pos-page .workflow-box {
          background: var(--white);
          border: 2px solid var(--brand-purple);
          border-radius: 12px;
          padding: 24px;
          margin: 20px 0;
        }

        .pos-page .workflow-box h4 {
          font-family: 'Oswald', sans-serif;
          color: var(--brand-navy);
          margin-bottom: 16px;
          font-size: 1.2rem;
        }

        .pos-page .workflow-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }

        .pos-page .workflow-item:last-child {
          margin-bottom: 0;
        }

        .pos-page .workflow-icon {
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

        .pos-page .workflow-content h5 {
          font-family: 'Oswald', sans-serif;
          color: var(--brand-navy);
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .pos-page .workflow-content p {
          font-size: 0.9rem;
          margin-bottom: 0;
          color: var(--text-light);
        }

        .pos-page .cta-section {
          background: linear-gradient(135deg, var(--brand-navy) 0%, #2d3a52 100%);
          color: var(--white);
          padding: 50px 30px;
          border-radius: 16px;
          text-align: center;
          margin-top: 60px;
        }

        .pos-page .cta-section h2 {
          color: var(--white);
          margin-top: 0;
        }

        .pos-page .cta-section p {
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 30px;
        }

        .pos-page .cta-button {
          display: inline-block;
          background: var(--brand-cyan);
          color: var(--brand-navy);
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pos-page .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
        }

        .pos-page .page-footer {
          text-align: center;
          padding: 40px 20px;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .pos-page .page-footer a {
          color: var(--brand-blue);
          text-decoration: none;
        }

        .pos-page .toc {
          background: var(--bg-light);
          border-radius: 12px;
          padding: 24px 30px;
          margin-bottom: 40px;
        }

        .pos-page .toc h3 {
          margin-top: 0;
          margin-bottom: 16px;
        }

        .pos-page .toc ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .pos-page .toc li {
          margin-bottom: 8px;
        }

        .pos-page .toc a {
          color: var(--brand-blue);
          text-decoration: none;
          font-weight: 500;
        }

        .pos-page .toc a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .pos-page .hero {
            padding: 60px 20px;
          }

          .pos-page .container {
            padding: 40px 20px;
          }

          .pos-page .step {
            padding: 25px 20px;
          }

          .pos-page .folder-structure pre,
          .pos-page .code-block pre {
            font-size: 0.8rem;
          }

          .pos-page .requirements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      <div className="pos-page">
        <section className="hero">
          <span className="hero-badge">Foundation Guide</span>
          <h1>The Shape of a<br />Personal OS for Claude</h1>
          <p>A folder of markdown files that turns Claude from a chatbot into a coworker who knows your work.</p>
          <a href="#setup" className="hero-cta">Jump to Setup</a>
        </section>

        <main className="container">
          <nav className="toc">
            <h3>What&apos;s in This Guide</h3>
            <ul>
              <li><a href="#what-it-is">What a Personal OS Actually Is</a></li>
              <li><a href="#requirements">What You&apos;ll Need</a></li>
              <li><a href="#why-structure">Why Structure Matters</a></li>
              <li><a href="#folder-structure">The Folder Layout</a></li>
              <li><a href="#claude-md">CLAUDE.md: The File Claude Reads First</a></li>
              <li><a href="#setup">Day-1 Setup</a></li>
              <li><a href="#daily-rhythm">Your Daily Rhythm</a></li>
              <li><a href="#starting-rules">Rules I&apos;d Give Myself If Starting Over</a></li>
            </ul>
          </nav>

          <div className="intro-box" id="what-it-is">
            <h3>What a Personal OS Actually Is</h3>
            <p>A folder on your computer. Inside it, markdown files for your projects, your notes, your tasks. One special file at the root called <code style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--brand-cyan)' }}>CLAUDE.md</code> that tells Claude how to behave when you open this folder.</p>
            <p style={{ marginBottom: 0 }}>That&apos;s the whole system. The leverage comes from the fact that Claude reads your CLAUDE.md every time you start a session, so you stop re-explaining who you are and what you&apos;re working on. Claude already knows.</p>
          </div>

          <div className="requirements-box" id="requirements">
            <h3>What You&apos;ll Need</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>VS Code</h4>
                <p>Free editor. Claude Code runs inside it.<br /><a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">Download here</a></p>
              </div>
              <div className="requirement-item">
                <h4>Claude Pro or Max</h4>
                <p>The subscription that powers Claude Code.<br /><a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Subscribe here</a></p>
              </div>
              <div className="requirement-item">
                <h4>That&apos;s it</h4>
                <p>No Obsidian, no notes app, no cloud sync. Markdown renders beautifully in VS Code&apos;s preview pane.</p>
              </div>
            </div>

            <div className="tool-box">
              <h4>A note on viewing your notes</h4>
              <p>When you want to read a markdown file like a document instead of editing it, hit <code>Cmd+Shift+V</code> (Mac) or <code>Ctrl+Shift+V</code> (Windows) in VS Code. It opens a preview pane with formatted headings, lists, and links. This is how I read my daily agenda every morning. A separate notes app would be doing the same thing twice.</p>
            </div>

            <div className="warning-box">
              <h4>Important: Keep Sensitive Information Out</h4>
              <p>Claude can read any file in your Personal OS folder. <strong>Do not store:</strong></p>
              <ul>
                <li>Passwords, API keys, or credentials</li>
                <li>Social Security numbers or government IDs</li>
                <li>Financial account numbers</li>
                <li>Medical records or health information</li>
                <li>Confidential work documents your employer hasn&apos;t approved for AI use</li>
                <li>Other people&apos;s personal information without consent</li>
              </ul>
              <p style={{ marginTop: 12, marginBottom: 0 }}>If a sensitive project needs context, write a note describing the project without the sensitive data inside.</p>
            </div>
          </div>

          <h2 id="why-structure">Why Structure Matters</h2>
          <p>Without it, every conversation with Claude starts from scratch. You re-explain your role, your projects, your preferences. Claude gives generic advice because it has no idea what you&apos;re actually doing.</p>
          <p>With a Personal OS, the structure gives Claude memory:</p>

          <div className="why-grid">
            <div className="why-card">
              <h4>Claude Reads Your Files</h4>
              <p>The CLAUDE.md at the root loads automatically at the start of every session. Claude knows your role, your active projects, and your rules before you type a word.</p>
            </div>
            <div className="why-card">
              <h4>Nested Context</h4>
              <p>Each project can have its own CLAUDE.md. When you navigate into that folder, Claude inherits the project-specific instructions on top of the global ones.</p>
            </div>
            <div className="why-card">
              <h4>Tasks That Travel</h4>
              <p>Tasks live as markdown files with structured metadata. Skills like <code>/today</code> scan the whole vault and build a daily agenda automatically.</p>
            </div>
            <div className="why-card">
              <h4>The System Grows</h4>
              <p>Every time you correct Claude or teach it something, that lesson gets saved. Next week, Claude already knows. The system compounds.</p>
            </div>
          </div>

          <h2 id="folder-structure">The Folder Layout</h2>
          <p>The vault uses a numbered folder system based on the PARA method (Projects, Areas, Resources, Archives). Numbers keep things in a stable order regardless of which file browser you use.</p>

          <div className="folder-structure">
            <pre><span className="folder">Personal_OS/</span>{`
│
├── `}<span className="folder">00_Inbox/</span>             <span className="comment"># Daily agendas, quick captures, unsorted</span>{`
│
├── `}<span className="folder">10_Projects/</span>          <span className="comment"># Active work with deadlines or outcomes</span>{`
│
├── `}<span className="folder">20_Areas/</span>             <span className="comment"># Ongoing responsibilities (no end date)</span>{`
│   ├── `}<span className="folder">Calls/</span>            <span className="comment"># Meeting notes</span>{`
│   ├── `}<span className="folder">People/</span>           <span className="comment"># Contact profiles</span>{`
│   └── `}<span className="folder">Companies/</span>        <span className="comment"># Org wiki entries</span>{`
│
├── `}<span className="folder">30_Resources/</span>         <span className="comment"># Reference materials, research, templates</span>{`
│
├── `}<span className="folder">40_Archives/</span>          <span className="comment"># Completed projects, old work</span>{`
│
├── `}<span className="folder">50_Personal/</span>          <span className="comment"># Personal projects, kept separate from work</span>{`
│
├── `}<span className="folder">99_System/</span>            <span className="comment"># Configuration, profiles, scripts</span>{`
│   │
│   ├── `}<span className="folder">Context_Library/</span>{`
│   │   ├── `}<span className="file">business_profile.md</span>{`
│   │   └── `}<span className="folder">project_specs/</span>{`
│   │
│   └── `}<span className="folder">Scripts/</span>{`
│
├── `}<span className="folder">Apps/</span>                 <span className="comment"># Software projects (peer of PARA, not nested)</span>{`
│
└── `}<span className="file">CLAUDE.md</span>             <span className="comment"># The brain — Claude reads this first</span></pre>
          </div>

          <div className="explanation">
            <strong>Why numbered folders?</strong> They always sort in the same order. <code>00</code> comes first (your inbox, where you capture things fast), <code>99</code> comes last (system files you rarely touch). PARA gives you a stable mental model: Projects have deadlines, Areas are ongoing, Resources are reference material, Archives are done.
          </div>

          <div className="explanation">
            <strong>Why <code>Apps/</code> as a peer of PARA?</strong> If you build software inside your vault — websites, scripts, small tools — they need their own top-level folder. They don&apos;t fit cleanly into Projects (which assume markdown notes) and they shouldn&apos;t be buried in Resources. <code>Apps/</code> keeps them visible and easy to deploy.
          </div>

          <h2 id="claude-md">CLAUDE.md: The File Claude Reads First</h2>
          <p>This is the most important file in your system. Claude reads it automatically when you start a session inside this folder. It tells Claude who it is in your world, where things live, and how to behave.</p>

          <div className="code-block">
            <pre><span className="header">## Role</span>{`

Chief of Staff for Personal Operating System.
Manage tasks, organize information, facilitate research
with precision and low friction.


`}<span className="header">## Who I Am</span>{`

[Your name] — [your title] at [your organization].
[One sentence of context: industry, focus, what you care about.]


`}<span className="header">## Core Behavior</span>{`

`}<span className="bullet">-</span>{` When I ask for a change, ALWAYS edit the file directly.
  Never just show me the fix.
`}<span className="bullet">-</span>{` Keep changes minimal — touch only what's necessary.
`}<span className="bullet">-</span>{` Read local files before asking for context.
`}<span className="bullet">-</span>{` Confirm before deleting; edit freely if aligned.
`}<span className="bullet">-</span>{` Concise responses — no lectures.


`}<span className="header">## Architecture</span>{`

PARA-based vault:
`}<span className="bullet">-</span>{` `}<span className="string">`00_Inbox/`</span>{` capture and triage
`}<span className="bullet">-</span>{` `}<span className="string">`10_Projects/`</span>{` active projects (each can have its own CLAUDE.md)
`}<span className="bullet">-</span>{` `}<span className="string">`20_Areas/`</span>{` ongoing areas (Calls, People, Companies)
`}<span className="bullet">-</span>{` `}<span className="string">`40_Archives/`</span>{` — never search or modify unless asked


`}<span className="header">## Task Schema</span>{`

`}<span className="string">{'```yaml'}</span>{`
`}<span className="keyword">type:</span>{` task
`}<span className="keyword">status:</span>{` [todo, in-progress, done, waiting]
`}<span className="keyword">created:</span>{` YYYY-MM-DD
`}<span className="keyword">due_date:</span>{` YYYY-MM-DD
`}<span className="keyword">priority:</span>{` [high, medium, low]
`}<span className="keyword">tags:</span>{` []
`}<span className="string">{'```'}</span></pre>
          </div>

          <div className="explanation">
            <strong>Why this works:</strong> Claude reads this once at the start of the session and behaves accordingly for the entire conversation. The task schema is especially load-bearing — every task Claude creates uses these exact field names, so skills like <code>/today</code> can find them reliably.
          </div>

          <h3>Nested CLAUDE.md Files</h3>
          <p>Each project can have its own CLAUDE.md. Claude reads them hierarchically — the root one always, then any project-specific one when you&apos;re working in that folder.</p>

          <div className="folder-structure">
            <pre><span className="folder">Personal_OS/</span>{`
│
├── `}<span className="file">CLAUDE.md</span>                        <span className="comment"># Always loads</span>{`
│
└── `}<span className="folder">10_Projects/</span>{`
    │
    └── `}<span className="folder">Website_Redesign/</span>{`
        │
        ├── `}<span className="file">CLAUDE.md</span>                <span className="comment"># Loads when working in this folder</span>{`
        └── `}<span className="file">project_brief.md</span></pre>
          </div>

          <p>The project-level file is where you put context that only matters for this project:</p>
          <ul>
            <li>This is a React project — use TypeScript</li>
            <li>The client prefers minimalist design, no gradients</li>
            <li>Always run tests before declaring done</li>
            <li>Design files are in Figma at [link]</li>
            <li>Deployment is GitHub Actions to AWS</li>
          </ul>

          <div className="explanation">
            <strong>The pattern that matters:</strong> Global behavior at the root, project-specific behavior in the project. Don&apos;t put project details in the root CLAUDE.md — they pollute every session. Don&apos;t put global rules in project CLAUDE.md files — they only apply when you&apos;re in that folder.
          </div>

          <h2 id="setup">Day-1 Setup</h2>
          <p>Claude does most of the work. You install the tools, create one empty folder, and paste a few prompts.</p>

          <div className="step">
            <span className="step-number">1</span>
            <h3>Install VS Code</h3>
            <p>Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a> and run the installer. Default settings are fine.</p>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <h3>Install Claude Code</h3>
            <div className="substep">
              <p>Open VS Code. Click the Extensions icon in the left sidebar, or press <code>Cmd+Shift+X</code> (Mac) / <code>Ctrl+Shift+X</code> (Windows).</p>
            </div>
            <div className="substep">
              <p>Search for &quot;Claude&quot; and install the official extension by Anthropic. Sign in with your Claude account when prompted.</p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <h3>Create Your Personal_OS Folder</h3>
            <p>One empty folder. This is the only thing you need to do manually.</p>

            <h4>On Mac:</h4>
            <div className="substep">
              <p>Finder → Documents → Right-click → New Folder → name it <code>Personal_OS</code></p>
            </div>

            <h4>On Windows:</h4>
            <div className="substep">
              <p>File Explorer → Documents → Right-click → New → Folder → name it <code>Personal_OS</code></p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">4</span>
            <h3>Open the Folder in VS Code</h3>
            <div className="substep">
              <p>VS Code: File → Open Folder → select your <code>Personal_OS</code> folder → Open.</p>
            </div>
            <div className="substep">
              <p>If VS Code asks &quot;Do you trust the authors?&quot;, click &quot;Yes.&quot;</p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">5</span>
            <h3>Have Claude Build the Structure</h3>
            <p>Open the Claude Code panel and paste this prompt:</p>

            <div className="prompt-box">
              <h4>Copy and paste into Claude:</h4>
              <pre>{`Please set up a Personal OS for me. Create:

1. These folders:
   - 00_Inbox
   - 10_Projects
   - 20_Areas
   - 20_Areas/Calls
   - 20_Areas/People
   - 20_Areas/Companies
   - 30_Resources
   - 40_Archives
   - 50_Personal
   - 99_System/Context_Library/project_specs
   - 99_System/Scripts
   - Apps

2. A CLAUDE.md file at the root with:
   - A "Role" section: you are my Chief of Staff for this vault
   - A "Who I Am" section: [add my name, title, organization]
   - A "Core Behavior" section: edit files directly, keep changes
     minimal, read local files before asking, confirm before deleting,
     concise responses
   - An "Architecture" section describing the folders above
   - A "Task Schema" section with the YAML format for tasks
     (type, status, created, due_date, priority, tags)

3. A Someday_Maybe.md in 20_Areas/ with sections for Ideas,
   Long-Term Projects, Things to Explore, Wishlist.

Create everything now.`}</pre>
            </div>

            <p>Claude creates all the folders and files. You&apos;ll see them appear in VS Code&apos;s file explorer on the left.</p>
          </div>

          <div className="step">
            <span className="step-number">6</span>
            <h3>Install Your First Two Skills</h3>
            <p>Skills are folders inside <code>~/.claude/skills/</code> with a <code>SKILL.md</code> file describing what they do. Claude reads the descriptions and triggers them when relevant. The <code>/</code> prefix is shorthand to force a specific skill to run.</p>

            <p>Paste this prompt into Claude:</p>

            <div className="prompt-box">
              <h4>Copy and paste into Claude:</h4>
              <pre>{`Please create two skills for me.

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
description: End-of-day ritual — captures what moved, what didn't, and what's queued for tomorrow.
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

Create both skills now.`}</pre>
            </div>
          </div>

          <div className="step">
            <span className="step-number">7</span>
            <h3>Test It</h3>
            <p>Type <code>/today</code> in the Claude chat. Claude creates your first daily agenda file in <code>00_Inbox/</code>. Open it in VS Code and hit <code>Cmd+Shift+V</code> to preview it formatted.</p>

            <div className="explanation">
              <strong>That&apos;s the whole foundation.</strong> A folder, a CLAUDE.md, two skills. Everything from here is iteration — adding skills as you find friction, evolving CLAUDE.md as you discover rules worth keeping.
            </div>
          </div>

          <h2 id="daily-rhythm">Your Daily Rhythm</h2>
          <p>Two skills are enough to anchor a day. Here&apos;s what it looks like in practice:</p>

          <div className="skill-card">
            <h4><code>/today</code> — Morning</h4>
            <p>First thing, open VS Code, type <code>/today</code> in the Claude chat. Claude scans the vault for tasks with due dates, builds a grouped agenda (overdue, today, this week, next week), and writes it to <code>00_Inbox/YYYY-MM-DD_Agenda.md</code>.</p>
            <p style={{ marginBottom: 0 }}><strong>Then:</strong> open the agenda file, hit <code>Cmd+Shift+V</code>, and you have a formatted to-do list next to your chat panel.</p>
          </div>

          <div className="skill-card">
            <h4><code>/shutdown</code> — End of Day</h4>
            <p>Before closing your laptop, type <code>/shutdown</code>. Claude reviews today&apos;s agenda, asks what moved and what didn&apos;t, and writes a one-paragraph summary at the bottom of today&apos;s agenda file. Includes tomorrow&apos;s top 3 candidates.</p>
            <p style={{ marginBottom: 0 }}><strong>The next morning</strong>, <code>/today</code> can read yesterday&apos;s shutdown notes and carry the queue forward.</p>
          </div>

          <h2 id="starting-rules">Rules I&apos;d Give Myself If Starting Over</h2>
          <ul>
            <li><strong>Let Claude file things.</strong> Don&apos;t manually create folders or move files. Just say &quot;create a new project for the Q1 marketing plan&quot; or &quot;file this transcript in the right place.&quot; Claude knows the structure.</li>
            <li><strong>Use the Inbox liberally.</strong> When you don&apos;t know where something goes, drop it in <code>00_Inbox/</code> and ask Claude to triage it later.</li>
            <li><strong>Don&apos;t preload context.</strong> Resist the urge to dump everything into the root CLAUDE.md. Claude reads what it needs. Profile files and project specs should load on demand, not automatically.</li>
            <li><strong>When something annoys you, write a rule.</strong> If Claude does something that makes you pause — explains instead of editing, creates a file in the wrong place, fabricates a stat — turn it into a one-line rule in CLAUDE.md. Two weeks of this and 90% of the friction disappears.</li>
            <li><strong>Archive aggressively.</strong> Done projects go to <code>40_Archives/</code>. Keep <code>10_Projects/</code> small enough that you can scan it in one glance.</li>
            <li><strong>Ask Claude when you&apos;re stuck.</strong> &quot;How should I organize my consulting clients?&quot; or &quot;Build me a template for kickoff meetings.&quot; The system bends to your needs, not the other way around.</li>
          </ul>

          <div className="cta-section">
            <h2>That&apos;s the Foundation</h2>
            <p>A folder, a CLAUDE.md, two skills. From here, the real leverage comes from how the system compounds — memory that persists, skills that automate your real workflows, capture pipelines that feed the vault while you sleep, and a voice system that lets Claude write like you.</p>
            <Link href="/personal-os-2" className="cta-button">Read How It Compounds →</Link>
          </div>
        </main>

        <footer className="page-footer">
          <p>Created by <Link href="/">Janette Roush</Link> | Agents of Change</p>
          <p style={{ marginTop: 8, fontSize: '0.85rem' }}>This guide is part of the AI Lab for Travel Innovation.</p>
        </footer>
      </div>
    </>
  )
}
