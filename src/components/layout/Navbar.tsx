'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE, WA_LINK } from '@/lib/data';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Cases', href: '/portfolio#cases' },
  { label: 'Pacotes', href: '/#pacotes' },
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
  src="/logoflip.jpeg"
  alt={SITE.fullName}
  height={180}
  width={0}
  sizes="100vw"
  className={styles.logoImg}
  priority
  style={{ width: "auto", height: "180px" }}
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.118 1.523 5.845L.057 23.576a.75.75 0 00.92.92l5.733-1.466A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.242-1.375l-.374-.217-3.875.99.99-3.875-.217-.374A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
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
