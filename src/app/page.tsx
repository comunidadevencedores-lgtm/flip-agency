import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import CtaBanner from '@/components/sections/CtaBanner';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: `Sobre | ${SITE.name}`,
  description: 'Conheça a Bowl Digital — agência full service em Curitiba, PR. Nossa história, equipe e valores.',
  alternates: { canonical: `${SITE.url}/sobre` },
};

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <About />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
