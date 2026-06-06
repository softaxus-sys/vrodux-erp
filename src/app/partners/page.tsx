import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Handshake, DollarSign, BookOpen, Award, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners & Resellers — Vrodux ERP Partner Program",
  description: "Join the Vrodux ERP partner ecosystem. Become a reseller, implementation partner, or technology partner and grow your business.",
};

const partnerTiers = [
  {
    name: "Authorized Reseller",
    icon: DollarSign,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    description: "Sell Vrodux ERP licenses to your client base with attractive margins and full sales support.",
    benefits: ["20-30% recurring commissions", "Sales training & materials", "Co-marketing support", "Lead sharing program", "Partner portal access"],
    requirements: ["Established IT/software sales team", "Min. 5 prospects per quarter", "Complete sales certification"],
  },
  {
    name: "Implementation Partner",
    icon: Users,
    color: "text-brand-500",
    bg: "bg-brand-500/10",
    description: "Deliver Vrodux ERP implementations to clients and earn implementation and support revenue.",
    benefits: ["Implementation fee revenue", "Technical training & certification", "Priority technical support", "Joint implementation projects", "Co-branded delivery"],
    requirements: ["Technical team with ERP experience", "Minimum 2 certified consultants", "Complete implementation training"],
  },
  {
    name: "Technology Partner",
    icon: Globe,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    description: "Integrate your software or platform with Vrodux ERP through our API and become a listed integration partner.",
    benefits: ["API access & documentation", "Listed in partner marketplace", "Co-marketing opportunities", "Technical integration support", "Joint case studies"],
    requirements: ["Working integration or app", "Technical documentation", "Support commitment for integration"],
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        badge="Partner Program"
        title="Grow Together with "
        highlightedWord="Vrodux ERP"
        description="Join our global partner ecosystem and build a profitable ERP business. We support our partners with training, tools, and co-marketing to help you succeed."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {partnerTiers.map((tier) => (
              <div key={tier.name} className="p-7 rounded-2xl border bg-card hover:shadow-md transition-shadow flex flex-col">
                <div className={`w-12 h-12 rounded-xl ${tier.bg} flex items-center justify-center mb-4`}>
                  <tier.icon className={`w-6 h-6 ${tier.color}`} />
                </div>
                <h3 className="font-bold text-xl mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-5">{tier.description}</p>

                <div className="mb-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Benefits</div>
                  <ul className="space-y-1.5">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Award className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Requirements</div>
                  <ul className="space-y-1.5">
                    {tier.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild>
                  <Link href="/contact?subject=Partner+Program+Inquiry">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Handshake className="w-12 h-12 text-brand-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Partner Support</h2>
          <p className="text-muted-foreground mb-6">
            All Vrodux partners receive dedicated support including onboarding, training resources,
            a partner portal, and a dedicated partner success manager.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact?subject=Partner+Program+Inquiry">
              Apply for Partnership
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
