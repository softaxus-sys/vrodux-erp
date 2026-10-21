"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ModuleFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="divide-y border-y dark:divide-white/10 dark:border-white/10">
      {faqs.map((f, i) => (
        <AccordionItem key={f.q} value={`faq-${i}`} className="border-0">
          <AccordionTrigger className="py-5 text-left text-lg font-medium hover:no-underline">{f.q}</AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
