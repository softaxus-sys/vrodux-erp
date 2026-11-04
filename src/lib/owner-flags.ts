/**
 * Claims that need the owner's confirmation before they are shown to visitors. Everything here is
 * `false` by default so nothing unconfirmed is published. Flip a flag only after checking it in
 * production, and see content/OWNER-TO-CONFIRM.md for the full list.
 */

// TODO(owner): set true once the shared AI allowance is switched on in production.
export const AI_ALLOWANCE_CONFIRMED = false;

// TODO(owner): set true after a visual check of the Arabic (right-to-left) storefront.
export const ECOMMERCE_ARABIC_CONFIRMED = false;

// TODO(owner): set true once the platform voice is enabled in production.
export const VOICE_CONFIRMED = false;

/** How a customer powers Vrodux AI, worded for what is confirmed. */
export const AI_KEY_TEXT = AI_ALLOWANCE_CONFIRMED
  ? "Connect your own AI provider key, or use the shared allowance included with your workspace where enabled (monthly message limit applies)"
  : "Connect your own AI provider key";
