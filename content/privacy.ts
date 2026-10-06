import { siteConfig } from "@/config/site";

/**
 * Privacy Policy Content — Prabhunath Electricals & Contractor
 */
export const privacyContent = {
  lastUpdated: "September 30, 2026",
  badge: "Data Protection & Privacy",
  title: "Privacy Policy",
  subtitle: `Your privacy and trust are paramount to ${siteConfig.name}. This policy explains how we collect and safeguard your information when you inquire about our electrical services.`,

  promise: {
    title: "Our Privacy Guarantee",
    description: "We never sell, rent, or trade your phone number, email, or project address. Your details are solely utilized to respond to electrical service inquiries and coordinate site assessments in Gurugram.",
  },

  sections: [
    {
      id: "collection",
      number: "1",
      title: "Information We Collect",
      description: `When you contact ${siteConfig.name} via phone, WhatsApp, or our website form, we may collect:`,
      cards: [
        {
          title: "Contact Details",
          desc: "Your name, mobile phone number, and email address to discuss your electrical project.",
        },
        {
          title: "Site Location",
          desc: "Your residential or commercial address in Gurugram for scheduling on-site evaluation.",
        },
        {
          title: "Scope & Specifications",
          desc: "Descriptions of electrical wiring, panel setup, lighting fixtures, or fault diagnosis required.",
        },
      ],
    },
    {
      id: "usage",
      number: "2",
      title: "How We Use Your Information",
      description: "Information provided is used strictly for legitimate contracting execution:",
      points: [
        "Coordinating site visits and electrical requirement discussions.",
        "Delivering work estimates, point schedules, and project updates via WhatsApp or direct call.",
        "Maintaining work records for ongoing customer coordination.",
      ],
    },
    {
      id: "security",
      number: "3",
      title: "Information Security",
      description: "We protect all communication channels and restrict access to contact details solely to authorized technicians fulfilling the requested electrical work.",
    },
  ],

  contactSection: {
    title: "Privacy Inquiries",
    description: "If you have any questions about data handling, reach out to us directly:",
  },
} as const;
