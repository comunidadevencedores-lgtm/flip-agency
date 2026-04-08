import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { SITE, WA_LINK } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: `Contato | ${SITE.name}`,
  description: 'Entre em contato com a FLIP Marketing & Publicidade. Maringá, PR.',
  alternates: { canonical: `${SITE.url}/contato` },
};

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.118 1.523 5.845L.057 23.576a.75.75 0 00.92.92l5.733-1.466A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: SITE.phone,
    href: WA_LINK,
    cta: 'Mandar mensagem',
  },
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
    value: 'Maringá, PR — Brasil',
    href: 'https://maps.google.com/?q=Maringá,PR',
    cta: 'Ver no mapa',
  },
  {
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    label: 'Instagram',
    value: '@flipagencia',
    href: SITE.instagram,
    cta: 'Seguir no Instagram',
  },
];

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className="container">
            <div className="tag" style={{ color: 'var(--yellow)', borderColor: 'var(--yellow)' }}>
              Fale com a gente
            </div>
            <h1 className={`display ${styles.heading}`}>
              BORA<br />CONVERSAR?
            </h1>
            <p className={styles.sub}>
              Sem compromisso, sem enrolação. Conta o que precisa e a gente te mostra como a FLIP pode ajudar.
            </p>
          </div>
        </div>

        {/* Contact grid */}
        <section className="section">
          <div className="container">
            <div className={styles.grid}>
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
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
                <h2 className="display" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
                  A forma mais rápida?<br />
                  <span style={{ color: 'var(--yellow)', WebkitTextStroke: '2px var(--black)' }}>WhatsApp.</span>
                </h2>
                <p>Resposta garantida em até 2 horas nos dias úteis.</p>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                Chamar no WhatsApp agora
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
