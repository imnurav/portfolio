export const generateEmailTemplate = (
  name: string,
  email: string,
  userMessage: string,
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

export const generateAutoReplyTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Thank You for Contacting Me</title>
</head>
<body style="margin:0;padding:0;background:#f2f4f6;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
  
<tr>
<td style="background:#0d6efd;padding:20px;color:#ffffff;">
<h2 style="margin:0;">Thank You for Reaching Out!</h2>
</td>
</tr>

<tr>
<td style="padding:30px;color:#333;font-size:14px;line-height:1.6;">
  
<p>Hello <b>${name}</b>,</p>

<p>
Thank you for contacting me through my portfolio website.
I have received your message and will review it shortly.
</p>

<p>
If your inquiry requires a response, I will get back to you
as soon as possible.
</p>

<p>
Best regards,<br/>
<b>Varun Kumar</b><br/>
Portfolio Owner
</p>

</td>
</tr>

<tr>
<td style="background:#f8f9fa;padding:15px;text-align:center;font-size:12px;color:#777;">
This is an automated response confirming that your message was received.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
