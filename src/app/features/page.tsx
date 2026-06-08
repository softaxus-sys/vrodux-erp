import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ModulesOverview } from "@/components/sections/modules-overview";
import { AiChatSection } from "@/components/sections/ai-chat";
import { FinalCTA } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Globe, Shield, Zap, RefreshCw, BarChart3, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Complete ERP Platform",
  description:
    "Explore all 12 Vrodux ERP modules including Finance, HR, Inventory, CRM, POS, Restaurant, Hospitality, Real Estate, Construction, and more.",
};

const platformCapabilities = [
  { icon: Layers, title: "Multi-Company & Branch", description: "Manage multiple legal entities and branches with consolidated reporting" },
  { icon: Globe, title: "Multi-Currency & Language", description: "Full multi-currency support with automatic exchange rate updates" },
  { icon: RefreshCw, title: "RTL & Arabic Support", description: "Native right-to-left support with complete Arabic language interface" },
  { icon: Shield, title: "Role-Based Access Control", description: "Granular permission management with custom roles and access levels" },
  { icon: Zap, title: "Workflow Automation", description: "Build approval workflows, automated alerts, and business process automation" },
  { icon: BarChart3, title: "Full Audit Trail", description: "Complete audit log of all system activities for compliance and security" },
  { icon: CheckCircle2, title: "VAT & GST Compliance", description: "Country-specific tax frameworks for UAE, KSA, India, and more" },
  { icon: Globe, title: "API Integrations", description: "RESTful API for seamless integration with third-party applications" },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        badge="12 Powerful Modules"
        title="Everything Your Business Needs, "
        highlightedWord="All in One Platform"
        description="Vrodux ERP brings Finance, HR, Inventory, Sales, CRM, POS, Restaurant, Hospitality, Real Estate, Construction, and Analytics together in a single, unified platform."
      />

      <ModulesOverview />

      {/* AI Chat */}
      <div id="ai-chat">
        <AiChatSection />
      </div>

      {/* Platform Capabilities */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Platform <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Enterprise-grade infrastructure and compliance features built for global businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-5 rounded-2xl border bg-card hover:shadow-sm transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-3">
                  <cap.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-semibold mb-1.5">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Flexible <span className="text-gradient">Deployment Options</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "SaaS (Cloud)",
                badge: "Recommended",
                features: ["Zero infrastructure management", "Automatic updates", "99.9% uptime SLA", "Pay as you grow", "Instant setup"],
                color: "border-brand-500 bg-brand-500/5",
              },
              {
                title: "On-Premise",
                badge: "For Full Control",
                features: ["Host on your own servers", "Full data control", "No monthly fees", "Custom security policies", "Offline capable"],
                color: "border-muted",
              },
            ].map((option) => (
              <div key={option.title} className={`p-6 rounded-2xl border ${option.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-xl">{option.title}</h3>
                  <Badge variant="brand">{option.badge}</Badge>
                </div>
                <ul className="space-y-2">
                  {option.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
