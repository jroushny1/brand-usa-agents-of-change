// Confirms the Markdown copies and /llms.txt say only what the HTML pages say.
//
//   node scripts/check-markdown.mjs [baseUrl]     (default http://localhost:3000)
//
// For every Markdown copy: the route returns 200 as text/markdown, and every
// line of it appears, word for word, in the visible text of its HTML page.
// For /llms.txt: 200 as text/plain, and every page description matches that
// page's meta description. Needs a running server (or the live site).

const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '')

const PAIRS = [
  ['/about', '/about.md'],
  ['/press', '/press.md'],
  ['/library', '/library.md'],
  ['/ai-audit', '/ai-audit.md'],
  ['/story-lab', '/story-lab.md'],
  ['/webinar/ai-in-tourism-mississippi-2026', '/webinar/ai-in-tourism-mississippi-2026.md'],
  ['/webinar/minnesota-ai-tourism', '/webinar/minnesota-ai-tourism.md'],
  ['/webinar/ai-ideas-exchange', '/webinar/ai-ideas-exchange.md'],
]

// Lines in a Markdown copy that point at the HTML page and carry no page content.
const POINTER_LINES = [/^HTML page: /, /^The interactive tool runs on the HTML page: /]

const decode = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))

// Reduce text to a lowercase word stream so punctuation and spacing never matter.
const words = (s) =>
  ` ${decode(s)
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[‘’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()} `

const visibleText = (html) =>
  words(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<template[\s\S]*?<\/template>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<[^>]+>/g, ' ')
  )

// Split a Markdown line into the text fragments a reader sees.
const fragments = (line) =>
  line
    .replace(/^#{1,6}\s+/, '')
    .replace(/^>\s?/, '')
    .replace(/^-\s+/, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '\u0000$1\u0000')
    .split(/\u0000| · /)
    .map((f) => f.trim())
    .filter(Boolean)

const metaDescription = (html) => {
  const m = /<meta name="description" content="([^"]*)"/.exec(html)
  return m ? decode(m[1]) : null
}

let failures = 0
const fail = (msg) => {
  failures++
  console.error(`FAIL  ${msg}`)
}

async function get(path) {
  const res = await fetch(base + path, { redirect: 'manual' })
  return { status: res.status, type: res.headers.get('content-type') || '', body: await res.text() }
}

for (const [htmlPath, mdPath] of PAIRS) {
  const [html, md] = await Promise.all([get(htmlPath), get(mdPath)])
  if (html.status !== 200) fail(`${htmlPath} returned ${html.status}`)
  if (md.status !== 200) fail(`${mdPath} returned ${md.status}`)
  if (!md.type.startsWith('text/markdown')) fail(`${mdPath} content-type is "${md.type}"`)
  if (html.status !== 200 || md.status !== 200) continue

  const page = visibleText(html.body)
  let checked = 0
  for (const line of md.body.split('\n')) {
    if (!line.trim() || POINTER_LINES.some((re) => re.test(line))) continue
    for (const fragment of fragments(line)) {
      const w = words(fragment)
      if (!w.trim()) continue
      checked++
      if (!page.includes(w)) fail(`${mdPath}: text missing from ${htmlPath}: "${fragment.slice(0, 120)}"`)
    }
  }
  console.log(`ok    ${mdPath}  (${checked} text fragments found on ${htmlPath})`)
}

const llms = await get('/llms.txt')
if (llms.status !== 200) fail(`/llms.txt returned ${llms.status}`)
else if (!llms.type.startsWith('text/plain')) fail(`/llms.txt content-type is "${llms.type}"`)
else {
  const home = await get('/')
  const quote = /^> (.+)$/m.exec(llms.body)?.[1]
  if (!quote || quote !== metaDescription(home.body)) fail('/llms.txt summary differs from the homepage meta description')

  let checked = 0
  for (const [, url, description] of llms.body.matchAll(/^- \[[^\]]+\]\(([^)]+)\): (.+)$/gm)) {
    const path = new URL(url).pathname
    const page = await get(path)
    checked++
    if (page.status !== 200) fail(`/llms.txt links ${path}, which returned ${page.status}`)
    else if (metaDescription(page.body) !== description)
      fail(`/llms.txt description for ${path} differs from that page's meta description`)
  }
  for (const [, url] of llms.body.matchAll(/^- \[[^\]]+\]\(([^)]+\.md)\)$/gm)) {
    const res = await get(new URL(url).pathname)
    checked++
    if (res.status !== 200) fail(`/llms.txt links ${url}, which returned ${res.status}`)
  }
  console.log(`ok    /llms.txt  (${checked} links checked)`)
}

if (failures) {
  console.error(`\n${failures} problem(s).`)
  process.exit(1)
}
console.log('\nMarkdown copies match their HTML pages.')
