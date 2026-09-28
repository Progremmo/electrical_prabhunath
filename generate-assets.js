const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function makeSvg(title, subtitle, tag, color1 = '#0F766E', color2 = '#2563EB') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" rx="24" fill="url(#bg)" />
  <g stroke="rgba(255,255,255,0.08)" stroke-width="1">
    <line x1="0" y1="100" x2="600" y2="100" />
    <line x1="0" y1="200" x2="600" y2="200" />
    <line x1="0" y1="300" x2="600" y2="300" />
    <line x1="150" y1="0" x2="150" y2="400" />
    <line x1="300" y1="0" x2="300" y2="400" />
    <line x1="450" y1="0" x2="450" y2="400" />
  </g>
  <g transform="translate(150, 70)" fill="url(#glow)" stroke="rgba(255,255,255,0.6)" stroke-width="2.5">
    <rect width="300" height="130" rx="16" />
    <line x1="30" y1="85" x2="270" y2="85" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
    <line x1="30" y1="100" x2="270" y2="100" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
    <rect x="230" y="20" width="45" height="22" rx="6" fill="#111827" stroke="none" />
    <text x="252" y="36" fill="#38BDF8" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">18°C</text>
    <path d="M80 145 C110 185, 190 185, 220 145" fill="none" stroke="#38BDF8" stroke-width="3" stroke-dasharray="6 6" opacity="0.9" />
  </g>
  <rect x="40" y="245" width="140" height="28" rx="14" fill="#F59E0B" />
  <text x="110" y="264" fill="#111827" font-family="sans-serif" font-size="12" font-weight="800" text-anchor="middle" letter-spacing="0.5">${tag.toUpperCase()}</text>
  
  <text x="40" y="315" fill="#FFFFFF" font-family="sans-serif" font-size="22" font-weight="700">${title}</text>
  <text x="40" y="345" fill="#E2E8F0" font-family="sans-serif" font-size="14" font-weight="400">${subtitle}</text>
  <circle cx="540" cy="60" r="35" fill="rgba(255,255,255,0.06)" />
  <circle cx="540" cy="60" r="20" fill="rgba(255,255,255,0.1)" />
</svg>`;
}

const list = [
  ['hero-hvac.svg', 'Certified HVAC Engineering', 'Pan India Residential & Commercial Climate Care', 'EXPERT SERVICES', '#0F766E', '#1E40AF'],
  ['split-ac.svg', 'Precision Split AC Solutions', 'Rapid diagnosis, sensor, board & motor repairs', 'SPLIT AC', '#0F766E', '#1d4ed8'],
  ['window-ac.svg', 'Window AC Tune-Up & Overhaul', 'Vibration control, coil flush & capacitor fixes', 'WINDOW AC', '#0F766E', '#0284c7'],
  ['ac-installation.svg', 'Laser Leveled Installation', 'Leak-proof brass flaring & vacuum commissioning', 'INSTALLATION', '#0d5f59', '#2563EB'],
  ['ac-uninstallation.svg', 'Safe Dismantling & Pump-down', '100% refrigerant preserved with safe relocation pack', 'DISMANTLING', '#1e293b', '#0F766E'],
  ['gas-refill.svg', 'Virgin R32 / R410A Charging', 'Electronic leak sniffing with digital scale charging', 'GAS TOP-UP', '#0F766E', '#d97706'],
  ['cleaning.svg', 'Antibacterial Jet Foam Clean', 'Removes deep fungal buildup and cuts electricity bills', 'DEEP CLEAN', '#0F766E', '#2563EB'],
  ['pcb-repair.svg', 'Inverter Board & Compressor Lab', 'Micro-soldering IPM fixes and sensor calibration', 'PCB REPAIR', '#1e1b4b', '#0F766E'],
  ['leakage-repair.svg', 'Water Leakage & Drain Clearing', 'Zero drip guarantee with pressure pipe flush', 'LEAK ARREST', '#0F766E', '#0284c7'],
  ['amc.svg', 'Year-Round Maintenance Plan', 'Quarterly checkups, priority response & zero visit fee', 'AMC CONTRACT', '#0F766E', '#15803d'],
  ['commercial-ac.svg', 'Commercial Ducted Systems', 'Industrial chillers, server rooms & multi-floor HVAC', 'COMMERCIAL', '#0F766E', '#312e81'],
  ['cassette-ac.svg', 'Ceiling Cassette Specialists', 'Waterproof sling jet wash & 360-flow calibration', 'CASSETTE AC', '#0F766E', '#1d4ed8'],
  ['vrv-system.svg', 'VRV / VRF Multi-Zone Service', 'Advanced communication staging & refrigerant balance', 'VRV / VRF', '#0d5f59', '#4338ca'],
  ['gallery-install-1.svg', 'High-Rise Architectural Installation', 'Vibration dampened brackets with concealed piping', 'INSTALLATION', '#0F766E', '#2563EB'],
  ['gallery-repair-1.svg', 'Motherboard Inverter Bench Testing', 'Oscilloscope diagnostic and component solder repair', 'REPAIR', '#1e293b', '#0F766E'],
  ['gallery-cleaning-1.svg', 'Deep Evaporator Foam Cleansing', 'Biodegradable cleaning solution with high-flow jet', 'CLEANING', '#0F766E', '#0284c7'],
  ['gallery-commercial-1.svg', 'Corporate Tower VRF Commissioning', 'Variable refrigerant airflow balancing across 14 zones', 'COMMERCIAL', '#0F766E', '#3730a3'],
  ['gallery-amc-1.svg', 'Preventive Industrial AMC Inspection', 'Routine safety capacitor and contactor checks', 'AMC AUDIT', '#0F766E', '#166534'],
  ['gallery-gas-1.svg', 'Nitrogen Pressure Leak Lock', 'Electronic sniffing and certified refrigerant weight charge', 'REPAIR', '#0F766E', '#b45309'],
  ['gallery-cassette-1.svg', 'Ceiling Cassette Condensate Flush', 'Zero-drip ceiling wash with pump inspection', 'CLEANING', '#0369a1', '#0F766E'],
  ['gallery-duct-1.svg', 'Cleanroom Ducted AC Airflow Check', 'Anemometer static pressure and airflow tuning', 'COMMERCIAL', '#1e1b4b', '#0F766E'],
  ['gallery-relocate-1.svg', 'Multi-Floor Residence AC Relocation', 'Clean dismantling, copper re-routing, and testing', 'INSTALLATION', '#0F766E', '#2563EB']
];

for (const item of list) {
  const [fname, title, sub, tag, c1, c2] = item;
  fs.writeFileSync(path.join(dir, fname), makeSvg(title, sub, tag, c1, c2), 'utf8');
}
console.log('Finished writing ' + list.length + ' image assets.');
