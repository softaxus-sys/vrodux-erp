# Owner to confirm before publishing

Search the repo for `TODO(owner)` to find anything still open. Flags live in `src/lib/owner-flags.ts`.

## Confirmed by the owner on 4 November 2026 (now published)
- Security: encryption at rest, TLS 1.3, point-in-time recovery (no RPO/RTO numbers published), SOC 2 Type II audit underway, DDoS/WAF/intrusion detection.
- 99.9% uptime SLA for every plan. Enterprise can have a custom SLA. The Terms page already said 99.9%.
- Plan tiers: multi-company (up to 3 on Professional, unlimited on Enterprise). Multi-currency, API access, advanced BI, custom workflows and advanced reporting are Enterprise only.
- Support: Standard (Micro, Starter), Priority (Professional), Dedicated (Enterprise). No response times are published.
- Shared AI allowance is on for everyone (`AI_ALLOWANCE_CONFIRMED`).
- Add-on credits are not refundable, and swapping credits is free (`ADDON_POLICY_CONFIRMED`).
- Voice and Telegram are working (`VOICE_CONFIRMED`).
- Arabic storefront looks right (`ECOMMERCE_ARABIC_CONFIRMED`).
- Meta Conversions API signal was tested with a real Meta dataset (`META_CAPI_CONFIRMED`).
- The housekeeping screen is fixed.
- The e-invoicing page may be built.

## Still open
1. "500+ businesses", "40+ countries" and "4.9/5 from 200+ reviews" cannot be backed with evidence, so they stay removed.
2. GDPR and UAE PDPL stay worded "designed to support" until legal confirms compliance.
3. Mobile app: not in the stores yet, so platforms and store links are not named anywhere. Add them when it is released.
4. Hospitality: the housekeeping screen is fixed, but no housekeeping screenshot has been added. Send the image.
5. E-invoicing page (`/e-invoicing`): verify the reported dates (ASP appointed by 31 March 2027, go-live 1 July 2027 for businesses under AED 50 million) with the Ministry of Finance before release.
6. Solutions page: inter-company transactions and consolidated P&L are removed. Restore them only if the product supports them.
7. Multi-currency is now Enterprise only on the pricing page. Other pages (Finance, features, Solutions, the cloud ERP blog post) still describe multi-currency without a plan. Decide if they need a note.
8. FAQ: the current implementation, data migration and training offer is worded conservatively ("quoted separately"). Replace with the real offer.
9. On-premise claims on the Solutions page ("Offline capability", "No recurring SaaS fees") are unchanged and unconfirmed.
10. SEO AI Agent: the poster frame is blurred, so it has no home-page tab. Send a clean screenshot.

## Videos
11. The demos page reads `manifest.json` from Contabo, so durations and the 31 videos need no code change. Videos are cached for a day.
12. There is no `file-manager` docs category, so the File Manager video offset (0:48) is not linked from any page.
