import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Boxes, Calculator, Calendar, CheckCircle2, ChefHat, ChevronDown, LineChart, MessageSquare,
  ShoppingCart, UtensilsCrossed, type LucideIcon,
} from "lucide-react";
import { JsonLd } from "@/components/demos/json-ld";
import { FlowDiagram } from "@/components/modules/flow-diagram";
import { BrowserFrame } from "@/components/home/panel-art";
import { GRID_STYLE, PANEL, SectionHeading, WRAP, pill, tone } from "@/components/home/ui";
import { ThemedShotImage } from "@/components/sections/themed-shot";
import { Badge } from "@/components/ui/badge";
import type { GalleryShot } from "@/lib/module-shots";
import { cn } from "@/lib/utils";

const SITE = "https://vrodux.com";
const PAGE = `${SITE}/industries/restaurants`;

const indicators = ["Integrated Restaurant POS", "Real-Time Inventory Visibility", "Connected Finance & Reporting"];

const valueCards: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: UtensilsCrossed, title: "Connected Restaurant Operations", text: "Connect sales, kitchen workflows, stock movements, purchasing and accounting within one business platform." },
  { icon: Boxes, title: "Better Inventory Visibility", text: "Monitor ingredient availability and stock movements to help teams manage replenishment and reduce avoidable stock discrepancies." },
  { icon: Calculator, title: "Recipe and Food Cost Management", text: "Maintain recipe information, ingredient quantities and associated costs to support menu planning and food cost visibility." },
  { icon: ChefHat, title: "Faster Order Coordination", text: "Connect order entry and kitchen workflows so teams can manage incoming orders and preparation status more effectively." },
  { icon: ShoppingCart, title: "Purchasing Control", text: "Organize supplier records, purchase orders and receiving activities." },
  { icon: LineChart, title: "Business Performance Insights", text: "Review sales, inventory, expenses and financial performance through centralized reporting." },
];

const kitchenSteps = [
  { title: "Order Placement", text: "Orders are entered through the restaurant POS workflow." },
  { title: "Kitchen Order Visibility", text: "Orders are made available to kitchen staff through the kitchen display workflow, where supported." },
  { title: "Preparation Tracking", text: "Kitchen teams review incoming orders and manage preparation status." },
  { title: "Order Completion", text: "Staff update order progress to support coordination between the kitchen and service team." },
];

const connectedFlow = [
  { icon: "UtensilsCrossed", title: "Customer order", text: "A customer places an order through the restaurant POS." },
  { icon: "ChefHat", title: "Kitchen workflow", text: "The order becomes available to the kitchen workflow for preparation and status management." },
  { icon: "Boxes", title: "Inventory and ingredients", text: "Relevant stock and ingredient information can be managed through connected inventory and recipe workflows." },
  { icon: "Receipt", title: "Billing and financial records", text: "Sales and payment information are recorded through the relevant ERP processes." },
  { icon: "BarChart3", title: "Management reporting", text: "Managers review available sales, stock, purchasing and financial information through reporting." },
] as const;

const businessTypes: { title: string; text: string }[] = [
  { title: "Restaurants", text: "Manage customer orders, POS, kitchen workflows, ingredients, purchasing and financial records." },
  { title: "Cafes and Coffee Shops", text: "Organize counter sales, menu items, inventory, purchasing and day-to-day cafe operations." },
  { title: "Quick Service Restaurants", text: "Coordinate billing, order workflows, kitchen preparation and inventory records." },
  { title: "Multi-Branch Restaurant Groups", text: "Maintain centralized visibility across configured restaurant locations and business operations." },
  { title: "Food and Beverage Businesses", text: "Connect relevant sales, stock, supplier and finance processes through ERP workflows." },
];

const differentiators = [
  { title: "Integrated ERP environment", text: "Connect relevant restaurant operations with finance and business management." },
  { title: "Connected POS and inventory", text: "Link sales activities with inventory management workflows." },
  { title: "Operational visibility", text: "Access relevant business information through centralized reporting." },
  { title: "Flexible business configuration", text: "Configure supported modules and workflows around business requirements." },
  { title: "Broader business management", text: "Expand beyond restaurant operations into other ERP functions as your business grows." },
];

const faqs: { q: string; a: string }[] = [
  { q: "What is restaurant ERP software?", a: "Restaurant ERP software is a business management platform that connects important restaurant operations such as point of sale, inventory, purchasing, recipe management, accounting and reporting. Instead of managing these activities through disconnected tools, restaurant operators can use an integrated system to maintain better operational visibility." },
  { q: "What is the difference between restaurant POS software and restaurant ERP software?", a: "Restaurant POS software primarily manages customer orders, billing and sales transactions. Restaurant ERP software covers a broader range of business operations, including POS, inventory, purchasing, supplier management, finance and reporting. An integrated ERP platform connects these activities so restaurant teams can manage more of their business from one system." },
  { q: "Can Vrodux ERP be used for restaurants and cafes?", a: "Vrodux provides restaurant-focused capabilities covering POS, kitchen workflows, inventory, recipe management, purchasing and financial operations. These capabilities can support restaurants, cafes and other food businesses depending on their operational requirements and configuration." },
  { q: "Does Vrodux include restaurant POS software?", a: "Yes. Vrodux includes a POS capability that supports restaurant billing and sales workflows and connects relevant sales activities with the wider ERP environment." },
  { q: "Can restaurant inventory and ingredient management be handled in Vrodux?", a: "Vrodux provides inventory management capabilities that help businesses maintain item records, monitor stock movements and organize purchasing-related inventory activities. Restaurant ingredient management can be structured through relevant item and recipe workflows." },
  { q: "Does Vrodux support recipe management and food costing?", a: "Vrodux supports recipe and ingredient management workflows that can help restaurant teams organize recipe information and review ingredient costs based on configured quantities and recorded costs." },
  { q: "Does Vrodux support a Kitchen Display System?", a: "Vrodux includes a kitchen display workflow designed to help restaurant teams coordinate incoming orders and preparation activities. Availability and configuration should be confirmed for the specific restaurant deployment." },
  { q: "Can Vrodux manage multiple restaurant branches?", a: "Vrodux supports multi-location business management capabilities where configured. Restaurant groups can discuss their branch structure, inventory requirements and reporting needs during a product demonstration." },
  { q: "Is Vrodux suitable for restaurants in Dubai and the UAE?", a: "Vrodux can be configured for supported business requirements in the UAE, including relevant currency, language and tax settings. Restaurant operators can discuss their specific operational and accounting requirements with the Vrodux team." },
  { q: "Can Vrodux integrate restaurant sales with accounting?", a: "Vrodux connects relevant sales and financial management workflows within its ERP environment, helping businesses maintain more organized operational and financial records." },
  { q: "Can a cafe use Vrodux for POS and inventory management?", a: "Yes. Vrodux offers POS and inventory capabilities that can support cafe operations, including sales transactions, item records, stock management and purchasing workflows." },
  { q: "How can I see a demonstration of Vrodux Restaurant ERP?", a: "You can request a Vrodux product demonstration to explore restaurant POS, kitchen workflows, inventory management, recipe costing and financial operations. The team can discuss your restaurant's requirements and demonstrate relevant product capabilities." },
];

const recipeExample = [
  ["Chicken", "150 g"],
  ["Bread", "2 slices"],
  ["Cheese", "1 portion"],
  ["Sauce", "20 g"],
  ["Vegetables", "Configured quantity"],
];

function CtaRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <Link href="/book-demo" className={cn(pill.base, pill.primary, "group")}>
        <Calendar className="h-4 w-4" aria-hidden />
        Book a Free Demo
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </Link>
      <Link href="/features/restaurant" className={cn(pill.base, pill.outline)}>
        Explore Features
      </Link>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
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

function FeatureSection({
  id, eyebrow, title, children, items, shot, shotAlt, shotLabel, reverse, links, toneIndex = 0,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  items: string[];
  shot?: GalleryShot;
  shotAlt?: string;
  shotLabel?: string;
  reverse?: boolean;
  links?: { href: string; label: string }[];
  toneIndex?: number;
}) {
  const hasShot = Boolean(shot);
  const t = tone(toneIndex);
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 py-14 md:py-20">
      <div className={cn(WRAP, hasShot && "grid items-center gap-10 lg:grid-cols-2 lg:gap-16")}>
        <div className={cn(reverse && hasShot && "lg:order-2")}>
          <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", t.card, t.icon)}>{eyebrow}</span>
          <h2 id={`${id}-h`} className="mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl">{title}</h2>
          <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">{children}</div>
          <CheckList items={items} />
          {links && links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((l, i) => (
                <Link key={l.href} href={l.href} className={cn(pill.base, i === 0 ? pill.primary : pill.outline, "group")}>
                  {l.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              ))}
            </div>
          )}
        </div>
        {hasShot && (
          <div className={cn(reverse && "lg:order-1")}>
            <Screen shot={shot} alt={shotAlt ?? ""} label={shotLabel ?? id} />
          </div>
        )}
      </div>
    </section>
  );
}

export function RestaurantErpPage({ shots, image }: { shots: GalleryShot[]; image?: { src: string; alt: string } }) {
  const shot = (slot: string) => shots.find((s) => s.id === `slot-${slot}`);
  const pos = shot("restaurant");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE}#webpage`,
        url: PAGE,
        name: "Restaurant ERP Software for Restaurants & Cafes | Vrodux",
        description:
          "Manage restaurant and cafe operations with Vrodux ERP. Integrated POS, kitchen display, inventory, recipe costing, purchasing and accounting.",
        isPartOf: { "@type": "WebSite", name: "Vrodux ERP", url: SITE },
        breadcrumb: { "@id": `${PAGE}#breadcrumb` },
        about: { "@id": `${PAGE}#software` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE}/industries` },
          { "@type": "ListItem", position: 3, name: "Restaurants & F&B", item: PAGE },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${PAGE}#software`,
        name: "Vrodux ERP",
        url: SITE,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Cloud ERP with restaurant POS, kitchen display, inventory, recipe costing, purchasing and accounting for restaurants and cafes.",
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1. Hero */}
      <section aria-labelledby="hero-h" className="px-3 pb-4 pt-[4.5rem] sm:px-5 lg:px-6">
        <div className={cn("mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]", tone(4).card)}>
          <div className="grid items-center gap-10 px-6 py-12 sm:px-12 lg:grid-cols-[1.05fr_1fr] lg:px-16 lg:py-16">
            <div className="rise">
              <nav aria-label="Breadcrumb" className="text-sm text-foreground/70">
                <Link href="/" className="hover:underline">Home</Link>
                <span className="mx-2" aria-hidden>/</span>
                <Link href="/industries" className="hover:underline">Industries</Link>
                <span className="mx-2" aria-hidden>/</span>
                <span aria-current="page" className="font-medium text-foreground">Restaurants &amp; F&amp;B</span>
              </nav>
              <Badge variant="outline" className="mt-5 bg-white/60 text-[11px] tracking-wider dark:bg-white/10">
                RESTAURANT &amp; CAFÉ MANAGEMENT ERP
              </Badge>
              <h1 id="hero-h" className="mt-4 text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                Restaurant ERP Software for Restaurants and Cafes
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">
                Manage your restaurant operations from one connected platform. Vrodux brings together restaurant POS, kitchen order management, inventory, recipe costing, purchasing, accounting and business reporting — helping restaurant owners and hospitality teams manage daily operations with greater visibility and control.
              </p>
              <CtaRow className="mt-8" />
              <p className="mt-4 text-sm text-foreground/70">One connected platform for front-of-house, kitchen and back-office operations.</p>
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
              {pos ? (
                <Screen shot={pos} alt="Vrodux restaurant POS order screen with the menu grid and an open bill" label="restaurant-pos" priority />
              ) : image ? (
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/20">
                  <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <div id="restaurant-erp">
        {/* 2. Value proposition */}
        <section aria-labelledby="value-h" className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="Why a connected ERP"
              title={<span id="value-h">Everything Your Restaurant Needs, Connected in One ERP</span>}
              description="Running a restaurant involves much more than taking orders and collecting payments. Teams must coordinate kitchen operations, monitor ingredients, manage suppliers, control costs and keep financial records accurate."
            />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
              Vrodux connects these operational activities through one ERP platform, helping restaurant owners and managers maintain visibility from customer orders to inventory movements and financial reporting.
            </p>
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

        {/* 3. POS */}
        <FeatureSection
          id="restaurant-pos"
          eyebrow="Restaurant POS"
          title="Restaurant POS and Billing System"
          shot={pos}
          shotAlt="Vrodux restaurant POS order screen with the menu grid and an open bill"
          shotLabel="restaurant-pos"
          toneIndex={3}
          items={[
            "Restaurant order entry and billing.",
            "Menu and product management.",
            "Order and transaction tracking.",
            "Payment recording.",
            "Customer and sales records.",
            "Integration with inventory workflows.",
            "Sales reporting.",
            "Multi-location operational visibility where configured.",
          ]}
          links={[
            { href: "/features/pos", label: "Explore Vrodux POS" },
            { href: "/features/restaurant", label: "Restaurant POS & KDS module" },
          ]}
        >
          <p>Serve customers and manage restaurant transactions through an integrated point of sale system.</p>
          <p>Vrodux Restaurant POS supports everyday billing and order workflows while connecting sales activity with the wider ERP environment. This helps restaurant operators maintain better visibility into transactions, products and business performance.</p>
        </FeatureSection>

        {/* 4. Kitchen display */}
        <FeatureSection
          id="kitchen-display-system"
          eyebrow="Kitchen display"
          title="Kitchen Display System for Faster Order Coordination"
          shot={shot("kitchen")}
          shotAlt="Vrodux kitchen display system showing incoming restaurant order tickets"
          shotLabel="kitchen-display"
          reverse
          toneIndex={4}
          items={[
            "Better visibility into incoming orders.",
            "Improved communication between service and kitchen staff.",
            "More organized preparation workflows.",
            "Reduced reliance on manual order coordination.",
            "Better visibility into order status.",
          ]}
        >
          <p>Keep front-of-house and kitchen teams connected through a coordinated kitchen order workflow.</p>
          <p>Vrodux helps restaurant teams manage incoming orders and kitchen preparation activities, giving staff better visibility into order status and reducing the need to rely on disconnected manual processes.</p>
        </FeatureSection>
        <div className={cn(WRAP, "-mt-6 pb-8 md:-mt-10")}>
          <ol className="grid gap-4 md:grid-cols-4">
            {kitchenSteps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border bg-card p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white dark:bg-brand-500 dark:text-[#040f35]">{i + 1}</span>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* 5. Inventory */}
        <FeatureSection
          id="restaurant-inventory"
          eyebrow="Inventory"
          title="Restaurant Inventory and Ingredient Management Software"
          shot={shot("ingredients")}
          shotAlt="Vrodux ingredient management screen listing restaurant ingredients and stock"
          shotLabel="ingredients"
          toneIndex={2}
          items={[
            "Ingredient and item records.",
            "Inventory tracking.",
            "Stock receiving and adjustments.",
            "Purchase-related stock updates.",
            "Ingredient availability monitoring.",
            "Stock movement history.",
            "Inventory reporting.",
            "Multi-location inventory visibility where configured.",
          ]}
          links={[{ href: "/features/inventory", label: "Explore inventory management" }]}
        >
          <p>Control restaurant ingredients, stock movements and inventory records through an integrated ERP system.</p>
          <p>Food businesses must maintain visibility over ingredients, purchasing, stock availability and consumption. Vrodux connects inventory activities with relevant restaurant operations to support more organized stock management.</p>
          <p>When restaurant orders and inventory workflows are connected, management can better understand how sales and ingredient usage relate to stock availability.</p>
        </FeatureSection>

        {/* 6. Recipes */}
        <FeatureSection
          id="recipe-costing"
          eyebrow="Recipes"
          title="Recipe Management and Food Costing for Restaurants"
          shot={shot("recipe")}
          shotAlt="Vrodux recipe management screen with ingredient quantities and costing"
          shotLabel="recipes"
          reverse
          toneIndex={0}
          items={[
            "Recipe records.",
            "Ingredient definitions.",
            "Ingredient quantity management.",
            "Recipe costing based on configured ingredient costs.",
            "Menu item and recipe associations.",
            "Ingredient availability visibility.",
            "Cost review and reporting support.",
          ]}
        >
          <p>Maintain structured recipes, ingredients and preparation requirements to gain better visibility into menu costs and ingredient usage.</p>
          <p>Vrodux helps restaurant teams organize recipe information and connect ingredient records with broader inventory and purchasing operations.</p>
        </FeatureSection>
        <div className={cn(WRAP, "-mt-6 pb-8 md:-mt-10")}>
          <div className="rounded-3xl border bg-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Illustrative example</p>
            <h3 className="mt-2 text-xl font-medium tracking-tight">A chicken sandwich recipe</h3>
            <dl className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-5">
              {recipeExample.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 border-b py-2 text-sm lg:block lg:border-b-0">
                  <dt className="font-medium">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-foreground/80">
              Recipe cost can be calculated using the configured ingredient quantities and their recorded costs. This is an illustrative example only, not default recipe data or a statement about how your workspace will be configured.
            </p>
          </div>
        </div>

        {/* 7. Purchasing */}
        <FeatureSection
          id="restaurant-purchasing"
          eyebrow="Purchasing"
          title="Restaurant Purchasing and Supplier Management"
          toneIndex={5}
          items={[
            "Supplier records.",
            "Purchase orders.",
            "Purchase receiving.",
            "Purchasing history.",
            "Supplier-related records.",
            "Inventory coordination.",
            "Purchase reporting.",
          ]}
          links={[{ href: "/features/purchase", label: "Explore purchase management" }]}
        >
          <p>Manage purchasing activities and supplier information through connected ERP workflows.</p>
          <p>From ingredient replenishment to supplier records and purchase orders, Vrodux helps restaurant operators organize procurement activities and maintain visibility into purchasing operations.</p>
        </FeatureSection>
        <div className={cn(WRAP, "-mt-6 pb-8 md:-mt-10")}>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Purchasing workflow</p>
          <ol className="mt-3 flex flex-col gap-2 md:flex-row md:items-stretch">
            {["Identify stock requirements", "Prepare purchasing documents", "Coordinate with suppliers", "Record received items", "Update inventory records"].map((s, i, a) => (
              <li key={s} className="flex flex-1 items-center gap-2">
                <span className="flex flex-1 items-center gap-3 rounded-2xl border bg-card px-4 py-3 text-sm font-medium">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">{i + 1}</span>
                  {s}
                </span>
                {i < a.length - 1 && <ArrowRight className="hidden h-4 w-4 flex-none text-muted-foreground md:block" aria-hidden />}
              </li>
            ))}
          </ol>
        </div>

        {/* 8. Accounting */}
        <FeatureSection
          id="restaurant-accounting"
          eyebrow="Finance"
          title="Restaurant Accounting and Financial Management"
          shot={shot("finance")}
          shotAlt="Vrodux finance and accounting module showing invoices and ledger"
          shotLabel="finance"
          reverse
          toneIndex={1}
          items={[
            "Income and expense tracking.",
            "Sales-related financial records.",
            "Purchase and expense records.",
            "Accounts management.",
            "Financial reporting.",
            "Multi-currency support where configured.",
            "Tax configuration based on supported jurisdictions.",
          ]}
          links={[{ href: "/features/finance", label: "Explore finance and accounting" }]}
        >
          <p>Connect restaurant sales and purchasing activities with business financial management.</p>
          <p>Vrodux brings financial operations into the wider ERP environment, helping restaurant owners and finance teams maintain more organized financial records and monitor business performance. UAE VAT settings are available as configuration within the finance module.</p>
        </FeatureSection>

        {/* 9. Multi-branch */}
        <FeatureSection
          id="multi-branch"
          eyebrow="Multi-branch"
          title="Manage Multiple Restaurant Branches from One Platform"
          shot={shot("branches")}
          shotAlt="Vrodux branch management screen for multi-location restaurant businesses"
          shotLabel="branches"
          toneIndex={2}
          items={[
            "Centralized management visibility.",
            "Location-specific operational records where configured.",
            "Sales reporting across locations.",
            "Inventory visibility across configured locations.",
            "Consistent business processes.",
            "Management reporting.",
            "Centralized financial oversight.",
          ]}
        >
          <p>For restaurant groups and growing cafe businesses, maintaining visibility across multiple locations can become increasingly complex.</p>
          <p>Vrodux provides a connected ERP environment to support centralized business management and configured multi-location operations.</p>
          <p>Whether you operate one cafe or manage a growing restaurant group, Vrodux helps connect the business processes that support your daily operations.</p>
        </FeatureSection>

        {/* 10. Connected flow */}
        <section aria-labelledby="flow-h" className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="How it works"
              title={<span id="flow-h">How Vrodux Connects Your Restaurant Operations</span>}
              description="Instead of managing restaurant activities across disconnected systems, Vrodux brings important operational records into a connected ERP environment."
            />
            <div className="mt-12">
              <FlowDiagram steps={[...connectedFlow]} toneIndex={3} />
            </div>
          </div>
        </section>

        {/* 11. Business types */}
        <section aria-labelledby="types-h" className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading eyebrow="Who it is for" title={<span id="types-h">Restaurant ERP Software for Different Food Businesses</span>} />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {businessTypes.map((b, i) => {
                const t = tone(i + 2);
                return (
                  <li key={b.title} className={cn("rounded-3xl p-6", t.card)}>
                    <h3 className="text-xl font-medium tracking-tight">{b.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{b.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 12. UAE */}
        <section aria-labelledby="uae-h" className="py-14 md:py-20">
          <div className={cn(WRAP, "grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16")}>
            <div>
              <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">UAE &amp; GCC</span>
              <h2 id="uae-h" className="mt-5 text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl">
                Restaurant Management ERP for Businesses in the UAE
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>Restaurant and cafe businesses in the UAE operate in a competitive environment where operational visibility, stock control and financial management matter.</p>
              <p>Vrodux provides an integrated ERP platform that can support restaurant businesses in Dubai, Abu Dhabi and across the wider UAE market looking to connect their POS, inventory, procurement and accounting workflows.</p>
              <p>The platform can be configured for relevant business requirements, including supported currencies, languages, operational structures and applicable tax settings.</p>
            </div>
          </div>
        </section>

        {/* 13. Why Vrodux */}
        <section aria-labelledby="why-h" className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="Why Vrodux"
              title={<span id="why-h">Why Choose Vrodux for Restaurant Management?</span>}
              description="Vrodux is designed to bring business operations together through an integrated ERP platform rather than treating each department as an isolated system."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((d) => (
                <li key={d.title} className="rounded-2xl border bg-card p-6">
                  <h3 className="text-lg font-medium tracking-tight">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.text}</p>
                </li>
              ))}
            </ul>
            <CtaRow className="mt-10" />
          </div>
        </section>

        {/* 14. FAQ */}
        <section aria-labelledby="faq-h" className="py-14 md:py-20">
          <div className={cn(WRAP, "grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20")}>
            <div>
              <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">FAQ</span>
              <h2 id="faq-h" className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em]">
                Frequently Asked Questions About Restaurant ERP Software
              </h2>
            </div>
            {/* Native <details>: answers are in the server-rendered HTML and it is keyboard and screen-reader accessible without JavaScript. */}
            <div className="divide-y border-y dark:divide-white/10 dark:border-white/10">
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg font-medium">{f.q}</h3>
                    <ChevronDown className="h-5 w-5 flex-none text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Final CTA */}
        <section aria-labelledby="cta-h" className="px-3 pb-3 pt-6 sm:px-5 lg:px-6">
          <div className={PANEL}>
            <div className="absolute inset-0" style={GRID_STYLE} aria-hidden />
            <div className="relative px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
              <h2 id="cta-h" className="max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.035em] sm:text-5xl">
                Bring Your Restaurant Operations Together with Vrodux
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                From restaurant POS and kitchen workflows to inventory, purchasing, recipes and accounting, Vrodux helps bring important restaurant operations into one connected ERP platform.
              </p>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/85">
                Discover how Vrodux can support your restaurant or cafe business.
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
              <p className="mt-6 text-sm text-white/75">
                Tell us about your restaurant operations and the Vrodux team can walk you through relevant capabilities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
