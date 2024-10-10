import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.xiaoying.life"
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
    url: `${base}/download`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },]

  return pages
}