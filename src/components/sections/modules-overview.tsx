"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { coreModules, industryModules, totalModuleCount } from "@/lib/modules-data";

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
            {totalModuleCount} Integrated Modules
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
