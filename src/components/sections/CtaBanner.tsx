import { WA_LINK } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/Icons';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={`section--bowl-blue ${styles.cta}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <div className={styles.label}>Bora conversar?</div>
            <h2 className={`display ${styles.heading}`}>
              Seu próximo projeto<br />começa aqui.
            </h2>
          </div>
          <div className={styles.action}>
            <p>
              Conta pra gente o que você precisa. Em poucas horas você já sabe
              se a Bowl é a parceira certa pro seu projeto.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              Falar com a Bowl
              <WhatsAppIcon size={20} />
            </a>
            <span className={styles.note}>Resposta em até 2 horas ⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
}
