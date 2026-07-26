import { SERVICES } from '@/lib/data';
import { IconCode, IconTarget, IconShare, IconWorkflow, IconSearch, IconCompass } from '@/components/ui/Icons';
import styles from './Services.module.css';

// Mesma ordem de SERVICES em lib/data.ts — ícone vetorial no lugar do emoji
// (emoji renderiza diferente por sistema operacional; SVG é consistente em todos).
const SERVICE_ICONS = [IconCode, IconTarget, IconShare, IconWorkflow, IconSearch, IconCompass];

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="servicos">
      <div className="container">
        <div className={`section-header section-header--center ${styles.header}`}>
          <div className="tag">Expertise</div>
          <h2 className="display">Soluções completas para escala digital</h2>
          <p className={styles.subtitle}>
            Não somos apenas uma agência de marketing ou apenas uma software house.
            Somos o seu braço direito tecnológico e estratégico.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => {
            const ServiceIcon = SERVICE_ICONS[i] ?? IconCode;
            return (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}><ServiceIcon size={24} /></div>

              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className={styles.divider} />
              <div className={styles.tagsRow}>
                {s.features.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
