'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { captureAttribution } from '@/lib/analytics/attribution'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Captura UTMs sempre que a URL mudar
    captureAttribution()
  }, [pathname, searchParams])

  return null
}
