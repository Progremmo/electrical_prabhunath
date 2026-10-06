import { siteConfig } from "@/config/site";

/**
 * SEO & Local SEO Configuration for Gurugram, Haryana
 * Natural keyword alignment without keyword stuffing or unverified claims.
 */
export const seoConfig = {
  title: "Prabhunath Electricals & Contractor | Electrical Services in Gurugram",
  titleTemplate: `%s | ${siteConfig.name}`,
  description:
    "Prabhunath Electricals & Contractor provides professional electrical and contracting solutions in Gurugram, Haryana. Contact us for reliable electrical service and contracting requirements.",
  canonical: siteConfig.website,
  author: siteConfig.name,
  locale: "en_IN",
  alternateLocale: "hi_IN",
  keywords: [
    "Electrical contractor in Gurugram",
    "Electrician in Gurugram",
    "Electrical services in Gurugram",
    "Electrical contractor near me",
    "Residential electrical services Gurugram",
    "Commercial electrical contractor Gurugram",
    "Sector 11 Gurugram electrician",
    "Electrical wiring contractor Gurugram",
  ],
  ogImage: siteConfig.branding.ogImage,
} as const;

export type SeoConfig = typeof seoConfig;
