import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";

/**
 * Page-Level Metadata Content for Prabhunath Electricals & Contractor
 */
export const pageMetadata = {
  home: {
    title: seoConfig.title,
    description: seoConfig.description,
  },
  about: {
    title: `About Us | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name} — Reliable electrical contracting, wiring, and distribution panel solutions in Gurugram, Haryana.`,
  },
  services: {
    title: `Electrical Services & Contracting in Gurugram | ${siteConfig.name}`,
    description: `Professional electrical wiring, DB panels, architectural lighting, and commercial contracting solutions in Gurugram by ${siteConfig.name}.`,
  },
  gallery: {
    title: `Project Showcase & Work Gallery | ${siteConfig.name}`,
    description: `View illustrative electrical and contracting installations from ${siteConfig.name} in Gurugram, Haryana.`,
  },
  contact: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Contact ${siteConfig.name} for reliable electrical services and contracting in Gurugram, Haryana. Direct phone: ${siteConfig.phoneDisplay}.`,
  },
  terms: {
    title: `Terms & Conditions | ${siteConfig.name}`,
    description: `Terms and conditions for electrical contracting, wiring, and site installations provided by ${siteConfig.name}.`,
  },
  privacy: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `Privacy policy detailing how ${siteConfig.name} protects your contact and site information.`,
  },
} as const;
