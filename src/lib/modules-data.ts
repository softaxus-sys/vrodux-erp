import {
  DollarSign,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  CreditCard,
  UtensilsCrossed,
  Hotel,
  Home,
  HardHat,
  Zap,
  Truck,
  ListChecks,
  Stethoscope,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  Stamp,
  type LucideIcon,
} from "lucide-react";

export interface ModuleCapability {
  title: string;
  description?: string;
}

export interface ModuleTile {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  features: string[];
  href: string;
  related: string[];
  /** Richer capability list for the module's dedicated /features/[slug] page.
   * Falls back to `features` (as plain bullets) until a module is filled in. */
  capabilities?: ModuleCapability[];
  /** Maturity framing for the dedicated page's badge. Omit for a fully live module. */
  status?: "beta" | "early-access";
  /** "Coming Next" items shown under capabilities when status is "early-access". */
  roadmap?: string[];
}

export const coreModules: ModuleTile[] = [
  {
    id: "finance",
    name: "Finance & Accounting",
    description: "Complete financial management with GL, AP/AR, bank reconciliation, multi-currency, and advanced financial reporting.",
    icon: DollarSign,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    features: ["General Ledger", "Accounts Payable/Receivable", "Bank Reconciliation", "Financial Reporting"],
    href: "/features/finance",
    related: ["hr", "sales", "reports"],
    capabilities: [
      { title: "General Ledger" },
      { title: "Accounts Payable / Accounts Receivable" },
      { title: "Bank Reconciliation" },
      {
        title: "Multi-Currency Accounting",
        description: "One base currency per tenant, with live daily exchange rate refresh — every record's currency default follows the tenant's own operating currency.",
      },
      {
        title: "Financial Reporting",
        description: "Trial balance, profit & loss, balance sheet, cash flow, and GL summary reports.",
      },
      {
        title: "Fiscal Period Management",
        description: "Close and reopen accounting periods with full control.",
      },
      {
        title: "Journal Entries",
        description: "Post and void controls built in.",
      },
      {
        title: "Recurring Invoices",
        description: "Auto-generated on schedule and auto-emailed to the customer with a CC option — fully editable before they go live.",
      },
      {
        title: "Sales Quotations with Shareable Links",
        description: "Customers can view, accept, or decline a quotation online without logging in. An accepted quotation converts straight to an invoice or sales order.",
      },
      { title: "Expense Management & Budgeting" },
      {
        title: "VAT / Tax Compliance",
        description: "Built-in compliance for UAE, Saudi Arabia, and other GCC tax frameworks.",
      },
      {
        title: "Purchase Invoices (AP Bills)",
        description: "Supports tax, non-tax, and import (foreign currency) invoice types, with a built-in approval workflow.",
      },
    ],
  },
  {
    id: "hr",
    name: "HR & Payroll",
    description: "End-to-end human resource management including payroll, leave, attendance, and performance management.",
    icon: Users,
    color: "from-purple-500 to-pink-600",
    bg: "bg-purple-500/10",
    features: ["Employee Management", "Payroll Processing", "Leave & Attendance", "Performance Reviews"],
    href: "/features/hr",
    related: ["finance", "project-management", "reports"],
    capabilities: [
      {
        title: "Employee Records",
        description: "Personal details, bank details, and compliance documents — Emirates ID, passport, visa expiry.",
      },
      {
        title: "Attendance Tracking",
        description: "Check-in/check-out against configurable office hours, with automatic on-time/late tracking.",
      },
      {
        title: "Leave Management",
        description: "Configurable leave policies and entitlements per leave type, with balances calculated live — entitlement minus approved minus pending, not a static stored number.",
      },
      {
        title: "Payroll Runs with a Finance Approval Gate",
        description: "HR processes payroll, but a run can't be paid out until Finance reviews and approves it — approval posts the accrual directly to the General Ledger.",
      },
      {
        title: "UAE WPS-Compliant Salary Export",
        description: "Wages Protection System salary file export, ready for direct bank submission.",
      },
      {
        title: "Employee Self-Service",
        description: "Available on both web and the mobile app: view and download payslips, request and track leave, view attendance history.",
      },
    ],
  },
  {
    id: "inventory",
    name: "Inventory & Procurement",
    description: "Full inventory control with warehouse management, stock tracking, procurement workflows, and vendor management.",
    icon: Package,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    features: ["Stock Management", "Warehouse Control", "Procurement Workflow", "Vendor Management"],
    href: "/features/inventory",
    related: ["pos", "purchase", "sales"],
    capabilities: [
      {
        title: "Multi-Warehouse Stock Management",
        description: "Real-time stock levels per location.",
      },
      {
        title: "Stock Movements",
        description: "Receipts, adjustments, and write-offs, all logged.",
      },
      { title: "Low-Stock & Reorder-Point Alerts" },
      {
        title: "Product Organization",
        description: "Categories, brands, and units of measure.",
      },
      {
        title: "Barcode Support",
        description: "For lookup and scanning.",
      },
      {
        title: "Stock Transfers",
        description: "Between warehouses, with an approval workflow before goods move.",
      },
      { title: "Batch / Lot Tracking" },
    ],
  },
  {
    id: "sales",
    name: "Sales Management",
    description: "From quotation to invoice, manage the entire sales cycle with customer management and sales analytics.",
    icon: ShoppingCart,
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-500/10",
    features: ["Quotations & Orders", "Invoicing", "Customer Management", "Sales Analytics"],
    href: "/features/sales",
    related: ["crm", "finance", "purchase"],
    capabilities: [
      {
        title: "Sales Quotations",
        description: "Including a public, shareable link the customer can open without logging in to view, accept, or decline the quote online. Templates for repeat quoting, plus PDF export.",
      },
      {
        title: "Sales Orders",
        description: "Converted directly from an accepted quotation, or created manually.",
      },
      {
        title: "Delivery Challans",
        description: "Record partial or full delivery against an order, automatically updating its status: confirmed → shipped → delivered.",
      },
      { title: "Sales Returns" },
      { title: "Customer Management" },
      { title: "Sales Analytics" },
    ],
  },
  {
    id: "crm",
    name: "CRM",
    description: "Manage leads, opportunities, and pipeline with customer communication and activity tracking.",
    icon: Zap,
    color: "from-lime-500 to-green-600",
    bg: "bg-lime-500/10",
    features: ["Lead Management", "Pipeline View", "Opportunity Tracking", "Customer Comms"],
    href: "/features/crm",
    related: ["sales", "reports", "visa-services"],
    capabilities: [
      {
        title: "Automatic Lead Scoring",
        description: "Leads are scored and prioritized based on intent signals — contact completeness, stated budget, purchase timeframe/urgency, and source quality — not manually assigned.",
      },
      {
        title: "Pipeline & Opportunity Management",
        description: "Forecast categories — Pipeline, Best Case, Commit, Closed — so you always know what's actually going to land.",
      },
      {
        title: "Team-Tiered Access Control",
        description: "A sales rep sees only their own assigned leads and their team's pipeline. A team lead sees their whole team's. Full-access roles see everything.",
      },
      {
        title: "8-Report Analytics Suite",
        description: "Sales Pipeline, Win/Loss Trends, Lead Source ROI, Lead-to-Customer Conversion Funnel, Sales Velocity, Team Performance, Account Revenue, and Activity Report.",
      },
      {
        title: "Multi-Channel Lead Capture",
        description: "Leads flow in automatically from Property Finder, Bayut, Calendly, Meta (Facebook/Instagram) lead ads, Google Sheets/Forms, and bulk CSV/Excel import — all deduplicated and routed automatically.",
      },
      {
        title: "Account / Contact / Opportunity Model",
        description: "A relational structure with named contact roles per deal, like decision maker or champion.",
      },
    ],
  },
  {
    id: "purchase",
    name: "Purchase Management",
    description: "Manage vendors, purchase orders, goods receipt, and purchase invoices — with approval workflows for requisitions and orders.",
    icon: Truck,
    color: "from-slate-500 to-gray-600",
    bg: "bg-slate-500/10",
    features: ["Vendor Management", "Purchase Orders", "Goods Receipt Notes", "Purchase Invoices"],
    href: "/features/purchase",
    related: ["inventory", "finance", "sales"],
    capabilities: [
      { title: "Vendor Management" },
      { title: "Purchase Orders" },
      {
        title: "Goods Receipt Notes",
        description: "Records partial or full delivery against a PO and automatically updates the PO's status — partial vs. fully received.",
      },
      { title: "Purchase Returns" },
      {
        title: "Purchase Invoices (AP Bills)",
        description: "Tax, non-tax, and import (foreign currency) invoice types.",
      },
      {
        title: "Approval Workflow",
        description: "For purchase requisitions and orders.",
      },
    ],
  },
  {
    id: "project-management",
    name: "Project Management",
    description: "Kanban boards, sprints, and issue tracking — with visibility scoped to each project's actual team members.",
    icon: ListChecks,
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-500/10",
    features: ["Kanban Boards", "Sprints", "Issues & Backlog", "Team Membership Scoping"],
    href: "/features/project-management",
    related: ["hr", "reports", "crm"],
    capabilities: [
      {
        title: "Kanban Boards",
        description: "Configurable columns.",
      },
      { title: "Sprints" },
      {
        title: "Issues",
        description: "Create, assign, track status, and move between board columns.",
      },
      {
        title: "Comments & Labels",
        description: "On issues.",
      },
      {
        title: "Backlog View",
        description: "Separate from the active board.",
      },
      {
        title: "Project-Team Membership",
        description: "Visibility into a project is scoped to who's actually a member of it, not open to everyone in the company.",
      },
    ],
  },
  {
    id: "reports",
    name: "Reports",
    description: "Executive dashboards, business intelligence reports, and real-time KPI monitoring across all modules.",
    icon: BarChart3,
    color: "from-brand-500 to-indigo-600",
    bg: "bg-brand-500/10",
    features: ["Executive Dashboards", "BI Reports", "KPI Monitoring", "Custom Reports"],
    href: "/features/reports",
    related: ["crm", "finance", "inventory"],
    capabilities: [
      {
        title: "A Central Reporting Hub",
        description: "Gathers every report a user is allowed to see, organized by module — instead of hunting through each module separately.",
      },
      {
        title: "Plan- & Role-Scoped Visibility",
        description: "What appears depends on the tenant's plan (a report only shows if that module is included) and the user's own role/team permissions — e.g. a team lead sees their team's figures, not the whole company's.",
      },
      {
        title: "CRM's 8-Report Suite",
        description: "Sales Pipeline, Win/Loss, Lead Source ROI, Lead Conversion Funnel, Sales Velocity, Team Performance, Account Revenue, and Activity Report.",
      },
      {
        title: "Operational Reports from Every Module",
        description: "Point of Sale, Inventory, and most other enabled modules contribute their own day-to-day reports into the same hub.",
      },
      {
        title: "CSV & PDF Export",
        description: "Every report can be exported.",
      },
    ],
  },
];

export const industryModules: ModuleTile[] = [
  {
    id: "pos",
    name: "Point of Sale",
    description: "Modern retail POS with barcode support, multi-store operations, and real-time inventory sync.",
    icon: CreditCard,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    features: ["Retail POS", "Barcode Support", "Multi-store", "Real-time Sync"],
    href: "/features/pos",
    related: ["restaurant", "inventory", "reports"],
    capabilities: [
      { title: "Barcode Scanning" },
      {
        title: "Multi-Store / Multi-Register Operations",
        description: "Real-time inventory sync across every register and location.",
      },
      {
        title: "Offline-Capable Mode",
        description: "A till keeps selling with no internet connection and automatically syncs everything — sales, refunds, voids, cash movements — once reconnected, at day's end or whenever the connection returns.",
      },
      {
        title: "Shift / Session Management",
        description: "Open and close a till with cash counted and reconciled, cash-in/cash-out tracking, and an end-of-shift Z-report.",
      },
      { title: "Customer Wallets & House Accounts" },
      { title: "Vouchers & Loyalty" },
      { title: "Hold & Recall Sales" },
      {
        title: "Refunds & Voids",
        description: "Gated by permission tier, so a cashier can't refund without supervisor-level access.",
      },
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant POS & KDS",
    description: "Complete restaurant management with table ordering, KDS integration, recipe management, and billing.",
    icon: UtensilsCrossed,
    color: "from-red-500 to-orange-600",
    bg: "bg-red-500/10",
    features: ["Table Management", "KDS Integration", "Recipe & Food Cost", "Waiter Ordering"],
    href: "/features/restaurant",
    related: ["pos", "hospitality", "reports"],
    capabilities: [
      { title: "Table Management" },
      { title: "Live Kitchen Display System (KDS)" },
      { title: "Waiter Ordering" },
      {
        title: "Structured, Priced Modifiers",
        description: "e.g. \"Size: Large +$2\" — not just free-text notes, so modifier choices actually affect the bill.",
      },
      {
        title: "Split Bills",
        description: "Split by item, so each guest can get and pay their own portion, not just an even split of the total.",
      },
      { title: "Tips" },
      { title: "Hold & Recall Orders" },
      {
        title: "Discounts, Voids & Refunds",
        description: "All recorded with a full audit trail — who did it, when, and why.",
      },
      { title: "Recipe & Ingredient Costing" },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality Management",
    description: "Hotel management system with reservations, room management, guest services, and integrated billing.",
    icon: Hotel,
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10",
    features: ["Reservations", "Room Management", "Guest Services", "Integrated Billing"],
    href: "/features/hospitality",
    related: ["restaurant", "finance", "pos"],
    status: "beta",
    capabilities: [
      { title: "Bookings & Reservations" },
      { title: "Room Management" },
      { title: "Housekeeping" },
      {
        title: "F&B Service",
        description: "Powered directly by the Restaurant POS module — not a separate system.",
      },
      {
        title: "Guest Billing",
        description: "Tied directly into Finance.",
      },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate Management",
    description: "Manage properties, leasing, contracts, maintenance, and financial reporting for real estate portfolios.",
    icon: Home,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    features: ["Property Management", "Leasing & Contracts", "Maintenance", "Financial Reports"],
    href: "/features/real-estate",
    related: ["finance", "crm", "reports"],
    capabilities: [
      { title: "Properties, Units & Listings" },
      { title: "Tenants, Leases & Contracts" },
      {
        title: "Automatic Rent Payment Scheduling",
        description: "A lease generates its own installment schedule based on payment frequency.",
      },
      {
        title: "Rent-Reminder System",
        description: "Emails tenants before and after a payment is due, with an escalating reminder ladder, plus lease-expiry reminders.",
      },
      {
        title: "Brokers & Sales Pipeline",
        description: "A dedicated pipeline for agents.",
      },
      {
        title: "Advance-Rent Handling",
        description: "Applies a lump-sum payment at lease signing across the correct number of installments automatically.",
      },
      {
        title: "Portfolio Financial Reporting",
        description: "Tied to Finance.",
      },
    ],
  },
  {
    id: "construction",
    name: "Construction Management",
    description: "Project planning, resource allocation, cost tracking, and BOQ management for construction companies.",
    icon: HardHat,
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
    features: ["Project Planning", "Resource Allocation", "Cost Tracking", "BOQ Management"],
    href: "/features/construction",
    related: ["purchase", "finance", "hr"],
    capabilities: [
      { title: "Bidding & Contracts" },
      { title: "BOQ (Bill of Quantities) Management" },
      { title: "Contractor Management" },
      { title: "Site / Project Progress Tracking" },
      {
        title: "Connected to Purchase, HR & Finance",
        description: "Project costs and contractor payments flow through those modules rather than being tracked separately.",
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Patient records, appointment scheduling, and integrated billing built for clinics and healthcare providers.",
    icon: Stethoscope,
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-500/10",
    features: ["Patient Records", "Appointment Scheduling", "Clinical Billing", "Compliance"],
    href: "/features/healthcare",
    related: ["hr", "finance", "insurance"],
    status: "early-access",
    capabilities: [
      { title: "Patient Records" },
      { title: "Appointment Scheduling" },
      { title: "Patient Billing" },
      {
        title: "Backed by HR & Payroll and Finance & Accounting",
        description: "The same modules that run the rest of the business.",
      },
    ],
    roadmap: ["Insurance claims integration", "Pharmacy and inventory linkage", "Advanced compliance reporting"],
  },
  {
    id: "education",
    name: "Education",
    description: "Student records, admissions, and fee management for schools, colleges, and training institutes.",
    icon: GraduationCap,
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-500/10",
    features: ["Student Records", "Admissions", "Fee Management", "Academic Reporting"],
    href: "/features/education",
    related: ["hr", "finance", "reports"],
    status: "early-access",
    capabilities: [
      { title: "Student Records & Admissions" },
      { title: "Course Management" },
      { title: "Fee Management" },
      { title: "Backed by HR & Payroll and Finance & Accounting" },
    ],
    roadmap: ["Online fee payment portal", "Parent/guardian portal", "Attendance and gradebook"],
  },
  {
    id: "insurance",
    name: "Insurance",
    description: "Policy administration and claims tracking built for insurance providers and brokers.",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-500/10",
    features: ["Policy Administration", "Claims Tracking", "Renewals", "Compliance Reporting"],
    href: "/features/insurance",
    related: ["crm", "finance", "healthcare"],
    status: "early-access",
    capabilities: [
      { title: "Policy Administration" },
      { title: "Claims Tracking" },
      {
        title: "CRM & Customer Records",
        description: "Built on the same CRM module as the rest of the platform, not a separate system.",
      },
      { title: "Finance & Accounting" },
    ],
    roadmap: ["Automated renewal reminders", "Commission tracking", "Carrier integrations"],
  },
  {
    id: "b2b-services",
    name: "B2B & Professional Services",
    description: "Proposals, project-based billing, and service CRM for B2B and professional services firms.",
    icon: Briefcase,
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10",
    features: ["Proposals & Quotes", "Project Billing", "Service CRM", "Time & Expense"],
    href: "/features/b2b-services",
    related: ["crm", "project-management", "finance"],
    capabilities: [
      { title: "Proposals & Contracts" },
      { title: "Project-Based & Service Billing" },
      {
        title: "CRM & Sales Pipeline",
        description: "The same CRM module used across the platform.",
      },
      { title: "HR & Payroll" },
      { title: "Finance & Accounting" },
    ],
  },
  {
    id: "visa-services",
    name: "Visa Services",
    description: "Case management, document checklists, government submission tracking, and renewals for visa and immigration services.",
    icon: Stamp,
    color: "from-fuchsia-500 to-purple-600",
    bg: "bg-fuchsia-500/10",
    features: ["Case Management", "Document Checklists", "Submission Tracking", "Renewals"],
    href: "/features/visa-services",
    related: ["crm", "finance", "real-estate"],
    capabilities: [
      {
        title: "Full Case Management",
        description: "Intake, document checklist, government submission, tracking, and outcome — with a defined status workflow: draft → documents pending → documents complete → submitted → in review → approved/rejected → issued → closed.",
      },
      {
        title: "Applicant Records",
        description: "Including passport and document expiry tracking.",
      },
      {
        title: "Proactive Renewals",
        description: "Surfaces passports and documents nearing expiry before they become a problem.",
      },
      {
        title: "A Dedicated Dashboard",
        description: "SLA and overdue-case tracking, workload by staff member.",
      },
      {
        title: "Government Channel Integrations",
        description: "A manual workflow today, with groundwork in place for direct government-channel submission — e.g. UAE PASS — as those integrations come online.",
      },
      {
        title: "Connected to Finance",
        description: "A case can generate an invoice directly.",
      },
      {
        title: "Connected to CRM",
        description: "A lead can convert straight into a visa case.",
      },
    ],
  },
];

export const allModules: ModuleTile[] = [...coreModules, ...industryModules];

export function getModuleBySlug(slug: string): ModuleTile | undefined {
  return allModules.find((m) => m.id === slug);
}

export const totalModuleCount = coreModules.length + industryModules.length;
