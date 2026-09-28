import { siteConfig } from "./site";

/**
 * Contact Configuration — White-Label
 *
 * The contact page reads exclusively from this file.
 */
export const contactConfig = {
  phone: {
    display: siteConfig.phone,
    raw: siteConfig.phoneRaw,
    label: "Toll-Free & 24/7 Emergency Line",
  },
  whatsapp: {
    display: siteConfig.phone,
    raw: siteConfig.whatsapp,
    label: "WhatsApp Quick Booking",
    sublabel: "Send photos/video of fault for fast estimation",
    defaultMessage: `Hello ${siteConfig.companyName}, I would like to request an AC service booking.`,
  },
  email: {
    address: siteConfig.email,
    label: "Email Helpdesk",
    sublabel: "Corporate AMC & enterprise enquiries",
  },
  address: {
    label: siteConfig.address.label,
    description: siteConfig.address.description,
  },
  businessHours: {
    display: "Monday – Sunday: 8:00 AM – 9:00 PM",
    emergency: "Emergency breakdown dispatch operates 24/7",
    topBarDisplay: "Mon - Sun: 8:00 AM - 9:00 PM",
  },
  guarantees: [
    "30 to 90 Days Workmanship Guarantee",
    "Transparent Price Approval Before Repair Starts",
  ],
} as const;
