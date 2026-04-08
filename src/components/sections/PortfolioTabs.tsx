'use client';
import { useState } from 'react';
import { CASES, PORTFOLIO } from '@/lib/data';
import { WA_LINK } from '@/lib/data';
import styles from './PortfolioTabs.module.css';

export default function PortfolioTabs() {
  const [tab, setTab] = useState<'portfolio' | 'cases'>('portfolio');

  return (
    <section className={`section ${styles.section}`} id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="tag">Nosso trabalho</div>
          <h2 className="display">PORTFÓLIO<br />&amp; CASES</h2>
          <p>Projetos reais, resultados comprovados. Cada trabalho com uma história para contar.</p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'portfolio' ? styles.active : ''}`}
            onClick={() => setTab('portfolio')}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Sites & Portfólio
          </button>
          <button
            className={`${styles.tab} ${tab === 'cases' ? styles.active : ''}`}
            onClick={() => setTab('cases')}
            id="cases"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            Cases de Sucesso
          </button>
        </div>

        {/* Portfolio grid */}
        {tab === 'portfolio' && (
          <div className={styles.portfolioGrid}>
            {PORTFOLIO.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.portfolioCard}
              >
                <div className={styles.thumb}>
                  <div className={styles.thumbPlaceholder}>
                    <span>{item.title[0]}</span>
                  </div>
                  <div className={styles.overlay}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Ver projeto
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.category}>{item.category}</span>
                  <h3>{item.title}</h3>
                  <div className={styles.tags}>
                    {item.tags.map(t => <span key={t} className={styles.tagItem}>{t}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Cases grid */}
        {tab === 'cases' && (
          <div className={styles.casesGrid}>
            {CASES.map((item) => (
              <div key={item.id} className={styles.caseCard}>
                <div className={styles.caseMeta}>
                  <span className={styles.segment}>{item.segment}</span>
                  <h3>{item.client}</h3>
                  <div className={styles.result}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item.result}
                  </div>
                  <p>{item.description}</p>
                  <div className={styles.tags}>
                    {item.tags.map(t => <span key={t} className={styles.tagItem}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.cta}>
          <p>Quer resultados como esses para o seu negócio?</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
            Falar com a FLIP
          </a>
        </div>
      </div>
    </section>
  );
}
