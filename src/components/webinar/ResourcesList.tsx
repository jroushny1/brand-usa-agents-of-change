import { Download } from 'lucide-react'
import CardContainer from '@/components/ui/CardContainer'

interface Resource {
  name: string
  url: string
}

interface ResourcesListProps {
  resources: Resource[]
}

export default function ResourcesList({ resources }: ResourcesListProps) {
  return (
    <CardContainer>
      <h2 className="text-lg font-semibold text-brand-navy mb-4">Resources</h2>
      <div className="space-y-3">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex-center">
              <Download className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-gray-700 font-medium">
                {resource.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </CardContainer>
  )
}
