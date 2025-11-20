'use client'

import { useEffect, useRef } from 'react'

// Make Hls available on the window object
declare global {
  interface Window {
    Hls: any
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
  const hlsRef = useRef<any>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const src = `https://stream.mux.com/${playbackId}.m3u8`

    // Check for native HLS support (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    } else if (window.Hls && window.Hls.isSupported()) {
      // Use HLS.js if available
      if (hlsRef.current) {
        hlsRef.current.destroy()
      }
      const hls = new window.Hls()
      hlsRef.current = hls
      hls.loadSource(src)
      hls.attachMedia(video)
      
      hls.on(window.Hls.Events.ERROR, function (event: any, data: any) {
        if (data.fatal) {
          switch (data.type) {
            case window.Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.error('fatal network error encountered, trying to recover');
              hls.startLoad();
              break;
            case window.Hls.ErrorTypes.MEDIA_ERROR:
              console.error('fatal media error encountered, trying to recover');
              hls.recoverMediaError();
              break;
            default:
              // cannot recover
              console.error('unrecoverable fatal error', data);
              hls.destroy();
              break;
          }
        }
      });
    } else {
      console.warn('HLS.js is not loaded or supported. Falling back to MP4.')
      // Fallback for browsers without HLS support
       video.src = `https://stream.mux.com/${playbackId}/high.mp4`
    }

    // Cleanup function
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
