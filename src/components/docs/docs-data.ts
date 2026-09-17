import {
  Rocket,
  LayoutDashboard,
  Users,
  DollarSign,
  Package,
  Truck,
  ShoppingCart,
  CreditCard,
  KanbanSquare,
  Stamp,
  Home,
  Blocks,
  BarChart3,
  FolderOpen,
  Sparkles,
  Smartphone,
  Settings,
  type LucideIcon,
} from "lucide-react";

/**
 * Docs content. Most categories/articles are real content — remaining gaps
 * are tracked per-article via the `placeholder` flag.
 */

export interface DocsCategory {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface DocsArticle {
  slug: string;
  categorySlug: string;
  title: string;
  summary: string;
  readTime: number;
  /** Position within the category. Powers the "Next" link at the bottom of
   * the article template — it links to the next-highest order in the same
   * category, or is omitted if this is the last article in the category. */
  order: number;
  placeholder: boolean;
  body: string;
}

export const docsCategories: DocsCategory[] = [
  {
    slug: "start-here",
    name: "Start Here",
    description: "New to Vrodux ERP? Begin your onboarding path with these guides.",
    icon: Rocket,
  },
  {
    slug: "crm",
    name: "CRM",
    description: "Leads, opportunities, pipelines, and customer management.",
    icon: LayoutDashboard,
  },
  {
    slug: "hr",
    name: "HR",
    description: "Employee records, attendance, leave, and payroll.",
    icon: Users,
  },
  {
    slug: "finance",
    name: "Finance",
    description: "Invoicing, expenses, banking, and the general ledger.",
    icon: DollarSign,
  },
  {
    slug: "inventory",
    name: "Inventory",
    description: "Products, warehouses, stock movements, and stock reporting.",
    icon: Package,
  },
  {
    slug: "purchase",
    name: "Purchase",
    description: "Vendors, purchase orders, receiving, and vendor invoices.",
    icon: Truck,
  },
  {
    slug: "sales",
    name: "Sales",
    description: "Quotations, sales orders, delivery, and returns.",
    icon: ShoppingCart,
  },
  {
    slug: "pos",
    name: "Point of Sale",
    description: "In-person selling for retail counters and restaurant tables.",
    icon: CreditCard,
  },
  {
    slug: "project-management",
    name: "Project Management",
    description: "Projects, boards, issues, and sprints.",
    icon: KanbanSquare,
  },
  {
    slug: "visa-services",
    name: "Visa Services",
    description: "Visa case management, document checklists, and renewals.",
    icon: Stamp,
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "Properties, units, leases, and rent collection.",
    icon: Home,
  },
  {
    slug: "industry-packs",
    name: "Industry Packs",
    description: "Extra modules tailored to specific industries.",
    icon: Blocks,
  },
  {
    slug: "reports",
    name: "Reports",
    description: "Every report available across your modules, in one hub.",
    icon: BarChart3,
  },
  {
    slug: "file-manager",
    name: "File Manager",
    description: "A browsable library of the documents attached to your records.",
    icon: FolderOpen,
  },
  {
    slug: "ai-assistant",
    name: "AI Assistant",
    description: "Ask questions or request changes — always with a confirmation step.",
    icon: Sparkles,
  },
  {
    slug: "mobile-app",
    name: "Mobile App",
    description: "What's available on your phone, and what stays on the web app.",
    icon: Smartphone,
  },
  {
    slug: "settings",
    name: "Settings",
    description: "Company profile, users and roles, security, and billing.",
    icon: Settings,
  },
];

export const docsArticles: DocsArticle[] = [
  {
    slug: "what-is-vroduxerp",
    categorySlug: "start-here",
    title: "What is VroduxERP?",
    summary: "A quick overview of what VroduxERP is, how workspaces work, and the modules you can pick from.",
    readTime: 4,
    order: 1,
    placeholder: false,
    body: `
VroduxERP is a business management platform that your whole company uses to run its day-to-day operations — things like tracking customers, managing inventory, running payroll, and more, all in one place.

## Your own private workspace

When your company signs up, you get your own private workspace. This is sometimes called being a "tenant" — it just means your data, your users, and your settings are kept completely separate from every other business using VroduxERP. Nobody outside your company can see your workspace, and you can't see anyone else's.

## You only use what you need

VroduxERP is built from modules — self-contained tools for a specific part of your business, like CRM or Finance. Your business picks the modules that match how you actually work, rather than everything being switched on by default.

[screenshot: A workspace's module menu, showing only the modules this business has enabled]

## The modules available

Here's a quick look at each one:

### CRM
Keeps track of your leads and customers, so you always know who you're talking to and what stage they're at in your sales process.

### HR
Manages your employees and the day-to-day people-management work every company needs.

### Finance
Handles your company's financial records and reporting.

### Inventory
Tracks the stock your business holds, so you know what you have and where it is.

### Purchase
Manages what your business buys, from ordering through to receiving.

### Sales
Manages what your business sells, from quoting a customer through to closing the sale.

### Point of Sale
For businesses that sell directly to customers in person — retail shops and restaurants both have their own Point of Sale tools.

### Project Management
Helps you plan and track work that has a start, an end, and a team working on it together.

### Visa Services
For businesses that manage visa applications and related paperwork for employees or clients.

### Real Estate
For businesses that manage properties — buying, selling, leasing, or renting them out.

## Industry packs

On top of the core modules, VroduxERP also offers industry packs — extra modules built for specific kinds of businesses: B2B, Education, Healthcare, Insurance, Construction, and Hospitality. If your business fits one of these industries, your workspace can include the pack built for it.
    `,
  },
  {
    slug: "creating-your-account",
    categorySlug: "start-here",
    title: "Creating Your Account",
    summary: "How to start a free trial, set your currency, and choose your first modules.",
    readTime: 3,
    order: 2,
    placeholder: false,
    body: `
Getting started with VroduxERP takes just a few steps. Here's what happens when you create your account.

## 1. Start a free trial

You can try VroduxERP before committing to a paid plan. Every new account starts with a trial period, so you can explore the product with no upfront commitment.

## 2. We detect your country and currency

When you sign up, VroduxERP automatically detects your country and suggests a currency based on it. You can change this if it's not right for your business — more on currency in a later article.

[screenshot: Sign-up screen showing the detected country and suggested currency]

## 3. Choose your modules

Next, you'll set up your workspace. You can either:

- Pick individual modules yourself, one by one, or
- Choose an industry pack, which sets up a group of modules suited to your type of business

You're not locked into this choice — modules can be adjusted later as your needs change.

[screenshot: Choosing modules or an industry pack during setup]

## 4. You're in

Once signup is complete, you land straight in the app — on your trial, with your chosen modules already set up and ready to explore.
    `,
  },
  {
    slug: "users-roles-teams-permissions",
    categorySlug: "start-here",
    title: "Users, Roles, Teams & Permissions",
    summary: "How roles decide what each person in your workspace can see and do.",
    readTime: 3,
    order: 3,
    placeholder: false,
    body: `
Not everyone on your team needs access to everything. VroduxERP controls this through roles.

## Every user has a role

When someone logs into your workspace, they're logged in as a specific user, and that user has a role. The role decides two things:

- Which modules that person can see at all
- What they're allowed to do inside each module they can see — typically some combination of viewing, creating, editing, and deleting

For example, one role might only be able to view customer records, while another role can view, create, and edit them, but not delete them.

## Some modules also use teams

On top of roles, some modules also support team-based visibility. This controls how much of the data inside a module a person can see, based on which team they belong to.

A common example is sales: a salesperson might only see their own leads, a team lead might see their whole team's leads, and an administrator sees every lead in the workspace, regardless of team.

[screenshot: Settings → Roles & Permissions, showing a role's module access]

## Where this is set up

All of this — creating roles, deciding what each role can do, and assigning users to teams — is configured in Settings → Roles & Permissions.
    `,
  },
  {
    slug: "your-dashboard",
    categorySlug: "start-here",
    title: "Your Dashboard",
    summary: "What the dashboard shows, and why it looks different for everyone.",
    readTime: 2,
    order: 4,
    placeholder: false,
    body: `
After you log in, the dashboard is the first thing you see. It's a live snapshot of your business.

## It's built from your modules

The dashboard shows stat cards and charts for the modules your workspace actually has enabled. If your workspace doesn't include a module, you won't see a card for it — there's nothing you need to configure or hide manually.

## It's your real data

Everything on the dashboard reflects your workspace's own data, not sample or demo data. As soon as your team starts using a module, the dashboard updates to show it.

[screenshot: A dashboard showing stat cards and charts for a workspace's enabled modules]

## It depends on your role

What you personally see on the dashboard is also shaped by your role. Since a role decides which modules and data you have access to, your dashboard will only ever show what you're permitted to see.
    `,
  },
  {
    slug: "company-profile-currency-branding",
    categorySlug: "start-here",
    title: "Company Profile, Currency & Branding",
    summary: "Where to set your company details and the currency used throughout VroduxERP.",
    readTime: 3,
    order: 5,
    placeholder: false,
    body: `
Before you start inviting your team, it's worth setting up your company's basic details. This only takes a few minutes.

## Company profile

In Settings → General, you can set:

- Your company name
- Your legal name
- Your address
- Your tax registration number
- Your logo

[screenshot: Settings → General, showing the company profile fields]

## Operating currency

You'll also set your operating currency here. This is the currency your workspace uses across the entire product — including on the invoices and quotations you send to customers.

[screenshot: An invoice showing the workspace's operating currency]

Set this early. It's the currency your team, and your customers, will see everywhere in VroduxERP.
    `,
  },
  {
    slug: "inviting-your-team",
    categorySlug: "start-here",
    title: "Inviting Your Team",
    summary: "How to create logins for your teammates and assign them a role.",
    readTime: 3,
    order: 6,
    placeholder: false,
    body: `
Once your company profile is set up, it's time to bring your team in.

## Where to invite people

Go to Settings → Users. This is where you create a login for each person who needs access to your workspace.

## 1. Create a login

Add the teammate's details to create their login.

[screenshot: Settings → Users, showing the option to create a new login]

## 2. Assign a role

Every new user needs a role — this is what determines which modules they can see and what they're allowed to do, as covered earlier in Users, Roles, Teams & Permissions.

## Each login is a seat

Every active user you create counts as one seat against your plan's user limit. Keep this in mind as your team grows — you may need to adjust your plan as you add more logins.
    `,
  },
  {
    slug: "where-to-go-next",
    categorySlug: "start-here",
    title: "Where to Go Next",
    summary: "A quick guide to which docs section to read next, based on which module you're using.",
    readTime: 3,
    order: 7,
    placeholder: false,
    body: `
You've covered the basics — your workspace, your account, roles, your dashboard, your company profile, and your team. From here, head to whichever module matches what you're working on.

## Core modules

### CRM
Manage your leads and customers, and track where each one is in your sales process. [Go to CRM →](/docs/crm)

### HR
Manage your employees and the day-to-day people-management work your business needs. [Go to HR →](/docs/hr)

### Finance
Handle your company's financial records and reporting. [Go to Finance →](/docs/finance)

### Inventory
Track the stock your business holds. [Go to Inventory →](/docs/inventory)

### Purchase
Manage what your business buys, from ordering through to receiving. [Go to Purchase →](/docs/purchase)

### Sales
Manage what your business sells, from quote through to close. [Go to Sales →](/docs/sales)

### Point of Sale
For businesses selling directly to customers in person, in retail or restaurants. [Go to Point of Sale →](/docs/pos)

### Project Management
Plan and track work that has a start, an end, and a team. [Go to Project Management →](/docs/project-management)

### Visa Services
Manage visa applications and related paperwork. [Go to Visa Services →](/docs/visa-services)

### Real Estate
Manage properties you buy, sell, lease, or rent out. [Go to Real Estate →](/docs/real-estate)

## Beyond the core modules

### Industry Packs
Extra features tailored to specific industries, on top of whichever core modules you use. [Go to Industry Packs →](/docs/industry-packs)

## Across every module

### Reports
Reporting tools that work across your modules. [Go to Reports →](/docs/reports)

### File Manager
Where your workspace's documents are stored. [Go to File Manager →](/docs/file-manager)

### AI Assistant
Look things up or make changes in your workspace — it always asks for your confirmation before saving anything. [Go to AI Assistant →](/docs/ai-assistant)

### Mobile App
Access your workspace from your phone. [Go to Mobile App →](/docs/mobile-app)

### Settings
Company profile, users and roles, security, and your billing plan. [Go to Settings →](/docs/settings)
    `,
  },
  {
    slug: "leads-pipeline-customers",
    categorySlug: "crm",
    title: "CRM: Leads, Pipeline & Customers",
    summary: "How CRM connects your leads, pipeline, accounts and contacts — and who gets to see what.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
CRM is where you track everyone you're selling to — from a first-touch lead through to a paying customer.

## What CRM does here

CRM brings together four kinds of records: Leads, Opportunities (your deals), Accounts, and Contacts. These aren't separate tools you have to stitch together yourself — they're connected. A lead you're chasing, the deal it turns into, the company it belongs to, and the person you actually talk to all link back to each other, so you never lose the thread of a relationship.

## Leads

A lead is someone who might become a customer. Leads can get into CRM a few different ways:

- Entered manually by you or your team
- Imported from a spreadsheet (CSV or Excel)
- Captured automatically from your website forms
- Connected from ad platforms and scheduling tools

However a lead arrives, it's automatically given a score — shown as hot, warm, or cold. The score is based on signals like whether the lead gave good contact details, whether they stated a budget or timeframe, and how they were sourced in the first place. The point is simple: your reps can glance at the lead list and know who to call first.

[screenshot: A lead list showing hot, warm, and cold scores]

## Pipeline

Once a lead is worth pursuing, it becomes an opportunity — what most people just call a deal. Opportunities move through pipeline stages as you work them, ending in either Won or Lost.

Each opportunity also carries a forecast category. In plain terms, this is just a read on how likely the deal is to close — useful for anyone trying to predict what's actually going to land this month versus what's still a long shot.

[screenshot: A pipeline board showing deals moving through stages]

## Accounts & Contacts

An account is the company record — the business you're selling to. A contact is a person at that company. When a lead is ready to convert, CRM creates an account, a primary contact, and an opportunity together, all at once — so you go from "a lead" to "a company, a person, and a deal" in one step, without having to set each of those up separately.

## Team-based visibility

Not everyone needs to see every lead and deal in the system. Visibility is scoped by role: some roles only see the records assigned to them, some see everything their team is working on, and roles like administrators see everything across the workspace. None of this is fixed — it's configured per role in Settings → Roles & Permissions, the same place covered in [Users, Roles, Teams & Permissions](/docs/start-here/users-roles-teams-permissions).

## Activities & timeline

Every call, email, note, and meeting can be logged against a lead, a deal, or an account. All of it shows up together as a timeline, so anyone picking up a record can see the full history of contact at a glance — no digging through separate logs.

[screenshot: An activity timeline showing logged calls, emails, and notes]

## Reports

CRM includes a reporting section built for exactly the questions a sales manager asks day to day:

- Pipeline value — how much is currently in play
- Win/loss trends — how your close rate is moving over time
- Lead source performance — which channels are actually producing leads worth having
- Team performance — how each rep or team is doing

## Where to go deeper

- [Connecting your lead sources →](/docs/crm/connecting-lead-sources) — wiring up website forms, ad platforms, and scheduling tools
- [How lead scoring works →](/docs/crm/lead-scoring) — a closer look at what feeds the hot/warm/cold score
- [The full reporting suite →](/docs/reports) — every report available across VroduxERP, not just CRM
    `,
  },
  {
    slug: "employees-attendance-leave-payroll",
    categorySlug: "hr",
    title: "HR: Employees, Attendance, Leave & Payroll",
    summary: "How the employee record ties together attendance, leave and payroll — and how payroll approval keeps HR and Finance separate.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
HR is where you manage the people who work for you — from their basic details through to attendance, leave, and getting them paid.

## What HR does here

Everything in HR starts with the employee record. It's the hub that attendance, leave, and payroll all connect back to — one employee, one record, with everything about them in one place instead of scattered across separate lists.

## Employee records

Each employee record stores:

- Profile details
- Job title and department
- Compliance documents — things like ID, passport, or visa details, where relevant

[screenshot: An employee record showing profile, job title, and department]

## Attendance & office hours

Employees check in and check out, and the system compares that against your company's configured office hours — including a grace period — to mark each day on-time or late. That gives you a straightforward, day-by-day attendance record without anyone having to work it out by hand.

[screenshot: An attendance view showing on-time and late days]

## Leave & leave policies

Each leave type — annual, sick, and so on — carries its own entitlement: how much of that leave an employee is allowed. When an employee applies for leave, it's checked against their remaining balance, and the request goes through an approval step before it's actually deducted. Nothing comes off an employee's balance just for asking.

## Payroll

Payroll runs in two steps, deliberately kept apart:

1. HR prepares a payroll run — base salary, allowances, and deductions for each employee.
2. Finance reviews and approves the run before it can be marked as paid.

That separation means HR can't both prepare and authorize its own payroll — a second department always has to sign off before money moves.

[screenshot: A payroll run awaiting Finance approval]

For UAE-based businesses, VroduxERP can also generate the WPS (Wage Protection System) file — the salary file format banks require for salary transfers in the UAE.

## The Self-Service Portal

Once an employee has their own login, they get access to a self-service portal. From there, they can see their own profile, check in and out, apply for and track their leave requests, and view or download their own payslips — without needing to go through HR for any of it.

## Where to go deeper

- [Performance reviews →](/docs/hr/performance-reviews) — a closer look at how reviews work
- [Recruitment →](/docs/hr/recruitment) — hiring and candidate tracking
- [The payroll workflow in depth →](/docs/hr/payroll-workflow) — a step-by-step look at preparing and approving a payroll run
    `,
  },
  {
    slug: "invoicing-expenses-ledger",
    categorySlug: "finance",
    title: "Finance: Invoicing, Expenses & the Ledger",
    summary: "How Finance connects invoicing, expenses, banking and the ledger into one system for tracking money in and out.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
Finance is where you track the money moving through your business — what customers owe you, what you owe others, and everything in between.

## What Finance does here

Finance is one connected system for money coming in and money going out. Invoicing handles the money coming in. Expenses and vendor bills handle the money going out. Underneath both sits the general ledger — a single record that everything else is built from.

## Invoicing customers

Creating an invoice, sending it to a customer, and tracking whether it's been paid or is still outstanding is the core of invoicing. An invoice can show your business's registered tax details, so what you send out is compliant from the start.

For customers you bill regularly, invoices can be set up as recurring. Once set up, they generate automatically on a schedule — for example, monthly — and can even be emailed to the customer automatically, without you having to create and send each one by hand.

[screenshot: An invoice showing paid and unpaid status]

## Expenses & budgets

Expenses are recorded by category, so you can see where money is actually going. Before an expense is finalized, it can go through an approval step — someone reviews it before it's locked in.

You can also set budgets per category, giving you a target to track actual spend against as the numbers come in.

[screenshot: An expense pending approval, shown against its category budget]

## Banking

Your bank accounts and their transactions can be tracked directly inside Finance, so your banking activity sits alongside your invoices and expenses instead of living somewhere separate.

## The general ledger

Underneath invoicing, expenses, and banking is the general ledger — the record everything else feeds into. From it, Finance generates:

- A trial balance — a check that everything in your books is in balance
- A profit & loss statement — what you earned and spent over a period, and what's left over
- A balance sheet — what your business owns and owes at a point in time
- A cash flow view — how cash has actually moved in and out

All of these are generated from what's already been entered — you don't have to build them separately.

[screenshot: The general ledger reports — trial balance, profit & loss, balance sheet, and cash flow]

## Accounts payable

Just as invoices track what customers owe you, purchase bills track what you owe your vendors. This is accounts payable, kept separate from customer invoicing (accounts receivable) — so money coming in and money going out are never mixed together.

## Multi-currency

Not every transaction has to be in your workspace's default operating currency. You can record a transaction in a different currency, and Finance converts it using live exchange rates.

## Where to go deeper

- [VAT & tax reporting →](/docs/finance/vat-tax-reporting) — a closer look at tax reporting
- [The Purchase module →](/docs/purchase) — where vendor purchase orders originate before they become bills
- [Recurring invoices in depth →](/docs/finance/recurring-invoices) — setting up a recurring billing schedule
    `,
  },
  {
    slug: "products-warehouses-stock",
    categorySlug: "inventory",
    title: "Inventory: Products, Warehouses & Stock",
    summary: "How Inventory tracks what you have, where it is, and how much — across products and warehouses.",
    readTime: 5,
    order: 1,
    placeholder: false,
    body: `
Inventory is where you keep track of everything your business stocks — what you have, where it is, and how much.

## What Inventory does here

Inventory is one source of truth for your stock. Instead of checking multiple places, it tells you what you have, where it's sitting, and how much of it there is — all from one place.

## Products

Every product carries a SKU (a unique code that identifies it) or barcode, so it can be scanned or looked up quickly. Each product also belongs to a category and a brand, and is tracked in a unit of measure — for example, pieces, kilograms, or boxes — so quantities always mean what you expect them to.

[screenshot: A product record showing its SKU, category, brand, and unit of measure]

## Warehouses

You're not limited to tracking stock in one place. Inventory can track stock across multiple warehouses or locations, so you always know not just how much of something you have, but where it actually is.

## Stock movements & transfers

Stock changes are recorded as movements:

- Receipts — stock coming in
- Write-offs — stock removed, for example if it's damaged or lost
- Manual adjustments — corrections to a quantity

When stock needs to move from one warehouse to another, that's recorded as a stock transfer — it moves the quantity out of one warehouse and into another, keeping both locations accurate.

[screenshot: A stock transfer moving quantity between two warehouses]

## Knowing what's running low

Every product has a configured reorder level. When stock for a product drops below that level, it's flagged as low stock — so reordering is something you plan for, not something you discover when the shelf is already empty.

## Reports

Inventory reporting covers two things: stock levels (what you have, and where) and stock valuation (what that stock is worth).

## Where to go deeper

- [Purchase →](/docs/purchase) — where new stock is ordered from vendors
- [Sales →](/docs/sales) — where stock is sold to customers
- [Point of Sale →](/docs/pos) — where stock is sold in person
    `,
  },
  {
    slug: "vendors-orders-receiving",
    categorySlug: "purchase",
    title: "Purchase: Vendors, Orders & Receiving",
    summary: "The path from placing an order with a vendor through to receiving goods and the vendor's invoice.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
Purchase is where you manage everything your business buys from outside vendors.

## What Purchase does here

Purchase covers the whole path from "we need to buy this" to "it's arrived and we owe the vendor" — vendors, purchase orders, an optional approval step, receiving, returns, and the vendor's invoice at the end.

## Vendors

Before you can buy from someone, you need a vendor record. Purchase keeps a directory of everyone you buy from, so vendor details don't have to be re-entered every time you place an order.

## Purchase orders

A purchase order is created against a vendor and lists what you're ordering. As the order progresses, its status tracks where it stands — sent, partially received, or fully received — so you always know what's still outstanding.

[screenshot: A purchase order showing its status]

## Approvals

Purchases can go through an optional approval step before they go ahead — a chance for someone to review an order before it's actually sent to the vendor.

## Receiving goods

When goods physically arrive, what actually came in is recorded against the purchase order as a Goods Receipt Note. Receiving updates the order's status automatically, based on how much of each item has been received so far. If only part of an order arrives, it's tracked as partially received — not forced to look complete when it isn't.

[screenshot: A Goods Receipt Note recording a partial delivery]

## Purchase returns

If something needs to go back to the vendor, a Purchase Return records the goods sent back against the original order.

## Purchase invoices

The vendor's bill is recorded as a purchase invoice. It can be one of three kinds: a standard tax invoice, a non-tax invoice, or an import invoice recorded in a foreign currency.

[screenshot: A purchase invoice showing its type]

## Where to go deeper

- [How a purchase bill flows into Finance →](/docs/finance) — a purchase invoice becomes an accounts-payable record in Finance
    `,
  },
  {
    slug: "quotations-orders-delivery",
    categorySlug: "sales",
    title: "Sales: Quotations, Orders & Delivery",
    summary: "How a quotation becomes a confirmed order, gets delivered, and hands off to Finance to be paid.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
Sales is where a deal turns into a paid order — from the first quotation through to what actually gets delivered.

## What Sales does here

Sales covers the path from proposal to paid: building a quotation, turning it into a confirmed order, delivering against that order, and handing off to Finance once it's ready to be invoiced.

## Quotations

A quotation is built from line items — what you're proposing to sell, and at what price. Some items can be marked optional: they're quoted so the customer can see the price, but aren't included in the total unless the customer chooses to add them. A quotation also carries payment terms and notes.

Once it's ready, a quotation can be shared as a link. The customer opens it without needing to log in, and can accept or decline it right there online.

[screenshot: A quotation shared as a link, with an accept/decline option]

## Turning a quotation into business

Once a quotation is accepted, it can be converted into a sales order. An invoice can also be generated directly from a quotation or an order, without having to re-enter anything.

## Sales orders

A sales order tracks its status as it moves forward — confirmed, shipped, and delivered — so everyone involved can see exactly where an order stands.

## Delivery

What's actually delivered against a sales order is recorded as a Delivery Challan. The order's status updates automatically based on how much of each item has been delivered so far — including partial deliveries, which are tracked as partial rather than marked complete before they are.

[screenshot: A Delivery Challan recording a partial delivery]

## Sales returns

If a customer sends goods back, a Sales Return records what came back against the original order.

## Where to go deeper

- [How a sales invoice connects to Finance →](/docs/finance) — invoicing generated from Sales flows straight into Finance's invoicing
    `,
  },
  {
    slug: "retail-and-restaurant",
    categorySlug: "pos",
    title: "Point of Sale: Retail & Restaurant",
    summary: "How POS handles fast, in-person selling for both retail counters and restaurant tables.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
Point of Sale (POS) is built for fast, in-person selling — whether that's a retail counter or a restaurant table, on the same underlying system.

## What POS does here

POS handles selling face-to-face, in real time. A retail shop ringing up items at a counter and a restaurant taking orders at a table are different workflows, but they run on the same system underneath.

## Shifts

Before taking any sales, a cashier opens a shift with a starting cash amount — the float they're starting with. At the end of the shift, it's closed with a reconciliation: what should be in the till, checked against what was actually taken.

[screenshot: A shift reconciliation showing the starting float against actual takings]

## Transactions

Ringing up a sale is straightforward: add the items, accept payment, and the transaction is done. Multiple payment methods are supported, and every sale produces a receipt — printed or emailed.

## Restaurant-specific: tables & orders

In a restaurant, an order is assigned to a table. From there, it's sent to a kitchen display screen, so kitchen staff can see exactly what needs to be prepared.

[screenshot: An order sent to a kitchen display screen]

## Restaurant-specific: splitting a bill

One table's order doesn't have to be paid as a single bill. It can be split into separately payable parts — for example, one per guest — so each person can pay for just their share.

## Restaurant-specific: modifiers, tips, holding an order

Menu items can carry modifiers — priced options like size or extra toppings — added on top of the base price. An order can also carry a tip, kept separate from the bill total. And if a table isn't ready to pay yet, their order can be held or parked aside and recalled later without losing anything that's already been entered.

## Where to go deeper

Every POS sale connects to the rest of VroduxERP automatically: stock for the items sold is deducted in [Inventory](/docs/inventory), and the sale is reflected in [Finance](/docs/finance) reporting.
    `,
  },
  {
    slug: "boards-sprints-issues",
    categorySlug: "project-management",
    title: "Project Management: Boards, Sprints & Issues",
    summary: "How projects, boards, issues and sprints fit together — and who gets to see a project at all.",
    readTime: 5,
    order: 1,
    placeholder: false,
    body: `
Project Management is where you organize and track work that has a clear start, an end, and a team working on it together.

## What Project Management does here

Work is tracked as projects. Each project is broken down onto a board, and — if you want extra structure — issues within a project can optionally be grouped into time-boxed sprints.

## Projects & boards

Every project has its own kanban-style board: a visual layout of columns you define yourself. A simple setup might be To Do, In Progress, and Done, but the columns are yours to customize to match how your team actually works.

[screenshot: A project board with customizable columns]

## Issues

An issue is the actual unit of work — a task or piece of work to be done. Issues are created, assigned to someone, and moved across the board as they progress from one column to the next. Anyone involved can comment on an issue, so discussion about the work stays attached to it.

[screenshot: An issue showing its assignee and comments]

## Sprints

If you want to plan work in time-boxed chunks, issues can optionally be grouped into a sprint — a defined period during which a set of issues is planned to be completed. Not every project has to use sprints; it's there for teams that want that extra layer of planning.

## Who can access a project

A project has its own membership list, separate from broader role permissions. People are added to a project as an owner, a member, or a viewer, and only people on that list can see or work on the project at all. Having a general role in VroduxERP isn't enough on its own — someone also needs to actually be added to a specific project before they can access it.

[screenshot: A project's membership list showing owner, member, and viewer roles]

## Where to go deeper

- [Managing project membership →](/docs/project-management/managing-membership) — adding and removing people from a project, and changing their role
    `,
  },
  {
    slug: "case-management",
    categorySlug: "visa-services",
    title: "Visa Services: Case Management",
    summary: "How a visa case tracks an applicant — or a whole family — from first contact through to the visa being issued.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
Visa Services is where a visa consultancy tracks every case, from the first conversation with a client through to the visa actually being issued.

## What Visa Services does here

A case follows one visa application from first contact all the way to the visa being issued — whether that's for a single applicant or a whole family applying together.

## Cases & applicants

A case can carry one applicant, or several — for example, a family applying together on a single case. Each applicant has their own passport and personal details recorded individually, even when they're grouped under the same case.

[screenshot: A case showing multiple applicants, each with their own passport details]

## Case status

A case moves through a clear set of stages as it progresses: draft, documents pending, documents complete, submitted, in review, approved, and issued. If something is rejected along the way, the case can move back for rework rather than being treated as dead.

## Document checklist

The visa type you choose for a case — employment, family, or visit, for example — automatically generates the document checklist that case needs. Each document on that checklist is tracked individually, as pending, received, verified, rejected, or expired, so you always know exactly what's still missing and what's already sorted.

[screenshot: A case's document checklist showing each document's status]

## Renewals

Passport and document expiry dates are tracked automatically, with a dedicated view showing what's coming due for renewal soon — so an expiring passport or document doesn't get missed.

## Connecting to the rest of the business

A case doesn't have to sit on its own. It can be linked to an existing CRM account, and a Finance invoice for the service fee can be generated directly from the case.

## Where to go deeper

- [The visa types catalogue →](/docs/visa-services/visa-types) — standard fees and expected processing times per visa type
- [Government channel connections →](/docs/visa-services/government-channels) — how cases connect to government submission channels
    `,
  },
  {
    slug: "properties-leases-rent",
    categorySlug: "real-estate",
    title: "Real Estate: Properties, Leases & Rent",
    summary: "How properties, units and lease contracts work together to keep rent collection on schedule automatically.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
Real Estate is where you manage the properties you own or manage, who's renting each unit, and making sure rent actually gets collected on time.

## What Real Estate does here

Real Estate keeps track of your properties, which units are occupied and by whom, and the rent schedule behind every lease — so collecting rent doesn't depend on anyone remembering to chase it manually.

## Properties & units

A property contains one or more units. Each unit is either vacant or currently leased to a tenant, so at any point you can see exactly what's occupied and what's available.

[screenshot: A property showing its units and their vacant/leased status]

## Lease contracts

A lease contract has a start date, an end date, and a payment frequency — monthly, quarterly, semi-annual, or annual, depending on what you've agreed with the tenant.

## Automatic rent schedules

Once a lease is set up, the system automatically generates the full schedule of rent installments due over the entire lease term — individual dated installments, not just one lump total. Nobody has to sit down and calculate a payment schedule by hand.

[screenshot: A lease's automatically generated rent installment schedule]

## Reminders

Automatic reminder emails go out at the right moments: before rent is due, when a payment is overdue, and before a lease is about to expire — so nothing slips through simply because no one checked.

## Recording payments

Each rent installment is tracked individually — as pending, partially paid, paid, or overdue — so marking an installment as paid, and seeing at a glance what's still outstanding across all your leases, is straightforward.

[screenshot: A rent schedule showing installments marked pending, paid, and overdue]

## Where to go deeper

- [Configuring reminders →](/docs/real-estate/reminder-settings) — setting the reminder schedule and who receives them
    `,
  },
  {
    slug: "overview",
    categorySlug: "industry-packs",
    title: "Industry Packs: B2B, Education, Healthcare, Insurance & More",
    summary: "A quick look at each industry pack, and what it adds on top of the core modules.",
    readTime: 3,
    order: 1,
    placeholder: false,
    body: `
On top of the core modules — CRM, HR, Finance, Inventory, Purchase, Sales, POS, Project Management, Visa Services, and Real Estate — some businesses need a bit more. That's what industry packs are for: an extra set of features tailored to how a specific kind of business actually works.

## B2B

Built for ongoing business-to-business relationships. It tracks proposals, the contracts that follow once a deal is agreed, and support tickets for keeping those accounts running smoothly afterward.

## Education

Built for schools and training providers. It tracks admissions inquiries, enrolled students, and which courses or programs each student is enrolled in.

## Healthcare

Built for clinics and healthcare providers. It tracks patients, their appointments, and their treatment plans.

## Insurance

Built for insurance businesses. It tracks policies, renewals, and claims — claims go through an approval step before they're settled.

## Construction

Built for construction businesses. It tracks construction projects, bills of quantities, and the contractors working on them.

## Hospitality

Built for hotel-style businesses. It tracks rooms and bookings.

## One workspace, both

An industry pack isn't a replacement for the core modules — it sits alongside them. A workspace can combine any industry pack with any of the core modules it needs, and which pack, if any, to include is one of the choices made during onboarding.
    `,
  },
  {
    slug: "overview",
    categorySlug: "reports",
    title: "Reports: One Place for Every Number",
    summary: "Where every report you're allowed to see lives — organized by module, exportable, and scoped to your access.",
    readTime: 5,
    order: 1,
    placeholder: false,
    body: `
Reports is where you go to check the numbers — instead of hunting through each module separately for the report you need.

## What Reports does here

Reports is a central hub that gathers every report you're allowed to see, organized by module, all in one place. Rather than opening CRM for one number and Inventory for another, you check them here.

[screenshot: The Reports hub, listing reports grouped by module]

## What shows up depends on you

Not everyone sees the same list. A report only appears here if your workspace's plan actually includes that module. And within a report, the data you see is limited by your role and team permissions — the same way it is everywhere else. For example, a team lead sees their team's figures, not the whole company's.

## CRM's deeper reports

CRM contributes a set of its own analytical reports:

- Sales pipeline
- Win/loss trends
- Lead source performance
- Lead-to-customer conversion funnel
- Sales velocity — how quickly deals move through each stage
- Team performance
- Account revenue

## Everyday module reports

It's not just CRM. Most modules you have enabled — Point of Sale, Inventory, and others — also contribute their own day-to-day operational reports into the same hub, so the day-to-day numbers and the deeper analytical ones live in one place.

[screenshot: An operational report from Point of Sale or Inventory, shown in the Reports hub]

## Exporting

Every report, wherever it comes from, can be exported — as a CSV file or as a PDF.

## Where to go deeper

Each module's own article has more context on what a given report is actually measuring: [CRM](/docs/crm), [HR](/docs/hr), [Finance](/docs/finance), [Inventory](/docs/inventory), [Point of Sale](/docs/pos).
    `,
  },
  {
    slug: "overview",
    categorySlug: "file-manager",
    title: "File Manager: Finding Your Documents",
    summary: "Where to find a document that was attached to a record elsewhere in VroduxERP.",
    readTime: 4,
    order: 1,
    placeholder: false,
    body: `
File Manager is where you go when you know a document was attached to something — a lead, an opportunity, a record — but you can't remember exactly where.

## What File Manager does here

Instead of opening each record one at a time to check for attachments, File Manager gives you one browsable library of every document that's been attached to your records.

[screenshot: The File Manager library, showing documents grouped by module]

## How it's organized

Documents are organized by module first, then by who owns the records they belong to, then by document type. If you already know the file's name, a search box lets you jump straight to it instead of browsing.

## Visibility follows your access

You only see documents attached to records you're actually allowed to see. File Manager follows the same role and team rules as everywhere else in VroduxERP — depending on your role, that might mean your own records, your team's, or everyone's.

## How a document gets there

Documents aren't uploaded through File Manager itself. They're attached from inside a specific record's own Documents area — for example, from a CRM lead or opportunity. File Manager is simply where you go afterward to find what's already been attached, across every record, in one place.

[screenshot: A record's own Documents area, where a file is attached]

## Where to go deeper

More record types will get their own document storage over time, expanding what shows up here.
    `,
  },
  {
    slug: "ask-it-confirm-it",
    categorySlug: "ai-assistant",
    title: "AI Assistant: Ask It, Confirm It",
    summary: "What the AI Assistant can do, and why nothing is ever saved without you confirming it first.",
    readTime: 5,
    order: 1,
    placeholder: false,
    body: `
The AI Assistant is a chat you can ask questions or give instructions to, right inside VroduxERP.

## What the assistant does

The assistant is a chat interface that understands your workspace's own data — across every module you use. You can ask it questions, or ask it to do something, and it works from your actual records, not generic answers.

## Looking things up vs. making changes

There's a clear line between the two things the assistant can do. Asking it a question — how many leads came in this week, for example — never touches your data. It just looks things up and answers you. Creating or changing something, on the other hand, always goes through a confirmation step first. Nothing gets saved just because you asked for it.

## The confirmation step, in detail

This is the part worth understanding properly. Before the assistant creates or changes anything, it shows you exactly what it's about to do — as a plain, reviewable list of the fields and values involved. You can look it over like you would any form. Nothing happens until you explicitly approve it. And if it's not right, you can reject it instead, and nothing changes.

[screenshot: The assistant showing a field-by-field summary awaiting confirmation]

## It only does what you're allowed to do

The assistant works within your own role and permissions — the same ones that apply to you everywhere else in VroduxERP. It can't do anything on your behalf that you couldn't do yourself if you were doing it manually.

## What it won't do

Two things are off-limits, on purpose. The assistant doesn't delete records. And it doesn't perform point-of-sale actions — things like ringing up a sale, processing a void, or issuing a refund all stay at the till, where they belong.

## Where to find it

The assistant is reachable from a floating button, available from anywhere in the product — on both the web app and the mobile app.

[screenshot: The floating assistant button, visible from anywhere in the app]
    `,
  },
  {
    slug: "whats-on-your-phone",
    categorySlug: "mobile-app",
    title: "The Mobile App: What's On Your Phone",
    summary: "What the mobile app covers, what it's built specifically for, and what intentionally stays on the web app.",
    readTime: 7,
    order: 1,
    placeholder: false,
    body: `
The mobile app puts VroduxERP in your pocket — not a full copy of the web app, but a companion built for what actually makes sense away from a desk.

## What the mobile app is for

Think of it as a companion: looking things up, approving requests, and handling the specific actions that genuinely make sense when you're on the go. It's not trying to be a smaller version of every web screen — it's built around what you actually need on your phone.

## Signing in

You sign in with the same account you use on the web app — same role, same permissions, including two-factor authentication if you have it set up. Nothing about your access changes just because you're on your phone.

## What's covered

The mobile app covers a lot of ground:

- CRM — your leads and your pipeline
- HR — your own attendance, leave, and payslips; if you're HR staff, also the employee directory, recruitment, and performance reviews
- Approvals — a combined inbox covering leave, purchase, sales returns, and payroll, all in one place
- Read-access lookups across Inventory, Sales, Purchase, Finance, Project Management, Visa Services, Real Estate, and Reports

[screenshot: The combined Approvals inbox showing pending requests across modules]

## Built specifically for a phone

Two things exist because they genuinely make sense on a phone, not just as a smaller web screen:

- Scanning a barcode with your camera to check out a Point of Sale sale or receive a delivery
- Working through your pending approvals without needing a laptop

[screenshot: Scanning a barcode with the phone's camera]

## What's kept on the web app, on purpose

Not everything lives on mobile, and that's deliberate. Creating records that need a lot of fields — a new employee, a quotation, a purchase order built from scratch — stays on the web app, where there's room for them. The same goes for full administrative work: managing users, roles, company settings, and billing. Mobile is built around lookups, approvals, and a handful of actions that genuinely belong on a phone.

## Your account, from your phone

Your own account settings travel with you: your profile, your password, and two-factor authentication setup. There's also a "My Devices" screen listing every device currently signed into your account — so if something looks unfamiliar, you can sign it out remotely. You can sign out any device except the one you're currently using.

[screenshot: The My Devices screen listing active sessions]

## The AI Assistant on mobile

The AI Assistant is available on mobile too, from the same floating button as on web — and it works the same way: nothing is created or changed without you confirming it first.

## Where to go deeper

- [Downloading the app →](/docs/mobile-app/download) — a direct link to the app once it's available for download
    `,
  },
  {
    slug: "users-security-plan",
    categorySlug: "settings",
    title: "Settings: Users, Security & Your Plan",
    summary: "Where to configure your company profile, who has access, workspace security, and your billing plan.",
    readTime: 6,
    order: 1,
    placeholder: false,
    body: `
Settings is where whoever administers your workspace goes to configure everything that isn't day-to-day module work.

## What lives in Settings

Settings brings together four things in one place: your company profile, who has access to your workspace, how secure it is, and your subscription.

## Company profile

Your company profile covers your company name, legal name, address, and tax registration number, plus your logo. It also includes your operating currency — the currency used across the product, on invoices, quotations, and reports.

[screenshot: The company profile settings screen]

## Users, roles & teams

Inviting a teammate and assigning them a role happens here. A role controls what someone can access, module by module. Some modules also support team-based visibility, where users are grouped into teams, each with a team lead.

[screenshot: A user list showing each person's assigned role]

## Fine-tuning one person's access

Sometimes a role almost fits, but not quite. Rather than creating a whole new role for one person, you can adjust an individual user directly — granting them one extra permission their role wouldn't normally include, or withholding a specific permission their role would normally grant.

## Security

A set of security controls apply across the workspace:

- Password rules — a minimum length, complexity requirements, and an expiry period
- A maximum number of failed login attempts before an account is locked out
- How long a session stays signed in before it times out
- An optional list of allowed IP addresses
- Two-factor authentication, using an authenticator app plus one-time backup codes in case you lose access to it

[screenshot: The security settings screen showing password and two-factor authentication options]

## Billing & your plan

Plans differ by how many users they include and which modules come with them. Before committing to a paid plan, your trial period is shown as a countdown, so you always know how much time is left. Changing your plan, viewing past invoices, and updating your payment method are all handled yourself, right from this section — no need to contact anyone.

## Where to go deeper

- [The roles & permissions matrix in depth →](/docs/settings/roles-permissions-matrix) — a full walkthrough of what each role can do, module by module
    `,
  },
];

export function getCategory(slug: string): DocsCategory | undefined {
  return docsCategories.find((c) => c.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): DocsArticle[] {
  return docsArticles
    .filter((a) => a.categorySlug === categorySlug)
    .sort((a, b) => a.order - b.order);
}

export function getArticle(categorySlug: string, articleSlug: string): DocsArticle | undefined {
  return docsArticles.find(
    (a) => a.categorySlug === categorySlug && a.slug === articleSlug
  );
}

export function getNextArticle(current: DocsArticle): DocsArticle | undefined {
  const siblings = getArticlesByCategory(current.categorySlug);
  const idx = siblings.findIndex((a) => a.slug === current.slug);
  return idx >= 0 ? siblings[idx + 1] : undefined;
}
