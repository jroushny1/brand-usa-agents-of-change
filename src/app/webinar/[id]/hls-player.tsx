'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    Hls: any
  }
}

interface HLSPlayerProps {
  playbackId: string
  onTimeUpdate?: (time: number) => void
  onEnded?: () => void
  poster?: string
}

export default function HLSPlayer({ playbackId, onTimeUpdate, onEnded, poster }: HLSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setupPlayer = () => {
      const src = `https://stream.mux.com/${playbackId}.m3u8`
      
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = src
      } else if (window.Hls && window.Hls.isSupported()) {
        // HLS.js for other browsers
        const hls = new window.Hls()
        hls.loadSource(src)
        hls.attachMedia(video)
      } else {
        // Fallback to direct MP4
        video.src = `https://stream.mux.com/${playbackId}/high.mp4`
      }
    }

    // Wait for HLS.js to load
    if (window.Hls) {
      setupPlayer()
    } else {
      const checkInterval = setInterval(() => {
        if (window.Hls) {
          clearInterval(checkInterval)
          setupPlayer()
        }
      }, 100)

      return () => clearInterval(checkInterval)
    }
  }, [playbackId])

  return (
    <video
      ref={videoRef}
      controls
      className="w-full h-full"
      poster={poster}
      onTimeUpdate={(e) => onTimeUpdate?.(e.currentTarget.currentTime)}
      onEnded={() => onEnded?.()}
    />
  )
}
