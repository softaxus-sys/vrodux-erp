"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PricingPlans } from "@/components/sections/pricing-plans";

export function PricingPreview() {
  return (
    <section className="pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-muted/20">
      <div className="container mx-auto px-4 text-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No per-module pricing. No hidden fees. Get the complete Vrodux ERP platform
            at one straightforward price.
          </p>
        </motion.div>
      </div>

      <PricingPlans />

      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Button variant="ghost" size="lg" asChild>
            <Link href="/pricing">
              View Full Pricing & Feature Comparison
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
