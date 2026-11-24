import { pressMarkdown, markdownResponse } from '@/lib/markdown-pages'

// Markdown copy of /press — same content as the HTML page. Built once, served static.
export const dynamic = 'force-static'

export function GET() {
  return markdownResponse(pressMarkdown(), '/press')
}
