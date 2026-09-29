import { siteConfig } from "@/config/site";

/**
 * Services Page Content — White-Label Configuration
 * All titles, subtitles, and badges for the Services catalog page.
 */
export const servicesContent = {
  header: {
    badge: "Engineered HVAC Solutions",
    title: `Professional AC Services Across ${siteConfig.coverage}`,
    subtitle:
      "Detailed diagnosis, genuine factory spares, and certified technicians for all residential and commercial air conditioning needs.",
  },
  catalogSection: {
    badge: "Detailed Catalog",
    title: "All Air Conditioner Service Specializations",
    subtitle:
      "Explore our comprehensive services below. Each service includes pre-repair diagnostics, transparent cost estimation, and guaranteed warranty protection.",
  },
  card: {
    dispatchBadge: `${siteConfig.coverage} Dispatch`,
    whyChooseTitle: "Why Choose This Service?",
    ctaBookText: "Book Service",
    ctaConsultText: "Free Consultation",
  },
} as const;
