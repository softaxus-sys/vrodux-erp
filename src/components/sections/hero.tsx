"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle2, Bell, Settings } from "lucide-react";

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow effects */}
      <div className="absolute -inset-4 bg-brand-500/20 blur-3xl rounded-full opacity-60" />
      <div className="absolute -inset-8 bg-cyan-500/10 blur-3xl rounded-full opacity-40" />

      {/* Main dashboard window */}
      <div className="relative rounded-2xl border bg-card/80 backdrop-blur-sm shadow-premium overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/50">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-32 h-5 rounded-md bg-muted/80 flex items-center justify-center">
              erp.vrodux.com
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-3.5 h-3.5 text-muted-foreground" />
            <Settings className="w-3.5 h-3.5 text-muted-foreground" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-[10px] text-white font-semibold">A</div>
          </div>
        </div>

        {/* Live product screenshot */}
        <div className="relative aspect-[1910/913]">
          <Image
            src="/Verdux-erp-app-ss/dashboard-light.png"
            alt="Vrodux ERP dashboard showing revenue, invoices, orders and customer KPIs"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top dark:hidden"
            priority
          />
          <Image
            src="/Verdux-erp-app-ss/dashboardDark.png"
            alt="Vrodux ERP dashboard showing revenue, invoices, orders and customer KPIs"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="hidden object-cover object-top dark:block"
            priority
          />
        </div>
      </div>

      {/* Floating notification card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-xl border shadow-premium p-3 w-44"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
          </div>
          <span className="text-[10px] font-semibold">Invoice Approved</span>
        </div>
        <div className="text-[9px] text-muted-foreground">INV-2025-0847 · $12,450</div>
        <div className="text-[9px] text-emerald-500 font-medium mt-0.5">Just now</div>
      </motion.div>

      {/* Floating stat card */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-xl border shadow-premium p-3 w-36"
      >
        <div className="text-[9px] text-muted-foreground">Active Modules</div>
        <div className="text-lg font-semibold text-gradient">12 / 12</div>
        <div className="flex gap-0.5 mt-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full bg-brand-500" />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
                The Digital Axis of Your Enterprise
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Badge variant="brand" className="mb-6 gap-2 px-4 py-1.5 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Trusted by 500+ Businesses in 40+ Countries
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              The Enterprise ERP{" "}
              <span className="text-gradient">That Scales</span>{" "}
              With You
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              One unified platform for Finance, HR, Inventory, Sales, CRM, POS, Hospitality,
              Real Estate & more. SaaS or On-Premise. Multi-company. Multi-currency. Global-ready.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="xl" asChild className="group bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 shadow-glow">
                <Link href="/book-demo">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="group">
                <Link href="/solutions">
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Start Free Consultation
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D", "E"].map((l, i) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-semibold text-white"
                    style={{ background: `hsl(${(i * 60 + 220) % 360} 70% 55%)` }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">500+ businesses</span> scaled with Vrodux
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              {["GDPR Compliant", "ISO 27001", "SOC 2 Type II", "99.9% Uptime SLA"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
