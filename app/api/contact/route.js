import { NextResponse } from 'next/server';

/* ── Spam detection patterns ─────────────────────────── */
const SPAM_PATTERNS = [
  /\bviagra\b/i, /\bcasino\b/i, /\bloan\b/i,
  /\bclick here\b/i, /\bfree money\b/i, /\bmake money fast\b/i,
  /\bseo services\b/i, /\bcrypto\b/i, /\binvestment opportunity\b/i,
  /https?:\/\/[^\s]{30,}/i,
];

const REQUIRED_FIELDS = ['name', 'email', 'subject', 'service', 'message'];

function validatePayload(body) {
  const errors = [];

  /* honeypot */
  if (body.honeypot) return { spam: true };

  /* required */
  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || !String(body[field]).trim()) {
      errors.push(`${field} is required`);
    }
  }

  /* email format */
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('Invalid email address');
  }

  /* message length */
  if (body.message && body.message.trim().length < 20) {
    errors.push('Message too short (min 20 characters)');
  }

  /* spam content */
  const fullText = `${body.name} ${body.subject} ${body.message}`;
  if (SPAM_PATTERNS.some((p) => p.test(fullText))) {
    errors.push('Message flagged as spam');
  }

  return { errors };
}

/* ── POST handler ────────────────────────────────────── */
export async function POST(request) {
  try {
    const body = await request.json();

    const { spam, errors } = validatePayload(body);

    /* Honeypot — silently return 200 to fool bots */
    if (spam) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (errors && errors.length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 422 });
    }

    const { name, email, subject, service, message } = body;

    /* ── Send email via Nodemailer ───────────────────── */
    /*
     * To activate email sending:
     * 1. npm install nodemailer
     * 2. Add to .env.local:
     *    SMTP_HOST=smtp.gmail.com
     *    SMTP_PORT=587
     *    SMTP_USER=your@gmail.com
     *    SMTP_PASS=your-app-password   ← Gmail App Password
     *    CONTACT_TO=ahm.ansari.m@gmail.com
     *
     * Then uncomment the block below:
     */

    /*
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'ahm.ansari.m@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject} — ${service}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a56db;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:18px;">New Portfolio Contact</h2>
          </div>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-top:0;padding:28px 32px;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 0;color:#94a3b8;width:130px;">Name</td><td style="padding:8px 0;color:#0f172a;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1a56db;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#94a3b8;">Subject</td><td style="padding:8px 0;color:#0f172a;">${subject}</td></tr>
              <tr><td style="padding:8px 0;color:#94a3b8;">Service</td><td style="padding:8px 0;"><span style="background:#e8effe;color:#1a56db;padding:2px 10px;border-radius:100px;font-size:12px;font-weight:600;">${service}</span></td></tr>
            </table>
            <hr style="border:0;border-top:1px solid #e2e8f0;margin:18px 0;">
            <div style="font-size:14px;color:#475569;line-height:1.7;white-space:pre-wrap;">${message}</div>
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nSubject: ${subject}\n\n${message}`,
    });
    */

    /* ── Fallback: log to console in dev ─────────────── */
    if (process.env.NODE_ENV === 'development') {
      console.log('\n📬 New Contact Form Submission:');
      console.log(`  Name:    ${name}`);
      console.log(`  Email:   ${email}`);
      console.log(`  Service: ${service}`);
      console.log(`  Subject: ${subject}`);
      console.log(`  Message: ${message.slice(0, 100)}...`);
    }

    return NextResponse.json(
      { ok: true, message: 'Message received. I will get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { ok: false, errors: ['Server error. Please email directly at ahm.ansari.m@gmail.com'] },
      { status: 500 }
    );
  }
}

/* ── OPTIONS — CORS preflight ───────────────────────── */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
