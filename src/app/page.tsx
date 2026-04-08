import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/ui/Ticker';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Packages from '@/components/sections/Packages';
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
        <Services />
        <About />
        <Packages />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
