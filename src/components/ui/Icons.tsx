/**
 * Conjunto de ícones SVG compartilhado do projeto.
 *
 * Por quê: os emojis (💻📡🤝⚙️) usados em SERVICES/PACKAGES/DIFERENCIAIS
 * renderizam de forma diferente em cada sistema operacional/fonte instalada
 * (Windows, macOS, Android têm emoji sets distintos) — isso é inconsistência
 * visual real, não só estética. Ícones vetoriais resolvem isso e também
 * aproximam o visual do padrão usado por Vercel/Stripe/Linear (traço fino,
 * geometria simples, sem cor própria — herdam a cor do texto via currentColor).
 *
 * O ícone do WhatsApp também estava duplicado (path idêntico) em Navbar,
 * Footer, WhatsAppFloat e na página de Contato — centralizado aqui.
 */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, strokeWidth = 1.75, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...props,
  };
}

export function WhatsAppIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.118 1.523 5.845L.057 23.576a.75.75 0 00.92.92l5.733-1.466A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

/** Sites & Sistemas Sob Medida */
export function IconCode(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  );
}

/** Tráfego Pago */
export function IconTarget(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

/** Redes Sociais */
export function IconShare(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.7 15.8 6.3M8.2 13.3l7.6 4.4" />
    </svg>
  );
}

/** Automação & CRM */
export function IconWorkflow(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h5a2 2 0 0 1 2 2V14M6.5 10v4a2 2 0 0 0 2 2H14" />
    </svg>
  );
}

/** SEO */
export function IconSearch(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.3-4.3" />
    </svg>
  );
}

/** Consultoria Digital */
export function IconCompass(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </svg>
  );
}

/** Highlights: Cabe no seu bolso */
export function IconWallet(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a2 2 0 1 0 0 4h5" />
    </svg>
  );
}

/** Highlights: Do simples ao robusto */
export function IconLayers(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

/** Highlights: Uma equipe só */
export function IconUsers(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M2.5 19c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5" />
      <path d="M15.5 5a3.25 3.25 0 0 1 0 6.4M21.5 19c0-2.9-2.2-4.9-5-5.4" />
    </svg>
  );
}

/** Sobre: Dev + marketing */
export function IconPuzzle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3h4v2.4a1.6 1.6 0 0 0 2.9 1H18a2 2 0 0 1 2 2v2.1a1.6 1.6 0 0 0-1 2.9 1.6 1.6 0 0 0 1 2.9V18a2 2 0 0 1-2 2h-2.4a1.6 1.6 0 0 0-2.9-1V21H9v-2.4a1.6 1.6 0 0 0-2.9 1H4a2 2 0 0 1-2-2v-2.1a1.6 1.6 0 0 0 0-3.1V9a2 2 0 0 1 2-2h2.1A1.6 1.6 0 0 0 9 5.9Z" />
    </svg>
  );
}

/** Sobre: Visão integrada */
export function IconTrendingUp(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

/** Sobre: Parceria real */
export function IconHandshake(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m2 12 4.5-4.5a2 2 0 0 1 2.8 0L11 9.2" />
      <path d="M9 12.5 12 15.5" />
      <path d="m22 12-4.5-4.5a2 2 0 0 0-2.8 0L13 9.2" />
      <path d="M15 12.5 12 15.5l-2 2a1.7 1.7 0 0 1-2.4-2.4" />
    </svg>
  );
}

/** Sobre: Execução ágil */
export function IconZap(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

/** Links: Site institucional */
export function IconGlobe(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  );
}

