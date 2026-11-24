import { conferenceTalkIds, markdownResponse, webinarMarkdown } from '@/lib/markdown-pages'

// Markdown copies of the conference-talk pages. Public URL is /webinar/<id>.md,
// rewritten here from next.config.js. Built once per talk, served static.
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return conferenceTalkIds.map((id) => ({ id }))
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = webinarMarkdown(id)
  if (!body) return new Response('Not found', { status: 404 })
  return markdownResponse(body, `/webinar/${id}`)
}
