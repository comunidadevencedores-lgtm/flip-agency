.hero {
  position: relative;
  min-height: 92vh;
  background: var(--white);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 72px;
}

/* ---------- Aurora animada de fundo ---------- */
.aurora {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.blob1, .blob2, .blob3 {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.35;
  will-change: transform;
}

.blob1 {
  width: 520px;
  height: 520px;
  top: -160px;
  right: -120px;
  background: radial-gradient(circle at 30% 30%, var(--bowl-blue), transparent 70%);
  animation: float1 18s ease-in-out infinite;
}

.blob2 {
  width: 420px;
  height: 420px;
  bottom: -140px;
  left: -100px;
  background: radial-gradient(circle at 60% 40%, var(--bowl-blue-dim), transparent 70%);
  opacity: 0.4;
  animation: float2 22s ease-in-out infinite;
}

.blob3 {
  width: 300px;
  height: 300px;
  top: 40%;
  left: 42%;
  background: radial-gradient(circle, var(--bowl-blue), transparent 70%);
  opacity: 0.18;
  animation: float3 26s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-40px, 50px) scale(1.08); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(50px, -30px) scale(1.1); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, 30px) scale(0.9); }
}

/* ---------- Layout ---------- */
.inner {
  display: grid;
  grid-template-columns: 54% 46%;
  gap: 40px;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 80px;
  position: relative;
  z-index: 1;
  width: 100%;
}

.content {
  padding-right: 24px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-500);
  background: var(--gray-100);
  border-radius: 999px;
  padding: 7px 16px 7px 12px;
  animation: fadeUp 0.6s ease both;
}

.tagDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--bowl-blue);
  animation: pulseDot 2s ease-in-out infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.heading {
  font-size: clamp(38px, 4.2vw, 62px);
  font-weight: 800;
  color: var(--black);
  margin: 22px 0 22px;
  line-height: 1.08;
  letter-spacing: -0.03em;
  animation: fadeUp 0.7s 0.1s ease both;
}

.highlight {
  background: linear-gradient(100deg, var(--bowl-blue), #7c96ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sub {
  font-size: clamp(15px, 1.1vw, 18px);
  color: var(--gray-500);
  max-width: 460px;
  line-height: 1.65;
  margin-bottom: 36px;
  animation: fadeUp 0.7s 0.2s ease both;
}

.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  animation: fadeUp 0.7s 0.3s ease both;
}

.btnPrimary, .btnGhost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 15px;
  padding: 14px 26px;
  border-radius: 999px;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
}

.btnPrimary {
  background: var(--black);
  color: var(--white);
}

.btnPrimary:hover {
  background: var(--bowl-blue);
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(41, 82, 255, 0.25);
}

.btnGhost {
  background: transparent;
  color: var(--black);
  border: 1.5px solid var(--gray-200);
}

.btnGhost:hover {
  border-color: var(--black);
  transform: translateY(-2px);
}

.trust {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 44px;
  font-size: 13px;
  color: var(--gray-500);
  animation: fadeUp 0.7s 0.4s ease both;
}

.trust i {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--gray-200);
  font-style: normal;
}

/* ---------- Card flutuante ---------- */
.visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 420px;
}

.card {
  position: relative;
  width: 340px;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(11, 11, 11, 0.12);
  overflow: hidden;
  animation: floatCard 6s ease-in-out infinite, fadeIn 0.8s 0.2s ease both;
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50% { transform: translateY(-14px) rotate(0.5deg); }
}

.cardHead {
  display: flex;
  gap: 6px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--gray-100);
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--gray-200);
}

.dot[data-c="1"] { background: #F09595; }
.dot[data-c="2"] { background: #EF9F27; }
.dot[data-c="3"] { background: #5DCAA5; }

.cardBody {
  padding: 24px 24px 28px;
}

.logoWrap {
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
}

.logoImg {
  width: auto;
  height: 56px;
  object-fit: contain;
  filter: brightness(0);
}

.barRow {
  width: 100%;
  height: 8px;
  background: var(--gray-100);
  border-radius: 999px;
  margin-bottom: 10px;
  overflow: hidden;
}

.bar {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--bowl-blue), #7c96ff);
  animation: growBar 2.4s ease-in-out infinite alternate;
}

@keyframes growBar {
  0% { opacity: 0.55; }
  100% { opacity: 1; }
}

.miniStats {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--gray-100);
}

.miniStats div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.miniStats strong {
  font-size: 20px;
  font-weight: 800;
  color: var(--black);
}

.miniStats span {
  font-size: 11px;
  color: var(--gray-500);
}

/* ---------- Chips flutuantes ---------- */
.chip {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--white);
  border: 1px solid var(--gray-100);
  box-shadow: 0 10px 28px rgba(11, 11, 11, 0.1);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 500;
  color: var(--black);
  white-space: nowrap;
}

.chipDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--bowl-blue);
}

.chip1 {
  top: 6%;
  left: -6%;
  animation: floatChip1 7s ease-in-out infinite;
}

.chip2 {
  bottom: 18%;
  right: -8%;
  animation: floatChip2 8s ease-in-out infinite;
}

.chip3 {
  bottom: -4%;
  left: 4%;
  animation: floatChip3 6.5s ease-in-out infinite;
}

@keyframes floatChip1 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes floatChip2 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

@keyframes floatChip3 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-9px); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 1100px) {
  .inner { grid-template-columns: 58% 42%; }
  .heading { font-size: clamp(34px, 3.6vw, 54px); }
}

@media (max-width: 900px) {
  .hero { min-height: auto; padding-bottom: 40px; }
  .inner { grid-template-columns: 1fr; gap: 64px; }
  .content { padding-right: 0; text-align: center; }
  .sub { margin-left: auto; margin-right: auto; }
  .actions { justify-content: center; }
  .trust { justify-content: center; }
  .visual { min-height: 320px; }
  .chip1 { left: 2%; }
  .chip2 { right: 2%; }
  .heading { font-size: clamp(32px, 6vw, 48px); }
}

@media (max-width: 480px) {
  .heading { font-size: 30px; }
  .actions { flex-direction: column; }
  .actions a { width: 100%; justify-content: center; }
  .card { width: 280px; }
}

@media (prefers-reduced-motion: reduce) {
  .blob1, .blob2, .blob3, .card, .bar, .chip1, .chip2, .chip3, .tagDot {
    animation: none !important;
  }
}
