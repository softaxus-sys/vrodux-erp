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
      <section className="py-10" aria-labelledby="uae-pricing-h">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 id="uae-pricing-h" className="text-2xl font-semibold tracking-tight sm:text-3xl">ERP Pricing in the UAE</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Vrodux ERP pricing is the same in every region, including the UAE. You choose a plan by team size, every module is included, and there are no per-module fees. For UAE businesses, UAE VAT 201 preparation, WPS salary files and e-invoicing preparation are part of every plan.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Want to understand how ERP software is priced before you compare vendors? Read{" "}
            <Link href="/blog/erp-pricing-uae" className="text-brand-600 underline underline-offset-4 dark:text-brand-300">ERP pricing in the UAE: models, costs and what to budget</Link>
            , or{" "}
            <Link href="/blog/construction-erp-cost-uae" className="text-brand-600 underline underline-offset-4 dark:text-brand-300">how much construction ERP costs in the UAE</Link>.
          </p>
        </div>
      </section>
      <PricingFaq />
      <PricingFinalCta />
    </>
  );
}
