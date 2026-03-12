// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import {
//   generateEmailTemplate,
//   generateAutoReplyTemplate,
// } from "@/app/utils/templates";

// // Define types
// interface EmailPayload {
//   name: string;
//   email: string;
//   message: string;
// }

// // interface TelegramResponse {
// //   ok: boolean;
// //   result?: any;
// //   error_code?: number;
// //   description?: string;
// // }

// // Create and configure Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_ADDRESS,
//     pass: process.env.GMAIL_PASSKEY,
//   },
// });

// // // Helper function to send a message via Telegram
// // async function sendTelegramMessage(
// //   token: string,
// //   chat_id: string,
// //   message: string
// // ): Promise<boolean> {
// //   const url = `https://api.telegram.org/bot${token}/sendMessage`;
// //   try {
// //     const res = await axios.post<TelegramResponse>(url, {
// //       text: message,
// //       chat_id,
// //     });
// //     return res.data.ok;
// //   } catch (error: any) {
// //     console.error(
// //       "Error sending Telegram message:",
// //       error.response?.data || error.message
// //     );
// //     return false;
// //   }
// // }

// // Helper function to send an email via Nodemailer
// async function sendEmail(
//   payload: EmailPayload,
//   message: string,
// ): Promise<boolean> {
//   const { name, email, message: userMessage } = payload;

//   const mailOptions = {
//     from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
//     to: process.env.EMAIL_ADDRESS,
//     subject: `New Message From ${name}`,
//     text: message,
//     html: generateEmailTemplate(name, email, userMessage),
//     replyTo: email,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (error: any) {
//     console.error("Error while sending email:", error.message);
//     return false;
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const payload: EmailPayload = await request.json();
//     const { name, email, message: userMessage } = payload;
//     // const token = process.env.TELEGRAM_BOT_TOKEN;
//     // const chat_id = process.env.TELEGRAM_CHAT_ID;

//     // // Validate environment variables
//     // if (!token || !chat_id) {
//     //   return NextResponse.json(
//     //     {
//     //       success: false,
//     //       message: "Telegram token or chat ID is missing.",
//     //     },
//     //     { status: 400 }
//     //   );
//     // }

//     const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

//     // Send Telegram message
//     // const telegramSuccess = await sendTelegramMessage(token, chat_id, message);

//     // Send email
//     const emailSuccess = await sendEmail(payload, message);

//     if (/* telegramSuccess && */ emailSuccess) {
//       return NextResponse.json(
//         {
//           success: true,
//           message: "Message and email sent successfully!",
//         },
//         { status: 200 },
//       );
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to send email.",
//       },
//       { status: 500 },
//     );
//   } catch (error: any) {
//     console.error("API Error:", error.message);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Server error occurred.",
//       },
//       { status: 500 },
//     );
//   }
// }
// async function sendAutoReply(name: string, email: string): Promise<boolean> {
//   const mailOptions = {
//     from: `"Your Portfolio" <${process.env.EMAIL_ADDRESS}>`,
//     to: email,
//     subject: "Thank you for contacting me",
//     html: generateAutoReplyTemplate(name),
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (error: any) {
//     console.error("Auto reply error:", error.message);
//     return false;
//   }
// }
