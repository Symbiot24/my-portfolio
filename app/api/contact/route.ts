import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: `${name} <${process.env.FROM_EMAIL}>`,
      to: process.env.CONTACT_FORM_RECIPIENT_EMAIL!,
      subject: `${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}