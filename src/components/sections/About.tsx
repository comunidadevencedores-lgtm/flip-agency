import { WA_LINK } from '@/lib/data';
import styles from './About.module.css';

const DIFERENCIAIS = [
  { icon: '🎯', title: 'Método próprio', desc: 'Sistema testado e validado para gerar resultados consistentes e previsíveis.' },
  { icon: '📈', title: 'Visão integrada', desc: 'Não vendemos serviços isolados — criamos estratégias que conectam todas as pontas.' },
  { icon: '🤝', title: 'Parceria real', desc: 'Você não é só mais um cliente. Construímos relações de longo prazo.' },
  { icon: '⚡', title: 'Execução ágil', desc: 'Respondemos rápido, entregamos mais rápido ainda. Sem burocracia.' },
];

export default function About() {
  return (
    <section className={`section section--dark ${styles.about}`} id="sobre">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className="tag" style={{ color: 'var(--yellow)', borderColor: 'var(--yellow)' }}>
              Sobre a FLIP
            </div>
            <h2 className={`display ${styles.heading}`}>
              SOMOS A<br />
              <span className={styles.yellow}>AGÊNCIA</span><br />
              QUE FAZ<br />
              ACONTECER.
            </h2>
            <p className={styles.desc}>
              A FLIP nasceu da vontade de fazer marketing digital de verdade — sem enrolação,
              sem promessa vazia, só resultado. Como um flip no skate, a gente pega o seu negócio,
              gira no ar e entrega do jeito certo.
            </p>
            <p className={styles.desc}>
              Somos uma equipe jovem, criativa e obcecada por performance. Já gerenciamos mais de
              R$2 milhões em tráfego pago e ajudamos dezenas de empresas a construírem sua
              presença digital do zero.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--yellow">
              Conhecer a equipe
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.difsGrid}>
              {DIFERENCIAIS.map((d) => (
                <div key={d.title} className={styles.difCard}>
                  <span className={styles.difIcon}>{d.icon}</span>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.logoBlock} aria-hidden>
              <span className={styles.logoText}>FLIP</span>
              <span className={styles.logoSince}>est. 2024 — Maringá, PR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
