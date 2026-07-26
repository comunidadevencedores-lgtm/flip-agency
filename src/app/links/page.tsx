import type { Metadata } from 'next';
import { SITE, buildWaLink } from '@/lib/data';
import { IconWorkflow, IconTrendingUp, IconGlobe } from '@/components/ui/Icons';
import styles from './page.module.css';

// Página de bio para o Instagram — não precisa ser indexada pelo Google
// (é conteúdo redundante ao resto do site, feito só pra esse contexto).
export const metadata: Metadata = {
  title: `${SITE.name} | Links`,
  robots: { index: false, follow: true },
};

const LINKS = [
  {
    id: 'sistema',
    Icon: IconWorkflow,
    title: 'Sites & Sistemas Sob Medida',
    badge: 'ORÇAMENTO GRÁTIS',
    sub: 'Next.js, Supabase, CRM e automação de WhatsApp.',
    href: buildWaLink('Olá! Vi o Instagram da Bowl Digital e quero um orçamento para meu negócio.'),
    external: true,
    featured: true,
  },
  {
    id: 'trafego',
    Icon: IconTrendingUp,
    title: 'Tráfego Pago & Full Service',
    sub: 'Atração de clientes e escala de faturamento.',
    href: buildWaLink('Quero entender como funcionam os serviços de tráfego e marketing da Bowl Digital.'),
    external: true,
    featured: false,
  },
  {
    id: 'site',
    Icon: IconGlobe,
    title: 'Conhecer o Site Oficial',
    sub: 'Portfólio, cases e serviços completos.',
    href: '/',
    external: false,
    featured: false,
  },
];

export default function LinksPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden />

      <div className={styles.card}>
        <header className={styles.header}>
          <div className={styles.logo}>Bowl Digital</div>
          <div className={styles.divider} />
          <h1 className={styles.title}>Bowl Digital | Soluções Digitais</h1>
          <p className={styles.subtitle}>Escala, Automação e Processos para Negócios Locais.</p>
        </header>

        <nav className={styles.list} aria-label="Links da Bowl Digital">
          {LINKS.map(({ id, Icon, title, badge, sub, href, external }) => (
            <a
              key={id}
              href={href}
              target={external ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Icon size={22} className={styles.linkIcon} />
              <span className={styles.linkText}>
                <span className={styles.linkTitle}>{title}</span>
                <span className={styles.linkSub}>{sub}</span>
              </span>
              {badge && <span className={styles.linkBadge}>{badge}</span>}
              <span className={styles.linkArrow} aria-hidden>→</span>
            </a>
          ))}
        </nav>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Bowl Digital. Todos os direitos reservados.
        </footer>
      </div>
    </main>
  );
}
