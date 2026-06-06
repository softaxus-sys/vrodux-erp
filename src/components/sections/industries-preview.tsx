"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, UtensilsCrossed, Hotel, Zap, Truck, Home, HardHat, Stethoscope } from "lucide-react";

const industries = [
  { name: "Retail", icon: ShoppingBag, href: "/industries#retail", color: "from-pink-500 to-rose-500" },
  { name: "Restaurants", icon: UtensilsCrossed, href: "/industries#restaurants", color: "from-red-500 to-orange-500" },
  { name: "Hospitality", icon: Hotel, href: "/industries#hospitality", color: "from-cyan-500 to-blue-500" },
  { name: "Manufacturing", icon: Zap, href: "/industries#manufacturing", color: "from-amber-500 to-yellow-500" },
  { name: "Distribution", icon: Truck, href: "/industries#distribution", color: "from-slate-500 to-gray-600" },
  { name: "Real Estate", icon: Home, href: "/industries#realestate", color: "from-violet-500 to-purple-500" },
  { name: "Construction", icon: HardHat, href: "/industries#construction", color: "from-yellow-600 to-amber-600" },
  { name: "Healthcare", icon: Stethoscope, href: "/industries#healthcare", color: "from-emerald-500 to-teal-500" },
];

export function IndustriesPreview() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for Your <span className="text-gradient">Industry</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Deep, industry-specific modules that understand your unique business model —
            not just generic features with an industry label.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={ind.href}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border bg-card hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                  <ind.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold">{ind.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/industries">
              View All Industry Solutions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
