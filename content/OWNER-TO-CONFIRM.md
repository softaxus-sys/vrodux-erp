# Owner to confirm before publishing

Every item below is left unpublished or worded conservatively in code, with a `TODO(owner)` comment.
Search the repo for `TODO(owner)` to find each one. Flags that can be flipped live in `src/lib/owner-flags.ts`.

## Security page (`src/app/security/page.tsx`)
1. Database-level encryption at rest and TLS 1.3. Only "connections use TLS" and "secrets stored encrypted" are published.
2. A stronger backup target than "a restore can lose up to 24 hours of changes".
3. SOC 2 Type II "in progress". Removed. Restore only if the audit is underway.
4. GDPR and UAE PDPL. Worded "designed to support" until legal confirms.
5. "Infrastructure Security" card (DDoS protection, WAF, intrusion detection). Not in the brief and not confirmed. Left as it was.

## Home page
6. "500+ businesses", "40+ countries", "4.9/5 from 200+ reviews", "99.9% uptime SLA". All removed (home hero, stats strip, testimonials, final call to action, features and solutions pages). Restore only with evidence.
7. Terms of service (`src/app/terms/page.tsx`) still says "99.9% uptime as described in our SLA". Not touched because it is a legal document. Needs the same decision.

## Pricing
8. Tiering of multi-company (up to 3), multi-currency, advanced BI, API access, custom workflows and advanced reporting. Shown as included on all plans; "up to 3 companies" removed (`pricing-data.ts`, `pricing-comparison.tsx`, `pricing-faqs.ts`, home FAQ).
9. Shared AI allowance (`AI_ALLOWANCE_CONFIRMED`). Until true, pricing, FAQ and AI pages say only "connect your own AI provider key".
10. Add-ons: the swap fee and the "credits are not refundable" wording (`ADDON_POLICY_CONFIRMED` in `src/components/sections/pricing-addons.tsx`). Hidden until confirmed.

## AI
11. Voice (`VOICE_CONFIRMED`). Not mentioned until true.
12. Telegram and phone-call voice claims on the AI Workforce page. Left as they were. Confirm they are still current.

## E-commerce
13. Arabic (right-to-left) storefront (`ECOMMERCE_ARABIC_CONFIRMED`). Not published until a visual check.

## CRM
14. Meta Conversions API signal (`META_CAPI_CONFIRMED` in `crm-page.tsx`). Hidden until tested with a real Meta dataset.

## Mobile app
15. Platforms and store links. Not named anywhere.

## FAQ
16. API plan wording, uptime and backups, and the current implementation, migration, training and support offer. Worded conservatively (see `TODO(owner)` in `src/app/faq/page.tsx` and `src/components/sections/faq-section.tsx`).

## Hospitality
17. No housekeeping screenshots added (the housekeeping screen was crashing on the demo workspace on 2 November 2026). Confirm it is fixed first.

## E-invoicing landing page
18. Not built. The brief says to publish it only if the owner approves. Dates (providers appointed by 31 March 2027, go-live 1 July 2027 for businesses under AED 50 million) must be checked with the Ministry of Finance first.

## Videos
19. The demos page reads `manifest.json` from Contabo, so durations and the 31 videos need no code change. Videos are cached for a day, so a replaced file can show the old copy for up to a day.
20. There is no `file-manager` docs category, so the File Manager video offset (0:48) is not linked from any page.
