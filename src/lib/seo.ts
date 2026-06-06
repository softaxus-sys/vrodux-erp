import { Metadata } from "next";

const siteConfig = {
  name: "Vrodux ERP",
  description:
    "The Digital Axis of Your Enterprise. Complete ERP for Finance, HR, Inventory, Sales, CRM, POS, Hospitality, Real Estate, and more — all in one powerful platform.",
  url: "https://vrodux.com",
  ogImage: "https://vrodux.com/og-image.jpg",
  twitter: "@vroduxerp",
  company: "SoftAxis Technologies LLC",
};

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: fullTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
      creator: siteConfig.twitter,
      site: siteConfig.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

export function generateJsonLd(type: "organization" | "product" | "faq", data?: object) {
  if (type === "organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.company,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/vrodux_logo.png`,
      description: siteConfig.description,
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@vrodux.com",
        contactType: "customer support",
        availableLanguage: ["English", "Arabic"],
      },
      sameAs: [
        "https://linkedin.com/company/vrodux",
        "https://twitter.com/vroduxerp",
      ],
    };
  }

  if (type === "faq" && data) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      ...data,
    };
  }

  return {};
}

export { siteConfig };
