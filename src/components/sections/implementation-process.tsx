"use client";

import { motion } from "framer-motion";
import { ClipboardList, Settings, Rocket, BookOpen, HeartHandshake } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Discovery & Planning",
    description: "Our consultants analyze your business processes, map requirements, and design a tailored ERP implementation roadmap.",
    duration: "Week 1-2",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
    border: "border-brand-500/30",
  },
  {
    step: "02",
    icon: Settings,
    title: "Configuration & Setup",
    description: "We configure Vrodux ERP to your exact specifications — chart of accounts, workflows, approvals, and user roles.",
    duration: "Week 3-5",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Data Migration & Training",
    description: "Historical data is carefully migrated and validated. Your team receives comprehensive role-based training.",
    duration: "Week 6-8",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go Live",
    description: "Your system goes live with our team fully available. We monitor performance and resolve any issues immediately.",
    duration: "Week 9",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
  {
    step: "05",
    icon: HeartHandshake,
    title: "Post-Launch Support",
    description: "Ongoing support, optimization, and regular updates keep your ERP running at peak performance.",
    duration: "Ongoing",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
  },
];

export function ImplementationProcess() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From Contract to{" "}
            <span className="text-gradient">Go-Live in Weeks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our proven 5-step implementation methodology ensures a smooth, risk-free ERP deployment
            with minimal disruption to your business.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/30 to-brand-500/0" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative lg:flex lg:gap-8 lg:items-start ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } mb-12`}
              >
                <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                  <div className={`p-6 rounded-2xl border ${step.border} bg-card hover:shadow-sm transition-shadow`}>
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                        <step.icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-muted-foreground">{step.duration}</div>
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 top-6 w-10 h-10 rounded-full bg-card border-2 border-brand-500/50 items-center justify-center z-10">
                  <span className={`text-sm font-bold ${step.color}`}>{step.step}</span>
                </div>

                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
