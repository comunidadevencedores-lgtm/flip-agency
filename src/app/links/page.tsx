'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SITE } from '@/lib/data';

/* ─── constantes ─────────────────────────────────────────── */
const WA = SITE.whatsapp; // ex: "5541998736530"

const LINKS = [
  {
    id: 'barber',
    emoji: '💈',
    title: 'Sistema para Barbearias',
    badge: '14 DIAS GRÁTIS',
    sub: 'Automação de agenda, lembretes via WhatsApp e caixa.',
    href: `https://wa.me/${WA}?text=${encodeURIComponent(
      'Olá! Vi o sistema no Instagram e quero liberar meu teste de 14 dias para minha barbearia.'
    )}`,
    featured: true,
  },
  {
    id: 'trafego',
    emoji: '📈',
    title: 'Tráfego Pago & Full Service',
    sub: 'Atração de clientes e escala de faturamento.',
    href: `https://wa.me/${WA}?text=${encodeURIComponent(
      'Quero entender como funcionam os serviços de tráfego e marketing da FLIP.'
    )}`,
    featured: false,
  },
  {
    id: 'site',
    emoji: '🌐',
    title: 'Conhecer o Site Oficial',
    sub: 'Portfólio, cases e serviços completos.',
    href: '/',
    featured: false,
  },
];

/* ─── tipos ───────────────────────────────────────────────── */
interface LinkItem {
  id: string;
  emoji: string;
  title: string;
  badge?: string;
  sub: string;
  href: string;
  featured: boolean;
}

/* ─── sub-componentes ─────────────────────────────────────── */
function GridBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

function Logo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      {/* Tenta carregar logo real; fallback tipográfico se não existir */}
      <div
        style={{
          fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
          fontSize: '72px',
          lineHeight: '1',
          letterSpacing: '0.08em',
          color: '#0a0a0a',
          background: '#0a0a0a',
          WebkitTextFillColor: '#FFED00',
          padding: '6px 24px 2px',
          userSelect: 'none',
        }}
      >
        FLIP
      </div>
    </div>
  );
}

function LinkButton({ item, index }: { item: LinkItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  const baseSt: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    width: '100%',
    padding: item.featured ? '20px 24px' : '16px 24px',
    background: hovered ? '#FFED00' : '#0a0a0a',
    color: hovered ? '#0a0a0a' : '#FAFAFA',
    border: item.featured
      ? `2px solid ${hovered ? '#0a0a0a' : '#FFED00'}`
      : '2px solid #0a0a0a',
    borderRadius: '4px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
    transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: hovered
      ? '0 8px 32px rgba(0,0,0,0.18)'
      : item.featured
      ? '0 4px 20px rgba(255,237,0,0.25)'
      : '0 2px 8px rgba(0,0,0,0.10)',
    animationDelay: `${index * 0.08}s`,
    animation: 'fadeUp 0.5s ease both',
  };

  const emojiSt: React.CSSProperties = {
    fontSize: item.featured ? '28px' : '22px',
    flexShrink: 0,
    lineHeight: '1',
  };

  const textSt: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '3px',
    flex: 1,
  };

  const titleSt: React.CSSProperties = {
    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
    fontSize: item.featured ? '22px' : '18px',
    letterSpacing: '0.06em',
    lineHeight: '1',
    color: 'inherit',
  };

  const subSt: React.CSSProperties = {
    fontFamily: "'Barlow', sans-serif",
    fontSize: '12px',
    letterSpacing: '0.04em',
    color: hovered ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.55)',
    lineHeight: '1.4',
    transition: 'color 0.22s',
  };

  const badgeSt: React.CSSProperties = {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 700,
    fontSize: '10px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '3px 10px',
    background: hovered ? '#0a0a0a' : '#FFED00',
    color: hovered ? '#FFED00' : '#0a0a0a',
    borderRadius: '2px',
    flexShrink: 0,
    transition: 'all 0.22s',
  };

  const arrowSt: React.CSSProperties = {
    fontSize: '20px',
    flexShrink: 0,
    opacity: hovered ? 1 : 0.35,
    transform: hovered ? 'translateX(4px)' : 'translateX(0)',
    transition: 'all 0.22s',
    color: 'inherit',
  };

  return (
    <a
      href={item.href}
      target={item.id !== 'site' ? '_blank' : '_self'}
      rel="noopener noreferrer"
      style={baseSt}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={emojiSt}>{item.emoji}</span>
      <span style={textSt}>
        <span style={titleSt}>{item.title}</span>
        <span style={subSt}>{item.sub}</span>
      </span>
      {item.badge && <span style={badgeSt}>{item.badge}</span>}
      <span style={arrowSt}>→</span>
    </a>
  );
}

/* ─── página principal ────────────────────────────────────── */
export default function LinksPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const pageSt: React.CSSProperties = {
    minHeight: '100vh',
    background: '#FFED00',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '40px 16px',
    fontFamily: "'Barlow', sans-serif",
  };

  const cardSt: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0',
  };

  const headerSt: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '40px',
    animation: 'fadeUp 0.5s ease both',
  };

  const titleSt: React.CSSProperties = {
    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
    fontSize: '22px',
    letterSpacing: '0.12em',
    color: '#0a0a0a',
    lineHeight: '1',
    marginTop: '16px',
    textAlign: 'center',
  };

  const subtitleSt: React.CSSProperties = {
    fontFamily: "'Barlow', sans-serif",
    fontSize: '13px',
    color: 'rgba(0,0,0,0.6)',
    letterSpacing: '0.04em',
    textAlign: 'center',
    maxWidth: '320px',
    lineHeight: '1.5',
  };

  const dividerSt: React.CSSProperties = {
    width: '40px',
    height: '3px',
    background: '#0a0a0a',
    margin: '4px auto 0',
  };

  const listSt: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
    marginBottom: '48px',
  };

  const footerSt: React.CSSProperties = {
    fontFamily: "'Barlow', sans-serif",
    fontSize: '11px',
    color: 'rgba(0,0,0,0.45)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textAlign: 'center',
    animation: 'fadeUp 0.5s 0.4s ease both',
  };

  return (
    <>
      {/* Google Fonts inline para garantir carregamento */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,237,0,0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(255,237,0,0); }
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
      `}</style>

      <main style={pageSt}>
        <GridBackground />

        <div style={cardSt}>
          {/* ── HEADER ── */}
          <header style={headerSt}>
            <Logo />
            <div style={dividerSt} />
            <h1 style={titleSt}>FLIP | Soluções Digitais</h1>
            <p style={subtitleSt}>
              Escala, Automação e Processos para Negócios Locais.
            </p>
          </header>

          {/* ── LINKS ── */}
          <nav style={listSt} aria-label="Links da FLIP">
            {LINKS.map((item, i) => (
              <LinkButton key={item.id} item={item} index={i} />
            ))}
          </nav>

          {/* ── FOOTER ── */}
          <footer style={footerSt}>
            © 2026 FLIP. Todos os direitos reservados.
          </footer>
        </div>
      </main>
    </>
  );
}
