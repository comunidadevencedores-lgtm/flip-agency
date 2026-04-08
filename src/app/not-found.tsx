import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.inner}>
            <span className={`display ${styles.code}`}>404</span>
            <h1 className={`display ${styles.heading}`}>
              ESSA MANOBRA<br />
              <span className={styles.yellow}>DEU ERRADO.</span>
            </h1>
            <p>A página que você procura não existe ou foi movida. Mas a gente te leva de volta para a pista.</p>
            <div className={styles.actions}>
              <Link href="/" className="btn btn--primary btn--lg">Voltar ao início</Link>
              <Link href="/contato" className="btn btn--outline btn--lg">Falar com a FLIP</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
