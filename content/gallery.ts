import { siteConfig } from "@/config/site";

/**
 * Gallery Page Content — White-Label Configuration
 * All header, badge, and informational note copy for the gallery page.
 */
export const galleryContent = {
  header: {
    badge: "Workmanship & Field Execution",
    title: "Our Project & Work Gallery",
    subtitle: `Real snapshots from residential installations, commercial chillers, foam jet washes, and precision inverter board repairs executed across ${siteConfig.coverage}.`,
  },
  card: {
    verifiedBadge: "Verified On-Site Workmanship",
    qualityTag: "Quality Inspected",
    enquireText: "Enquire",
  },
  reassurance: {
    title: "Standardized Quality on Every Visit",
    description:
      "Every technician is equipped with safety scaffolding, catch-bags to prevent indoor water splatters, and calibrated digital refrigerant manifolds.",
    ctaText: "Book An HVAC Inspection Today",
  },
} as const;
