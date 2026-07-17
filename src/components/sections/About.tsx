import Image from 'next/image';
import { WA_LINK } from '@/lib/data';
import styles from './About.module.css';

const DIFERENCIAIS = [
  { icon: '🧩', title: 'Dev + marketing', desc: 'Uma única equipe cuida do sistema e da aquisição de clientes — sem ruído entre agência e dev.' },
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
            <div className="tag" style={{ color: 'var(--bowl-blue)', borderColor: 'var(--bowl-blue)' }}>
              Sobre a Bowl Digital
            </div>
            <h2 className={`display ${styles.heading}`}>
              SOMOS A<br />
              <span className={styles.yellow}>AGÊNCIA</span><br />
              QUE CONSTRÓI<br />
              O SISTEMA.
            </h2>
            <p className={styles.desc}>
              A Bowl Digital nasceu pra resolver um problema comum: agência que só cuida do
              marketing e desenvolvedor que só cuida do código — e no meio do caminho, o negócio
              fica sem dono. A gente cuida das duas pontas, sob o mesmo teto.
            </p>
            <p className={styles.desc}>
              Construímos sites e sistemas sob medida em Next.js e Supabase, e ao mesmo tempo
              cuidamos do tráfego pago, das redes sociais e da automação que transforma esse
              sistema em clientes de verdade.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
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
            {/* Bloco atualizado: Agora renderiza a imagem da logo centralizada de forma otimizada */}
            <div className={styles.logoBlock}>
              <Image 
                src="/logo-bowl-digital.png" // Garanta que este seja o nome exato do arquivo na pasta /public
                alt="Bowl Digital"
                width={280} // Largura ideal para caber perfeitamente dentro da caixa preta
                height={180} // Altura proporcional
                style={{ objectFit: 'contain' }}
                priority // Carrega a imagem imediatamente melhorando o SEO
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
