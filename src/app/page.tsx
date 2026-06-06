import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { StatsSection } from "@/components/sections/stats";
import { ModulesOverview } from "@/components/sections/modules-overview";
import { IndustriesPreview } from "@/components/sections/industries-preview";
import { WhyVrodux } from "@/components/sections/why-vrodux";
import { AiChatSection } from "@/components/sections/ai-chat";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ImplementationProcess } from "@/components/sections/implementation-process";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { generateJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vrodux ERP — Enterprise Business Management Platform",
  description:
    "The complete enterprise ERP platform for modern businesses. Finance, HR, Inventory, Sales, CRM, POS, Hospitality, Real Estate and more — all in one platform by SoftAxis Technologies.",
  alternates: { canonical: "https://vrodux.com" },
};

export default function HomePage() {
  const jsonLd = generateJsonLd("organization");

  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <ModulesOverview />
      <IndustriesPreview />
      <WhyVrodux />
      <AiChatSection />
      <TestimonialsSection />
      <ImplementationProcess />
      <PricingPreview />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
