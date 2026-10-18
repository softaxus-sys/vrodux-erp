import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { IndustryDemoButton } from "@/components/demos/industry-demo-button";
import { getDemoCatalog } from "@/lib/demos";
import {
  ArrowRight, ShoppingBag, UtensilsCrossed, Hotel, Home, HardHat,
  Stethoscope, GraduationCap, ShieldCheck, Building2, CheckCircle2, Sparkles, Stamp,
  Factory, Library, Ship,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Solutions — ERP for Every Sector",
  description:
    "Vrodux ERP delivers tailored solutions for Retail, Restaurants & F&B, Hospitality, Real Estate, Construction, Healthcare, Education, Insurance, B2B Services, Visa Services, Manufacturing, Library, and Import & Export.",
};

const industries = [
  {
    id: "retail",
    image: { src: "/images/industries/retail.jpg", alt: "Retail checkout counter running Vrodux POS with a barcode scanner" },
    icon: ShoppingBag,
    name: "Retail",
    status: "live" as const,
    headline: "Run a Smarter Retail Business",
    description: "From single-store to multi-branch retail operations, Vrodux ERP gives you real-time inventory, POS, customer loyalty, and financial reporting in one platform.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    modules: ["Retail POS", "Inventory & Warehouses", "Customer & Loyalty Points", "Finance & Accounting", "Multi-branch Management"],
    stats: [
      { value: "40%", label: "Reduction in stockouts" },
      { value: "2x", label: "Faster checkout speed" },
      { value: "30%", label: "Improvement in margins" },
    ],
  },
  {
    id: "restaurants",
    image: { src: "/images/industries/restaurant.jpg", alt: "Chefs plating dishes in a busy kitchen with a Vrodux restaurant POS and kitchen display" },
    icon: UtensilsCrossed,
    name: "Restaurants & F&B",
    status: "live" as const,
    headline: "Full-Stack Restaurant Management",
    description: "Restaurant POS with table management, a live Kitchen Display System (KDS), recipe & ingredient costing, and integrated financial accounting.",
    color: "from-red-500 to-orange-600",
    bg: "bg-red-500/10",
    modules: ["Restaurant POS", "Kitchen Display System (KDS)", "Recipe & Ingredient Management", "Table Management", "Finance & Accounting"],
    stats: [
      { value: "35%", label: "Reduction in food waste" },
      { value: "50%", label: "Faster order processing" },
      { value: "25%", label: "Lower food costs" },
    ],
  },
  {
    id: "hospitality",
    image: { src: "/images/industries/hospitality.jpg", alt: "Hotel front desk in a marble lobby, a receptionist checking in a guest on a tablet" },
    icon: Hotel,
    name: "Hospitality & Hotels",
    status: "beta" as const,
    headline: "Front Desk, Rooms & Housekeeping — One Screen",
    description: "Manage bookings, room assignments, and housekeeping from a connected workspace, with F&B service powered by our Restaurant POS and guest billing tied directly into Finance.",
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10",
    modules: ["Bookings & Reservations", "Room Management", "Housekeeping", "Restaurant POS Integration", "Finance & Billing"],
    stats: [
      { value: "Beta", label: "New features shipping regularly" },
      { value: "1", label: "Connected booking-to-billing flow" },
      { value: "24/7", label: "Front-desk visibility" },
    ],
  },
  {
    id: "realestate",
    image: { src: "/images/industries/real-estate.jpg", alt: "Real estate office with a property model and Vrodux real estate management on a tablet" },
    icon: Home,
    name: "Real Estate",
    status: "live" as const,
    headline: "Manage Your Property Portfolio",
    description: "Properties, units, tenants, contracts, and brokers — covering brokerage, leasing, and property management end-to-end, with a dedicated sales pipeline for your agents.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    modules: ["Properties & Units", "Tenants & Contracts", "Brokers & Sales Pipeline", "CRM", "Finance & Accounting"],
    stats: [
      { value: "50%", label: "Less admin time" },
      { value: "98%", label: "Lease tracking accuracy" },
      { value: "40%", label: "Faster rent collection" },
    ],
  },
  {
    id: "construction",
    image: { src: "/images/industries/construction.jpg", alt: "Site manager in a hard hat reviewing plans on a tablet at a high-rise construction site in Dubai" },
    icon: HardHat,
    name: "Construction",
    status: "live" as const,
    headline: "Bid, Plan, and Build with Precision",
    description: "From tender to site execution — manage bidding & contracts, BOQ (Bill of Quantities), contractors, and site progress, fully connected to Purchase, HR, and Finance.",
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
    modules: ["Bidding & Contracts", "BOQ Management", "Contractor Management", "Site Management", "Purchase & Finance"],
    stats: [
      { value: "35%", label: "Cost overrun reduction" },
      { value: "20%", label: "Better project margins" },
      { value: "60%", label: "Less administrative work" },
    ],
  },
  {
    id: "healthcare",
    image: { src: "/images/industries/healthcare.jpg", alt: "Doctor reviewing patient records on a tablet with a patient in a modern clinic" },
    icon: Stethoscope,
    name: "Healthcare",
    status: "early-access" as const,
    headline: "Healthcare Operations, Built on One Platform",
    description: "Patient records, appointment scheduling, and billing groundwork for clinics and small healthcare providers — backed by the same HR, Payroll, and Finance that run the rest of your business.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    modules: ["Patient Records", "Appointment Scheduling", "Patient Billing", "HR & Payroll", "Finance & Accounting"],
    roadmap: ["Insurance claims integration", "Pharmacy & inventory linkage", "Advanced compliance reporting"],
  },
  {
    id: "education",
    image: { src: "/images/industries/education.jpg", alt: "School administrators reviewing student records on a laptop and tablet" },
    icon: GraduationCap,
    name: "Education",
    status: "early-access" as const,
    headline: "From Admissions to Accounts, On One System",
    description: "Student records, course management, and fee-tracking groundwork for schools, colleges, and training centers — connected to HR, Payroll, Procurement, and Finance.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    modules: ["Student Records & Admissions", "Course Management", "Fee Management", "HR & Payroll", "Finance & Accounting"],
    roadmap: ["Online fee payment portal", "Parent/guardian portal", "Attendance & gradebook"],
  },
  {
    id: "insurance",
    image: { src: "/images/industries/insurance.jpg", alt: "Insurance advisor walking a young couple through policy options on a tablet" },
    icon: ShieldCheck,
    name: "Insurance",
    status: "early-access" as const,
    headline: "Policy & Claims Management for Brokers and Agencies",
    description: "Policy administration and claims tracking for insurance brokers and agencies — built on the same CRM and Finance foundation as the rest of Vrodux ERP.",
    color: "from-indigo-500 to-blue-700",
    bg: "bg-indigo-500/10",
    modules: ["Policy Administration", "Claims Tracking", "CRM & Customer Records", "Finance & Accounting"],
    roadmap: ["Automated renewal reminders", "Commission tracking", "Carrier integrations"],
  },
  {
    id: "b2bservices",
    image: { src: "/images/industries/b2b-services.jpg", alt: "Consultants presenting a project plan on a wall screen to a client" },
    icon: Building2,
    name: "B2B & Professional Services",
    status: "live" as const,
    headline: "Manage Your Service Business Like an Enterprise",
    description: "Proposals & contracts, project-based billing, and CRM/pipeline management for consultancies, agencies, and salons & spas — with HR, Payroll, and Finance built in.",
    color: "from-brand-500 to-indigo-600",
    bg: "bg-brand-500/10",
    modules: ["Proposals & Contracts", "CRM & Sales Pipeline", "Project & Service Billing", "HR & Payroll", "Finance & Accounting"],
    stats: [
      { value: "30%", label: "Better project profitability" },
      { value: "45%", label: "Faster invoice collection" },
      { value: "25%", label: "Improved utilization rates" },
    ],
  },
  {
    id: "visa-services",
    image: { src: "/images/industries/visa-services.jpg", alt: "Officer helping a customer with visa documents at a services counter" },
    icon: Stamp,
    name: "Visa Services",
    status: "live" as const,
    headline: "Track Every Visa Case From First Contact to Issued",
    description: "Manage visa cases for a single applicant or an entire family, with auto-generated document checklists per visa type, government submission tracking, and automatic alerts before passports or documents expire.",
    color: "from-fuchsia-500 to-purple-600",
    bg: "bg-fuchsia-500/10",
    modules: ["Case Management", "Document Checklists", "Government Submission Tracking", "Renewals & Expiry Alerts", "CRM & Finance Integration"],
    stats: [
      { value: "100%", label: "Document checklist coverage" },
      { value: "Zero", label: "Missed renewal deadlines" },
      { value: "3x", label: "Faster case processing" },
    ],
  },
  {
    id: "manufacturing",
    image: { src: "/images/industries/manufacturing.jpg", alt: "Production supervisor checking a tablet on a modern factory floor" },
    icon: Factory,
    name: "Manufacturing",
    status: "live" as const,
    headline: "Bills of Materials, Production Orders & Costing",
    description: "Manufacturing runs on the same Inventory your components and finished goods already live in, with Purchase and Finance connected for costing.",
    color: "from-zinc-500 to-slate-600",
    bg: "bg-zinc-500/10",
    modules: ["Bills of Materials", "Production Orders", "Costing", "Inventory", "Purchase & Finance"],
  },
  {
    id: "library",
    image: { src: "/images/industries/library.jpg", alt: "Librarian scanning a book at the circulation desk of a modern library" },
    icon: Library,
    name: "Library",
    status: "live" as const,
    headline: "Catalogue, Members, Lending & Fines Across Branches",
    description: "Run a library's own catalogue, members, lending, and fines across multiple branches — with Excel import to get your existing records in, and Finance connected for billing.",
    color: "from-sky-500 to-indigo-600",
    bg: "bg-sky-500/10",
    modules: ["Catalogue", "Members", "Lending", "Fines", "Multi-Branch"],
  },
  {
    id: "import-export",
    image: { src: "/images/industries/import-export.jpg", alt: "Logistics coordinator at a port office overlooking container cranes" },
    icon: Ship,
    name: "Import & Export",
    status: "live" as const,
    headline: "Shipments, Trade Documents & Landed Cost",
    description: "Track shipments and trade documents with landed cost and payments — connected to Inventory, Purchase, Sales, and Finance.",
    color: "from-blue-500 to-cyan-600",
    bg: "bg-blue-500/10",
    modules: ["Shipments", "Trade Documents", "Landed Cost", "Payments"],
  },
];

const statusMeta = {
  live: { label: "Available Now", variant: "success" as const },
  beta: { label: "Beta", variant: "brand" as const },
  "early-access": { label: "Early Access", variant: "warning" as const },
};

/** Industry id -> demo video slug. Industries without a video get only the Book a Demo button. */
const DEMO_SLUG: Record<string, string> = {
  retail: "pos",
  restaurants: "restaurant",
  realestate: "real-estate",
  construction: "construction",
  healthcare: "healthcare",
  education: "education",
  "visa-services": "visa-services",
  manufacturing: "manufacturing",
  library: "library",
  "import-export": "import-export",
};

export default async function IndustriesPage() {
  const { videos } = await getDemoCatalog();
  return (
    <>
      <PageHero
        badge="Industry Solutions"
        title="ERP Built for "
        highlightedWord="Your Industry"
        description="Choose your industry during onboarding and Vrodux automatically configures the right modules — from generic operations to deep, industry-specific functionality."
      />

      {/* Status legend */}
      <section className="pb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto p-4 rounded-2xl border bg-muted/20 text-sm text-muted-foreground">
            <Badge variant="success">Available Now</Badge>
            <span>fully built and live</span>
            <span className="text-muted-foreground/40">·</span>
            <Badge variant="brand">Beta</Badge>
            <span>live, shipping new features regularly</span>
            <span className="text-muted-foreground/40">·</span>
            <Badge variant="warning">Early Access</Badge>
            <span>core groundwork available, expanding on our roadmap</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {industries.map((ind, i) => {
              const demo = videos.find((v) => v.slug === DEMO_SLUG[ind.id]);
              return (
              <div
                key={ind.id}
                id={ind.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-4`}>
                    <ind.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{ind.name}</Badge>
                    <Badge variant={statusMeta[ind.status].variant}>{statusMeta[ind.status].label}</Badge>
                  </div>
                  <h2 className="text-3xl font-semibold mb-3">{ind.headline}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{ind.description}</p>

                  <div className="space-y-2 mb-6">
                    {ind.modules.map((mod) => (
                      <div key={mod} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {mod}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {demo && <IndustryDemoButton video={demo} label={`See Demo for ${ind.name}`} />}
                    <Button asChild variant={demo ? "outline" : "default"}>
                      <Link href="/book-demo">
                        Book a Demo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Stats / roadmap card */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-premium">
                  {ind.image && (
                    <div className="relative aspect-[5/4]">
                      <Image
                        src={ind.image.src}
                        alt={ind.image.alt}
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  <div className={`p-8 bg-gradient-to-br ${ind.color} text-white`}>
                    {ind.stats ? (
                      <>
                        <h3 className="text-lg font-semibold mb-6 opacity-90">What Our {ind.name} Clients Achieve</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {ind.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                              <div className="text-3xl font-bold mb-1">{stat.value}</div>
                              <div className="text-xs opacity-80">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                          <div className="flex flex-wrap gap-2">
                            {ind.modules.map((m) => (
                              <span key={m} className="text-xs px-2 py-1 bg-white/20 rounded-full">{m}</span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : ind.roadmap ? (
                      <>
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-5 h-5 opacity-90" />
                          <h3 className="text-lg font-semibold opacity-90">Early Access Roadmap</h3>
                        </div>
                        <p className="text-sm opacity-80 mb-5">
                          The {ind.name} pack is available today with the core workflows below. We&apos;re actively
                          building out deeper functionality with early-access customers.
                        </p>
                        <div className="mb-5">
                          <div className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-2">Available Today</div>
                          <div className="flex flex-wrap gap-2">
                            {ind.modules.map((m) => (
                              <span key={m} className="text-xs px-2 py-1 bg-white/20 rounded-full">{m}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-2">Coming Next</div>
                          <div className="flex flex-wrap gap-2">
                            {ind.roadmap?.map((m) => (
                              <span key={m} className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-full">{m}</span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg font-semibold mb-6 opacity-90">What&apos;s Included</h3>
                        <div className="flex flex-wrap gap-2">
                          {ind.modules.map((m) => (
                            <span key={m} className="text-xs px-2 py-1 bg-white/20 rounded-full">{m}</span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
