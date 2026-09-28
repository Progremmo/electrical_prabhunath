/**
 * Gallery Configuration — White-Label
 *
 * Images should be placed in /public/gallery/
 */
export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const galleryCategories = [
  "All",
  "Installation",
  "Repair",
  "Cleaning",
  "Commercial",
  "AMC",
] as const;

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    title: "High-Rise Precision Split AC Installation",
    category: "Installation",
    image: "/gallery/install-1.jpg",
    description:
      "Laser-aligned outdoor bracket mounting with insulated copper piping and vibration dampeners.",
  },
  {
    id: "g2",
    title: "Inverter PCB Diagnostic & Bench Repair",
    category: "Repair",
    image: "/gallery/repair-real.jpg",
    description:
      "Component-level micro-soldering and capacitor replacement for a multi-split inverter unit.",
  },
  {
    id: "g3",
    title: "High-Pressure Antibacterial Foam Jet Wash",
    category: "Cleaning",
    image: "/gallery/cleaning-1.jpg",
    description:
      "Complete evaporator coil deep cleaning using waterproof protective catchment bags.",
  },
  {
    id: "g4",
    title: "Commercial Rooftop VRV Unit Overhaul",
    category: "Commercial",
    image: "/gallery/commercial-1.jpg",
    description:
      "Comprehensive multi-zone VRF system diagnostics and electronic expansion valve check.",
  },
  {
    id: "g5",
    title: "Corporate Facility Annual Maintenance",
    category: "AMC",
    image: "/gallery/amc-1.jpg",
    description:
      "Quarterly preventative maintenance schedule for 30+ cassette AC units in a corporate headquarters.",
  },
  {
    id: "g6",
    title: "R32 Refrigerant Weight Charging & Leak Seal",
    category: "Repair",
    image: "/gallery/gas-repair-1.jpg",
    description:
      "Nitrogen pressure leak detection and precision digital scale refrigerant charging.",
  },
  {
    id: "g7",
    title: "Ceiling Cassette Flush Clean & Drainage Unclog",
    category: "Cleaning",
    image: "/gallery/cassette-clean-1.jpg",
    description:
      "Condensate pump flushing and circular louver deep sanitize in a hospitality suite.",
  },
  {
    id: "g8",
    title: "Industrial Ducted AC System Commissioning",
    category: "Commercial",
    image: "/gallery/duct-commercial-1.jpg",
    description:
      "Static pressure balancing and duct airflow verification for manufacturing cleanroom.",
  },
  {
    id: "g9",
    title: "Residential Double Multi-Split Relocation",
    category: "Installation",
    image: "/gallery/relocate-1.jpg",
    description:
      "Zero gas loss refrigerant pump-down, safe uninstallation, and re-mounting in new residence.",
  },
];
