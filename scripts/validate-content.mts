// Content consistency checks across the src/data modules.
// Run with: npm run validate  (node --experimental-strip-types scripts/validate-content.mts)
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

// 1. Every homepage card must link to a real webinar page.
for (const card of webinarCards) {
  if (!dataIds.has(card.id)) {
    fail(`homepage card '${card.id}' has no entry in webinarData — /webinar/${card.id} would 404`)
  }
}

// 2. Card and webinar data must agree on the video for the same id.
for (const card of webinarCards) {
  const w = webinarData[card.id as keyof typeof webinarData]
  if (w && w.muxPlaybackId !== card.muxPlaybackId) {
    fail(`'${card.id}': homepage card muxPlaybackId differs from webinarData (${card.muxPlaybackId} vs ${w.muxPlaybackId})`)
  }
  if (!card.thumbnail.includes(card.muxPlaybackId)) {
    fail(`'${card.id}': card thumbnail URL does not match its muxPlaybackId`)
  }
}

// 3. Every webinar should be reachable from the homepage — via a card, the
// shorts grid, or the conference-talks section (isConferenceTalk entries).
for (const [id, w] of Object.entries(webinarData)) {
  const isConferenceTalk = (w as { isConferenceTalk?: boolean }).isConferenceTalk
  if (!cardIds.has(id) && !shortIds.has(id) && !isConferenceTalk) {
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
