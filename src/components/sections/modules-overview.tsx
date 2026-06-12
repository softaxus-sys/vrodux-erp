"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Users, Package, ShoppingCart, BarChart3, CreditCard, UtensilsCrossed, Hotel, Home, HardHat, Zap, Truck } from "lucide-react";

const coreModules = [
  {
    id: "finance",
    name: "Finance & Accounting",
    description: "Complete financial management with GL, AP/AR, bank reconciliation, multi-currency, and advanced financial reporting.",
    icon: DollarSign,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    features: ["General Ledger", "Accounts Payable/Receivable", "Bank Reconciliation", "Financial Reporting"],
    href: "/features#finance",
  },
  {
    id: "hr",
    name: "HR & Payroll",
    description: "End-to-end human resource management including payroll, leave, attendance, and performance management.",
    icon: Users,
    color: "from-purple-500 to-pink-600",
    bg: "bg-purple-500/10",
    features: ["Employee Management", "Payroll Processing", "Leave & Attendance", "Performance Reviews"],
    href: "/features#hr",
  },
  {
    id: "inventory",
    name: "Inventory & Procurement",
    description: "Full inventory control with warehouse management, stock tracking, procurement workflows, and vendor management.",
    icon: Package,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    features: ["Stock Management", "Warehouse Control", "Procurement Workflow", "Vendor Management"],
    href: "/features#inventory",
  },
  {
    id: "sales",
    name: "Sales Management",
    description: "From quotation to invoice, manage the entire sales cycle with customer management and sales analytics.",
    icon: ShoppingCart,
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-500/10",
    features: ["Quotations & Orders", "Invoicing", "Customer Management", "Sales Analytics"],
    href: "/features#sales",
  },
  {
    id: "pos",
    name: "Point of Sale",
    description: "Modern retail POS with barcode support, multi-store operations, and real-time inventory sync.",
    icon: CreditCard,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    features: ["Retail POS", "Barcode Support", "Multi-store", "Real-time Sync"],
    href: "/features#pos",
  },
  {
    id: "crm",
    name: "CRM",
    description: "Manage leads, opportunities, and pipeline with customer communication and activity tracking.",
    icon: Zap,
    color: "from-lime-500 to-green-600",
    bg: "bg-lime-500/10",
    features: ["Lead Management", "Pipeline View", "Opportunity Tracking", "Customer Comms"],
    href: "/features#crm",
  },
  {
    id: "purchase",
    name: "Purchase Management",
    description: "Streamline purchasing with RFQ management, purchase orders, vendor evaluation, and cost control.",
    icon: Truck,
    color: "from-slate-500 to-gray-600",
    bg: "bg-slate-500/10",
    features: ["RFQ Management", "Purchase Orders", "Vendor Evaluation", "Cost Control"],
    href: "/features#purchase",
  },
  {
    id: "analytics",
    name: "Analytics & Reporting",
    description: "Executive dashboards, business intelligence reports, and real-time KPI monitoring across all modules.",
    icon: BarChart3,
    color: "from-brand-500 to-indigo-600",
    bg: "bg-brand-500/10",
    features: ["Executive Dashboards", "BI Reports", "KPI Monitoring", "Custom Reports"],
    href: "/features#analytics",
  },
];

const industryModules = [
  {
    id: "restaurant",
    name: "Restaurant POS & KDS",
    description: "Complete restaurant management with table ordering, KDS integration, recipe management, and billing.",
    icon: UtensilsCrossed,
    color: "from-red-500 to-orange-600",
    bg: "bg-red-500/10",
    features: ["Table Management", "KDS Integration", "Recipe & Food Cost", "Waiter Ordering"],
    href: "/features#restaurant",
  },
  {
    id: "hospitality",
    name: "Hospitality Management",
    description: "Hotel management system with reservations, room management, guest services, and integrated billing.",
    icon: Hotel,
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10",
    features: ["Reservations", "Room Management", "Guest Services", "Integrated Billing"],
    href: "/features#hospitality",
  },
  {
    id: "realestate",
    name: "Real Estate Management",
    description: "Manage properties, leasing, contracts, maintenance, and financial reporting for real estate portfolios.",
    icon: Home,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    features: ["Property Management", "Leasing & Contracts", "Maintenance", "Financial Reports"],
    href: "/features#realestate",
  },
  {
    id: "construction",
    name: "Construction Management",
    description: "Project planning, resource allocation, cost tracking, and BOQ management for construction companies.",
    icon: HardHat,
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
    features: ["Project Planning", "Resource Allocation", "Cost Tracking", "BOQ Management"],
    href: "/features#construction",
  },
];

export function ModulesOverview() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-500 text-sm font-medium mb-4">
            12 Integrated Modules
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Everything Your Business{" "}
            <span className="text-gradient">Needs in One Platform</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From finance to hospitality, from retail to construction — Vrodux ERP covers every
            aspect of your business operations with deep, industry-specific functionality.
          </p>
        </motion.div>

        {/* Core Business Modules */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1">Core Business Modules</h3>
          <p className="text-sm text-muted-foreground">The foundation every business runs on, included in every plan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {coreModules.map((module, i) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <Link
                href={module.href}
                className="group block h-full p-6 rounded-2xl border bg-card hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl ${module.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`w-5 h-5 bg-gradient-to-br ${module.color} rounded-md flex items-center justify-center`}>
                    <module.icon className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{module.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{module.description}</p>
                <ul className="space-y-1">
                  {module.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${module.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Industry-Specific Modules */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1">Industry-Specific Modules</h3>
          <p className="text-sm text-muted-foreground">Deep, tailored functionality activated based on your industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industryModules.map((module, i) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <Link
                href={module.href}
                className="group block h-full p-6 rounded-2xl border bg-card hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl ${module.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`w-5 h-5 bg-gradient-to-br ${module.color} rounded-md flex items-center justify-center`}>
                    <module.icon className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{module.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{module.description}</p>
                <ul className="space-y-1">
                  {module.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${module.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <Button size="lg" asChild className="group">
            <Link href="/features">
              Explore All Features
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
