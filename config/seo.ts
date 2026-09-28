import { siteConfig } from "./site";

/**
 * SEO Configuration — White-Label Metadata
 *
 * All Next.js Metadata API values are derived from this file +
 * siteConfig so zero hardcoding is needed inside page files.
 */
export const seoConfig = {
  title: `${siteConfig.companyName} | AC Repair & Installation Across ${siteConfig.coverage}`,
  titleTemplate: `%s | ${siteConfig.companyName}`,
  description: `Professional AC repair, installation, gas refilling, chemical cleaning and AMC services available across ${siteConfig.coverage} for residential and commercial customers.`,
  keywords: [
    "AC repair",
    "AC installation",
    "Gas refilling",
    "Split AC repair",
    "Window AC repair",
    "Commercial AC maintenance",
    "AC AMC services",
    "Chemical jet wash",
    `${siteConfig.coverage} AC service`,
    siteConfig.companyName,
  ],
  canonical: siteConfig.website,
  author: siteConfig.companyName,
  robots: "index, follow",
  locale: "en_IN",
} as const;
