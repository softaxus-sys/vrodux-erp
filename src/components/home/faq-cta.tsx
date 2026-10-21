"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/components/sections/faq-section";
import { Eyebrow, pill, WRAP } from "@/components/home/ui";
import { cn } from "@/lib/utils";

export function HomeFaq() {
  return (
    <section className="py-16 md:py-24">
      <div className={cn(WRAP, "grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20")}>
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Questions about Vrodux ERP? If you cannot find your answer here, our team is happy to help.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/faq" className={cn(pill.base, pill.primary, "group")}>
              Browse all FAQs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/contact" className={cn(pill.base, pill.outline)}>
              Contact our team
            </Link>
          </div>
        </div>

        <Accordion type="single" collapsible className="divide-y border-y dark:divide-white/10 dark:border-white/10">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-0">
              <AccordionTrigger className="py-5 text-left text-lg font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
