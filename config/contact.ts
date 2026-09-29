import { siteConfig } from "@/config/site";

/**
 * Contact Configuration — Prabhunath Electricals & Contractor
 * Centralized direct contact links, WhatsApp triggers, and coordinates.
 */
export const contactConfig = {
  phone: {
    display: siteConfig.phoneDisplay,
    raw: siteConfig.phoneRaw,
    href: `tel:${siteConfig.phoneRaw}`,
  },
  whatsapp: {
    number: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    defaultMessage: `Hello Prabhunath Electricals & Contractor, I would like to inquire about your electrical services in Gurugram.`,
    getHref: (customMessage?: string) =>
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        customMessage || `Hello Prabhunath Electricals & Contractor, I would like to inquire about your electrical services in Gurugram.`
      )}`,
  },
  email: {
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  address: siteConfig.address,
  businessHours: siteConfig.businessHours,
  coordinates: siteConfig.coordinates,
} as const;

export type ContactConfig = typeof contactConfig;
