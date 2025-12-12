import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASSWORD, // Your email password or app password
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP configuration error:', error);
  } else {
    console.log('✅ Server is ready to send emails');
  }
});

// Helper function to format email HTML
const formatEmailHTML = (data, type) => {
  const typeLabels = {
    event: 'Event Planning Inquiry',
    foundation: 'Foundation Inquiry',
    travel: 'Travel Inquiry'
  };

  const fields = {
    event: [
      { label: 'Name', value: data.name },
      { label: 'Email', value: data.email },
      { label: 'Phone', value: data.phone },
      { label: 'Event Type', value: data.eventType },
      { label: 'Event Date', value: data.eventDate },
      { label: 'Guest Count', value: data.guestCount || 'Not specified' },
      { label: 'Budget', value: data.budget || 'Not specified' },
      { label: 'Venue Preference', value: data.venue || 'Not specified' },
      { label: 'Additional Details', value: data.message || 'None' },
    ],
    foundation: [
      { label: 'Name', value: data.name },
      { label: 'Email', value: data.email },
      { label: 'Phone', value: data.phone },
      { label: 'Organization', value: data.organization || 'Not specified' },
      { label: 'Inquiry Type', value: data.inquiryType },
      { label: 'Donation Amount', value: data.donationAmount || 'Not specified' },
      { label: 'Message', value: data.message },
    ],
    travel: [
      { label: 'Name', value: data.name },
      { label: 'Email', value: data.email },
      { label: 'Phone', value: data.phone },
      { label: 'Tour Type', value: data.tourType },
      { label: 'Destination', value: data.destination },
      { label: 'Travel Date', value: data.travelDate },
      { label: 'Number of Travelers', value: data.travelers || 'Not specified' },
      { label: 'Budget Range', value: data.budget || 'Not specified' },
      { label: 'Additional Requirements', value: data.message || 'None' },
    ]
  };

  const fieldRows = fields[type].map(field => `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 600; color: #333; width: 200px;">${field.label}:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">${field.value}</td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          table { width: 100%; border-collapse: collapse; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">${typeLabels[type]}</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New inquiry from Star Universal website</p>
          </div>
          <div class="content">
            <table>
              ${fieldRows}
            </table>
            <div class="footer">
              <p>This email was sent from the Star Universal contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Event contact form endpoint
app.post('/api/contact/event', async (req, res) => {
  try {
    const { name, email, phone, eventType, eventDate, guestCount, budget, venue, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !eventType || !eventDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptions = {
      from: `"Star Universal Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // Your email where you want to receive inquiries
      replyTo: email,
      subject: `New Event Inquiry from ${name}`,
      html: formatEmailHTML(req.body, 'event'),
      text: `
        New Event Inquiry
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Event Type: ${eventType}
        Event Date: ${eventDate}
        Guest Count: ${guestCount || 'Not specified'}
        Budget: ${budget || 'Not specified'}
        Venue: ${venue || 'Not specified'}
        Message: ${message || 'None'}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Foundation contact form endpoint
app.post('/api/contact/foundation', async (req, res) => {
  try {
    const { name, email, phone, organization, inquiryType, donationAmount, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !inquiryType || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptions = {
      from: `"Star Universal Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Foundation Inquiry from ${name}`,
      html: formatEmailHTML(req.body, 'foundation'),
      text: `
        New Foundation Inquiry
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Organization: ${organization || 'Not specified'}
        Inquiry Type: ${inquiryType}
        Donation Amount: ${donationAmount || 'Not specified'}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Travel contact form endpoint
app.post('/api/contact/travel', async (req, res) => {
  try {
    const { name, email, phone, tourType, destination, travelDate, travelers, budget, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !tourType || !destination || !travelDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptions = {
      from: `"Star Universal Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Travel Inquiry from ${name}`,
      html: formatEmailHTML(req.body, 'travel'),
      text: `
        New Travel Inquiry
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Tour Type: ${tourType}
        Destination: ${destination}
        Travel Date: ${travelDate}
        Travelers: ${travelers || 'Not specified'}
        Budget: ${budget || 'Not specified'}
        Message: ${message || 'None'}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service ready`);
});

