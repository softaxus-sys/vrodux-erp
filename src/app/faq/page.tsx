import { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Script from "next/script";
import { totalModuleCount } from "@/lib/modules-data";
import { AI_KEY_TEXT } from "@/lib/owner-flags";

export const metadata: Metadata = pageMeta({
  title: "FAQ — Frequently Asked Questions about Vrodux ERP",
  description:
    "Find answers to common questions about Vrodux ERP features, pricing, implementation, support, security and deployment options, from free trial to go-live.",
  path: "/faq", brand: false,
});

// Answers below follow the product brief of November 2026. Items marked TODO(owner) are unconfirmed
// and are worded conservatively until the owner confirms them.
const faqCategories = [
  {
    category: "General",
    faqs: [
      { q: "What is Vrodux ERP?", a: `Vrodux ERP is an enterprise resource planning platform developed by SoftAxis Technologies LLC in Dubai. It includes ${totalModuleCount} integrated modules, from Finance, HR, Inventory, Sales, CRM and Purchase to POS, Restaurant, Hospitality, Real Estate, Manufacturing and more, plus E-commerce and an SEO AI Agent.` },
      { q: "Who is Vrodux ERP designed for?", a: "Small and mid-sized businesses and growing organizations across retail, restaurants, hospitality, real estate, construction, healthcare, education, insurance, B2B services, visa services, manufacturing, libraries and import/export." },
      { q: "Is it available in Arabic?", a: "The app has Arabic and right-to-left support. Some customer-facing pages, such as the library and gym member portals and quotation links, and some emails are English only for now." },
      { q: "Is it mobile-friendly?", a: "The web app works on phones and tablets, and there is a companion mobile app for approvals, CRM, your own HR and Vrodux AI. It is available on Google Play now, and the App Store version is coming soon. Administration stays on the web. See the mobile app guide in the docs." },
    ],
  },
  {
    category: "Pricing & Plans",
    faqs: [
      { q: "What are the pricing tiers?", a: "Plans are based on the number of users: 3, 10 or 50 users, plus Enterprise through sales. Every plan includes every module. Prices are on the pricing page." },
      { q: "Is there a free trial?", a: "Yes. Every new workspace gets a 14-day free trial with unlimited users and no credit card. Reminder emails arrive 7, 3 and 1 days before it ends." },
      { q: "Are there any hidden fees?", a: "There are no per-module fees. Add-ons such as SEO audits and Lead Generation reveals use credits that you buy yourself. Optional services such as data migration, implementation and custom development are quoted separately." },
      { q: "Can I change plans?", a: "Yes, in Settings, Billing. Checkout will not let you choose a plan smaller than your active user count. If a subscription lapses, your data is never deleted." },
    ],
  },
  {
    category: "Compliance & Security",
    faqs: [
      { q: "Does Vrodux file VAT returns with the FTA?", a: "No. Vrodux prepares your VAT 201 return, checks it against your ledger and exports the files. You file on the FTA portal and record the reference in Vrodux." },
      { q: "Does Vrodux submit WPS salary files to the bank?", a: "No. HR prepares the WPS salary file for you to take to your bank. Check it against your bank's template before the first live submission." },
      { q: "Does Vrodux support UAE e-invoicing?", a: "Vrodux prepares invoices and credit notes for e-invoicing: tax categories, customer TRN and address data, a readiness check, and PINT AE XML downloads. Sending to an accredited provider is not live yet. See the UAE VAT, WPS and e-invoicing page for details." },
      { q: "How is my data protected?", a: "Data is encrypted at rest and connections use TLS 1.3, and sensitive values such as API tokens and two-factor secrets are stored encrypted. You can turn on two-factor sign-in, control access by role, and see and sign out your devices. See the security page for details." },
      { q: "What about backups and uptime?", a: "Backups run daily with point-in-time recovery, and Vrodux has a 99.9% uptime SLA. Enterprise plans can have a custom SLA." },
    ],
  },
  {
    category: "Implementation",
    faqs: [
      { q: "How long does implementation take?", a: "Vrodux ERP is cloud-based, so your workspace works instantly. The time goes into exporting your data from your current system, importing it and adjusting settings, which is usually a day or two for most businesses, such as real estate, POS and restaurants. On-premises deployments take a few days because of installation and training." },
      // TODO(owner): confirm the current implementation, migration, training and support offer.
      { q: "Do you provide implementation, data migration and training?", a: "Implementation, data migration, integrations and custom development can be provided separately and are quoted on request. Contact the team to discuss what you need." },
      { q: "What support is available?", a: "Help and Support inside the app has video guides and lets you raise a ticket with the Vrodux team. Priority and dedicated support levels are listed on the pricing page." },
    ],
  },
  {
    category: "Technical",
    faqs: [
      { q: "Does Vrodux ERP have an API?", a: "Yes. API access is part of the Enterprise plan. Vrodux also connects to other tools through webhooks, Zapier and Make." },
      { q: "Can Vrodux be deployed on-premise?", a: "Yes. Vrodux offers both cloud (SaaS) and on-premise deployment. On-premise has separate licensing, and Enterprise customers can discuss it with the team." },
      { q: "What databases does Vrodux ERP support?", a: "Vrodux ERP uses PostgreSQL as its primary database. For on-premise deployments, MySQL and Microsoft SQL Server can also be supported." },
      { q: "What browsers are supported?", a: "All modern browsers: Chrome, Firefox, Safari and Edge. The interface is responsive and works on tablets and phones." },
      { q: "Is the AI assistant included?", a: `Vrodux AI is on every plan. ${AI_KEY_TEXT}. Every change it proposes needs your confirmation first.` },
    ],
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      }))
    ),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        badge="FAQs"
        title="Frequently Asked "
        highlightedWord="Questions"
        description="Everything you need to know about Vrodux ERP. Can't find an answer? Our team is always ready to help."
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-10">
              <div className="flex items-center gap-2 mb-5">
                <Badge variant="brand" className="px-3">{cat.category}</Badge>
                <div className="h-px flex-1 bg-border" />
              </div>
              <Accordion type="single" collapsible className="space-y-2">
                {cat.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.category}-${i}`}
                    className="border rounded-xl px-5 data-[state=open]:bg-muted/20"
                  >
                    <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-12 text-center p-8 rounded-2xl border bg-brand-500/5 border-brand-500/20">
            <h3 className="font-semibold text-xl mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Our team of experts is ready to answer any specific questions about your ERP needs.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
