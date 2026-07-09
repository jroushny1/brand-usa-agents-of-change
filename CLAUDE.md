# janetteroush.com

Janette Roush's personal site — keynotes, working tools (Story Lab, AI Site Audit), field notes, press, and podcast appearances, plus the AI webinar library (moving to thebrandusa.com in August 2026). Built with Next.js, deployed to Vercel. Editorial redesign shipped July 2026.

> **Naming:** Always refer to this site as **janetteroush.com** in conversation. `brand-usa-agents-of-change` is just the underlying Vercel project and GitHub repo name. Do not call it that in chat.

## Deployment

- **Canonical domain:** janetteroush.com
- **Vercel backup URL:** brand-usa-agents-of-change.vercel.app
- **Repo:** GitHub — `jroushny1/brand-usa-agents-of-change`
- **Deploy:** Push to `main` triggers auto-deploy via Vercel

## Site Architecture

Next.js App Router. All content lives in TypeScript modules under `src/data/` (no CMS, no database for content). Pages import from those modules.

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage — editorial front page: chip hero, Lab cards, curated `latestIndex`, webinar/shorts/conference grids, In the Media pull quote |
| `/webinar/[id]` | Individual webinar pages — video (Mux), transcript, chapters, schema. Statically generated with per-webinar metadata |
| `/podcast/[id]` | Podcast episode pages — audio, transcript, chapters, schema. Statically generated |
| `/notes` | Field Notes blog — research notes, frameworks, case studies |
| `/notes/feed.xml` | RSS feed for Field Notes (derived from the same data module) |
| `/glossary` | AI/tourism glossary with structured definitions |
| `/library` | Resources page — curated links, Personal OS guides |
| `/about` | About Janette / Agents of Change program |
| `/press` | Press / media page |
| `/ai-audit` | Interactive AI audit tool for DMOs (client tool in `AuditClient.tsx`) |
| `/storytelling` | Storytelling Lab — periodic table of storytelling + Gemini API routes (`/api/storytelling/*`) |
| `/shorts` | Short-form video content |
| `/personal-os` | Personal OS guide v1 (HTML embedded in React) |
| `/personal-os-2` | Personal OS guide v2 (HTML embedded in React) |
| `/personal-os/walkthrough` | Personal OS video walkthrough |
| `/login`, `/register`, `/enter` | Auth placeholders (auth intentionally disabled; site is public) |

### Components

- `Header.tsx` — Personal masthead ("Janette Roush", Fraunces italic surname) + small-caps mono nav (desktop + mobile). 8 items: Home, About, Field Notes, Glossary, Resources, Press, AI Audit, Story Lab
- `Footer.tsx` — wordmark, email, LinkedIn, Field Notes RSS
- `AccessCheck.tsx` — Auth wrapper (currently a pass-through)
- `src/app/not-found.tsx` / `src/app/error.tsx` — branded 404 and error pages

### Key Data Files (single source of truth: `src/data/`)

- **Webinars:** `src/data/webinars.ts` — `webinarData` (full content: id, title, description, duration, muxPlaybackId, instructor, publishDate, keyTakeaways, topics, chapters, transcript) plus `webinarMentions` (SoftwareApplication schema) and `webinarIds`
- **Homepage cards:** `src/data/webinar-cards.ts` — short marketing blurbs for the homepage grid
- **Shorts:** `src/data/shorts.ts` — shared by homepage grid and `/shorts`
- **Field Notes:** `src/data/field-notes.ts` — `fieldNotes` array + `fieldNoteFaqs` (FAQ schema entries); also feeds the RSS route
- **Podcasts:** `src/data/podcasts.ts`
- **Glossary:** `src/data/glossary.ts` — `terms`, `faqs`, `unexpectedQuestions`
- **Resources:** `src/data/resources.ts` — categorized library links

### Scripts

- `npm run build` — production build (run before committing content changes)
- `npm run typecheck` — `tsc --noEmit`
- `npm run validate` — content consistency checks (`scripts/validate-content.mts`): every homepage card id must exist in `webinarData`, mux ids must agree per id and be unique, orphan webinars are flagged unless allowlisted
- `node tests/site-validation.js [baseUrl]` — schema/link/layout smoke tests; needs a running server (defaults to `http://localhost:3000`)

## Content Conventions

### Schema Markup

Every content page includes JSON-LD structured data. Common schemas:
- `VideoObject` (webinars), `PodcastEpisode` (podcasts)
- `FAQPage` (field notes, glossary — key for AI discoverability)
- `TechArticle` / `Blog` (field notes)
- `Course` (webinar series)
- `BreadcrumbList`, `SoftwareApplication` (tool mentions)

When adding content, always include appropriate schema markup. Detail pages
(`/webinar/[id]`, `/podcast/[id]`) also get per-page `<title>`/OG metadata via
`generateMetadata` — this works automatically from the data modules.

### Field Notes Content Format

Content is stored as template literal strings. The renderer converts:
- `**bold**` → `<strong>` tags via regex
- Inline HTML (`<a>` tags) supported via `dangerouslySetInnerHTML`
- Paragraphs split on `\n\n`

### Video Hosting

All video is hosted on Mux. Playback IDs live in the data modules. Thumbnails auto-generate from `https://image.mux.com/{playbackId}/thumbnail.png?width=800&height=450&time=10`.

### Design System — "The Practitioner's Journal" (July 2026)

Personal editorial identity. The full plan, comps, and decisions log live in the vault:
`10_Projects/JanetteRoush_Editorial_Redesign/` (read `Redesign_Plan.md` before design changes).

**Palette** (defined in `tailwind.config.ts`):
- Paper `#F4EFE3` (page ground) · Paper2 `#ECE5D3` (alternate bands) · Ink navy `#0E1B2C`
- Fuchsia `#B12467` — the only accent · Slate `#5A6068` (datelines/captions) · Sand `#D9CFB8` (hairline rules)
- **Legacy tokens are remapped in place** — `brand-cyan` now renders fuchsia, `brand-blue` deep fuchsia `#8F1D55`, `brand-navy` ink navy. Old class names across interior pages pick up the new identity automatically; write new code with the semantic names (paper/sand/slate) where possible.

**Typography** (next/font/google in `layout.tsx`): Fraunces (display, `font-display`), Newsreader (body, `font-body`, 18px minimum), JetBrains Mono (`font-mono`; use the `.dateline` utility for kickers/credits/nav/dates).

**Signature moves — keep these rules when touching design:**
1. **Grain lives in the body background layer only** (`globals.css`). Photos, chips, and cards are opaque layers above it. Never put a noise overlay on top of photography — it reads as a low-res image (learned twice, July 2026).
2. **Type never sits directly on a photo.** Headlines go on opaque paper chips; kickers/credits get solid dark scrim blocks. Scrims-as-gradients failed legibility review twice.
3. **Frame over image** — 1px paper-colored border inset from photo edges (`absolute inset-3/inset-5 border border-brand-paper/80`).
4. **Photography is real stage photos only**, never AI-generated. Source library: https://speaker-asset-manager.vercel.app/gallery (downloads need a browser User-Agent).

## Redesign Status & To-Dos

**Phase 1 + interior editorial pass — DONE (2026-07-06, local):** editorial design system, personal masthead, chip hero (`public/hero-keynote.jpg`), editorial homepage, Footer, token remap, AND a full editorial pass on every public interior page — press (clippings wall), notes index + article, glossary (dictionary), library (resource index), about (profile), shorts (video grid), ai-audit + story-lab (header shells over untouched tools), 404/error. `/webinar/[id]` pages skipped (leaving for thebrandusa.com in August). All JSON-LD schema kept verbatim. Verified: typecheck + build + rendered screenshots of all pages. Awaiting Janette's go to push/deploy.

**Phase 2 — August 2026, triggered by the video library moving to thebrandusa.com:**
- [ ] Get receiving URL structure → slug-to-slug 301 map for every `/webinar/*`, `/shorts`, library video URL; ship the same day videos move
- [ ] Rewrite homepage JSON-LD: Organization/Course → Person + ProfilePage with full sameAs graph (Janette = canonical entity node)
- [ ] Ask receiving team to mark Janette as performer/author with `sameAs: janetteroush.com` on new video pages
- [ ] Remove AccessCheck gate + `/enter`, `/login`, `/register`
- [ ] Add llms.txt

**Phase 3 — September 2026 (partly pulled forward):** interior editorial pass is DONE (see above). Remaining: a dedicated Speaking page (Event schema + booking CTA) and downloadable speaker assets on About.

**Standing rule:** the schema-density strategy survives every redesign — never remove structured data, RSS, or sitemap coverage in a visual change.

## Adding Content

After any content change, run `npm run validate && npm run build`.

### New Webinar
1. Add entry to `webinarData` in `src/data/webinars.ts` (id, title, transcript, chapters, etc.)
2. Add `webinarMentions` entry in the same file for SoftwareApplication schemas
3. Add homepage card in `src/data/webinar-cards.ts` (same id and muxPlaybackId)
4. Webinar counts on the homepage are computed from the array — no manual count updates
5. The webinar page, sitemap, and validation pick the new entry up automatically

### New Field Note
1. Add entry to `fieldNotes` in `src/data/field-notes.ts` (newest first)
2. Add a matching FAQ entry to `fieldNoteFaqs` in the same file
3. The RSS feed updates automatically from the same module

### New Podcast Episode
1. Add entry to `podcastData` in `src/data/podcasts.ts`
2. Optional transcript: add `public/transcripts/podcasts/{id}.md`
3. Add homepage card if applicable
