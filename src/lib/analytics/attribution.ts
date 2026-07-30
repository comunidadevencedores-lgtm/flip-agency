// lib/analytics/attribution.ts
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
const STORAGE_KEY = 'flip_attribution'

export function captureAttribution() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const hasUtm = UTM_KEYS.some((key) => params.has(key))

  if (hasUtm) {
    const attribution: Record<string, string> = {}
    UTM_KEYS.forEach((key) => {
      const value = params.get(key)
      if (value) attribution[key] = value
    })
    attribution.landing_page = window.location.pathname
    attribution.captured_at = new Date().toISOString()
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution))
  }
}

export function getAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const raw = sessionStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : {}
}
