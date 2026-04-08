.float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 999;
  width: 60px;
  height: 60px;
  background: var(--green-wa);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
  transition: all 0.3s ease;
}

.float:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.6);
}

.float::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(37, 211, 102, 0.3);
  animation: ping 2s cubic-bezier(0,0,0.2,1) infinite;
}

@keyframes ping {
  75%, 100% { transform: scale(1.4); opacity: 0; }
}

.tooltip {
  position: absolute;
  right: 72px;
  background: var(--black);
  color: var(--white);
  font-family: var(--font-cond);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: var(--radius);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-left-color: var(--black);
}

.float:hover .tooltip { opacity: 1; }

@media (max-width: 480px) {
  .float { bottom: 20px; right: 20px; width: 52px; height: 52px; }
  .tooltip { display: none; }
}
