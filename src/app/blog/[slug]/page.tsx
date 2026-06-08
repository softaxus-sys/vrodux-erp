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
