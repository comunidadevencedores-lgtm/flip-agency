// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Mapa de rotas curtas → destino com UTM fixa (Padrão Flip Agency)
const redirectMap: Record<string, string> = {
  '/instagram': '/?utm_source=instagram&utm_medium=social&utm_campaign=flip_bio_perm&utm_content=link_bio',
  '/story': '/?utm_source=instagram&utm_medium=social&utm_campaign=flip_stories_perm&utm_content=story_swipeup',
  '/tiktok': '/?utm_source=tiktok&utm_medium=social&utm_campaign=flip_tiktok_perm&utm_content=video_bio',
  '/google': '/?utm_source=google&utm_medium=organic&utm_campaign=flip_gbp_perm&utm_content=perfil_empresa',
  '/qr': '/?utm_source=qrcode&utm_medium=qrcode&utm_campaign=flip_qr_loja_perm&utm_content=cartao_fisico',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (redirectMap[pathname]) {
    const url = request.nextUrl.clone()
    const [path, query] = redirectMap[pathname].split('?')
    url.pathname = path
    url.search = query
    return NextResponse.redirect(url, 307)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/instagram', '/story', '/tiktok', '/google', '/qr'],
}
