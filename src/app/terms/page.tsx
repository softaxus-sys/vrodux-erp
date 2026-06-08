import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service — Vrodux ERP",
  description: "Terms and conditions governing the use of Vrodux ERP software and services by SoftAxis Technologies LLC.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="Last Updated: January 2025"
        title="Terms of "
        highlightedWord="Service"
        description="Please read these terms carefully before using Vrodux ERP. By using our services, you agree to these terms."
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {[
              { title: "1. Acceptance of Terms", content: "By accessing or using Vrodux ERP, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services. These terms apply to all users, including subscribers, demo users, and visitors." },
              { title: "2. Description of Services", content: "Vrodux ERP is a software-as-a-service (SaaS) enterprise resource planning platform developed by SoftAxis Technologies LLC. The service includes web-based access to ERP modules, data storage, technical support, and software updates as described in your subscription plan." },
              { title: "3. Account Responsibilities", content: "You are responsible for maintaining the confidentiality of your account credentials, all activities that occur under your account, ensuring authorized users comply with these terms, and providing accurate information. You must notify us immediately of any unauthorized use of your account." },
              { title: "4. Subscription & Payment", content: "Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law or as described in our refund policy. Failure to pay may result in service suspension or termination." },
              { title: "5. Data Ownership", content: "You retain ownership of all data you input into Vrodux ERP. SoftAxis Technologies grants you a license to use the software during your subscription period. Upon termination, we will provide a 30-day data export period." },
              { title: "6. Acceptable Use", content: "You agree not to use Vrodux ERP for any illegal purpose, to upload malicious code, to attempt to gain unauthorized access to other accounts, to interfere with the service's operation, or to resell access without authorization." },
              { title: "7. Intellectual Property", content: "Vrodux ERP software, branding, documentation, and related materials are the intellectual property of SoftAxis Technologies LLC. You receive a limited, non-exclusive license to use the software during your subscription." },
              { title: "8. Service Availability", content: "We strive to maintain 99.9% uptime as described in our SLA. Planned maintenance is performed outside business hours with advance notice. Unplanned outages are addressed immediately with status updates provided on our status page." },
              { title: "9. Limitation of Liability", content: "SoftAxis Technologies' liability is limited to the amount paid in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages, loss of profits, or data loss caused by use of our services." },
              { title: "10. Governing Law", content: "These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved through the courts of Dubai, UAE. By using our services, you consent to this jurisdiction." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
