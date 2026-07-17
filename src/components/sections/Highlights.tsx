import Link from 'next/link';
import styles from './Highlights.module.css';

const ITEMS = [
  {
    icon: '💰',
    title: 'Cabe no seu bolso',
    desc: 'Planos mensais, sem contrato de fidelidade e sem letra miúda. Você escolhe o tamanho que faz sentido pro seu momento agora.',
  },
  {
    icon: '📐',
    title: 'Do simples ao robusto',
    desc: 'Desde uma landing page pra validar uma ideia até sistemas prontos pra escalar em nível multinacional. A gente cresce junto com você.',
  },
  {
    icon: '🤝',
    title: 'Uma equipe só',
    desc: 'Sem ficar dividindo atenção entre agência de marketing e desenvolvedor. É um único time cuidando do sistema e da aquisição de clientes.',
  },
];

export default function Highlights() {
  return (
    <section className={`section ${styles.highlights}`}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="tag">Por que a Bowl</div>
          <h2 className="display">Feito pra quem quer resultado, não desculpa</h2>
          <p>
            Somos parceiros do crescimento do seu negócio. Acreditamos que tecnologia
            só vale a pena quando gera resultado de verdade — não só bonito.
          </p>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.links}>
          <Link href="/servicos" className="btn btn--outline">Ver todos os serviços</Link>
          <Link href="/pacotes" className="btn btn--outline">Ver os pacotes</Link>
        </div>
      </div>
    </section>
  );
}
