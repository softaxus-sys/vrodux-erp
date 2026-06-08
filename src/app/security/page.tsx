import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Shield, Lock, Eye, Server, RefreshCw, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Compliance — Vrodux ERP",
  description: "Learn about Vrodux ERP's enterprise-grade security, compliance certifications, and data protection practices.",
};

const securityFeatures = [
  { icon: Lock, title: "Data Encryption", description: "All data encrypted at rest (AES-256) and in transit (TLS 1.3). Keys managed with industry-standard HSMs.", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Shield, title: "Access Control", description: "Role-based access control (RBAC) with granular permissions, 2FA, and session management.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Eye, title: "Audit Trail", description: "Complete audit log of all user activities, data changes, and system events with tamper-proof records.", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: Server, title: "Infrastructure Security", description: "Hosted on enterprise-grade cloud infrastructure with DDoS protection, WAF, and intrusion detection.", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: RefreshCw, title: "Backup & Recovery", description: "Automated daily backups with point-in-time recovery. RTO < 4 hours, RPO < 1 hour.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { icon: Award, title: "Compliance", description: "GDPR compliant. VAT compliance for UAE, KSA, and other GCC countries. ISO 27001 aligned practices.", color: "text-amber-500", bg: "bg-amber-500/10" },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        badge="Security First"
        title="Enterprise-Grade "
        highlightedWord="Security"
        description="Your business data is your most valuable asset. Vrodux ERP is built with security at every layer — from infrastructure to application to data handling."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl border bg-card hover:shadow-sm transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Security Policies & Certifications</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {["GDPR Compliant", "ISO 27001 Aligned", "SOC 2 Type II", "PCI DSS Ready", "HIPAA Capable", "UAE PDPL Compliant"].map((cert) => (
              <div key={cert} className="p-4 rounded-xl border bg-card text-sm font-medium flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
