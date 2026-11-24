import { llmsTxt } from '@/lib/markdown-pages'

// /llms.txt — index of the key pages and their Markdown copies. Built once, served static.
export const dynamic = 'force-static'

export function GET() {
  return new Response(llmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
