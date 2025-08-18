'use client'

import { useEffect, useRef } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mux-video': any
    }
  }
}

interface MuxVideoProps {
  playbackId: string
  onTimeUpdate: (time: number) => void
  onEnded: () => void
  className?: string
}

export default function MuxVideo({ playbackId, onTimeUpdate, onEnded, className }: MuxVideoProps) {
  const videoRef = useRef<any>(null)

  useEffect(() => {
    // Load Mux video web component
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@mux/mux-video@0.16.0/dist/mux-video.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      onTimeUpdate(video.currentTime)
    }

    const handleEnded = () => {
      onEnded()
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [onTimeUpdate, onEnded])

  return (
    <mux-video
      ref={videoRef}
      playback-id={playbackId}
      controls
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
