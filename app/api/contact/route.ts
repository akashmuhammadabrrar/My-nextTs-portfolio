import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // ✅ Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ✅ Your email
        pass: process.env.EMAIL_PASS, // ✅ Use correct password (App Password)
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // ✅ Always send from your email
      replyTo: email, // ✅ Set user's email as reply-to
      to: "madborakash48@gmail.com", // ✅ Your email (recipient)
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Message: ${message}
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
