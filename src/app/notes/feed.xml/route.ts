import { NextResponse } from 'next/server'
import { fieldNotes } from '@/data/field-notes'


function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const baseUrl = 'https://www.janetteroush.com'
  const buildDate = new Date().toUTCString()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Field Notes | Agents of Change</title>
    <link>${baseUrl}/notes</link>
    <description>Research notes, insights, and evolving definitions from the AI Lab for tourism innovation. By Janette Roush, Chief AI Officer.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/notes/feed.xml" rel="self" type="application/rss+xml"/>
    <dc:creator>Janette Roush</dc:creator>
    <dc:rights>Copyright ${new Date().getFullYear()} Janette Roush</dc:rights>
${fieldNotes
  .map(
    (note) => `    <item>
      <title>${escapeXml(note.title)}</title>
      <link>${baseUrl}/notes/${note.id}</link>
      <guid isPermaLink="false">${note.id}</guid>
      <pubDate>${new Date(note.date).toUTCString()}</pubDate>
      <dc:creator>Janette Roush</dc:creator>
      <category>${escapeXml(note.tags.join(', '))}</category>
      <description>${escapeXml(note.content.replace(/<[^>]+>/g, '').replace(/\*\*/g, '').substring(0, 300) + '...')}</description>
      <content:encoded xmlns:content="http://purl.org/rss/1.0/modules/content/">
        <![CDATA[${note.content}]]>
      </content:encoded>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
