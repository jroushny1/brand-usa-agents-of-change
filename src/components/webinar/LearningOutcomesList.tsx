import { CheckCircle } from 'lucide-react'
import CardContainer from '@/components/ui/CardContainer'

interface LearningOutcomesListProps {
  outcomes: string[]
}

export default function LearningOutcomesList({ outcomes }: LearningOutcomesListProps) {
  return (
    <CardContainer>
      <h2 className="text-lg font-semibold text-brand-navy mb-4">What You'll Learn</h2>
      <p className="text-sm text-gray-600 mb-4">After watching this video, you will be able to:</p>
      <ul className="space-y-2">
        {outcomes.map((outcome, index) => (
          <li key={index} className="flex-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span className="text-gray-700 text-sm">{outcome}</span>
          </li>
        ))}
      </ul>
    </CardContainer>
  )
}
