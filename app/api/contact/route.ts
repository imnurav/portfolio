// import axios from "axios";  // Uncommented since it's only used for Telegram
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define types
interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

// interface TelegramResponse {
//   ok: boolean;
//   result?: any;
//   error_code?: number;
//   description?: string;
// }

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// // Helper function to send a message via Telegram
// async function sendTelegramMessage(
//   token: string,
//   chat_id: string,
//   message: string
// ): Promise<boolean> {
//   const url = `https://api.telegram.org/bot${token}/sendMessage`;
//   try {
//     const res = await axios.post<TelegramResponse>(url, {
//       text: message,
//       chat_id,
//     });
//     return res.data.ok;
//   } catch (error: any) {
//     console.error(
//       "Error sending Telegram message:",
//       error.response?.data || error.message
//     );
//     return false;
//   }
// }

// HTML email template
const generateEmailTemplate = (
  name: string,
  email: string,
  userMessage: string
) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Contact Message</title>
</head>
<body style="margin:0; padding:0; background-color:#f2f4f6; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f4f6; padding:30px 0;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#0d6efd; padding:20px 30px;">
              <h2 style="margin:0; color:#ffffff; font-size:20px;">
                📩 New Contact Message
              </h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333333; font-size:14px; line-height:1.6;">
              
              <p style="margin:0 0 15px 0;">
                You have received a new message from your website contact form.
              </p>

              <!-- Details Table -->
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse; margin-bottom:20px;">
                <tr>
                  <td width="120" style="font-weight:bold; color:#555;">Name:</td>
                  <td style="color:#333;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold; color:#555;">Email:</td>
                  <td style="color:#333;">${email}</td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="background:#f8f9fa; padding:15px; border-left:4px solid #0d6efd; border-radius:4px;">
                <p style="margin:0; white-space:pre-line; color:#333;">
                  ${userMessage}
                </p>
              </div>

              <!-- CTA -->
              <p style="margin-top:25px;">
                You can reply directly to this email to respond to the sender.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8f9fa; padding:15px 30px; font-size:12px; color:#888; text-align:center;">
              This message was sent via your website contact form.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(
  payload: EmailPayload,
  message: string
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
    console.error("Error while sending email:", error.message);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload: EmailPayload = await request.json();
    const { name, email, message: userMessage } = payload;
    // const token = process.env.TELEGRAM_BOT_TOKEN;
    // const chat_id = process.env.TELEGRAM_CHAT_ID;

    // // Validate environment variables
    // if (!token || !chat_id) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Telegram token or chat ID is missing.",
    //     },
    //     { status: 400 }
    //   );
    // }

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Send Telegram message
    // const telegramSuccess = await sendTelegramMessage(token, chat_id, message);

    // Send email
    const emailSuccess = await sendEmail(payload, message);

    if (/* telegramSuccess && */ emailSuccess) {
      return NextResponse.json(
        {
          success: true,
          message: "Message and email sent successfully!",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("API Error:", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Server error occurred.",
      },
      { status: 500 }
    );
  }
}
