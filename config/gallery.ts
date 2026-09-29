/**
 * Gallery Configuration — Prabhunath Electricals & Contractor
 * Illustrative electrical & contracting showcase categories.
 * All paths correspond to vector SVG graphics in /public/gallery/.
 */
export interface GalleryItem {
  id: string;
  title: string;
  titleHi: string;
  category: "Wiring" | "Panel & DB" | "Lighting" | "Commercial" | "Earthing";
  categoryHi: "वायरिंग" | "पैनल और डीबी" | "लाइटिंग" | "व्यावसायिक" | "अर्थिंग";
  image: string;
  description: string;
  descriptionHi: string;
}

export const galleryCategories = ["All", "Wiring", "Panel & DB", "Lighting", "Commercial", "Earthing"] as const;

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Concealed Wall Conduit & Circuit Routing",
    titleHi: "कंसील्ड वॉल कंड्यूट और सर्किट पाइपिंग",
    category: "Wiring",
    categoryHi: "वायरिंग",
    image: "/gallery/gallery-wiring.svg",
    description: "Laser-aligned PVC conduit channel routing with heavy-gauge junction boxes for residential apartment.",
    descriptionHi: "अपार्टमेंट के लिए सटीक कंसील्ड पाइपिंग और सुरक्षित जंक्शन बॉक्स लेआउट।",
  },
  {
    id: "g2",
    title: "3-Phase Distribution Board & RCCB Setup",
    titleHi: "थ्री-फेज डिस्ट्रीब्यूशन बोर्ड और आरसीसीबी सेटअप",
    category: "Panel & DB",
    categoryHi: "पैनल और डीबी",
    image: "/gallery/gallery-panel.svg",
    description: "Phase-balanced MCB layout with double-pole isolator and 30mA residual current protection.",
    descriptionHi: "सटीक लोड डिस्ट्रीब्यूशन, आइसोलेटर और 30mA शॉक प्रोटेक्शन के साथ एमसीबी सेटअप।",
  },
  {
    id: "g3",
    title: "Ceiling Profile LED & Cove Illumination",
    titleHi: "सीलिंग प्रोफाइल एलईडी और कोव लाइटिंग",
    category: "Lighting",
    categoryHi: "लाइटिंग",
    image: "/gallery/gallery-lighting.svg",
    description: "Warm architectural LED aluminum profile channels recessed into modern gypsum ceiling.",
    descriptionHi: "आधुनिक फॉल्स सीलिंग में एल्युमिनियम प्रोफाइल और वार्म एलईडी स्ट्रिप्स का संयोजन।",
  },
  {
    id: "g4",
    title: "Commercial Retail Shop Electrical Contracting",
    titleHi: "व्यावसायिक रिटेल आउटलेट इलेक्ट्रिकल कॉन्ट्रैक्ट",
    category: "Commercial",
    categoryHi: "व्यावसायिक",
    image: "/gallery/gallery-commercial.svg",
    description: "Complete turnkey wiring, display spotlighting, and dedicated billing counter UPS connectivity.",
    descriptionHi: "दुकान के लिए संपूर्ण वायरिंग, डिस्प्ले स्पॉटलाइटिंग और सुरक्षित यूपीएस पावर लाइनें।",
  },
  {
    id: "g5",
    title: "Chemical Earthing Pit & Ground Rod Setup",
    titleHi: "केमिकल अर्थिंग पिट और कॉपर रॉड सेटअप",
    category: "Earthing",
    categoryHi: "अर्थिंग",
    image: "/gallery/gallery-earthing.svg",
    description: "Low-resistance earth pit with moisture-retentive chemical compound for complete building surge safety.",
    descriptionHi: "कम रेजिस्टेंस वाला मानक केमिकल अर्थिंग पिट, उपकरणों की पूर्ण सुरक्षा हेतु।",
  },
  {
    id: "g6",
    title: "Modular Switchboard Assembly & Point Termination",
    titleHi: "मॉड्यूलर स्विचबोर्ड और पॉइंट टर्मिनेशन",
    category: "Wiring",
    categoryHi: "वायरिंग",
    image: "/gallery/gallery-switchboard.svg",
    description: "Neatly grouped neutral, phase, and ground connections terminated into flame-retardant switch plates.",
    descriptionHi: "फायर-रिटार्डेंट मॉड्यूलर प्लेट्स में सुरक्षित वायर टर्मिनेशन और क्लीन फिनिशिंग।",
  },
];
