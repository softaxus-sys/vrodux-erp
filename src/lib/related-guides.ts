/**
 * Guides and articles shown in the "Related guides" block on feature and industry pages.
 * Keyed by page path. Keeps blog posts and docs articles linked from the product pages
 * they belong to, so they are not orphaned.
 */
export type Guide = { href: string; title: string; desc: string };

const G = {
  multiCurrency: {
    href: "/blog/multi-currency-erp-guide",
    title: "Multi-currency ERP: how it works and what to get right",
    desc: "Record each transaction in its real currency, convert at the rate of the day and report in one currency.",
  },
  vat: {
    href: "/blog/vat-compliance-uae-erp",
    title: "UAE VAT compliance in an ERP",
    desc: "What your ERP should handle on every transaction so VAT figures come straight from your records.",
  },
  invoices: {
    href: "/docs/finance/tax-invoices-and-recurring-invoices",
    title: "How to issue tax invoices and recurring invoices",
    desc: "Issue an invoice, set up recurring invoices that email themselves and record payments.",
  },
  ledger: {
    href: "/docs/finance/integration-center-and-finance-posting",
    title: "How other modules post to the ledger",
    desc: "See how sales, POS, payroll and other sources reach the general ledger, and choose off, review or auto.",
  },
  kds: {
    href: "/blog/restaurant-pos-kds-integration",
    title: "Restaurant POS and kitchen display (KDS) integration",
    desc: "How connecting your POS to a kitchen display changes ordering and kitchen workflow in a restaurant.",
  },
  construction: {
    href: "/blog/construction-erp-cost-tracking",
    title: "Construction ERP and project cost tracking",
    desc: "Why construction companies lose margin without cost tracking, and what to check in an ERP.",
  },
  wps: {
    href: "/docs/hr/generate-the-wps-salary-file",
    title: "Generate the UAE WPS salary information file (SIF)",
    desc: "Prepare the salary information file from an approved payroll run, with validated IBANs and a list of exclusions.",
  },
  uaeCompliance: {
    href: "/uae-vat-payroll-e-invoicing",
    title: "UAE VAT, WPS payroll and e-invoicing preparation",
    desc: "Prepare your VAT 201 return, WPS salary file and e-invoice data in one ERP. You submit them yourself.",
  },
  leadImport: {
    href: "/docs/crm/capture-and-import-leads",
    title: "How to capture and import leads automatically",
    desc: "Bring leads into CRM from ads, forms, portals or a spreadsheet without creating duplicates.",
  },
  nextGen: {
    href: "/blog/next-gen-erp-guide",
    title: "Next-gen ERP: what it means for modern businesses",
    desc: "What second-generation, next-generation ERP is, and how it differs from traditional ERP.",
  },
} satisfies Record<string, Guide>;

export const RELATED_GUIDES: Record<string, Guide[]> = {
  "/features/finance": [G.multiCurrency, G.invoices, G.ledger, G.vat],
  "/features/import-export": [G.multiCurrency],
  "/features/sales": [G.invoices],
  "/features/restaurant": [G.kds],
  "/features/pos": [G.kds],
  "/industries/restaurants": [G.kds],
  "/features/construction": [G.construction],
  "/industries/construction": [G.construction],
  "/features/hr": [G.wps, G.uaeCompliance],
  "/features/lead-generation": [G.leadImport],
  "/features/crm": [G.leadImport],
  "/industries/import-export": [G.multiCurrency],
};
