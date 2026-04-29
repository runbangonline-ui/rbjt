import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ||
    "postgresql://rbjtglobal_admin:zzb12580@localhost:5432/rbjtglobal_prod",
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, company, subject, message, status)
       VALUES ($1, $2, $3, $4, $5, $6, 'new')
       RETURNING id`,
      [name, email, phone || null, company || null, subject, message]
    );

    // Send email notification (Gmail SMTP via nodemailer)
    try {
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.default.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD, // App password, not regular password
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
        subject: `[JBJT Global] New Contact Form: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p><small>Submitted at: ${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}</small></p>
        `,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      id: result.rows[0].id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM contacts ORDER BY created_at DESC LIMIT 50"
    );
    return NextResponse.json({ contacts: result.rows });
  } catch (error) {
    console.error("Get contacts error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
