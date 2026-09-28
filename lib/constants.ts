export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  suitableFor: string;
  image: string;
  priceEstimate?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  serviceType: string;
  avatarInitials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  desc: string;
  detail: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Installation" | "Repair" | "Cleaning" | "Commercial" | "AMC";
  imageUrl: string;
  description: string;
}

export const COMPANY_DETAILS = {
  name: "Aarav Aircon Services",
  tagline: "Fast, Reliable & Affordable AC Repair, Installation & Maintenance",
  serviceCoverage: "Pan India Service Network (Residential, Commercial & Industrial)",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "info@aaravaircon.com",
  address: "Pan India Service Network — Serving Residential, Commercial & Industrial Clients Across India",
  experienceYears: "10+",
  happyCustomers: "5,000+",
  acInstalled: "2,500+",
  coverageLabel: "Pan India Coverage",
  workingHours: "Monday – Sunday: 8:00 AM – 9:00 PM (Emergency 24/7 Available)",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "split-ac-repair",
    title: "Split AC Repair",
    shortDesc: "Accurate diagnostics and quick repair for cooling loss, electrical faults, strange noises, and sensor malfunctions.",
    fullDesc: "Our certified HVAC specialists handle comprehensive Split AC repair services across all top brands. From faulty PCB troubleshooting, fan motor replacement, sensor recalibration to thermostat corrections, we ensure swift restoration with original parts.",
    iconName: "Wrench",
    benefits: [
      "Rapid diagnosis using advanced multi-meters and diagnostic tools",
      "OEM-certified spare parts with warranty",
      "Pre-repair testing and post-repair cooling performance analysis",
      "Emergency same-day repair slots available"
    ],
    suitableFor: "Apartments, villas, offices, clinic rooms, and modern studio spaces.",
    image: "/images/split-ac.svg"
  },
  {
    id: "window-ac-repair",
    title: "Window AC Repair",
    shortDesc: "End-to-end mechanical, electrical, and cooling tune-ups for all window air conditioner units.",
    fullDesc: "Complete troubleshooting and rebuilds for window air conditioning systems. We resolve excessive vibrations, compressor tripping issues, water accumulation, fan blade misalignment, and cooling coil blockage.",
    iconName: "Maximize2",
    benefits: [
      "Rigid mounting alignment and vibration dampening",
      "Coil de-clogging and airflow booster optimization",
      "Precision electrical capacitor and relay replacements",
      "Quiet operation tuning and noise reduction"
    ],
    suitableFor: "Compact master bedrooms, study rooms, single executive cabins, and rental homes.",
    image: "/images/window-ac.svg"
  },
  {
    id: "ac-installation",
    title: "AC Installation",
    shortDesc: "Laser-leveled precision mounting, pure copper pipe routing, vacuuming, and leak-proof fitting.",
    fullDesc: "Professional installation carried out strictly as per factory safety guidelines. We use vibration-resistant brackets, heavy-gauge copper lines, proper electrical earthing, and thorough nitrogen leak testing.",
    iconName: "PlusCircle",
    benefits: [
      "Standard laser-leveling for zero water accumulation tilt",
      "Pure electrolytic copper piping and high-grade armaflex insulation",
      "Full vacuuming cycle to eliminate non-condensable moisture",
      "Includes 30-day comprehensive installation guarantee"
    ],
    suitableFor: "New home setups, renovation sites, corporate workspace fit-outs, and retail shops.",
    image: "/images/ac-installation.svg"
  },
  {
    id: "ac-uninstallation",
    title: "AC Uninstallation",
    shortDesc: "Safe refrigerant pump-down, zero gas-loss dismantling, and safe packing for relocation.",
    fullDesc: "Relocating or remodeling? Our uninstallation preserves 100% of your refrigerant by performing certified pump-down into the outdoor condenser, preventing costly refilling needs at the new location.",
    iconName: "MinusCircle",
    benefits: [
      "Zero refrigerant loss guaranteed via controlled pump-down",
      "Safe unmounting of delicate indoor electronics and bracket hardware",
      "Pipe sealing to protect internal coils against dust and moisture ingress",
      "Clean post-service clean-up without damaging walls"
    ],
    suitableFor: "Tenants moving homes, office relocations, facade painting, and building renewals.",
    image: "/images/ac-uninstallation.svg"
  },
  {
    id: "gas-refilling",
    title: "Gas Refilling",
    shortDesc: "High-grade R32, R410A & R22 refrigerant charging with thorough electronic leak detection.",
    fullDesc: "We never top-up gas without eliminating leaks. Our technicians inspect flare joints, condenser U-bends, and capillary lines using electronic sniffers and soap solutions before precision scale-weighed charging.",
    iconName: "Flame",
    benefits: [
      "Micro-leak identification and silver-brazing leak arrest",
      "100% virgin refrigerant cylinders ensuring peak compressor efficiency",
      "Digital weight manifold charging according to manufacturer specs",
      "3-month gas leak warranty included"
    ],
    suitableFor: "Units exhibiting ice formation on cooling coils, lukewarm air output, or sudden cooling drops.",
    image: "/images/gas-refill.svg"
  },
  {
    id: "chemical-deep-cleaning",
    title: "Chemical Deep Cleaning",
    shortDesc: "Pressure pump jet-wash with eco-friendly antibacterial foam for cooling coils and blower wheels.",
    fullDesc: "Breathe cleaner, allergy-free air while slashing electricity bills. Our deep foam cleaning strips away stubborn mold, greasy grime, mildew, and bacteria from the indoor evaporator fins and cross-flow blower.",
    iconName: "Sparkles",
    benefits: [
      "High-pressure waterproof jacket wash preserving room interiors",
      "Antimicrobial chemical sanitization eliminating foul indoor odors",
      "Improves indoor airflow by up to 40% and cuts power consumption",
      "Includes deep clean of outdoor condenser fins"
    ],
    suitableFor: "Units not cleaned for 6+ months, rooms with pets, kitchens, or high-pollution urban avenues.",
    image: "/images/cleaning.svg"
  },
  {
    id: "pcb-compressor-repair",
    title: "PCB & Compressor Repair",
    shortDesc: "Advanced micro-soldering, motherboard diagnostic bench repairs, and inverter compressor fixes.",
    fullDesc: "Save substantial costs by repairing instead of immediately replacing expensive inverter circuit boards and compressors. Our electronics lab diagnoses inverter error codes, IPM power modules, and sensors.",
    iconName: "Cpu",
    benefits: [
      "Component-level repair of complex inverter PCBs",
      "Compressor terminal checking, winding insulation and relay testing",
      "Genuine factory replacement components with warranty",
      "Cost-effective alternative to complete indoor/outdoor unit replacement"
    ],
    suitableFor: "Blinking indicator LEDs, error codes (E1, E6, F3, etc.), or total non-power startup.",
    image: "/images/pcb-repair.svg"
  },
  {
    id: "water-leakage-repair",
    title: "Water Leakage Repair",
    shortDesc: "Permanent resolution for indoor dripping, clogged drain lines, cracked trays, and ice blockages.",
    fullDesc: "Indoor water dripping ruins walls and wallpapers. We flush internal drain pipes with pressure injectors, treat microbial sludge, realign drainage slopes, and replace cracked drain pans seamlessly.",
    iconName: "Droplets",
    benefits: [
      "Immediate same-day resolution to protect indoor furniture and walls",
      "High-pressure vacuum flushing of underground condensate pipes",
      "Drain pan inspection, slope angle rectification, and crack sealing",
      "Re-insulation of sweating suction lines"
    ],
    suitableFor: "Water dripping from front panel, water pooling on flooring, or musty damp odors.",
    image: "/images/leakage-repair.svg"
  },
  {
    id: "amc-service",
    title: "Annual Maintenance Contract (AMC)",
    shortDesc: "Scheduled proactive checkups, priority emergency response, and comprehensive discounts.",
    fullDesc: "Ensure uninterrupted climate comfort 365 days a year. Our customized residential and commercial AMC plans encompass scheduled preventive visits, free breakdown calls, and discounts on replacement spares.",
    iconName: "ShieldCheck",
    benefits: [
      "Quarterly preventive jet services and system health checkups",
      "Priority same-day emergency turnaround within 4 hours",
      "Discounts on spare parts and zero visit charges all year round",
      "Extends HVAC lifespan by 30-50% with sustained energy ratings"
    ],
    suitableFor: "Homes, corporate offices, banks, retail outlets, educational centers, and showrooms.",
    image: "/images/amc.svg"
  },
  {
    id: "commercial-ac-services",
    title: "Commercial AC Services",
    shortDesc: "Specialized maintenance and breakdown support for heavy-duty commercial ducted and pack units.",
    fullDesc: "Dependable climate reliability for mission-critical commercial hubs. We service ducted systems, packaged units, server room ACs, and centralized rooftop plants with strict compliance to safety protocols.",
    iconName: "Building2",
    benefits: [
      "Dedicated commercial relationship engineer and customized SLAs",
      "After-hours and weekend maintenance schedules for zero workflow disruption",
      "Energy audits, static pressure balancing, and airflow optimization",
      "GST billing and enterprise documentation"
    ],
    suitableFor: "Corporate parks, hotels, healthcare centers, server rooms, and banquet halls.",
    image: "/images/commercial-ac.svg"
  },
  {
    id: "cassette-ac-service",
    title: "Cassette AC Service",
    shortDesc: "Ceiling-mounted 360-degree round-flow cassette AC service, pump flushing, and grille tuning.",
    fullDesc: "Cassette systems demand specialized handling due to built-in lift pumps and false ceiling mounts. We service 4-way and circular flow cassette units with specialized ceiling catch-bags and safety scaffolding.",
    iconName: "Layers",
    benefits: [
      "Zero stain guarantee with custom overhead catchment jackets",
      "Condensate lift-pump de-scaling and float switch check",
      "Motorized vane adjustment for even 360-degree room cooling",
      "High CFM airflow restoration"
    ],
    suitableFor: "Conference rooms, fine dining restaurants, boutiques, and open-plan offices.",
    image: "/images/cassette-ac.svg"
  },
  {
    id: "vrv-vrf-maintenance",
    title: "VRV / VRF Maintenance",
    shortDesc: "Multi-zone variable refrigerant flow system maintenance, inverter staging, and branch diagnostics.",
    fullDesc: "Certified maintenance for Daikin VRV, Mitsubishi VRF, LG Multi V, and other multi-zone inverter installations. We test communication lines, electronic expansion valves (EEVs), and oil balancing cycles.",
    iconName: "Network",
    benefits: [
      "Master controller and branch selector error diagnostics",
      "Subcooling and superheat optimization for maximum COP efficiency",
      "Compressor staging cycle balance to avoid premature component wear",
      "Centralized monitoring integration and zone balancing"
    ],
    suitableFor: "Multi-floor commercial structures, luxury villas, institutions, and industrial offices.",
    image: "/images/vrv-system.svg"
  }
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: "certified-technicians",
    title: "Certified Technicians",
    description: "Every engineer is factory-trained, background-verified, and equipped with precision diagnostic meters.",
    iconName: "Award"
  },
  {
    id: "same-day-service",
    title: "Same-Day Service",
    description: "Quick dispatch within 60-90 minutes of booking to bring your room temperature back to cooling comfort.",
    iconName: "Clock"
  },
  {
    id: "transparent-pricing",
    title: "Transparent Pricing",
    description: "Fixed rate cards with zero hidden surprises. You approve the quote before any work starts.",
    iconName: "CheckCircle2"
  },
  {
    id: "genuine-spare-parts",
    title: "Genuine Spare Parts",
    description: "100% authentic OEM replacement parts, brass fittings, and copper tubes with manufacturer warranty.",
    iconName: "Wrench"
  },
  {
    id: "service-warranty",
    title: "Service Warranty",
    description: "Peace of mind guaranteed with a 30 to 90 days warranty on service workmanship and replaced components.",
    iconName: "Shield"
  },
  {
    id: "pan-india-support",
    title: "Pan India Support",
    description: "Centralized service assistance catering to residential, corporate, and retail chains across India.",
    iconName: "Globe"
  }
];

export const BRANDS_LIST = [
  { name: "Daikin", label: "DAIKIN" },
  { name: "LG", label: "LG Air Conditioning" },
  { name: "Voltas", label: "VOLTAS" },
  { name: "Samsung", label: "SAMSUNG" },
  { name: "Hitachi", label: "HITACHI" },
  { name: "Blue Star", label: "BLUE STAR" },
  { name: "Carrier", label: "CARRIER" },
  { name: "Panasonic", label: "PANASONIC" },
  { name: "Lloyd", label: "LLOYD" },
  { name: "Whirlpool", label: "WHIRLPOOL" }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Book Service",
    desc: "Online or Quick Call",
    detail: "Choose your preferred service, fill the instant quote form or call our 24/7 Pan India hotline for urgent dispatch."
  },
  {
    stepNumber: "02",
    title: "Technician Visit",
    desc: "At Your Doorstep",
    detail: "A certified technician arrives with calibrated testing tools, protective gear, and OEM replacement kits."
  },
  {
    stepNumber: "03",
    title: "Repair & Testing",
    desc: "Transparent Execution",
    detail: "Clear diagnosis and upfront pricing followed by precision repair, gas charging, or jet cleaning with zero mess."
  },
  {
    stepNumber: "04",
    title: "Cooling Restored",
    desc: "Verified Comfort",
    detail: "We measure airflow CFM and vent temperature, issue your digital invoice, and activate your service warranty."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rajesh Malhotra",
    location: "Pan India Client (DLF Cyber City Hub)",
    rating: 5,
    review: "Our office cassette AC started leaking right during an important client board meeting. Aarav Aircon dispatched their technician within 45 minutes! The issue was resolved cleanly with zero disruption.",
    serviceType: "Cassette AC & Leakage Repair",
    avatarInitials: "RM"
  },
  {
    id: "t2",
    name: "Pooja Sundaram",
    location: "Residential Resident",
    rating: 5,
    review: "The chemical deep foam jet wash made our 4-year-old split AC perform like brand new. The cooling is icy cold and the musty smell is completely gone. Extremely polite and professional technicians!",
    serviceType: "Chemical Deep Cleaning",
    avatarInitials: "PS"
  },
  {
    id: "t3",
    name: "Vikram Singhania",
    location: "Facility Manager, Logistics Hub",
    rating: 5,
    review: "We signed a Pan India commercial AMC for 45 units across three regional facilities. Their scheduled preventive maintenance and transparent reporting have reduced our breakdown tickets by 80%.",
    serviceType: "Commercial AC AMC",
    avatarInitials: "VS"
  },
  {
    id: "t4",
    name: "Anita Deshmukh",
    location: "Apartment Resident",
    rating: 5,
    review: "Other technicians kept insisting on buying a new outdoor compressor, but Aarav Aircon's senior engineer diagnosed an inverter PCB capacitor failure and repaired it for a fraction of the cost.",
    serviceType: "Inverter PCB Repair",
    avatarInitials: "AD"
  },
  {
    id: "t5",
    name: "Karanbir Grover",
    location: "Hospitality General Manager",
    rating: 5,
    review: "Zero refrigerant leakage during multiple split AC uninstallation and re-installation during our property revamp. Laser leveling and copper insulation was top notch.",
    serviceType: "AC Installation & Relocation",
    avatarInitials: "KG"
  },
  {
    id: "t6",
    name: "Meera Krishnan",
    location: "Homeowner",
    rating: 5,
    review: "Prompt gas refilling done using electronic scales and certified R32 refrigerant. The technician gave me a 90-day warranty card right after testing cooling temperature. Truly dependable service.",
    serviceType: "Gas Refilling & Leak Arrest",
    avatarInitials: "MK"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you provide same-day AC repair?",
    answer: "Yes, we offer priority same-day AC repair across all regions in our Pan India service network. Book online or call our helpline before 5:00 PM for same-day technician dispatch within 60 to 90 minutes."
  },
  {
    id: "faq-2",
    question: "Which AC brands do you service?",
    answer: "We service all major international and domestic AC brands including Daikin, LG, Voltas, Samsung, Hitachi, Blue Star, Carrier, Panasonic, Lloyd, Whirlpool, O General, Godrej, and Mitsubishi."
  },
  {
    id: "faq-3",
    question: "Do you offer gas refilling?",
    answer: "Yes. We supply 100% pure, factory-grade R32, R410A, and R22 refrigerants. Our protocol involves rigorous electronic and nitrogen leak testing to fix any micro-punctures before cylinder weight charging, covered by our gas warranty."
  },
  {
    id: "faq-4",
    question: "Is there a warranty on repairs?",
    answer: "All repairs and spare part replacements come with an assured service warranty ranging from 30 to 90 days. If the same issue recurs within the warranty timeframe, our engineers resolve it at zero extra charge."
  },
  {
    id: "faq-5",
    question: "Do you provide AMC?",
    answer: "Yes, we provide customizable Annual Maintenance Contracts (AMC) for both residential households and large-scale commercial organizations (offices, retail, hospitals, schools). Plans include quarterly preventive maintenance, emergency visits, and spare discounts."
  },
  {
    id: "faq-6",
    question: "Are services available across India?",
    answer: "Yes! Aarav Aircon Services operates a wide Pan India network supporting residential, commercial, industrial, and institutional premises across metro cities, tier-2 cities, and surrounding regional business hubs."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "High-Rise Precision Split AC Installation",
    category: "Installation",
    imageUrl: "/images/gallery-install-1.svg",
    description: "Laser-aligned outdoor bracket mounting with insulated copper piping and vibration dampeners."
  },
  {
    id: "g2",
    title: "Inverter PCB Diagnostic & Bench Repair",
    category: "Repair",
    imageUrl: "/images/repair-real.jpg",
    description: "Component-level micro-soldering and capacitor replacement for a multi-split inverter unit."
  },
  {
    id: "g3",
    title: "High-Pressure Antibacterial Foam Jet Wash",
    category: "Cleaning",
    imageUrl: "/images/gallery-cleaning-1.svg",
    description: "Complete evaporator coil deep cleaning using waterproof protective catchment bags."
  },
  {
    id: "g4",
    title: "Commercial Rooftop VRV Unit Overhaul",
    category: "Commercial",
    imageUrl: "/images/gallery-commercial-1.svg",
    description: "Comprehensive multi-zone VRF system diagnostics and electronic expansion valve check."
  },
  {
    id: "g5",
    title: "Corporate Facility Annual Maintenance",
    category: "AMC",
    imageUrl: "/images/gallery-amc-1.svg",
    description: "Quarterly preventative maintenance schedule for 30+ cassette AC units in a corporate headquarters."
  },
  {
    id: "g6",
    title: "R32 Refrigerant Weight Charging & Leak Seal",
    category: "Repair",
    imageUrl: "/images/gallery-gas-1.svg",
    description: "Nitrogen pressure leak detection and precision digital scale refrigerant charging."
  },
  {
    id: "g7",
    title: "Ceiling Cassette Flush Clean & Drainage Unclog",
    category: "Cleaning",
    imageUrl: "/images/gallery-cassette-1.svg",
    description: "Condensate pump flushing and circular louver deep sanitize in a hospitality suite."
  },
  {
    id: "g8",
    title: "Industrial Ducted AC System Commissioning",
    category: "Commercial",
    imageUrl: "/images/gallery-duct-1.svg",
    description: "Static pressure balancing and duct airflow verification for manufacturing cleanroom."
  },
  {
    id: "g9",
    title: "Residential Double Multi-Split Relocation",
    category: "Installation",
    imageUrl: "/images/gallery-relocate-1.svg",
    description: "Zero gas loss refrigerant pump-down, safe uninstallation, and re-mounting in new residence."
  }
];
