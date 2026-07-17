import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/ui/Ticker';
import Highlights from '@/components/sections/Highlights';
import CtaBanner from '@/components/sections/CtaBanner';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: `${SITE.fullName} — ${SITE.tagline}`,
  description: SITE.description,
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Highlights />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
