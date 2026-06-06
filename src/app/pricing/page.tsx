import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, ArrowRight, Zap, Building2, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Transparent ERP Pricing Plans",
  description:
    "Affordable, transparent pricing for Vrodux ERP. Starter, Professional, and Enterprise plans with no hidden fees. SaaS and On-Premise options.",
};

const tiers = [
  {
    name: "Starter",
    icon: Rocket,
    price: "$299",
    period: "per month",
    annualNote: "Billed annually. Monthly billing: $349/mo",
    description: "Perfect for small businesses and startups getting started with ERP.",
    highlighted: false,
    cta: "Get Started",
    href: "/contact?plan=starter",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    features: {
      "Core Modules": [
        "Finance & Accounting",
        "HR & Payroll (up to 50 employees)",
        "Basic Inventory Management",
        "Sales & Invoicing",
        "Purchase Management",
      ],
      "Platform Features": [
        "Up to 10 users",
        "Single company",
        "Single currency",
        "Standard reports",
        "Email support",
        "SaaS deployment",
      ],
    },
    notIncluded: ["CRM & Pipeline", "POS System", "Restaurant Module", "Multi-company", "API Access"],
  },
  {
    name: "Professional",
    icon: Zap,
    price: "$799",
    period: "per month",
    annualNote: "Billed annually. Monthly billing: $949/mo",
    description: "For growing businesses that need the complete ERP platform.",
    highlighted: true,
    cta: "Start Free Trial",
    href: "/book-demo?plan=professional",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
    features: {
      "All Starter +": [
        "CRM & Sales Pipeline",
        "Point of Sale (POS)",
        "Restaurant POS & KDS",
        "Hospitality Management",
        "Advanced Analytics & BI",
      ],
      "Platform Features": [
        "Up to 50 users",
        "Multi-company (up to 3)",
        "Multi-currency",
        "Custom workflows",
        "API access",
        "Priority support (24h SLA)",
      ],
    },
    notIncluded: ["Real Estate Module", "Construction Module", "White-label", "24/7 phone support"],
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "pricing",
    annualNote: "Annual contracts with flexible billing",
    description: "For large enterprises with complex, multi-entity requirements.",
    highlighted: false,
    cta: "Contact Sales",
    href: "/contact?plan=enterprise",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    features: {
      "All Professional +": [
        "Real Estate Management",
        "Construction Management",
        "Recipe & Ingredient Mgmt",
        "Kitchen Display System",
        "Custom integrations",
      ],
      "Enterprise Features": [
        "Unlimited users",
        "Unlimited companies",
        "Dedicated account manager",
        "On-premise deployment option",
        "White-label options",
        "24/7 phone & chat support",
        "Custom SLA guarantee",
        "Custom development",
      ],
    },
    notIncluded: [],
  },
];

const allFeatures = [
  { feature: "Finance & Accounting", starter: true, professional: true, enterprise: true },
  { feature: "HR & Payroll", starter: true, professional: true, enterprise: true },
  { feature: "Inventory Management", starter: true, professional: true, enterprise: true },
  { feature: "Sales Management", starter: true, professional: true, enterprise: true },
  { feature: "Purchase Management", starter: true, professional: true, enterprise: true },
  { feature: "CRM & Pipeline", starter: false, professional: true, enterprise: true },
  { feature: "Point of Sale (POS)", starter: false, professional: true, enterprise: true },
  { feature: "Restaurant POS & KDS", starter: false, professional: true, enterprise: true },
  { feature: "Hospitality Management", starter: false, professional: true, enterprise: true },
  { feature: "Real Estate Management", starter: false, professional: false, enterprise: true },
  { feature: "Construction Management", starter: false, professional: false, enterprise: true },
  { feature: "Advanced Analytics & BI", starter: false, professional: true, enterprise: true },
  { feature: "Multi-Company", starter: false, professional: true, enterprise: true },
  { feature: "Multi-Currency", starter: false, professional: true, enterprise: true },
  { feature: "API Access", starter: false, professional: true, enterprise: true },
  { feature: "On-Premise Deployment", starter: false, professional: false, enterprise: true },
  { feature: "Custom Development", starter: false, professional: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Transparent Pricing"
        title="Simple Pricing, "
        highlightedWord="Zero Surprises"
        description="No per-module fees. No hidden costs. Choose the plan that fits your business and upgrade anytime as you grow."
      />

      {/* Pricing Cards */}
      <section className="py-12 -mt-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                  tier.highlighted
                    ? "border-brand-500 shadow-glow scale-[1.02] bg-brand-500/5"
                    : "bg-card hover:shadow-md"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand-500 text-white gap-1 px-4">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className={`w-10 h-10 rounded-xl ${tier.bg} flex items-center justify-center mb-4`}>
                  <tier.icon className={`w-5 h-5 ${tier.color}`} />
                </div>

                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{tier.annualNote}</p>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <div className="flex-1 space-y-5 mb-6">
                  {Object.entries(tier.features).map(([group, features]) => (
                    <div key={group}>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{group}</div>
                      <ul className="space-y-1.5">
                        {(features as string[]).map((f: string) => (
                          <li key={f} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {tier.notIncluded.length > 0 && (
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Not Included</div>
                      <ul className="space-y-1.5">
                        {tier.notIncluded.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground/60">
                            <XCircle className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button
                  asChild
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full ${tier.highlighted ? "bg-gradient-to-r from-brand-600 to-brand-500 shadow-glow-sm" : ""}`}
                >
                  <Link href={tier.href}>
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Full Feature Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold text-brand-500">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((row, i) => (
                  <tr key={row.feature} className={`border-b hover:bg-muted/20 ${i % 2 === 0 ? "bg-muted/5" : ""}`}>
                    <td className="p-4">{row.feature}</td>
                    <td className="text-center p-4">
                      {row.starter ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                    <td className="text-center p-4">
                      {row.professional ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                    <td className="text-center p-4">
                      {row.enterprise ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* On-Premise pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Need On-Premise Deployment?</h2>
          <p className="text-muted-foreground mb-6">
            Vrodux ERP is available for on-premise deployment with perpetual license or annual subscription pricing.
            Get in touch with our sales team for a custom quote based on your infrastructure requirements.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact?subject=On-Premise+Pricing">
              Request On-Premise Pricing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
