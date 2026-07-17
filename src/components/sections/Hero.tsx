import Image from 'next/image';
import Link from 'next/link';
import { WA_LINK } from '@/lib/data';
import styles from './Hero.module.css';

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

          {/* Logo grande no lugar do título */}
          <div className="my-8">
            <Image
              src="/logo-bowl-digital.png"
              alt="Bowl Digital"
              width={620}
              height={260}
              priority
              className="mx-auto drop-shadow-2xl"
              style={{ maxWidth: '620px', height: 'auto' }}
            />
          </div>

          <p className={styles.sub}>
            Sites, sistemas, CRM, automações e aquisição de clientes — tudo sob o mesmo teto,
            construído do zero pra fazer seu negócio crescer de verdade.
          </p>

          <div className={styles.actions}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Quero crescer com a Bowl
            </a>
            <Link href="/portfolio" className={styles.btnGhost}>
              Ver portfólio
            </Link>
          </div>

          <div className={styles.trust}>
            <span>Full Service</span>
            <i />
            <span>Next.js &amp; Supabase</span>
            <i />
            <span>Curitiba, PR</span>
          </div>
        </div>

        {/* Mantém o card visual do lado direito */}
        <div className={styles.visual} aria-hidden>
          {/* ... mantém o card que já tinha ... */}
        </div>
      </div>
    </section>
  );
}
