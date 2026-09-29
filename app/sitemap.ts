import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.website;
  const lastModified = new Date();

  const englishRoutes = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/contact",
    "/terms",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const hindiRoutes = [
    "/hi",
    "/hi/about",
    "/hi/services",
    "/hi/gallery",
    "/hi/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const englishServiceRoutes = services
    .filter((s) => s.enabled)
    .map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const hindiServiceRoutes = services
    .filter((s) => s.enabled)
    .map((service) => ({
      url: `${baseUrl}/hi/services/${service.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [
    ...englishRoutes,
    ...hindiRoutes,
    ...englishServiceRoutes,
    ...hindiServiceRoutes,
  ];
}
