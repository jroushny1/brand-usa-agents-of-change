# janetteroush.com

Janette Roush's AI training platform for tourism professionals. Built with Next.js, deployed to Vercel.

> **Naming:** Always refer to this site as **janetteroush.com** in conversation. `brand-usa-agents-of-change` is just the underlying Vercel project and GitHub repo name. Do not call it that in chat.

## Deployment

- **Canonical domain:** janetteroush.com
- **Vercel backup URL:** brand-usa-agents-of-change.vercel.app
- **Repo:** GitHub — `jroushny1/brand-usa-agents-of-change`
- **Deploy:** Push to `main` triggers auto-deploy via Vercel

## Site Architecture

Next.js App Router. All data is inline in page files (no CMS, no database for content).

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage — webinar cards grid, hero, stats |
| `/webinar/[id]` | Individual webinar pages — video (Mux), transcript, chapters, schema |
| `/podcast/[id]` | Podcast episode pages — audio, transcript, chapters, schema |
| `/notes` | Field Notes blog — research notes, frameworks, case studies |
| `/glossary` | AI/tourism glossary with structured definitions |
| `/library` | Resources page — curated links, Personal OS guides |
| `/about` | About Janette / Agents of Change program |
| `/ai-audit` | Interactive AI audit tool for DMOs |
| `/shorts` | Short-form video content |
| `/personal-os` | Personal OS guide v1 (HTML embedded in React) |
| `/personal-os-2` | Personal OS guide v2 (HTML embedded in React) |
| `/login`, `/register`, `/enter` | Auth (Supabase) |

### Components

- `Header.tsx` — Site nav (desktop + mobile). Currently 6 items: Home, About, Field Notes, Glossary, Resources, AI Audit
- `AccessCheck.tsx` — Auth wrapper

### Key Data Files

- **Webinars:** `src/app/webinar/[id]/page.tsx` — all webinar data inline (10 webinars). Each has: id, title, description, duration, muxPlaybackId, instructor, publishDate, keyTakeaways, topics, chapters, transcript, webinarMentions (SoftwareApplication schema)
- **Field Notes:** `src/app/notes/page.tsx` — `fieldNotes` array with id, title, date, tags, content
- **Homepage cards:** `src/app/page.tsx` — webinar listing cards (must stay in sync with webinar data)
- **Resources:** `src/app/library/page.tsx` — categorized resource links

## Content Conventions

### Schema Markup

Every content page includes JSON-LD structured data. Common schemas:
- `VideoObject` (webinars), `PodcastEpisode` (podcasts)
- `FAQPage` (field notes, glossary — key for AI discoverability)
- `TechArticle` / `Blog` (field notes)
- `Course` (webinar series)
- `BreadcrumbList`, `SoftwareApplication` (tool mentions)

When adding content, always include appropriate schema markup.

### Field Notes Content Format

Content is stored as template literal strings. The renderer converts:
- `**bold**` → `<strong>` tags via regex
- Inline HTML (`<a>` tags) supported via `dangerouslySetInnerHTML`
- Paragraphs split on `\n\n`

### Video Hosting

All video is hosted on Mux. Playback IDs are stored inline. Thumbnails auto-generate from `https://image.mux.com/{playbackId}/thumbnail.png?width=800&height=450&time=10`.

### Branding

Brand USA design system. See `30_Resources/Brand_USA_brand_resources/BRANDING_USAGE_NOTE.md` for full spec.
- Colors: Navy `#101F36`, Cyan `#00A9E0`, USA Blue `#00549F`, Slate `#4C5768`, Cream `#F4EFE3`
- Typography: Oswald (headlines), Montserrat (body)
- Logo: Vertical/stacked wordmark preferred

## Adding Content

### New Webinar
1. Add entry to webinar data array in `src/app/webinar/[id]/page.tsx` (id, title, transcript, chapters, etc.)
2. Add `webinarMentions` entry for SoftwareApplication schemas
3. Add homepage card in `src/app/page.tsx`
4. Update webinar count on homepage (appears twice — hero text and stats)

### New Field Note
1. Add entry to `fieldNotes` array in `src/app/notes/page.tsx`
2. Add FAQ schema entry in the same file
3. Newest entries go first in the array

### New Podcast Episode
1. Add entry to podcast data in `src/app/podcast/[id]/page.tsx`
2. Add homepage card if applicable
