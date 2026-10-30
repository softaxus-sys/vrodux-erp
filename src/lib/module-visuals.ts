import type { IconName } from "@/components/modules/icons";
import type { HomeSlot } from "@/lib/home-shots";

/**
 * Visual and SEO metadata for each module page: the animated "how it flows" steps, the
 * screenshots to show, and the search-friendly title/description. The *claims* about what a
 * module does come from content/modules/*.md (see module-content.generated.ts); the flow steps
 * below only restate things those files list under Features.
 */

export interface FlowStep {
  icon: IconName;
  title: string;
  text: string;
}

export interface ModuleShot {
  /** A themed home-page screenshot slot (light + dark). */
  slot?: HomeSlot;
  /** Or a docs screenshot: article path + 1-based index (omit index to take all of them). */
  doc?: string;
  index?: number;
  caption?: string;
}

export interface ModuleVisual {
  /** Index into TONES for the accent colour. */
  tone: number;
  /** Docs category that holds this module's guides. */
  docsCategory?: string;
  seoTitle: string;
  seoDescription: string;
  flowTitle?: string;
  flow?: FlowStep[];
  shots?: ModuleShot[];
  /** Photo to use when there are no screenshots. */
  photo?: { src: string; alt: string };
  faqs?: { q: string; a: string }[];
}

const D = (article: string, index?: number, caption?: string): ModuleShot => ({ doc: article, index, caption });
const S = (slot: HomeSlot, caption: string): ModuleShot => ({ slot, caption });

export const moduleVisuals: Record<string, ModuleVisual> = {
  crm: {
    tone: 0,
    docsCategory: "crm",
    seoTitle: "CRM Software — Leads, Pipeline & Sales Teams",
    seoDescription:
      "Vrodux CRM captures leads from ads, forms and portals, scores them automatically, and moves deals through a visual pipeline with team-based visibility and eight built-in reports.",
    flowTitle: "From first enquiry to closed deal",
    flow: [
      { icon: "Inbox", title: "Capture", text: "Leads arrive from Meta lead ads, website forms, portals, Zapier, Calendly or a spreadsheet import." },
      { icon: "Flame", title: "Score", text: "Every lead gets an automatic 0–100 score and a Hot, Warm or Cold band, hottest first." },
      { icon: "PhoneCall", title: "Work it", text: "Log calls, meetings, emails, notes and tasks on a single timeline your team can see." },
      { icon: "GitMerge", title: "Convert", text: "Turn a lead into an account, a contact and an opportunity in one step." },
      { icon: "Trophy", title: "Close", text: "Drag the deal through the pipeline, send a quotation, and track wins, losses and reasons." },
    ],
    shots: [
      D("/docs/crm/leads-pipeline-customers"),
      S("integrations", "Connectable lead sources and integrations"),
    ],
    faqs: [
      { q: "Where do CRM leads come from?", a: "From Meta (Facebook and Instagram) lead ads, an embeddable website form, custom API and webhooks, Zapier or Make, Google Forms and Sheets, Calendly, Property Finder, Bayut and Dubizzle, and CSV or Excel import. Duplicate rules apply to every source." },
      { q: "Can each salesperson only see their own leads?", a: "Yes. Access has three tiers per area: everyone, team (a team lead sees their team) and assigned-only (a rep sees only their own records)." },
    ],
  },
  sales: {
    tone: 1,
    docsCategory: "sales",
    seoTitle: "Sales Management — Quotations, Orders & Delivery",
    seoDescription:
      "Create branded quotations the customer can accept online, convert them to sales orders, record delivery challans and handle returns with Vrodux Sales.",
    flowTitle: "From quotation to delivery",
    flow: [
      { icon: "FileText", title: "Quote", text: "Build a branded quotation from a template, with sections, optional extras, tax and terms." },
      { icon: "Send", title: "Send", text: "Email it or share a link. The customer can accept or decline online and you see sent, opened and answered." },
      { icon: "ClipboardCheck", title: "Order", text: "Convert the accepted quotation into a sales order and confirm it." },
      { icon: "Truck", title: "Deliver", text: "Record delivery challans against the order. It moves to shipped and then delivered as quantities go out." },
      { icon: "Receipt", title: "Invoice", text: "Create or link a Finance invoice, and handle approved sales returns." },
    ],
    shots: [D("/docs/sales/quotations-orders-delivery")],
  },
  purchase: {
    tone: 2,
    docsCategory: "purchase",
    seoTitle: "Purchase Management — Vendors, POs & Goods Receipts",
    seoDescription:
      "Control what you buy from requisition to receipt: vendors, purchase orders, approvals, goods receipt notes, purchase returns and AP bills in Vrodux Purchase.",
    flowTitle: "From request to receipt",
    flow: [
      { icon: "FilePlus", title: "Requisition", text: "Requests are raised from Manufacturing shortages or through the AI assistant." },
      { icon: "BadgeCheck", title: "Approve", text: "Approvers are alerted and can approve or reject, with a reason on rejection." },
      { icon: "ShoppingCart", title: "Purchase order", text: "Create and send the PO to a vendor, then track it as it moves to partial and received." },
      { icon: "PackageCheck", title: "Receive", text: "Receive goods against the PO. Stock is added automatically for products linked to Inventory." },
      { icon: "Receipt", title: "Bill", text: "Record Tax, Non-Tax or Import (foreign currency) bills through Finance accounts payable." },
    ],
    shots: [D("/docs/purchase/vendors-orders-receiving")],
  },
  inventory: {
    tone: 3,
    docsCategory: "inventory",
    seoTitle: "Inventory Management — Products, Warehouses & Transfers",
    seoDescription:
      "Know what you have and where it is: products with barcode lookup, multiple warehouses, stock movements, approved transfers and 17 inventory reports in Vrodux Inventory.",
    flowTitle: "How stock moves through your business",
    flow: [
      { icon: "PackageCheck", title: "Receive", text: "Goods received against purchase orders add stock automatically." },
      { icon: "Warehouse", title: "Store", text: "Hold stock across multiple warehouses and set a default one." },
      { icon: "ArrowLeftRight", title: "Transfer", text: "Create, submit, approve and receive transfers between warehouses." },
      { icon: "ClipboardList", title: "Adjust", text: "Record write-offs, adjustments and count corrections." },
      { icon: "BarChart3", title: "Report", text: "17 reports and a low-stock view show what to reorder." },
    ],
    shots: [D("/docs/inventory/products-warehouses-stock")],
  },
  finance: {
    tone: 0,
    docsCategory: "finance",
    seoTitle: "Accounting & Finance Software — Invoicing, Ledger & UAE VAT",
    seoDescription:
      "Invoicing, recurring invoices, expenses, bank reconciliation, general ledger, financial statements and UAE VAT 201 return preparation, with an Integration Center that posts every module to the ledger.",
    flowTitle: "How money flows through the books",
    flow: [
      { icon: "Receipt", title: "Invoice", text: "Tax invoices with your TRN, recurring invoices and auto-emailed PDFs." },
      { icon: "Wallet", title: "Record", text: "Expenses and purchase bills with approval, including import bills in foreign currency." },
      { icon: "Landmark", title: "Reconcile", text: "Match bank statement lines to journal lines, with one-click auto-match when unambiguous." },
      { icon: "Calculator", title: "Post", text: "Journals post to the general ledger; other modules queue documents in the Integration Center." },
      { icon: "Percent", title: "Prepare VAT", text: "Prepare the UAE VAT 201 return from your ledger, validate it and export the files." },
      { icon: "BarChart3", title: "Report", text: "Trial balance, profit and loss, balance sheet and cash flow." },
    ],
    shots: [D("/docs/finance/invoicing-expenses-ledger"), S("finance", "Financial statements: profit and loss, balance sheet and cash flow")],
    faqs: [
      { q: "Does Vrodux file VAT returns with the FTA?", a: "No. Vrodux prepares your UAE VAT 201 return from the ledger, validates it, reconciles it to the VAT control account and exports the files. You then file through the FTA portal and record your reference in Vrodux." },
    ],
  },
  hr: {
    tone: 1,
    docsCategory: "hr",
    seoTitle: "HR & Payroll Software — Attendance, Leave & UAE WPS",
    seoDescription:
      "Employee records, attendance with office hours, leave policies, payroll with a Finance approval step, UAE WPS salary files and employee self-service in Vrodux HR.",
    flowTitle: "From hiring to a bank-ready salary file",
    flow: [
      { icon: "UserPlus", title: "Employees", text: "Directory with compliance details: Emirates ID, passport, visa expiry, IBAN and labour card." },
      { icon: "Clock", title: "Attendance", text: "Check in and out against office hours, with on-time and late minutes recorded." },
      { icon: "CalendarDays", title: "Leave", text: "Policies and live balances: entitlement minus approved minus pending." },
      { icon: "Banknote", title: "Payroll run", text: "Draft, processed, Finance-approved, then paid, with allowances and deductions per employee." },
      { icon: "FileCheck", title: "WPS file", text: "Generate a WPS salary file with validated IBANs, and see who is excluded and why." },
    ],
    shots: [D("/docs/hr/employees-attendance-leave-payroll"), S("hr", "Employees directory"), S("attendance", "Attendance with on-time and late days"), S("add-employee", "Adding a new employee")],
    faqs: [
      { q: "Does Vrodux submit the WPS file to the bank?", a: "No. Vrodux generates the WPS salary file (SIF) and you submit it through your bank or exchange house. Check the file against your bank's template before the first live submission." },
    ],
  },
  pos: {
    tone: 4,
    docsCategory: "pos",
    seoTitle: "Retail POS Software — Barcode, Credit & Offline Mode",
    seoDescription:
      "A retail point of sale with barcode scanning, shifts and Z-reports, controlled refunds, customer credit accounts, a live dashboard and offline mode that syncs at day end.",
    flowTitle: "A day at the till",
    flow: [
      { icon: "KeyRound", title: "Open shift", text: "Open a shift with a cash float; cash in and out are recorded with categories." },
      { icon: "ScanBarcode", title: "Sell", text: "Scan barcodes, hold and recall sales, apply discounts, take split or credit payments." },
      { icon: "RefreshCcw", title: "Refund & void", text: "Refunds, voids and discounts each have their own permission and put stock back correctly." },
      { icon: "CreditCard", title: "Collect credit", text: "House accounts with limits, terms, ageing buckets and a statement per customer." },
      { icon: "Cloud", title: "Close & sync", text: "Count the cash, print the Z-report, and Sync to Cloud if you were offline." },
    ],
    shots: [S("retail", "Retail POS screen"), D("/docs/pos/retail-and-restaurant", 1), S("vouchers", "Vouchers and coupons"), S("payment-methods", "Payment methods")],
    photo: { src: "/images/industries/retail.jpg", alt: "Retail checkout counter running Vrodux POS with a barcode scanner" },
    faqs: [
      { q: "Does the POS work without internet?", a: "Yes, if you switch on offline mode for the workspace. Tills record shifts, sales, refunds, voids and cash movements locally and upload them with Sync to Cloud at day end. It is safe to sync twice, and offline sales are never rejected for stock; negative stock is flagged." },
    ],
  },
  restaurant: {
    tone: 3,
    docsCategory: "restaurant",
    seoTitle: "Restaurant POS & Kitchen Display Software",
    seoDescription:
      "Dine-in, takeaway and delivery with modifiers, split bills, tips, kitchen display, loyalty, rider tracking and menu import. Restaurant management in Vrodux ERP.",
    flowTitle: "From table to kitchen to payment",
    flow: [
      { icon: "UtensilsCrossed", title: "Take the order", text: "Dine-in, takeaway or delivery, with priced modifiers and special instructions." },
      { icon: "ChefHat", title: "Kitchen display", text: "Tickets appear on the kitchen screen and are marked ready and served." },
      { icon: "Truck", title: "Deliver", text: "A dispatcher board and a mobile rider screen with navigation and amount to collect." },
      { icon: "Receipt", title: "Bill", text: "Split by item, add tips, apply discounts with a reason. Every discount, void and refund is audited." },
      { icon: "Wallet", title: "Pay", text: "Split payment methods, wallet and house accounts, and loyalty points on every bill." },
    ],
    shots: [S("restaurant", "Order screen with the menu grid and an open bill"), S("kitchen", "Kitchen display system"), S("recipe", "Recipe and food costing"), S("ingredients", "Ingredient management")],
    photo: { src: "/images/industries/restaurant.jpg", alt: "Chefs plating dishes with a Vrodux restaurant POS and kitchen display" },
  },
  hospitality: {
    tone: 5,
    docsCategory: "hospitality",
    seoTitle: "Hotel PMS Software — Reservations, Rooms & Housekeeping",
    seoDescription:
      "Front desk, room calendar, seasonal rates, guest folios and housekeeping for hotels and serviced apartments in Vrodux Hospitality.",
    flowTitle: "A guest stay, start to finish",
    flow: [
      { icon: "CalendarCheck", title: "Reserve", text: "Create reservations on the room calendar, priced from your seasonal rate plans." },
      { icon: "KeyRound", title: "Check in", text: "Arrivals, in-house and departures on one front desk screen. Change room at check-in if needed." },
      { icon: "Receipt", title: "Folio", text: "Room charges, extras and payments, with service charge, tax and a printed bill." },
      { icon: "BedDouble", title: "Housekeeping", text: "Tasks are created automatically on check-out." },
      { icon: "BadgeCheck", title: "Check out", text: "Check-out blocks with an unpaid balance unless you allow it." },
    ],
    photo: { src: "/images/industries/hospitality.jpg", alt: "Hotel front desk using Vrodux hospitality management" },
  },
  tourism: {
    tone: 0,
    docsCategory: "hospitality",
    seoTitle: "Tour Operator Software — Packages, Departures & Bookings",
    seoDescription:
      "Sell tour packages, schedule departures with seats, take bookings and track traveller payments and instalments. Vrodux Tourism for travel agencies and tour operators.",
    flowTitle: "From package to payment",
    flow: [
      { icon: "Plane", title: "Package", text: "Define the tour with duration, adult and child prices and a single-room supplement." },
      { icon: "CalendarDays", title: "Departure", text: "Schedule dates with seats and per-departure prices; see seats left." },
      { icon: "UserPlus", title: "Book", text: "Book travellers onto a departure or a custom trip. Bookings cannot exceed seats left." },
      { icon: "Wallet", title: "Collect", text: "Take instalments and payments against the booking and print documents." },
    ],
    photo: { src: "/images/industries/hospitality.jpg", alt: "Travel and hospitality team" },
  },
  "real-estate": {
    tone: 2,
    docsCategory: "real-estate",
    seoTitle: "Real Estate Software — Listings, Leases & Rent Reminders",
    seoDescription:
      "One listing equals one unit. Manage rental and sale stock, leases with generated rent schedules, tenant reminders, renewals and terminations in Vrodux Real Estate.",
    flowTitle: "From listing to rent collected",
    flow: [
      { icon: "Home", title: "List", text: "Create a property and unit in one step, or import your stock sheet from Excel or CSV." },
      { icon: "FileCheck", title: "Lease", text: "Create the lease with a tenant. A rent schedule is generated and sums exactly." },
      { icon: "Banknote", title: "Collect", text: "Record payments, waive instalments and take advance rent at signing." },
      { icon: "Bell", title: "Remind", text: "Email reminders before and after rent is due, and before the lease expires." },
      { icon: "RefreshCcw", title: "Renew or end", text: "Renew with a new schedule, or terminate with a final account and refund." },
    ],
    shots: [D("/docs/real-estate/properties-leases-rent")],
    photo: { src: "/images/industries/real-estate.jpg", alt: "Real estate office with a property model and Vrodux on a tablet" },
  },
  "project-management": {
    tone: 1,
    docsCategory: "project-management",
    seoTitle: "Project Management — Kanban Boards, Sprints & Issues",
    seoDescription:
      "Kanban boards, backlog, sprints and issues with team-based access. Project management inside Vrodux ERP.",
    flowTitle: "From backlog to done",
    flow: [
      { icon: "Briefcase", title: "Project", text: "Create a project with owners, members and viewers." },
      { icon: "ListChecks", title: "Backlog", text: "Capture issues with labels and comments in the backlog." },
      { icon: "Rocket", title: "Sprint", text: "Start and complete sprints." },
      { icon: "Kanban", title: "Board", text: "Drag issues across columns you control. Assignees are notified." },
    ],
    shots: [D("/docs/project-management/boards-sprints-issues")],
  },
  "visa-services": {
    tone: 4,
    docsCategory: "visa-services",
    seoTitle: "Visa Consultancy Software — Cases, Documents & Renewals",
    seoDescription:
      "Run a UAE visa consultancy: cases with document checklists, SLA tracking, renewal reminders, invoicing and government submission records in Vrodux Visa Services.",
    flowTitle: "From new case to issued visa",
    flow: [
      { icon: "FilePlus", title: "Open a case", text: "A wizard creates the case with visa type, client and applicants with dependants." },
      { icon: "Paperclip", title: "Collect documents", text: "A checklist per applicant. The case advances when the last document is verified." },
      { icon: "Stamp", title: "Submit & track", text: "Record the government transaction. Only legal next statuses are offered." },
      { icon: "Receipt", title: "Invoice", text: "Generate a draft invoice in Finance from the case: service fee plus government fee." },
      { icon: "CalendarDays", title: "Renew", text: "Expiry tracking at 30, 60, 90 and 180 days for passports, documents and issued visas." },
    ],
    shots: [D("/docs/visa-services/case-management")],
    photo: { src: "/images/industries/visa-services.jpg", alt: "Visa services consultant at a desk" },
  },
  manufacturing: {
    tone: 3,
    docsCategory: "manufacturing",
    seoTitle: "Manufacturing ERP — BOM, Production Orders & Costing",
    seoDescription:
      "Bills of materials, routing, production orders, stock issue and receipt, yield reporting and actual unit costing in Vrodux Manufacturing.",
    flowTitle: "From bill of materials to finished goods",
    flow: [
      { icon: "ClipboardList", title: "BOM", text: "Define the finished product, batch size and components with scrap percentages." },
      { icon: "Factory", title: "Production order", text: "Plan, release and start orders. Components are scaled from the BOM." },
      { icon: "PackageCheck", title: "Issue materials", text: "Issue stock with a shortage check, and raise a requisition for shortages." },
      { icon: "BadgeCheck", title: "Complete", text: "Receive finished goods into Inventory at actual unit cost." },
      { icon: "Coins", title: "Cost & yield", text: "Materials, labour and overhead from actual operation time, plus a yield report." },
    ],
    photo: { src: "/images/industries/manufacturing.jpg", alt: "Production floor supervisor checking a tablet" },
  },
  library: {
    tone: 5,
    docsCategory: "library",
    seoTitle: "Library Management Software — Circulation & Fines",
    seoDescription:
      "Catalogue, barcode circulation, reservations, branch transfers, automatic fines, email reminders and a member portal for school, university and community libraries.",
    flowTitle: "How a book moves through the library",
    flow: [
      { icon: "BookOpen", title: "Catalogue", text: "Titles and individual copies with barcode, branch, shelf and condition. Bulk import supported." },
      { icon: "ScanBarcode", title: "Issue & return", text: "Scan to issue, renew or return. Reserve titles and hold the copy for the next member." },
      { icon: "Wallet", title: "Fines", text: "Automatic overdue and lost-item fines, payments and waivers." },
      { icon: "Mail", title: "Remind", text: "Due-soon, overdue and ready-for-pickup emails, one per member per kind." },
      { icon: "UserRound", title: "Member portal", text: "Members sign in with a card number and PIN to renew, search, reserve and see fines." },
    ],
    photo: { src: "/images/industries/library.jpg", alt: "Librarian scanning a book at the circulation desk" },
  },
  "import-export": {
    tone: 0,
    docsCategory: "import-export",
    seoTitle: "Import Export Software — Shipments, Documents & Landed Cost",
    seoDescription:
      "Track shipments from booking to delivery, manage trade documents, duty estimates and payments, and see true landed cost per goods line in Vrodux Import & Export.",
    flowTitle: "A shipment, end to end",
    flow: [
      { icon: "Ship", title: "Book", text: "Create an import or export shipment with goods lines (HS code, quantity, weight, volume) and containers." },
      { icon: "FileCheck", title: "Documents", text: "Attach L/C, permits and certificates; expiry dates are watched." },
      { icon: "Route", title: "Track", text: "Move through booked, in transit, arrived, customs, cleared and delivered with milestone history." },
      { icon: "Coins", title: "Landed cost", text: "Share freight, insurance and duty across goods lines by value, weight, volume or quantity." },
      { icon: "Banknote", title: "Pay", text: "Advance, balance, L/C and TT payments with due dates and daily alerts." },
    ],
    photo: { src: "/images/industries/import-export.jpg", alt: "Port coordinator tracking shipments" },
  },
  "lead-generation": {
    tone: 2,
    docsCategory: "lead-generation",
    seoTitle: "Lead Generation & Cold Email Outreach for the UAE",
    seoDescription:
      "Find real businesses by category and area, reveal contacts with credits, and run multi-step cold-email campaigns from your own mailbox with a reply inbox.",
    flowTitle: "From search to reply",
    flow: [
      { icon: "Search", title: "Find", text: "Search businesses by category and area. Discovery is free." },
      { icon: "Key", title: "Reveal", text: "Spend credits only to reveal a contact. Unusable or bounced contacts are refunded." },
      { icon: "Mail", title: "Campaign", text: "Multi-step sequences from your own mailbox, with warm-up limits and an unsubscribe link." },
      { icon: "MessageSquare", title: "Inbox", text: "Replies land in one place and are classified." },
      { icon: "Target", title: "Push to CRM", text: "Send prospects into your CRM." },
    ],
  },
  "ai-assistant": {
    tone: 1,
    docsCategory: "ai-assistant",
    seoTitle: "AI Assistant for ERP — Ask, Act and Confirm",
    seoDescription:
      "Ask your ERP a question or tell it what to do across modules. Every change is held for your confirmation, and it respects each user's permissions.",
    flowTitle: "Ask, review, confirm",
    flow: [
      { icon: "MessageSquare", title: "Ask", text: "Chat in a side panel or full page, in plain language." },
      { icon: "Search", title: "Look up", text: "The assistant finds the right module and reads your live data." },
      { icon: "FileText", title: "Review", text: "Any create or modify is held with a field-by-field summary." },
      { icon: "BadgeCheck", title: "Confirm", text: "You confirm or reject. There are no delete tools." },
    ],
    shots: [D("/docs/ai-assistant/ask-it-confirm-it")],
  },
  reports: {
    tone: 5,
    docsCategory: "reports",
    seoTitle: "ERP Reports & Dashboards — One Reports Hub",
    seoDescription:
      "A central reports hub for POS, Inventory, CRM, Library and Import & Export, showing only the modules you can access, with CSV and PDF export.",
    flowTitle: "From question to export",
    flow: [
      { icon: "Layers", title: "Pick a module", text: "The hub shows only the modules you have and may access." },
      { icon: "Search", title: "Choose a report", text: "POS 19, Inventory 17, CRM 8, Library 12, Import & Export 8." },
      { icon: "BarChart3", title: "Filter", text: "Filter by date, owner and other fields. Results respect your access." },
      { icon: "FilePlus", title: "Export", text: "Export to CSV or PDF." },
    ],
    shots: [D("/docs/reports/overview"), S("reports", "The Reports hub")],
  },
  healthcare: {
    tone: 2,
    docsCategory: "industry-packs",
    seoTitle: "Clinic Management — Patients, Appointments & Treatment Plans",
    seoDescription: "Patients, appointments and treatment plans with a summary tab and role-based permissions. A lightweight clinic module inside Vrodux ERP.",
    flowTitle: "Patient flow",
    flow: [
      { icon: "UserPlus", title: "Patients", text: "Keep a list of patients." },
      { icon: "CalendarCheck", title: "Appointments", text: "Book appointments and mark them complete." },
      { icon: "ClipboardList", title: "Treatment plans", text: "Track treatment plans and their status." },
    ],
    photo: { src: "/images/industries/healthcare.jpg", alt: "Doctor reviewing patient records" },
  },
  education: {
    tone: 1,
    docsCategory: "industry-packs",
    seoTitle: "School Management — Admissions, Students & Enrollments",
    seoDescription: "Admissions, students and enrollments with a summary tab and role-based permissions. A lightweight education module inside Vrodux ERP.",
    flowTitle: "Student journey",
    flow: [
      { icon: "FilePlus", title: "Admissions", text: "Track applicants through admissions." },
      { icon: "GraduationCap", title: "Students", text: "Keep your student records." },
      { icon: "ClipboardCheck", title: "Enrollments", text: "Enroll students and update status." },
    ],
    photo: { src: "/images/industries/education.jpg", alt: "Teacher and students in a classroom" },
  },
  insurance: {
    tone: 4,
    docsCategory: "industry-packs",
    seoTitle: "Insurance Agency Software — Policies, Renewals & Claims",
    seoDescription: "Policies, renewals and claims with payment recording and an approval permission for claims. A lightweight insurance module inside Vrodux ERP.",
    flowTitle: "Policy lifecycle",
    flow: [
      { icon: "ShieldPlus", title: "Policies", text: "Keep policy records." },
      { icon: "RefreshCcw", title: "Renewals", text: "Renew policies and record payments." },
      { icon: "BadgeCheck", title: "Claims", text: "Resolve or approve claims; approval has its own permission." },
    ],
    photo: { src: "/images/industries/insurance.jpg", alt: "Insurance advisor speaking with a client" },
  },
  "b2b-services": {
    tone: 3,
    docsCategory: "industry-packs",
    seoTitle: "Professional Services Software — Contracts & Tickets",
    seoDescription: "Proposals, contracts and support tickets with a summary overview. A lightweight B2B services module inside Vrodux ERP.",
    flowTitle: "Client engagement",
    flow: [
      { icon: "FileText", title: "Proposals", text: "Create proposals and track status." },
      { icon: "Handshake", title: "Contracts", text: "Keep contracts and update their status." },
      { icon: "MessageSquare", title: "Support tickets", text: "Handle support tickets." },
    ],
    photo: { src: "/images/industries/b2b-services.jpg", alt: "Consultants presenting a project plan" },
  },
  construction: {
    tone: 3,
    seoTitle: "Construction Management Software",
    seoDescription: "Project planning, resource allocation, cost tracking and BOQ management for construction companies in Vrodux ERP.",
    photo: { src: "/images/industries/construction.jpg", alt: "Site manager reviewing plans on a tablet" },
  },
};
