/**
 * Claims that need the owner's confirmation before they are shown to visitors. Everything here is
 * `false` by default so nothing unconfirmed is published. Flip a flag only after checking it in
 * production, and see content/OWNER-TO-CONFIRM.md for the full list.
 */

// Confirmed by the owner on 4 November 2026: the shared allowance is on for everyone.
export const AI_ALLOWANCE_CONFIRMED = true;

// Confirmed by the owner on 4 November 2026: the Arabic storefront looks right.
export const ECOMMERCE_ARABIC_CONFIRMED = true;

// Confirmed by the owner on 4 November 2026: voice and Telegram are working.
export const VOICE_CONFIRMED = true;

/** How a customer powers Vrodux AI, worded for what is confirmed. */
export const AI_KEY_TEXT = AI_ALLOWANCE_CONFIRMED
  ? "Connect your own AI provider key, or use the shared allowance included with your workspace where enabled (monthly message limit applies)"
  : "Connect your own AI provider key";
