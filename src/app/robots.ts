import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /_next/ holds the CSS, JavaScript and optimized images that pages need to render, so it must stay crawlable.
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://vrodux.com/sitemap.xml",
    host: "https://vrodux.com",
  };
}
