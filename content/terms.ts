import { siteConfig } from "@/config/site";

/**
 * Terms and Conditions Content — White-Label Configuration
 * Edit this file to update any legal text, warranties, terms, or policies.
 */
export const termsContent = {
  lastUpdated: "September 29, 2026",
  badge: "Legal & Customer Agreement",
  title: "Terms & Conditions",
  subtitle: `Please read these terms carefully before booking any air conditioning repair, installation, preventive servicing, or Annual Maintenance Contracts (AMC) with ${siteConfig.companyName}.`,
  
  notice: {
    title: "Customer Commitment & Transparency",
    description: `By booking a service via our website, telephone, WhatsApp, or email, you enter into a binding agreement with ${siteConfig.companyName}. We are committed to upfront pricing, genuine spare parts, and certified technician safety standards.`,
  },

  sections: [
    {
      id: "scope",
      number: "1",
      title: "Scope of Services",
      description: `${siteConfig.companyName} provides comprehensive Heating, Ventilation, and Air Conditioning (HVAC) engineering, including but not limited to:`,
      highlights: [
        "Split & Window AC Installation & Uninstallation",
        "Inverter PCB Diagnostics & Board Micro-Soldering",
        "Antibacterial Foam Jet Chemical Deep Cleaning",
        "R32 / R410A / R22 Refrigerant Gas Charging",
        "Commercial Cassette, VRV & Ducted Maintenance",
        "Residential & Corporate Annual Maintenance (AMC)",
      ],
    },
    {
      id: "bookings",
      number: "2",
      title: "Service Bookings, Visitation & Diagnostic Inspection",
      description: "When a technician visits your premises, a preliminary physical inspection and diagnostic evaluation will be carried out to identify the root cause of the fault (e.g. electrical short circuit, fan motor failure, compressor seizing, or gas leakage).",
      points: [
        "<strong>Inspection Fee:</strong> A nominal diagnosis/visitation fee is applicable if the customer chooses not to proceed with the recommended repair after our technician completes the inspection.",
        "<strong>Fee Waiver:</strong> If the customer approves the repair or servicing quote on the spot, the diagnosis fee is adjusted or waived against the total invoice amount.",
        `<strong>Appointment Timings:</strong> While we strive for 60-90 minute doorstep arrival across ${siteConfig.coverage}, arrival windows are subject to traffic conditions, severe weather, and regional availability.`,
      ],
    },
    {
      id: "pricing",
      number: "3",
      title: "Quotation, Pricing & Payment Terms",
      description: "We believe in 100% price transparency. No hidden fees or unauthorized replacements will be charged without prior verbal or written customer approval:",
      points: [
        "<strong>Upfront Written Estimate:</strong> Prior to replacing parts (such as capacitors, sensors, copper tubing, or compressor relays), our technician will provide an itemized estimate.",
        "<strong>Taxes:</strong> All commercial and residential invoices are subject to statutory GST regulations as applicable.",
        "<strong>Accepted Payment Methods:</strong> UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit cards, and Cash are accepted immediately upon job completion and customer verification.",
        "<strong>Delayed Payments:</strong> For corporate and commercial clients with agreed credit terms, invoices must be settled within the tenure specified in the respective purchase order.",
      ],
    },
    {
      id: "warranty",
      number: "4",
      title: "Warranty Policy & Service Guarantees",
      description: `Every service provided by ${siteConfig.companyName} is backed by our customer assurance policy:`,
      cards: [
        {
          title: "Service Labor Guarantee",
          desc: "We provide a 30-day rework warranty on labor for repair and installation jobs. If the identical issue recurs within 30 days, we inspect and re-attend free of charge.",
        },
        {
          title: "Spare Parts Warranty",
          desc: "Brand-new replacement parts (capacitors, motors, contactors) carry OEM warranty ranging from 90 days to 1 year, as stated on the service invoice.",
        },
      ],
      footnote: "* Note: The warranty is void if the AC system is modified, repaired, or tampered with by any third-party or unauthorized technician following our service.",
    },
    {
      id: "customer-responsibilities",
      number: "5",
      title: "Customer Responsibilities & Site Access",
      description: "To enable safe and high-quality execution, customers agree to:",
      points: [
        "Provide safe, unhindered access to both indoor and outdoor AC units, electrical switchboards, and water sources for jet cleaning.",
        "Ensure stable domestic/commercial power supply with appropriate MCB and earthing connections.",
        "Inform the technician beforehand of any structural constraints, society permissions, or high-rise exterior balcony restrictions.",
        "Safeguard valuable personal belongings, electronics, and paperwork near the service area prior to cleaning.",
      ],
    },
    {
      id: "safety",
      number: "6",
      title: "Safety Protocols & High-Rise Work",
      description: `Technician safety is of paramount importance. In cases of precarious high-rise exterior installations, narrow shafts, or hazardous heights without adequate railings, specialized safety scaffolding or rope harnesses may be mandatory. If an installation location poses an imminent safety hazard, ${siteConfig.companyName} reserves the right to decline or suggest a structurally secure alternative outdoor mounting spot.`,
    },
    {
      id: "liability",
      number: "7",
      title: "Limitation of Liability",
      description: `${siteConfig.companyName} exercises professional care in all maintenance, chemical flushes, and repairs. However, we shall not be held liable for:`,
      points: [
        "Pre-existing structural defects, wall seepage, deteriorating brickwork, or aged brittle plastic chassis on older AC units.",
        "Fluctuations in grid voltage, lightning strikes, pest/rodent wire damage, or utility power surges damaging electronics post-service.",
        "Consequential losses, commercial business downtime, or indirect damages arising from equipment downtime.",
      ],
    },
    {
      id: "amc",
      number: "8",
      title: "Annual Maintenance Contracts (AMC)",
      description: "AMC plans (Comprehensive & Non-Comprehensive) are governed by specific service schedule agreements detailing the number of periodic foam flushes, breakdown response priorities, and covered component exclusions. AMC contracts are non-refundable once the first preventive service has been rendered.",
    },
  ],

  contactSection: {
    title: "Questions or Dispute Resolution",
    description: "If you have any questions regarding these Terms & Conditions or wish to resolve a service dispute, please reach out to our customer care team:",
  },
} as const;
