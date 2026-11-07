"use client";

import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/app-links";
import { cn, trackEvent } from "@/lib/utils";

function PlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#00A0FF" d="M3.6 1.8 13.2 12 3.6 22.2c-.4-.3-.6-.8-.6-1.4V3.2c0-.6.2-1.1.6-1.4z" />
      <path fill="#00E676" d="M16.5 8.7 13.2 12 3.6 1.8c.5-.2 1.1-.2 1.7.1l11.2 6.8z" />
      <path fill="#FF3D57" d="M16.5 15.3 5.3 22.1c-.6.3-1.2.3-1.7.1L13.2 12l3.3 3.3z" />
      <path fill="#FFC400" d="M20.5 10.6c.9.5.9 1.8 0 2.4l-4 2.3-3.3-3.3 3.3-3.3 4 1.9z" />
    </svg>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

const base = "inline-flex h-12 min-w-[10.5rem] items-center gap-3 rounded-xl border px-4 text-left transition";

/**
 * Google Play download button plus a disabled "Coming soon" App Store button.
 * `onDark` is for dark backgrounds (hero, banners); the default suits light pages.
 */
export function AppStoreButtons({
  onDark = false,
  location,
  className,
}: {
  onDark?: boolean;
  /** Where the buttons sit, used in the click event. */
  location: string;
  className?: string;
}) {
  const live = cn(
    base,
    onDark
      ? "border-white/40 bg-black text-white hover:border-white hover:bg-black/80"
      : "border-neutral-800 bg-black text-white hover:bg-neutral-800"
  );
  const soon = cn(
    base,
    "cursor-not-allowed",
    onDark ? "border-white/25 bg-white/10 text-white/60" : "border-border bg-muted text-muted-foreground"
  );

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={live}
        aria-label="Get the Vrodux ERP app on Google Play"
        onClick={() => trackEvent("app_download_click", { store: "google_play", location })}
      >
        <PlayLogo className="h-6 w-6 shrink-0" />
        <span className="leading-tight">
          <span className="block text-[10px] uppercase tracking-wide opacity-80">Get it on</span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </a>

      {APP_STORE_URL ? (
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={live}
          aria-label="Download the Vrodux ERP app on the App Store"
          onClick={() => trackEvent("app_download_click", { store: "app_store", location })}
        >
          <AppleLogo className="h-6 w-6 shrink-0" />
          <span className="leading-tight">
            <span className="block text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
            <span className="block text-base font-semibold">App Store</span>
          </span>
        </a>
      ) : (
        <span className={soon} role="img" aria-label="App Store, coming soon">
          <AppleLogo className="h-6 w-6 shrink-0" />
          <span className="leading-tight">
            <span className="block text-[10px] uppercase tracking-wide">Coming soon on the</span>
            <span className="block text-base font-semibold">App Store</span>
          </span>
        </span>
      )}
    </div>
  );
}
