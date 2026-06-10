'use client'

import { useEffect, useRef } from 'react'

// Minimal typings for the HLS.js global loaded via <Script> in layout.tsx
interface HlsErrorData {
  fatal: boolean
  type: string
}

interface HlsInstance {
  loadSource(src: string): void
  attachMedia(media: HTMLMediaElement): void
  destroy(): void
  startLoad(): void
  recoverMediaError(): void
  on(event: string, callback: (event: string, data: HlsErrorData) => void): void
}

interface HlsConstructor {
  new (): HlsInstance
  isSupported(): boolean
  Events: { ERROR: string }
  ErrorTypes: { NETWORK_ERROR: string; MEDIA_ERROR: string }
}

// Make Hls available on the window object
declare global {
  interface Window {
    Hls: HlsConstructor
  }
}

interface HLSPlayerProps {
  playbackId: string
  poster?: string
  onTimeUpdate?: (time: number) => void
  onEnded?: () => void
  onLoadedMetadata?: (duration: number) => void
}

export default function HLSPlayer({
  playbackId,
  poster,
  onTimeUpdate,
  onEnded,
  onLoadedMetadata,
}: HLSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<HlsInstance | null>(null)

  useEffect(() => {
    // Ensure this code only runs on the client
    if (typeof window === 'undefined') {
      return
    }

    const video = videoRef.current
    if (!video) return

    const src = `https://stream.mux.com/${playbackId}.m3u8`

    function setupHlsPlayer() {
      if (!video) {
        return
      }
      if (window.Hls && hlsRef.current) {
        hlsRef.current.destroy()
      }
      const hls = new window.Hls()
      hlsRef.current = hls
      hls.loadSource(src)
      hls.attachMedia(video)

      hls.on(window.Hls.Events.ERROR, function (event: string, data: HlsErrorData) {
        if (data.fatal) {
          switch (data.type) {
            case window.Hls.ErrorTypes.NETWORK_ERROR:
              console.error('fatal network error encountered, trying to recover')
              hls.startLoad()
              break
            case window.Hls.ErrorTypes.MEDIA_ERROR:
              console.error('fatal media error encountered, trying to recover')
              hls.recoverMediaError()
              break
            default:
              console.error('unrecoverable fatal error', data)
              hls.destroy()
              break
          }
        }
      })
    }

    function setupPlayer() {
      if (!video) {
        return
      }
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = src
      } else if (window.Hls && window.Hls.isSupported()) {
        // HLS.js for other browsers
        setupHlsPlayer()
      } else {
        // Fallback for browsers without HLS support
        console.warn('HLS.js not loaded or supported. Falling back to MP4.')
        video.src = `https://stream.mux.com/${playbackId}/high.mp4`
      }
    }

    // If HLS.js is already loaded, setup the player immediately
    if (window.Hls) {
      setupPlayer()
    } else {
      // Otherwise, wait for it to load
      const checkInterval = setInterval(() => {
        if (window.Hls) {
          clearInterval(checkInterval)
          setupPlayer()
        }
      }, 100)

      // Cleanup the interval if the component unmounts
      return () => clearInterval(checkInterval)
    }

    // Cleanup function for HLS instance
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
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
      onLoadedMetadata={(e) => onLoadedMetadata?.(e.currentTarget.duration)}
    />
  )
}
