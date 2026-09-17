import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

const posts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: number;
  publishedAt: string;
  tags: string[];
}> = {
  "erp-implementation-guide-2025": {
    title: "The Complete ERP Implementation Guide for 2025",
    excerpt: "Everything you need to know about planning and executing a successful ERP implementation.",
    category: "ERP Guide",
    author: "Ahmad Al Sayed",
    readTime: 12,
    publishedAt: "2025-05-15",
    tags: ["ERP", "Implementation", "Guide"],
    content: `
## Why ERP Implementation Matters

Enterprise Resource Planning (ERP) systems are the backbone of modern business operations. When implemented correctly, they eliminate data silos, automate repetitive processes, and give leadership real-time visibility into every aspect of the business.

## The 5 Phases of ERP Implementation

### Phase 1: Discovery & Planning
The foundation of every successful ERP implementation is thorough planning. This phase involves business process analysis, stakeholder alignment, vendor selection, and project team formation.

### Phase 2: System Design & Configuration
Once the ERP is selected, the configuration phase begins including chart of accounts setup, user roles, workflow design, and integration configuration.

### Phase 3: Data Migration
Data migration is often the most complex part. It requires data audit, migration mapping, test migration, and final migration with reconciliation.

### Phase 4: Testing & Training
Thorough user acceptance testing, integration testing, performance testing, and role-based training for all user groups.

### Phase 5: Go-Live & Post-Launch Support
Careful coordination including parallel running, hypercare support, performance monitoring, and ongoing training.

## Common Mistakes to Avoid

1. Underestimating data migration complexity
2. Skipping user training
3. Trying to replicate old processes exactly
4. Going live without adequate testing
5. Insufficient executive sponsorship

## How Long Does Implementation Take?

For a mid-sized business (50-200 users): 6-12 weeks. Complex multi-company, multi-country deployments: 3-6 months.

## Conclusion

A well-executed ERP implementation is one of the most transformative investments a business can make. With the right preparation, the right partner, and the right mindset — your ERP will be a competitive advantage for years to come.
    `,
  },
  "restaurant-pos-kds-integration": {
    title: "How Restaurant POS + KDS Integration Reduces Kitchen Errors by 60%",
    excerpt: "A deep dive into how Kitchen Display Systems connected with your POS transforms restaurant operations.",
    category: "Restaurant",
    author: "Omar Khalil",
    readTime: 8,
    publishedAt: "2025-05-10",
    tags: ["Restaurant", "POS", "KDS"],
    content: `
## The Problem with Manual Kitchen Tickets

Traditional paper-based kitchen ticketing is slow, error-prone, and creates bottlenecks. In busy restaurants, orders get lost, priorities get confused, and quality suffers.

## What is a Kitchen Display System?

A Kitchen Display System (KDS) is a digital screen in the kitchen that receives orders in real-time from the POS. Chefs see orders instantly, track preparation times, and mark items as ready.

## Integration Benefits

When your POS and KDS are fully integrated through Vrodux ERP, you get real-time order routing, priority flagging, table-by-table visibility, and performance analytics.

## The Results

Restaurants using integrated POS + KDS systems report 60% reduction in kitchen errors, 50% faster order processing, and significant improvement in customer satisfaction scores.
    `,
  },
  "vat-compliance-uae-erp": {
    title: "VAT Compliance in UAE: What Your ERP Must Handle",
    excerpt: "UAE VAT requirements are complex. Here's exactly what your ERP system needs to handle to stay compliant.",
    category: "Finance",
    author: "Priya Nair",
    readTime: 10,
    publishedAt: "2025-05-05",
    tags: ["VAT", "UAE", "Finance", "Compliance"],
    content: `
## Why VAT Compliance Isn't Optional

The UAE introduced Value Added Tax in 2018, and it's now a standard part of doing business across the country. Whatever ERP system you run, it needs to handle VAT correctly — not as an afterthought, but as something built into how invoices, purchases, and reports are generated day to day.

## What "VAT-Ready" Actually Means for an ERP

A VAT-compliant ERP isn't just about applying a percentage to a total. At minimum, it needs to:

1. Show your business's Tax Registration Number (TRN) on every invoice
2. Apply the correct VAT treatment to each transaction — standard-rated, zero-rated, or exempt, depending on what you're selling and to whom
3. Keep VAT-inclusive and VAT-exclusive pricing clearly separated, so there's no ambiguity for customers or auditors
4. Generate the records you need at filing time, without manually reconciling numbers from multiple places

## Invoicing Is Where Most Compliance Gaps Show Up

Tax invoices have specific formatting requirements — your TRN, the VAT amount broken out separately from the subtotal, and a clear description of what was sold. If your ERP can't produce that automatically, every invoice becomes a manual compliance check.

## Filing Shouldn't Mean Starting From Scratch

Whether you file monthly or quarterly, the numbers you submit should come directly out of your existing records — not require your finance team to rebuild a spreadsheet from your invoices and purchases. That's the real test of whether your ERP is actually VAT-compliant, or just VAT-aware.

## Conclusion

VAT compliance isn't a one-time setup — it's an ongoing operational requirement. The right ERP treats it that way, handling the details on every transaction automatically instead of leaving them to whoever happens to be creating the invoice that day.
    `,
  },
  "construction-erp-cost-tracking": {
    title: "Why Construction Companies Lose Money Without Proper Cost Tracking",
    excerpt: "Construction project cost overruns average 30%. Discover how the right ERP eliminates budget overruns.",
    category: "Construction",
    author: "Sarah Williams",
    readTime: 9,
    publishedAt: "2025-04-28",
    tags: ["Construction", "Cost Management", "ERP"],
    content: `
## The Hidden Cost of Not Tracking Costs

Construction project cost overruns average 30%, and in most cases, the cause isn't a single bad decision — it's dozens of small costs that were never tracked closely enough to catch in time.

## Where the Money Actually Goes

On a typical project, costs come from several directions at once: labor hours, materials, equipment, and subcontractors. Tracked separately, in separate spreadsheets, it's easy for each one to drift a little over budget without anyone noticing until the project is already over.

## Bills of Quantities Keep Everyone Honest

A bill of quantities lays out exactly what a project needs — materials, labor, and their expected costs — before work even starts. Having that as a living reference, rather than a one-time estimate, means actual spend can be checked against it continuously, not just at the end.

## Contractors Need to Be Part of the Picture

Subcontractor costs are often the least visible part of a project's budget, simply because they're managed outside the main system. Tracking contractors alongside labor, materials, and equipment — in the same place — closes that gap.

## Catching Overruns While They're Still Small

The real value of proper cost tracking isn't the report you generate at the end of a project — it's catching a cost that's drifting while there's still time to do something about it. That only works if the data is current, not reconstructed weeks later.

## Conclusion

Construction margins are thin enough that cost tracking can't be an end-of-project exercise. The businesses that protect their margins are the ones checking actual spend against the plan continuously, project by project, cost by cost.
    `,
  },
  "hotel-pms-erp-integration": {
    title: "Why Standalone Hotel PMS Systems Are Failing Modern Hoteliers",
    excerpt: "The case for an integrated Hotel + Finance + HR solution versus standalone PMS systems.",
    category: "Hospitality",
    author: "Ahmad Al Sayed",
    readTime: 7,
    publishedAt: "2025-04-20",
    tags: ["Hospitality", "Hotels", "PMS"],
    content: `
## The Standalone PMS Problem

A Property Management System (PMS) handles the core of running a hotel — reservations, room status, guest check-in and check-out. For a long time, that was enough. Increasingly, it isn't.

## Where Standalone Systems Break Down

A PMS on its own tracks rooms and guests, but it doesn't naturally connect to the rest of the business. Payroll for front desk and housekeeping staff lives somewhere else. Financial reporting lives somewhere else. The result is a hotel running on several disconnected systems that all need to agree with each other manually.

## What Guests Don't See, But Feel Anyway

When systems don't talk to each other, the friction shows up in small ways guests notice: a room marked available that isn't actually ready, a billing detail that doesn't match what was quoted, a delay at checkout while staff cross-check two systems instead of one.

## The Case for an Integrated Approach

Bringing property management together with finance and HR in one system means a room status change, a folio charge, and a payroll entry are all part of the same picture — not separate records that someone has to reconcile after the fact.

## What to Look For Instead

The question worth asking isn't just whether a PMS manages rooms well, but whether it connects to everything else your hotel actually runs on. A property system that stands alone is solving only part of the problem.

## Conclusion

Running a hotel well means more than managing rooms — it means payroll, finance, and guest operations working from the same data. Standalone PMS software was never built for that, and it's increasingly showing.
    `,
  },
  "multi-currency-erp-guide": {
    title: "Managing Multi-Currency Operations in a Global ERP",
    excerpt: "How Vrodux ERP handles real-time exchange rates, multi-currency accounting, and consolidated reporting.",
    category: "Finance",
    author: "Priya Nair",
    readTime: 8,
    publishedAt: "2025-04-15",
    tags: ["Multi-Currency", "Finance", "Global"],
    content: `
## Why Multi-Currency Isn't Optional for Global Businesses

The moment your business deals with a customer, vendor, or branch outside your home currency, single-currency accounting stops being enough. Every transaction in a different currency introduces a question your ERP needs to answer automatically: what was this actually worth, in the currency you report in?

## Recording Transactions in Their Real Currency

The right approach isn't to force every transaction into your default currency at the point of entry. A transaction should be recorded in the currency it actually happened in, and converted using live exchange rates — not a rate someone manually typed in weeks ago.

## Why "Live" Exchange Rates Matter

Exchange rates move daily, sometimes more than once a day. A system that converts using outdated rates doesn't just introduce small rounding errors — over enough transactions, those errors compound into numbers that don't reconcile with your bank or your vendor's own books.

## Reporting in One Currency, From Many

However many currencies your business transacts in day to day, leadership still needs to see performance in one consistent currency. That means every report — from a simple invoice list to a full financial statement — needs to be able to pull from transactions in multiple currencies and present them consistently.

## What to Get Right From the Start

Multi-currency isn't a feature you bolt on later without pain. Getting it right means every transaction carries its original currency, its converted value, and the exchange rate used — so nothing has to be reconstructed after the fact.

## Conclusion

Operating across currencies is normal for a growing business. What matters is whether your ERP treats multi-currency as a first-class part of every transaction, or as a workaround you have to manage yourself.
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug] || {
    title: "Blog Post",
    excerpt: "",
    category: "General",
    author: "Vrodux Team",
    readTime: 5,
    publishedAt: "2025-01-01",
    tags: [],
    content: "This article is coming soon. Check back later for more content.",
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="-ml-2 mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-1 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          <Badge variant="brand" className="mb-4">{post.category}</Badge>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
          </div>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">{line.slice(3)}</h2>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i} className="text-xl font-semibold mt-6 mb-3">{line.slice(4)}</h3>;
            }
            if (line.startsWith("- ")) {
              return <li key={i} className="ml-4 mb-1 text-muted-foreground">{line.slice(2)}</li>;
            }
            if (/^\d+\. /.test(line)) {
              return <li key={i} className="ml-4 mb-1 text-muted-foreground list-decimal">{line.replace(/^\d+\. /, "")}</li>;
            }
            if (line.trim() === "") return <div key={i} className="h-2" />;
            return <p key={i} className="text-muted-foreground leading-relaxed mb-3">{line}</p>;
          })}
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 rounded-2xl border bg-brand-500/5 border-brand-500/20 text-center">
          <h3 className="font-semibold text-lg mb-2">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground text-sm mb-4">Book a free demo and see how Vrodux ERP can solve your specific challenges.</p>
          <Button asChild>
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
