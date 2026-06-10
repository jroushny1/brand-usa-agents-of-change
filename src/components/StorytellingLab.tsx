'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Sparkles, FlaskConical, Film, X, Loader2 } from 'lucide-react'
import { CHART_HTML } from './periodicChart'
import './periodic.css'

type RegEntry = { id: string; name: string; cat: string; el: HTMLElement }

const CAT_HEX: Record<string, string> = {
  category01: '#BCBEC0', category02: '#E4D1BA', category03: '#EFE5D8', category04: '#E6E7E8',
  category05: '#C6E8F0', category06: '#CAE4B7', category07: '#83C66F', category08: '#FABBA3',
  category09: '#FCD7C8', category10: '#FBF7C1', category11: '#FDBE68', category12: '#F6ADCD',
}
const LEGEND: [string, string][] = [
  ['Structure', 'category01'], ['Setting, Laws & Plots', 'category02'], ['Story Modifiers', 'category03'],
  ['Plot Devices', 'category04'], ['Heroes', 'category05'], ['Character Modifiers', 'category06'],
  ['Archetypes', 'category07'], ['Villains', 'category08'], ['Metatropes', 'category10'],
  ['Production', 'category11'], ['Fandom & Audience', 'category12'],
]

type Example = { title: string; year: string; poster: string | null; explanation: string }
type GenOut = { kind: 'gen'; title: string; logline: string; realWorldExamples: Example[] }
type Breakdown = { id: string; reason: string }
type AnalyzeOut = { kind: 'analyze'; title: string; synopsis: string; poster: string | null; breakdowns: Breakdown[] }
type OutState = null | { kind: 'loading'; msg: string } | { kind: 'error'; msg: string } | GenOut | AnalyzeOut

export default function StorytellingLab() {
  const chartRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const regRef = useRef<Record<string, RegEntry>>({})
  const idToKeysRef = useRef<Record<string, string[]>>({})
  const inflightRef = useRef<AbortController | null>(null)

  const [selected, setSelected] = useState<string[]>([])
  const [xray, setXray] = useState(false)
  const [film, setFilm] = useState('')
  const [steer, setSteer] = useState('')
  const [out, setOut] = useState<OutState>(null)
  const busy = out?.kind === 'loading'

  const fit = useCallback(() => {
    const ptos = chartRef.current, vp = viewportRef.current
    if (!ptos || !vp) return
    // Fit to WIDTH so tiles stay large and readable (never upscale past native).
    // Height is allowed to flow — the periodic shape reads instantly and only the
    // lower rows need a little scrolling.
    const availW = vp.clientWidth
    const s = Math.min(availW / 1220, 1)
    const eff = Math.max(s, 0.6) // keep legible on narrow screens (allow horizontal scroll instead of shrinking to a thumbnail)
    ptos.style.transform = `scale(${eff})`
    ptos.style.marginLeft = Math.max(0, (availW - 1220 * eff) / 2) + 'px'
    vp.style.height = ptos.offsetHeight * eff + 'px'
    vp.style.overflowX = 1220 * eff > availW + 1 ? 'auto' : 'hidden'
  }, [])

  // Build registry from injected cells; wire fit-to-screen.
  useEffect(() => {
    const chart = chartRef.current
    if (!chart) return
    const cells = Array.from(chart.querySelectorAll<HTMLElement>('.cell'))
    const reg: Record<string, RegEntry> = {}
    const idk: Record<string, string[]> = {}
    cells.forEach((c) => {
      const k = c.dataset.key as string
      reg[k] = { id: c.dataset.id || '', name: c.dataset.name || '', cat: c.dataset.cat || '', el: c }
      ;(idk[c.dataset.id || ''] ||= []).push(k)
    })
    regRef.current = reg
    idToKeysRef.current = idk
    fit()
    const t = setTimeout(fit, 300) // heuristic catch-up
    // deterministic re-fit once the chart's webfonts have actually loaded
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(fit).catch(() => {})
    }
    window.addEventListener('resize', fit)
    return () => { window.removeEventListener('resize', fit); clearTimeout(t) }
  }, [fit])

  // Reflect selection on the injected DOM. Query live cells each time — cached
  // node refs can go stale (React re-creates the dangerouslySetInnerHTML subtree),
  // which silently no-ops the highlight.
  useEffect(() => {
    const chart = chartRef.current
    if (!chart) return
    const set = new Set(selected)
    chart.querySelectorAll<HTMLElement>('.cell').forEach((c) => {
      c.classList.toggle('sel', set.has(c.dataset.key || ''))
    })
  }, [selected])

  const onChartClick = (e: React.MouseEvent) => {
    const cell = (e.target as HTMLElement).closest('.cell') as HTMLElement | null
    if (!cell) return
    setXray(false)
    const k = cell.dataset.key as string
    setSelected((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]))
  }

  const clearAll = () => { setSelected([]); setXray(false) }

  async function synthesize() {
    if (selected.length === 0) return
    const reg = regRef.current
    const elements = selected.map((k) => ({ id: reg[k].id, name: reg[k].name }))
    inflightRef.current?.abort()
    const ctrl = new AbortController()
    inflightRef.current = ctrl
    setOut({ kind: 'loading', msg: `Fusing ${elements.length} element${elements.length > 1 ? 's' : ''} into one plot…` })
    try {
      const r = await fetch('/api/storytelling/generate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ elements, steer: steer.trim() }), signal: ctrl.signal,
      })
      const d = await r.json()
      if (ctrl.signal.aborted) return
      if (!r.ok) return setOut({ kind: 'error', msg: d.error || `Error ${r.status}` })
      setOut({ kind: 'gen', ...d })
    } catch (e) {
      if ((e as Error)?.name === 'AbortError') return
      setOut({ kind: 'error', msg: 'Synthesis core error.' })
    }
  }

  async function analyze() {
    const title = film.trim()
    if (!title) return
    const reg = regRef.current
    const catalogue = Object.values(reg).map((r) => ({ id: r.id, name: r.name }))
    inflightRef.current?.abort()
    const ctrl = new AbortController()
    inflightRef.current = ctrl
    setOut({ kind: 'loading', msg: 'Pulling TMDB record & extracting tropes…' })
    try {
      const r = await fetch('/api/storytelling/analyze', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ movieTitle: title, elements: catalogue }), signal: ctrl.signal,
      })
      if (ctrl.signal.aborted) return
      if (r.status === 404) return setOut({ kind: 'error', msg: 'No film found by that title.' })
      const d = await r.json()
      if (ctrl.signal.aborted) return
      if (!r.ok) return setOut({ kind: 'error', msg: d.error || `Error ${r.status}` })
      const keys: string[] = []
      ;(d.elementsFound || []).forEach((id: string) => (idToKeysRef.current[id] || []).forEach((k) => keys.push(k)))
      setSelected(keys)
      setXray(keys.length > 0) // only dim the table when something is actually highlighted
      setOut({ kind: 'analyze', ...d })
    } catch (e) {
      if ((e as Error)?.name === 'AbortError') return
      setOut({ kind: 'error', msg: 'X-ray analysis failed.' })
    }
  }

  const reg = regRef.current

  return (
    <div className={`ptos-root ${xray ? 'xray' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2">
        {/* Two clear options, side by side */}
        <div className="grid md:grid-cols-2 gap-3">
          {/* Option 1: X-ray a film */}
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center gap-2 text-brand-blue">
              <Film className="h-5 w-5" />
              <h2 className="font-display text-base font-bold text-brand-navy">1 · Scan a film&rsquo;s DNA</h2>
            </div>
            <p className="mt-0.5 text-xs text-gray-600">Type any movie. We pull its synopsis and highlight the storytelling elements it&rsquo;s built from.</p>
            <div className="mt-2 flex gap-2">
              <input
                value={film}
                onChange={(e) => setFilm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !busy && analyze()}
                placeholder="e.g. The Matrix, Shutter Island, Spirited Away"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-cyan"
              />
              <button onClick={analyze} disabled={busy} className="flex items-center gap-1.5 rounded-md bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-brand-blue disabled:bg-gray-300 disabled:text-gray-500 transition-colors">
                <Sparkles className="h-4 w-4" /> Scan
              </button>
            </div>
          </div>

          {/* Option 2: The Beaker */}
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-brand-cyan">
                <FlaskConical className="h-5 w-5" />
                <h2 className="font-display text-base font-bold text-brand-navy">2 · The Beaker</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-brand-navy whitespace-nowrap">{selected.length} selected</span>
                {selected.length > 0 && (
                  <button onClick={clearAll} className="rounded-md border border-gray-300 px-2 py-0.5 text-xs font-medium text-gray-500 hover:bg-gray-50">Clear</button>
                )}
              </div>
            </div>
            <p className="mt-0.5 text-xs text-gray-600">Click elements on the table to drop them in, then generate a one-line logline that ties them all together.</p>
            <div className="mt-2 flex flex-wrap gap-1 min-h-[2.25rem] max-h-24 overflow-y-auto rounded-md border border-dashed border-gray-200 bg-gray-50/70 p-1.5">
              {selected.length === 0 && <span className="self-center px-1 text-sm italic text-gray-400">Nothing in the beaker yet — click tiles on the table…</span>}
              {selected.map((k) => (
                <span key={k} className="inline-flex items-center gap-1 rounded-full border border-black/10 px-2 py-0.5 text-xs text-gray-900" style={{ background: CAT_HEX[reg[k]?.cat] || '#ddd' }}>
                  <b>{reg[k]?.id}</b> {reg[k]?.name}
                  <button type="button" aria-label={`Remove ${reg[k]?.name || k}`} className="appearance-none bg-transparent cursor-pointer opacity-60 hover:opacity-100" onClick={() => setSelected((p) => p.filter((x) => x !== k))}>✕</button>
                </span>
              ))}
            </div>
            <input
              value={steer}
              onChange={(e) => setSteer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !busy && selected.length > 0 && synthesize()}
              placeholder="Optional — steer it (e.g. about tourism, set in Japan, a comedy)"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-cyan"
            />
            <button onClick={synthesize} disabled={selected.length === 0 || busy} className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-brand-cyan px-4 py-2.5 text-sm font-bold text-white hover:opacity-90 disabled:bg-gray-200 disabled:text-gray-400 transition-opacity">
              <FlaskConical className="h-4 w-4" /> Generate Logline
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
          {LEGEND.map(([label, cat]) => (
            <span key={cat} className="whitespace-nowrap">
              <span className="inline-block h-3 w-3 rounded-sm border border-black/20 align-[-2px] mr-1" style={{ background: CAT_HEX[cat] }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* The real chart, scaled to fit */}
      <div ref={viewportRef} className="w-full overflow-hidden px-2">
        {/* Mouse-driven chart; selected elements can also be removed via the keyboard-accessible ✕ buttons above. */}
        <div id="PToS" ref={chartRef} role="application" aria-label="Periodic table of storytelling — click an element tile to add it to the beaker" onClick={onChartClick} dangerouslySetInnerHTML={{ __html: CHART_HTML }} />
      </div>

      <p className="max-w-5xl mx-auto px-4 mt-4 mb-10 text-center text-xs text-gray-400">
        Element set &amp; layout from the{' '}
        <a href="https://jamesharr.is/periodic/" target="_blank" rel="noopener noreferrer" className="underline">Periodic Table of Storytelling</a>{' '}
        by James Harris / DawnPaladin, after the original by Computer Sherpa —{' '}
        <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-NC 4.0</a>.
        Synthesis &amp; X-ray powered by Gemini + TMDB.
      </p>

      {/* Output panel */}
      {out && (
        <div className="fixed bottom-5 right-5 z-50 w-[420px] max-w-[calc(100vw-2.5rem)] max-h-[78vh] overflow-y-auto rounded-xl border border-gray-200 bg-white p-5 shadow-2xl">
          <button onClick={() => setOut(null)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"><X className="h-5 w-5" /></button>
          {out.kind === 'loading' && (
            <div className="flex items-center gap-2 py-4 text-gray-600"><Loader2 className="h-5 w-5 animate-spin" /> {out.msg}</div>
          )}
          {out.kind === 'error' && <div className="py-4 text-red-600">⚠️ {out.msg}</div>}
          {out.kind === 'gen' && (
            <div className="pr-5">
              <h3 className="font-display text-xl font-bold text-brand-navy">{out.title}</h3>
              <div className="mt-3 text-[0.7rem] font-bold uppercase tracking-wider text-gray-400">Logline</div>
              <p className="mt-0.5 text-base italic text-gray-700 leading-relaxed">&ldquo;{out.logline}&rdquo;</p>
              <div className="mt-4 text-[0.7rem] font-bold uppercase tracking-wider text-gray-400">Real-world genetics — TMDB-verified</div>
              <div className="mt-1 space-y-1.5">
                {(out.realWorldExamples ?? []).map((ex, i) => (
                  <div key={i} className="flex gap-2 rounded border-l-[3px] border-brand-cyan bg-gray-50 p-2">
                    {ex.poster && <Image src={ex.poster} alt="" width={44} height={66} className="w-11 h-auto self-start shrink-0 rounded" />}
                    <div>
                      <div className="text-sm font-bold text-brand-navy">{ex.title} ({ex.year})</div>
                      <div className="text-xs text-gray-600">{ex.explanation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {out.kind === 'analyze' && (
            <div className="pr-5">
              <div className="flex gap-3">
                {out.poster && <Image src={out.poster} alt="" width={64} height={96} className="w-16 h-auto self-start shrink-0 rounded" />}
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy">{out.title}</h3>
                  <p className="text-xs text-gray-500">{out.synopsis}</p>
                </div>
              </div>
              <div className="mt-3 text-[0.7rem] font-bold uppercase tracking-wider text-gray-400">Tropes detected — highlighted on the table</div>
              <div className="mt-1 space-y-1.5">
                {(out.breakdowns ?? []).map((b, i) => {
                  const ks = idToKeysRef.current[b.id] || []
                  const r0 = ks.length ? reg[ks[0]] : null
                  return (
                    <div key={i} className="rounded border-l-[3px] bg-gray-50 p-2" style={{ borderColor: r0 ? CAT_HEX[r0.cat] : '#101F36' }}>
                      <div className="text-sm font-bold text-brand-navy">{r0 ? `${r0.id} · ${r0.name}` : b.id}</div>
                      <div className="text-xs text-gray-600">{b.reason}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
