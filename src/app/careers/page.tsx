import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join the Vrodux Team",
  description: "Join SoftAxis Technologies and help build the future of enterprise ERP. Open positions in engineering, sales, customer success, and more.",
};

const openings = [
  { title: "Senior Full-Stack Engineer", department: "Engineering", location: "Dubai, UAE", type: "Full-time", level: "Senior" },
  { title: "ERP Implementation Consultant", department: "Professional Services", location: "Dubai, UAE / Remote", type: "Full-time", level: "Mid-Senior" },
  { title: "Enterprise Sales Executive", department: "Sales", location: "Dubai, UAE", type: "Full-time", level: "Senior" },
  { title: "Customer Success Manager", department: "Customer Success", location: "Dubai, UAE", type: "Full-time", level: "Mid" },
  { title: "Product Manager — Finance Module", department: "Product", location: "Dubai, UAE", type: "Full-time", level: "Senior" },
  { title: "UI/UX Designer", department: "Design", location: "Remote", type: "Full-time", level: "Mid-Senior" },
  { title: "DevOps Engineer", department: "Engineering", location: "Dubai, UAE / Remote", type: "Full-time", level: "Mid" },
  { title: "Technical Support Specialist", department: "Support", location: "Dubai, UAE", type: "Full-time", level: "Mid" },
];

const perks = [
  "Competitive salary + equity",
  "Flexible remote work policy",
  "Learning & development budget",
  "Health insurance coverage",
  "Annual performance bonus",
  "30 days annual leave",
  "Modern office in Dubai Marina",
  "Relocation assistance",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Join Our Team"
        title="Build the Future of "
        highlightedWord="Enterprise ERP"
        description="Join 50+ talented people at SoftAxis Technologies working on Vrodux ERP. We're growing fast and looking for exceptional people to grow with us."
      />

      {/* Why join us */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Why Join Vrodux?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {perks.map((perk) => (
              <div key={perk} className="p-4 rounded-xl border bg-card text-sm text-center">
                {perk}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-3">
            {openings.map((job) => (
              <div key={job.title} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl border bg-card hover:shadow-sm transition-shadow gap-4">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Badge variant="outline">{job.level}</Badge>
                  <Button size="sm" asChild>
                    <Link href={`/contact?subject=Job+Application+${encodeURIComponent(job.title)}`}>
                      Apply Now <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl border bg-brand-500/5 border-brand-500/20 text-center">
            <h3 className="font-bold mb-2">Don't see your role?</h3>
            <p className="text-muted-foreground text-sm mb-4">We're always looking for exceptional talent. Send us your CV.</p>
            <Button variant="outline" asChild>
              <Link href="/contact?subject=Open+Application">Send Open Application</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
