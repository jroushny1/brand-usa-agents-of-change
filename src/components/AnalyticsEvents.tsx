'use client'

import { useEffect } from 'react'

// Site-wide GA4 engagement tracking. A single delegated click listener inspects
// the nearest anchor and maps known destinations to named events, so no other
// page (including the homepage) has to change. Add data-ga-event="name" to any
// element to fire an explicit event instead of relying on href matching.
//
// Events emitted:
//   speaker_availability_click — outbound click to the Brand USA speaker page
//   personal_os_open           — navigation into the Personal OS guide
//   library_open               — navigation into the resource library

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function eventForHref(href: string): string | null {
  if (href.includes('thebrandusa.com/requestspeaker')) return 'speaker_availability_click'
  // Strip the origin so query strings and hashes don't break detection.
  const path = href.replace(/^https?:\/\/[^/]+/, '')
  if (path.startsWith('/personal-os')) return 'personal_os_open'
  if (path.startsWith('/library')) return 'library_open'
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

      window.gtag('event', name, {
        link_url: anchor?.href || undefined,
        link_text: (el.textContent || '').trim().slice(0, 100) || undefined,
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
