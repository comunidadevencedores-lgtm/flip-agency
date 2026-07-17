import { SERVICES } from '@/lib/data';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="servicos">
      <div className="container">
        <div className={`section-header section-header--center ${styles.header}`}>
          <div className={`tag ${styles.tag}`}>Expertise</div>
          <h2 className="display">Soluções completas para escala digital</h2>
          <p className={styles.subtitle}>
            Não somos apenas uma agência de marketing ou apenas uma software house.
            Somos o seu braço direito tecnológico e estratégico.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className={styles.divider} />
              <div className={styles.tagsRow}>
                {s.features.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
