import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";

/**
 * Page-Level Metadata Content — White-Label
 *
 * Used by the Next.js Metadata API in each route's page.tsx
 */
export const pageMetadata = {
  home: {
    title: seoConfig.title,
    description: seoConfig.description,
  },
  about: {
    title: `About Us`,
    description: `Learn about ${siteConfig.companyName} — ${siteConfig.stats.experienceYears} years of delivering certified HVAC repair, installation, and AMC engineering across ${siteConfig.coverage}.`,
  },
  services: {
    title: `AC Repair, Installation & AMC Services`,
    description: `Comprehensive HVAC air conditioning services across ${siteConfig.coverage}. Split AC, Window AC, Inverter PCB repair, Gas refilling, Chemical deep cleaning and Commercial AMC.`,
  },
  gallery: {
    title: `Project Gallery`,
    description: `View real project photos from ${siteConfig.companyName} — AC installation, repair, chemical cleaning, and commercial HVAC work across ${siteConfig.coverage}.`,
  },
  contact: {
    title: `Contact Us`,
    description: `Contact ${siteConfig.companyName} for quick AC repair, installation, and AMC quotes across ${siteConfig.coverage}. Doorstep technician support within 60-90 minutes.`,
  },
} as const;
