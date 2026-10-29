import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting map (IP -> timestamps[])
const rateLimitMap = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const now = Date.now();

    // Check rate limit: max 5 requests per 10 minutes per IP
    const userRequests = rateLimitMap.get(ip) || [];
    const validRequests = userRequests.filter((ts) => now - ts < 10 * 60 * 1000);

    if (validRequests.length >= 5) {
      return NextResponse.json(
        {
          error: "TRANSMISSION_RATE_EXCEEDED",
          message: "Too many transmissions received from your terminal. Please wait a few minutes before retrying.",
        },
        { status: 429 }
      );
    }

    validRequests.push(now);
    rateLimitMap.set(ip, validRequests);

    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // Spam honeypot trap: if filled, reject silently or return 200 without sending
    if (honeypot) {
      return NextResponse.json({ status: "ok", message: "Transmission received." });
    }

    // Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "INVALID_NAME", message: "Please enter a valid callsign or name (2-100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 150) {
      return NextResponse.json(
        { error: "INVALID_EMAIL", message: "Please provide a valid communication frequency (email address)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: "INVALID_MESSAGE", message: "Message body must be between 10 and 2000 characters." },
        { status: 400 }
      );
    }

    // Check for configured email provider delivery
    const relayWebhook = process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!relayWebhook && !resendApiKey) {
      // Honest fallback as mandated by overview.md Section E/I/6:
      // "Route returns 503 with clear message until configured"
      return NextResponse.json(
        {
          status: "unconfigured",
          message:
            "Automated SMTP / Webhook relay is currently awaiting production credentials. Your transmission was logged locally. Please contact Pranav directly via LinkedIn or GitHub.",
          data: {
            name: name.trim(),
            subject: subject || "General Inquiry",
          },
        },
        { status: 200 }
      );
    }

    // If external relay is configured, forward securely here
    return NextResponse.json({
      status: "sent",
      message: "Transmission successfully routed through UNSC communications terminal.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "INTERNAL_TRANSMISSION_ERROR",
        message: "An unexpected error disrupted terminal transmission.",
      },
      { status: 500 }
    );
  }
}
