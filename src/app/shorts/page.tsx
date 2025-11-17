'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import HLSPlayer from '../webinar/[id]/hls-player'
import AccessCheck from '@/components/AccessCheck'

// Short-form video content
const shortFormVideos = [
  {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature—described as a reusable prompt similar to a custom GPT—to build a "Business Trip Packing Assistant." The app\'s design was inspired by the iconic virtual closet from the movie Clueless.',
    duration: '1 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    category: 'Demo',
    instructor: 'Janette Roush',
  },
  {
    id: 'ai-presentations',
    title: 'How AI Can Help with Presentations',
    description: 'Janette walks you through her complete AI-powered workflow for creating compelling presentations from the ground up. She shares her entire process, from organizing research in ChatGPT and brainstorming narrative frameworks to generating custom images.',
    duration: '9 min',
    muxPlaybackId: 'qZkSL00Sd00Qe01OLuiv6TdEiIVYKXZKKk1UPR5RckP2fM',
    category: 'Tutorial',
    instructor: 'Janette Roush',
  },
]

export default function ShortsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Handle scroll snap
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const videoHeight = window.innerHeight
      const newIndex = Math.round(scrollTop / videoHeight)

      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < shortFormVideos.length) {
        setCurrentIndex(newIndex)
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [currentIndex])

  // Auto-play current video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(e => console.log('Auto-play prevented:', e))
        } else {
          video.pause()
        }
      }
    })
  }, [currentIndex])

  const scrollToVideo = (index: number) => {
    const container = containerRef.current
    if (container) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AccessCheck>
      <>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center text-white hover:text-gray-300"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center">
                <Image
                  src="/brandusa-logo.png"
                  alt="Brand USA"
                  width={100}
                  height={33}
                  className="h-7 w-auto"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Vertical Video Feed */}
        <div
          ref={containerRef}
          className="h-screen overflow-y-scroll snap-y snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {shortFormVideos.map((video, index) => (
            <div
              key={video.id}
              className="h-screen w-full snap-start snap-always flex items-center justify-center bg-black relative"
            >
              {/* Video Player */}
              <div className="w-full max-w-md h-full relative">
                <div className="absolute inset-0">
                  <HLSPlayer
                    playbackId={video.muxPlaybackId}
                    poster={`https://image.mux.com/${video.muxPlaybackId}/thumbnail.png`}
                  />
                </div>

                {/* Video Info Overlay - Minimal */}
                <div className="absolute bottom-16 left-0 right-0 px-4 pb-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-8">
                  <div className="text-white">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <span className="bg-brand-sky px-2 py-0.5 rounded text-xs font-semibold mr-2">
                          {video.category}
                        </span>
                        <span className="text-xs opacity-80">{video.duration}</span>
                      </div>
                    </div>
                    <h2 className="text-base font-bold line-clamp-2">{video.title}</h2>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              {index > 0 && (
                <button
                  onClick={() => scrollToVideo(index - 1)}
                  className="absolute top-24 right-4 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
                  aria-label="Previous video"
                >
                  <ChevronUp className="h-6 w-6" />
                </button>
              )}

              {index < shortFormVideos.length - 1 && (
                <button
                  onClick={() => scrollToVideo(index + 1)}
                  className="absolute bottom-24 right-4 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
                  aria-label="Next video"
                >
                  <ChevronDown className="h-6 w-6" />
                </button>
              )}

              {/* Progress Indicators */}
              <div className="absolute top-20 right-4 flex flex-col gap-2">
                {shortFormVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToVideo(i)}
                    className={`w-1.5 h-8 rounded-full transition-all ${
                      i === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Go to video ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    </AccessCheck>
  )
}
