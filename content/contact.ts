import { siteConfig } from "@/config/site";

/**
 * Contact Page Content — White-Label Configuration
 * All titles, subtitles, card headers, and reassurance text for the Contact page.
 */
export const contactContent = {
  header: {
    badge: "Get In Touch",
    title: `Contact ${siteConfig.shortName}`,
    subtitle:
      "Need urgent AC repair or planning an AMC setup? Speak directly with our dispatch engineers or request an instant free quote.",
  },
  directAssistance: {
    badge: "Direct Assistance",
    title: "Reach Our Dispatch Team",
    subtitle:
      "We are available round the clock to ensure you never have to endure a breakdown in peak weather.",
    phoneLabel: "Phone Call",
    whatsappLabel: "WhatsApp Instant Chat",
    emailLabel: "Email Support",
    addressLabel: "Corporate & Service Hub",
    hoursLabel: "Operating Hours",
  },
  reassurance: {
    title: "The Aarav Aircon Promise",
    points: [
      "Average technician arrival within 60–90 minutes",
      "No hidden call-out fees — upfront quote approval",
      "100% genuine factory-certified replacement parts",
      "Dedicated post-service support & warranty cards",
    ],
  },
} as const;
