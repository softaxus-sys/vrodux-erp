import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.unsplash.com" },
      { protocol: "https", hostname: "**.cloudinary.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "sin1.contabostorage.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Old docs addresses that were linked before the guides existed.
    return [
      { source: "/docs/crm/connecting-lead-sources", destination: "/docs/crm/capture-and-import-leads", permanent: true },
      { source: "/docs/crm/lead-scoring", destination: "/docs/crm/lead-scoring-hot-warm-cold", permanent: true },
      { source: "/docs/finance/recurring-invoices", destination: "/docs/finance/tax-invoices-and-recurring-invoices", permanent: true },
      { source: "/docs/finance/vat-tax-reporting", destination: "/docs/finance/prepare-a-uae-vat-return", permanent: true },
      { source: "/docs/hr/payroll-workflow", destination: "/docs/hr/run-payroll-with-finance-approval", permanent: true },
      { source: "/docs/hr/performance-reviews", destination: "/docs/hr/recruitment-and-performance", permanent: true },
      { source: "/docs/hr/recruitment", destination: "/docs/hr/recruitment-and-performance", permanent: true },
      { source: "/docs/project-management/managing-membership", destination: "/docs/project-management/projects-teams-and-access", permanent: true },
      { source: "/docs/real-estate/reminder-settings", destination: "/docs/real-estate/rent-reminders-and-vacancy-alerts", permanent: true },
      { source: "/docs/settings/roles-permissions-matrix", destination: "/docs/start-here/users-roles-teams-permissions", permanent: true },
      { source: "/docs/visa-services/government-channels", destination: "/docs/visa-services/visa-types-renewals-and-billing", permanent: true },
      { source: "/docs/visa-services/visa-types", destination: "/docs/visa-services/visa-types-renewals-and-billing", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://assets.calendly.com https://www.clarity.ms https://challenges.cloudflare.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "media-src 'self' https://sin1.contabostorage.com",
              "connect-src 'self' https://www.google-analytics.com https://api.resend.com https://calendly.com https://challenges.cloudflare.com https://www.facebook.com",
              "frame-src https://calendly.com https://challenges.cloudflare.com",
            ].join("; "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
