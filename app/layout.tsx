import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import { contactConfig } from "@/config/contact";
import { services } from "@/config/services";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: seoConfig.title,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
  creator: seoConfig.author,
  publisher: seoConfig.author,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: siteConfig.website,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: siteConfig.companyName,
    images: [
      {
        url: siteConfig.branding.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.companyName} — ${siteConfig.coverage}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [siteConfig.branding.ogImage],
  },
  icons: {
    icon: siteConfig.branding.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Build JSON-LD from config — zero hardcoding
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.companyName,
    image: `${siteConfig.website}${siteConfig.branding.ogImage}`,
    url: siteConfig.website,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.label,
      addressLocality: "India",
      addressRegion: "IN",
      addressCountry: "IN",
    },
    description: seoConfig.description,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    areaServed: { "@type": "Country", name: "India" },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    url: siteConfig.website,
    logo: `${siteConfig.website}${siteConfig.branding.logo}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneRaw,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  const serviceSchemas = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.companyName,
    },
    areaServed: { "@type": "Country", name: "India" },
    url: `${siteConfig.website}/services#${s.id}`,
  }));

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-gray-900 selection:bg-teal-700 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Structured Data — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Structured Data — Service (per service) */}
        {serviceSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </body>
    </html>
  );
}
