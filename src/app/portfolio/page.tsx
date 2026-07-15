import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PortfolioTabs from '@/components/sections/PortfolioTabs';
import CtaBanner from '@/components/sections/CtaBanner';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: `Portfólio & Cases | ${SITE.name}`,
  description: 'Conheça os projetos e cases de sucesso da FLIP Marketing & Publicidade. Sites, campanhas e resultados reais para negócios em Maringá e no Brasil.',
  alternates: { canonical: `${SITE.url}/portfolio` },
  openGraph: {
    title: `Portfólio & Cases | ${SITE.fullName}`,
    description: 'Projetos reais, resultados comprovados.',
    url: `${SITE.url}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <div style={{ background: 'var(--black)', padding: '80px 0 64px', borderBottom: '2px solid var(--yellow)' }}>
          <div className="container">
            <div className="tag" style={{ color: 'var(--yellow)', borderColor: 'var(--yellow)' }}>
              Nosso trabalho
            </div>
            <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 96px)', color: 'var(--white)', marginTop: '16px', lineHeight: '0.95' }}>
              PORTFÓLIO<br /><span style={{ color: 'var(--yellow)' }}>&amp; CASES</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', marginTop: '20px', maxWidth: '520px', lineHeight: '1.65' }}>
              Projetos reais, resultados comprovados. Cada trabalho com uma história para contar.
            </p>
          </div>
        </div>
        <PortfolioTabs />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
