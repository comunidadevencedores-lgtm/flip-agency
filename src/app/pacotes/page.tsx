import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Packages from '@/components/sections/Packages';
import CtaBanner from '@/components/sections/CtaBanner';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: `Pacotes | ${SITE.name}`,
  description: 'Planos mensais e sem fidelidade, do negócio que está começando até quem quer escalar de verdade. Veja os pacotes da Bowl Digital.',
  alternates: { canonical: `${SITE.url}/pacotes` },
};

export default function PacotesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Packages />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
