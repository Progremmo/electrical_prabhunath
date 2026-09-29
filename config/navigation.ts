/**
 * Navigation Configuration
 * Supports multilingual routing (English / Hindi)
 */
export interface NavItem {
  key: "home" | "about" | "services" | "gallery" | "contact";
  href: (lang?: string) => string;
}

export const navigationItems: NavItem[] = [
  { key: "home", href: (lang = "en") => `/${lang}` },
  { key: "about", href: (lang = "en") => `/${lang}/about` },
  { key: "services", href: (lang = "en") => `/${lang}/services` },
  { key: "gallery", href: (lang = "en") => `/${lang}/gallery` },
  { key: "contact", href: (lang = "en") => `/${lang}/contact` },
];
