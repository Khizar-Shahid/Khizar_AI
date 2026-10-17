import type { MetadataRoute } from "next";
import { BASE_URL, SERVICES_HUB_DATA, SERVICES_LIST } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const serviceUrls: MetadataRoute.Sitemap = SERVICES_LIST.map((service) => ({
    url: service.url,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: SERVICES_HUB_DATA.url,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...serviceUrls,
  ];
}
