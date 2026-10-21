"use client";

import { useState } from "react";
import { DollarSign, Users, Zap, BarChart3, CreditCard, UtensilsCrossed, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading, WRAP, tone } from "@/components/home/ui";
import { BrowserFrame } from "@/components/home/panel-art";
import { ThemedShotImage } from "@/components/sections/themed-shot";
import type { HomeShots, HomeSlot } from "@/lib/home-shots";

const tabs: {
  id: HomeSlot;
  label: string;
  icon: typeof DollarSign;
  description: string;
}[] = [
  {
    id: "finance",
    label: "Finance & Accounting",
    icon: DollarSign,
    description: "Track revenue, expenses, ledgers and bank reconciliation in real time, with a complete financial picture at a glance.",
  },
  {
    id: "hr",
    label: "HR & Payroll",
    icon: Users,
    description: "Manage employees, payroll runs, leave and attendance from a single, streamlined workspace.",
  },
  {
    id: "crm",
    label: "CRM & Sales",
    icon: Zap,
    description: "Track leads, opportunities and customer communication through a clear, actionable pipeline view.",
  },
  {
    id: "reports",
    label: "Reports & Analytics",
    icon: BarChart3,
    description: "Module-wise reports and dashboards give every team the numbers they need, the moment they need them.",
  },
  {
    id: "retail",
    label: "Retail POS",
    icon: CreditCard,
    description: "A fast, reliable point-of-sale built for high-volume retail, with barcode scanning and multi-store sync.",
  },
  {
    id: "restaurant",
    label: "Restaurant POS & KDS",
    icon: UtensilsCrossed,
    description: "From table orders to the kitchen display, run your restaurant floor and kitchen in perfect sync.",
  },
  {
    id: "login",
    label: "Secure Login",
    icon: KeyRound,
    description: "A clean, secure sign-in experience that adapts to your brand and your team's preferred theme.",
  },
];

const moreScreens: { slot: HomeSlot; label: string }[] = [
  { slot: "add-employee", label: "Add Employee" },
  { slot: "attendance", label: "Attendance Tracking" },
  { slot: "industry-modules", label: "Industry-Specific Modules" },
  { slot: "kitchen", label: "Kitchen Display System" },
  { slot: "recipe", label: "Recipe & Food Costing" },
  { slot: "ingredients", label: "Ingredient Management" },
  { slot: "master-data", label: "Master Data" },
  { slot: "general-settings", label: "General Settings" },
  { slot: "payment-methods", label: "Regional Payment Methods" },
  { slot: "vouchers", label: "Vouchers & Coupons" },
  { slot: "user-management", label: "User Management" },
  { slot: "roles-permissions", label: "Roles & Permissions" },
  { slot: "branches", label: "Branch Management" },
  { slot: "integrations", label: "Integrations" },
  { slot: "audit-logs", label: "Complete Audit Logs" },
];

export function HomeShowcase({ shots = {} }: { shots?: HomeShots }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const t = tone(active + 4);

  return (
    <section className="py-16 md:py-24">
      <div className={WRAP}>
        <SectionHeading
          eyebrow="Real product, real screens"
          title="See Vrodux ERP in action"
          description="No mockups and no stock photos. These are real screens from the platform, running the way your team will use it every day."
        />

        <div role="tablist" aria-label="Product screens" className="mt-10 flex flex-wrap gap-2">
          {tabs.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === i
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-foreground/25 text-foreground hover:bg-foreground/5"
              )}
            >
              <x.icon className="h-4 w-4" strokeWidth={1.75} />
              {x.label}
            </button>
          ))}
        </div>

        <div className={cn("mt-6 grid gap-8 rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[300px_1fr] lg:gap-12", t.card)}>
          <div className="lg:pt-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
              <tab.icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 text-2xl font-medium tracking-tight">{tab.label}</h3>
            <p className="mt-3 leading-relaxed text-foreground/80">{tab.description}</p>
          </div>
          <BrowserFrame url={`erp.vrodux.com / ${tab.id}`} className="shadow-xl shadow-black/15">
            <ThemedShotImage
              key={tab.id}
              shot={shots[tab.id]}
              alt={`Vrodux ERP — ${tab.label}`}
              sizes="(min-width: 1024px) 800px, 100vw"
              zoomable
            />
          </BrowserFrame>
        </div>

        <div className="mt-16">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Explore more of the platform
          </p>
          <div className="marquee-container -mx-9 overflow-hidden sm:-mx-[68px] lg:-mx-[88px]">
            <div className="marquee-track flex w-max gap-4 px-9 sm:px-[68px] lg:px-[88px]">
              {[...moreScreens, ...moreScreens].map((s, i) => {
                const c = tone(i % moreScreens.length);
                return (
                  <div
                    key={`${s.label}-${i}`}
                    className={cn("w-72 flex-shrink-0 overflow-hidden rounded-2xl p-2", c.card)}
                  >
                    <div className="overflow-hidden rounded-xl bg-white">
                      <ThemedShotImage
                        shot={shots[s.slot]}
                        alt={`Vrodux ERP — ${s.label}`}
                        sizes="288px"
                        uniform="4 / 3"
                        zoomable
                      />
                    </div>
                    <div className="px-2 pb-1 pt-3 text-sm font-medium">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
