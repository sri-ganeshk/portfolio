/* global process */
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const now = new Date();
  const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);

  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.PUBLIC_KEY,
    template_params: {
      from_name: name,
      from_email: email,
      message,
      to_email: process.env.CONTACT_EMAIL || 'ganeshknsml@gmail.com', // fallback
      date_time: formattedDate,
      user_login: 'sri-ganeshk'
    }
  };

  try {
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('EmailJS Error:', error.response?.data || error.message);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
