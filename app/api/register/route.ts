import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, reason } = await request.json()

    // Validate the input
    if (!name || !email || !reason) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Configure the email transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like SendGrid or Resend via SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'hello.hynox@gmail.com', // Receiver address
      subject: `New Beta Registration from ${name}`,
      text: `You have a new beta registration request!

Name: ${name}
Email: ${email}

Reason for joining:
${reason}`,
      html: `
        <h2>New Beta Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason for joining:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
          ${reason.replace(/\n/g, '<br>')}
        </blockquote>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
