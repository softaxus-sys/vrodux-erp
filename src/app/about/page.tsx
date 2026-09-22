import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Target, Eye, ShieldCheck, Compass, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Softaxis Technologies LLC",
  description:
    "Learn about Softaxis Technologies LLC, the Dubai-based software engineering company behind Vrodux ERP. Founded in 2019, DET-licensed, and trusted by clients across Canada, the UAE, and the GCC.",
};

const values = [
  { icon: Code2, title: "Code Quality First", description: "We write maintainable, well-tested code with documentation that your future team can confidently extend." },
  { icon: Target, title: "Outcome Over Output", description: "We measure success by business results — not lines of code or hours logged. We're invested in your success." },
  { icon: Eye, title: "Radical Transparency", description: "No surprises. We communicate blockers early, share progress regularly, and never hide behind ambiguity." },
  { icon: ShieldCheck, title: "Security by Design", description: "Security is not a feature — it's the foundation. Every project is built with threat modelling from day one." },
  { icon: Compass, title: "Long-term Thinking", description: "We architect for tomorrow — systems that scale, patterns that age well, and choices that reduce future debt." },
  { icon: HeartHandshake, title: "Client Partnership", description: "We're not a vendor — we're an extension of your team. We care about your product as much as you do." },
];

const milestones = [
  { year: "2019", event: "Founded in Dubai under the brand Softaxus, with a clear mission: build software that actually works for the businesses using it" },
  { year: "2019–2023", event: "Delivered backend revamps, cross-platform mobile apps, cloud migrations, and AI integrations for clients across Canada, the UAE, and beyond" },
  { year: "2024", event: "Incorporated as Softaxis Technologies LLC in Dubai, UAE, formalizing operations to serve enterprise and government clients across the Gulf" },
  { year: "2025", event: "Operating as a DET-licensed engineering firm with a 5.0 / 5.0 rating on Clutch, building Vrodux ERP on next-generation architecture" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Softaxis Technologies"
        title="Engineering Built "
        highlightedWord="for the Modern World"
        description="We're Softaxis Technologies LLC — a Dubai-registered software engineering firm founded in 2019, delivering high-quality digital products for clients across the globe."
      />

      {/* Stats */}
      <section className="py-16 bg-muted/20 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "2019", label: "Founded" },
              { value: "10–49", label: "Engineers on Team" },
              { value: "5.0 / 5.0", label: "Rating on Clutch" },
              { value: "Global", label: "Client Reach (CA, EU, GCC)" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">From Softaxus to Softaxis Technologies</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              We started in 2019 under the brand Softaxus — a lean engineering team with a clear mission: build software
              that actually works for the businesses using it. Over the years, we&apos;ve delivered backend revamps,
              cross-platform mobile apps, cloud migrations, and AI integrations for clients in Canada, the UAE, and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In 2024, we formalized our operations by incorporating as Softaxis Technologies LLC in Dubai, UAE — a
              strategic move that reflects our growth and commitment to serving enterprise and government clients across
              the Gulf region.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, Vrodux ERP is built and maintained by that same team — a DET-licensed software engineering company
              holding an active Professional Unified Licence (No. EU9732) issued by Dubai&apos;s Department of Economy
              &amp; Tourism, with a 5.0 / 5.0 rating on Clutch.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border bg-card text-center hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/30 to-brand-500/0" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-4 pl-12 relative">
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{m.year}</span>
                    <p className="text-sm font-medium mt-0.5">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6">We're always looking for talented people to join our mission of making enterprise ERP accessible to everyone.</p>
          <Button asChild size="lg">
            <Link href="/careers">
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
