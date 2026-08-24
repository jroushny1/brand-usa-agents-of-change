/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.mux.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'production.listennotes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'lovable.dev',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.oaistatic.com',
      },
      {
        protocol: 'https',
        hostname: 'claude.ai',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      {
        protocol: 'https',
        hostname: 'www.monologueapp.com',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  // Field Notes and the Glossary were retired in August 2026 (no readership on
  // either; no individual note was ever opened). Both were indexed, so the old
  // URLs — including the RSS feed and every article slug — 301 to the resource
  // library rather than 404.
  async redirects() {
    const BUSA = 'https://www.thebrandusa.com/events'
    return [
      { source: '/glossary', destination: '/library', permanent: true },
      { source: '/notes', destination: '/library', permanent: true },
      { source: '/notes/:path*', destination: '/library', permanent: true },

      // Agents of Change video library migration (August 2026). These nine
      // sessions now live on thebrandusa.com; every destination was verified
      // live before shipping. The remaining webinars stay here until Brand USA
      // publishes pages for them.
      { source: '/webinar/intro-ai-agents', destination: `${BUSA}/agents-of-change-introduction-to-ai-agents/`, permanent: true },
      { source: '/webinar/ai-tool-playground', destination: `${BUSA}/agents-of-change-ai-tool-playground/`, permanent: true },
      { source: '/webinar/ai-dmo-leadership', destination: `${BUSA}/agents-of-change-ai-for-dmo-leadership/`, permanent: true },
      { source: '/webinar/managing-the-rfp-process', destination: `${BUSA}/agents-of-change-using-ai-to-evaluate-rfp-responses-without-losing-the-human-touch/`, permanent: true },
      { source: '/webinar/introduction-to-vibe-coding', destination: `${BUSA}/agents-of-change-vibe-coding-build-real-apps-without-writing-a-line-of-code/`, permanent: true },
      { source: '/webinar/chat-data-to-travel-intelligence', destination: `${BUSA}/agents-of-change-dmo-website-mindtrip-integration-chatbot-to-traveler-intelligence-system/`, permanent: true },
      { source: '/webinar/ai-chief-of-staff', destination: `${BUSA}/agents-of-change-ai-as-your-chief-of-staff-building-a-personal-operating-system-with-claude-code/`, permanent: true },
      { source: '/webinar/from-conversation-to-knowledge', destination: `${BUSA}/agents-of-change-from-conversation-to-knowledge-how-ai-turns-your-calls-into-strategy/`, permanent: true },
      { source: '/webinar/build-the-deck', destination: `${BUSA}/agents-of-change-build-the-deck-on-brand-presentations-start-to-finish-in-claude/`, permanent: true },

      // Short-form video section retired August 2026. Both indexed URLs land on
      // the resource library rather than 404.
      { source: '/shorts', destination: '/library', permanent: true },
      { source: '/webinar/clueless-packing-app', destination: '/library', permanent: true },
    ]
  },
}

module.exports = nextConfig
