import type { Metadata } from 'next';
import { SITE } from '@/lib/data';
import ContatoClient from './ContatoClient';

export const metadata: Metadata = {
  title: `Contato | ${SITE.name}`,
  description: 'Entre em contato com a Bowl Digital. Curitiba, PR.',
  alternates: { canonical: `${SITE.url}/contato` },
};

export default function ContatoPage() {
  return <ContatoClient />;
}
