// Generates public/og.png (1200×630) and public/apple-touch-icon.png from vector brand geometry.
// Run: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = (f) => fileURLToPath(new URL(`../public/${f}`, import.meta.url));

const K = `
  <path d="M0 0H75V143L30 188H0Z"/>
  <path d="M0 204H44L75 235V362H0Z"/>
  <path d="M267 0H372L184 188H79Z"/>
  <path d="M173 204H217L337 324V362H263L139 238Z"/>`;

const WORD = `
  <path d="M0 0H15V100H0Z M15 41L88 0H113L36 50L113 100H88L15 59Z"/>
  <path d="M133 100L178 0H196L241 100H224L187 17L150 100Z"/>
  <path d="M273 0H359V15H288V42.5H353V57.5H288V85H359V100H273Z"/>
  <path d="M394 0H409V85H479V100H394Z"/>
  <path d="M508 0H594V15H523V42.5H588V57.5H523V85H594V100H508Z"/>
  <path d="M631 0H648L716 74V0H731V100H714L646 26V100H631Z"/>
  <path d="M864 0H792A26 26 0 0 0 766 26V74A26 26 0 0 0 792 100H864V85H792A11 11 0 0 1 781 74V26A11 11 0 0 1 792 15H864Z"/>
  <path d="M899 0H985V15H914V42.5H979V57.5H914V85H985V100H899Z"/>`;

const grid = Array.from({ length: 20 }, (_, i) => i * 64)
  .map((p) => `<path d="M${p} 0V630M0 ${p}H1200"/>`)
  .join('');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="fade" cx="72%" cy="30%" r="70%">
      <stop offset="0" stop-color="#fff" stop-opacity="1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <mask id="m"><rect width="1200" height="630" fill="url(#fade)"/></mask>
  </defs>
  <rect width="1200" height="630" fill="#15181B"/>
  <g stroke="#2A2E32" stroke-width="1" mask="url(#m)">${grid}</g>
  <path d="M40 40h28M40 40v28M1160 40h-28M1160 40v28" stroke="#3A3F44" fill="none"/>
  <g transform="translate(96 205) scale(0.6)" fill="#EDEDE6">${K}
    <rect x="353" y="309" width="53" height="53" fill="#E3A73A"/>
  </g>
  <g transform="translate(400 330) scale(0.62)" fill="#EDEDE6">${WORD}
    <rect x="1012" y="76" width="24" height="24" fill="#E3A73A"/>
  </g>
  <rect x="96" y="520" width="28" height="2" fill="#E3A73A"/>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#15181B"/>
  <g transform="translate(13 15) scale(0.0939)" fill="#EDEDE6">${K}
    <rect x="353" y="309" width="53" height="53" fill="#E3A73A"/>
  </g>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(out('og.png'));
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile(out('apple-touch-icon.png'));
console.log('og.png + apple-touch-icon.png written');
