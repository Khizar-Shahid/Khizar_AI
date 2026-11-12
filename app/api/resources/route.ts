import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const ROLE_OPTIONS = new Set(["", "buyer", "seller"]);

const KIT_PDF_URL =
  "https://drive.google.com/file/d/12ROjgTls4me4A3TJpxP736kikInRNi8o/view?usp=sharing";
const TRACKER_URL =
  "https://docs.google.com/spreadsheets/d/1xNbltTB5f__kcHt-lxS_BzBcDmTJORmN/edit?usp=sharing";

const rateBucket = new Map<string, number[]>();

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateBucket.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    rateBucket.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateBucket.set(ip, recent);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(clientIp(request))) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const honeypot =
      (typeof body.company === "string" && body.company.trim()) ||
      (typeof body.website === "string" && body.website.trim());
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const role = typeof body.role === "string" ? body.role.trim().toLowerCase() : "";

    if (!name) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (role && !ROLE_OPTIONS.has(role)) {
      return NextResponse.json({ error: "Please choose buyer, seller, or skip." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.error("[Resources API] RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Please try again later." },
        { status: 503 }
      );
    }

    if (!fromEmail) {
      console.error("[Resources API] FROM_EMAIL / CONTACT_FROM_EMAIL is not configured.");
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Please try again later." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const roleLabel = role === "buyer" ? "buyer" : role === "seller" ? "seller" : "not specified";

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1c2522; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e1e7e4; border-radius: 8px;">
        <h2 style="color: #0d2820; border-bottom: 2px solid #336151; padding-bottom: 8px; margin-top: 0;">
          Your Tracker and Follow-Up Kit
        </h2>
        <p>Hi ${safeName},</p>
        <p>Thanks for requesting the Realtor-Go Tracker and Follow-Up Kit. Use the links below to open both files:</p>
        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 8px;"><a href="${KIT_PDF_URL}" style="color: #2b7058; font-weight: 600;">Follow-Up Kit (PDF)</a></li>
          <li><a href="${TRACKER_URL}" style="color: #2b7058; font-weight: 600;">Tracker (spreadsheet)</a></li>
        </ul>
        <p style="margin-top: 20px; color: #2d3e37;">If a link asks you to request access, reply to this email and we will fix sharing.</p>
        <p style="margin-top: 24px; font-size: 13px; color: #849690; border-top: 1px solid #e1e7e4; padding-top: 12px;">
          Sent from realtor-go.com/free-resources. Interest: ${escapeHtml(roleLabel)}${phone ? `. Phone: ${escapeHtml(phone)}` : ""}.
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Realtor-Go Tracker and Follow-Up Kit",
      html,
    });

    if (error) {
      console.error("[Resources Resend Error]:", error);
      return NextResponse.json(
        { error: "We could not send the email. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected server error";
    console.error("[Resources API Exception]:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
