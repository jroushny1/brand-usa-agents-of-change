'use client'

import { useEffect, useState } from 'react'

// The instrument is a self-contained document with its own dark design system, so
// it stays in a frame to keep its CSS isolated. The frame reports its content
// height back here and we size to it, which removes the nested scrollbar — the
// page scrolls normally and the instrument reads as a section of it.
export default function StoryLabFrame() {
  const [height, setHeight] = useState<number>(3200)

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data as { type?: string; height?: number } | null
      if (data?.type === 'story-lab-height' && typeof data.height === 'number' && data.height > 0) {
        setHeight(data.height)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <iframe
      src="/story-lab.html"
      title="Story Lab — The Periodic Table of Travel Storytelling"
      scrolling="no"
      style={{ height }}
      className="block w-full border-0"
    />
  )
}
