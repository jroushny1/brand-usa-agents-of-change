// Podcast episode content for /podcast/[id] pages and the sitemap.
export const podcastData = {
  'fandom-unpacked-ai-live-entertainment': {
    id: 'fandom-unpacked-ai-live-entertainment',
    title: 'AI\'s Impact on Live Entertainment: Unpacking the Business Effects on Sports, Arts, and Ticketed Events',
    podcastName: 'Fandom Unpacked',
    season: 1,
    episode: 9,
    publishDate: 'April 23, 2025',
    hosts: ['Damian Bazadona', 'Peter Yagecic', 'Maureen Andersen'],
    guests: ['Janette Roush'],
    description: 'This episode explores how artificial intelligence is transforming live entertainment discovery and fan experiences. The discussion covers AI-powered recommendations moving away from keyword-driven search toward personalized fan connections, practical tools like ChatGPT Team, Claude, Google Notebook LM, Midjourney, and Descript, and envisions a future where personal AI assistants proactively recommend experiences based on individual preferences and schedules.',
    audioUrl: 'https://www.buzzsprout.com/2449648/17030825-ai-s-impact-on-live-entertainment-unpacking-the-business-effects-on-sports-arts-and-ticketed-events.mp3',
    buzzsproutEmbedUrl: 'https://www.buzzsprout.com/2449648/episodes/17030825',
    thumbnailUrl: '',
    duration: '',
    topics: [
      'AI in Live Entertainment',
      'Fan Experience',
      'Personalized Recommendations',
      'ChatGPT',
      'Claude',
      'Google Notebook LM',
      'Midjourney',
      'Descript',
      'Marketing AI',
      'Sports & Entertainment'
    ],
    relatedResources: [
      {
        name: 'Presentation Slides',
        description: 'Download the full presentation from the episode',
        url: 'https://situationlive.com/aipdf'
      },
      {
        name: 'Listen on Apple Podcasts',
        description: 'Subscribe and listen on Apple Podcasts',
        url: 'https://podcasts.apple.com/podcast/fandom-unpacked'
      },
      {
        name: 'Listen on Spotify',
        description: 'Subscribe and listen on Spotify',
        url: 'https://open.spotify.com/show/fandom-unpacked'
      }
    ]
  }
}

export const podcastIds = Object.keys(podcastData)
