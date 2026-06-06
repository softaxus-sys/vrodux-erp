"use client";

import { motion } from "framer-motion";

const companies = [
  "TechCorp Global", "AlNoor Group", "Emirates Retail", "GulfDist Co",
  "MedCore Health", "BuildRight LLC", "Falcon Hotels", "PrimeEstate",
  "Sunrise Foods", "DataFlow Inc", "Nexus Trading", "Horizon Hospitality",
  "AlFardan Group", "Metro Pharma", "TechCorp Global", "AlNoor Group",
];

export function TrustedBySection() {
  return (
    <section className="py-16 border-y bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10"
        >
          Trusted by industry leaders across the Middle East & beyond
        </motion.p>
        <div className="marquee-container overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...companies, ...companies].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-10 px-6 rounded-lg bg-muted/60 border text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
