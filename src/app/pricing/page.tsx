import { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import Script from "next/script";
import { PageHero } from "@/components/shared/page-hero";
import { PricingTrialBanner } from "@/components/sections/pricing-trial-banner";
import { PricingValueProps } from "@/components/sections/pricing-value-props";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { PricingAddons } from "@/components/sections/pricing-addons";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { PricingServices } from "@/components/sections/pricing-services";
import { PricingFaq } from "@/components/sections/pricing-faq";
import { pricingFaqs } from "@/lib/pricing-faqs";
import { PricingFinalCta } from "@/components/sections/pricing-final-cta";
import { PricingHeroCtas } from "@/components/sections/pricing-hero-ctas";
import { TRIAL_DAYS } from "@/lib/trial";

export const metadata: Metadata = pageMeta({
  title: "Vrodux ERP Pricing | Simple, Transparent ERP Pricing",
  description:
    `Explore Vrodux ERP pricing: simple plans with every module included, priced by team size. Buy now or try free for ${TRIAL_DAYS} days with no credit card.`,
  path: "/pricing", brand: false,
});

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
        description={`Everything your business needs to manage finance, people, customers and operations — in one complete ERP platform. No per-module fees. No complicated licensing. Every plan includes every module. You choose a plan by the size of your team.`}
      >
        <PricingHeroCtas />
      </PageHero>

      <PricingTrialBanner />
      <PricingValueProps />
      <p className="container mx-auto px-4 pb-2 text-center text-sm text-muted-foreground">
        Every plan includes UAE VAT 201 preparation, WPS salary files and e-invoicing preparation.{" "}
        <Link href="/uae-vat-payroll-e-invoicing" className="text-brand-600 underline underline-offset-4 dark:text-brand-300">See how it works</Link>.
      </p>
      <p className="container mx-auto px-4 pb-2 text-center text-sm text-muted-foreground">
        Running a gym or fitness club? Fitness &amp; Gym is included on every plan.{" "}
        <Link href="/features/fitness-gym" className="text-brand-600 underline underline-offset-4 dark:text-brand-300">See Fitness &amp; Gym</Link>.
      </p>
      <PricingPlans />
      <PricingComparison />
      <PricingAddons />
      <PricingServices />
      <PricingFaq />
      <PricingFinalCta />
    </>
  );
}
