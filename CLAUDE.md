# janetteroush.com

Janette Roush's AI training platform for tourism professionals. Built with Next.js, deployed to Vercel.

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
| `/` | Homepage — webinar cards grid, hero, stats (counts computed from data) |
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

- `Header.tsx` — Site nav (desktop + mobile). Currently 8 items: Home, About, Field Notes, Glossary, Resources, Press, AI Audit, Storytelling
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

### Branding

Brand USA design system. See `30_Resources/Brand_USA_brand_resources/BRANDING_USAGE_NOTE.md` for full spec.
- Colors: Navy `#101F36`, Cyan `#00A9E0`, USA Blue `#00549F`, Slate `#4C5768`, Cream `#F4EFE3`
- Typography: Oswald (headlines), Montserrat (body)
- Logo: Vertical/stacked wordmark preferred

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
