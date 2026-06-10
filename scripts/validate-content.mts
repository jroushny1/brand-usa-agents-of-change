// Content consistency checks across the src/data modules.
// Run with: npm run validate  (tsx scripts/validate-content.mts)
import { webinarData } from '../src/data/webinars.ts'
import { webinarCards } from '../src/data/webinar-cards.ts'
import { shortFormVideos } from '../src/data/shorts.ts'

let failed = false
const fail = (msg: string) => {
  failed = true
  console.error(`ERROR: ${msg}`)
}
const warn = (msg: string) => console.warn(`warn:  ${msg}`)

const dataIds = new Set(Object.keys(webinarData))
const cardIds = new Set(webinarCards.map((c) => c.id))
const shortIds = new Set(shortFormVideos.map((s) => s.id))

// 1. Homepage cards derive from webinarData (webinar-cards.ts throws at import
// for unknown ids), so card/data agreement is structural. Remaining checks:

// 2. Each entry's id field must match its object key.
for (const [key, w] of Object.entries(webinarData)) {
  if (w.id !== key) {
    fail(`webinarData['${key}'] has mismatched id field '${w.id}'`)
  }
}

// 3. Every webinar should be reachable from the homepage — via a card, the
// shorts grid, or the conference-talks section (isConferenceTalk entries).
for (const [id, w] of Object.entries(webinarData)) {
  if (!cardIds.has(id) && !shortIds.has(id) && !w.isConferenceTalk) {
    warn(`webinar '${id}' is not reachable from the homepage`)
  }
}

// 4. A mux playback id should belong to exactly one piece of content.
const muxOwners = new Map<string, string>()
const allContent = [
  ...Object.values(webinarData).map((w) => ({ id: w.id, mux: w.muxPlaybackId })),
  ...shortFormVideos.map((s) => ({ id: s.id, mux: s.muxPlaybackId })),
]
for (const { id, mux } of allContent) {
  const owner = muxOwners.get(mux)
  if (owner && owner !== id) {
    fail(`muxPlaybackId ${mux} is used by both '${owner}' and '${id}'`)
  }
  muxOwners.set(mux, id)
}

if (failed) {
  process.exit(1)
}
console.log(`ok: ${dataIds.size} webinars, ${cardIds.size} homepage cards, ${shortIds.size} shorts — content is consistent`)
