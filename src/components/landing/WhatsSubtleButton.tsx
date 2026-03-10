import { WA_START } from './constants';
import { WhatsIcon } from './WhatsIcon';

export function WhatsSubtleButton() {
  return (
    <a
      href={WA_START}
      className="wa-subtle"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <span className="wa-subtle__icon" aria-hidden="true">
        <WhatsIcon />
      </span>
      <span className="wa-subtle__label">WhatsApp</span>
    </a>
  );
}
