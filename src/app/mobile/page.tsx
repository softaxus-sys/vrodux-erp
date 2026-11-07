import Link from "next/link";
import { Metadata } from "next";
import { pageMeta, SITE } from "@/lib/seo";
import { GOOGLE_PLAY_URL } from "@/lib/app-links";
import { JsonLd } from "@/components/demos/json-ld";
import { PageJsonLd } from "@/components/shared/page-jsonld";
import { getPhoneScreens, type PhoneScreen } from "@/lib/phone-screens";
import { ScrollShowcase } from "@/components/mobile/scroll-showcase";
import { StepsStory } from "@/components/mobile/steps-story";
import { MORE_ORDER } from "@/components/mobile/module-copy";
import { MobileHero } from "@/components/mobile/mobile-hero";
import { CapabilityGrid } from "@/components/mobile/capability-grid";
import { PlanSecurity } from "@/components/mobile/plan-security";
import { GetStarted } from "@/components/mobile/get-started";
import { MobileCta } from "@/components/mobile/mobile-cta";
import { Reveal } from "@/components/mobile/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading, WRAP } from "@/components/home/ui";

// Re-check the screenshot manifest on Contabo every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = pageMeta({
  title: "Vrodux ERP Mobile App for Android",
  description:
    "Check sales, people, stock and customers, and act on approvals from your phone. The Vrodux ERP app for Android shows the modules your role can access, with the same login as the web app.",
  path: "/mobile",
  brand: false,
});

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
  {
    q: "Do I need a separate account for the app?",
    a: "No. The app uses the same login as the web app, and two-factor sign-in is supported.",
  },
  {
    q: "Can I sign out of a lost or old phone?",
    a: "Sessions can be ended from Settings → Devices.",
  },
  {
    q: "What can I do in the app?",
    a: "Update leads and deals, mark attendance and apply for leave, approve requests, take restaurant orders, run a checkout, scan barcodes and QR codes to look up or add stock, work the hotel front desk, and get push notifications for approvals. Heavier admin work stays on the web.",
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
  const rest = MORE_ORDER.map((slug) => screens.find((s) => s.slug === slug)).filter((s): s is PhoneScreen => !!s);
  const cta = screens.find((s) => s.slug === "dashboard") ?? screens[0];
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

      <MobileHero screens={screens} />

      {/* Everyday screens */}
      <StepsStory screens={screens} />

      {/* The rest of the modules */}
      {rest.length > 0 && (
        <section className="py-10 md:py-16" aria-labelledby="screens-h">
          <div className={WRAP}>
            <Reveal>
              <SectionHeading
                eyebrow="Module by module"
                title={<span id="screens-h">The rest of the app</span>}
                description="Finance, purchasing, point of sale, restaurant and more. The app shows only the modules and permissions your role has. Screenshots show demo data."
              />
            </Reveal>
            <div className="mt-12">
              <ScrollShowcase screens={rest} />
            </div>
          </div>
        </section>
      )}

      {/* What you can do */}
      <section className="py-16 md:py-24" aria-labelledby="can-do-h">
        <div className={WRAP}>
          <Reveal>
            <SectionHeading
              eyebrow="On your phone"
              title={<span id="can-do-h">What you can do on your phone</span>}
              description="The app is a companion for what makes sense away from a desk: approvals, lookups and quick actions. Heavier admin work stays on the web."
            />
          </Reveal>
          <CapabilityGrid />
          <p className="mt-8 text-sm text-muted-foreground">
            See the full list in the{" "}
            <Link href="/docs/mobile-app/whats-on-your-phone" className="underline underline-offset-4">mobile app guide</Link>.
          </p>
        </div>
      </section>

      {/* Plan and security */}
      <section className="relative overflow-hidden bg-[#0b1026] py-16 text-white md:py-24" aria-labelledby="plan-h">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.35),transparent_65%)] blur-2xl" />
        <div className={WRAP + " relative"}>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Works with your plan</p>
            <h2 id="plan-h" className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl">Same account. Your role. Your modules.</h2>
            <p className="mt-5 max-w-2xl text-lg text-white/70">Nothing new to set up: the app follows the account and permissions you already have.</p>
          </Reveal>
          <PlanSecurity />
        </div>
      </section>

      {/* Get started */}
      <section className="py-16 md:py-24" aria-labelledby="start-h">
        <div className={WRAP}>
          <Reveal>
            <SectionHeading
              eyebrow="Get started"
              title={<span id="start-h">Up and running in three steps</span>}
              description="Start on the web, then install the app and sign in."
            />
          </Reveal>
          <GetStarted />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" aria-labelledby="mobile-faq-h">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 id="mobile-faq-h" className="text-center text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
              Mobile app questions
            </h2>
          </Reveal>
          <Accordion type="single" collapsible className="mt-10 space-y-2">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="rounded-xl border px-5 data-[state=open]:bg-muted/30">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            More in the <Link href="/docs/mobile-app/whats-on-your-phone" className="underline underline-offset-4">mobile app guide</Link>,{" "}
            <Link href="/pricing" className="underline underline-offset-4">pricing</Link> and{" "}
            <Link href="/security" className="underline underline-offset-4">security</Link>.
          </p>
        </div>
      </section>

      <MobileCta screen={cta} />
    </>
  );
}
