import { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageJsonLd } from "@/components/shared/page-jsonld";
import { DemoForm } from "@/components/shared/demo-form";
import { PageHero } from "@/components/shared/page-hero";
import { Clock, Video, Users, Star } from "lucide-react";

export const metadata: Metadata = pageMeta({
  title: "Book a Demo — See Vrodux ERP in Action",
  description:
    "Schedule a personalized 30-minute demo of Vrodux ERP. See how our platform can transform your specific business operations.",
  path: "/book-demo",
});

export default function BookDemoPage() {
  return (
    <>
      <PageJsonLd type="WebPage" name="Book a Vrodux ERP Demo" description={metadata.description as string} path="/book-demo" crumbs={[{ name: "Book a Demo", path: "/book-demo" }]} />
      <PageHero
        badge="30-Minute Demo"
        title="See Vrodux ERP "
        highlightedWord="in Action"
        description="Book a personalized demo with our product experts. We'll show you how Vrodux ERP can transform your specific business operations."
      >
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {[
            { icon: Clock, text: "30-minute session" },
            { icon: Video, text: "Live screen share" },
            { icon: Users, text: "Tailored to your industry" },
            { icon: Star, text: "No sales pressure" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <Icon className="w-4 h-4 text-brand-500" />
              {text}
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <DemoForm />
        </div>
      </section>
    </>
  );
}
