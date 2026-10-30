import type { MetadataRoute } from "next";
import { BASE_URL, SERVICES_HUB_DATA, SERVICES_LIST } from "@/lib/services-data";
import { client } from "@/sanity/lib/client";
import { POST_SLUGS_QUERY } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const serviceUrls: MetadataRoute.Sitemap = SERVICES_LIST.map((service) => ({
    url: service.url,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  let blogPostUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<{ slug: string; publishedAt?: string }[]>(POST_SLUGS_QUERY);
    if (Array.isArray(posts)) {
      blogPostUrls = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch {
    blogPostUrls = [];
  }

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
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...serviceUrls,
    ...blogPostUrls,
  ];
}

