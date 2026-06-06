import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Cloud, Server, Globe, Shield, Zap, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — ERP Deployment & Business Solutions",
  description:
    "Vrodux ERP solutions for SaaS, On-Premise, multi-company, multi-currency, and global businesses. Discover the right deployment model for your needs.",
};

const deploymentOptions = [
  {
    icon: Cloud,
    title: "SaaS (Cloud ERP)",
    badge: "Most Popular",
    description: "Access Vrodux ERP from anywhere with our managed cloud infrastructure. Zero hardware investment, automatic updates, and enterprise-grade security.",
    benefits: [
      "Zero infrastructure management",
      "Automatic backups & updates",
      "99.9% uptime SLA guarantee",
      "Pay-as-you-grow pricing",
      "Setup in minutes, not months",
      "Access from any device",
    ],
    cta: "Start with SaaS",
    href: "/book-demo?type=saas",
    color: "border-brand-500 bg-brand-500/5",
  },
  {
    icon: Server,
    title: "On-Premise ERP",
    badge: "Full Control",
    description: "Deploy Vrodux ERP on your own servers for complete data sovereignty, custom security policies, and offline capability.",
    benefits: [
      "Complete data control",
      "Custom security policies",
      "No recurring SaaS fees",
      "Offline capability",
      "Integration with internal systems",
      "Custom server configuration",
    ],
    cta: "Request On-Premise Quote",
    href: "/contact?subject=On-Premise+Deployment",
    color: "border-muted",
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Global Multi-Company",
    description: "Manage multiple legal entities across different countries from a single Vrodux ERP instance with consolidated financial reporting.",
    features: ["Multi-company ledger", "Inter-company transactions", "Consolidated P&L", "Group reporting"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with role-based access, full audit trails, and compliance with GDPR, VAT, GST, and local regulations.",
    features: ["RBAC with custom roles", "Full audit trail", "Data encryption", "2FA authentication"],
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate your business processes with custom approval workflows, automated alerts, and business rules engine.",
    features: ["Custom approval workflows", "Email/SMS notifications", "Business rules engine", "API triggers"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards, custom reports, and business intelligence tools to help you make data-driven decisions.",
    features: ["Executive dashboards", "Custom report builder", "KPI tracking", "Data export (Excel/PDF)"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="ERP Solutions"
        title="The Right ERP Solution "
        highlightedWord="for Your Business"
        description="Whether you need cloud ERP or on-premise, a single company or a multinational group — Vrodux ERP has the deployment model and capabilities to match your needs."
      />

      {/* Deployment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Choose Your <span className="text-gradient">Deployment Model</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deploymentOptions.map((option) => (
              <div key={option.title} className={`p-7 rounded-2xl border ${option.color} flex flex-col`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <Badge variant="brand">{option.badge}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-5 flex-1">{option.description}</p>
                <ul className="space-y-2 mb-6">
                  {option.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href={option.href}>
                    {option.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Platform <span className="text-gradient">Capabilities</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-6 rounded-2xl border bg-card hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <cap.icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="font-bold text-lg">{cap.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{cap.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.features.map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {f}
                    </span>
                  ))}
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
