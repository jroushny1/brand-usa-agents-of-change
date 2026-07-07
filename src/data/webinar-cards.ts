import { webinarData } from './webinars'

// Curated display order for the homepage webinar grid. Everything else about a
// card (title, blurb, duration, video, badge) derives from webinarData — edit
// content there; edit this list only to reorder or add/remove cards.
const cardOrder = [
  'from-conversation-to-knowledge',
  'ai-chief-of-staff',
  'ai-101',
  'intro-ai-agents',
  'ai-tool-playground',
  'ai-dmo-leadership',
  'custom-gpts',
  'ai-convention-sales',
  'crit-framework',
  'crit-framework-workshop',
  'model-context-protocol',
  'ai-policy-governance',
  'ai-for-presentations',
  'introduction-to-vibe-coding',
  'managing-the-rfp-process',
  'chat-data-to-travel-intelligence',
]

export const webinarCards = cardOrder.map((id) => {
  const webinar = webinarData[id]
  if (!webinar) {
    throw new Error(`webinar-cards: cardOrder id '${id}' has no entry in webinarData`)
  }
  return {
    id,
    title: webinar.title,
    description: webinar.cardDescription ?? webinar.description,
    duration: webinar.duration,
    muxPlaybackId: webinar.muxPlaybackId,
    thumbnail: `https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png?width=800&height=450&time=10`,
    level: webinar.level ?? 'Strategic',
  }
})
