// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
alert("check")
    await transporter.sendMail({
      from: email,
      to: 'muthuradhakrish@gmail.com', // your fixed receiver email
      subject: `New Contact from ${name}`,
      text: message,
    });
alert("success")
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
