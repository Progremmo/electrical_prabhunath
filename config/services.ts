/**
 * Services Configuration — White-Label
 *
 * Add, remove, or reorder services here.
 * The services page, service cards, and contact form dropdown
 * all render dynamically from this array.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  benefits: string[];
  suitableFor: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    id: "split-ac-repair",
    slug: "split-ac-repair",
    title: "Split AC Repair",
    shortDescription:
      "Accurate diagnostics and quick repair for cooling loss, electrical faults, strange noises, and sensor malfunctions.",
    description:
      "Our certified HVAC specialists handle comprehensive Split AC repair services across all top brands. From faulty PCB troubleshooting, fan motor replacement, sensor recalibration to thermostat corrections, we ensure swift restoration with original parts.",
    iconName: "Wrench",
    benefits: [
      "Rapid diagnosis using advanced multi-meters and diagnostic tools",
      "OEM-certified spare parts with warranty",
      "Pre-repair testing and post-repair cooling performance analysis",
      "Emergency same-day repair slots available",
    ],
    suitableFor:
      "Apartments, villas, offices, clinic rooms, and modern studio spaces.",
    image: "/services/split-ac-repair.jpg",
  },
  {
    id: "window-ac-repair",
    slug: "window-ac-repair",
    title: "Window AC Repair",
    shortDescription:
      "End-to-end mechanical, electrical, and cooling tune-ups for all window air conditioner units.",
    description:
      "Complete troubleshooting and rebuilds for window air conditioning systems. We resolve excessive vibrations, compressor tripping issues, water accumulation, fan blade misalignment, and cooling coil blockage.",
    iconName: "Maximize2",
    benefits: [
      "Rigid mounting alignment and vibration dampening",
      "Coil de-clogging and airflow booster optimization",
      "Precision electrical capacitor and relay replacements",
      "Quiet operation tuning and noise reduction",
    ],
    suitableFor:
      "Compact master bedrooms, study rooms, single executive cabins, and rental homes.",
    image: "/services/window-ac-repair.jpg",
  },
  {
    id: "ac-installation",
    slug: "ac-installation",
    title: "AC Installation",
    shortDescription:
      "Laser-leveled precision mounting, pure copper pipe routing, vacuuming, and leak-proof fitting.",
    description:
      "Professional installation carried out strictly as per factory safety guidelines. We use vibration-resistant brackets, heavy-gauge copper lines, proper electrical earthing, and thorough nitrogen leak testing.",
    iconName: "PlusCircle",
    benefits: [
      "Standard laser-leveling for zero water accumulation tilt",
      "Pure electrolytic copper piping and high-grade armaflex insulation",
      "Full vacuuming cycle to eliminate non-condensable moisture",
      "Includes 30-day comprehensive installation guarantee",
    ],
    suitableFor:
      "New home setups, renovation sites, corporate workspace fit-outs, and retail shops.",
    image: "/services/ac-installation.jpg",
  },
  {
    id: "ac-uninstallation",
    slug: "ac-uninstallation",
    title: "AC Uninstallation",
    shortDescription:
      "Safe refrigerant pump-down, zero gas-loss dismantling, and safe packing for relocation.",
    description:
      "Relocating or remodeling? Our uninstallation preserves 100% of your refrigerant by performing certified pump-down into the outdoor condenser, preventing costly refilling needs at the new location.",
    iconName: "MinusCircle",
    benefits: [
      "Zero refrigerant loss guaranteed via controlled pump-down",
      "Safe unmounting of delicate indoor electronics and bracket hardware",
      "Pipe sealing to protect internal coils against dust and moisture ingress",
      "Clean post-service clean-up without damaging walls",
    ],
    suitableFor:
      "Tenants moving homes, office relocations, facade painting, and building renewals.",
    image: "/services/ac-uninstallation.jpg",
  },
  {
    id: "gas-refilling",
    slug: "gas-refilling",
    title: "Gas Refilling",
    shortDescription:
      "High-grade R32, R410A & R22 refrigerant charging with thorough electronic leak detection.",
    description:
      "We never top-up gas without eliminating leaks. Our technicians inspect flare joints, condenser U-bends, and capillary lines using electronic sniffers and soap solutions before precision scale-weighed charging.",
    iconName: "Flame",
    benefits: [
      "Micro-leak identification and silver-brazing leak arrest",
      "100% virgin refrigerant cylinders ensuring peak compressor efficiency",
      "Digital weight manifold charging according to manufacturer specs",
      "3-month gas leak warranty included",
    ],
    suitableFor:
      "Units exhibiting ice formation on cooling coils, lukewarm air output, or sudden cooling drops.",
    image: "/services/gas-refilling.jpg",
  },
  {
    id: "chemical-deep-cleaning",
    slug: "chemical-deep-cleaning",
    title: "Chemical Deep Cleaning",
    shortDescription:
      "Pressure pump jet-wash with eco-friendly antibacterial foam for cooling coils and blower wheels.",
    description:
      "Breathe cleaner, allergy-free air while slashing electricity bills. Our deep foam cleaning strips away stubborn mold, greasy grime, mildew, and bacteria from the indoor evaporator fins and cross-flow blower.",
    iconName: "Sparkles",
    benefits: [
      "High-pressure waterproof jacket wash preserving room interiors",
      "Antimicrobial chemical sanitization eliminating foul indoor odors",
      "Improves indoor airflow by up to 40% and cuts power consumption",
      "Includes deep clean of outdoor condenser fins",
    ],
    suitableFor:
      "Units not cleaned for 6+ months, rooms with pets, kitchens, or high-pollution urban avenues.",
    image: "/services/chemical-cleaning.jpg",
  },
  {
    id: "pcb-compressor-repair",
    slug: "pcb-compressor-repair",
    title: "PCB & Compressor Repair",
    shortDescription:
      "Advanced micro-soldering, motherboard diagnostic bench repairs, and inverter compressor fixes.",
    description:
      "Save substantial costs by repairing instead of immediately replacing expensive inverter circuit boards and compressors. Our electronics lab diagnoses inverter error codes, IPM power modules, and sensors.",
    iconName: "Cpu",
    benefits: [
      "Component-level repair of complex inverter PCBs",
      "Compressor terminal checking, winding insulation and relay testing",
      "Genuine factory replacement components with warranty",
      "Cost-effective alternative to complete indoor/outdoor unit replacement",
    ],
    suitableFor:
      "Blinking indicator LEDs, error codes (E1, E6, F3, etc.), or total non-power startup.",
    image: "/services/pcb-repair.jpg",
  },
  {
    id: "water-leakage-repair",
    slug: "water-leakage-repair",
    title: "Water Leakage Repair",
    shortDescription:
      "Permanent resolution for indoor dripping, clogged drain lines, cracked trays, and ice blockages.",
    description:
      "Indoor water dripping ruins walls and wallpapers. We flush internal drain pipes with pressure injectors, treat microbial sludge, realign drainage slopes, and replace cracked drain pans seamlessly.",
    iconName: "Droplets",
    benefits: [
      "Immediate same-day resolution to protect indoor furniture and walls",
      "High-pressure vacuum flushing of underground condensate pipes",
      "Drain pan inspection, slope angle rectification, and crack sealing",
      "Re-insulation of sweating suction lines",
    ],
    suitableFor:
      "Water dripping from front panel, water pooling on flooring, or musty damp odors.",
    image: "/services/leakage-repair.jpg",
  },
  {
    id: "amc-service",
    slug: "amc-service",
    title: "Annual Maintenance Contract (AMC)",
    shortDescription:
      "Scheduled proactive checkups, priority emergency response, and comprehensive discounts.",
    description:
      "Ensure uninterrupted climate comfort 365 days a year. Our customized residential and commercial AMC plans encompass scheduled preventive visits, free breakdown calls, and discounts on replacement spares.",
    iconName: "ShieldCheck",
    benefits: [
      "Quarterly preventive jet services and system health checkups",
      "Priority same-day emergency turnaround within 4 hours",
      "Discounts on spare parts and zero visit charges all year round",
      "Extends HVAC lifespan by 30-50% with sustained energy ratings",
    ],
    suitableFor:
      "Homes, corporate offices, banks, retail outlets, educational centers, and showrooms.",
    image: "/services/amc.jpg",
  },
  {
    id: "commercial-ac-services",
    slug: "commercial-ac-services",
    title: "Commercial AC Services",
    shortDescription:
      "Specialized maintenance and breakdown support for heavy-duty commercial ducted and pack units.",
    description:
      "Dependable climate reliability for mission-critical commercial hubs. We service ducted systems, packaged units, server room ACs, and centralized rooftop plants with strict compliance to safety protocols.",
    iconName: "Building2",
    benefits: [
      "Dedicated commercial relationship engineer and customized SLAs",
      "After-hours and weekend maintenance schedules for zero workflow disruption",
      "Energy audits, static pressure balancing, and airflow optimization",
      "GST billing and enterprise documentation",
    ],
    suitableFor:
      "Corporate parks, hotels, healthcare centers, server rooms, and banquet halls.",
    image: "/services/commercial-ac.jpg",
  },
  {
    id: "cassette-ac-service",
    slug: "cassette-ac-service",
    title: "Cassette AC Service",
    shortDescription:
      "Ceiling-mounted 360-degree round-flow cassette AC service, pump flushing, and grille tuning.",
    description:
      "Cassette systems demand specialized handling due to built-in lift pumps and false ceiling mounts. We service 4-way and circular flow cassette units with specialized ceiling catch-bags and safety scaffolding.",
    iconName: "Layers",
    benefits: [
      "Zero stain guarantee with custom overhead catchment jackets",
      "Condensate lift-pump de-scaling and float switch check",
      "Motorized vane adjustment for even 360-degree room cooling",
      "High CFM airflow restoration",
    ],
    suitableFor:
      "Conference rooms, fine dining restaurants, boutiques, and open-plan offices.",
    image: "/services/cassette-ac.jpg",
  },
  {
    id: "vrv-vrf-maintenance",
    slug: "vrv-vrf-maintenance",
    title: "VRV / VRF Maintenance",
    shortDescription:
      "Multi-zone variable refrigerant flow system maintenance, inverter staging, and branch diagnostics.",
    description:
      "Certified maintenance for Daikin VRV, Mitsubishi VRF, LG Multi V, and other multi-zone inverter installations. We test communication lines, electronic expansion valves (EEVs), and oil balancing cycles.",
    iconName: "Network",
    benefits: [
      "Master controller and branch selector error diagnostics",
      "Subcooling and superheat optimization for maximum COP efficiency",
      "Compressor staging cycle balance to avoid premature component wear",
      "Centralized monitoring integration and zone balancing",
    ],
    suitableFor:
      "Multi-floor commercial structures, luxury villas, institutions, and industrial offices.",
    image: "/services/vrv-system.jpg",
  },
];
