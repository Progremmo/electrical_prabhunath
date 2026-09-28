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
  email: "airconaarav@gmail.com",

  /** Display-formatted phone number (with country code & spaces) */
  phone: "+91 8808231587",

  /** Raw phone for tel: links (no spaces) */
  phoneRaw: "+918808231587",

  /** WhatsApp number (with country code, no "+" prefix) */
  whatsapp: "918808231587",

  /** Canonical website URL (no trailing slash) */
  website: "https://aaravaircon.com",

  /** Physical or service-area address */
  address: {
    label: "Pan India Service Network",
    description:
      "Serving Residential, Commercial & Industrial Clients Across India",
    officeAddress: "Gata No 67A, Village Babhani, Uttar Pradesh 274001"
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
    logo: "/branding/logo-transparent.png",
    logoDark: "/branding/logo-transparent.png",
    favicon: "/branding/favicon.png",
    ogImage: "/branding/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
