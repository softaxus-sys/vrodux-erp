import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — ERP Insights & Business Tips",
  description:
    "ERP insights, business management tips, industry guides, and product updates from the Vrodux ERP team.",
};

const blogPosts = [
  {
    slug: "erp-implementation-guide-2025",
    title: "The Complete ERP Implementation Guide for 2025",
    excerpt: "Everything you need to know about planning and executing a successful ERP implementation — from vendor selection to go-live.",
    category: "ERP Guide",
    author: "Ahmad Al Sayed",
    readTime: 12,
    publishedAt: "2025-05-15",
    featured: true,
    tags: ["ERP", "Implementation", "Guide"],
  },
  {
    slug: "restaurant-pos-kds-integration",
    title: "How Restaurant POS + KDS Integration Reduces Kitchen Errors by 60%",
    excerpt: "A deep dive into how Kitchen Display Systems connected with your POS transforms restaurant operations.",
    category: "Restaurant",
    author: "Omar Khalil",
    readTime: 8,
    publishedAt: "2025-05-10",
    featured: false,
    tags: ["Restaurant", "POS", "KDS"],
  },
  {
    slug: "vat-compliance-uae-erp",
    title: "VAT Compliance in UAE: What Your ERP Must Handle",
    excerpt: "UAE VAT requirements are complex. Here's exactly what your ERP system needs to handle to stay compliant.",
    category: "Finance",
    author: "Priya Nair",
    readTime: 10,
    publishedAt: "2025-05-05",
    featured: false,
    tags: ["VAT", "UAE", "Finance", "Compliance"],
  },
  {
    slug: "construction-erp-cost-tracking",
    title: "Why Construction Companies Lose Money Without Proper Cost Tracking",
    excerpt: "Construction project cost overruns average 30%. Discover how the right ERP eliminates budget overruns.",
    category: "Construction",
    author: "Sarah Williams",
    readTime: 9,
    publishedAt: "2025-04-28",
    featured: false,
    tags: ["Construction", "Cost Management", "ERP"],
  },
  {
    slug: "hotel-pms-erp-integration",
    title: "Why Standalone Hotel PMS Systems Are Failing Modern Hoteliers",
    excerpt: "The case for an integrated Hotel + Finance + HR solution versus standalone PMS systems.",
    category: "Hospitality",
    author: "Ahmad Al Sayed",
    readTime: 7,
    publishedAt: "2025-04-20",
    featured: false,
    tags: ["Hospitality", "Hotels", "PMS"],
  },
  {
    slug: "multi-currency-erp-guide",
    title: "Managing Multi-Currency Operations in a Global ERP",
    excerpt: "How Vrodux ERP handles real-time exchange rates, multi-currency accounting, and consolidated reporting.",
    category: "Finance",
    author: "Priya Nair",
    readTime: 8,
    publishedAt: "2025-04-15",
    featured: false,
    tags: ["Multi-Currency", "Finance", "Global"],
  },
];

const categories = ["All", "ERP Guide", "Finance", "Restaurant", "Hospitality", "Construction", "HR", "Technology"];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        badge="Vrodux Blog"
        title="ERP Insights & "
        highlightedWord="Business Intelligence"
        description="Expert articles on ERP implementation, industry trends, and business process optimization from the Vrodux team."
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search & Categories */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button key={cat} variant={cat === "All" ? "default" : "outline"} size="sm" className="rounded-full">
                  {cat}
                </Button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-9 w-64" />
            </div>
          </div>

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-10">
              <div className="grid md:grid-cols-2 gap-8 p-8 rounded-2xl border bg-card hover:shadow-md transition-shadow">
                <div className="h-56 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-600/30 flex items-center justify-center">
                  <span className="text-6xl">📖</span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="brand">{featured.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-brand-500 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{featured.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="h-full flex flex-col p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="h-36 rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-4 flex items-center justify-center text-3xl">
                    {post.category === "Finance" ? "💰" :
                      post.category === "Restaurant" ? "🍽️" :
                      post.category === "Hospitality" ? "🏨" :
                      post.category === "Construction" ? "🏗️" : "📊"}
                  </div>
                  <Badge variant="outline" className="w-fit mb-3 text-xs">{post.category}</Badge>
                  <h3 className="font-bold mb-2 group-hover:text-brand-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} min</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
