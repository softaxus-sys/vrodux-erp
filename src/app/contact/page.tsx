import { Metadata } from "next";
import { ContactForm } from "@/components/shared/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Vrodux ERP",
  description:
    "Get in touch with the Vrodux ERP team. We're here to help with demos, pricing, support, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="We'd Love to "
        highlightedWord="Hear from You"
        description="Have questions about Vrodux ERP? Our team is ready to help you find the right solution for your business."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "info@vrodux.com", href: "mailto:info@vrodux.com" },
                    { icon: Phone, label: "Phone", value: "+971 4 400 0000", href: "tel:+97144000000" },
                    { icon: MapPin, label: "Address", value: "Dubai, United Arab Emirates", href: null },
                    { icon: Clock, label: "Hours", value: "Mon–Fri: 9AM–6PM GST", href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-brand-500" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium hover:text-brand-500 transition-colors">{item.value}</a>
                        ) : (
                          <div className="text-sm font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl border bg-brand-500/5 border-brand-500/20">
                <h3 className="font-semibold mb-2">Book a Demo Instead?</h3>
                <p className="text-sm text-muted-foreground mb-3">Schedule a personalized demo of Vrodux ERP for your team.</p>
                <Button size="sm" asChild>
                  <Link href="/book-demo">Schedule Demo →</Link>
                </Button>
              </div>

              <div className="p-5 rounded-2xl border bg-muted/40">
                <h3 className="font-semibold mb-2">For Partnerships</h3>
                <p className="text-sm text-muted-foreground mb-3">Interested in becoming a Vrodux reseller or implementation partner?</p>
                <Link href="/partners" className="text-sm text-brand-500 hover:underline">Learn about our partner program →</Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
