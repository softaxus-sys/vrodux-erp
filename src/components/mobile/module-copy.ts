/**
 * Words for the /mobile scroll widgets, keyed by screenshot slug (see phone/manifest.json on Contabo).
 * Every line describes something visible on that screen or listed for the app. Add a slug here to add a step.
 */

export interface CoreStep {
  slug: string;
  tag: string;
  title: string;
  body: string;
}

/** First widget: the everyday screens, one step each. */
export const CORE_STEPS: CoreStep[] = [
  { slug: "dashboard", tag: "Check", title: "See your business at a glance.", body: "CRM leads, open deals, pipeline value and win rate, plus employees, performance reviews, recruitment and finance, all on one dashboard." },
  { slug: "leads", tag: "Leads", title: "Start with the hottest leads.", body: "Search your leads, filter by status, and see each lead's budget and timeline, so you know who to call first." },
  { slug: "pipeline", tag: "Pipeline", title: "Every deal, by stage.", body: "See deals from Qualified through Proposal and Negotiation to Won or Lost, with the weighted value of each. Update leads and deals from your phone." },
  { slug: "approvals", tag: "Approve", title: "Act on it before you are back at a desk.", body: "Leave, purchase requests and payroll sit in one inbox, and push notifications tell you when something needs you." },
  { slug: "hr", tag: "People", title: "Your team, in your pocket.", body: "Browse the employee directory and departments, and open recruitment and performance. Mark your own attendance and apply for leave." },
  { slug: "projects", tag: "Projects", title: "Know where every project stands.", body: "Each project shows its lead and how many issues are to do, in progress and done." },
  { slug: "sales-orders", tag: "Sales", title: "Track orders by status.", body: "Search sales orders and filter by Pending, Confirmed, Shipped, Delivered or Cancelled." },
  { slug: "inventory", tag: "Scan", title: "Look up and add stock with the camera.", body: "Search products by name, SKU or barcode and see stock levels. Scan barcodes and QR codes to look up stock or add it." },
];

/** Second widget: the remaining screens, in this order. */
export const MORE_ORDER = [
  "finance", "chart-of-accounts", "purchase-orders", "vendors", "master-data", "reports",
  "pos", "pos-shift", "restaurant",
  "visa-services", "real-estate", "b2b-services", "insurance", "construction", "library", "lead-generation",
  "dashboard-modules", "dashboard-industries", "help-support",
];

/** Short labels beside the phone in the second widget. */
export const TAGS: Record<string, string[]> = {
  finance: ["Invoices", "Expenses", "Chart of accounts", "Bank accounts", "Budgets", "Journals", "VAT / Tax", "Recurring invoices"],
  "chart-of-accounts": ["Assets", "Liabilities", "Equity", "Net profit", "Search accounts"],
  "purchase-orders": ["Search by order or vendor", "Draft", "Sent", "Partial", "Received", "New order"],
  vendors: ["Search vendors", "Contact names", "Order counts", "New vendor"],
  "master-data": ["Product categories", "Brands", "Units of measure", "Warehouses", "Currencies", "Tax rates", "Payment terms"],
  reports: ["Search reports", "Shift summary", "Daily sales summary", "Product sales performance", "Payment method analysis"],
  pos: ["Open shift", "All transactions", "Stock by branch", "Today's sales"],
  "pos-shift": ["Cash", "Shift details", "New sale", "Close shift", "Refunds"],
  restaurant: ["New order", "Tables", "Live orders", "Kitchen", "Reservations", "Waitlist"],
  "visa-services": ["Open cases", "Overdue", "Due this week", "Renewals"],
  "real-estate": ["Properties", "Units", "Tenants", "Contracts", "Rent due", "Brokers"],
  "b2b-services": ["Proposals", "Service contracts", "Support tickets"],
  insurance: ["Policies", "Renewals", "Claims"],
  construction: ["Projects", "Sites", "Contractors", "BOQs"],
  library: ["Issue / return desk", "Loans", "Reservations", "Catalogue", "Members", "Fines"],
  "lead-generation": ["Prospects", "Find businesses", "Campaigns", "Inbox", "Credits"],
  "dashboard-modules": ["Finance", "Point of sale", "Restaurant", "Visa services", "Real estate", "B2B services"],
  "dashboard-industries": ["Healthcare", "Insurance", "Construction", "Hospitality", "Workspace plan"],
  "help-support": ["My requests", "Tickets you have sent to support"],
};
