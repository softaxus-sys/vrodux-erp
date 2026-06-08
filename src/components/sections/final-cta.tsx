"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-indigo-600" />
      <div className="absolute inset-0 bg-mesh-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Limited Onboarding Slots Available
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Start Your ERP Journey{" "}
            <span className="block opacity-90">Today</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join 500+ businesses that have transformed their operations with Vrodux ERP.
            Get a personalized demo tailored to your industry and specific needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="xl"
              className="bg-white text-brand-600 hover:bg-white/90 shadow-premium font-semibold group"
              asChild
            >
              <Link href="/book-demo">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link href="/contact">
                <MessageSquare className="mr-2 w-5 h-5" />
                Talk to an Expert
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span>✓ No credit card required</span>
            <span>✓ Free implementation consultation</span>
            <span>✓ 30-day money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
