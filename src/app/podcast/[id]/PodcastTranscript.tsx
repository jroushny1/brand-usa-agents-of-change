'use client'

import { useState, useEffect } from 'react'
import TranscriptSection from '@/components/webinar/TranscriptSection'

export default function PodcastTranscript({ id }: { id: string }) {
  const [transcript, setTranscript] = useState<string>('')
  const [transcriptLoading, setTranscriptLoading] = useState(true)

  useEffect(() => {
    async function loadTranscript() {
      try {
        const res = await fetch(`/transcripts/podcasts/${id}.md`)
        if (res.ok) {
          const text = await res.text()
          setTranscript(text)
        }
      } catch (error) {
        console.error('Error loading transcript:', error)
      } finally {
        setTranscriptLoading(false)
      }
    }
    loadTranscript()
  }, [id])

  if (transcriptLoading || !transcript) return null

  return (
    <div className="bg-white rounded-2xl shadow-lg mb-8">
      <TranscriptSection transcript={transcript} />
    </div>
  )
}
