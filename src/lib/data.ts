export const SITE = {
  name: 'FLIP',
  fullName: 'FLIP Marketing & Publicidade',
  tagline: 'A manobra certa para o seu negócio decolar.',
  description:
    'Agência de marketing digital e publicidade em Maringá, PR. Tráfego pago, redes sociais, sites, design, SEO, conteúdo, automação e CRM para negócios que querem crescer de verdade.',
  url: 'https://flipagencia.com.br',
  whatsapp: '5544999999999',
  whatsappMsg: 'Olá! Vim pelo site da FLIP e gostaria de conhecer os serviços.',
  email: 'oi@flipagencia.com.br',
  phone: '(44) 99999-9999',
  address: 'Maringá, PR',
  instagram: 'https://instagram.com/flipagencia',
  linkedin: 'https://linkedin.com/company/flipagencia',
  facebook: 'https://facebook.com/flipagencia',
};

export const WA_LINK = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`;

export const SERVICES = [
  {
    icon: '📡',
    title: 'Tráfego Pago',
    short: 'Google Ads & Meta Ads',
    description:
      'Campanhas estratégicas no Google, Instagram e Facebook para atrair clientes qualificados com o melhor custo por resultado.',
    features: ['Gestão completa', 'Otimização de ROI', 'Relatórios semanais', 'Testes A/B'],
  },
  {
    icon: '📱',
    title: 'Redes Sociais',
    short: 'Gestão & Conteúdo',
    description:
      'Presença digital consistente com estratégia de conteúdo, gestão de perfis e criação de posts que engajam e convertem.',
    features: ['Feed estratégico', 'Stories e Reels', 'Copywriting', 'Comunidade'],
  },
  {
    icon: '💻',
    title: 'Sites & Landing Pages',
    short: 'Design & Dev',
    description:
      'Sites rápidos, responsivos e otimizados para conversão. Do portfólio institucional ao e-commerce completo.',
    features: ['Design exclusivo', 'SEO otimizado', 'Mobile-first', 'Alta performance'],
  },
  {
    icon: '🎨',
    title: 'Identidade Visual',
    short: 'Design & Branding',
    description:
      'Logo, manual de marca, materiais gráficos e identidade completa para o seu negócio se destacar.',
    features: ['Logo & marca', 'Manual de identidade', 'Materiais gráficos', 'Social kit'],
  },
  {
    icon: '🎬',
    title: 'Produção de Conteúdo',
    short: 'Foto & Vídeo',
    description:
      'Fotos e vídeos profissionais para redes sociais, campanhas e institucional. Equipe criativa pronta para a sua story.',
    features: ['Fotos profissionais', 'Vídeos reels', 'Motion design', 'Podcasts'],
  },
  {
    icon: '🔍',
    title: 'SEO',
    short: 'Posicionamento orgânico',
    description:
      'Apareça na primeira página do Google sem pagar por clique. Estratégia de SEO técnico e conteúdo de longo prazo.',
    features: ['SEO técnico', 'Produção de conteúdo', 'Link building', 'Monitoramento'],
  },
  {
    icon: '⚙️',
    title: 'Automação & CRM',
    short: 'Fluxos inteligentes',
    description:
      'E-mail marketing, CRM, bot para WhatsApp e automações que trabalham por você 24h, nutrindo e convertendo leads.',
    features: ['Bot WhatsApp', 'E-mail marketing', 'CRM integrado', 'Funis automáticos'],
  },
  {
    icon: '🧩',
    title: 'SaaS & Soluções Digitais',
    short: 'Sistemas sob medida',
    description:
      'Plataformas, dashboards e ferramentas digitais customizadas para resolver o problema específico do seu negócio.',
    features: ['Sistemas web', 'Dashboards', 'Integrações', 'APIs'],
  },
];

export const PACKAGES = [
  {
    name: 'Flip Start',
    badge: 'Para começar',
    color: '#f0f0f0',
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
    name: 'Flip Pro',
    badge: 'Mais escolhido',
    color: '#FFED00',
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
    name: 'Flip Full',
    badge: 'Solução completa',
    color: '#0a0a0a',
    textColor: '#FAFAFA',
    description: 'Para empresas que querem uma agência parceira cuidando de toda a operação de marketing e vendas.',
    includes: [
      'Tudo do Flip Pro',
      'CRM configurado',
      'Produção de fotos/vídeos mensal',
      'SEO + Blog estratégico',
      'E-mail marketing',
      'Site ou landing pages ilimitadas',
      'Gerente de conta dedicado',
      'Reunião semanal',
    ],
  },
];

export const CASES: Case[] = [
  {
    id: 'case-01',
    client: 'Restaurante Sabor & Arte',
    segment: 'Alimentação',
    type: 'case',
    thumbnail: '/images/case-01.jpg',
    tags: ['Tráfego Pago', 'Redes Sociais'],
    result: '+340% de reservas em 60 dias',
    description:
      'Reestruturação completa da presença digital, campanhas de Meta Ads segmentadas por bairro e estratégia de conteúdo que transformou seguidores em clientes.',
  },
  {
    id: 'case-02',
    client: 'Clínica Estética Renove',
    segment: 'Saúde & Beleza',
    type: 'case',
    thumbnail: '/images/case-02.jpg',
    tags: ['SEO', 'Google Ads', 'Site'],
    result: 'R$ 0 → R$ 28k/mês em leads orgânicos',
    description:
      'Desenvolvimento de site otimizado para SEO local, campanhas no Google Ads e automação de WhatsApp para agendamentos.',
  },
  {
    id: 'case-03',
    client: 'Construtora Nova Era',
    segment: 'Construção Civil',
    type: 'case',
    thumbnail: '/images/case-03.jpg',
    tags: ['Identidade Visual', 'Site', 'Tráfego Pago'],
    result: '3x mais leads qualificados',
    description:
      'Rebranding completo com nova identidade visual, site institucional moderno e campanhas de tráfego pago para captação de leads.',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-01',
    title: 'Sabor & Arte',
    category: 'Site Institucional',
    type: 'portfolio',
    thumbnail: '/images/port-01.jpg',
    tags: ['Next.js', 'Design', 'SEO'],
    url: '#',
  },
  {
    id: 'port-02',
    title: 'Renove Estética',
    category: 'Landing Page',
    type: 'portfolio',
    thumbnail: '/images/port-02.jpg',
    tags: ['Conversão', 'Design'],
    url: '#',
  },
  {
    id: 'port-03',
    title: 'Nova Era Construtora',
    category: 'Site Corporativo',
    type: 'portfolio',
    thumbnail: '/images/port-03.jpg',
    tags: ['React', 'CMS'],
    url: '#',
  },
  {
    id: 'port-04',
    title: 'Studio Ink Tattoo',
    category: 'E-commerce',
    type: 'portfolio',
    thumbnail: '/images/port-04.jpg',
    tags: ['E-commerce', 'Design'],
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
