import type { MetadataRoute } from "next";

const siteUrl = "https://bestmedicareadvisor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/quote", ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}