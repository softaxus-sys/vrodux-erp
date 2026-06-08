import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Success Stories — Vrodux ERP Case Studies",
  description: "Real-world results from businesses that transformed their operations with Vrodux ERP. Read case studies from retail, restaurant, hospitality, construction, and more.",
};

const caseStudies = [
  {
    company: "AlNoor Trading Group",
    industry: "Trading & Distribution",
    country: "UAE",
    logo: "AN",
    color: "bg-blue-500",
    challenge: "Managing 5 separate software systems for finance, HR, inventory, and sales with no real-time visibility.",
    solution: "Full Vrodux ERP deployment with Finance, HR, Inventory, and Sales modules across 3 companies.",
    results: [
      { metric: "12 days", label: "Faster month-end close" },
      { metric: "40%", label: "Reduction in admin time" },
      { metric: "ROI in 8 months", label: "Full investment recovered" },
    ],
    quote: "Vrodux ERP transformed our financial operations completely. We went from 15-day month-end close to just 3 days.",
    quotePerson: "Ahmed Al Rashidi, CFO",
  },
  {
    company: "Spice Garden Restaurant Group",
    industry: "Food & Beverage",
    country: "UAE & Qatar",
    logo: "SG",
    color: "bg-red-500",
    challenge: "No integration between their POS and kitchen systems, leading to order errors and wasted food.",
    solution: "Restaurant POS + Kitchen Display System + Recipe Management + Finance integration across 8 locations.",
    results: [
      { metric: "60%", label: "Reduction in kitchen errors" },
      { metric: "35%", label: "Less food waste" },
      { metric: "25%", label: "Improvement in food margins" },
    ],
    quote: "The KDS integration eliminated kitchen errors entirely. Our chefs love the real-time order display.",
    quotePerson: "Khalid Al Mansoori, Owner",
  },
  {
    company: "Sunrise Hospitality LLC",
    industry: "Hotels & Hospitality",
    country: "UAE",
    logo: "SH",
    color: "bg-cyan-500",
    challenge: "Standalone PMS with no integration to F&B, finance, or HR systems causing manual work and errors.",
    solution: "Hospitality Management + POS + Finance + HR modules for 3 hotel properties.",
    results: [
      { metric: "45%", label: "Faster guest check-in" },
      { metric: "40%", label: "Less manual data entry" },
      { metric: "$200K/yr", label: "Labor cost savings" },
    ],
    quote: "We finally have one system that covers everything — from front desk to F&B to payroll. The ROI was immediate.",
    quotePerson: "Priya Sharma, Operations Director",
  },
  {
    company: "Gulf Construction Partners",
    industry: "Construction",
    country: "Saudi Arabia",
    logo: "GC",
    color: "bg-amber-500",
    challenge: "No system to track project costs, BOQ, and subcontractor payments, leading to 30%+ cost overruns.",
    solution: "Construction Management + Finance + HR + Procurement modules for 12 concurrent projects.",
    results: [
      { metric: "30%", label: "Reduction in cost overruns" },
      { metric: "20%", label: "Better project margins" },
      { metric: "Real-time", label: "Project P&L visibility" },
    ],
    quote: "Now we know the exact cost and margin of every project in real-time. No more surprises at project close.",
    quotePerson: "Mohammed Al Farsi, CEO",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        badge="Success Stories"
        title="Real Results from "
        highlightedWord="Real Businesses"
        description="Discover how businesses across industries are transforming their operations with Vrodux ERP. Read the stories behind the numbers."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <div
                key={study.company}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${study.color} flex items-center justify-center text-white font-semibold`}>
                      {study.logo}
                    </div>
                    <div>
                      <div className="font-semibold">{study.company}</div>
                      <div className="text-sm text-muted-foreground">{study.industry} · {study.country}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2 text-xs">Challenge</Badge>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <Badge variant="brand" className="mb-2 text-xs">Solution</Badge>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>

                  <blockquote className="pl-4 border-l-2 border-brand-500 italic text-muted-foreground text-sm mb-2">
                    "{study.quote}"
                  </blockquote>
                  <div className="text-xs text-muted-foreground pl-4">— {study.quotePerson}</div>
                </div>

                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="p-8 rounded-2xl border bg-card">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="w-5 h-5 text-emerald-500" />
                      <span className="font-semibold">Key Results</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center mb-6">
                      {study.results.map((r) => (
                        <div key={r.label} className="p-3 rounded-xl bg-muted/50">
                          <div className="text-xl font-bold text-gradient">{r.metric}</div>
                          <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
                        </div>
                      ))}
                    </div>
                    <Button size="sm" className="w-full" asChild>
                      <Link href="/book-demo">
                        Get Similar Results <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
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
