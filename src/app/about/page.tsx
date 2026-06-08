import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — SoftAxis Technologies LLC",
  description:
    "Learn about SoftAxis Technologies LLC, the company behind Vrodux ERP. Our mission, values, team, and the story behind building a world-class enterprise ERP platform.",
};

const values = [
  { icon: Target, title: "Mission-Driven", description: "We exist to empower businesses with enterprise-grade tools that were previously only accessible to Fortune 500 companies." },
  { icon: Eye, title: "Transparent", description: "No hidden fees, no vendor lock-in, no surprises. We believe in open, honest relationships with our customers." },
  { icon: Heart, title: "Customer-First", description: "Every feature we build, every decision we make starts with one question: does this make our customers more successful?" },
  { icon: Globe, title: "Global-Ready", description: "Built from day one for international use with multi-language, multi-currency, and region-specific compliance." },
];

const milestones = [
  { year: "2018", event: "SoftAxis Technologies founded in Dubai, UAE" },
  { year: "2019", event: "First version of Vrodux ERP launched" },
  { year: "2020", event: "Reached 50 enterprise customers across the GCC" },
  { year: "2021", event: "Launched Restaurant POS and Hospitality modules" },
  { year: "2022", event: "Expanded to 25 countries with multi-language support" },
  { year: "2023", event: "500+ businesses and 40+ countries milestone achieved" },
  { year: "2024", event: "Launched Real Estate and Construction management modules" },
  { year: "2025", event: "Full platform rewrite with next-generation architecture" },
];

const team = [
  { name: "Ahmad Al Sayed", role: "CEO & Co-Founder", bio: "15 years in enterprise software. Former Microsoft and SAP executive.", initials: "AS", color: "bg-brand-500" },
  { name: "Priya Nair", role: "CTO & Co-Founder", bio: "Built scalable SaaS platforms across fintech and ERP domains.", initials: "PN", color: "bg-purple-500" },
  { name: "Omar Khalil", role: "VP of Product", bio: "Product leader with deep expertise in ERP and business software.", initials: "OK", color: "bg-emerald-500" },
  { name: "Sarah Williams", role: "VP of Customer Success", bio: "Led implementation teams at Oracle and helped 100+ ERP deployments.", initials: "SW", color: "bg-orange-500" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About SoftAxis Technologies"
        title="Built by Entrepreneurs, "
        highlightedWord="For Entrepreneurs"
        description="We're SoftAxis Technologies LLC — a Dubai-based enterprise software company on a mission to make world-class ERP accessible to every business, everywhere."
      />

      {/* Stats */}
      <section className="py-16 bg-muted/20 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "2018", label: "Founded" },
              { value: "500+", label: "Clients Worldwide" },
              { value: "40+", label: "Countries" },
              { value: "50+", label: "Team Members" },
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
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              SoftAxis Technologies was founded in 2018 in Dubai by a team of experienced enterprise software professionals
              who were frustrated by the status quo of ERP. The big players — SAP, Oracle, Microsoft — were powerful but
              prohibitively expensive and complex. The cheaper alternatives lacked the depth and industry-specific functionality
              that serious businesses need.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We set out to build something different: an enterprise-grade ERP platform that combines the depth of SAP with
              the usability of modern SaaS applications, at a price point accessible to growing businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, Vrodux ERP powers operations for 500+ businesses across 40+ countries — from single-location restaurants
              in Dubai to multi-national distribution companies across MENA and Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Team */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-2xl border bg-card text-center hover:shadow-sm transition-shadow">
                <div className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center text-white text-xl font-semibold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-xs text-brand-500 font-medium mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.bio}</p>
              </div>
            ))}
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
