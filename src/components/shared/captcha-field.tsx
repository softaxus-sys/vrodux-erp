"use client";

import { forwardRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

interface CaptchaFieldProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  className?: string;
}

/**
 * Cloudflare Turnstile widget. Renders nothing when the site key is absent so
 * the forms stay usable before the keys are provisioned.
 */
export const CaptchaField = forwardRef<TurnstileInstance, CaptchaFieldProps>(
  function CaptchaField({ onVerify, onExpire, className }, ref) {
    const { resolvedTheme } = useTheme();

    if (!SITE_KEY) return null;

    return (
      <div className={className}>
        <Turnstile
          ref={ref}
          siteKey={SITE_KEY}
          onSuccess={onVerify}
          onExpire={() => onExpire?.()}
          onError={() => onExpire?.()}
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
