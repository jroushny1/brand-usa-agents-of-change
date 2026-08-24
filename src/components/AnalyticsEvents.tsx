'use client'

import { useEffect } from 'react'

// Site-wide GA4 engagement tracking. A single delegated click listener inspects
// the nearest anchor and maps known destinations to named events, so no other
// page (including the homepage) has to change. Add data-ga-event="name" to any
// element to fire an explicit event instead of relying on href matching.
//
// Events emitted:
//   speaker_availability_click — outbound click to the Brand USA speaker page
//   personal_os_open           — a Personal OS guide (now hosted on thebrandusa.com)
//   brandusa_ai_hub_click      — outbound click to the Brand USA AI & Innovation hub
//   webinar_open               — outbound click to a migrated Agents of Change session
//   library_open               — navigation into the resource library
//   outbound_click             — catch-all exit click to any other external host
//
// The named events fire INSTEAD of outbound_click, never alongside it, so the
// counts stay additive: total exits = outbound_click + the named outbound events.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const SITE_HOSTS = ['janetteroush.com', 'www.janetteroush.com', 'localhost']

function eventForHref(href: string): string | null {
  if (!href) return null

  let url: URL
  try {
    url = new URL(href, 'https://janetteroush.com')
  } catch {
    return null
  }

  // Skip anything that isn't a real navigation (mailto:, tel:, #anchors).
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null

  const isExternal = !SITE_HOSTS.includes(url.hostname)

  if (isExternal) {
    if (url.hostname.endsWith('thebrandusa.com')) {
      if (url.pathname.includes('/brand-usa-speakers')) return 'speaker_availability_click'
      if (url.pathname.includes('personal-os')) return 'personal_os_open'
      if (url.pathname.startsWith('/events/')) return 'webinar_open'
      if (url.pathname.includes('/ai-innovation')) return 'brandusa_ai_hub_click'
    }
    // Every other exit click still gets counted.
    return 'outbound_click'
  }

  // Internal navigation worth naming.
  if (url.pathname.startsWith('/personal-os')) return 'personal_os_open'
  if (url.pathname.startsWith('/library')) return 'library_open'
  return null
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const start = e.target as HTMLElement | null
      const el = start?.closest('a, [data-ga-event]') as HTMLElement | null
      if (!el || typeof window.gtag !== 'function') return

      const anchor = el.closest('a') as HTMLAnchorElement | null
      const name = el.getAttribute('data-ga-event') || eventForHref(anchor?.href ?? '')
      if (!name) return

      let outbound: boolean | undefined
      try {
        outbound = anchor ? !SITE_HOSTS.includes(new URL(anchor.href).hostname) : undefined
      } catch {
        outbound = undefined
      }

      window.gtag('event', name, {
        link_url: anchor?.href || undefined,
        link_text: (el.textContent || '').trim().slice(0, 100) || undefined,
        link_domain: (() => {
          try { return anchor ? new URL(anchor.href).hostname : undefined } catch { return undefined }
        })(),
        outbound,
        // sendBeacon so the event survives the navigation that follows the click.
        transport_type: 'beacon',
      })
    }
    // Capture phase: fire before Next.js client-side navigation handles the click.
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
