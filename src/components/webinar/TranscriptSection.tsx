import { ChevronDown } from 'lucide-react'
import CardContainer from '@/components/ui/CardContainer'

interface TranscriptSectionProps {
  transcript: string
}

export default function TranscriptSection({ transcript }: TranscriptSectionProps) {
  const paragraphs = transcript.split('\n\n')

  return (
    <CardContainer>
      <details className="group" open>
        <summary className="flex-center justify-between cursor-pointer list-none">
          <h2 className="text-lg font-semibold text-brand-navy">
            Full Transcript: AI for Tourism Professionals
          </h2>
          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="prose prose-sm max-w-none">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="transcript-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </details>
    </CardContainer>
  )
}
