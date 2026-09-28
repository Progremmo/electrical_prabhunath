/**
 * Testimonials Configuration — White-Label
 */
export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  service: string;
  review: string;
  avatarInitials: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rajesh Malhotra",
    city: "DLF Cyber City Hub",
    rating: 5,
    service: "Cassette AC & Leakage Repair",
    review:
      "Our office cassette AC started leaking right during an important client board meeting. The technician was dispatched within 45 minutes! The issue was resolved cleanly with zero disruption.",
    avatarInitials: "RM",
  },
  {
    id: "t2",
    name: "Pooja Sundaram",
    city: "Residential Client",
    rating: 5,
    service: "Chemical Deep Cleaning",
    review:
      "The chemical deep foam jet wash made our 4-year-old split AC perform like brand new. The cooling is icy cold and the musty smell is completely gone. Extremely polite and professional technicians!",
    avatarInitials: "PS",
  },
  {
    id: "t3",
    name: "Vikram Singhania",
    city: "Facility Manager, Logistics Hub",
    rating: 5,
    service: "Commercial AC AMC",
    review:
      "We signed a commercial AMC for 45 units across three regional facilities. Their scheduled preventive maintenance and transparent reporting have reduced our breakdown tickets by 80%.",
    avatarInitials: "VS",
  },
  {
    id: "t4",
    name: "Anita Deshmukh",
    city: "Apartment Resident",
    rating: 5,
    service: "Inverter PCB Repair",
    review:
      "Other technicians kept insisting on buying a new outdoor compressor, but the senior engineer diagnosed an inverter PCB capacitor failure and repaired it for a fraction of the cost.",
    avatarInitials: "AD",
  },
  {
    id: "t5",
    name: "Karanbir Grover",
    city: "Hospitality General Manager",
    rating: 5,
    service: "AC Installation & Relocation",
    review:
      "Zero refrigerant leakage during multiple split AC uninstallation and re-installation during our property revamp. Laser leveling and copper insulation was top notch.",
    avatarInitials: "KG",
  },
  {
    id: "t6",
    name: "Meera Krishnan",
    city: "Homeowner",
    rating: 5,
    service: "Gas Refilling & Leak Arrest",
    review:
      "Prompt gas refilling done using electronic scales and certified R32 refrigerant. The technician gave me a 90-day warranty card right after testing cooling temperature. Truly dependable service.",
    avatarInitials: "MK",
  },
];
