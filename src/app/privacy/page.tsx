import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy — Vrodux ERP",
  description: "Learn how SoftAxis Technologies LLC collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Last Updated: January 2025"
        title="Privacy "
        highlightedWord="Policy"
        description="How SoftAxis Technologies LLC collects, uses, and protects your personal information when you use Vrodux ERP."
        centered={true}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {[
              { title: "1. Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, request a demo, fill out a contact form, or subscribe to our newsletter. This includes name, email address, company information, phone number, and usage data. We also collect technical data such as IP addresses, browser type, and usage patterns through analytics tools." },
              { title: "2. How We Use Your Information", content: "We use your information to provide and improve our services, communicate with you about your account and our products, send marketing communications (with your consent), analyze usage patterns to improve user experience, comply with legal obligations, and prevent fraud and abuse." },
              { title: "3. Information Sharing", content: "We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information with service providers who help us operate our business (email services, analytics platforms, payment processors), when required by law, or with your consent." },
              { title: "4. Data Security", content: "We implement industry-standard security measures to protect your personal information including encryption in transit and at rest, regular security audits, access controls, and monitoring. However, no method of transmission over the Internet is 100% secure." },
              { title: "5. Data Retention", content: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Account data is retained for the duration of your subscription and 90 days after termination." },
              { title: "6. Your Rights", content: "You have the right to access, correct, or delete your personal information. You may also object to processing, request portability of your data, and withdraw consent at any time. To exercise these rights, contact us at privacy@vrodux.com." },
              { title: "7. Cookies", content: "We use cookies and similar technologies to analyze usage, remember your preferences, and deliver relevant content. You can control cookie settings through your browser. Essential cookies cannot be disabled as they are required for the platform to function." },
              { title: "8. International Transfers", content: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for any international data transfers in compliance with applicable data protection laws." },
              { title: "9. Contact Us", content: "For questions about this Privacy Policy or our privacy practices, contact us at: SoftAxis Technologies LLC, Dubai, United Arab Emirates. Email: privacy@vrodux.com" },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
