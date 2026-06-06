import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vrodux ERP — Enterprise Business Management Platform",
    template: "%s | Vrodux ERP",
  },
  description:
    "The complete enterprise ERP platform for modern businesses. Finance, HR, Inventory, Sales, CRM, POS, Hospitality, Real Estate and more — all in one powerful platform by SoftAxis Technologies.",
  keywords: [
    "ERP software",
    "enterprise resource planning",
    "business management software",
    "accounting software",
    "HR software",
    "inventory management",
    "CRM software",
    "POS system",
    "restaurant management",
    "hospitality management",
    "real estate ERP",
    "construction ERP",
    "SaaS ERP",
    "cloud ERP",
    "Vrodux ERP",
    "SoftAxis Technologies",
    "UAE ERP",
    "Middle East ERP",
  ],
  authors: [{ name: "SoftAxis Technologies LLC", url: "https://softaxis.ae" }],
  creator: "SoftAxis Technologies LLC",
  publisher: "SoftAxis Technologies LLC",
  metadataBase: new URL("https://vrodux.com"),
  alternates: { canonical: "https://vrodux.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vrodux.com",
    siteName: "Vrodux ERP",
    title: "Vrodux ERP — Enterprise Business Management Platform",
    description:
      "The complete enterprise ERP platform. Finance, HR, Inventory, Sales, CRM, POS, Hospitality, Real Estate — all in one platform.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vrodux ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrodux ERP — Enterprise Business Management Platform",
    description: "The complete enterprise ERP platform for modern businesses.",
    images: ["/og-image.jpg"],
    creator: "@vroduxerp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`}
            </Script>
          </>
        )}
        {CLARITY_ID && (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
