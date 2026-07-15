export const SITE = {
  name: 'Bowl Digital',
  fullName: 'Bowl Digital',
  tagline: 'Sistemas que geram crescimento todos os dias.',
  description:
    'Agência full service em Curitiba, PR. Sites e sistemas sob medida (Next.js/Supabase), tráfego pago, redes sociais, automação e CRM para negócios que querem crescer de verdade.',
  url: 'https://www.bowldigital.com.br',
  // TODO Victor: confirmar número de WhatsApp comercial da Bowl Digital
  whatsapp: '5541900000000',
  whatsappMsg: 'Olá! Vim pelo site da Bowl Digital e gostaria de conhecer os serviços.',
  // TODO Victor: confirmar e-mail comercial
  email: 'contato@bowldigital.com.br',
  phone: '(41) 90000-0000',
  address: 'Curitiba, PR',
  instagram: 'https://www.instagram.com/bowldigital/',
  linkedin: 'https://www.linkedin.com/company/bowldigital/',
  facebook: 'https://www.facebook.com/bowldigital'
};

export const WA_LINK = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`;

export const SERVICES = [
  {
    icon: '💻',
    title: 'Sites & Sistemas Sob Medida',
    short: 'Next.js, TypeScript & Supabase',
    description:
      'Sites institucionais, landing pages e sistemas web sob medida — rápidos, responsivos e construídos para converter, não só pra existir.',
    features: ['Next.js 14 + TypeScript', 'Banco de dados Supabase', 'SEO técnico (SSR/SSG)', 'Alta performance'],
  },
  {
    icon: '📡',
    title: 'Tráfego Pago',
    short: 'Google Ads & Meta Ads',
    description:
      'Campanhas estratégicas no Google, Instagram e Facebook para atrair clientes qualificados com o melhor custo por resultado.',
    features: ['Gestão completa', 'Otimização de ROI', 'Relatórios periódicos', 'Testes A/B'],
  },
  {
    icon: '📱',
    title: 'Redes Sociais',
    short: 'Estratégia & Conteúdo',
    description:
      'Presença digital consistente com planejamento de conteúdo, gestão de perfis e posts que engajam e convertem.',
    features: ['Feed estratégico', 'Stories e Reels', 'Copywriting', 'Calendário editorial'],
  },
  {
    icon: '⚙️',
    title: 'Automação & CRM',
    short: 'Bots de WhatsApp & fluxos inteligentes',
    description:
      'CRM em kanban, bots de atendimento via WhatsApp com IA e automações que trabalham por você 24h, nutrindo e convertendo leads.',
    features: ['Bot de WhatsApp com IA', 'CRM em kanban', 'Integração com Supabase', 'Funis automáticos'],
  },
  {
    icon: '🔍',
    title: 'SEO',
    short: 'Posicionamento orgânico',
    description:
      'Apareça na primeira página do Google sem pagar por clique. SEO técnico, dados estruturados e conteúdo de longo prazo.',
    features: ['SEO técnico', 'Schema.org', 'Blog estratégico', 'Monitoramento de performance'],
  },
  {
    icon: '🧩',
    title: 'Consultoria Digital',
    short: 'Diagnóstico & estratégia',
    description:
      'Análise completa da presença digital do seu negócio — Google Business, site, redes e anúncios — com plano de ação prático.',
    features: ['Auditoria digital', 'Plano de ação', 'Acompanhamento de métricas', 'Conformidade LGPD'],
  },
];

export const PACKAGES = [
  {
    name: 'Bowl Start',
    badge: 'Para começar',
    color: '#EAEAEA',
    description: 'Ideal para negócios que estão dando os primeiros passos no digital e precisam de uma base sólida.',
    includes: [
      'Gestão de 1 rede social',
      '12 posts / mês',
      '1 campanha de tráfego pago',
      'Relatório mensal',
      'Suporte via WhatsApp',
    ],
  },
  {
    name: 'Bowl Pro',
    badge: 'Mais escolhido',
    color: '#2952FF',
    description: 'Para negócios em crescimento que querem acelerar resultados com uma estratégia integrada.',
    includes: [
      'Gestão de 2 redes sociais',
      '20 posts / mês + Stories diários',
      'Tráfego pago (Meta + Google)',
      'Landing page otimizada',
      'Automação de WhatsApp',
      'Relatório semanal',
      'Reunião quinzenal de estratégia',
    ],
    highlight: true,
  },
  {
    name: 'Bowl Full',
    badge: 'Solução completa',
    color: '#0B0B0B',
    textColor: '#FFFFFF',
    description: 'Para empresas que querem uma agência parceira cuidando de toda a operação digital, do sistema às vendas.',
    includes: [
      'Tudo do Bowl Pro',
      'Site ou sistema sob medida (Next.js/Supabase)',
      'CRM e automação de WhatsApp com IA',
      'SEO + Blog estratégico',
      'E-mail marketing',
      'Gerente de conta dedicado',
      'Reunião semanal',
    ],
  },
];

export const CASES: Case[] = [
  {
    id: 'case-01',
    client: 'República do Barbeiro',
    segment: 'Beleza · Barbearia',
    type: 'case',
    thumbnail: '/images/case-republica.jpg',
    tags: ['Next.js', 'Supabase', 'Google Ads', 'Instagram'],
    result: 'Comunidade de clientes ativa com bolão da Copa',
    description:
      'Estratégia digital completa: gestão de Google Business, conteúdo para Instagram (Reels, feed e stories) e um app de bolão da Copa do Mundo com Supabase para engajar a comunidade de clientes da barbearia.',
  },
  {
    id: 'case-02',
    client: 'FAW Consórcio Barigui',
    segment: 'Consórcios · Embracon',
    type: 'case',
    thumbnail: '/images/case-faw.jpg',
    tags: ['Next.js', 'Supabase', 'Simulador', 'Captação de leads'],
    result: 'Simulador de parcelas com captura progressiva de leads',
    description:
      'Site completo para consultor de consórcios Embracon, com simulador de parcelas em tempo real, captura progressiva de leads, rastreamento de UTM/gclid e conformidade com LGPD.',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-01',
    title: 'República do Barbeiro',
    category: 'Marketing Digital · Beleza',
    type: 'portfolio',
    thumbnail: '/images/port-republica.jpg',
    tags: ['Google Ads', 'Instagram', 'Supabase'],
    url: '#',
  },
  {
    id: 'port-02',
    title: 'FAW Consórcio Barigui',
    category: 'Site & Sistema · Consórcios',
    type: 'portfolio',
    thumbnail: '/images/port-faw.jpg',
    tags: ['Next.js', 'Supabase', 'Simulador'],
    url: '#',
  },
  {
    id: 'port-03',
    title: 'Buzzi CRM',
    category: 'Sistema Sob Medida · Saúde',
    type: 'portfolio',
    thumbnail: '/images/port-buzzi-crm.jpg',
    tags: ['CRM', 'WhatsApp + IA', 'Kanban'],
    url: '#',
  },
  {
    id: 'port-04',
    title: 'DD Radiadores',
    category: 'Marketing Digital · Indústria',
    type: 'portfolio',
    thumbnail: '/images/port-dd.jpg',
    tags: ['Gestão de Tráfego', 'Social Media'],
    url: '#',
  },
];

export interface Case {
  id: string;
  client: string;
  segment: string;
  type: 'case';
  thumbnail: string;
  tags: string[];
  result: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  type: 'portfolio';
  thumbnail: string;
  tags: string[];
  url: string;
}
