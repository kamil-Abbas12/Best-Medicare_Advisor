import type { MetadataRoute } from "next";

const siteUrl = "https://bestmedicareadvisor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/quote", "/privacy-policy", "/terms-of-service"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/quote" ? 0.3 : 0.2,
  }));
}