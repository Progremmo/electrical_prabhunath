const fs = require('fs');
const path = require('path');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(path.join(__dirname, 'public', 'hero'));
ensureDir(path.join(__dirname, 'public', 'services'));
ensureDir(path.join(__dirname, 'public', 'gallery'));
ensureDir(path.join(__dirname, 'public', 'branding'));

function createSvgAsset(title, subtitle, tag, iconType, color1 = '#0F172A', color2 = '#1E3A8A') {
  let iconSvg = '';
  if (iconType === 'bolt') {
    iconSvg = `<path d="M40 10L15 45H35L25 75L55 35H35L45 10H40Z" fill="#F59E0B" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"/>`;
  } else if (iconType === 'panel') {
    iconSvg = `<rect x="15" y="10" width="50" height="60" rx="6" fill="#1E293B" stroke="#60A5FA" stroke-width="2.5"/>
               <line x1="25" y1="25" x2="55" y2="25" stroke="#F59E0B" stroke-width="3"/>
               <rect x="25" y="35" width="8" height="15" fill="#10B981" rx="2"/>
               <rect x="37" y="35" width="8" height="15" fill="#10B981" rx="2"/>
               <rect x="49" y="35" width="8" height="15" fill="#EF4444" rx="2"/>`;
  } else if (iconType === 'lighting') {
    iconSvg = `<path d="M40 15 C26 15 22 26 22 35 C22 42 28 47 28 53 H52 C52 47 58 42 58 35 C58 26 54 15 40 15 Z" fill="#FEF08A" stroke="#F59E0B" stroke-width="2.5"/>
               <rect x="32" y="55" width="16" height="6" rx="2" fill="#94A3B8"/>
               <line x1="40" y1="5" x2="40" y2="10" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
               <line x1="18" y1="18" x2="22" y2="22" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
               <line x1="62" y1="18" x2="58" y2="22" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>`;
  } else if (iconType === 'earthing') {
    iconSvg = `<circle cx="40" cy="22" r="12" fill="#10B981" opacity="0.2"/>
               <path d="M40 10V50M22 50H58M28 58H52M34 66H46" stroke="#10B981" stroke-width="3.5" stroke-linecap="round"/>`;
  } else if (iconType === 'building') {
    iconSvg = `<rect x="15" y="15" width="50" height="60" rx="4" fill="#1E293B" stroke="#94A3B8" stroke-width="2"/>
               <rect x="23" y="25" width="8" height="8" fill="#F59E0B" rx="1"/>
               <rect x="36" y="25" width="8" height="8" fill="#F59E0B" rx="1"/>
               <rect x="49" y="25" width="8" height="8" fill="#F59E0B" rx="1"/>
               <rect x="23" y="40" width="8" height="8" fill="#F59E0B" rx="1"/>
               <rect x="36" y="40" width="8" height="8" fill="#F59E0B" rx="1"/>
               <rect x="49" y="40" width="8" height="8" fill="#F59E0B" rx="1"/>
               <rect x="34" y="57" width="12" height="18" fill="#60A5FA"/>`;
  } else {
    iconSvg = `<path d="M40 10L15 45H35L25 75L55 35H35L45 10H40Z" fill="#F59E0B"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
    <radialGradient id="electricGlow" cx="70%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="600" height="400" rx="24" fill="url(#bg)" />
  <rect width="600" height="400" rx="24" fill="url(#electricGlow)" />

  <!-- Circuit grid pattern lines -->
  <g stroke="rgba(255,255,255,0.06)" stroke-width="1.2">
    <line x1="0" y1="80" x2="600" y2="80" />
    <line x1="0" y1="180" x2="600" y2="180" />
    <line x1="0" y1="280" x2="600" y2="280" />
    <line x1="120" y1="0" x2="120" y2="400" />
    <line x1="300" y1="0" x2="300" y2="400" />
    <line x1="480" y1="0" x2="480" y2="400" />
  </g>

  <!-- Central Technical Graphic Container -->
  <g transform="translate(420, 80) scale(1.4)">
    ${iconSvg}
  </g>

  <!-- Tag Pill -->
  <rect x="40" y="210" width="160" height="30" rx="15" fill="#F59E0B" />
  <text x="120" y="230" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="900" text-anchor="middle" letter-spacing="0.8">
    ${tag.toUpperCase()}
  </text>

  <!-- Titles -->
  <text x="40" y="285" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800">
    ${title}
  </text>
  <text x="40" y="320" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500">
    ${subtitle}
  </text>

  <!-- Location Indicator -->
  <text x="40" y="360" fill="#60A5FA" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700">
    📍 Sector 11, Gurugram • Prabhunath Electricals &amp; Contractor
  </text>
</svg>`;
}

// 1. Hero visual
fs.writeFileSync(
  path.join(__dirname, 'public', 'hero', 'hero-electrical.svg'),
  createSvgAsset('Electrical Solutions & Contracting', 'Residential & Commercial Wiring, DB Setup & Safety', 'GURUGRAM ELECTRICALS', 'bolt', '#0F172A', '#1E3A8A'),
  'utf8'
);

// 2. Services visuals
const serviceVisuals = [
  ['electrical-wiring.svg', 'Electrical Wiring & Conduit Routing', 'FRLS Copper Wiring & Circuit Segregation', 'WIRING & CONDUIT', 'bolt'],
  ['panel-mcb.svg', 'MCB, DB & Control Panel Setup', 'Phase Balancing & 30mA RCCB Shock Prevention', 'DISTRIBUTION BOARD', 'panel'],
  ['lighting-fixture.svg', 'Architectural & Functional Lighting', 'False Ceiling Profiles, LEDs & Chandeliers', 'MODERN LIGHTING', 'lighting'],
  ['earthing.svg', 'Chemical Earthing & Surge Safety', 'Heavy Appliance Grounding & Surge Arrest', 'EARTHING SYSTEM', 'earthing'],
  ['commercial-contracting.svg', 'Commercial Electrical Contracting', 'Turnkey Fitouts for Offices & Retail Outlets', 'CONTRACTING WORK', 'building'],
  ['fault-repair.svg', 'Fault Troubleshooting & Repair', 'Tripping Rectification, Burnt Cable Replacement', 'MAINTENANCE', 'bolt'],
];

for (const [filename, title, sub, tag, icon] of serviceVisuals) {
  fs.writeFileSync(
    path.join(__dirname, 'public', 'services', filename),
    createSvgAsset(title, sub, tag, icon, '#0F172A', '#1E3A8A'),
    'utf8'
  );
}

// 3. Gallery visuals
const galleryVisuals = [
  ['gallery-wiring.svg', 'Concealed Conduit Routing', 'Laser Aligned Wall Grooving & Junction Boxes', 'CONDUIT PIPING', 'bolt'],
  ['gallery-panel.svg', '3-Phase DB & MCB Panel', 'Double Pole Isolators & Shock Protection', 'PANEL SETUP', 'panel'],
  ['gallery-lighting.svg', 'Cove & Profile LED Lighting', 'Modern False Ceiling Illumination', 'LIGHTING DESIGN', 'lighting'],
  ['gallery-commercial.svg', 'Retail & Commercial Fitout', 'Turnkey Power Outlets & Cable Trays', 'COMMERCIAL SITE', 'building'],
  ['gallery-earthing.svg', 'Chemical Earth Pit Installation', 'Low Ohmic Resistance Grounding Setup', 'EARTHING PIT', 'earthing'],
  ['gallery-switchboard.svg', 'Modular Switchboard Assembly', 'Flame-Retardant Modular Plates & Switches', 'SWITCHBOARD', 'panel'],
];

for (const [filename, title, sub, tag, icon] of galleryVisuals) {
  fs.writeFileSync(
    path.join(__dirname, 'public', 'gallery', filename),
    createSvgAsset(title, sub, tag, icon, '#0F172A', '#1E293B'),
    'utf8'
  );
}

console.log('Successfully generated all clean vector SVG electrical assets for Prabhunath Electricals & Contractor.');
