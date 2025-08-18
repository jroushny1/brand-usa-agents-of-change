'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AccessCheck({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check for access cookie
    const hasAccess = document.cookie
      .split('; ')
      .find(row => row.startsWith('partner_access='))
      ?.split('=')[1] === 'GoTeamUSA'

    if (!hasAccess) {
      router.push('/enter')
    } else {
      setIsAuthorized(true)
    }
  }, [router])

  // Don't render anything until we've checked
  if (isAuthorized === null) {
    return null
  }

  // If not authorized, they're being redirected
  if (!isAuthorized) {
    return null
  }

  // Authorized - show the content
  return <>{children}</>
}
