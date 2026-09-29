import { siteConfig } from "@/config/site";

/**
 * Privacy Policy Content — White-Label Configuration
 * Edit this file to update any privacy practices, data handling, or security disclosures.
 */
export const privacyContent = {
  lastUpdated: "September 29, 2026",
  badge: "Data Protection & Security",
  title: "Privacy Policy",
  subtitle: `Your privacy and customer trust are essential to ${siteConfig.companyName}. This policy explains how we collect, store, utilize, and protect your personal information when booking our HVAC and AC services.`,

  promise: {
    title: "Our Privacy Promise",
    description: "We will never sell, rent, or trade your personal phone number, location address, or contact details to third-party telemarketers or advertisers. Your data is strictly utilized for dispatching technicians and fulfilling your HVAC service requests.",
  },

  sections: [
    {
      id: "collection",
      number: "1",
      title: "Information We Collect",
      description: `When you interact with ${siteConfig.companyName} through our website, online quote request forms, WhatsApp booking, or direct phone inquiries, we may collect the following information:`,
      cards: [
        {
          title: "Contact & Identification",
          desc: "Full name, mobile telephone number, and email address for communication and digital invoice delivery.",
        },
        {
          title: "Premises & Service Location",
          desc: "Complete physical address, apartment/flat number, landmarks, and city for field technician navigation.",
        },
        {
          title: "Equipment & Service Details",
          desc: "AC brand (e.g. Daikin, Voltas, LG), system type (Split, Window, Cassette, VRV), tonnage, fault symptoms, and service history.",
        },
        {
          title: "Technical Website Analytics",
          desc: "Standard non-identifying telemetry (IP address, browser type, device resolution, pages viewed) to optimize website performance.",
        },
      ],
    },
    {
      id: "usage",
      number: "2",
      title: "How We Use Your Information",
      description: "Your details are used strictly for legitimate HVAC service delivery, including:",
      points: [
        "<strong>Doorstep Technician Dispatch:</strong> Assigning certified local AC technicians and sharing navigation coordinates to arrive within your scheduled slot.",
        "<strong>Diagnostic & Quotation Delivery:</strong> Sending itemized cost estimates, part replacement approvals, and GST invoices via SMS, WhatsApp, or Email.",
        "<strong>Warranty & Service Logs:</strong> Maintaining service records to track 30-day rework guarantees and manufacturer spare part warranties.",
        "<strong>Customer Support & Preventive Reminders:</strong> Following up on service satisfaction and notifying customers regarding recommended seasonal AMC filter flushes.",
      ],
    },
    {
      id: "protection",
      number: "3",
      title: "Data Protection & Information Security",
      description: "We enforce industry-standard technical and operational security controls to safeguard your data against unauthorized access, loss, or misuse:",
      points: [
        "<strong>SSL/TLS Encryption:</strong> All data submitted through our website forms is encrypted using 256-bit HTTPS protocols.",
        "<strong>Restricted Technician Access:</strong> Service engineers only receive the customer address and contact number needed to fulfill the active work order.",
        "<strong>Zero Payment Storage:</strong> We do not store or process debit/credit card CVVs or bank PINs on our servers. All digital payments are processed directly through certified RBI-regulated payment gateways and UPI apps.",
      ],
    },
    {
      id: "sharing",
      number: "4",
      title: "Information Sharing & Third Parties",
      description: "We do not sell, rent, or monetize your contact records. Information may only be shared with:",
      points: [
        "<strong>Assigned Field Technicians:</strong> For doorstep service attendance and client coordination.",
        "<strong>Communication Service Providers:</strong> Reliable SMS, WhatsApp Business API, and transactional email gateways to deliver booking confirmations.",
        "<strong>Legal & Regulatory Authorities:</strong> Only when strictly mandated by applicable laws, statutory court orders, or taxation audits.",
      ],
    },
    {
      id: "cookies",
      number: "5",
      title: "Cookies & Browsing Analytics",
      description: "Our website uses basic functional cookies and privacy-respecting analytics tools to understand user flow, maintain session stability, and improve page loading speeds. You may configure your web browser settings to block or delete cookies at any time without hindering essential site functionality.",
    },
    {
      id: "rights",
      number: "6",
      title: "Your Data Rights & Control",
      description: "As our customer, you have full control over your personal information:",
      points: [
        "<strong>Access & Correction:</strong> You can request a copy of your stored service history or update incorrect contact information.",
        "<strong>Data Erasure:</strong> You may request the deletion of your customer record from our marketing lists at any time by contacting us.",
        "<strong>Opt-Out:</strong> You can unsubscribe from non-essential promotional communications or service reminder messages with one click.",
      ],
    },
  ],

  contactSection: {
    title: "Privacy Officer & Contact Information",
    description: "For privacy-related questions, data access requests, or policy feedback, please reach out to us:",
  },
} as const;
