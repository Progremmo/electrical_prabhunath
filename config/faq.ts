/**
 * FAQ Configuration — White-Label
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you provide same-day AC repair?",
    answer:
      "Yes, we offer priority same-day AC repair across all service regions. Book online or call our helpline before 5:00 PM for same-day technician dispatch within 60 to 90 minutes.",
  },
  {
    id: "faq-2",
    question: "Which AC brands do you service?",
    answer:
      "We service all major international and domestic AC brands including Daikin, LG, Voltas, Samsung, Hitachi, Blue Star, Carrier, Panasonic, Lloyd, Whirlpool, O General, Godrej, and Mitsubishi.",
  },
  {
    id: "faq-3",
    question: "Do you offer gas refilling?",
    answer:
      "Yes. We supply 100% pure, factory-grade R32, R410A, and R22 refrigerants. Our protocol involves rigorous electronic and nitrogen leak testing to fix any micro-punctures before cylinder weight charging, covered by our gas warranty.",
  },
  {
    id: "faq-4",
    question: "Is there a warranty on repairs?",
    answer:
      "All repairs and spare part replacements come with an assured service warranty ranging from 30 to 90 days. If the same issue recurs within the warranty timeframe, our engineers resolve it at zero extra charge.",
  },
  {
    id: "faq-5",
    question: "Do you provide AMC?",
    answer:
      "Yes, we provide customizable Annual Maintenance Contracts (AMC) for both residential households and large-scale commercial organizations (offices, retail, hospitals, schools). Plans include quarterly preventive maintenance, emergency visits, and spare discounts.",
  },
  {
    id: "faq-6",
    question: "Are services available across India?",
    answer:
      "Yes! We operate a wide service network supporting residential, commercial, industrial, and institutional premises across metro cities, tier-2 cities, and surrounding regional business hubs.",
  },
];
