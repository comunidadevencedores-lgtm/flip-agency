import styles from './Ticker.module.css';

const ITEMS = [
  'Tráfego Pago', 'Redes Sociais', 'Sites', 'SEO', 'Identidade Visual',
  'Produção de Conteúdo', 'Automação', 'CRM', 'WhatsApp Bot', 'SaaS',
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
