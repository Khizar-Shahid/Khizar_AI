import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/dashboard/",
          "/login/",
          "/logout/",
          "/account/",
          "/private/",
          "/api/",
          "/test/",
          "/staging/",
          "/dev/",
          "/tmp/",
          "/.env",
          "/.git/",
          "/node_modules/",
          "/vendor/",
          "/package.json",
          "/package-lock.json",
        ],
      },
    ],
    sitemap: "https://www.realtor-go.com/sitemap.xml",
  };
}
