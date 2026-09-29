/**
 * Theme configuration using CSS variables
 * Primary: #0F172A (Deep Slate)
 * Secondary: #1E3A8A (Navy Blue)
 * Accent: #F59E0B (Amber Gold / Electric Amber)
 * Success: #16A34A (Emerald Green)
 * Background: #F8FAFC (Clean Light Slate)
 * Foreground: #111827 (Near Black)
 */
export const themeConfig = {
  colors: {
    primary: "#0F172A",
    primaryHover: "#1E293B",
    secondary: "#1E3A8A",
    secondaryHover: "#1D4ED8",
    accent: "#F59E0B",
    accentHover: "#D97706",
    success: "#16A34A",
    background: "#F8FAFC",
    foreground: "#111827",
    cardBackground: "#FFFFFF",
    borderColor: "#E2E8F0",
  },
} as const;

export type ThemeConfig = typeof themeConfig;
