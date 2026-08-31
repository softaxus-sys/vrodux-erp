const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Minimum seconds a human plausibly needs to fill a form. */
const MIN_FILL_SECONDS = 3;

export type CaptchaResult = { success: true } | { success: false; error: string };

/**
 * Verifies a Cloudflare Turnstile token.
 *
 * Fails open when TURNSTILE_SECRET_KEY is unset so local dev and preview
 * deploys keep working before the keys are provisioned — the same graceful
 * degradation the DB and Resend calls use.
 */
export async function verifyTurnstile(
  token: string | undefined,
  ip?: string
): Promise<CaptchaResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn("TURNSTILE_SECRET_KEY not set — skipping captcha verification.");
    return { success: true };
  }

  if (!token) {
    return { success: false, error: "Please complete the verification challenge." };
  }

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "unknown") body.append("remoteip", ip);

    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(10_000),
    });

    const outcome = (await res.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!outcome.success) {
      console.warn("Turnstile rejected token:", outcome["error-codes"]);
      return { success: false, error: "Verification failed. Please try again." };
    }

    return { success: true };
  } catch (error) {
    // Network failure or timeout reaching Cloudflare. Fail closed: a form that
    // rejects a real lead is recoverable, an open spam relay is not.
    console.error("Turnstile verification error:", error);
    return { success: false, error: "Could not verify your request. Please try again." };
  }
}

/**
 * Zero-config bot checks that run before the captcha:
 *  - `website` is a hidden field no human ever sees or fills.
 *  - `renderedAt` is when the form mounted; bots typically post instantly.
 */
export function checkHoneypot(body: {
  website?: unknown;
  renderedAt?: unknown;
}): CaptchaResult {
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return { success: false, error: "Submission rejected." };
  }

  if (typeof body.renderedAt === "number" && Number.isFinite(body.renderedAt)) {
    const elapsed = (Date.now() - body.renderedAt) / 1000;
    if (elapsed >= 0 && elapsed < MIN_FILL_SECONDS) {
      return { success: false, error: "That was too quick — please try again." };
    }
  }

  return { success: true };
}
