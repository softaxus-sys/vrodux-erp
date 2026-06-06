import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { ImplementationProcess } from "@/components/sections/implementation-process";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Implementation Services — Vrodux ERP",
  description: "Professional ERP implementation services by SoftAxis Technologies. Get your Vrodux ERP up and running quickly with our proven methodology.",
};

const packages = [
  {
    name: "Express",
    duration: "3-4 Weeks",
    description: "For small businesses with standard requirements",
    includes: ["Core module setup", "Basic data migration", "User training (online)", "Go-live support (1 week)"],
    price: "Starting from $2,999",
  },
  {
    name: "Professional",
    duration: "6-8 Weeks",
    description: "For growing businesses with moderate customization",
    includes: ["Full module configuration", "Data migration & validation", "Custom workflows", "On-site training", "Go-live support (2 weeks)", "Post-launch optimization"],
    price: "Starting from $7,999",
  },
  {
    name: "Enterprise",
    duration: "3-6 Months",
    description: "For large enterprises with complex requirements",
    includes: ["Full platform customization", "Complex data migration", "Custom integrations", "Multi-site rollout", "Change management support", "Dedicated project manager", "6-month post-launch support"],
    price: "Custom quote",
  },
];

export default function ImplementationPage() {
  return (
    <>
      <PageHero
        badge="Implementation Services"
        title="From Contract to "
        highlightedWord="Live in Weeks"
        description="Our certified ERP consultants deliver smooth, risk-free Vrodux ERP implementations with our proven 5-phase methodology — on time and on budget."
      />

      <section className="py-12 bg-muted/20 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, value: "200+", label: "Implementations Delivered" },
              { icon: Clock, value: "6 Weeks", label: "Average Time-to-Go-Live" },
              { icon: CheckCircle2, value: "98%", label: "On-Time Delivery Rate" },
              { icon: Users, value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImplementationProcess />

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Implementation <span className="text-gradient">Packages</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={pkg.name} className={`p-7 rounded-2xl border bg-card flex flex-col ${i === 1 ? "border-brand-500 shadow-glow-sm" : ""}`}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <div className="text-brand-500 font-semibold mt-1">{pkg.duration}</div>
                  <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold mb-3">{pkg.price}</div>
                <Button asChild variant={i === 1 ? "default" : "outline"}>
                  <Link href="/contact?subject=Implementation+Services">
                    Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
