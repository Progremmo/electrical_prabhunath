import { siteConfig } from "@/config/site";

/**
 * About Page Content — White-Label
 */
export const aboutContent = {
  header: {
    badge: "About Our Company",
    title: `Reliable HVAC Excellence Across ${siteConfig.coverage === "Pan India" ? "India" : siteConfig.coverage}`,
    subtitle:
      "Delivering precision climate engineering, authentic spare components, and dependable cooling care for homes, businesses, and industrial infrastructures.",
  },

  stats: [
    { value: siteConfig.stats.experienceYears, label: "Years Experience", iconName: "Award" },
    { value: siteConfig.stats.happyCustomers, label: "Happy Customers", iconName: "Users" },
    { value: siteConfig.stats.acInstalled, label: "AC Installed", iconName: "Wrench" },
    { value: siteConfig.stats.coverageLabel, label: "Coverage Network", iconName: "Globe" },
  ],

  introduction: {
    badge: "Company Introduction",
    title: "Pioneering Clean Air & Seamless Climate Engineering Since Over a Decade",
    paragraphs: [
      `${siteConfig.companyName} began with a simple mission: to eliminate the uncertainty, frequent breakdowns, and inflated costs associated with domestic and commercial air conditioning maintenance.`,
      `Today, operating through a robust network spanning major cities and commercial hubs across ${siteConfig.coverage === "Pan India" ? "India" : siteConfig.coverage}, we have serviced over ${siteConfig.stats.happyCustomers} satisfied residential and enterprise clients. Whether it is an urgent capacitor breakdown during peak summer heat or comprehensive annual maintenance for multi-floor VRV installations, our factory-certified engineers arrive fully equipped to get the job done right the first time.`,
    ],
    ctaText: "Connect With Our Team",
  },

  trustFactors: [
    {
      title: "Factory-Trained & Verified Engineers",
      desc: "Background-checked professionals who undergo regular training on inverter and variable refrigerant flow systems.",
    },
    {
      title: "100% Transparent Price Cards",
      desc: "Quotes are agreed upon prior to execution with no hidden inspection charges or inflated part costs.",
    },
    {
      title: "Assured 30-90 Days Warranty",
      desc: "Written guarantee on replaced OEM parts and workmanship, giving you worry-free cooling.",
    },
    {
      title: `${siteConfig.coverage} Service Reach`,
      desc: `Centralized service monitoring ensuring standardized quality checks across all service areas.`,
    },
  ],

  mission:
    `To provide swift, honest, and technically superior HVAC repair, installation, and preventative maintenance across every corner of ${siteConfig.coverage === "Pan India" ? "India" : siteConfig.coverage}. We strive to restore uninterrupted comfort to families and safeguard productivity for enterprise businesses through clean, energy-efficient cooling solutions.`,

  vision:
    `To stand as ${siteConfig.coverage === "Pan India" ? "India's" : "the region's"} foremost benchmark for HVAC service integrity, recognized for our adherence to OEM engineering standards, digital transparency, eco-conscious refrigerant practices, and exceptional customer satisfaction.`,
} as const;
