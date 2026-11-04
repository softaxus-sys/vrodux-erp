import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, FileText, Network } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageJsonLd } from "@/components/shared/page-jsonld";
import { PageHero } from "@/components/shared/page-hero";
import { NewsletterSection } from "@/components/sections/newsletter";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = pageMeta({
  title: "UAE E-Invoicing: How Vrodux Helps You Prepare",
  description:
    "The UAE is moving to e-invoicing on the Peppol network. See what is changing, what Vrodux does today for tax invoices and VAT, and what is still in progress.",
  path: "/e-invoicing",
});

// Scope follows the owner's brief. Never describe Vrodux as "e-invoicing ready" or "FTA approved", and never say
// it submits to the FTA. The dates below are as currently reported.
// TODO(owner): verify the dates with the Ministry of Finance before release, then update the note below.

const today = [
  "Tax invoices with the seller's and buyer's name, address and TRN, with a TAX INVOICE title when a TRN is set.",
  "UAE VAT 201 return preparation from your ledger, with validation and export. You file on the FTA portal.",
  "The data fields that e-invoicing needs, held on your invoices and customer records.",
];

const inProgress = [
  "PINT AE invoice files.",
  "A connection to an accredited service provider.",
];

export default function EInvoicingPage() {
  return (
    <>
      <PageJsonLd
        type="WebPage"
        name="UAE e-invoicing: how Vrodux helps you prepare"
        description={metadata.description as string}
        path="/e-invoicing"
        crumbs={[{ name: "E-invoicing", path: "/e-invoicing" }]}
      />
      <PageHero
        badge="UAE e-invoicing"
        title="UAE e-invoicing: "
        highlightedWord="how Vrodux helps you prepare"
        description="What is changing, what Vrodux does today, and what is still being built."
      />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Network className="w-5 h-5 text-brand-500" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">What is changing</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The UAE is moving to e-invoicing on the <strong className="text-foreground">Peppol network</strong>, using
              the <strong className="text-foreground">PINT AE</strong> format. Invoices will be exchanged through
              accredited service providers (ASPs).
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-brand-500" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">Key dates, as currently reported</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Businesses with revenue under <strong className="text-foreground">AED 50 million</strong> are reported to need an ASP appointed by <strong className="text-foreground">31 March 2027</strong>.</li>
              <li>They are reported to go live on <strong className="text-foreground">1 July 2027</strong>.</li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              These dates are as currently reported. Check them with the UAE Ministry of Finance before you plan around them.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-brand-500" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">What Vrodux does today</h2>
            </div>
            <ul className="space-y-2">
              {today.map((t) => (
                <li key={t} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">In progress</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              {inProgress.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              These are not available yet. Vrodux prepares and exports your tax data. It does not submit anything to the FTA for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link href="/features/finance">See Finance and VAT</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog/vat-compliance-uae-erp">VAT compliance in the UAE</Link>
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection
        heading="Get notified about e-invoicing"
        text="Leave your email and we will let you know when Vrodux has e-invoicing updates."
      />
    </>
  );
}
