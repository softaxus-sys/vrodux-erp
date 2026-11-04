# Platform (applies to every module)

Use this as a shared "Platform" page and as the common footer block on every module page.

## Multi-tenant & security
- Each customer's data is isolated (tenant isolation enforced across all modules, including raw reports).
- **Roles and permissions** — fine-grained, per module and per action; custom roles; default roles are created for each module; **per-user overrides** (grant or deny) beat role defaults.
- **Two-factor authentication** (authenticator app + backup codes), optional per user, enforceable per workspace.
- **Security settings** that are actually enforced: password length/complexity/expiry, max login attempts, session timeout, single session, IP whitelist.
- **Sessions/devices** — see and sign out your devices.
- Admin-created users verify their email; trial signup is self-serve.

## Plans, trial and billing
- **14-day free trial with unlimited users.** After the trial, the only dimension is the number of users (3 / 10 / 50; Enterprise via sales). **All modules are available on every plan.**
- Subscribe by card via Stripe or PayPal; billing portal; checkout refuses a plan smaller than your active user count; access is restored immediately on payment; data is never deleted on lapse.
- **Add-ons and credits** — SEO audits and Lead Generation reveals use credits you buy in Settings, Billing, Add-ons and credits, by card (Stripe or PayPal). Each add-on keeps its own balance. Credits do not expire and are not refundable, and can be swapped between add-ons at their relative value. Credits can be bought once the workspace has a subscription (not during the trial).
- Reminder emails at 7, 3 and 1 days before the trial ends.

## Reports hub
Central place for reports from POS (19), Inventory (17), CRM (8), Library (12) and Import/Export (8); shows only the modules you have and can access; CSV/PDF export.

## File Manager
Browse documents by module → owner → document type; today it lists CRM documents, scoped by who may see each record; download requires its own permission.

## Notifications
An alert appears in the bell and as a pop-up the moment something needs you, with a soft sound you can mute and optional desktop notifications. Alerts are stored, so you see what you missed while offline. Examples: a lead, opportunity or account assigned to you; a leave request to approve; a payroll run awaiting Finance approval; a purchase requisition to approve; a project issue assigned to you; a rented property about to fall vacant; trade shipments and payments needing attention. Team leads are also told when work lands on one of their team members. Only modules your plan and role can open appear.

## Apps and access
- **Web app**, installable to the home screen (PWA), usable on phones and tablets.
- **Mobile app** — a companion app for lookups, approvals and actions that suit a phone: CRM leads and pipeline, your own HR (attendance, leave, payslips) and the HR team's tools, one approvals inbox (leave, purchase, sales returns, payroll), Lead Generation, master data, read-only lookups across other modules, camera barcode scanning, push notifications and Vrodux AI. Same sign-in, roles, permissions and two-factor as the web, with a list of signed-in devices and remote sign-out. TODO(owner): confirm platforms and store links before naming them.
- **Desktop app (Windows)** for tills; installer asks for the server address.
- English and Arabic in the main app (some public pages and emails are English only).
- Video Guides: 19 module walkthrough videos inside Help & Support.
- Currency: company currency set once; USD-based live exchange rates, refreshed daily.
- Super-admin console: tenants, recycle bin, billing setup, Lead Generation admin.

## On-premises
Windows-service deployment exists (self-contained server, installer). Describe only if you plan to sell it; licences are signed keys.

## Do not claim yet
- Per-tier perks like warehouse/branch limits or white-label as enforced limits; SMS.
