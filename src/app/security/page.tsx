import { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageJsonLd } from "@/components/shared/page-jsonld";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Shield, Lock, Eye, Server, RefreshCw, Award, Fingerprint, MonitorSmartphone, UserCog } from "lucide-react";

export const metadata: Metadata = pageMeta({
  title: "Security & Compliance",
  description:
    "Learn about Vrodux ERP's enterprise-grade security: encryption, access control, audit logs, backups and data protection practices for your business data.",
  path: "/security",
});

const securityFeatures = [
  { icon: Lock, title: "Data Encryption", description: "Connections use TLS. Sensitive values such as API tokens and two-factor secrets are stored encrypted.", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Shield, title: "Access Control", description: "Role-based access control (RBAC) with granular permissions, 2FA, and session management. Each customer's data is kept separate from every other customer's (tenant isolation).", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Eye, title: "Audit Trail", description: "A full audit log records who created, changed or deleted what, and when.", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: Server, title: "Infrastructure Security", description: "Hosted on enterprise-grade cloud infrastructure with DDoS protection, WAF, and intrusion detection.", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: RefreshCw, title: "Backup & Recovery", description: "Automated daily backups. A restore can lose up to 24 hours of changes since the last backup.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { icon: Award, title: "Compliance", description: "Built on ISO 27001-aligned practices and designed to support GDPR and UAE PDPL requirements. VAT features for the UAE.", color: "text-amber-500", bg: "bg-amber-500/10" },
];

// TODO(owner): confirm before restoring any of these. Removed until evidence exists:
//  - "SOC 2 Type II - In Progress" (only if the audit is actually underway)
//  - database-level encryption at rest and "TLS 1.3" (only secrets are confirmed encrypted)
//  - a stronger backup target than "up to 24 hours" (RPO/RTO)
//  - "Infrastructure Security" card: DDoS protection, WAF and intrusion detection are not confirmed in the product repo
// "HIPAA Capable" and "PCI DSS Ready" were removed on purpose: HIPAA is unverified; Vrodux does not handle card numbers.
const securityPractices = [
  "Built on ISO 27001-aligned practices",
  "Designed to support GDPR and UAE PDPL requirements",
  "We never store card numbers. Card payments run on Stripe and PayPal's hosted pages.",
];

const accountSecurityFeatures = [
  { icon: Fingerprint, title: "Two-Factor Authentication", description: "Every user can enable TOTP-based 2FA with an authenticator app, plus one-time backup codes in case they lose access to it.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: MonitorSmartphone, title: "Per-Device Session Management", description: "A \"My Devices\" screen lists every active session tied to a user's account, so they can remotely sign out any device the moment something looks unfamiliar.", color: "text-blue-500", bg: "bg-blue-500/10" },
];

const accessControlFeatures = [
  { icon: UserCog, title: "Per-User Permission Overrides", description: "Roles cover most cases — but when a role almost fits and not quite, admins can grant or withhold a specific permission for an individual user, without creating a one-off role just for them.", color: "text-violet-500", bg: "bg-violet-500/10" },
];

export default function SecurityPage() {
  return (
    <>
      <PageJsonLd type="WebPage" name="Vrodux ERP Security" description={metadata.description as string} path="/security" crumbs={[{ name: "Security", path: "/security" }]} />
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
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-semibold mb-2 text-center">Account Security</h2>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Controls every user manages for their own account.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {accountSecurityFeatures.map((feature) => (
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

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-semibold mb-2 text-center">Fine-Grained Permissions</h2>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Exceptions admins can make on top of standard role-based access.
          </p>
          <div className="max-w-xl mx-auto">
            {accessControlFeatures.map((feature) => (
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
            {securityPractices.map((cert) => (
              <div key={cert} className="p-4 rounded-xl border bg-card text-sm font-medium flex items-center justify-center gap-2 text-left">
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
