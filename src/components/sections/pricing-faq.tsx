"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/utils";
import { pricingFaqs } from "@/lib/pricing-faqs";

export function PricingFaq() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Pricing <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about how Vrodux ERP pricing works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-2"
              onValueChange={(value) => {
                if (value) trackEvent("pricing_faq_open", { question: value });
              }}
            >
              {pricingFaqs.map((faq, i) => (
                <AccordionItem key={i} value={faq.q} className="border rounded-xl px-5 data-[state=open]:bg-muted/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/faq">
                  Browse All FAQs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
