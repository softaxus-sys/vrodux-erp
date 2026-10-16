"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, DollarSign, Users, Zap, BarChart3, CreditCard, UtensilsCrossed, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";
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

export function ProductShowcase({ shots = {} }: { shots?: HomeShots }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="section-padding bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-sm font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Real Product, Real Screens
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            See Vrodux ERP <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No mockups, no stock photos — these are real screens from the Vrodux ERP platform,
            running the way your team will use it every day.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all",
                active === i
                  ? "bg-brand-500 border-brand-500 text-white shadow-glow-sm"
                  : "bg-card text-muted-foreground hover:text-foreground hover:border-brand-500/30"
              )}
            >
              <t.icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Active screenshot */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl border bg-card shadow-premium overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b bg-muted/50">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-3 text-xs text-muted-foreground">erp.vrodux.com / {tab.id}</div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ThemedShotImage
                  shot={shots[tab.id]}
                  alt={`Vrodux ERP — ${tab.label}`}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  zoomable
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            key={`${tab.id}-caption`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto"
          >
            {tab.description}
          </motion.p>
        </div>

        {/* More screens marquee */}
        <div className="mt-16">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Explore more of the platform
          </p>
          <div className="marquee-container overflow-hidden">
            <div className="marquee-track flex gap-5 w-max">
              {[...moreScreens, ...moreScreens].map((s, i) => (
                <div
                  key={`${s.label}-${i}`}
                  className="flex-shrink-0 w-72 rounded-xl border bg-card overflow-hidden hover:shadow-glow-sm transition-shadow"
                >
                  <ThemedShotImage
                    shot={shots[s.slot]}
                    alt={`Vrodux ERP — ${s.label}`}
                    sizes="288px"
                    uniform="4 / 3"
                    zoomable
                  />
                  <div className="px-4 py-3 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
