import { aboutMarkdown, markdownResponse } from '@/lib/markdown-pages'

// Markdown copy of /about — same content as the HTML page. Built once, served static.
export const dynamic = 'force-static'

export function GET() {
  return markdownResponse(aboutMarkdown(), '/about')
}
