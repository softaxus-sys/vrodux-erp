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
3. Mobile app: now on Google Play (`src/lib/app-links.ts`). The App Store button is a disabled "Coming soon" badge. When the iOS listing is live, set `APP_STORE_URL` in that file and the button becomes a link. The buttons are simple lookalikes, not the official store badge artwork. Swap in the official badges if you want them.
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

## UAE VAT, WPS and e-invoicing landing page (`/uae-vat-payroll-e-invoicing`)
13. Screenshots still needed: the VAT 201 return screen, the WPS export dialog (with excluded employees), the e-invoicing readiness page, and an invoice with a linked credit note. Only a payroll run screenshot (from the docs library) is shown.
14. Verify the e-invoicing deadline wording and the Ministry of Finance link before running ads (`TODO(owner)` in the page).
15. Confirm the network ID field, the PINT AE XML download, the readiness check and the PDF payslip download are live for all customers.
16. The brief had a few garbled lines. I read the nav label as "UAE VAT, WPS & e-invoicing" and the pricing strip as figures taken from the pricing page's own data.


## Fitness & Gym (`/features/fitness-gym`, `/industries/fitness-gym`, docs category `fitness-gym`)
17. The brief said `/modules/fitness-gym`, but this site's module pages live at `/features/<module>` (and industries at `/industries/<slug>`), so Fitness & Gym follows that pattern.
18. The page image `public/images/industries/fitness-gym.jpg` is a generated placeholder (a dumbbell on a gradient). Replace it with a real photo, 1600 x 1600, same file name.
19. The ten docs pages describe the features from the brief. Button and menu names in the steps (for example "Sell membership", "Take payment", settings for the member portal) are my wording, so check them against the app and fix any that differ.
20. Screenshots are placeholders (hidden in production until images are added). No Fitness & Gym screenshots or demo video exist yet, so the page uses the photo and has no "Watch the demo" section.
21. Not claimed anywhere: turnstile or door hardware, online card payments for members, Arabic screens for this module, payment gateways, wearable or app integrations, a member mobile app. The module FAQ says plainly that Arabic and card payments are not available yet.
22. The sign-up industry list is on the external app (erp.vrodux.com), outside this repo. Only the demo-request form list here was updated, and "Fitness & Gym" must be added to the app's own sign-up list. Trial links keep their `?plan=` parameters untouched.

## Money-back guarantee removal
23. The only guarantee claim on the site was "30-day money-back guarantee" in the shared call-to-action banner (`final-cta.tsx`). It is removed, and the first trust point now reads "14-day free trial, no credit card required". No other refund, risk-free or guarantee wording was found in pages, FAQ, blog, schema, llms.txt or emails.
24. **Terms of Service, section 4 (Subscription & Payment) needs a person to review.** It says "All fees are non-refundable except as required by law or as described in our refund policy." Left unchanged. There is no refund policy page in the repo, so the wording points to something that may not exist.

## Missing modules and docs batch
25. New industry pages (placeholder images, replace with real ones, 1600 x 1600): `tourism.jpg`, `lead-generation.jpg`, `ecommerce.jpg` in `public/images/industries/`. Descriptions use only what the module content files already say.
26. Features overview: added Help & Support (tickets, Video Guides) and Calendar. I have no description of what the Calendar shows, so the card only says "A calendar built into the app". Please give me one line.
27. Restaurant: recipe costing added as a feature line and a docs article ("per-dish ingredient costs and margins"). The restaurant page already had a recipe costing section.
28. New docs: Finance (e-invoicing credit notes and send queue, recurring expenses, currency and exchange rates), Inventory (scan a barcode or QR), CRM (connect lead sources, send lead quality back to Meta), Restaurant (recipe costing), Settings (API keys and connections, platform AI allowance and voice), and a new Construction category (3 short articles). Mobile app article updated with the hotel front desk, barcode scanning and approval push notifications.
29. Not written because I have no detail: Construction beyond "projects, BOQ, contractors, bidding and contracts, progress, costs via Purchase/HR/Finance"; how API keys are created and managed in Settings; where the Calendar lives. UI button and menu names in the new steps are my wording, so please check them against the app.
30. "Support and Video Guides" already exists as "Help and Support" in the Settings docs, so I did not add a duplicate.
31. Scanning: the docs say coverage is strongest for food and branded goods, and unknown products are entered by hand, as in your brief. Please confirm USB/Bluetooth/camera scanner support on web (camera in Chrome and Edge only) and that the mobile app scanner adds stock.
