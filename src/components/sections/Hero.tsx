'use client'

import Link from 'next/link';
import Image from 'next/image';
import { WA_LINK } from '@/lib/data';
import styles from './Hero.module.css';
import { track } from '@/lib/analytics/track';
import { getAttribution } from '@/lib/analytics/attribution';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.aurora} aria-hidden>
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>

          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Agência full service · Dev + Marketing
          </div>

          <h1 className={styles.heading}>
            Sistemas que geram{' '}
            <span className={styles.highlight}>crescimento</span>
            {' '}todos os dias
          </h1>

          <p className={styles.sub}>
            Sites, sistemas, CRM, automações e aquisição de clientes — tudo sob o mesmo teto,
            construído do zero pra fazer seu negócio crescer de verdade.
          </p>

          <div className={styles.actions}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={styles.btnPrimary}
              onClick={() =>
                track('whatsapp_click', {
                  click_location: 'hero',
                  value: 1,
                  ...getAttribution(),
                })
              }
            >
              Quero crescer com a Bowl
            </a>
            <Link href="/portfolio" className={styles.btnGhost}>
              Ver portfólio
            </Link>
          </div>

          <div className={styles.iconRow}>
            <div className={styles.iconItem}>
              <span className={styles.iconBadge}>⚡</span>
              <span>Tecnologia</span>
            </div>
            <div className={styles.iconItem}>
              <span className={styles.iconBadge}>🎯</span>
              <span>Estratégia</span>
            </div>
            <div className={styles.iconItem}>
              <span className={styles.iconBadge}>📈</span>
              <span>Resultados</span>
            </div>
          </div>
        </div>

        {/* VISUAL — card flutuante + selo com glow */}
        <div className={styles.visual} aria-hidden>
          <div className={styles.glowBadge}>
            <Image
              src="/icon-bowl.png"
              alt=""
              width={120}
              height={120}
              className={styles.glowBadgeImg}
            />
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.dot} data-c="1" />
              <span className={styles.dot} data-c="2" />
              <span className={styles.dot} data-c="3" />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.logoWrap}>
                <Image
                  src="/logo-bowl-digital.png"
                  alt="Bowl Digital"
                  width={280}
                  height={150}
                  className={styles.logoImg}
                  priority
                />
              </div>
              <div className={styles.barRow}>
                <span className={styles.bar} style={{ width: '78%' }} />
              </div>
              <div className={styles.barRow}>
                <span className={styles.bar} style={{ width: '52%' }} />
              </div>
              <div className={styles.barRow}>
                <span className={styles.bar} style={{ width: '64%' }} />
              </div>
              <div className={styles.miniStats}>
                <div>
                  <strong>+30%</strong>
                  <span>Conversão</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Automação</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.chip} ${styles.chip1}`}>
            <span className={styles.chipDot} />
            Next.js
          </div>
          <div className={`${styles.chip} ${styles.chip2}`}>
            <span className={styles.chipDot} />
            Google Ads
          </div>
          <div className={`${styles.chip} ${styles.chip3}`}>
            <span className={styles.chipDot} />
            WhatsApp + IA
          </div>
        </div>
      </div>
    </section>
  );
}
