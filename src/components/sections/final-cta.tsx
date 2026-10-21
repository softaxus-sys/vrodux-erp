import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { GRID_STYLE, PANEL, pill } from "@/components/home/ui";
import { GridCells } from "@/components/home/panel-art";
import { cn } from "@/lib/utils";

/** Closing call to action shared by the home page and inner pages. */
export function FinalCTA() {
  return (
    <section className="px-3 pb-3 pt-6 sm:px-5 lg:px-6">
      <div className={PANEL}>
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden />
        <GridCells
          cells={[
            { right: 0, top: 0, color: "yellow", opacity: 0.95 },
            { right: 3, top: 1, color: "violet", opacity: 0.85 },
          ]}
        />
        <div className="relative grid lg:grid-cols-[1.1fr_1fr]">
          <div className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
            <h2 className="text-4xl font-medium leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Start your ERP journey today
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Join 500+ businesses running on Vrodux ERP. Get a personalised demo built around your industry and your
              processes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-demo" className={cn(pill.base, pill.light, "group")}>
                <Calendar className="h-4 w-4" />
                Schedule demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/contact" className={cn(pill.base, pill.outlineLight)}>
                <MessageSquare className="h-4 w-4" />
                Talk to an expert
              </Link>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/85">
              <li>No credit card required</li>
              <li>Free implementation consultation</li>
              <li>30-day money-back guarantee</li>
            </ul>
          </div>
          <div className="p-3 pt-0 lg:p-4">
            <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:h-full lg:min-h-[420px]">
              <Image
                src="/images/pages/about-team.jpg"
                alt="A team collaborating around a table in a bright office"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
