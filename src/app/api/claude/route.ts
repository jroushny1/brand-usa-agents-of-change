// Serverless proxy for the Story Lab instrument (public/story-lab.html).
// Mirrors the standalone deployment's api/claude.js: the browser never sees
// the key, the model is pinned server-side, prompt length and max_tokens are
// capped, so this endpoint can only run the table's own small prompts.
// Requires ANTHROPIC_API_KEY in the Vercel project env.

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: Request) {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) {
    return Response.json({ error: 'ANTHROPIC_API_KEY is not configured' }, { status: 500 })
  }

  let body: { prompt?: unknown; schema?: unknown }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const prompt = typeof body.prompt === 'string' ? body.prompt : ''
  if (prompt.length < 20 || prompt.length > 12000) {
    return Response.json({ error: 'prompt missing or out of bounds' }, { status: 400 })
  }

  const payload: Record<string, unknown> = {
    model: process.env.LAB_MODEL || 'claude-haiku-4-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  }
  if (body.schema && typeof body.schema === 'object') {
    payload.output_config = { format: { type: 'json_schema', schema: body.schema } }
  }

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(payload),
    })
    const data = await upstream.json()
    if (!upstream.ok) {
      return Response.json(
        { error: data?.error?.message || 'upstream error' },
        { status: upstream.status },
      )
    }
    const text = (data.content || [])
      .filter((b: { type: string }) => b.type === 'text')
      .map((b: { text: string }) => b.text)
      .join('')
    return Response.json({ text, usage: data.usage })
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 502 })
  }
}
