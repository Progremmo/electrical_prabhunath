import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaravaircon.com"),
  title: {
    default: "Aarav Aircon Services | AC Repair & Installation Across Pan India",
    template: "%s | Aarav Aircon Services",
  },
  description:
    "Professional AC repair, installation, gas refilling, chemical cleaning and AMC services available across Pan India for residential and commercial customers.",
  keywords: [
    "AC repair",
    "AC installation",
    "Gas refilling",
    "Split AC repair",
    "Window AC repair",
    "Commercial AC maintenance",
    "AC AMC services",
    "Chemical jet wash",
    "Pan India AC service",
    "Aarav Aircon Services",
  ],
  authors: [{ name: "Aarav Aircon Services" }],
  creator: "Aarav Aircon Services",
  publisher: "Aarav Aircon Services",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aaravaircon.com",
    title: "Aarav Aircon Services | AC Repair & Installation Across Pan India",
    description:
      "Professional AC repair, installation, gas refilling, chemical cleaning and AMC services available across Pan India for residential and commercial customers.",
    siteName: "Aarav Aircon Services",
    images: [
      {
        url: "/images/hero-hvac.svg",
        width: 1200,
        height: 630,
        alt: "Aarav Aircon Services Pan India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarav Aircon Services | AC Repair & Installation Across Pan India",
    description:
      "Professional AC repair, installation, gas refilling, chemical cleaning and AMC services available across Pan India for residential and commercial customers.",
    images: ["/images/hero-hvac.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-gray-900 selection:bg-teal-700 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* LocalBusiness Schema.org JSON-LD for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aarav Aircon Services",
              "image": "https://aaravaircon.com/images/hero-real.jpg",
              "url": "https://aaravaircon.com",
              "telephone": "+919876543210",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pan India Service Network",
                "addressLocality": "India",
                "addressRegion": "IN",
                "addressCountry": "IN"
              },
              "description": "Professional AC repair, installation, gas refilling, chemical cleaning and AMC services available across Pan India for residential and commercial customers.",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "08:00",
                  "closes": "21:00"
                }
              ],
              "sameAs": [
                "https://aaravaircon.com"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
