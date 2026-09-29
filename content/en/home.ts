import { siteConfig } from "@/config/site";

export const homeContentEn = {
  hero: {
    badge: "Electrical Services & Contractor • Gurugram, Haryana",
    title: "Reliable Electrical Solutions for Your Home & Business",
    subtitle:
      "Professional electrical and contracting solutions with a focus on quality, safety and dependable workmanship in Gurugram.",
    highlights: [
      "Residential & Commercial Electrical Work",
      "Proper Wiring, DB & MCB Panel Setup",
      "Sector 11, Gurugram Location",
      "Prompt Assessment & Honest Pricing",
    ],
    ctaCall: "Call Now",
    ctaQuote: "Get a Quote",
    ctaWhatsapp: "WhatsApp Us",
  },
  servicesPreview: {
    badge: "Our Electrical Specializations",
    title: "Comprehensive Electrical & Contracting Solutions",
    subtitle:
      "Explore key services tailored for residential apartments, independent homes, retail shops, and commercial offices.",
    viewAllCta: "View Full Service Details",
  },
  whyChooseUs: {
    badge: "Why Prabhunath Electricals",
    title: "Focused on Safety, Standards & Dependability",
    subtitle:
      "We approach every electrical task with meticulous attention to load distribution, safety guidelines, and neat execution.",
    features: [
      {
        id: "feat-1",
        title: "Professional Workmanship",
        description:
          "Careful circuit planning, secure junction box terminations, and clean conduit layout for long-term safety.",
        icon: "Wrench",
      },
      {
        id: "feat-2",
        title: "Safety Focused",
        description:
          "Strict adherence to RCCB shock prevention, proper copper grounding, and circuit breaker ratings.",
        icon: "ShieldCheck",
      },
      {
        id: "feat-3",
        title: "Transparent Communication",
        description:
          "Clear discussion of requirements, work scope, and material recommendations before commencing project execution.",
        icon: "MessageSquare",
      },
      {
        id: "feat-4",
        title: "Reliable Local Presence",
        description:
          "Centrally located in Om Nagar, Sector 11, Gurugram for convenient consultation and quick site assessments.",
        icon: "MapPin",
      },
      {
        id: "feat-5",
        title: "Quality Materials Compatibility",
        description:
          "Compatible with all reputable ISI and FRLS standard switchgear, modular plates, and copper cables.",
        icon: "Zap",
      },
      {
        id: "feat-6",
        title: "Turnkey Contracting Capability",
        description:
          "Equipped to execute end-to-end electrical fitouts for new constructions, renovations, and office spaces.",
        icon: "Building2",
      },
    ],
  },
  process: {
    badge: "How We Work",
    title: "Straightforward 4-Step Engagement Process",
    subtitle: "Simple, transparent, and structured from the first call to project completion.",
    steps: [
      {
        stepNumber: "01",
        title: "Contact Us",
        desc: "Phone or WhatsApp",
        detail: `Reach out at ${siteConfig.phoneDisplay} or message on WhatsApp to share your electrical requirement.`,
      },
      {
        stepNumber: "02",
        title: "Discuss Your Requirement",
        desc: "Scope & Specifications",
        detail: "We review the nature of the electrical work, architectural points, or troubleshooting required.",
      },
      {
        stepNumber: "03",
        title: "Site / Work Assessment",
        desc: "On-Site Evaluation",
        detail: "We inspect your premises at the agreed time to determine accurate wiring layouts, load distribution, and material requirements.",
      },
      {
        stepNumber: "04",
        title: "Work Execution",
        desc: "Safety & Standards",
        detail: "Systematic wiring, fitting installation, panel termination, and comprehensive point testing before handover.",
      },
    ],
  },
  ctaBanner: {
    badge: "Gurugram Local Contractor",
    title: "Have An Electrical Requirement or Need a Site Inspection?",
    subtitle: `Connect with Prabhunath Electricals & Contractor today. Operating Monday to Sunday from 8:00 AM to 9:00 PM in Sector 11, Gurugram.`,
    buttonCallText: "Call Now",
    buttonQuoteText: "Get an Estimate",
    buttonWhatsappText: "Chat on WhatsApp",
  },
};
