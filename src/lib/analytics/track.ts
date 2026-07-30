// lib/analytics/track.ts
type TrackParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function track(event: string, params: TrackParams = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    ...params,
  })
}
