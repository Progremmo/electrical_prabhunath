/**
 * Site Configuration — Prabhunath Electricals & Contractor
 * All business details are centralized here.
 * Never hardcode business information directly inside UI components.
 */
export const siteConfig = {
  name: "Prabhunath Electricals & Contractor",
  shortName: "Prabhunath Electricals",
  tagline: "Reliable Electrical Solutions & Contracting Services",

  phone: "+919811068312",
  phoneDisplay: "+91 9811068312",
  phoneRaw: "+919811068312",
  whatsapp: "919811068312",

  email: "electricalprabhunath@gmail.com",

  // Deployed or production URL. Dynamic QR code and metadata consume this.
  website: "https://prabhunath-electricals.vercel.app",

  city: "Gurugram",
  state: "Haryana",
  country: "India",

  address: {
    street: "512/20, Om Nagar Gali No. 3",
    area: "Om Nagar, Sector 11",
    city: "Gurugram",
    state: "Haryana",
    postalCode: "122001",
    country: "India",
    formatted: "512/20, Om Nagar Gali No. 3, Om Nagar, Sector 11, Gurugram, Haryana 122001, India",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.4504679,77.0211427",
    mapsEmbedUrl: "https://maps.google.com/maps?q=28.4504679,77.0211427&hl=en&z=16&output=embed",
  },

  coordinates: {
    latitude: 28.4504679,
    longitude: 77.0211427,
  },

  businessHours: {
    daysDisplay: "Monday – Sunday",
    hoursDisplay: "8:00 AM – 9:00 PM",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "21:00",
  },

  branding: {
    logo: "/branding/logo.svg",
    logoDark: "/branding/logo-dark.svg",
    favicon: "/branding/favicon.svg",
    logoMark: "/branding/logo-mark.svg",
    ogImage: "/branding/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
