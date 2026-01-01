'use client'

import CardContainer from '@/components/ui/CardContainer'

interface Chapter {
  time: number
  title: string
}

interface ChaptersListProps {
  chapters: Chapter[]
}

export default function ChaptersList({ chapters }: ChaptersListProps) {
  const handleChapterClick = (time: number) => {
    const player = document.querySelector('video') as any
    if (player) {
      player.currentTime = time
      player.play()
    }
  }

  return (
    <CardContainer>
      <h2 className="text-lg font-semibold text-brand-navy mb-4">Chapters</h2>
      <div className="space-y-2">
        {chapters.map((chapter, index) => (
          <button
            key={index}
            onClick={() => handleChapterClick(chapter.time)}
            className="w-full flex-center justify-between p-3 rounded-lg hover:bg-gray-50 transition text-left"
          >
            <div className="flex-center">
              <span className="text-sm font-medium text-gray-500 w-12">
                {Math.floor(chapter.time / 60)}:{(chapter.time % 60).toString().padStart(2, '0')}
              </span>
              <span className="ml-3 text-gray-900">{chapter.title}</span>
            </div>
          </button>
        ))}
      </div>
    </CardContainer>
  )
}
