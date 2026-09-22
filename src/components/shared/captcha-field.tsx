"use client";

import { forwardRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";
import { RefreshCw } from "lucide-react";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

interface CaptchaFieldProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  className?: string;
}

/**
 * Cloudflare Turnstile widget. Renders nothing when the site key is absent so
 * the forms stay usable before the keys are provisioned.
 *
 * When the challenges.cloudflare.com script itself fails to load (Cloudflare
 * outage, or an ad-blocker/privacy extension blocking the domain), the
 * widget would otherwise render nothing and never call back — leaving
 * visitors stuck with a "please complete the challenge" error for a
 * challenge they never saw. We surface that failure explicitly instead.
 */
export const CaptchaField = forwardRef<TurnstileInstance, CaptchaFieldProps>(
  function CaptchaField({ onVerify, onExpire, className }, ref) {
    const { resolvedTheme } = useTheme();
    const [scriptFailed, setScriptFailed] = useState(false);
    const [retryKey, setRetryKey] = useState(0);

    if (!SITE_KEY) return null;

    if (scriptFailed) {
      return (
        <div className={className}>
          <button
            type="button"
            onClick={() => {
              setScriptFailed(false);
              setRetryKey((k) => k + 1);
            }}
            className="flex items-center gap-1.5 text-xs text-destructive hover:underline"
          >
            <RefreshCw className="w-3 h-3" />
            Verification widget failed to load — disable ad-blocking/privacy
            extensions for this site, or click to retry.
          </button>
        </div>
      );
    }

    return (
      <div className={className}>
        <Turnstile
          key={retryKey}
          ref={ref}
          siteKey={SITE_KEY}
          onSuccess={onVerify}
          onExpire={() => onExpire?.()}
          onError={() => onExpire?.()}
          scriptOptions={{ onError: () => setScriptFailed(true) }}
          options={{
            theme: resolvedTheme === "dark" ? "dark" : "light",
            size: "flexible",
            appearance: "interaction-only",
          }}
        />
      </div>
    );
  }
);

/** True when Turnstile is configured and a token is therefore required. */
export const captchaEnabled = Boolean(SITE_KEY);
