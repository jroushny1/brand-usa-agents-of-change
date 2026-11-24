import { aiAuditMarkdown, markdownResponse } from '@/lib/markdown-pages'

// Markdown copy of /ai-audit — same content as the HTML page. Built once, served static.
export const dynamic = 'force-static'

export function GET() {
  return markdownResponse(aiAuditMarkdown(), '/ai-audit')
}
