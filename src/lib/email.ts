import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@vrodux.com";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@vrodux.com";
const DEMO_EMAIL = process.env.DEMO_EMAIL || "demo@vrodux.com";

export async function sendContactNotification(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  country?: string;
  subject: string;
  message: string;
}) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: CONTACT_EMAIL,
    subject: `New Contact: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.company || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Country</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.country || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Subject</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.subject}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td></tr>
      </table>
    `,
  });

  await resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: "We received your message — Vrodux ERP",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Vrodux ERP</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Enterprise Resource Planning</p>
        </div>
        <div style="padding: 32px; background: #f9fafb; border-radius: 0 0 8px 8px;">
          <h2 style="color: #111827;">Thank you, ${data.name}!</h2>
          <p style="color: #6b7280; line-height: 1.6;">
            We've received your message and will get back to you within 1-2 business days.
            Our team will review your inquiry and provide a comprehensive response.
          </p>
          <div style="margin: 24px 0; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #4f46e5;">
            <p style="margin: 0; color: #374151;"><strong>Your message:</strong></p>
            <p style="margin: 8px 0 0; color: #6b7280;">${data.message}</p>
          </div>
          <p style="color: #6b7280;">In the meantime, feel free to explore our <a href="https://vrodux.com" style="color: #4f46e5;">website</a> or <a href="https://erp.vrodux.com" style="color: #4f46e5;">try our ERP platform</a>.</p>
          <p style="color: #9ca3af; font-size: 14px; margin-top: 32px;">
            Best regards,<br>
            <strong>Vrodux ERP Team</strong><br>
            SoftAxis Technologies LLC
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendDemoNotification(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  country?: string;
  employees?: string;
  industry?: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: DEMO_EMAIL,
    subject: `New Demo Request: ${data.company}`,
    html: `
      <h2>New Demo Booking Request</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.company}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Country</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.country || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Employees</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.employees || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Industry</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.industry || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Date</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.preferredDate || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Time</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.preferredTime || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Notes</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.notes || "N/A"}</td></tr>
      </table>
    `,
  });

  await resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: "Your Demo is Booked — Vrodux ERP",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Demo Confirmed!</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Vrodux ERP</p>
        </div>
        <div style="padding: 32px; background: #f9fafb; border-radius: 0 0 8px 8px;">
          <h2 style="color: #111827;">Hello ${data.name},</h2>
          <p style="color: #6b7280; line-height: 1.6;">
            Thank you for booking a demo of Vrodux ERP! We're excited to show you how our platform
            can transform your business operations at <strong>${data.company}</strong>.
          </p>
          <div style="margin: 24px 0; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="margin: 0 0 12px; color: #111827;">Demo Details</h3>
            ${data.preferredDate ? `<p style="margin: 4px 0; color: #6b7280;">📅 <strong>Date:</strong> ${data.preferredDate}</p>` : ""}
            ${data.preferredTime ? `<p style="margin: 4px 0; color: #6b7280;">🕐 <strong>Time:</strong> ${data.preferredTime}</p>` : ""}
            <p style="margin: 4px 0; color: #6b7280;">📧 <strong>Confirmation will be sent to:</strong> ${data.email}</p>
          </div>
          <p style="color: #6b7280;">
            Our team will reach out to confirm the exact time slot and send you a meeting link.
            If you need to reschedule, please contact us at <a href="mailto:demo@vrodux.com" style="color: #4f46e5;">demo@vrodux.com</a>.
          </p>
          <p style="color: #9ca3af; font-size: 14px; margin-top: 32px;">
            Best regards,<br>
            <strong>Vrodux ERP Sales Team</strong><br>
            SoftAxis Technologies LLC
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendNewsletterWelcome(email: string, name?: string) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Welcome to Vrodux ERP Newsletter",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0;">Welcome aboard!</h1>
        </div>
        <div style="padding: 32px; background: #f9fafb;">
          <p style="color: #374151;">Hi${name ? ` ${name}` : ""},</p>
          <p style="color: #6b7280; line-height: 1.6;">
            You're now subscribed to the Vrodux ERP newsletter. Expect to receive:
          </p>
          <ul style="color: #6b7280; line-height: 2;">
            <li>Product updates and new feature announcements</li>
            <li>Industry insights and ERP best practices</li>
            <li>Case studies from businesses like yours</li>
            <li>Exclusive offers and early access opportunities</li>
          </ul>
          <p style="color: #9ca3af; font-size: 12px;">
            You can unsubscribe at any time by clicking the unsubscribe link in any of our emails.
          </p>
        </div>
      </div>
    `,
  });
}
