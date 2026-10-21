import { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeProof } from "@/components/home/proof";
import { HomeModules } from "@/components/home/modules";
import { HomeShowcase } from "@/components/home/showcase";
import { HomeHowItWorks } from "@/components/home/how-it-works";
import { HomeIndustries } from "@/components/home/industries";
import { HomeWhy } from "@/components/home/why";
import { HomeVoices } from "@/components/home/voices";
import { HomeFaq } from "@/components/home/faq-cta";
import { FinalCTA } from "@/components/sections/final-cta";
import { CANVAS } from "@/components/home/ui";
import { AiChatSection } from "@/components/sections/ai-chat";
import { HomeGoLive, HomePricing } from "@/components/home/golive-pricing";
import { generateJsonLd } from "@/lib/seo";
import { getHomeShots } from "@/lib/home-shots";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vrodux ERP — Enterprise Business Management Platform",
  description:
    "The complete enterprise ERP platform for modern businesses. Finance, HR, Inventory, Sales, CRM, POS, Hospitality, Real Estate and more — all in one platform by SoftAxis Technologies.",
  alternates: { canonical: "https://vrodux.com" },
};

export default async function HomePage() {
  const jsonLd = generateJsonLd("organization");
  const shots = await getHomeShots();

  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={CANVAS}>
        <HomeHero shots={shots} />
        <HomeProof />
        <HomeModules />
        <HomeShowcase shots={shots} />
        <HomeHowItWorks />
        <HomeIndustries />
        <HomeWhy />
        <AiChatSection plain />
        <HomeVoices />
        <HomeGoLive />
        <HomePricing />
        <HomeFaq />
        <FinalCTA />
      </div>
    </>
  );
}
