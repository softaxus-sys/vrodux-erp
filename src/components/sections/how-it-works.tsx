"use client";

import { motion } from "framer-motion";
import { Building2, Layers, SlidersHorizontal, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Building2,
    title: "Choose Your Industry",
    description: "Tell us about your business during onboarding — retail, restaurants, real estate, construction, and more. Vrodux adapts to your industry from day one.",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
  },
  {
    step: "02",
    icon: Layers,
    title: "Get Auto-Configured",
    description: "Vrodux activates the right mix of core modules — Finance, HR, Inventory, Sales — plus the industry-specific tools your sector needs.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    step: "03",
    icon: SlidersHorizontal,
    title: "Customize Your Workspace",
    description: "Fine-tune workflows, roles, branches, and branding to match exactly how your team operates — no generic, one-size-fits-all setup.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go Live & Scale",
    description: "Launch with guided onboarding, then add modules, branches, or users as you grow — all on the same platform, no rip-and-replace.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            How Vrodux <span className="text-gradient">Gets You Running</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From your first login to a fully configured workspace — Vrodux adapts to your
            business, not the other way around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border bg-card hover:shadow-glow-sm transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center`}>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <span className="text-3xl font-bold text-muted-foreground/20">{step.step}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
