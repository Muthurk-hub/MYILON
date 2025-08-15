import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { name, email, company, subject, message } = await request.json();

    // Check if environment variables are set
    let emailUser, emailPass;
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables not set, using hardcoded values for testing');
      // For testing purposes, use hardcoded values
      emailUser = 'muthuradhakrish@gmail.com';
      emailPass = 'vhqq lkfj jaqt ivko';
    } else {
      console.log('Using environment variables for email configuration');
      emailUser = process.env.EMAIL_USER;
      emailPass = process.env.EMAIL_PASS;
    }

    console.log('Creating transporter with:', {
      user: emailUser,
      pass: emailPass ? '***' : 'NOT SET'
    });

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    console.log('Sending email...');
    await transporter.sendMail({
      from: emailUser, // Use the configured email as sender
      to: 'muthuradhakrish@gmail.com',
      subject: `New Contact from ${name} - ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    console.log('Email sent successfully');
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
} 