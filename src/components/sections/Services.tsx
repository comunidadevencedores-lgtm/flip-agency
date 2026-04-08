import { SERVICES } from '@/lib/data';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="servicos">
      <div className="container">
        <div className="section-header">
          <div className="tag">O que fazemos</div>
          <h2 className="display">SERVIÇOS<br />COMPLETOS</h2>
          <p>Do conceito à conversão — tudo que precisa para crescer no digital em um só lugar.</p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <div key={s.title} className={styles.card} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className={styles.icon}>{s.icon}</div>
              <div className={styles.cardContent}>
                <h3>{s.title}</h3>
                <span className={styles.short}>{s.short}</span>
                <p>{s.description}</p>
                <ul className={styles.features}>
                  {s.features.map((f) => (
                    <li key={f}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
