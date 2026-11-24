// AI crawler / agent detection for the bot-hit log in src/middleware.ts.
//
// Matching is on the User-Agent string only, so crawlers that present a
// browser user agent are missed. Used for logging only — nothing on the site
// branches on this to change what a visitor or bot is served.
//
// Order matters where one token contains another (Applebot-Extended before
// Applebot). Matching is case-insensitive.
const AI_BOT_TOKENS: Array<[token: string, name: string]> = [
  // OpenAI
  ['GPTBot', 'GPTBot'],
  ['ChatGPT-User', 'ChatGPT-User'],
  ['OAI-SearchBot', 'OAI-SearchBot'],
  // Anthropic
  ['ClaudeBot', 'ClaudeBot'],
  ['Claude-User', 'Claude-User'],
  ['Claude-SearchBot', 'Claude-SearchBot'],
  ['anthropic-ai', 'anthropic-ai'],
  // Perplexity
  ['PerplexityBot', 'PerplexityBot'],
  ['Perplexity-User', 'Perplexity-User'],
  // Google. Google-Extended is a robots.txt token and rarely appears in a
  // user agent; Googlebot is the crawler behind AI Overviews and Gemini grounding.
  ['Google-Extended', 'Google-Extended'],
  ['Google-CloudVertexBot', 'Google-CloudVertexBot'],
  ['GoogleOther', 'GoogleOther'],
  ['Googlebot', 'Googlebot'],
  // Microsoft (Bing index feeds Copilot)
  ['bingbot', 'Bingbot'],
  // Others
  ['Applebot-Extended', 'Applebot-Extended'],
  ['Applebot', 'Applebot'],
  ['Amazonbot', 'Amazonbot'],
  ['Bytespider', 'Bytespider'],
  ['CCBot', 'CCBot'],
  ['meta-externalagent', 'meta-externalagent'],
  ['meta-externalfetcher', 'meta-externalfetcher'],
  ['DuckAssistBot', 'DuckAssistBot'],
  ['MistralAI-User', 'MistralAI-User'],
  ['cohere-ai', 'cohere-ai'],
  ['YouBot', 'YouBot'],
]

const LOWERED = AI_BOT_TOKENS.map(([token, name]) => [token.toLowerCase(), name] as const)

/** Returns the bot's name when the user agent belongs to a known AI crawler or agent, else null. */
export function matchAiBot(userAgent: string | null | undefined): string | null {
  if (!userAgent) return null
  const ua = userAgent.toLowerCase()
  for (const [token, name] of LOWERED) {
    if (ua.includes(token)) return name
  }
  return null
}
