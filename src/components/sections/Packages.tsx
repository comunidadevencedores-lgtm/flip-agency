import { PACKAGES, WA_LINK } from '@/lib/data';
import styles from './Packages.module.css';

export default function Packages() {
  return (
    <section className={`section section--gray ${styles.packages}`} id="pacotes">
      <div className="container">
        <div className="section-header section-header--center">
          <div className="tag">Nossos pacotes</div>
          <h2 className="display">PLANOS PARA<br />TODO TAMANHO</h2>
          <p>Desde o negócio local que está começando até a empresa que quer escalar de verdade.</p>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`${styles.card} ${pkg.highlight ? styles.featured : ''}`}
              style={pkg.color !== '#f0f0f0' && pkg.color !== '#FFED00'
                ? { background: pkg.color, color: pkg.textColor || '#0a0a0a' }
                : {}
              }
            >
              {pkg.highlight && (
                <div className={styles.featuredBadge}>⭐ Mais Escolhido</div>
              )}
              <div className={styles.cardTop}>
                <span className={styles.badge}>{pkg.badge}</span>
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
              </div>
              <ul className={styles.includes}>
                {pkg.includes.map((item) => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`${WA_LINK}&text=${encodeURIComponent(`Olá! Tenho interesse no pacote ${pkg.name} da FLIP.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${pkg.highlight ? 'btn--primary' : 'btn--outline'} ${styles.cta}`}
              >
                Quero esse pacote
              </a>
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          Todos os pacotes são mensais e sem fidelidade. Precisa de algo personalizado?{' '}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            Fale com a gente.
          </a>
        </p>
      </div>
    </section>
  );
}
