'use client'

import { WA_LINK } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/Icons';
import styles from './WhatsAppFloat.module.css';
import { track } from '@/lib/analytics/track';
import { getAttribution } from '@/lib/analytics/attribution';

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Falar no WhatsApp"
      title="Falar com a Bowl Digital no WhatsApp"
      onClick={() =>
        track('whatsapp_click', {
          click_location: 'sticky_button',
          value: 1,
          ...getAttribution(),
        })
      }
    >
      <WhatsAppIcon size={28} />
      <span className={styles.tooltip}>Fale com a Bowl</span>
    </a>
  );
}
