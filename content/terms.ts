import { siteConfig } from "@/config/site";

/**
 * Terms and Conditions Content — Prabhunath Electricals & Contractor
 */
export const termsContent = {
  lastUpdated: "September 30, 2026",
  badge: "Legal & Service Agreement",
  title: "Terms & Conditions",
  subtitle: `Please read these terms carefully before engaging Prabhunath Electricals & Contractor for electrical wiring, installations, or contracting projects in Gurugram.`,

  notice: {
    title: "Commitment to Electrical Safety & Standards",
    description: `By scheduling a site visit or contracting electrical work with ${siteConfig.name}, you agree to the terms below. We prioritize circuit safety, proper grounding, and transparent communication.`,
  },

  sections: [
    {
      id: "scope",
      number: "1",
      title: "Scope of Electrical Services",
      description: `${siteConfig.name} provides residential and commercial electrical solutions in Gurugram, including but not limited to:`,
      highlights: [
        "Concealed & surface conduit piping and copper wiring",
        "Distribution board (DB), isolator and MCB / RCCB setup",
        "Architectural, cove profile and decorative light mounting",
        "Chemical earthing and ground pit installations",
        "Commercial electrical contracting and cable tray raceways",
        "Electrical troubleshooting and circuit fault rectification",
      ],
    },
    {
      id: "site-assessment",
      number: "2",
      title: "Site Assessment & Work Estimation",
      description: "Prior to project execution, an on-site evaluation is conducted to review architectural plans, load calculations, and required switchgear points.",
      points: [
        "Estimates reflect agreed points, conduit lengths, and switchboard configurations.",
        "Any unexpected civil alterations or structural obstacles discovered during execution will be discussed prior to proceeding.",
      ],
    },
    {
      id: "safety-compliance",
      number: "3",
      title: "Electrical Safety & Site Standards",
      description: "All wiring and distribution systems must adhere to proper phase balancing, neutral segregation, and earthing to prevent fire and shock hazards.",
      points: [
        "Customers must ensure safe access to main electrical meters and premises during execution.",
        "We recommend standard ISI/FRLS certified cables and rated switchgear to guarantee long-term safety.",
      ],
    },
  ],

  contactSection: {
    title: "Questions Regarding Terms",
    description: "For any queries or project clarifications, contact our office directly:",
  },
} as const;
