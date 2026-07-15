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
            Agência full service · Dev + Marketing
          </div>

          <h1 className={`display ${styles.heading}`}>
            SISTEMAS QUE GERAM{' '}
            <span className={styles.highlight}>CRESCIMENTO</span> TODOS OS DIAS
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
              className="btn btn--primary btn--lg"
            >
              Quero crescer com a Bowl
            </a>
            <Link href="/portfolio" className="btn btn--outline btn--lg">
              Ver portfólio
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>Full Service</strong>
              <span>Dev + Marketing sob o mesmo teto</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>Next.js</strong>
              <span>Sistemas sob medida, não templates</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>Curitiba</strong>
              <span>Time local, atendimento direto</span>
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
 src="/logo-bowl-digital.png"
  alt="Bowl Digital"
  width={640}
  height={340}
  className={styles.logoImg}
  style={{ width: 'auto', height: 'auto', maxWidth: '480px' }}
  priority
/>
          </div>
          <div className={styles.marqueeWrap}>
            <div className={styles.marquee}>
              {Array(8).fill('BOWL DIGITAL — SISTEMAS QUE GERAM CRESCIMENTO — ').map((t, i) => (
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
