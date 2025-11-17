'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function TranscriptToggle({ transcript }: { transcript: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <h2 className="text-2xl font-bold text-[#191B56]">Full Transcript</h2>
        {expanded ? (
          <ChevronUp className="h-6 w-6 text-gray-500" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-500" />
        )}
      </button>
      {expanded && (
        <div className="mt-6 prose max-w-none">
          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {transcript}
          </p>
        </div>
      )}
    </div>
  )
}
