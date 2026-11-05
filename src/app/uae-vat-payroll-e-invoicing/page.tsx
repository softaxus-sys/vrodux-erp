import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Info } from "lucide-react";
import { SITE, breadcrumbLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/demos/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { TrialCta } from "@/components/shared/trial-cta";
import { getDocsShots } from "@/lib/docs-screenshots";
import { pricingTiers } from "@/lib/pricing-data";

const PATH = "/uae-vat-payroll-e-invoicing";
const PAGE = `${SITE}${PATH}`;

// Title: "UAE VAT, WPS Payroll & E-Invoicing Software | Vrodux ERP" (56 characters in total, so the brand suffix is part of the title).
export const metadata: Metadata = pageMeta({
  title: "UAE VAT, WPS Payroll & E-Invoicing Software | Vrodux ERP",
  description:
    "Prepare UAE VAT returns, export WPS salary files and prepare e-invoicing data in one cloud ERP. Every module included. Free 14-day trial.",
  path: PATH,
  brand: false,
});

// TODO(owner): screenshots still needed. The page shows an image only where a real one exists; nothing is shown otherwise.
//  1. The VAT 201 return screen (boxes, checks, reconciliation).
//  2. The WPS export dialog showing employees listed with the reason they are excluded.
//  3. The e-invoicing readiness page listing invoices and customers with missing data.
//  4. An invoice with a linked credit note.
// Add them to the Contabo docs-screenshots manifest and point the slots below at them.

// TODO(owner): verify the e-invoicing deadline wording and the Ministry of Finance link before running ads.
// TODO(owner): confirm the "network ID" field name and the PINT AE XML download are live for all customers.
// TODO(owner): confirm the payroll PDF payslip download is in the employee portal for all customers.

const vatPoints = [
  "Prepares the VAT 201 boxes from your posted invoices, bills and expenses.",
  "Checks the return for errors and warnings before you rely on it.",
  "Reconciles the VAT figures to your general ledger VAT account, so differences are visible.",
  "Generates the FTA Audit File (FAF) as CSV, and a return XML file.",
  "An approval step before anything is marked ready.",
  "You file on EmaraTax, then record the reference in Vrodux. Vrodux does not file the return for you.",
];

const payrollPoints = [
  "Run payroll with allowances and deductions, review each employee, and approve through the status flow: draft, processed, approved by Finance, paid.",
  "Exports the WPS salary file (SIF) from an approved payroll run.",
  "Checks each employee before export: a valid UAE IBAN (including the check digits), the labour card number and the bank routing code. Anyone missing details is listed by name with the reason, instead of failing silently.",
  "Payslips for employees, with PDF download in the employee portal.",
];

const einvoicePoints = [
  "Credit notes linked to the invoice they correct, with a required reason. An issued invoice is never edited or made negative.",
  "Tax category (standard, zero-rated, exempt, out of scope) and a reason on each line.",
  "Customer records with TRN, structured address, emirate and network ID.",
  "A readiness check that lists invoices and customers with missing data, and what is missing.",
  "Download the invoice or credit note as a PINT AE XML file. It is prepared in the PINT AE structure.",
  "A send queue that is built and waiting for a provider connection.",
];

const modules = [
  { title: "Accounting and invoicing", text: "General ledger, invoicing, expenses, bank reconciliation and financial reports.", href: "/features/finance" },
  { title: "HR and payroll", text: "Employees, attendance, leave and payroll with a Finance approval step.", href: "/features/hr" },
  { title: "CRM", text: "Leads, pipeline, accounts and quotations in one place.", href: "/features/crm" },
  { title: "Inventory", text: "Products, warehouses, stock movements and transfers.", href: "/features/inventory" },
  { title: "Point of sale", text: "Retail and restaurant sales, with offline mode.", href: "/features/pos" },
  { title: "Industry packs", text: "Restaurants, hotels, real estate, construction, trading and more.", href: "/industries" },
];

const faqs = [
  {
    q: "Does Vrodux file my VAT return with the FTA?",
    a: "No. Vrodux prepares and checks the return and creates the files. You file it on EmaraTax and record the reference in Vrodux.",
  },
  {
    q: "Can I export a WPS salary file?",
    a: "Yes, from an approved payroll run, after checking each employee's IBAN, labour card number and bank routing code. Confirm the format with your bank before your first live submission.",
  },
  {
    q: "Is Vrodux an accredited e-invoicing provider?",
    a: "No. E-invoices must be sent through an accredited provider. Vrodux prepares your documents and queue, and the connection to a provider is not live yet.",
  },
  {
    q: "What do I need to start?",
    a: "Your TRN, your trade licence details, and your customers' TRNs and addresses. The readiness check shows what is missing.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends only on the number of users, and every module is included on every plan. See the pricing page. Start with a free 14-day trial with unlimited users.",
  },
  {
    q: "Can I correct an invoice I already sent?",
    a: "Yes, with a credit note that refers to the original invoice. Issued invoices are not edited.",
  },
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
          <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500 flex-shrink-0" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function UaeComplianceLandingPage() {
  // A real screenshot from the docs library: a payroll run awaiting Finance approval.
  const hrShots = await getDocsShots("/docs/hr/employees-attendance-leave-payroll");
  const payrollShot = hrShots.get(3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE}#webpage`,
        url: PAGE,
        name: "UAE VAT, WPS Payroll & E-Invoicing Software | Vrodux ERP",
        description: metadata.description as string,
        isPartOf: { "@type": "WebSite", name: "Vrodux ERP", url: SITE },
        breadcrumb: { "@id": `${PAGE}#breadcrumb` },
        mainEntity: { "@id": `${PAGE}#faq` },
      },
      {
        ...breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "UAE VAT, WPS and e-invoicing", path: PATH },
        ]),
        "@id": `${PAGE}#breadcrumb`,
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        badge="UAE VAT, WPS and e-invoicing"
        title="UAE VAT, payroll and e-invoicing "
        highlightedWord="preparation in one ERP"
        description="Vrodux prepares your VAT 201 return from your ledger, exports your WPS salary file, and gets your invoices and credit notes ready for your accredited e-invoicing provider. You stay in control of what is filed."
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <TrialCta location="hero" />
          <Button asChild variant="outline" size="lg">
            <Link href="/demos#finance">Watch the Finance demo</Link>
          </Button>
        </div>
      </PageHero>

      {/* 1. VAT */}
      <section className="py-14" aria-labelledby="vat-h">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="vat-h" className="text-2xl md:text-3xl font-semibold mb-2">UAE VAT return (VAT 201)</h2>
          <p className="text-muted-foreground mb-6">UAE VAT software that prepares the return from your books and lets you check it before you file.</p>
          <Checklist items={vatPoints} />
          <p className="mt-5 text-sm text-muted-foreground">
            More detail: <Link href="/docs/finance/prepare-a-uae-vat-return" className="text-brand-600 underline underline-offset-4 dark:text-brand-300">how to prepare a UAE VAT 201 return</Link>.
          </p>
        </div>
      </section>

      {/* 2. Payroll */}
      <section className="py-14 bg-muted/20" aria-labelledby="wps-h">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="wps-h" className="text-2xl md:text-3xl font-semibold mb-2">Payroll and WPS</h2>
          <p className="text-muted-foreground mb-6">WPS payroll software for the UAE, with a salary file you can check before it leaves your hands.</p>
          <Checklist items={payrollPoints} />
          {payrollShot && (
            <figure className="mt-8 overflow-hidden rounded-2xl border bg-card">
              <Image
                src={payrollShot.src}
                width={payrollShot.width}
                height={payrollShot.height}
                alt="A payroll run awaiting Finance approval in Vrodux ERP"
                sizes="(min-width: 768px) 768px, 100vw"
                loading="lazy"
                className="h-auto w-full"
              />
            </figure>
          )}
          <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span>Banks use their own SIF templates. Check the first file with your bank before the first live submission.</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            More detail: <Link href="/docs/hr/generate-the-wps-salary-file" className="text-brand-600 underline underline-offset-4 dark:text-brand-300">how to generate the UAE WPS salary file</Link>.
          </p>
        </div>
      </section>

      {/* 3. E-invoicing */}
      <section className="py-14" aria-labelledby="einv-h">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="einv-h" className="text-2xl md:text-3xl font-semibold mb-2">E-invoicing preparation</h2>
          <p className="text-muted-foreground mb-6">
            The UAE is moving to structured e-invoices exchanged through accredited providers. Vrodux prepares your data for that.
          </p>
          <Checklist items={einvoicePoints} />
          <div className="mt-6 rounded-xl border bg-muted/30 p-4 text-sm leading-relaxed">
            <p className="font-medium">Sending to an accredited provider is not live yet.</p>
            <p className="mt-1 text-muted-foreground">
              Vrodux prepares and checks the documents now, so you are ready when it is.
            </p>
          </div>
          {/* TODO(owner): verify this wording and link before running ads. No deadline is stated as fact. */}
          <p className="mt-5 text-sm text-muted-foreground">
            The UAE has announced phased e-invoicing deadlines. Check the{" "}
            <a
              href="https://mof.gov.ae/en/about-us/initiatives/einvoicing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline underline-offset-4 dark:text-brand-300"
            >
              Ministry of Finance
            </a>{" "}
            for the date that applies to your business. See also our overview of{" "}
            <Link href="/e-invoicing" className="text-brand-600 underline underline-offset-4 dark:text-brand-300">UAE e-invoicing and PINT AE</Link>.
          </p>
        </div>
      </section>

      {/* 4. Rest of the ERP */}
      <section className="py-14 bg-muted/20" aria-labelledby="erp-h">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 id="erp-h" className="text-2xl md:text-3xl font-semibold mb-2 text-center">Built into the rest of the ERP</h2>
          <p className="text-muted-foreground text-center mb-8">UAE ERP software where invoices, payroll and stock share one set of records.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m) => (
              <Link key={m.title} href={m.href} className="group rounded-2xl border bg-card p-5 transition-shadow hover:shadow-md">
                <h3 className="font-semibold flex items-center justify-between gap-2">
                  {m.title}
                  <ArrowRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing strip (figures come from the pricing page's own data) */}
      <section className="py-14" aria-labelledby="price-h">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 id="price-h" className="text-2xl md:text-3xl font-semibold mb-2">Every module on every plan. Pay only for users.</h2>
          <p className="text-muted-foreground mb-8">Start with a free 14-day trial with unlimited users.</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {pricingTiers.map((t) => (
              <li key={t.id} className="rounded-2xl border bg-card p-5">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.users}</p>
                <p className="mt-3 text-sm">
                  {t.annual ? (
                    <>
                      <span className="text-2xl font-semibold">${t.annual}</span>
                      <span className="text-muted-foreground"> per month, billed annually</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground">Through sales</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. FAQ (visible text; the same questions are in the FAQPage structured data) */}
      <section className="py-14 bg-muted/20" aria-labelledby="faq-h">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="faq-h" className="text-2xl md:text-3xl font-semibold mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold mb-1.5">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="py-16" aria-labelledby="cta-h">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 id="cta-h" className="text-2xl md:text-3xl font-semibold mb-6">Start preparing your VAT, payroll and e-invoices in one place</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <TrialCta location="footer-cta" />
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
