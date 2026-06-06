import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, ShoppingBag, UtensilsCrossed, Hotel, Zap, Truck, Home, HardHat, Stethoscope, GraduationCap, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Solutions — ERP for Every Sector",
  description:
    "Vrodux ERP delivers tailored solutions for Retail, Restaurants, Hospitality, Manufacturing, Distribution, Real Estate, Construction, Healthcare, Education, and Professional Services.",
};

const industries = [
  {
    id: "retail",
    icon: ShoppingBag,
    name: "Retail",
    headline: "Run a Smarter Retail Business",
    description: "From single-store to multi-chain retail operations, Vrodux ERP gives you real-time inventory, POS, customer loyalty, and financial reporting in one platform.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    modules: ["POS System", "Inventory Control", "Customer Management", "Finance & Accounting", "Multi-store Management"],
    stats: [
      { value: "40%", label: "Reduction in stockouts" },
      { value: "2x", label: "Faster checkout speed" },
      { value: "30%", label: "Improvement in margins" },
    ],
  },
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    name: "Restaurants & F&B",
    headline: "Full-Stack Restaurant Management",
    description: "Restaurant POS with table management, Kitchen Display System (KDS), recipe costing, ingredient tracking, and integrated financial accounting.",
    color: "from-red-500 to-orange-600",
    bg: "bg-red-500/10",
    modules: ["Restaurant POS", "Kitchen Display System", "Recipe Management", "Table Management", "Ingredient Tracking"],
    stats: [
      { value: "35%", label: "Reduction in food waste" },
      { value: "50%", label: "Faster order processing" },
      { value: "25%", label: "Lower food costs" },
    ],
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hospitality & Hotels",
    headline: "Complete Hotel Management System",
    description: "Manage reservations, room assignments, housekeeping, F&B, billing, and guest services with a fully integrated hotel management module.",
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10",
    modules: ["Reservations", "Room Management", "Guest Services", "F&B Integration", "Revenue Management"],
    stats: [
      { value: "45%", label: "Increase in occupancy" },
      { value: "60%", label: "Faster check-in/out" },
      { value: "30%", label: "Higher guest satisfaction" },
    ],
  },
  {
    id: "manufacturing",
    icon: Zap,
    name: "Manufacturing",
    headline: "Production & Supply Chain Management",
    description: "Bill of materials, production planning, quality control, work orders, and raw material tracking for manufacturing companies.",
    color: "from-amber-500 to-yellow-600",
    bg: "bg-amber-500/10",
    modules: ["Production Planning", "Bill of Materials", "Quality Control", "Work Orders", "Supply Chain"],
    stats: [
      { value: "30%", label: "Reduction in waste" },
      { value: "20%", label: "Increase in throughput" },
      { value: "40%", label: "Better inventory turns" },
    ],
  },
  {
    id: "distribution",
    icon: Truck,
    name: "Distribution & Wholesale",
    headline: "Streamline Your Distribution Operations",
    description: "Multi-warehouse inventory, automated replenishment, route planning, and real-time stock visibility for distribution companies.",
    color: "from-slate-500 to-gray-600",
    bg: "bg-slate-500/10",
    modules: ["Multi-Warehouse Management", "Order Fulfillment", "Route Planning", "Vendor Management", "Analytics"],
    stats: [
      { value: "25%", label: "Lower distribution costs" },
      { value: "99%", label: "Order accuracy rate" },
      { value: "30%", label: "Faster delivery times" },
    ],
  },
  {
    id: "realestate",
    icon: Home,
    name: "Real Estate",
    headline: "Manage Your Property Portfolio",
    description: "Lease management, property tracking, maintenance scheduling, owner/tenant portals, and financial reporting for real estate companies.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    modules: ["Property Management", "Leasing & Contracts", "Maintenance Management", "Owner Portals", "Financial Reports"],
    stats: [
      { value: "50%", label: "Less admin time" },
      { value: "98%", label: "Lease tracking accuracy" },
      { value: "40%", label: "Faster rent collection" },
    ],
  },
  {
    id: "construction",
    icon: HardHat,
    name: "Construction",
    headline: "Build with Precision",
    description: "Project management, BOQ tracking, subcontractor management, progress billing, and cost-to-complete forecasting for construction companies.",
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
    modules: ["Project Planning", "BOQ Management", "Resource Allocation", "Progress Billing", "Cost Tracking"],
    stats: [
      { value: "35%", label: "Cost overrun reduction" },
      { value: "20%", label: "Better project margins" },
      { value: "60%", label: "Less administrative work" },
    ],
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    name: "Healthcare",
    headline: "Healthcare Operations Made Simple",
    description: "Patient billing, insurance management, pharmacy inventory, HR & payroll, and regulatory compliance for healthcare organizations.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    modules: ["Patient Billing", "Insurance Management", "Pharmacy Inventory", "HR & Payroll", "Compliance"],
    stats: [
      { value: "40%", label: "Billing accuracy improvement" },
      { value: "25%", label: "Administrative time saved" },
      { value: "30%", label: "Better insurance recovery" },
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education",
    headline: "Simplify Educational Institution Management",
    description: "Student fee management, payroll, procurement, inventory, and financial reporting for schools, colleges, and training institutes.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    modules: ["Fee Management", "HR & Payroll", "Procurement", "Finance & Accounting", "Inventory"],
    stats: [
      { value: "50%", label: "Less admin overhead" },
      { value: "100%", label: "Fee collection accuracy" },
      { value: "30%", label: "Procurement savings" },
    ],
  },
  {
    id: "services",
    icon: Building2,
    name: "Professional Services",
    headline: "Manage Your Service Business",
    description: "Project-based accounting, time & expense tracking, billing, CRM, and HR for consulting firms, agencies, and professional services.",
    color: "from-brand-500 to-indigo-600",
    bg: "bg-brand-500/10",
    modules: ["Project Accounting", "Time & Billing", "CRM & Pipeline", "HR & Payroll", "Finance"],
    stats: [
      { value: "30%", label: "Better project profitability" },
      { value: "45%", label: "Faster invoice collection" },
      { value: "25%", label: "Improved utilization rates" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Industry Solutions"
        title="ERP Built for "
        highlightedWord="Your Industry"
        description="Vrodux ERP delivers deep, industry-specific functionality — not just generic modules. From restaurants to construction, we understand your unique operational needs."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {industries.map((ind, i) => (
              <div
                key={ind.id}
                id={ind.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-4`}>
                    <ind.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="mb-3">{ind.name}</Badge>
                  <h2 className="text-3xl font-bold mb-3">{ind.headline}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{ind.description}</p>

                  <div className="space-y-2 mb-6">
                    {ind.modules.map((mod) => (
                      <div key={mod} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {mod}
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/book-demo">
                      See Demo for {ind.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Stats card */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${ind.color} text-white`}>
                    <h3 className="text-lg font-semibold mb-6 opacity-90">What Our {ind.name} Clients Achieve</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {ind.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                          <div className="text-xs opacity-80">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="flex flex-wrap gap-2">
                        {ind.modules.map((m) => (
                          <span key={m} className="text-xs px-2 py-1 bg-white/20 rounded-full">{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
