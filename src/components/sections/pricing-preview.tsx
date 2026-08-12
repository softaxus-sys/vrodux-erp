"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$249",
    period: "/ month",
    description: "Perfect for small businesses getting started with ERP",
    highlighted: false,
    features: [
      "Up to 10 users",
      "Core ERP, Finance & Accounting",
      "HR & Payroll",
      "Inventory & Sales",
      "Basic CRM & reporting",
      "Standard support",
      "Cloud hosting",
      "30-day free trial",
    ],
    cta: "View Plan",
    href: "/pricing#plans",
  },
  {
    name: "Professional",
    price: "$699",
    period: "/ month",
    description: "For growing businesses that need the full platform",
    highlighted: true,
    features: [
      "Up to 50 users",
      "Everything in Starter",
      "Advanced CRM & Sales Pipeline",
      "POS, Restaurant & KDS",
      "Multi-company & Multi-Currency",
      "Advanced Analytics & BI",
      "API Access & Custom Workflows",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    href: "/pricing#plans",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large enterprises with complex requirements",
    highlighted: false,
    features: [
      "Unlimited users & companies",
      "Everything in Professional",
      "Advanced permissions & BI",
      "Custom integrations & development",
      "Dedicated support & SLA",
      "On-premise deployment option",
      "Dedicated account management",
    ],
    cta: "Talk to Sales",
    href: "/contact?plan=enterprise",
  },
];

export function PricingPreview() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No per-module pricing. No hidden fees. Get the complete Vrodux ERP platform
            at one straightforward price.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-7 rounded-2xl border transition-all duration-300 ${
                tier.highlighted
                  ? "border-brand-500 bg-brand-500/5 shadow-glow scale-[1.02]"
                  : "bg-card hover:shadow-md"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="gap-1 bg-brand-500 text-white px-4">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-center"
        >
          <Button variant="ghost" size="lg" asChild>
            <Link href="/pricing">
              View Full Pricing & Feature Comparison
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
