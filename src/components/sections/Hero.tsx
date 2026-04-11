import Link from 'next/link';
import Image from 'next/image';
import { WA_LINK } from '@/lib/data';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>

          <div className={`tag ${styles.tag}`}>
            Para empresas que já investem em marketing e não escalam
          </div>

          <h1 className={`display ${styles.heading}`}>
            PARE DE INVESTIR EM MARKETING SEM{' '}
            <span className={styles.highlight}>RESULTADO</span>
          </h1>

          <p className={styles.sub}>
            Ajudamos empresas a transformar tráfego em clientes todos os dias
            com estratégia, automação e campanhas que realmente convertem.
          </p>

          <div className={styles.actions}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn--primary btn--lg"
            >
              Quero mais clientes
            </a>
            <Link href="/portfolio" className="btn btn--outline btn--lg">
              Ver resultados reais
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>+50</strong>
              <span>Empresas atendidas</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>R$2M+</strong>
              <span>Gerados em anúncios</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>+30%</strong>
              <span>Média de crescimento</span>
            </div>
          </div>

          <p className={styles.microProof}>
            ⚡ Diagnóstico gratuito • Resposta rápida no WhatsApp
          </p>
        </div>

        {/* VISUAL — logo real */}
        <div className={styles.visual} aria-hidden>
          <div className={styles.logoHero}>
            <Image
  src="/logoflip.jpeg"
  alt="FLIP Marketing & Publicidade"
  width={320}
  height={160}
  className={styles.logoImg}
  style={{ width: 'auto', height: 'auto', maxWidth: '320px', maxHeight: '160px' }}
  priority
/>
          </div>
          <div className={styles.marqueeWrap}>
            <div className={styles.marquee}>
              {Array(8).fill('FLIP — MARKETING & PUBLICIDADE — ').map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
