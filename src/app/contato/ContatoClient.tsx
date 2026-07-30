'use client'

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import HelpTriage from '@/components/sections/HelpTriage';
import { SITE, WA_LINK } from '@/lib/data';
import styles from './page.module.css';
import { track } from '@/lib/analytics/track';
import { getAttribution } from '@/lib/analytics/attribution';

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: 'E-mail',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    cta: 'Enviar e-mail',
  },
  {
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    label: 'Localização',
    value: 'Curitiba, PR — Brasil',
    href: 'https://maps.google.com/?q=Curitiba,PR',
    cta: 'Ver no mapa',
  },
  {
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    label: 'Instagram',
    value: '@bowl.digital',
    href: SITE.instagram,
    cta: 'Seguir no Instagram',
  },
];

export default function ContatoClient() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className="container">
            <div className="tag" style={{ color: 'var(--bowl-blue)', borderColor: 'var(--bowl-blue)' }}>
              Fale com a gente
            </div>
            <h1 className={`display ${styles.heading}`}>
              BORA<br />CONVERSAR?
            </h1>
            <p className={styles.sub}>
              Sem compromisso, sem enrolação. Conta o que precisa e a gente te mostra como a Bowl pode ajudar.
            </p>
          </div>
        </div>

        <section className="section section--sm">
          <div className="container">
            <HelpTriage />
          </div>
        </section>

        <section className="section section--sm section--gray">
          <div className="container">
            <div className={styles.header}>
              <h2 className={styles.otherChannelsTitle}>Prefere outro canal?</h2>
            </div>
            <div className={styles.grid}>
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  onClick={() => {
                    const eventMap: Record<string, string> = {
                      'E-mail': 'email_click',
                      'Localização': 'address_click',
                      'Instagram': 'outbound_click',
                    };
                    track(eventMap[item.label] || 'outbound_click', {
                      click_location: 'contato_page',
                      platform: item.label,
                      value: 1,
                      ...getAttribution(),
                    });
                  }}
                >
                  <div className={styles.cardIcon}>{item.icon}</div>
                  <div>
                    <span className={styles.cardLabel}>{item.label}</span>
                    <p className={styles.cardValue}>{item.value}</p>
                    <span className={styles.cardCta}>{item.cta} →</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.bigCta}>
              <div className={styles.bigCtaText}>
                <h2 className="display" style={{ fontSize: 'clamp(32px,4.5vw,52px)' }}>
                  Nenhuma opção acima combina?<br />
                  <span style={{ color: 'var(--bowl-blue)', WebkitTextStroke: '2px var(--black)' }}>Chama a gente mesmo assim.</span>
                </h2>
                <p>Resposta garantida em até 2 horas nos dias úteis.</p>
              </div>
              <a 
                href={WA_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn--primary btn--lg"
                onClick={() =>
                  track('whatsapp_click', {
                    click_location: 'contato_big_cta',
                    value: 1,
                    ...getAttribution(),
                  })
                }
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
