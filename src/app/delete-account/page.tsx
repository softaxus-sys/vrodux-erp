import { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageJsonLd } from "@/components/shared/page-jsonld";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";

const EMAIL = "vrodux@softaxis.ae";

export const metadata: Metadata = pageMeta({
  title: "Delete your Vrodux ERP account | Vrodux",
  description:
    "How to request deletion of your Vrodux ERP account, or of your company's whole workspace and its data, and what we delete and keep.",
  path: "/delete-account", brand: false,
});

const mail = (
  <a href={`mailto:${EMAIL}`} className="text-brand-500 hover:underline">
    {EMAIL}
  </a>
);

export default function DeleteAccountPage() {
  return (
    <>
      <PageJsonLd type="WebPage" name="Delete your Vrodux ERP account" description={metadata.description as string} path="/delete-account" crumbs={[{ name: "Delete Account", path: "/delete-account" }]} />
      <PageHero
        badge="Account & Data"
        title="Delete your Vrodux ERP "
        highlightedWord="account or data"
        description="Vrodux ERP accounts belong to a company workspace. Choose the option that fits you."
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-foreground">1. Remove my own login</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  In the mobile app: <strong className="text-foreground">Settings &gt; Delete account &gt; &ldquo;Request account deletion&rdquo;</strong>.
                  This sends us a request tied to your signed-in account.
                </li>
                <li>
                  Or ask your workspace administrator to remove you (<strong className="text-foreground">Settings &gt; Users</strong> on the web).
                </li>
                <li>
                  Or email {mail} from the email address on the account, with the subject
                  &ldquo;Account deletion request&rdquo;.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-foreground">2. Delete my company&apos;s whole workspace</h2>
              <p>
                The workspace owner emails {mail} from the owner&apos;s address with the subject
                &ldquo;Workspace deletion request&rdquo; and the workspace name. We verify ownership before deleting.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-foreground">3. What we delete</h2>
              <p>
                Your user account, sign-in sessions, device and push-notification tokens, and personal data on the
                account. For a workspace deletion, all business records in that workspace.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-foreground">4. What we may keep</h2>
              <p>
                Records we must keep for legal, tax, accounting or fraud-prevention reasons (for example billing
                records), only for the legally required period.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-foreground">5. How long it takes</h2>
              <p>We confirm by email and complete verified requests within 30 days.</p>
            </div>

            <p className="border-t pt-6 text-sm">
              Questions? {mail}. See our{" "}
              <Link href="/privacy" className="text-brand-500 hover:underline">Privacy Policy</Link> and{" "}
              <Link href="/terms" className="text-brand-500 hover:underline">Terms of Service</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
