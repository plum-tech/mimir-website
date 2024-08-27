import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.mysit.life"
  const pages: MetadataRoute.Sitemap = [{
    url: base,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1
  }, {
    url: `${base}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }, {
    url: `${base}/about`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }, {
    url: `https://g.mysit.life`,
    changeFrequency: "monthly",
    priority: 1,
  }]

  return pages
}