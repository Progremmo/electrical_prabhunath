import { siteConfig } from "@/config/site";

/**
 * Home Page Content — White-Label
 *
 * All homepage headings, subtitles, and section copy live here.
 */
export const homeContent = {
  hero: {
    badge: `${siteConfig.coverage} Trusted Air Conditioning Network`,
    title: siteConfig.companyName,
    subtitle: `Professional AC Repair, Installation, Gas Refilling & AMC Services Across ${siteConfig.coverage}. Reliable, fast, and transparent climate engineering for homes and businesses.`,
    highlights: [
      "60-90 Mins Technician Dispatch",
      "30-90 Days Service Warranty",
      "100% Genuine Factory Spares",
      "Fixed & Transparent Upfront Rates",
    ],
    heroImage: "/hero/hero-technician.jpg",
    heroImageAlt:
      "Professional HVAC technician repairing a modern split air conditioner",
    floatingBadge: {
      title: "Certified Technicians",
      subtitle: "Equipped with factory tools",
      tag: "Same-Day",
    },
    floatingTag: `Technicians Available ${siteConfig.coverage}`,
  },

  services: {
    badge: "Our Services",
    title: "Complete AC Care & Climate Solutions",
    subtitle: `From split and window AC repair to precision VRV/VRF multi-zone maintenance, our technicians bring industry-standard HVAC expertise straight to your premises.`,
    ctaText: "Explore In-Depth Service Breakdown & Pricing",
  },

  whyChoose: {
    badge: `Why ${siteConfig.shortName}`,
    title: `Why Customers Across ${siteConfig.coverage === "Pan India" ? "India" : siteConfig.coverage} Choose Us`,
    subtitle:
      "Precision climate engineering backed by certified technicians, authentic parts, and unconditional service integrity.",
    features: [
      {
        id: "certified-technicians",
        title: "Certified Technicians",
        description:
          "Every engineer is factory-trained, background-verified, and equipped with precision diagnostic meters.",
        iconName: "Award",
      },
      {
        id: "same-day-service",
        title: "Same-Day Service",
        description:
          "Quick dispatch within 60-90 minutes of booking to bring your room temperature back to cooling comfort.",
        iconName: "Clock",
      },
      {
        id: "transparent-pricing",
        title: "Transparent Pricing",
        description:
          "Fixed rate cards with zero hidden surprises. You approve the quote before any work starts.",
        iconName: "CheckCircle2",
      },
      {
        id: "genuine-spare-parts",
        title: "Genuine Spare Parts",
        description:
          "100% authentic OEM replacement parts, brass fittings, and copper tubes with manufacturer warranty.",
        iconName: "Wrench",
      },
      {
        id: "service-warranty",
        title: "Service Warranty",
        description:
          "Peace of mind guaranteed with a 30 to 90 days warranty on service workmanship and replaced components.",
        iconName: "Shield",
      },
      {
        id: "coverage-support",
        title: `${siteConfig.coverage} Support`,
        description: `Centralized service assistance catering to residential, corporate, and retail chains across ${siteConfig.coverage === "Pan India" ? "India" : siteConfig.coverage}.`,
        iconName: "Globe",
      },
    ],
  },

  process: {
    badge: "How It Works",
    title: "Fast, Transparent & Reliable 4-Step Process",
    subtitle:
      "From initial enquiry to verified icy cooling, experience hassle-free AC service at your fingertips.",
    steps: [
      {
        stepNumber: "01",
        title: "Book Service",
        desc: "Online or Quick Call",
        detail: `Choose your preferred service, fill the instant quote form or call our 24/7 hotline for urgent dispatch.`,
      },
      {
        stepNumber: "02",
        title: "Technician Visit",
        desc: "At Your Doorstep",
        detail:
          "A certified technician arrives with calibrated testing tools, protective gear, and OEM replacement kits.",
      },
      {
        stepNumber: "03",
        title: "Repair & Testing",
        desc: "Transparent Execution",
        detail:
          "Clear diagnosis and upfront pricing followed by precision repair, gas charging, or jet cleaning with zero mess.",
      },
      {
        stepNumber: "04",
        title: "Cooling Restored",
        desc: "Verified Comfort",
        detail:
          "We measure airflow CFM and vent temperature, issue your digital invoice, and activate your service warranty.",
      },
    ],
  },

  cta: {
    badge: `${siteConfig.coverage} Service Guarantee`,
    title: "Ready to Restore Crisp, Efficient Cooling Today?",
    subtitle:
      "Book a certified HVAC technician right now. Enjoy same-day doorstep dispatch and fixed upfront pricing with warranty protection.",
    primaryButton: "Get Free Quote",
    secondaryButton: siteConfig.phone,
  },
} as const;
