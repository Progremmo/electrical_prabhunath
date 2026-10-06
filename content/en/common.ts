import { siteConfig } from "@/config/site";

export const commonContentEn = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    callNow: "Call Now",
    requestQuote: "Get a Quote",
    switchLanguage: "हिन्दी",
  },
  topBar: {
    badge: "Electrical Services & Contracting in Gurugram",
    hours: siteConfig.businessHours.hoursDisplay,
    callHotline: "Call Now",
  },
  footer: {
    tagline: siteConfig.tagline,
    description:
      "Prabhunath Electricals & Contractor delivers dependable residential and commercial electrical solutions across Gurugram, Haryana. Focused on safety, standards, and trustworthy workmanship.",
    quickLinksTitle: "Quick Navigation",
    servicesTitle: "Electrical Solutions",
    contactTitle: "Location & Contact",
    rightsReserved: "All Rights Reserved.",
    getDirections: "Get Directions on Google Maps",
    termsText: "Terms & Conditions",
    privacyText: "Privacy Policy",
  },
  floatingButtons: {
    callTitle: "Call Now",
    whatsappTitle: "Chat on WhatsApp",
  },
  qrCode: {
    title: "Scan to Open on Mobile",
    subtitle: "Quickly access contact information and direct WhatsApp chat on your smartphone.",
  },
};
