import { WA_LINK } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/Icons';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Falar no WhatsApp"
      title="Falar com a Bowl Digital no WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className={styles.tooltip}>Fale com a Bowl</span>
    </a>
  );
}
