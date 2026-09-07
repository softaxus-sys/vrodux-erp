const DEFAULT_WEBHOOK_URL =
  "https://erp.vrodux.com/api/webhooks/41df4a82e4b6e6ab424499f5e62f2d486fdf8006";

const WEBHOOK_URL = process.env.VRODUX_LEAD_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

export interface VroduxLeadPayload {
  first_name?: string;
  last_name?: string;
  name?: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  company?: string;
  title?: string;
  city?: string;
  country?: string;
  interested_in?: string;
  budget?: string;
  message?: string;
  campaign: string;
}

/**
 * Forwards a lead to the Vrodux ERP (erp.vrodux.com) webhook so it lands as a
 * Lead in the ERP. Best-effort: failures are logged, never thrown, so a lead
 * still gets saved locally / emailed even if the ERP is unreachable.
 */
export async function sendVroduxLead(payload: VroduxLeadPayload): Promise<void> {
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.warn("Vrodux ERP lead webhook responded with", res.status, await res.text());
    }
  } catch (error) {
    console.warn("Vrodux ERP lead webhook failed:", error);
  }
}
