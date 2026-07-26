import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import CtaBanner from '@/components/sections/CtaBanner';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: `Serviços | ${SITE.name}`,
  description: 'Sites e sistemas sob medida, tráfego pago, redes sociais, automação e SEO. Conheça todos os serviços da Bowl Digital.',
  alternates: { canonical: `${SITE.url}/servicos` },
};

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Services />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
