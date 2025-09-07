// api/send-mail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, phone, service, company, message } = req.body;

  try {
    // transporter using Gmail (you can use SMTP too)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail address
        pass: process.env.MAIL_PASS, // app password (not regular Gmail password)
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "your-email@example.com", // where you want to receive
      subject: `New Contact Form: ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail send error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}
