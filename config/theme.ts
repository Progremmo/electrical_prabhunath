/**
 * Theme Configuration — White-Label Colors
 *
 * Change these three values to re-skin the entire site.
 * They are injected as CSS custom properties in globals.css
 * and consumed by Tailwind via the @theme block.
 */
export const theme = {
  /** Teal-green primary brand color */
  primary: "#0F766E",
  primaryDark: "#0d5f59",
  primaryLight: "#14b8a6",
  primary50: "#f0fdfa",
  primary100: "#ccfbf1",

  /** Blue secondary accent */
  secondary: "#2563EB",
  secondaryDark: "#1d4ed8",

  /** Amber highlight / CTA accent */
  accent: "#F59E0B",
  accentHover: "#d97706",

  /** Page background & text */
  background: "#F8FAFC",
  foreground: "#111827",
} as const;

export type Theme = typeof theme;
