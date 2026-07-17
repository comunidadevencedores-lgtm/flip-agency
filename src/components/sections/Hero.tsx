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

      <div className={`container ${styles.inner}`} style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '80px'
      }}>
        
        <div className="flex flex-col items-center">
          {/* Logo Gigante */}
          <Image
            src="/logo-bowl-digital.png"
            alt="Bowl Digital"
            width={680}
            height={300}
            priority
            className="drop-shadow-2xl mb-6"
            style={{ width: '100%', maxWidth: '680px', height: 'auto' }}
          />

          <p className="text-white/80 text-xl md:text-2xl tracking-[0.02em] mt-2">
            DIGITAL · AGÊNCIA FULL SERVICE
          </p>

          {/* Botão WhatsApp grande */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold py-5 px-16 rounded-2xl text-xl tracking-wider transition-all active:scale-95 shadow-xl"
          >
            CHAMAR NO WHATSAPP
            <span className="text-2xl">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
