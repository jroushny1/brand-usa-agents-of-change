import { storyLabMarkdown, markdownResponse } from '@/lib/markdown-pages'

// Markdown copy of /story-lab — same content as the HTML page. Built once, served static.
export const dynamic = 'force-static'

export function GET() {
  return markdownResponse(storyLabMarkdown(), '/story-lab')
}
