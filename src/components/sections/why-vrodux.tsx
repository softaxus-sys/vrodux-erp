"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisons = [
  { feature: "All-in-One Platform", vrodux: true, others: false },
  { feature: "Restaurant & KDS Module", vrodux: true, others: false },
  { feature: "Hospitality Management", vrodux: true, others: false },
  { feature: "Real Estate Module", vrodux: true, others: false },
  { feature: "Construction Management", vrodux: true, others: false },
  { feature: "Multi-Company & Branch", vrodux: true, others: true },
  { feature: "Multi-Currency & Language", vrodux: true, others: true },
  { feature: "RTL / Arabic Support", vrodux: true, others: false },
  { feature: "VAT Compliance & Tax Reporting", vrodux: true, others: false },
  { feature: "SaaS + On-Premise Options", vrodux: true, others: false },
  { feature: "Affordable Pricing", vrodux: true, others: false },
  { feature: "Dedicated Onboarding", vrodux: true, others: false },
];

const advantages = [
  {
    title: "Industry-Specific Depth",
    description: "Unlike generic ERPs, Vrodux is built with deep modules for restaurants, hotels, construction, and real estate — not just add-ons.",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
  },
  {
    title: "Middle East Ready",
    description: "Built for UAE, Saudi Arabia, and the wider MENA region with Arabic RTL support, VAT compliance, and local tax frameworks.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Flexible Deployment",
    description: "Choose SaaS for simplicity or On-Premise for control. We support both with the same feature set and enterprise-grade security.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "All Inclusive Pricing",
    description: "No module-by-module pricing. Get the complete platform at one transparent price. No surprises, no hidden fees.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function WhyVrodux() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Why Businesses Choose{" "}
            <span className="text-gradient">Vrodux Over Others</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We built Vrodux to solve the gaps left by Oracle NetSuite, SAP, and Odoo —
            especially for businesses in the Middle East and specialized industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-3 bg-muted/50 px-4 py-3 text-sm font-semibold border-b">
              <span>Feature</span>
              <span className="text-center text-brand-500">Vrodux ERP</span>
              <span className="text-center text-muted-foreground">Others</span>
            </div>
            {comparisons.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-3 px-4 py-3 border-b last:border-0 hover:bg-muted/20 transition-colors"
              >
                <span className="text-sm">{row.feature}</span>
                <span className="flex justify-center">
                  {row.vrodux ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </span>
                <span className="flex justify-center">
                  {row.others ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 opacity-50" />
                  )}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Advantages */}
          <div className="space-y-5">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl border bg-card hover:shadow-sm transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl ${adv.bg} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle2 className={`w-5 h-5 ${adv.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
