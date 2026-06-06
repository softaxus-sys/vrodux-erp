"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How long does ERP implementation take?",
    a: "Typical implementation takes 6-12 weeks depending on your business complexity, number of modules, and data migration requirements. We've successfully gone live in as few as 3 weeks for smaller businesses.",
  },
  {
    q: "Can Vrodux ERP be deployed on-premise?",
    a: "Yes. Vrodux ERP offers both SaaS (cloud) and On-Premise deployment options. Both share the same feature set. On-premise is ideal for businesses with strict data sovereignty requirements or existing infrastructure they want to leverage.",
  },
  {
    q: "Does Vrodux support Arabic and RTL languages?",
    a: "Absolutely. Vrodux ERP has full RTL (Right-to-Left) support for Arabic. The interface, reports, and documents can all be displayed in Arabic. We also support multiple languages simultaneously per user preference.",
  },
  {
    q: "Is VAT and GST compliance included?",
    a: "Yes. Vrodux ERP includes country-specific VAT configuration for UAE, Saudi Arabia, and other GCC countries, as well as GST support for India and other jurisdictions. Tax reports and e-invoicing are built in.",
  },
  {
    q: "Can Vrodux handle multiple companies and branches?",
    a: "Yes. Multi-company and multi-branch setup is a core feature. You can manage multiple legal entities, consolidate financial reporting, and maintain separate books of accounts while sharing master data.",
  },
  {
    q: "What kind of support do you offer?",
    a: "We offer tiered support based on your plan: email support for Starter, priority support with faster SLAs for Professional, and 24/7 dedicated support with a named account manager for Enterprise customers.",
  },
  {
    q: "Can we migrate data from our existing system?",
    a: "Yes. Our implementation team handles data migration from virtually any source — Excel, QuickBooks, Tally, SAP, Odoo, or any other ERP. We provide data validation and reconciliation to ensure accuracy.",
  },
  {
    q: "Is there a free trial available?",
    a: "We offer a personalized demo rather than a generic free trial. This gives you a hands-on experience with your actual business scenarios. Book a demo session and we'll configure a test environment for your team.",
  },
];

export function FaqSection() {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Got questions about Vrodux ERP? We've got answers. If you can't find what you're looking for,
              our team is always ready to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5 data-[state=open]:bg-muted/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
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
