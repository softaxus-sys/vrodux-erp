"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, DollarSign, Users, Zap, BarChart3, CreditCard, UtensilsCrossed, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "finance",
    label: "Finance & Accounting",
    icon: DollarSign,
    description: "Track revenue, expenses, ledgers and bank reconciliation in real time, with a complete financial picture at a glance.",
    light: "/Verdux-erp-app-ss/finance-module-light.png",
    dark: "/Verdux-erp-app-ss/finance-module-dark.png",
  },
  {
    id: "hr",
    label: "HR & Payroll",
    icon: Users,
    description: "Manage employees, payroll runs, leave and attendance from a single, streamlined workspace.",
    light: "/Verdux-erp-app-ss/hr-and-payrole-light.png",
    dark: "/Verdux-erp-app-ss/hr-and-payrole-dark.png",
  },
  {
    id: "crm",
    label: "CRM & Sales",
    icon: Zap,
    description: "Track leads, opportunities and customer communication through a clear, actionable pipeline view.",
    light: "/Verdux-erp-app-ss/crm-light.png",
    dark: "/Verdux-erp-app-ss/crm-dark.png",
  },
  {
    id: "reports",
    label: "Reports & Analytics",
    icon: BarChart3,
    description: "Module-wise reports and dashboards give every team the numbers they need, the moment they need them.",
    light: "/Verdux-erp-app-ss/module-wise-reports-light.png",
    dark: "/Verdux-erp-app-ss/module-wise-reports-dark.png",
  },
  {
    id: "retail",
    label: "Retail POS",
    icon: CreditCard,
    description: "A fast, reliable point-of-sale built for high-volume retail, with barcode scanning and multi-store sync.",
    light: "/Verdux-erp-app-ss/retail-system-rubust.png",
  },
  {
    id: "restaurant",
    label: "Restaurant POS & KDS",
    icon: UtensilsCrossed,
    description: "From table orders to the kitchen display, run your restaurant floor and kitchen in perfect sync.",
    light: "/Verdux-erp-app-ss/resturant-point-of-sale.png",
  },
  {
    id: "login",
    label: "Secure Login",
    icon: KeyRound,
    description: "A clean, secure sign-in experience that adapts to your brand and your team's preferred theme.",
    light: "/Verdux-erp-app-ss/login-light.png",
    dark: "/Verdux-erp-app-ss/login-dark.png",
  },
];

const moreScreens = [
  { src: "/Verdux-erp-app-ss/hr-add-employe.png", label: "Add Employee" },
  { src: "/Verdux-erp-app-ss/hr-attendance.png", label: "Attendance Tracking" },
  { src: "/Verdux-erp-app-ss/industory-wise-modules.png", label: "Industry-Specific Modules" },
  { src: "/Verdux-erp-app-ss/kds.png", label: "Kitchen Display System" },
  { src: "/Verdux-erp-app-ss/recipe.png", label: "Recipe & Food Costing" },
  { src: "/Verdux-erp-app-ss/ingreadents.png", label: "Ingredient Management" },
  { src: "/Verdux-erp-app-ss/master-data.png", label: "Master Data" },
  { src: "/Verdux-erp-app-ss/general-setting.png", label: "General Settings" },
  { src: "/Verdux-erp-app-ss/region-wise-payment-methods.png", label: "Regional Payment Methods" },
  { src: "/Verdux-erp-app-ss/vocuhers-and-coupens.png", label: "Vouchers & Coupons" },
  { src: "/Verdux-erp-app-ss/user-managments.png", label: "User Management" },
  { src: "/Verdux-erp-app-ss/roles-and-permissions.png", label: "Roles & Permissions" },
  { src: "/Verdux-erp-app-ss/branch-managment.png", label: "Branch Management" },
  { src: "/Verdux-erp-app-ss/integrations-comming-soon.png", label: "Integrations (Coming Soon)" },
  { src: "/Verdux-erp-app-ss/complete-audit-logs.png", label: "Complete Audit Logs" },
];

export function ProductShowcase() {
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

            <div className="relative aspect-[1910/913]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {tab.dark ? (
                    <>
                      <Image
                        src={tab.light}
                        alt={`Vrodux ERP — ${tab.label}`}
                        fill
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        className="object-cover object-top dark:hidden"
                      />
                      <Image
                        src={tab.dark}
                        alt={`Vrodux ERP — ${tab.label}`}
                        fill
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        className="hidden object-cover object-top dark:block"
                      />
                    </>
                  ) : (
                    <Image
                      src={tab.light}
                      alt={`Vrodux ERP — ${tab.label}`}
                      fill
                      sizes="(min-width: 1024px) 1024px, 100vw"
                      className="object-cover object-top"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
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
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              {[...moreScreens, ...moreScreens].map((s, i) => (
                <div
                  key={`${s.label}-${i}`}
                  className="flex-shrink-0 w-72 rounded-xl border bg-card overflow-hidden hover:shadow-glow-sm transition-shadow"
                >
                  <div className="relative aspect-[1910/913]">
                    <Image
                      src={s.src}
                      alt={`Vrodux ERP — ${s.label}`}
                      fill
                      sizes="288px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-4 py-3 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
