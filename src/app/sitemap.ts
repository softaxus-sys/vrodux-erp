import { MetadataRoute } from "next";

const baseUrl = "https://vrodux.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/features`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/solutions`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/industries`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/ai-workforce`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/pricing`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/book-demo`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "daily" as const },
    { url: `${baseUrl}/careers`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/partners`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/implementation`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/case-studies`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/security`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms`, priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
