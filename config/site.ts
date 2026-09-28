/**
 * Site Configuration — White-Label HVAC Branding
 *
 * This is the ONLY file a non-developer needs to edit to rebrand
 * the entire website for a new HVAC client.
 */
export const siteConfig = {
  /** Full legal / trading company name */
  companyName: "Aarav Aircon Services",

  /** Short version for tight UI spots (navbar badge, footer strip, etc.) */
  shortName: "Aarav Aircon",

  /** One-liner below the logo or in hero badges */
  tagline: "Fast, Reliable & Affordable AC Services",

  /** Geographic scope shown in hero, footer, schema, etc. */
  coverage: "Pan India",

  /** Primary business email */
  email: "info@aaravaircon.com",

  /** Display-formatted phone number (with country code & spaces) */
  phone: "+91 98765 43210",

  /** Raw phone for tel: links (no spaces) */
  phoneRaw: "+919876543210",

  /** WhatsApp number (with country code, no "+" prefix) */
  whatsapp: "919876543210",

  /** Canonical website URL (no trailing slash) */
  website: "https://aaravaircon.com",

  /** Physical or service-area address */
  address: {
    label: "Pan India Service Network",
    description:
      "Serving Residential, Commercial & Industrial Clients Across India",
  },

  /** Social media profile URLs (leave empty string if unused) */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  /** Key stats displayed on hero, about, etc. */
  stats: {
    experienceYears: "10+",
    happyCustomers: "5,000+",
    acInstalled: "2,500+",
    coverageLabel: "Pan India",
  },

  /** Branding file paths (relative to /public) */
  branding: {
    logo: "/branding/logo.svg",
    logoDark: "/branding/logo-dark.svg",
    favicon: "/branding/favicon.svg",
    ogImage: "/branding/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
