/**
 * Services Configuration — Prabhunath Electricals & Contractor
 * Clean, extensible configuration.
 * Only enabled services are rendered dynamically in UI.
 * Realistic, verified electrical offerings for Gurugram homes and commercial setups.
 */
export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  shortDescription: string;
  shortDescriptionHi: string;
  description: string;
  descriptionHi: string;
  icon: string;
  image: string;
  highlights: string[];
  highlightsHi: string[];
  enabled: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "electrical-wiring-installation",
    slug: "electrical-wiring-installation",
    title: "Electrical Wiring & Concealed Conduit Installation",
    titleHi: "इलेक्ट्रिकल वायरिंग और कंसील्ड फिटिंग",
    shortDescription: "Complete residential and commercial electrical wiring, conduit piping, and circuit layouts.",
    shortDescriptionHi: "आवासीय एवं व्यावसायिक परिसरों के लिए संपूर्ण इलेक्ट्रिकल वायरिंग और सर्किट लेआउट।",
    description: "Systematic copper wiring, distribution boards, concealed piping, and point installations adhering to electrical safety guidelines.",
    descriptionHi: "विद्युत सुरक्षा मानकों के अनुसार व्यवस्थित कॉपर वायरिंग, डिस्ट्रीब्यूशन बोर्ड एवं सुरक्षित पॉइंट इंस्टॉलेशन।",
    icon: "Zap",
    image: "/services/electrical-wiring.jpg",
    highlights: ["Concealed wall conduit piping", "FRLS grade copper wiring", "Circuit load distribution", "Point testing & inspection"],
    highlightsHi: ["दीवारों में कंसील्ड पाइपिंग", "उच्च गुणवत्ता कॉपर वायरिंग", "लोड बैलेंसिंग और डिस्ट्रीब्यूशन", "पूर्ण पॉइंट टेस्टिंग"],
    enabled: true,
  },
  {
    id: "panel-mcb-distribution",
    slug: "panel-mcb-distribution",
    title: "MCB, DB & Control Panel Installation",
    titleHi: "एमसीबी, डिस्ट्रीब्यूशन बोर्ड और पैनल सेटअप",
    shortDescription: "Main switchgear, MCB box mounting, ELCB/RCCB shock protection, and distribution board setup.",
    shortDescriptionHi: "मेन स्विचगियर, एमसीबी बॉक्स माउंटिंग, आरसीसीबी शॉक प्रोटेक्शन और कंट्रोल पैनल सेटअप।",
    description: "Safe distribution board installations with overload cut-offs, earth leakage circuit breakers (RCCB), and phase-balanced wiring.",
    descriptionHi: "ओवरलोड प्रोटेक्शन, अर्थ लीकेज सर्किट ब्रेकर और थ्री-फेज बैलेंसिंग के साथ सुरक्षित पैनल इंस्टॉलेशन।",
    icon: "ShieldAlert",
    image: "/services/panel-mcb.jpg",
    highlights: ["RCCB shock prevention setups", "Isolator & MCB configuration", "Phase balancing across phases", "Short circuit protection"],
    highlightsHi: ["शॉक प्रोटेक्शन और आरसीसीबी", "आइसोलेटर एवं एमसीबी फिटिंग", "फेज बैलेंसिंग", "शॉर्ट सर्किट सुरक्षा"],
    enabled: true,
  },
  {
    id: "lighting-fixture-setup",
    slug: "lighting-fixture-setup",
    title: "Modern Architectural & Functional Lighting",
    titleHi: "आधुनिक एवं कार्यात्मक लाइटिंग इंस्टॉलेशन",
    shortDescription: "Ceiling profile lighting, LED cob lights, chandeliers, track lights, and outdoor floodlights.",
    shortDescriptionHi: "सीलिंग प्रोफाइल लाइट्स, एलईडी कॉब लाइट्स, झूमर, ट्रैक लाइट्स और आउटडोर फ्लडलाइट्स।",
    description: "Precision installation of cove LED strip lights, surface lights, decorative fixtures, and task illumination for residential and office spaces.",
    descriptionHi: "घरों और कार्यालयों के लिए कोव एलईडी स्ट्रिप्स, सजावटी झूमर और कार्यक्षेत्र लाइटिंग का सटीक इंस्टॉलेशन।",
    icon: "Lightbulb",
    image: "/services/lighting-fixture.jpg",
    highlights: ["False ceiling profile lighting", "LED track and spot fixture setup", "Chandeliers & pendant mounting", "Outdoor & landscape lighting"],
    highlightsHi: ["फॉल्स सीलिंग प्रोफाइल लाइटिंग", "ट्रैक एवं स्पॉट लाइट सेटअप", "सजावटी झूमर फिटिंग", "आउटडोर एवं बालकनी लाइटिंग"],
    enabled: true,
  },
  {
    id: "earthing-surge-protection",
    slug: "earthing-surge-protection",
    title: "Chemical Earthing & Surge Protection Systems",
    titleHi: "केमिकल अर्थिंग और ग्राउंडिंग सुरक्षा",
    shortDescription: "Copper plate and chemical earthing installation to protect equipment, appliances, and residents.",
    shortDescriptionHi: "घरेलू उपकरणों एवं परिसर की सुरक्षा हेतु कॉपर प्लेट और केमिकल अर्थिंग इंस्टॉलेशन।",
    description: "Standard resistance grounding pits, chemical earthing compounds, and ground wire connectivity for residences, workshops, and commercial buildings.",
    descriptionHi: "आवासीय एवं व्यावसायिक भवनों के लिए मानक अर्थिंग पिट, केमिकल कंपाउंड और सुरक्षित ग्राउंडिंग व्यवस्था।",
    icon: "ShieldCheck",
    image: "/services/earthing.jpg",
    highlights: ["Proper ohmic resistance testing", "Maintenance-free chemical earthing", "Protection for heavy appliances", "Lightning and surge safety"],
    highlightsHi: ["रेजिस्टेंस टेस्टिंग", "मेंटेनेंस-फ्री केमिकल अर्थिंग", "भारी उपकरणों की सुरक्षा", "सर्ज और बिजली सुरक्षा"],
    enabled: true,
  },
  {
    id: "commercial-contracting",
    slug: "commercial-contracting",
    title: "Commercial & Site Electrical Contracting",
    titleHi: "व्यावसायिक और प्रोजेक्ट इलेक्ट्रिकल ठेकेदारी",
    shortDescription: "Turnkey electrical contracting for offices, retail shops, clinics, and building renovations in Gurugram.",
    shortDescriptionHi: "गुरुग्राम में कार्यालयों, दुकानों और नवीनीकरण परियोजनाओं के लिए संपूर्ण इलेक्ट्रिकल कॉन्ट्रैक्टिंग।",
    description: "End-to-end electrical contract execution including cable tray layout, raw power and UPS cabling, load calculations, and site testing.",
    descriptionHi: "केबल ट्रे लेआउट, यूपीएस केबलिंग, लोड गणना और ऑन-साइट टेस्टिंग सहित संपूर्ण इलेक्ट्रिकल प्रोजेक्ट निष्पादन।",
    icon: "Building2",
    image: "/services/commercial-contracting.jpg",
    highlights: ["Cable trays and industrial raceways", "UPS & stabilized power lines", "Commercial load management", "Timely project delivery"],
    highlightsHi: ["केबल ट्रे और इंडस्ट्रियल रेसवे", "यूपीएस और पावर लाइन्स", "कमर्शियल लोड मैनेजमेंट", "समयबद्ध प्रोजेक्ट पूर्णता"],
    enabled: true,
  },
  {
    id: "fault-repair-maintenance",
    slug: "fault-repair-maintenance",
    title: "Electrical Fault Diagnosis & Maintenance",
    titleHi: "इलेक्ट्रिकल फॉल्ट डायग्नोसिस और मेंटेनेंस",
    shortDescription: "Systematic troubleshooting of recurring tripping, burnt wiring, voltage imbalance, and switch replacement.",
    shortDescriptionHi: "एमसीबी ट्रिपिंग, जली हुई वायरिंग, वोल्टेज की समस्या और स्विच रिप्लेसमेंट का त्वरित समाधान।",
    description: "Rapid on-site diagnosis for sparking outlets, short circuits, insulation degradation, and broken wiring circuits across Sector 11 and Gurugram.",
    descriptionHi: "गुरुग्राम एवं सेक्टर 11 में शॉर्ट सर्किट, स्पार्किंग, वोल्टेज असंतुलन और फॉल्ट की सटीक जांच एवं मरम्मत।",
    icon: "Wrench",
    image: "/services/fault-repair.jpg",
    highlights: ["Prompt troubleshooting", "Multimeter insulation checks", "Burnt wire replacement", "Modular switch replacements"],
    highlightsHi: ["सटीक फॉल्ट डायग्नोसिस", "मल्टीमीटर एवं इंसुलेशन जांच", "खराब वायर रिप्लेसमेंट", "मॉड्यूलर स्विच रिपेयर"],
    enabled: true,
  },
];
