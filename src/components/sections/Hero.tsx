import Image from 'next/image';
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
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center pt-20">
          
          {/* Logo Gigante Central */}
          <Image
            src="/logo-bowl-digital.png"
            alt="Bowl Digital"
            width={720}
            height={320}
            priority
            className="drop-shadow-2xl mb-8"
            style={{ width: '100%', maxWidth: '720px', height: 'auto' }}
          />

          <p className="text-white/80 text-2xl md:text-3xl tracking-wider mb-10">
            DIGITAL · AGÊNCIA FULL SERVICE
          </p>

          {/* Botão */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold py-5 px-16 rounded-2xl text-xl tracking-wider transition-all active:scale-95 shadow-2xl"
          >
            CHAMAR NO WHATSAPP
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
