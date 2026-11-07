import Link from "next/link";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { PhoneShot } from "@/components/mobile/phone-shot";
import { MOBILE_TRIAL_URL } from "@/lib/app-links";
import { TRIAL_DAYS } from "@/lib/trial";
import type { PhoneScreen } from "@/lib/phone-screens";
import { GRID_STYLE, PANEL, pill } from "@/components/home/ui";
import { cn } from "@/lib/utils";

/** Closing panel: trial and demo buttons, the store buttons, and a phone peeking up from the bottom. */
export function MobileCta({ screen }: { screen?: PhoneScreen }) {
  return (
    <section className="px-3 pb-3 pt-6 sm:px-5 lg:px-6">
      <div className={PANEL}>
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden />
        <div className="relative grid items-end gap-8 px-6 pt-16 sm:px-12 lg:grid-cols-[1.3fr_1fr] lg:px-16 lg:pt-24">
          <div className="pb-16 lg:pb-24">
            <h2 className="text-4xl font-medium leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Try Vrodux ERP, then take it with you</h2>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={MOBILE_TRIAL_URL} rel="noopener" className={cn(pill.base, pill.light)}>
                Start your {TRIAL_DAYS}-day free trial
              </a>
              <Link href="/book-demo" className={cn(pill.base, pill.outlineLight)}>
                Book a demo
              </Link>
            </div>
            <div className="mt-8">
              <AppStoreButtons onDark location="mobile_cta" />
            </div>
          </div>
          {screen && (
            <div className="mx-auto w-[12rem] sm:w-[14rem] lg:w-[16rem]">
              <PhoneShot src={screen.imageUrl} alt={screen.alt} width={screen.width} height={screen.height} className="rounded-b-none rounded-t-[2.2rem] border-b-0 !border-white/20" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
