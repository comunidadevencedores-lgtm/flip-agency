import Image from 'next/image';
import { WA_LINK } from '@/lib/data';
import { IconPuzzle, IconTrendingUp, IconHandshake, IconZap } from '@/components/ui/Icons';
import styles from './About.module.css';

const DIFERENCIAIS = [
  { icon: IconPuzzle, title: 'Dev + marketing', desc: 'Uma única equipe cuida do sistema e da aquisição de clientes — sem ruído entre agência e dev.' },
  { icon: IconTrendingUp, title: 'Visão integrada', desc: 'Não vendemos serviços isolados — criamos estratégias que conectam todas as pontas.' },
  { icon: IconHandshake, title: 'Parceria real', desc: 'Você não é só mais um cliente. Construímos relações de longo prazo.' },
  { icon: IconZap, title: 'Execução ágil', desc: 'Respondemos rápido, entregamos mais rápido ainda. Sem burocracia.' },
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
              SOMOS O<br />
              <span className={styles.yellow}>TIME</span><br />
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
                  <span className={styles.difIcon}><d.icon size={22} /></span>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.logoBlock}>
              <Image
                src="/logo-bowl-digital.png"
                alt="Bowl Digital"
                width={280}
                height={180}
                style={{ objectFit: 'contain' }}
                // Sem `priority`: esta imagem está abaixo da dobra em /sobre,
                // não é o LCP da página — priority aqui só competia por preload
                // com o logo do Navbar e do Hero, atrasando o que de fato importa.

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
