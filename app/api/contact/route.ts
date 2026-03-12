import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  generateEmailTemplate,
  generateAutoReplyTemplate,
} from "@/app/utils/templates";

interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

/* ---------------- EMAIL VALIDATION ---------------- */

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ---------------- SEND EMAIL TO YOU ---------------- */

async function sendEmail(
  payload: EmailPayload,
  message: string,
): Promise<boolean> {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error: any) {
    console.error("Email send error:", error.message);
    return false;
  }
}

/* ---------------- AUTO REPLY EMAIL ---------------- */

async function sendAutoReply(name: string, email: string) {
  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_ADDRESS}>`,
      to: email,
      subject: "Thank you for contacting me",
      html: generateAutoReplyTemplate(name),
      replyTo: process.env.EMAIL_ADDRESS,
    });
  } catch (error: any) {
    // do NOT break the API if this fails
    console.error("Auto reply failed:", error.message);
  }
}

/* ---------------- API ROUTE ---------------- */

export async function POST(request: NextRequest) {
  try {
    const payload: EmailPayload = await request.json();
    const { name, email, message } = payload;

    /* ---- Validate input ---- */

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 },
      );
    }

    const emailMessage = `
New message from ${name}

Email: ${email}

Message:
${message}
`;

    /* ---- Send email to you ---- */

    const emailSuccess = await sendEmail(payload, emailMessage);

    if (!emailSuccess) {
      return NextResponse.json(
        { success: false, message: "Failed to send message." },
        { status: 500 },
      );
    }

    /* ---- Send auto reply (non-blocking) ---- */

    sendAutoReply(name, email);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("API Error:", error.message);

    return NextResponse.json(
      { success: false, message: "Server error occurred." },
      { status: 500 },
    );
  }
}
