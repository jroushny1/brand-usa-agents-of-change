import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Set Up Your Personal OS for Claude Code | Agents of Change',
  description: 'A simple file system that helps AI understand your work and become a true productivity partner. Free guide for Claude Code users.',
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
          <span className="hero-badge">Free Guide</span>
          <h1>Set Up Your Personal OS<br />for Claude Code</h1>
          <p>A simple file system that helps AI understand your work and become a true productivity partner.</p>
          <a href="#step-by-step" className="hero-cta">Jump to Setup Instructions</a>
        </section>

        <main className="container">
          <nav className="toc">
            <h3>What&apos;s in This Guide</h3>
            <ul>
              <li><a href="#what-is">What is a Personal OS?</a></li>
              <li><a href="#requirements">What You&apos;ll Need</a></li>
              <li><a href="#why-matters">Why This Matters</a></li>
              <li><a href="#folder-structure">The Folder Structure</a></li>
              <li><a href="#claude-md">The CLAUDE.md File</a></li>
              <li><a href="#tools">Obsidian + VS Code: How They Work Together</a></li>
              <li><a href="#slash-commands">The Slash Commands (/today and /log)</a></li>
              <li><a href="#step-by-step">Setup Instructions</a></li>
              <li><a href="#tips">Tips for Success</a></li>
            </ul>
          </nav>

          <div className="intro-box" id="what-is">
            <h3>What is a Personal OS?</h3>
            <p>A Personal OS is just a folder structure on your computer with a few special files that help Claude (or any AI assistant) understand who you are, what you&apos;re working on, and how you like to work.</p>
            <p style={{ marginBottom: 0 }}>Think of it as giving Claude a map of your brain. Instead of explaining your projects and preferences every time, Claude already knows.</p>
          </div>

          <div className="requirements-box" id="requirements">
            <h3>What You&apos;ll Need</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>VS Code</h4>
                <p>Free code editor where Claude Code runs.<br /><a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">Download here</a></p>
              </div>
              <div className="requirement-item">
                <h4>Claude Pro or Max Account</h4>
                <p>Paid subscription required for Claude Code.<br /><a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Subscribe here</a></p>
              </div>
              <div className="requirement-item">
                <h4>Obsidian</h4>
                <p>Free note-taking app for viewing your files.<br /><a href="https://obsidian.md" target="_blank" rel="noopener noreferrer">Download here</a></p>
              </div>
            </div>

            <div className="warning-box">
              <h4>Important: Keep Sensitive Information Out</h4>
              <p>Claude can read any files in your Personal OS folder. <strong>Do not store:</strong></p>
              <ul>
                <li>Passwords, API keys, or credentials</li>
                <li>Social Security numbers or government IDs</li>
                <li>Financial account numbers</li>
                <li>Medical records or health information</li>
                <li>Confidential work documents your employer hasn&apos;t approved for AI use</li>
                <li>Other people&apos;s personal information without consent</li>
              </ul>
              <p style={{ marginTop: 12, marginBottom: 0 }}>If you need to reference sensitive projects, create a note that describes the project without including the actual sensitive data.</p>
            </div>
          </div>

          <h2 id="why-matters">Why This Matters</h2>
          <p>Without structure, every conversation with AI starts from scratch. You waste time re-explaining context. Claude gives generic advice because it doesn&apos;t know your situation.</p>
          <p>With a Personal OS, everything changes:</p>

          <div className="why-grid">
            <div className="why-card">
              <h4>Persistent Memory</h4>
              <p>Claude reads your files at the start of each session. It remembers your projects, preferences, and history.</p>
            </div>
            <div className="why-card">
              <h4>Instant Context</h4>
              <p>No more &quot;I&apos;m working on a presentation about...&quot; Just ask for help and Claude already knows what you&apos;re doing.</p>
            </div>
            <div className="why-card">
              <h4>Better Suggestions</h4>
              <p>Because Claude understands your work patterns and goals, its suggestions fit your actual situation.</p>
            </div>
            <div className="why-card">
              <h4>Task Tracking</h4>
              <p>Built-in commands scan your files for tasks due today, creating automatic daily agendas.</p>
            </div>
          </div>

          <h2 id="folder-structure">The Folder Structure</h2>
          <p>Your Personal OS uses a numbered folder system based on the PARA method (Projects, Areas, Resources, Archives). The numbers keep things sorted in a logical order.</p>

          <div className="folder-structure">
            <pre><span className="folder">Personal_OS/</span>{`
│
├── `}<span className="folder">00_Inbox/</span>             <span className="comment"># Daily agendas and quick captures</span>{`
│
├── `}<span className="folder">10_Projects/</span>          <span className="comment"># Active work with deadlines</span>{`
│
├── `}<span className="folder">20_Areas/</span>             <span className="comment"># Ongoing responsibilities (no deadline)</span>{`
│
├── `}<span className="folder">30_Resources/</span>         <span className="comment"># Reference materials, templates</span>{`
│
├── `}<span className="folder">40_Archives/</span>          <span className="comment"># Completed or inactive items</span>{`
│
├── `}<span className="folder">99_System/</span>            <span className="comment"># Configuration, profiles, scripts</span>{`
│   │
│   ├── `}<span className="folder">Context_Library/</span>{`
│   │   ├── `}<span className="file">business_profile.md</span>{`
│   │   ├── `}<span className="file">personal_profile.md</span>{`
│   │   └── `}<span className="folder">project_specs/</span>{`
│   │
│   ├── `}<span className="folder">Profiles/</span>{`
│   │   ├── `}<span className="file">writing_profile.md</span>{`
│   │   └── `}<span className="file">coding_profile.md</span>{`
│   │
│   └── `}<span className="folder">Scripts/</span>{`
│       └── `}<span className="file">task_scanner.py</span>{`
│
└── `}<span className="file">CLAUDE.md</span>             <span className="comment"># The brain - Claude reads this first</span></pre>
          </div>

          <div className="explanation">
            <strong>Why numbered folders?</strong> They always sort in the same order, regardless of what file browser you use. 00 comes first (your inbox), 99 comes last (system files you rarely touch).
          </div>

          <h2 id="claude-md">The CLAUDE.md File</h2>
          <p>This is the most important file in your system. Claude reads it automatically when you start working in this folder. It tells Claude who it is in your world and how to behave.</p>

          <div className="code-block">
            <pre><span className="header">## Role</span>{`

Chief of Staff for Personal Operating System.
Manage tasks, organize information, facilitate research
with precision and low friction.


`}<span className="header">## Architecture</span>{`

`}<span className="bullet">-</span> <span className="keyword">Root:</span>{` Obsidian Vault
`}<span className="bullet">-</span> <span className="keyword">Tasks:</span>{` Markdown files in `}<span className="string">`10_Projects/`</span>{` and `}<span className="string">`00_Inbox/`</span>{`
`}<span className="bullet">-</span> <span className="keyword">Archive:</span>{` Never search/modify `}<span className="string">`40_Archives/`</span>{` unless explicitly asked


`}<span className="header">## Behavioral Guidelines</span>{`

1. Read local files before asking for context
2. Concise, actionable responses - no lectures
3. Confirm before deleting; edit freely if aligned with request
4. Today is {{DATE}} - calculate relative dates accordingly


`}<span className="header">## Context & Profiles</span>{`

Profiles and project specs live in `}<span className="string">`99_System/`</span>{`.
Load `}<span className="keyword">only</span>{` when explicitly requested:

`}<span className="bullet">-</span>{` "Writing Mode" → `}<span className="string">`Profiles/writing_profile.md`</span>{`
`}<span className="bullet">-</span>{` "Coding Mode" → `}<span className="string">`Profiles/coding_profile.md`</span>{`
`}<span className="bullet">-</span>{` Project work → relevant spec in `}<span className="string">`Context_Library/project_specs/`</span>{`

`}<span className="keyword">Do NOT preload profiles based on inferred task type.</span></pre>
          </div>

          <div className="explanation">
            <strong>Why this structure?</strong> The CLAUDE.md file gives Claude just enough context to be helpful without overloading it. It knows where your tasks live, what to avoid touching, and when to load additional context.
          </div>

          <h3>Nested CLAUDE.md Files</h3>
          <p>Here&apos;s where it gets powerful: you can put CLAUDE.md files inside specific project folders too. Claude reads them hierarchically, from the root down to wherever you&apos;re working.</p>

          <div className="folder-structure">
            <pre><span className="folder">Personal_OS/</span>{`
│
├── `}<span className="file">CLAUDE.md</span>                        <span className="comment"># Global instructions</span>{`
│
└── `}<span className="folder">10_Projects/</span>{`
    │
    └── `}<span className="folder">My_Website_Redesign/</span>{`
        │
        ├── `}<span className="file">CLAUDE.md</span>                <span className="comment"># Project-specific instructions</span>{`
        ├── `}<span className="file">process_notes.md</span>        <span className="comment"># Session history</span>{`
        └── `}<span className="file">Website_Redesign.md</span>     <span className="comment"># Project details</span></pre>
          </div>

          <p>The project-level CLAUDE.md might say things like:</p>
          <ul>
            <li>This is a React project - use TypeScript</li>
            <li>The client prefers minimalist design</li>
            <li>Always run tests before suggesting we&apos;re done</li>
            <li>Design files are in Figma at [link]</li>
          </ul>

          <div className="explanation">
            <strong>Why nested files?</strong> Different projects have different needs. A coding project needs different instructions than a writing project. Nested CLAUDE.md files let you customize Claude&apos;s behavior for each context.
          </div>

          <h3>Process Notes: Your Project Memory</h3>
          <p>Each project can have a <code>process_notes.md</code> file that tracks what happened in each work session. This is how Claude remembers what you did yesterday, what decisions you made, and what&apos;s still pending.</p>

          <div className="code-block">
            <pre><span className="header"># Process Notes: Website Redesign</span>{`

Session logs documenting decisions, progress, and context.

---

`}<span className="header">## 2026-01-23 - Homepage Layout</span>{`

`}<span className="keyword">Summary:</span>{`
Finalized hero section design and implemented
mobile responsive layout.

`}<span className="keyword">Changes:</span>{`
`}<span className="bullet">-</span>{` Updated Header.tsx with new navigation
`}<span className="bullet">-</span>{` Created HeroSection component
`}<span className="bullet">-</span>{` Added mobile breakpoints to global CSS

`}<span className="keyword">Decisions:</span>{`
`}<span className="bullet">-</span>{` Using CSS Grid instead of Flexbox for main layout
`}<span className="bullet">-</span>{` Client approved blue color palette

`}<span className="keyword">Open:</span>{`
`}<span className="bullet">-</span>{` [ ] Add animation to hero section
`}<span className="bullet">-</span>{` [ ] Get client feedback on footer design`}</pre>
          </div>

          <h2 id="tools">Obsidian + VS Code: How They Work Together</h2>
          <p>These two tools serve different purposes in your workflow:</p>

          <div className="workflow-box">
            <h4>Your Daily Workflow</h4>
            <div className="workflow-item">
              <div className="workflow-icon">1</div>
              <div className="workflow-content">
                <h5>Obsidian = Viewing &amp; Navigating</h5>
                <p>Use Obsidian to browse your notes, read project files, check your daily agenda, and navigate between linked documents. It&apos;s your &quot;reading&quot; interface.</p>
              </div>
            </div>
            <div className="workflow-item">
              <div className="workflow-icon">2</div>
              <div className="workflow-content">
                <h5>VS Code + Claude = Working &amp; Creating</h5>
                <p>Use VS Code when you want Claude&apos;s help. This is where you run slash commands, ask Claude to write or edit files, create new projects, and do actual work.</p>
              </div>
            </div>
            <div className="workflow-item">
              <div className="workflow-icon">3</div>
              <div className="workflow-content">
                <h5>Both Open at Once</h5>
                <p>Keep both apps open. Changes sync instantly because they&apos;re reading the same files on your computer.</p>
              </div>
            </div>
          </div>

          <h3>Why Obsidian?</h3>
          <p>Obsidian is a free app for writing and organizing notes. It works with plain text files (Markdown) stored on your computer. Here&apos;s why it&apos;s perfect for a Personal OS:</p>

          <div className="why-grid">
            <div className="why-card">
              <h4>Your Files, Your Computer</h4>
              <p>Unlike Notion or Google Docs, your notes are just files on your hard drive. No internet required. You own them forever.</p>
            </div>
            <div className="why-card">
              <h4>Complete Privacy</h4>
              <p>Your notes never leave your computer unless you choose to share them. No cloud sync required. No company reading your data.</p>
            </div>
            <div className="why-card">
              <h4>Plain Text = Future-Proof</h4>
              <p>Markdown files work everywhere. If Obsidian disappears tomorrow, your files still open in any text editor.</p>
            </div>
            <div className="why-card">
              <h4>Linking &amp; Backlinks</h4>
              <p>Connect ideas across notes. See which notes link to each other. Build a web of your knowledge.</p>
            </div>
          </div>

          <div className="tool-box">
            <h4>Don&apos;t want to use Obsidian?</h4>
            <p>That&apos;s fine! The Personal OS works with any folder of Markdown files. You can use Typora, iA Writer, or any Markdown editor you prefer for viewing. VS Code is still recommended for working with Claude.</p>
          </div>

          <h2 id="slash-commands">The Slash Commands</h2>
          <p>Slash commands are shortcuts that trigger specific workflows. Here are two essential ones:</p>

          <div className="skill-card">
            <h4><code>/today</code> Daily Agenda Generator</h4>
            <p>This command scans all your project folders for tasks with due dates, checks what&apos;s overdue, and creates a daily agenda file in your Inbox.</p>

            <p><strong>What it does:</strong></p>
            <ul>
              <li>Scans all markdown files for tasks with due dates</li>
              <li>Groups them by: Overdue, Due Today, Due This Week, Due Next Week</li>
              <li>Creates a new file like <code>2026-01-25_Agenda.md</code></li>
              <li>Includes sections for daily focus, notes, and someday/maybe items</li>
            </ul>

            <p><strong>How to use:</strong> Just type <code>/today</code> in VS Code when starting your work day.</p>
          </div>

          <div className="skill-card">
            <h4><code>/log</code> Session Logger</h4>
            <p>When you finish a work session, this command summarizes what you accomplished and appends it to your project&apos;s process_notes.md file.</p>

            <p><strong>What it does:</strong></p>
            <ul>
              <li>Identifies which project you&apos;re working in</li>
              <li>Creates a summary of the session (changes, decisions, open items)</li>
              <li>Appends it to process_notes.md with today&apos;s date</li>
              <li>Automatically compacts old entries to keep the file lean</li>
            </ul>

            <p><strong>How to use:</strong> Type <code>/log</code> in VS Code at the end of a work session.</p>
          </div>

          <div className="explanation">
            <strong>Why slash commands?</strong> They turn multi-step workflows into single actions. Instead of manually scanning files and writing summaries, one command does it all.
          </div>

          <h2 id="step-by-step">Setup Instructions</h2>
          <p>Good news: Claude will do most of the setup work for you. You just need to install the tools and paste a few prompts.</p>

          <div className="step">
            <span className="step-number">1</span>
            <h3>Install VS Code</h3>
            <p>Download VS Code from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a> and run the installer. Default settings are fine.</p>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <h3>Install the Claude Extension</h3>
            <div className="substep">
              <p>Open VS Code. Click the Extensions icon in the left sidebar (looks like four squares), or press <code>Cmd+Shift+X</code> (Mac) or <code>Ctrl+Shift+X</code> (Windows).</p>
            </div>
            <div className="substep">
              <p>Search for &quot;Claude&quot; and install the official extension by Anthropic. Sign in with your Claude account when prompted.</p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <h3>Create Your Personal_OS Folder</h3>
            <p>Create one empty folder on your computer. This is the only thing you need to do manually.</p>

            <h4>On Mac:</h4>
            <div className="substep">
              <p>Open Finder → Go to Documents → Right-click → New Folder → Name it <code>Personal_OS</code></p>
            </div>

            <h4>On Windows:</h4>
            <div className="substep">
              <p>Open File Explorer → Go to Documents → Right-click → New → Folder → Name it <code>Personal_OS</code></p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">4</span>
            <h3>Open the Folder in VS Code</h3>
            <div className="substep">
              <p>In VS Code: File → Open Folder → Navigate to Documents → Select your <code>Personal_OS</code> folder → Click &quot;Open&quot;</p>
            </div>
            <div className="substep">
              <p>If VS Code asks &quot;Do you trust the authors?&quot;, click &quot;Yes, I trust the authors&quot;</p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">5</span>
            <h3>Have Claude Build Your System</h3>
            <p>Open the Claude panel in VS Code (click the Claude icon in the sidebar or press <code>Cmd/Ctrl+Shift+P</code> and search for &quot;Claude&quot;). Then paste this prompt:</p>

            <div className="prompt-box">
              <h4>Copy and paste this into Claude:</h4>
              <pre>{`Please set up a Personal OS folder structure for me. Create:

1. These folders:
   - 00_Inbox
   - 10_Projects
   - 20_Areas
   - 30_Resources
   - 40_Archives
   - 99_System
   - 99_System/Context_Library
   - 99_System/Context_Library/project_specs
   - 99_System/Profiles
   - 99_System/Scripts

2. A CLAUDE.md file in the root with this content:

## Role

Personal assistant for [my name]. Help me manage tasks, organize information, and stay productive.

## Architecture

- Tasks: Markdown files in \`10_Projects/\` and \`00_Inbox/\`
- Archive: Never modify \`40_Archives/\` unless asked

## Guidelines

1. Read local files before asking for context
2. Be concise - no unnecessary explanations
3. Ask before deleting anything

3. A Someday_Maybe.md file in 20_Areas with sections for Ideas, Long-Term Projects, Things to Explore, and Wishlist.

Please create all of these now.`}</pre>
            </div>

            <p>Claude will create all the folders and files for you. When it&apos;s done, you&apos;ll see the structure appear in VS Code&apos;s file explorer on the left.</p>
          </div>

          <div className="step">
            <span className="step-number">6</span>
            <h3>Set Up the Slash Commands</h3>
            <p>The /today and /log commands need to be installed in a special folder. Paste this prompt into Claude:</p>

            <div className="prompt-box">
              <h4>Copy and paste this into Claude:</h4>
              <pre>{`Please create the /today and /log slash commands for me.

Create these files:

1. ~/.claude/skills/today/SKILL.md with this content:

---
name: today
description: Scans the vault for tasks due today and creates a daily agenda.
allowed-tools: Bash(*), Read(*), Write(*)
---

# /today Command

Create a daily agenda by scanning for tasks with due dates.

## What to Do

1. Search all .md files in 10_Projects/ and 00_Inbox/ for YAML frontmatter containing "due_date" fields

2. Group tasks by:
   - Overdue (due_date before today)
   - Due Today
   - Due This Week
   - Due Next Week

3. Create a new file in 00_Inbox/ named YYYY-MM-DD_Agenda.md with today's date

4. Format the agenda with sections for each group, plus:
   - Daily Focus (leave blank for user to fill)
   - Quick Notes (leave blank)

5. Tell the user: "Good morning! I've prepared your agenda: [filename]"


2. ~/.claude/skills/log/SKILL.md with this content:

---
name: log
description: Log session notes to project's process_notes.md
allowed-tools: Glob(*), Read(*), Write(*), Edit(*)
---

# /log - Session Logger

Log the current session to the project's process_notes.md file.

## What to Do

1. Identify which project folder we're working in

2. Find or create process_notes.md in that folder

3. Generate a session entry with this structure:

   ## YYYY-MM-DD - [Brief Title]

   **Summary:** 1-2 sentences max.

   **Changes:** Bullet list of files modified.

   **Decisions:** Only if meaningful choices were made.

   **Open:** Remaining tasks (use - [ ] format).

4. Append the entry at the end of the file

5. Tell the user: "Entry added for [date]"


Please create both of these skill files now.`}</pre>
            </div>
          </div>

          <div className="step">
            <span className="step-number">7</span>
            <h3>Install Obsidian</h3>
            <div className="substep">
              <p>Download Obsidian from <a href="https://obsidian.md" target="_blank" rel="noopener noreferrer">obsidian.md</a> and install it.</p>
            </div>
            <div className="substep">
              <p>When Obsidian opens, click &quot;Open folder as vault&quot; and select your <code>Personal_OS</code> folder.</p>
            </div>
            <div className="substep">
              <p>You&apos;ll see your new folder structure in the left sidebar. This is where you&apos;ll browse and read your notes.</p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">8</span>
            <h3>Test It!</h3>
            <p>Go back to VS Code and type <code>/today</code> in the Claude chat. Claude should create your first daily agenda file. Check Obsidian - you&apos;ll see it appear in your 00_Inbox folder.</p>

            <div className="explanation">
              <strong>That&apos;s it!</strong> Your Personal OS is ready. As you work with Claude, ask it to create new projects, add tasks, or set up additional features. It knows the structure now and will put things in the right places.
            </div>
          </div>

          <h2>Adding Your First Project</h2>
          <p>Want to add a project? Just tell Claude:</p>

          <div className="prompt-box">
            <h4>Example prompt:</h4>
            <pre>{`Create a new project called "Q1 Marketing Plan" with a due date of March 15. Include a project file, process_notes.md, and a few starter tasks.`}</pre>
          </div>

          <p>Claude will create the folder structure, files, and properly formatted tasks that /today can find.</p>

          <h2>Task Format (For Reference)</h2>
          <p>When Claude creates tasks, it uses this format. You don&apos;t need to memorize this - just ask Claude to create tasks for you:</p>

          <div className="code-block">
            <pre>{`---
`}<span className="keyword">type:</span> <span className="string">task</span>{`
`}<span className="keyword">status:</span> <span className="string">todo</span>{`
`}<span className="keyword">created:</span> <span className="string">2026-01-20</span>{`
`}<span className="keyword">due_date:</span> <span className="string">2026-01-25</span>{`
`}<span className="keyword">priority:</span> <span className="string">high</span>{`
`}<span className="keyword">tags:</span> <span className="string">[]</span>{`
---

`}<span className="header"># Task Title</span>{`

Description of what needs to be done...`}</pre>
          </div>

          <div className="explanation">
            <strong>What&apos;s this block?</strong> It&apos;s called &quot;YAML frontmatter&quot; - a standard way to add metadata to Markdown files. The /today command scans for the <code>due_date</code> field to build your agenda.
          </div>

          <h2 id="tips">Tips for Success</h2>
          <ul>
            <li><strong>Let Claude do the work.</strong> Instead of manually creating files, just tell Claude what you want. &quot;Create a new task for reviewing the budget by Friday&quot; is all you need.</li>
            <li><strong>Use the Inbox.</strong> When you&apos;re not sure where something goes, tell Claude to put it in 00_Inbox. You can organize it later.</li>
            <li><strong>Run /log regularly.</strong> The more you log, the better your process notes become, and the more context Claude has for future sessions.</li>
            <li><strong>Keep Obsidian open.</strong> Use it to browse and read your notes while VS Code + Claude handles the editing.</li>
            <li><strong>Archive liberally.</strong> When a project is done, tell Claude to move it to 40_Archives. Keep your active spaces clean.</li>
            <li><strong>Ask for help.</strong> If you&apos;re stuck, just ask Claude! &quot;How should I organize my consulting projects?&quot; or &quot;Create a template for client kickoff meetings.&quot;</li>
          </ul>

          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Your Personal OS will grow with you. Start with the basics, and add more as you need it. The productivity gains compound over time as Claude learns your work patterns and preferences.</p>
            <Link href="/" className="cta-button">Explore More at Agents of Change</Link>
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
