import Link from 'next/link';
import { WA_LINK } from '@/lib/data';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          
          {/* POSICIONAMENTO */}
          <div className={`tag ${styles.tag}`}>
            Para empresas que já investem em marketing e não escalam
          </div>

          {/* HEADLINE (DOR + RESULTADO) */}
          <h1 className={`display ${styles.heading}`}>
            PARE DE INVESTIR<br />
            EM MARKETING SEM<br />
            <span className={styles.highlight}>RESULTADO</span>
          </h1>

          {/* SUBHEADLINE (PROMESSA CLARA) */}
          <p className={styles.sub}>
            Ajudamos empresas a transformar tráfego em clientes todos os dias
            com estratégia, automação e campanhas que realmente convertem.
          </p>

          {/* CTA (DESEJO, NÃO AÇÃO GENÉRICA) */}
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

          {/* PROVA SOCIAL (IMEDIATA) */}
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

          {/* MICRO PROVA (GATILHO FINAL) */}
          <p className={styles.microProof}>
            ⚡ Diagnóstico gratuito • Resposta rápida no WhatsApp
          </p>
        </div>

        {/* VISUAL (mantém sua identidade forte) */}
        <div className={styles.visual} aria-hidden>
          <div className={styles.logoHero}>
            <span>FL</span>
            <div className={styles.skateIcon}>
              <svg viewBox="0 0 80 80" fill="none">
                <ellipse cx="40" cy="40" rx="14" ry="36" fill="#0a0a0a" />
                <circle cx="40" cy="16" r="4" fill="#FFED00"/>
                <circle cx="40" cy="64" r="4" fill="#FFED00"/>
                <ellipse cx="40" cy="40" rx="36" ry="14" fill="none" stroke="#0a0a0a" strokeWidth="3"/>
              </svg>
            </div>
            <span>P</span>
          </div>

          <div className={styles.marqueeWrap}>
            <div className={styles.marquee}>
              {Array(6).fill('FLIP — MARKETING & PUBLICIDADE — ').map((t, i) => (
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