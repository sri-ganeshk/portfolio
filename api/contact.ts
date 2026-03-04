import type { VercelRequest, VercelResponse } from '@vercel/node';
import emailjs from '@emailjs/nodejs';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { name, email, message } = req.body as { name: string; email: string; message: string };

  if (!name || !email || !message) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  const now = new Date();
  const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);

  const templateParams = {
    from_name: name,
    from_email: email,
    message,
    to_email: process.env.CONTACT_EMAIL,
    date_time: formattedDate,
  };

  try {
    const response = await emailjs.send(
      process.env.SERVICE_ID!,
      process.env.TEMPLATE_ID!,
      templateParams,
      {
        publicKey: process.env.PUBLIC_KEY!,
        privateKey: process.env.PRIVATE_KEY!,
      }
    );
    res.status(200).json({ message: 'Email sent successfully!', response });
  } catch (error) {
    console.error('EmailJS Error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
