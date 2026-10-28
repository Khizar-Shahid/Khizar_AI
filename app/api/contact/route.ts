import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOTIFY_EMAILS = [
  "abdurrehman.swe@gmail.com",
  "khizar@aplusactive.com",
  "tassadiqhussain35@gmail.com",
];

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const { name, email, phone, service, description } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim() || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string" || !service.trim()) {
      return NextResponse.json(
        { error: "Please select a service interest." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Realtor-Go <info@realtor-go.com>";

    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn(
        "[Resend API] RESEND_API_KEY is not configured. Form submission received:",
        { name, email, phone, service, description }
      );
      // Return success with warning note if in development without API key
      return NextResponse.json({
        ok: true,
        mock: true,
        message: "Submission received (Resend API key pending configuration).",
      });
    }

    const resend = new Resend(apiKey);

    const safeName = name.trim();
    const safeEmail = email.trim();
    const safePhone = phone ? String(phone).trim() : "Not provided";
    const safeService = service.trim();
    const safeDescription = description && typeof description === "string" && description.trim()
      ? description.trim().replace(/\n/g, "<br/>")
      : "<em>No additional details provided.</em>";

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1c2522; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e1e7e4; border-radius: 8px;">
        <h2 style="color: #0d2820; border-bottom: 2px solid #336151; padding-bottom: 8px; margin-top: 0;">
          New Inquiry from Realtor-Go Website
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #526760;">Name:</td>
            <td style="padding: 8px 0;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #526760;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #2b7058;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #526760;">Phone:</td>
            <td style="padding: 8px 0;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #526760;">Service:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0d2820;">${safeService}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; background: #f6f8f7; padding: 16px; border-radius: 6px; border-left: 4px solid #336151;">
          <h4 style="margin: 0 0 8px 0; color: #0d2820;">Description &amp; Project Details:</h4>
          <p style="margin: 0; color: #2d3e37;">${safeDescription}</p>
        </div>

        <p style="margin-top: 24px; font-size: 13px; color: #849690; border-top: 1px solid #e1e7e4; padding-top: 12px;">
          Sent from the contact form at <a href="https://www.realtor-go.com/contact" style="color: #849690;">realtor-go.com/contact</a>. Reply directly to this email to contact the lead.
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: NOTIFY_EMAILS,
      replyTo: safeEmail,
      subject: `New Realtor-Go Inquiry: ${safeName} (${safeService})`,
      html: htmlContent,
    });

    if (error) {
      console.error("[Resend API Error]:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, data });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected server error";
    console.error("[Contact API Exception]:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
