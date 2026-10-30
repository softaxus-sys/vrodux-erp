import Link from "next/link";
import {
  ArrowRight, BookOpen, Building2, Calendar, CheckCircle2, ChevronDown, Code2, FileSpreadsheet, Globe2, History, Inbox,
  LayoutDashboard, ListChecks, Megaphone, MessageSquare, Table2, Target, UserCheck, Users, Webhook, type LucideIcon,
} from "lucide-react";
import { JsonLd } from "@/components/demos/json-ld";
import { DemoCta } from "@/components/demos/demo-cta";
import { WatchDemo } from "@/components/demos/watch-demo";
import { FlowDiagram } from "@/components/modules/flow-diagram";
import { BrowserFrame } from "@/components/home/panel-art";
import { GRID_STYLE, PANEL, SectionHeading, WRAP, pill, tone } from "@/components/home/ui";
import { ThemedShotImage } from "@/components/sections/themed-shot";
import { Badge } from "@/components/ui/badge";
import { getArticlesByCategory } from "@/components/docs/docs-data";
import type { GalleryShot } from "@/lib/module-shots";
import { SITE, breadcrumbLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const PAGE = `${SITE}/features/crm`;

const indicators = ["Multi-Source Lead Capture", "Centralized Lead Management", "Sales Pipeline Tracking", "Automated Lead Workflows"];

const valueCards: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: LayoutDashboard, title: "Centralized Lead Management", text: "Keep customer enquiries and lead information organized in one CRM environment." },
  { icon: Inbox, title: "Automatic Lead Capture", text: "Bring leads from supported sources into your CRM using available integrations and configured workflows." },
  { icon: UserCheck, title: "Lead Assignment", text: "Organize lead ownership and distribution through supported assignment workflows." },
  { icon: Target, title: "Sales Pipeline Visibility", text: "Track opportunities through defined sales stages and monitor progress." },
  { icon: ListChecks, title: "Follow-Up Management", text: "Organize follow-up activities and maintain visibility into outstanding customer interactions." },
  { icon: History, title: "Customer Relationship History", text: "Maintain organized customer and lead records to support more consistent communication." },
];

/** Labels follow the product documentation: no source is described as more automatic than it is. */
const sources: { icon: LucideIcon; title: string; label: string; text: string }[] = [
  { icon: Building2, title: "Property Finder Lead Management", label: "Supported integration", text: "Bring relevant property enquiries into your CRM through the supported Property Finder integration or configured lead import workflow. Help sales teams organize incoming enquiries and maintain lead records." },
  { icon: Building2, title: "Bayut Lead Management", label: "Supported integration (pull)", text: "Centralize relevant enquiries from Bayut through supported integration or configured import workflows, helping property consultants organize prospects and manage follow-ups." },
  { icon: Megaphone, title: "Facebook and Instagram Lead Capture", label: "Direct integration", text: "Organize advertising enquiries from supported Meta lead generation workflows within your CRM, helping sales teams review incoming prospects and manage follow-up activities." },
  { icon: Globe2, title: "Website and Form Lead Capture", label: "Hosted embeddable form", text: "Bring customer enquiries collected through supported forms into the CRM to help centralize lead records and reduce manual data handling." },
  { icon: Table2, title: "Google Sheets and Google Forms Lead Import", label: "Connected through configured workflow", text: "Organize lead information collected in spreadsheets and forms and bring supported records into Vrodux CRM using the available script-based workflow." },
  { icon: FileSpreadsheet, title: "Bulk Lead Import Using CSV and Excel", label: "Supported file import", text: "Import existing customer and prospect records using supported spreadsheet formats, with automatic column matching and duplicate detection, to help teams move lead data into a centralized CRM." },
  { icon: Webhook, title: "API, Webhooks, Zapier and Make", label: "Available upon configuration", text: "Connect other tools through custom API and webhooks, or through Zapier and Make, when your lead source is not covered by a built-in connection." },
  { icon: Calendar, title: "Calendly Bookings", label: "Supported integration", text: "Bring meeting bookings into the CRM so the people who book time with your team are captured as leads." },
];

const importFlow = [
  { icon: "Target", title: "Lead generation", text: "A potential customer submits an enquiry through an enabled source such as an advertising form, website or supported property portal." },
  { icon: "Inbox", title: "Lead collection", text: "The configured integration or import workflow collects the available lead information." },
  { icon: "ClipboardList", title: "CRM record creation", text: "Lead details are organized into CRM records using the available field mapping and import functionality." },
  { icon: "Users", title: "Assignment and organization", text: "Leads are organized and assigned through the supported CRM workflow." },
  { icon: "Trophy", title: "Follow-up and conversion", text: "Sales representatives review the lead, update its status, record interactions and move opportunities through the sales pipeline." },
] as const;

const leadFeatures = [
  "Lead profiles and contact information.",
  "Lead source identification where available, including campaign, ad and form for advertising leads.",
  "Lead status management on a drag-and-drop board.",
  "Automatic 0–100 lead score with Hot, Warm and Cold bands.",
  "Lead ownership and assignment.",
  "Search and status filters.",
  "Lead activity records on a single timeline.",
  "Duplicate detection when importing.",
];

const assignmentFeatures = [
  "Assign leads to sales representatives, one at a time or in bulk.",
  "Organize leads by responsible team members and teams.",
  "Track lead ownership; every handover is recorded.",
  "Notify supervisors when work lands on their team member.",
  "Monitor lead status.",
  "Control visibility: everyone, team or assigned-only.",
];

const pipelineStages = [
  { name: "New", leads: ["Sample lead A", "Sample lead B"] },
  { name: "Contacted", leads: ["Sample lead C"] },
  { name: "Qualified", leads: ["Sample lead D", "Sample lead E"] },
  { name: "Converted", leads: ["Sample lead F"] },
];

const followUpFeatures = [
  "Calls, meetings, emails, notes and tasks.",
  "Tasks you can assign to a teammate, who is notified.",
  "Lead status updates.",
  "Sales activity visibility on one timeline.",
  "Contact information management.",
  "Customer history across leads, deals and accounts.",
];

const realEstateCards = [
  { title: "Property Portal Lead Management", text: "Organize relevant enquiries received through supported property portal workflows." },
  { title: "Centralized Prospect Records", text: "Maintain organized lead and customer information in one CRM." },
  { title: "Lead Assignment", text: "Organize responsibilities between agents and sales representatives." },
  { title: "Sales Pipeline Management", text: "Track opportunities through sales stages." },
  { title: "Lead Source Visibility", text: "Understand which available sources are generating enquiries." },
  { title: "Follow-Up Management", text: "Help representatives organize ongoing prospect communication." },
];

const businessTypes = [
  { title: "Real Estate Agencies", text: "Organize property enquiries, prospect records, agent assignments and sales opportunities." },
  { title: "Sales Teams", text: "Manage incoming prospects, customer interactions, follow-ups and sales pipeline activities." },
  { title: "SMEs and Growing Businesses", text: "Centralize customer records and create more organized sales processes." },
  { title: "Marketing and Lead Generation Teams", text: "Manage leads from supported campaigns and sources while maintaining visibility into lead acquisition channels." },
];

const reports = ["Sales pipeline", "Win/Loss", "Team performance", "Lead source ROI", "Lead conversion", "Sales velocity", "Activities", "Account revenue"];

const reportingFeatures = [
  "Lead overview.",
  "Lead source information where available.",
  "Lead status reporting.",
  "Sales pipeline visibility.",
  "Lead assignment visibility.",
  "Sales activity monitoring.",
  "Customer record overview.",
];

const differentiators = [
  { title: "Centralized Lead Management", text: "Bring supported lead sources and customer records into one organized environment." },
  { title: "Multiple Lead Import Options", text: "Manage lead data through available integrations and supported file-import workflows." },
  { title: "Sales Team Visibility", text: "Maintain visibility into lead ownership, status and sales activities." },
  { title: "Organized Sales Pipelines", text: "Track opportunities through defined sales processes." },
  { title: "Integrated ERP Environment", text: "Connect customer management with relevant business operations through the Vrodux platform." },
  { title: "Flexible Business Configuration", text: "Configure supported workflows around the needs of your organization." },
];

const faqs: { q: string; a: string }[] = [
  { q: "What is automatic lead import in CRM?", a: "Automatic lead import in CRM refers to collecting customer enquiries and prospect information from supported external sources and bringing them into a centralized customer relationship management system. Depending on the integration, this can happen through APIs, webhooks or configured automation workflows." },
  { q: "Can Vrodux CRM automatically import leads?", a: "Vrodux supports lead capture and import workflows from supported sources, helping businesses centralize customer enquiries. The availability and automation level of each source depend on its integration and configuration." },
  { q: "Can I import leads from Property Finder into CRM?", a: "Vrodux provides workflows for managing Property Finder-related lead information where the required integration or supported import configuration is available. Contact the Vrodux team to confirm the appropriate setup for your account." },
  { q: "Does Vrodux CRM support Bayut lead management?", a: "Vrodux supports centralized lead management for businesses handling property enquiries. The specific Bayut connection method and automation capabilities should be confirmed based on the available integration configuration." },
  { q: "Can I capture Facebook and Instagram leads in a CRM?", a: "Businesses can centralize leads generated through supported Meta lead generation workflows. The connection method and required configuration depend on the available integration." },
  { q: "Can I import leads from Excel or CSV files?", a: "Vrodux provides supported bulk-import workflows for bringing existing customer and prospect information into the CRM. Supported file formats, field mapping and import requirements should be confirmed for the current version." },
  { q: "How does CRM lead assignment work?", a: "CRM lead assignment organizes incoming enquiries by assigning ownership to relevant sales representatives or teams. Available assignment methods depend on the CRM configuration and supported features." },
  { q: "Can Vrodux CRM manage a sales pipeline?", a: "Vrodux CRM provides sales pipeline and lead status management capabilities that help businesses organize opportunities and monitor progress through their sales process." },
  { q: "Is Vrodux suitable for real estate agencies in Dubai?", a: "Vrodux CRM can support real estate teams that need to organize enquiries, manage prospect records, track lead ownership and maintain visibility into sales activities. Specific property portal integration requirements can be discussed during a demonstration." },
  { q: "Can Vrodux CRM be used by businesses outside the UAE?", a: "Vrodux is designed as a business ERP platform with configurable capabilities. Businesses should discuss their regional, operational, language and integration requirements with the Vrodux team." },
  { q: "What is the difference between lead management and CRM?", a: "Lead management focuses on collecting, organizing, assigning and tracking potential customers before and during the sales process. CRM covers a broader customer relationship lifecycle, including lead management, customer records, sales activities and ongoing relationship management." },
  { q: "Can each salesperson only see their own leads?", a: "Yes. Access has three tiers per area: everyone, team (a team lead sees their team) and assigned-only (a rep sees only their own records)." },
  { q: "How can I see a Vrodux CRM demonstration?", a: "You can request a Vrodux demonstration to explore lead capture, import workflows, customer management, sales pipelines and supported integrations. The team can review your business requirements and demonstrate relevant capabilities." },
];

function CtaRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <Link href="/book-demo" className={cn(pill.base, pill.primary, "group")}>
        <Calendar className="h-4 w-4" aria-hidden />
        Book a Free Demo
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </Link>
      <Link href="/contact" className={cn(pill.base, pill.outline)}>
        <MessageSquare className="h-4 w-4" aria-hidden />
        Contact Our Team
      </Link>
    </div>
  );
}

function CheckList({ items, cols = true }: { items: string[]; cols?: boolean }) {
  return (
    <ul className={cn("mt-6 grid gap-x-6 gap-y-2.5", cols && "sm:grid-cols-2")}>
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5 text-[15px] leading-snug text-foreground/85">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600 dark:text-emerald-400" aria-hidden />
          {i}
        </li>
      ))}
    </ul>
  );
}

function Screen({ shot, alt, label, priority }: { shot?: GalleryShot; alt: string; label: string; priority?: boolean }) {
  if (!shot) return null;
  return (
    <BrowserFrame url={`erp.vrodux.com / ${label}`} className="shadow-xl shadow-black/15">
      <ThemedShotImage shot={shot.shot} alt={alt} sizes="(min-width: 1024px) 640px, 100vw" priority={priority} zoomable={!priority} />
    </BrowserFrame>
  );
}

function Block({ id, eyebrow, title, toneIndex = 0, children, side, reverse }: {
  id: string;
  eyebrow: string;
  title: string;
  toneIndex?: number;
  children: React.ReactNode;
  side?: React.ReactNode;
  reverse?: boolean;
}) {
  const t = tone(toneIndex);
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 py-14 md:py-20">
      <div className={cn(WRAP, side && "grid items-center gap-10 lg:grid-cols-2 lg:gap-16")}>
        <div className={cn(reverse && side && "lg:order-2")}>
          <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", t.card, t.icon)}>{eyebrow}</span>
          <h2 id={`${id}-h`} className="mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl">{title}</h2>
          {children}
        </div>
        {side && <div className={cn(reverse && "lg:order-1")}>{side}</div>}
      </div>
    </section>
  );
}

export async function CrmPage({ shots, docsCategory }: { shots: GalleryShot[]; docsCategory: string }) {
  const hero = shots.find((s) => s.id === "slot-crm");
  const docShots = shots.filter((s) => s.id.startsWith("/docs/crm"));
  const reportShot = shots.find((s) => s.id === "slot-reports");
  const guides = getArticlesByCategory(docsCategory).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE}#webpage`,
        url: PAGE,
        name: "CRM Software with Automatic Lead Capture & Import | Vrodux",
        description: "Capture and import leads automatically from multiple sources with Vrodux CRM. Manage Property Finder, Bayut, Meta Ads and sales pipelines in one platform.",
        isPartOf: { "@type": "WebSite", name: "Vrodux ERP", url: SITE },
        breadcrumb: { "@id": `${PAGE}#breadcrumb` },
        about: { "@id": `${PAGE}#software` },
      },
      {
        ...breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "CRM", path: "/features/crm" },
        ]),
        "@id": `${PAGE}#breadcrumb`,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${PAGE}#software`,
        name: "Vrodux CRM",
        url: PAGE,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "CRM with lead capture and import, lead management, assignment, sales pipeline tracking and reporting, part of the Vrodux ERP platform.",
        publisher: { "@type": "Organization", name: "SoftAxis Technologies LLC", url: SITE },
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1. Hero */}
      <section aria-labelledby="hero-h" className="px-3 pb-4 pt-[4.5rem] sm:px-5 lg:px-6">
        <div className={cn("mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]", tone(0).card)}>
          <div className="grid items-center gap-10 px-6 py-12 sm:px-12 lg:grid-cols-[1.05fr_1fr] lg:px-16 lg:py-16">
            <div className="rise">
              <nav aria-label="Breadcrumb" className="text-sm text-foreground/70">
                <Link href="/" className="hover:underline">Home</Link>
                <span className="mx-2" aria-hidden>/</span>
                <Link href="/features" className="hover:underline">Features</Link>
                <span className="mx-2" aria-hidden>/</span>
                <span aria-current="page" className="font-medium text-foreground">CRM</span>
              </nav>
              <Badge variant="outline" className="mt-5 bg-white/60 text-[11px] tracking-wider dark:bg-white/10">CUSTOMER RELATIONSHIP MANAGEMENT</Badge>
              <h1 id="hero-h" className="mt-4 text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                CRM Software with Automatic Lead Capture and Management
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">
                Capture, import and manage business leads from multiple channels with Vrodux CRM. Bring customer enquiries into one organized platform, automate supported lead assignment workflows, track sales pipelines and help your team manage every opportunity from first contact to conversion.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/book-demo" className={cn(pill.base, pill.primary, "group")}>
                  <Calendar className="h-4 w-4" aria-hidden />
                  Book a Free Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link href="#lead-import" className={cn(pill.base, pill.outline)}>Explore CRM Features</Link>
                <DemoCta slug="crm" />
              </div>
              <p className="mt-4 text-sm text-foreground/70">One connected workspace for lead capture, customer management and sales pipeline visibility.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {indicators.map((i) => (
                  <li key={i} className="flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-sm font-medium dark:bg-white/10">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rise relative" style={{ ["--d" as string]: 2 }}>
              <Screen shot={hero} alt="Vrodux CRM dashboard showing leads, pipeline and activity" label="crm" priority />
            </div>
          </div>
        </div>
      </section>

      <div id="crm">
        {/* 2. Value proposition */}
        <section aria-labelledby="value-h" className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="Why a CRM"
              title={<span id="value-h">Manage Every Lead from One Centralized CRM</span>}
              description="Business enquiries arrive from websites, advertising campaigns, property portals, social platforms, forms and other channels."
            />
            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>When leads are managed through separate spreadsheets, email inboxes and messaging applications, sales teams can struggle to maintain a consistent view of customer interactions.</p>
              <p>Vrodux CRM helps bring supported lead sources and customer records into one centralized platform, allowing businesses to organize enquiries, assign responsibilities, track progress and manage their sales pipeline.</p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {valueCards.map((c, i) => {
                const t = tone(i);
                return (
                  <li key={c.title} className={cn("rounded-3xl p-6", t.card)}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                      <c.icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-xl font-medium tracking-tight">{c.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{c.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 3. Automatic lead import */}
        <section id="lead-import" aria-labelledby="import-h" className="scroll-mt-24 py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="Lead sources"
              title={<span id="import-h">Automatic Lead Import and Capture from Multiple Sources</span>}
              description="Stop managing business enquiries across disconnected spreadsheets and platforms."
            />
            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>Vrodux CRM helps businesses centralize incoming leads from supported sources, making it easier for sales teams to review enquiries, organize customer information and follow up on opportunities.</p>
              <p>Whether enquiries originate from online advertising, property portals, website forms or imported spreadsheets, Vrodux provides a centralized environment for managing lead information.</p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sources.map((s, i) => (
                <li key={s.title} className="flex flex-col rounded-2xl border bg-card p-5">
                  <span className={cn("flex h-11 w-11 items-center justify-center rounded-full", tone(i).card)}>
                    <s.icon className={cn("h-5 w-5", tone(i).icon)} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-medium leading-snug tracking-tight">{s.title}</h3>
                  <span className="mt-2 inline-flex w-fit rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">{s.label}</span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
              Every source applies the same duplicate rules. How automatic each connection is depends on the source and its configuration, and file imports are uploaded manually. If a portal feed stops working, administrators receive an email and an in-app alert. Ask the team to confirm the setup for your accounts.
            </p>
            <CtaRow className="mt-8" />
          </div>
        </section>

        {/* 4. How it works */}
        <section aria-labelledby="how-h" className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="How it works"
              title={<span id="how-h">How Automatic CRM Lead Import Works</span>}
              description="The goal is to reduce disconnected lead handling and give sales teams a more consistent process for managing customer enquiries."
            />
            <div className="mt-12">
              <FlowDiagram steps={[...importFlow]} toneIndex={0} />
            </div>
          </div>
        </section>

        {/* 5. Lead management */}
        <Block
          id="lead-management"
          eyebrow="Lead management"
          title="Organize and Manage All Your Business Leads"
          toneIndex={2}
          side={<Screen shot={docShots[0]} alt={`Vrodux CRM lead management: ${docShots[0]?.caption ?? "lead list and board"}`} label="crm-leads" />}
        >
          <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>Once enquiries enter the CRM, teams need a structured way to review, categorize, prioritize and manage them.</p>
            <p>Vrodux CRM helps businesses maintain organized lead records and manage the information required for their sales process.</p>
          </div>
          <CheckList items={leadFeatures} />
        </Block>

        {/* 6. Assignment */}
        <section id="lead-assignment" aria-labelledby="assign-h" className="scroll-mt-24 py-14 md:py-20">
          <div className={cn(WRAP, "grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16")}>
            <div>
              <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", tone(3).card, tone(3).icon)}>Assignment</span>
              <h2 id="assign-h" className="mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl">Lead Assignment and Distribution for Sales Teams</h2>
            </div>
            <div>
              <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
                <p>As lead volumes grow, businesses need a clear process for ensuring that enquiries are managed by the appropriate sales representatives.</p>
                <p>Vrodux CRM supports lead organization and assignment workflows to help businesses manage responsibilities and maintain visibility into lead ownership.</p>
              </div>
              <CheckList items={assignmentFeatures} />
            </div>
          </div>
        </section>

        {/* 7. Pipeline */}
        <Block
          id="sales-pipeline"
          eyebrow="Pipeline"
          title="Track Every Opportunity with CRM Sales Pipeline Management"
          toneIndex={1}
          reverse
          side={
            <figure aria-label="Illustrative lead board">
              <div className="rounded-3xl border bg-card p-4 sm:p-5">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {pipelineStages.map((st, i) => (
                    <div key={st.name} className="rounded-2xl bg-muted/50 p-3">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span>{st.name}</span>
                        <span className={cn("rounded-full px-2 py-0.5", tone(i).card, tone(i).icon)}>{st.leads.length}</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {st.leads.map((l) => (
                          <div key={l} className="rounded-xl border bg-background p-2.5 text-xs">
                            <div className="font-medium">{l}</div>
                            <div className="mt-1 text-muted-foreground">Sample source</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                Illustration with sample data, based on the CRM lead board statuses. It is not a customer screenshot.
              </figcaption>
            </figure>
          }
        >
          <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>A lead is only the beginning of a sales relationship.</p>
            <p>Vrodux CRM helps teams organize opportunities through sales stages so that representatives and managers can understand where prospects are in the sales process. Leads move across the board from new to contacted, qualified and converted. A converted lead becomes an account, a contact and an opportunity in one step, and the deal then moves through the pipeline by drag and drop.</p>
          </div>
          <CheckList
            items={[
              "Review leads by stage.",
              "Track sales progress with forecast categories and weighted value.",
              "Organize pending opportunities, with several contacts per deal.",
              "Identify follow-up requirements.",
              "Record loss reasons to learn why deals are lost.",
              "Maintain visibility into sales activity.",
            ]}
          />
        </Block>

        {/* 8. Follow-up */}
        <Block
          id="follow-ups"
          eyebrow="Follow-up"
          title="Manage Customer Follow-Ups and Sales Activities"
          toneIndex={4}
          side={<Screen shot={docShots[1] ?? docShots[0]} alt={`Vrodux CRM activities and customer records: ${(docShots[1] ?? docShots[0])?.caption ?? "timeline"}`} label="crm-activities" />}
        >
          <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>Consistent follow-up is important when managing multiple customer enquiries and active sales opportunities.</p>
            <p>Vrodux CRM helps teams organize lead records and relevant follow-up activities so representatives can maintain visibility into ongoing conversations and outstanding tasks.</p>
          </div>
          <CheckList items={followUpFeatures} />
        </Block>

        {/* 9. Real estate */}
        <section id="real-estate-crm" aria-labelledby="re-h" className="scroll-mt-24 py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="Real estate"
              title={<span id="re-h">Real Estate CRM Software for Property Agencies and Brokers</span>}
              description="Real estate businesses often receive enquiries from several channels, including property portals, advertising campaigns, website forms and direct customer communication."
            />
            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>Without centralized lead management, property consultants can find it difficult to maintain visibility into new enquiries, follow-up responsibilities and ongoing sales opportunities.</p>
              <p>Vrodux CRM helps real estate teams organize supported lead sources, centralize prospect information, manage lead assignments and track sales activities through one CRM environment.</p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {realEstateCards.map((c, i) => (
                <li key={c.title} className={cn("rounded-3xl p-6", tone(i + 2).card)}>
                  <h3 className="text-xl font-medium tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{c.text}</p>
                </li>
              ))}
            </ul>
            <div className={cn(PANEL, "mt-10")}>
              <div className="absolute inset-0" style={GRID_STYLE} aria-hidden />
              <div className="relative px-6 py-10 sm:px-12">
                <h3 className="max-w-3xl text-2xl font-medium tracking-tight sm:text-3xl">Built for Real Estate Teams Managing Leads from Multiple Channels</h3>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">
                  Whether your agency receives enquiries through Property Finder, Bayut, digital campaigns or its own website, Vrodux helps bring supported lead workflows together for better sales visibility.
                </p>
                <Link href="/industries/real-estate" className={cn(pill.base, pill.outlineLight, "mt-6")}>
                  See Vrodux for real estate
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
            <CtaRow className="mt-8" />
          </div>
        </section>

        {/* 10. Business types */}
        <section aria-labelledby="types-h" className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading eyebrow="Who it is for" title={<span id="types-h">CRM Software for Different Types of Businesses</span>} />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {businessTypes.map((b, i) => (
                <li key={b.title} className="rounded-2xl border bg-card p-6">
                  <span className={cn("flex h-10 w-10 items-center justify-center rounded-full", tone(i).card)}>
                    {i === 0 ? <Building2 className={cn("h-5 w-5", tone(i).icon)} aria-hidden /> : i === 1 ? <Users className={cn("h-5 w-5", tone(i).icon)} aria-hidden /> : i === 2 ? <Code2 className={cn("h-5 w-5", tone(i).icon)} aria-hidden /> : <Megaphone className={cn("h-5 w-5", tone(i).icon)} aria-hidden />}
                  </span>
                  <h3 className="mt-4 text-lg font-medium tracking-tight">{b.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. Reporting */}
        <Block
          id="crm-reporting"
          eyebrow="Reporting"
          title="Understand Your Leads and Sales Pipeline"
          toneIndex={5}
          reverse
          side={<Screen shot={reportShot} alt="Vrodux reports hub with module-wise reports" label="reports" />}
        >
          <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>Sales managers need visibility into lead activity, customer acquisition and opportunity progress.</p>
            <p>Vrodux CRM helps businesses review available CRM information and monitor their sales processes through relevant reporting and dashboards. Eight CRM reports are built in: {reports.join(", ")}. Reports can be filtered by date, owner and stage and exported, and results respect each person&apos;s access level.</p>
          </div>
          <CheckList items={reportingFeatures} />
        </Block>

        {/* 12. ERP */}
        <section id="connected-erp" aria-labelledby="erp-h" className="scroll-mt-24 py-14 md:py-20">
          <div className={cn(WRAP, "grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16")}>
            <div>
              <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">Connected ERP</span>
              <h2 id="erp-h" className="mt-5 text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl">
                More Than a Standalone CRM — Connected with Your Business ERP
              </h2>
            </div>
            <div>
              <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
                <p>Customer relationships are only one part of running a business.</p>
                <p>
                  <Link href="/" className="font-medium text-brand-600 underline-offset-4 hover:underline dark:text-brand-300">Vrodux is an integrated ERP platform</Link>{" "}
                  designed to bring CRM together with other business management capabilities, helping organizations manage relevant customer, sales and operational information within a broader business environment.
                </p>
                <p>
                  Depending on the modules enabled, businesses can connect their CRM workflows with relevant sales, finance, inventory and operational processes. For example, quotations can be created from a lead or account using the <Link href="/features/sales" className="font-medium text-brand-600 underline-offset-4 hover:underline dark:text-brand-300">Sales module</Link>, and hospitality businesses can pair CRM with the <Link href="/industries/restaurants" className="font-medium text-brand-600 underline-offset-4 hover:underline dark:text-brand-300">restaurant ERP</Link> and <Link href="/features/pos" className="font-medium text-brand-600 underline-offset-4 hover:underline dark:text-brand-300">point of sale</Link>.
                </p>
              </div>
              <CheckList
                cols={false}
                items={[
                  "Centralized business information.",
                  "Connected sales and customer workflows.",
                  "Reduced reliance on disconnected business tools.",
                  "Broader business management through one ERP environment.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* 13. UAE */}
        <section aria-labelledby="uae-h" className="py-14 md:py-20">
          <div className={cn(WRAP, "grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16")}>
            <div>
              <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">UAE</span>
              <h2 id="uae-h" className="mt-5 text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl">CRM Software for Businesses in Dubai and the UAE</h2>
            </div>
            <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>Businesses across Dubai, Abu Dhabi, Sharjah and the wider UAE increasingly manage customer enquiries through multiple digital channels.</p>
              <p>Vrodux CRM helps businesses organize their lead capture, customer records, sales activities and follow-up processes through a centralized CRM environment.</p>
              <p>For real estate agencies, service providers and growing businesses, the platform provides a structured approach to managing customer enquiries and sales opportunities.</p>
            </div>
          </div>
        </section>

        {/* 14. Why */}
        <section aria-labelledby="why-h" className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="Why Vrodux"
              title={<span id="why-h">Why Choose Vrodux CRM for Lead and Customer Management?</span>}
              description="Vrodux CRM is part of a broader ERP platform designed to connect customer management with business operations."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((d) => (
                <li key={d.title} className="rounded-2xl border bg-card p-6">
                  <h3 className="text-lg font-medium tracking-tight">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              See how this fits your team on the <Link href="/pricing" className="underline-offset-4 hover:underline">pricing page</Link>: every module, including CRM, is available on every plan.
            </p>
          </div>
        </section>

        <WatchDemo slug="crm" className="py-6" />

        {/* Documentation guides (preserved from the previous page) */}
        {guides.length > 0 && (
          <section aria-labelledby="guides-h" className="py-14 md:py-20">
            <div className={WRAP}>
              <SectionHeading eyebrow="Learn" title={<span id="guides-h">Guides for Vrodux CRM</span>} description="Step-by-step documentation for capturing leads, working the pipeline and controlling who sees what." />
              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {guides.map((a, i) => (
                  <Link key={a.slug} href={`/docs/${a.categorySlug}/${a.slug}`} className="group rounded-2xl border bg-card p-6 transition-colors hover:border-brand-500/40">
                    <span className={cn("flex h-10 w-10 items-center justify-center rounded-full", tone(i).card)}>
                      <BookOpen className={cn("h-5 w-5", tone(i).icon)} strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="mt-4 font-medium leading-snug">{a.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{a.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                      Read the guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 15. FAQ */}
        <section aria-labelledby="faq-h" className="py-14 md:py-20">
          <div className={cn(WRAP, "grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20")}>
            <div>
              <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">FAQ</span>
              <h2 id="faq-h" className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em]">Frequently Asked Questions About CRM and Automatic Lead Import</h2>
            </div>
            {/* Native <details>: the answers are in the server-rendered HTML and work with keyboard and screen readers without JavaScript. */}
            <div className="divide-y border-y dark:divide-white/10 dark:border-white/10">
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg font-medium">{f.q}</h3>
                    <ChevronDown className="h-5 w-5 flex-none text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 16. Final CTA */}
        <section aria-labelledby="cta-h" className="px-3 pb-3 pt-6 sm:px-5 lg:px-6">
          <div className={PANEL}>
            <div className="absolute inset-0" style={GRID_STYLE} aria-hidden />
            <div className="relative px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
              <h2 id="cta-h" className="max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.035em] sm:text-5xl">Bring Your Leads, Customers and Sales Pipeline Together</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">Stop managing customer enquiries across disconnected systems.</p>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/85">
                Discover how Vrodux CRM can help your business centralize supported lead sources, organize customer information, manage sales responsibilities and track opportunities through one connected platform.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/book-demo" className={cn(pill.base, pill.light, "group")}>
                  <Calendar className="h-4 w-4" aria-hidden />
                  Book a Free Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link href="/contact" className={cn(pill.base, pill.outlineLight)}>
                  <MessageSquare className="h-4 w-4" aria-hidden />
                  Contact Our Team
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/75">Tell us where your leads come from and how your sales team works. We will walk you through relevant Vrodux CRM capabilities.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
