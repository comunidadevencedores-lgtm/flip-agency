'use client'

import { HELP_OPTIONS, buildWaLink } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/Icons';
import styles from './HelpTriage.module.css';
import { track } from '@/lib/analytics/track';
import { getAttribution } from '@/lib/analytics/attribution';

/**
 * "Como podemos te ajudar?"
 *
 * Substitui o padrão de formulário genérico (nome/e-mail/telefone/mensagem)
 * por um roteamento direto: cada opção já é a resposta, como o
 * "afiliado@bling.com.br" — sem etapa intermediária, sem esperar alguém
 * ler e responder. O visitante clica e já cai no WhatsApp certo, com a
 * mensagem certa preenchida.
 */
export default function HelpTriage() {
  return (
    <div className={styles.triage}>
      <div className={styles.header}>
        <div className="tag">Fale com a gente</div>
        <h2 className="display">Como podemos te ajudar?</h2>
        <p>Escolha a opção que mais combina com o seu momento — você vai direto pro WhatsApp, sem formulário.</p>
      </div>

      <div className={styles.grid}>
        {HELP_OPTIONS.map((opt) => (
          <a
            key={opt.label}
            href={buildWaLink(opt.message)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.option}
            onClick={() =>
              track('whatsapp_click', {
                click_location: 'triage',
                option_label: opt.label,
                value: 1,
                ...getAttribution(),
              })
            }
          >
            <span>{opt.label}</span>
            <WhatsAppIcon size={18} className={styles.optionIcon} />
          </a>
        ))}
      </div>
    </div>
  );
}
