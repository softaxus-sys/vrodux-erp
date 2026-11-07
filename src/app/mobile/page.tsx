import Link from "next/link";
import { Metadata } from "next";
import {
  CalendarCheck, CheckCircle2, ClipboardCheck, ScanLine, ShieldCheck, Hotel, Bell, Users, UtensilsCrossed, ShoppingCart, Sun, KeyRound,
} from "lucide-react";
import { pageMeta, SITE } from "@/lib/seo";
import { GOOGLE_PLAY_URL, MOBILE_TRIAL_URL } from "@/lib/app-links";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { JsonLd } from "@/components/demos/json-ld";
import { PageJsonLd } from "@/components/shared/page-jsonld";
import { getPhoneScreens } from "@/lib/phone-screens";
import { PhoneShot } from "@/components/mobile/phone-shot";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading, WRAP, pill } from "@/components/home/ui";
import { TRIAL_DAYS } from "@/lib/trial";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMeta({
  title: "Vrodux ERP Mobile App for Android",
  description:
    "Check sales, people, stock and customers, and act on approvals from your phone. The Vrodux ERP app for Android shows the modules your role can access, with the same login as the web app.",
  path: "/mobile",
  brand: false,
});

const doList = [
  { icon: Users, text: "Update leads and deals" },
  { icon: CalendarCheck, text: "Mark attendance and apply for leave" },
  { icon: ClipboardCheck, text: "Approve requests" },
  { icon: UtensilsCrossed, text: "Take restaurant orders" },
  { icon: ShoppingCart, text: "Run a checkout" },
  { icon: ScanLine, text: "Scan barcodes and QR codes with the camera to look up or add stock" },
  { icon: Hotel, text: "Hotel front desk: arrivals, departures and payments" },
  { icon: Bell, text: "Push notifications for approvals" },
];

const faqs = [
  {
    q: "Is there an iPhone app?",
    a: "Not yet. The app is on Android now, on Google Play. An App Store version is coming soon.",
  },
  {
    q: "Does it work offline?",
    a: "Offline use is not a listed feature, so assume you need an internet connection when you use the app.",
  },
  {
    q: "Is it free?",
    a: "The app is included with every Vrodux ERP plan. There is no separate charge for it.",
  },
  {
    q: "Which modules will I see?",
    a: "Only the modules and permissions your role has. The app uses the same account as the web app, so what you can open there is what you can open on your phone.",
  },
];

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE}/mobile#app`,
  name: "Vrodux ERP",
  url: `${SITE}/mobile`,
  description:
    "Companion mobile app for Vrodux ERP: approvals, CRM, attendance and leave, inventory scanning and more, based on the modules and permissions of your role.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  installUrl: GOOGLE_PLAY_URL,
  downloadUrl: GOOGLE_PLAY_URL,
  publisher: { "@id": `${SITE}/#organization` },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default async function MobilePage() {
  const screens = await getPhoneScreens();
  const hero = screens.find((s) => s.slug === "dashboard") ?? screens[0];
  return (
    <>
      <PageJsonLd
        type="WebPage"
        name="Vrodux ERP Mobile App"
        description={metadata.description as string}
        path="/mobile"
        crumbs={[{ name: "Mobile App", path: "/mobile" }]}
      />
      <JsonLd data={softwareLd} />
      <JsonLd data={faqLd} />

      {/* Hero */}
      <section className="px-3 pb-4 pt-[4.5rem] sm:px-5 lg:px-6">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#B5D6FF] px-6 py-14 dark:bg-[#17379B] sm:rounded-[2.75rem] sm:px-12 md:py-20 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">Mobile app for Android</span>
              <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Your whole business in your pocket.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                Check sales, people, stock and customers, and act on approvals from anywhere.
              </p>
              <div className="mt-8">
                <AppStoreButtons location="mobile_hero" />
              </div>
              <p className="mt-4 text-sm text-foreground/70">
                Android now on Google Play. The App Store version is coming soon.
              </p>
            </div>
            <div className={cn("mx-auto w-[11.5rem] sm:w-[13.5rem] lg:w-[15rem]", !hero && "hidden")}>
              {hero && <PhoneShot src={hero.imageUrl} alt={hero.alt} width={hero.width} height={hero.height} priority />}
            </div>
          </div>
        </div>
      </section>

      {/* Screens */}
      {screens.length > 0 && (
      <section className="py-16 md:py-24" aria-labelledby="screens-h">
        <div className={WRAP}>
          <SectionHeading
            eyebrow="Screens"
            title={<span id="screens-h">See the app</span>}
            description="Swipe through the main screens. The screenshots show demo data, not a real company."
          />
          <ul
            className="-mx-9 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-9 pb-4 sm:-mx-[68px] sm:px-[68px] lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0"
            aria-label="Vrodux ERP mobile app screenshots"
          >
            {screens.map((s) => (
              <li key={s.slug} className="w-[11.5rem] shrink-0 snap-center sm:w-[13rem] lg:w-auto">
                <PhoneShot src={s.imageUrl} alt={s.alt} width={s.width} height={s.height} />
                <p className="mt-4 font-medium">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      )}

      {/* What you can do */}
      <section className="py-16 md:py-24" aria-labelledby="can-do-h">
        <div className={WRAP}>
          <SectionHeading
            eyebrow="On your phone"
            title={<span id="can-do-h">What you can do on your phone</span>}
            description="The app is a companion for what makes sense away from a desk. Heavier admin work stays on the web."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {doList.map((d) => (
              <li key={d.text} className="rounded-2xl border bg-card p-6">
                <d.icon className="h-6 w-6 text-brand-500" aria-hidden />
                <p className="mt-4 text-sm leading-relaxed">{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Plan + security */}
      <section className="py-16 md:py-24" aria-label="Your plan and security">
        <div className={cn(WRAP, "grid gap-6 lg:grid-cols-2")}>
          <div className="rounded-3xl border bg-card p-8 md:p-10">
            <h2 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">Works with your plan</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed">
              {[
                "The app shows only the modules and permissions your role has.",
                "Same login as the web app, and two-factor sign-in is supported.",
                "Light and dark themes.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Sun className="h-4 w-4" aria-hidden /> Included with every plan.
            </p>
          </div>
          <div className="rounded-3xl border bg-card p-8 md:p-10">
            <h2 className="flex items-center gap-3 text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
              <ShieldCheck className="h-7 w-7 text-brand-500" aria-hidden /> Security
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2.5">
                <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                Sign-in is protected.
              </li>
              <li className="flex items-start gap-2.5">
                <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                Sessions can be ended from Settings → Devices.
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              More in{" "}
              <Link href="/security" className="underline underline-offset-4">security</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" aria-labelledby="mobile-faq-h">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="mobile-faq-h" className="text-center text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
            Mobile app questions
          </h2>
          <Accordion type="single" collapsible className="mt-10 space-y-2">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="rounded-xl border px-5 data-[state=open]:bg-muted/30">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className={cn(WRAP, "text-center")}>
          <h2 className="text-3xl font-medium tracking-[-0.02em] sm:text-4xl">Try Vrodux ERP, then take it with you</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={MOBILE_TRIAL_URL} rel="noopener" className={cn(pill.base, pill.primary)}>
              Start your {TRIAL_DAYS}-day free trial
            </a>
            <Link href="/book-demo" className={cn(pill.base, pill.outline)}>
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
