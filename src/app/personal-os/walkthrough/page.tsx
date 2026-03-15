import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Building a Personal Operating System | Video Walkthrough',
  description: 'Watch a live walkthrough of how to build a Personal Operating System with Claude Code, VS Code, and the PARA method. From file structure to API automations.',
}

const sections = [
  {
    id: 'brand-resources',
    number: '01',
    title: 'Brand Resources in Markdown',
    playbackId: 'kFK1tI42m01NNgSm02ZVjzlZLZ01kWPwH7La7ICRrABz8g',
    description: 'Brand guidelines live inside the vault as structured markdown — colors, logos, typography, and usage rules. When Claude builds anything branded, it reads these files directly. No copy-pasting from PDFs, no guessing hex codes.',
    highlights: [
      'Brand identity guidelines converted from PDF to AI-readable markdown',
      'Logo selection logic, color palettes, and font stacks all in one place',
      'Claude references these files automatically when building branded assets',
    ],
  },
  {
    id: 'annual-report',
    number: '02',
    title: 'AI Finds Your Next Steps',
    playbackId: 'mDnw7lEbWOSeDXXyvR02E6ORUAmDfeQ82c2ezt7DuHOY',
    description: 'Asking "what are the next steps on the annual report?" triggers Claude to read through the project folder — past drafts, process notes, and deadlines — and surface exactly where things stand. The project folder is the single source of truth.',
    highlights: [
      'Claude reads project files to determine current status and blockers',
      'Process notes and prior conversations carry forward across sessions',
      'One question replaces digging through docs and Slack threads',
    ],
  },
  {
    id: 'carousel-prompt',
    number: '03',
    title: 'Carousel: From Prompt to Plan',
    playbackId: '3O9iBM5Jy7fhfn1S6Q54wH02IbV0102XsAle7Ou24zgSlk',
    description: 'Janette dictates a prompt — "I want to make a carousel about building AI strategy for DMOs" — and Claude generates a slide-by-slide outline within seconds. Design preferences from previous carousels carry forward automatically.',
    highlights: [
      'Voice dictation makes prompting faster than typing',
      'Claude remembers design preferences from past carousel projects',
      'Slide outline generated instantly, ready for review before building',
    ],
  },
  {
    id: 'strategy-html',
    number: '04',
    title: 'Strategy Presentation in HTML',
    playbackId: 'emCOhCsbyZ6Ks9bqO1PeXxrYpaSbY5Jk005R64N01l5LE',
    description: 'The FY27 strategy presentation is a 25-slide HTML deck — fully branded, instantly deployable, and version-controlled in Bitbucket. Claude built it from strategy source documents and deploys it to Vercel with a single push.',
    highlights: [
      '25-slide branded HTML presentation built from strategy documents',
      'Deployed to Vercel — shareable via URL instead of email attachments',
      'Version-controlled in Bitbucket alongside the source content',
    ],
  },
  {
    id: 'rfp-beige-county',
    number: '05',
    title: 'RFP: Meet Beige County',
    playbackId: 'eJ6sQbPDlv8M75QuUa1mWmd4mvg602PF7s1RjOuRH6Fo',
    description: 'For a webinar on evaluating RFPs with AI, Janette needed demo materials without exposing real vendor data. Claude created a fictional RFP from "Visit Beige County," a scoring rubric, and eight vendor responses — complete with the presentation to walk through them.',
    highlights: [
      'Fictional RFP + scoring rubric + 8 vendor responses generated in minutes',
      'Full presentation built from the same source material',
      'Safe demo content that protects real vendor relationships',
    ],
  },
  {
    id: 'carousel-result',
    number: '06',
    title: 'Carousel: Finished Product',
    playbackId: '6adWzu7XWIT2ahOmlZ001rVMybzyWfIkm79UQWhS162w',
    description: 'The carousel takes shape — and you can see where the content comes from. Webinar transcripts stored in the vault give Claude real material to draw on, so the slides reflect your actual expertise and talking points. This is the payoff of storing context locally: everything you\'ve said and written becomes fuel for new content.',
    highlights: [
      'Webinar transcripts in the vault feed directly into carousel content',
      'Stored context means AI writes in your voice, with your examples',
      'HTML rendered in browser with Brand USA styling, ready for PDF export',
    ],
  },
  {
    id: 'call-command',
    number: '07',
    title: 'The /call Command Live',
    playbackId: 'F7NC3Os4XskxJFpbvWn02xcJs1n7USP74lRLFSrbWO5c',
    description: 'The /call slash command in action: it creates a call note, searches the People directory and prior meetings for context, and drops a pre-populated note ready for capture. All before the meeting starts.',
    highlights: [
      'Automatic context prep — prior calls, people files, related projects',
      'Pre-populated note with attendee history and open items',
      'Reminders and follow-ups extracted and queued automatically',
    ],
  },
  {
    id: 'today-agenda',
    number: '08',
    title: 'Daily Agenda in Obsidian',
    playbackId: 'oBJHbnRHkv01y600eLOIhhmfKe2ufNsmRbtxkYdRh8rs8',
    description: 'The /today command scans the vault for tasks, deadlines, and project milestones — then builds a morning agenda inside Obsidian. Everything due today, overdue, or approaching a deadline surfaces in one view.',
    highlights: [
      'Pulls tasks and milestones from across all active projects',
      'Surfaces overdue items and upcoming deadlines automatically',
      'Morning dashboard that replaces checking five different tools',
    ],
  },
  {
    id: 'project-status',
    number: '09',
    title: 'Project Status Check',
    playbackId: 'HYfA6V01cNJSZPZ7q6TzlUqexfhQEUPR16iX2QXiTIfo',
    description: 'Asking "what\'s left with the global ambassador application?" pulls up process notes, open tasks, and blockers — giving a complete project status without opening a single project management tool.',
    highlights: [
      'Natural language query returns full project status',
      'Process notes track decisions and blockers across sessions',
      'Works for any project in the vault — just ask by name',
    ],
  },
]

export default function WalkthroughPage() {
  return (
    <div className="walkthrough-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .walkthrough-page {
          --navy: #101F36;
          --cyan: #00A9E0;
          --usa-blue: #00549F;
          --slate: #4C5768;
          --pond: #878F9A;
          --cream: #F4EFE3;
          --white: #ffffff;
          font-family: var(--font-montserrat), 'Montserrat', system-ui, sans-serif;
          color: var(--slate);
          line-height: 1.7;
          background: var(--white);
        }

        /* Hero */
        .wt-hero {
          background: linear-gradient(135deg, var(--navy) 0%, #1a2d4a 50%, var(--usa-blue) 100%);
          color: var(--white);
          padding: 100px 24px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .wt-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 50%, rgba(0, 169, 224, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .wt-hero-badge {
          display: inline-block;
          background: rgba(0, 169, 224, 0.15);
          color: var(--cyan);
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 28px;
          border: 1px solid rgba(0, 169, 224, 0.3);
        }

        .wt-hero h1 {
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.05;
          margin-bottom: 24px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .wt-hero h1 span {
          color: var(--cyan);
        }

        .wt-hero p {
          font-size: 1.15rem;
          max-width: 640px;
          margin: 0 auto 40px;
          opacity: 0.85;
          line-height: 1.8;
        }

        .wt-hero-meta {
          display: flex;
          justify-content: center;
          gap: 32px;
          font-size: 0.9rem;
          opacity: 0.7;
        }

        .wt-hero-meta span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Table of Contents */
        .wt-toc {
          background: var(--cream);
          padding: 48px 24px;
        }

        .wt-toc-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .wt-toc h2 {
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 1.5rem;
          color: var(--navy);
          margin-bottom: 24px;
          text-align: center;
        }

        .wt-toc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
        }

        .wt-toc-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--white);
          border-radius: 8px;
          text-decoration: none;
          color: var(--slate);
          transition: transform 0.15s, box-shadow 0.15s;
          font-size: 0.95rem;
        }

        .wt-toc-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .wt-toc-num {
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--cyan);
          min-width: 28px;
        }

        /* Sections */
        .wt-sections {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .wt-section {
          padding: 80px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .wt-section:last-child {
          border-bottom: none;
        }

        .wt-section-header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 16px;
        }

        .wt-section-num {
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: var(--cyan);
          opacity: 0.3;
          line-height: 1;
        }

        .wt-section h2 {
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 2rem;
          color: var(--navy);
          line-height: 1.2;
        }

        .wt-section-desc {
          font-size: 1.05rem;
          margin-bottom: 32px;
          max-width: 720px;
          line-height: 1.8;
        }

        /* Video container */
        .wt-video {
          position: relative;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: var(--navy);
          margin-bottom: 32px;
          box-shadow: 0 8px 30px rgba(16, 31, 54, 0.15);
        }

        .wt-video mux-player {
          width: 100%;
          aspect-ratio: 16/9;
          display: block;
          --media-object-fit: contain;
        }

        /* Highlights */
        .wt-highlights {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .wt-highlight {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          background: var(--cream);
          border-radius: 8px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .wt-highlight-icon {
          color: var(--cyan);
          font-size: 1.1rem;
          margin-top: 1px;
          flex-shrink: 0;
        }

        /* Intro */
        .wt-intro {
          max-width: 960px;
          margin: 0 auto;
          padding: 80px 24px 0;
        }

        .wt-intro h2 {
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 2rem;
          color: var(--navy);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .wt-intro p {
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 20px;
          max-width: 720px;
        }

        .wt-para-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin: 32px 0 0;
        }

        .wt-para-card {
          background: var(--cream);
          border-radius: 10px;
          padding: 24px;
          border-left: 4px solid var(--cyan);
        }

        .wt-para-card h3 {
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 1.1rem;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .wt-para-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 0;
        }

        /* CTA */
        .wt-cta {
          background: linear-gradient(135deg, var(--navy) 0%, var(--usa-blue) 100%);
          color: var(--white);
          padding: 80px 24px;
          text-align: center;
        }

        .wt-cta h2 {
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .wt-cta p {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 32px;
          opacity: 0.85;
        }

        .wt-cta-btn {
          display: inline-block;
          background: var(--cyan);
          color: var(--navy);
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          font-size: 1.05rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .wt-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 169, 224, 0.3);
        }

        /* Back link */
        .wt-back {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 50;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--navy);
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.15s;
        }

        .wt-back:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .wt-hero { padding: 60px 16px 50px; }
          .wt-hero-meta { flex-direction: column; gap: 8px; align-items: center; }
          .wt-section { padding: 50px 0; }
          .wt-section-header { flex-direction: column; gap: 4px; }
          .wt-section-num { font-size: 2rem; }
          .wt-toc-grid { grid-template-columns: 1fr; }
        }
      `}} />

      {/* Mux Player Script */}
      <script src="https://cdn.jsdelivr.net/npm/@mux/mux-player@3/dist/mux-player.mjs" type="module" />

      {/* Back Link */}
      <Link href="/personal-os" className="wt-back">
        ← Setup Guide
      </Link>

      {/* Hero */}
      <section className="wt-hero">
        <div className="wt-hero-badge">Video Walkthrough</div>
        <h1>
          Building a <span>Personal Operating System</span>
        </h1>
        <p>
          A live session walking through Claude Code + VS Code + the PARA method.
          From folder structure to API automations — everything you need to see
          this system in action.
        </p>
        <div className="wt-hero-meta">
          <span>Janette Roush</span>
          <span>March 13, 2026</span>
          <span>~65 minutes</span>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="wt-toc">
        <div className="wt-toc-inner">
          <h2>What You&apos;ll See</h2>
          <div className="wt-toc-grid">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="wt-toc-item">
                <span className="wt-toc-num">{s.number}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Intro: What Is This & How PARA Works */}
      <section className="wt-intro">
        <h2>What Is a Personal Operating System?</h2>
        <p>
          A Personal OS is a local file system — running in VS Code with Claude Code — that holds
          everything about your work: brand guidelines, project files, meeting notes, task lists,
          and custom automations. AI reads these files directly, so every conversation starts with
          full context. No re-explaining, no copy-pasting, no switching between apps.
        </p>
        <p>
          The structure follows <strong>PARA</strong>, a simple organizational framework created
          by Tiago Forte. Four top-level folders handle everything:
        </p>

        <div className="wt-para-grid">
          <div className="wt-para-card">
            <h3>Projects</h3>
            <p>Active work with a defined outcome and deadline. Annual reports, app launches, event prep — anything with a finish line.</p>
          </div>
          <div className="wt-para-card">
            <h3>Areas</h3>
            <p>Ongoing responsibilities with no end date. People contacts, meeting notes, recurring operations like social media reporting.</p>
          </div>
          <div className="wt-para-card">
            <h3>Resources</h3>
            <p>Reference material you pull from repeatedly. Brand guidelines, design assets, webinar transcripts, research data.</p>
          </div>
          <div className="wt-para-card">
            <h3>Archives</h3>
            <p>Completed or paused work. Moves here when done — still searchable, but out of the active workspace.</p>
          </div>
        </div>
      </section>

      {/* Video Sections */}
      <div className="wt-sections">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="wt-section">
            <div className="wt-section-header">
              <span className="wt-section-num">{s.number}</span>
              <h2>{s.title}</h2>
            </div>
            <p className="wt-section-desc">{s.description}</p>

            <div className="wt-video">
              {/* @ts-expect-error - mux-player is a web component loaded via script */}
              <mux-player
                playback-id={s.playbackId}
                stream-type="on-demand"
                accent-color="#00A9E0"
                metadata-video-title={s.title}
                thumbnail-time="5"
              />
            </div>

            <div className="wt-highlights">
              {s.highlights.map((h, i) => (
                <div key={i} className="wt-highlight">
                  <span className="wt-highlight-icon">▸</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="wt-cta">
        <h2>Ready to Build Your Own?</h2>
        <p>
          The setup guide walks you through every step — from installing
          Claude Code to creating your first slash commands.
        </p>
        <Link href="/personal-os" className="wt-cta-btn">
          Follow the Setup Guide →
        </Link>
      </section>
    </div>
  )
}
