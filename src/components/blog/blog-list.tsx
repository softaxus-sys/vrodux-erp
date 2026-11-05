"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogCovers } from "@/lib/blog-covers";
import { blogPosts } from "@/lib/blog-meta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Clock, User } from "lucide-react";



// Derived from the posts above, so a category button never appears unless it actually has content.
const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

function categoryEmoji(category: string) {
  switch (category) {
    case "Finance":
      return "💰";
    case "Restaurant":
      return "🍽️";
    case "Hospitality":
      return "🏨";
    case "Construction":
      return "🏗️";
    default:
      return "📊";
  }
}

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featured = filteredPosts.find((p) => p.featured);
  const rest = filteredPosts.filter((p) => !p.featured);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Search & Categories */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === selectedCategory ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(cat)}
              >
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
              <div className="relative h-56 rounded-xl overflow-hidden bg-[#B5D6FF] dark:bg-[#17379B]">
                {blogCovers[featured.slug] && (
                  <Image
                    src={blogCovers[featured.slug].src}
                    alt={blogCovers[featured.slug].alt}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="brand">{featured.category}</Badge>
                  <Badge variant="outline">Featured</Badge>
                </div>
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-brand-500 transition-colors">
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
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="h-full flex flex-col p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-40 rounded-xl overflow-hidden bg-muted mb-4 flex items-center justify-center text-3xl">
                    {blogCovers[post.slug] ? (
                      <Image
                        src={blogCovers[post.slug].src}
                        alt={blogCovers[post.slug].alt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      categoryEmoji(post.category)
                    )}
                  </div>
                  <Badge variant="outline" className="w-fit mb-3 text-xs">{post.category}</Badge>
                  <h3 className="font-semibold mb-2 group-hover:text-brand-500 transition-colors leading-snug">
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
        ) : !featured ? (
          <p className="text-center text-muted-foreground py-12">
            No articles in this category yet — check back soon.
          </p>
        ) : null}

        {(featured || rest.length > 0) && (
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
