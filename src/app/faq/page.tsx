import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions about Vrodux ERP",
  description:
    "Find answers to common questions about Vrodux ERP features, pricing, implementation, support, and deployment options.",
};

const faqCategories = [
  {
    category: "General",
    faqs: [
      { q: "What is Vrodux ERP?", a: "Vrodux ERP is a comprehensive enterprise resource planning platform developed by SoftAxis Technologies LLC. It includes 12 integrated modules covering Finance, HR, Inventory, Sales, CRM, POS, Restaurant, Hospitality, Real Estate, Construction, and Analytics." },
      { q: "Who is Vrodux ERP designed for?", a: "Vrodux ERP is designed for small to enterprise-level businesses across various industries including retail, restaurants, hotels, manufacturing, distribution, real estate, construction, healthcare, and professional services." },
      { q: "Is Vrodux ERP available in Arabic?", a: "Yes. Vrodux ERP has full Arabic language support with RTL (Right-to-Left) interface. Users can switch between Arabic and English interfaces per their preference." },
    ],
  },
  {
    category: "Pricing & Plans",
    faqs: [
      { q: "What are the pricing tiers?", a: "Vrodux ERP offers three tiers: Starter ($299/month), Professional ($799/month), and Enterprise (custom pricing). All plans include access to core modules with higher tiers adding more advanced modules and features." },
      { q: "Is there a free trial?", a: "We offer a personalized demo session rather than a generic free trial. This gives you a hands-on experience with your specific business scenarios configured in Vrodux ERP." },
      { q: "Are there any hidden fees?", a: "No hidden fees. Our pricing is transparent and all-inclusive. You pay for your plan and get access to all included modules. On-premise deployment has separate one-time licensing costs." },
      { q: "Can I change plans?", a: "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle." },
    ],
  },
  {
    category: "Implementation",
    faqs: [
      { q: "How long does implementation take?", a: "Typical implementation takes 6-12 weeks depending on business complexity, number of modules, and data migration requirements. Smaller businesses can go live in as few as 3 weeks." },
      { q: "Do you migrate data from our existing system?", a: "Yes. Our implementation team handles data migration from any source — Excel, QuickBooks, Tally, SAP, Odoo, or other ERP systems. We provide data validation and reconciliation." },
      { q: "Do you provide training?", a: "Yes. Comprehensive role-based training is included in all implementations. We offer online and on-site training sessions, training videos, and documentation." },
      { q: "What is your implementation methodology?", a: "We follow a 5-phase methodology: Discovery & Planning, Configuration & Setup, Data Migration & Training, Go-Live, and Post-Launch Support. Each phase has clear milestones and deliverables." },
    ],
  },
  {
    category: "Technical",
    faqs: [
      { q: "What databases does Vrodux ERP support?", a: "Vrodux ERP uses PostgreSQL as its primary database. For on-premise deployments, we can also support MySQL and Microsoft SQL Server." },
      { q: "Does Vrodux ERP have an API?", a: "Yes. Vrodux ERP includes a comprehensive RESTful API available on Professional and Enterprise plans. API documentation is provided for integration with third-party systems." },
      { q: "What browsers are supported?", a: "Vrodux ERP works on all modern browsers: Chrome, Firefox, Safari, Edge. The interface is fully responsive and works on tablets and mobile devices." },
      { q: "Is Vrodux ERP mobile-friendly?", a: "Yes. The web interface is fully responsive and works on mobile browsers. A native mobile app for iOS and Android is available on Enterprise plans." },
    ],
  },
  {
    category: "Support",
    faqs: [
      { q: "What support options are available?", a: "Support options vary by plan. Starter includes email support (48h response), Professional includes priority email support (24h response), Enterprise includes 24/7 phone, email, and chat support." },
      { q: "Do you have a knowledge base?", a: "Yes. Vrodux ERP includes comprehensive documentation, video tutorials, and a knowledge base. Enterprise customers also get access to a dedicated customer success manager." },
      { q: "What is your uptime SLA?", a: "Vrodux ERP SaaS maintains a 99.9% uptime SLA. Historical uptime data is available on our status page. Maintenance windows are scheduled outside business hours." },
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
