# janetteroush.com — Improvement Plan

This is a step-by-step implementation plan produced from a full site review (June 2026).
It is written so a smaller/less expensive model can execute it phase by phase without
re-deriving the analysis.

## How to use this plan

- Work **one phase at a time, in order**. Each phase ends with a verification step and a commit.
- **Do not use the line numbers below as edit targets** — they will drift. Every step gives a
  unique **anchor string** to search for instead (use Grep, then edit around the match).
- After every phase run: `npm run build`. The build must pass before committing.
- Commit message format: `Phase N: <short description>` (one commit per phase).
- **Never edit transcript text, webinar descriptions, field-note content, or any prose.**
  This plan only moves data, adds metadata/schema plumbing, and fixes mechanical bugs.
- If a step's anchor string can't be found, or reality differs from what the step describes,
  **stop and report** rather than improvising.
- Items in Phase 6 require the site owner's input. Do not start them unprompted.

## Background facts (verified during review — trust these)

- `src/app/webinar/[id]/page.tsx` (~3,765 lines) holds ALL webinar data inline in a
  `webinarData` object with **16 entries**. It is marked `'use client'` but uses **no client
  hooks** (the only `use` import unwraps the params promise). It can become a server component.
- `src/app/page.tsx` has its own `webinars` card array with **13 entries** plus a separate
  `shortFormVideos` array with 2 entries that is **duplicated verbatim** in
  `src/app/shorts/page.tsx`.
- `webinarData` has 2 conference-talk entries with no homepage card and no chapters/transcript:
  `minnesota-ai-tourism` and `ai-ideas-exchange` (both have `isConferenceTalk: true`).
  `ai-presentations` (homepage shorts array) and `ai-for-presentations` (webinarData) are
  **different items** — do not "fix" that as a typo.
- `src/app/podcast/[id]/page.tsx` IS a real client component (uses `useState`/`useEffect`
  to fetch `/transcripts/podcasts/{id}.md`). It needs a server/client split, not a simple
  directive removal.
- Auth is intentionally disabled (`src/middleware.ts` passes everything through;
  `AccessCheck` is a no-op). The site is public by design. **Do not re-enable auth.**
- JSON-LD structured data across the site is comprehensive and good. Do not rewrite schemas
  except where a step explicitly says so.

---

## Phase 1 — Quick correctness fixes (small, safe, high value)

### 1.1 Fix wrong canonical URLs in homepage schema
In `src/app/page.tsx`, two JSON-LD blocks use the Vercel backup URL instead of the canonical
domain. Search for the anchor:
```
https://brand-usa-agents-of-change.vercel.app
```
There are exactly **2 occurrences** (an Organization-style schema `"url"` field, and a second
schema `"url"` field). Replace both with:
```
https://www.janetteroush.com
```
Why: search/AI engines see conflicting canonical URLs and fail entity resolution.

### 1.2 Make webinar counts dynamic
`src/app/page.tsx` hardcodes "12 comprehensive webinars" in **2 places** (one inside a JSON-LD
description, one in visible hero/stats copy), but the `webinars` array has 13 entries and will
keep growing. Search anchor:
```
12 comprehensive webinars
```
Replace the literal `12` with `${webinars.length}` in both places (the JSON-LD block is built
inside the same file where `webinars` is in scope; if a spot is a plain JSX string, convert it
to `{`...`}` template syntax). Leave the separate "13 expert conversations" podcast copy alone
— that refers to podcast episodes, not the webinars array.

This also removes the CLAUDE.md "update webinar count in two places" chore — see Phase 5.2.

### 1.3 Remove debug log
In `src/app/shorts/page.tsx`, search anchor:
```
console.log('Auto-play prevented'
```
Delete the `console.log(...)` statement (keep the surrounding catch/handler behavior intact).

### 1.4 Add `.env.example`
Create `.env.example` at the repo root:
```
# Google Gemini — powers /storytelling generate + analyze API routes
GEMINI_API_KEY=

# TMDB — movie lookups for /storytelling analyze
TMDB_API_KEY=

# Public site URL (also set in Vercel project settings)
NEXT_PUBLIC_SITE_URL=https://www.janetteroush.com
```

### 1.5 Validate required env vars at use time
In `src/lib/storytelling.ts`, the Gemini client is constructed with
`process.env.GEMINI_API_KEY` unchecked. Add a small guard so a missing key produces a clear
server error instead of an opaque SDK failure. Pattern (adapt to the file's existing style):
```ts
function requireEnv(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing required environment variable: ${name}`)
  return v
}
```
Use it where `GEMINI_API_KEY` and `TMDB_API_KEY` are read. Do not change retry/rate-limit logic.

**Verify Phase 1:** `npm run build` passes. Commit.

---

## Phase 2 — Extract content into a data layer (`src/data/`)

Goal: single source of truth, importable by server components, sitemap, and validation
scripts. This phase is **pure mechanical extraction — zero content edits, zero merging,
zero renaming of fields.** Copy objects exactly as they are.

Create directory `src/data/` with these modules:

### 2.1 `src/data/webinars.ts`
Move the entire `webinarData` object (and any TypeScript types/interfaces defined for it)
out of `src/app/webinar/[id]/page.tsx` into this file. Export:
```ts
export const webinarData = { ... } as const  // keep exactly as-is
export const webinarIds = Object.keys(webinarData)
```
Also move the `webinarMentions` / SoftwareApplication-schema data if it lives in the same file.
Update the webinar page to `import { webinarData } from '@/data/webinars'`.

### 2.2 `src/data/webinar-cards.ts`
Move the homepage `webinars` card array from `src/app/page.tsx` here, exported as
`webinarCards`. Update the homepage import. (Do NOT try to merge cards into `webinarData` —
the card descriptions are intentionally shorter marketing blurbs. Merging is Phase 6.)

### 2.3 `src/data/shorts.ts`
The `shortFormVideos` array exists **twice**: in `src/app/page.tsx` and in
`src/app/shorts/page.tsx` (verbatim duplicate). Move ONE copy here, export as
`shortFormVideos`, import it in **both** pages, delete both inline copies. If the two copies
have drifted at all, keep the `shorts/page.tsx` version and report the difference.

### 2.4 `src/data/field-notes.ts`
Move the `fieldNotes` array (and its FAQ-schema data if colocated) from
`src/app/notes/page.tsx`. Note: `src/app/notes/feed.xml/route.ts` builds the RSS feed from
field-note data — update it to import from this module too, so the feed can never drift from
the page.

### 2.5 `src/data/podcasts.ts`
Move `podcastData` from `src/app/podcast/[id]/page.tsx`.

### 2.6 `src/data/glossary.ts` and `src/data/resources.ts`
Move the glossary `terms`/`faqs`/`unexpectedQuestions` arrays from
`src/app/glossary/page.tsx`, and the `resources` data from `src/app/library/page.tsx`.

### 2.7 Content consistency check script
Create `scripts/validate-content.mjs` (plain Node, no new dependencies) that imports nothing
from Next — read the data via a small `npx tsx` invocation OR keep it simple: write the script
in TypeScript at `scripts/validate-content.ts` and run with `npx tsx`. It must check:
1. Every `id` in `webinarCards` exists as a key in `webinarData` → else exit 1 with a message.
   (Known allowed exception: card ids that intentionally link to `/shorts` — currently
   `ai-presentations` and `clueless-packing-app` live in `shortFormVideos`, not cards.)
2. Every key in `webinarData` either has a card OR is in an explicit allowlist
   (`['minnesota-ai-tourism', 'ai-ideas-exchange']` — conference talks pending owner decision,
   see Phase 6.3) → else warn (exit 0) listing orphans.
3. No duplicate `muxPlaybackId` across `webinarData` + `shortFormVideos` unless the ids match.
Add to `package.json` scripts: `"validate": "npx tsx scripts/validate-content.ts"`.
If `tsx` is unavailable offline, fall back to writing the data files as `.ts` with no Next
imports and a plain `node --experimental-strip-types` run, or compile with `npx tsc`.

### 2.8 Update CLAUDE.md "Key Data Files" + "Adding Content" sections
Re-point the documented file locations to `src/data/*.ts` and replace the "update count in
two places" instruction with "count is computed from the array".

**Verify Phase 2:** `npm run build` passes; `npm run validate` passes; spot-check in the build
output that `/`, `/webinar/ai-101`, `/shorts`, `/notes`, `/glossary`, `/library` all still
build. Commit.

---

## Phase 3 — Per-page SEO: server components, generateMetadata, sitemap

This is the highest-impact phase: today **all 16 webinar pages and the podcast pages ship
with the generic site title, no per-page description, no OG image, and are absent from the
sitemap.**

### 3.1 Convert `/webinar/[id]` to a server component
In `src/app/webinar/[id]/page.tsx`:
1. Delete the `'use client'` line and the `import { use } from 'react'`.
2. Make the component `async function WebinarPage({ params }: { params: Promise<{ id: string }> })`
   and `const { id } = await params` instead of `use(params)`.
3. Add:
   ```ts
   import { notFound } from 'next/navigation'
   import { webinarData, webinarIds } from '@/data/webinars'

   export function generateStaticParams() {
     return webinarIds.map((id) => ({ id }))
   }

   export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
     const { id } = await params
     const w = webinarData[id as keyof typeof webinarData]
     if (!w) return {}
     return {
       title: w.title,
       description: w.description,
       alternates: { canonical: `https://www.janetteroush.com/webinar/${id}` },
       openGraph: {
         title: w.title,
         description: w.description,
         type: 'video.other',
         images: [`https://image.mux.com/${w.muxPlaybackId}/thumbnail.png?width=1200&height=630&time=10`],
       },
       twitter: { card: 'summary_large_image' },
     }
   }
   ```
4. Replace the inline "Webinar not found" fallback (search anchor: `Webinar not found`) with
   `notFound()`.
5. The page already renders interactive parts via child client components
   (`hls-player`, `TranscriptSection`, etc.) — leave those untouched. If the build errors on
   any remaining client-only API in the page itself, report it; do not sprinkle
   `'use client'` back on.

### 3.2 Split `/podcast/[id]` into server page + client transcript
`src/app/podcast/[id]/page.tsx` genuinely uses `useState`/`useEffect` (to fetch
`/transcripts/podcasts/{id}.md`).
1. Create `src/app/podcast/[id]/PodcastTranscript.tsx` (`'use client'`) containing ONLY the
   transcript fetch + render logic, taking `id` as a prop.
2. Make `page.tsx` a server component: import `podcastData` from `@/data/podcasts`, add
   `generateStaticParams` + `generateMetadata` (same pattern as 3.1, `type: 'music.song'` is
   wrong — just omit OG type or use `article`), call `notFound()` for unknown ids (search
   anchor: `Podcast Not Found`), render `<PodcastTranscript id={id} />` where the transcript
   went.

### 3.3 Add metadata to pages missing it
- `src/app/glossary/page.tsx` — already a server component; add an
  `export const metadata: Metadata = { title: ..., description: ..., alternates: { canonical: 'https://www.janetteroush.com/glossary' } }`
  block. Title like "AI Glossary for Tourism Professionals"; write the description from the
  page's own intro copy (do not invent claims).
- `src/app/library/page.tsx` — same treatment ("Resources & Library").
- `src/app/ai-audit/page.tsx` — currently one 2,861-line `'use client'` file. Do the minimal
  split: move the entire current file contents to `src/app/ai-audit/AuditClient.tsx`
  (keeping `'use client'` and renaming the default export to `AuditClient`), then make
  `page.tsx` a tiny server file that exports `metadata` (title "AI Readiness Audit for DMOs",
  description from the page's hero copy, canonical) and renders `<AuditClient />`. **Do not
  refactor anything inside the moved file** (that's Phase 6.4).

### 3.4 Complete the sitemap
Rewrite `src/app/sitemap.ts` to:
1. Keep the existing 6 static entries and add: `/about`, `/press`, `/storytelling`,
   `/personal-os`, `/personal-os-2`, `/personal-os/walkthrough` (moderate priority, monthly).
2. Import `webinarIds` from `@/data/webinars` and emit `/webinar/${id}` for every id
   (priority 0.8, monthly), and podcast ids from `@/data/podcasts` for `/podcast/${id}`.
3. Leave `/login`, `/register`, `/enter` out (auth placeholders).
4. Where available, use each item's `publishDate` for `lastModified` instead of `new Date()`.

### 3.5 RSS autodiscovery
In `src/app/layout.tsx`'s `metadata` export, add:
```ts
alternates: {
  canonical: '/',
  types: { 'application/rss+xml': 'https://www.janetteroush.com/notes/feed.xml' },
},
```
Merge carefully with the existing `alternates`/canonical config — do not drop what's there.

**Verify Phase 3:** `npm run build` passes and the output lists `/webinar/[id]` as SSG (●) with
all 16 paths. Then `npm run start` (or `next start -p 3001`) and:
- `curl -s localhost:3001/webinar/ai-101 | grep -o '<title>[^<]*'` shows the webinar's own title.
- `curl -s -o /dev/null -w '%{http_code}' localhost:3001/webinar/does-not-exist` returns `404`.
- `curl -s localhost:3001/sitemap.xml | grep -c webinar` returns 16.
Commit.

---

## Phase 4 — Error handling, accessibility, asset weight

### 4.1 App-level error pages
- Create `src/app/not-found.tsx`: branded 404 (server component) — navy `#101F36` background,
  Oswald headline "Page not found", short Montserrat body line, link back to `/`. Mirror the
  styling idioms used in `src/app/about/page.tsx`.
- Create `src/app/error.tsx`: must start with `'use client'`, receives `{ error, reset }`,
  same branding, with a "Try again" button calling `reset()`.

### 4.2 Keyboard accessibility in Storytelling Lab
In `src/components/StorytellingLab.tsx`:
- Search anchor: `✕` — it's rendered in a `<span onClick={...}>`. Convert to
  `<button type="button" aria-label="Remove element" ...>` keeping the same classes/handler
  (adjust classes if button default styles leak; `appearance-none bg-transparent` usually
  suffices).
- The periodic-table chart (`dangerouslySetInnerHTML` with `onClick` on the container div) has
  no keyboard navigation. Minimal fix: leave the chart mouse-driven but ensure every selected
  element can ALSO be removed via the (now keyboard-accessible) ✕ buttons, and add
  `role="application"` plus an `aria-label` describing the chart on the container. Full
  keyboard nav inside the injected HTML is out of scope.

### 4.3 Shrink the OG image
`public/og-image.png` is 1.3 MB (1216×864). Social scrapers are slow/timeout-prone with this.
Resize/recompress to 1200×630 and aim for < 300 KB. Without new npm deps, run a one-off:
```
npx sharp-cli resize 1200 630 --fit cover -i public/og-image.png -o public/og-image-new.png
```
(or `npx @squoosh/cli`, or ImageMagick `convert` if installed — whatever is available; verify
the output visually opens and is < 300 KB, then replace the original file, keeping the same
filename `og-image.png` so all references keep working). If no tool works in the environment,
report it and skip — do NOT delete the existing image.

**Verify Phase 4:** `npm run build`; manually hit an unknown route and confirm the branded 404
renders; `ls -la public/og-image.png` < 300 KB. Commit.

---

## Phase 5 — Tooling and docs

### 5.1 npm scripts
Add to `package.json`:
```json
"typecheck": "tsc --noEmit",
"validate": "npx tsx scripts/validate-content.ts",
"test": "node tests/site-validation.js"
```
Run all three; fix only mechanical breakage they reveal (report anything non-trivial).
Check what `tests/site-validation.js` expects (it may need the dev server running — if so,
document that in a comment at the top of the file instead of wiring it to `npm test`).

### 5.2 Update CLAUDE.md
- Routes table: add `/press`, `/storytelling` (+ its two API routes), `/notes/feed.xml`,
  `/personal-os/walkthrough`.
- Header nav description: it now has 8 items, not 6 (verify against `src/components/Header.tsx`).
- Key Data Files: point to `src/data/*.ts` (done partially in 2.8 — finish it here).
- "Adding Content" recipes: new webinar = edit `src/data/webinars.ts` + `src/data/webinar-cards.ts`,
  run `npm run validate`; counts update automatically.

**Verify Phase 5:** `npm run build && npm run typecheck && npm run validate`. Commit.

---

## Phase 6 — Deferred items (NEED OWNER INPUT — do not start unprompted)

6.1 **Internal cross-linking.** Field notes never link to the glossary terms, webinars, or
    `/personal-os` pages they discuss (e.g., the Leapfrog Thesis note mentions "Personal OS"
    ~11 times with zero links). High SEO/UX value, but it edits prose, so the owner should
    approve the linking pass. A "Related content" module on webinar pages (driven by shared
    `topics` tags in the data layer) is the structural version of this.

6.2 **Merge homepage cards into `webinarData`.** Add a `cardDescription` field to each webinar
    and derive homepage cards from the single object (eliminates the remaining 60-field
    duplication). Mechanical but touches marketing copy placement — owner sign-off useful.

6.3 **The two conference talks** (`minnesota-ai-tourism`, `ai-ideas-exchange`) have working
    pages and videos but no homepage presence, no chapters, no transcript. Owner decision:
    add a "Conference Talks" homepage section, or leave them as sitemap-only deep links.

6.4 **Refactor `ai-audit` AuditClient (2,861 lines).** Split into ~6 components, replace 15+
    `any` types. Pure code health; zero user-visible change; medium regression risk — do it
    only with time to test the audit tool end to end.

6.5 **Field-note markdown rendering.** The regex `**bold**` + `dangerouslySetInnerHTML`
    renderer works for trusted content but is brittle. If field notes grow, consider moving
    notes to MDX or adding a tiny parser with tests. Not urgent.

6.6 **Per-note pages.** Field notes all render on one `/notes` page; individual notes can't be
    deep-linked/shared with their own URL + metadata. `/notes/[slug]` pages would compound the
    site's GEO strategy. Larger task; design with owner.

---

## Execution & model guidance

| Phase | Risk | Suited to |
|-------|------|-----------|
| 1 | Low — string-level fixes | Smallest/cheapest model |
| 2 | Low-medium — large mechanical moves, no logic | Cheap model, but verify with `npm run validate` |
| 3 | Medium — server/client boundaries | Mid-tier model recommended |
| 4 | Low | Cheap model |
| 5 | Low | Cheap model |
| 6 | Varies | Mid-tier model + owner review |

Total estimated scope for phases 1–5: roughly a day of agent time, ~10–15 files touched,
no new runtime dependencies, no visual changes except the 404/error pages and OG image weight.
