"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { trackEvent } from "@/lib/utils";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://erp.vrodux.com";

export function PricingFinalCta() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-indigo-600" />
      <div className="absolute inset-0 bg-mesh-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Run Your Business in One Place?
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Start your 30-day free trial and see how Vrodux can bring your business operations together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="xl"
              className="bg-white text-brand-600 hover:bg-white/90 shadow-premium font-semibold group"
              asChild
            >
              <a
                href={`${APP_URL}/?intent=trial&utm_source=pricing_final_cta`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("start_free_trial_click", { location: "final_cta" })}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link href="/contact" onClick={() => trackEvent("talk_to_sales_click", { location: "final_cta" })}>
                <MessageSquare className="mr-2 w-5 h-5" />
                Talk to Sales
              </Link>
            </Button>
          </div>

          <p className="text-sm text-white/70">No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
}
