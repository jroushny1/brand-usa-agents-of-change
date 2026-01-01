import { ReactNode } from 'react'

interface CardContainerProps {
  children: ReactNode
  className?: string
}

export default function CardContainer({ children, className = '' }: CardContainerProps) {
  return (
    <div className={`card-container ${className}`}>
      {children}
    </div>
  )
}
