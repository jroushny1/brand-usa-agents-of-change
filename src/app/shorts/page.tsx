import AccessCheck from '@/components/AccessCheck'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HLSPlayer from '../webinar/[id]/hls-player'

// Short-form video content
const shortFormVideos = [
  {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature—described as a reusable prompt similar to a custom GPT—to build a "Business Trip Packing Assistant." The app\'s design was inspired by the iconic virtual closet from the movie Clueless.',
    duration: '1 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    category: 'Demo',
    instructor: 'Janette Roush',
  },
  {
    id: 'ai-presentations',
    title: 'How AI Can Help with Presentations',
    description: 'Janette walks you through her complete AI-powered workflow for creating compelling presentations from the ground up. She shares her entire process, from organizing research in ChatGPT and brainstorming narrative frameworks to generating custom images.',
    duration: '9 min',
    muxPlaybackId: 'qZkSL00Sd00Qe01OLuiv6TdEiIVYKXZKKk1UPR5RckP2fM',
    category: 'Tutorial',
    instructor: 'Janette Roush',
  },
]

export default function ShortsPage() {
  // ItemList schema for AI discoverability
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'AI Quick Demos & Tutorials for Tourism Professionals',
    'description': 'Bite-sized videos showcasing practical AI applications and hands-on demonstrations for destination marketing.',
    'numberOfItems': shortFormVideos.length,
    'itemListElement': shortFormVideos.map((video, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'VideoObject',
        'name': video.title,
        'description': video.description,
        'thumbnailUrl': `https://image.mux.com/${video.muxPlaybackId}/thumbnail.png`,
        'contentUrl': `https://stream.mux.com/${video.muxPlaybackId}/highest.mp4`,
        'duration': `PT${parseInt(video.duration) || 5}M`,
        'author': { '@type': 'Person', 'name': video.instructor },
        'genre': video.category
      }
    }))
  }

  // FAQPage schema for AI discoverability
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What AI tutorials are available for tourism professionals?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Brand USA offers ${shortFormVideos.length} quick AI tutorials including: ${shortFormVideos.map(v => v.title).join(', ')}. These bite-sized videos demonstrate practical AI applications for destination marketing.`
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I use Claude Artifacts for tourism marketing?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Claude Artifacts lets you build interactive apps from natural language prompts. Brand USA demonstrates this with a "Clueless"-inspired packing app built entirely with conversational prompts like "make it more sparkly" - no coding required.'
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for AI Discoverability */}
      <script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AccessCheck>
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Editorial page header */}
          <div className="border-b border-brand-navy pb-10 mb-14">
            <div className="dateline text-brand-cyan mb-4">Short-form video</div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-none text-brand-navy">
              Quick Demos &amp; Tutorials
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-brand-navy">
              Bite-sized videos showcasing practical AI applications and hands-on demonstrations for destination marketing.
            </p>
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            {shortFormVideos.map((video) => (
              <article key={video.id}>
                <div className="relative aspect-video overflow-hidden bg-brand-navy">
                  <div className="absolute inset-0">
                    <HLSPlayer
                      playbackId={video.muxPlaybackId}
                      poster={`https://image.mux.com/${video.muxPlaybackId}/thumbnail.png`}
                    />
                  </div>
                  <div className="absolute inset-3 border border-brand-paper/80 pointer-events-none" />
                </div>
                <div className="mt-4 flex items-baseline justify-between dateline">
                  <span className="text-brand-cyan">{video.category}</span>
                  <span className="text-brand-slate">{video.duration}</span>
                </div>
                <h2 className="mt-2 font-display text-2xl leading-tight text-brand-navy">
                  {video.title}
                </h2>
                <p className="mt-2 text-brand-gray-blue">
                  {video.description}
                </p>
              </article>
            ))}
          </div>
        </main>

        <Footer />
      </AccessCheck>
    </>
  )
}
