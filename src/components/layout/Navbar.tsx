'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE, WA_LINK } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/Icons';
import styles from './Navbar.module.css';

// Antes apontavam para '/#servicos' e '/#pacotes' — âncoras que só existem
// nas páginas /servicos e /pacotes, não na home. Clicar não levava a lugar
// nenhum. Corrigido para apontar direto para a página real.
const NAV_LINKS = [
  { label: 'Serviços', href: '/servicos' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Cases', href: '/portfolio#cases' },
  { label: 'Pacotes', href: '/pacotes' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
  <Link href="/" className={styles.logo} aria-label={SITE.fullName}>
  <Image
    src="/logo-bowl-digitalfb.png"
    alt={SITE.fullName}
    height={56}
    width={0}
    sizes="100vw"
    className={styles.logoImg}
    priority
    style={{ width: "auto", height: "56px" }}   // ← aumentado
  />
</Link>
          {/* Desktop Links */}
          <ul className={styles.links}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`btn btn--primary ${styles.cta}`}>
            <span>Fale Conosco</span>
            <WhatsAppIcon size={16} />
          </a>

          {/* Burger */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--wa" style={{ width: '100%', justifyContent: 'center' }}>
                Chamar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
