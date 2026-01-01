import CardContainer from '@/components/ui/CardContainer'

interface KeyTakeawaysListProps {
  takeaways: string[]
}

export default function KeyTakeawaysList({ takeaways }: KeyTakeawaysListProps) {
  return (
    <CardContainer>
      <h2 className="text-lg font-semibold text-brand-navy mb-4">Key Takeaways</h2>
      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex-start">
            <span className="takeaway-badge">
              {index + 1}
            </span>
            <span className="text-gray-700 text-sm">{takeaway}</span>
          </li>
        ))}
      </ul>
    </CardContainer>
  )
}
