import { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/shared/page-hero";
import { PricingTrialBanner } from "@/components/sections/pricing-trial-banner";
import { PricingValueProps } from "@/components/sections/pricing-value-props";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { PricingServices } from "@/components/sections/pricing-services";
import { PricingFaq } from "@/components/sections/pricing-faq";
import { pricingFaqs } from "@/lib/pricing-faqs";
import { PricingFinalCta } from "@/components/sections/pricing-final-cta";
import { PricingHeroCtas } from "@/components/sections/pricing-hero-ctas";

export const metadata: Metadata = {
  title: "Vrodux ERP Pricing | Simple, Transparent ERP Pricing",
  description:
    "Explore Vrodux ERP pricing with simple plans for growing businesses. Start your complete ERP with a 30-day free trial and no credit card required.",
  alternates: { canonical: "https://vrodux.com/pricing" },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        badge="Complete ERP. One Price."
        title="Simple, Transparent "
        highlightedWord="ERP Pricing"
        description="Everything your business needs to manage finance, people, customers and operations — in one complete ERP platform. No per-module fees. No complicated licensing. Choose the plan that fits your business and start with a 30-day free trial."
      >
        <PricingHeroCtas />
      </PageHero>

      <PricingTrialBanner />
      <PricingValueProps />
      <PricingPlans />
      <PricingComparison />
      <PricingServices />
      <PricingFaq />
      <PricingFinalCta />
    </>
  );
}
