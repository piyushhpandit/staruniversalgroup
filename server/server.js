import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Initialize Resend (works with cloud deployments like Render)
const resend = new Resend(process.env.RESEND_API_KEY);

// Verify Resend configuration
if (process.env.RESEND_API_KEY) {
  console.log('✅ Resend email service configured');
} else {
  console.warn('⚠️ RESEND_API_KEY not set - email sending will fail');
}

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          table { width: 100%; border-collapse: collapse; background: white; }
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

// Helper function to format plain text email
const formatEmailText = (data, type) => {
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

  const textContent = fields[type].map(field => `${field.label}: ${field.value}`).join('\n');

  return `${typeLabels[type]}\n\nNew inquiry from Star Universal website\n\n${textContent}\n\nSubmitted at: ${new Date().toLocaleString()}\n\nThis email was sent from the Star Universal contact form.`;
};

// Event contact form endpoint
app.post('/api/contact/event', async (req, res) => {
  const requestId = `EVENT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();
  
  console.log(`[${timestamp}] [${requestId}] 📧 Event contact form received:`, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    eventType: req.body.eventType,
    eventDate: req.body.eventDate,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.get('user-agent')
  });

  try {
    const { name, email, phone, eventType, eventDate, guestCount, budget, venue, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !eventType || !eventDate) {
      console.error(`[${timestamp}] [${requestId}] ❌ Validation failed - missing required fields:`, {
        missing: {
          name: !name,
          email: !email,
          phone: !phone,
          eventType: !eventType,
          eventDate: !eventDate
        }
      });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log(`[${timestamp}] [${requestId}] ✅ Validation passed, preparing email...`);

    console.log(`[${timestamp}] [${requestId}] 📤 Sending email via Resend...`);
    
    // Check if RECIPIENT_EMAIL is set
    if (!process.env.RECIPIENT_EMAIL) {
      throw new Error('RECIPIENT_EMAIL environment variable is not set');
    }
    
    // Send email using Resend (works with cloud deployments like Render)
    // Note: 'to' must be an array according to Resend API
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Star Universal <onboarding@resend.dev>',
      to: [process.env.RECIPIENT_EMAIL], // Must be an array
      replyTo: email,
      subject: `New Event Inquiry from ${name}`,
      html: formatEmailHTML(req.body, 'event'),
      text: formatEmailText(req.body, 'event'),
    });
    
    // Log full response for debugging
    console.log(`[${timestamp}] [${requestId}] 📧 Resend API Response:`, JSON.stringify(emailResult, null, 2));
    
    // Check for errors in response
    if (emailResult.error) {
      console.error(`[${timestamp}] [${requestId}] ❌ Resend API Error:`, emailResult.error);
      throw new Error(`Resend API Error: ${JSON.stringify(emailResult.error)}`);
    }
    
    // Resend returns { data: { id: '...' } } on success
    if (!emailResult.data || !emailResult.data.id) {
      console.error(`[${timestamp}] [${requestId}] ❌ Unexpected response structure:`, emailResult);
      throw new Error('Unexpected response from Resend API');
    }
    
    console.log(`[${timestamp}] [${requestId}] ✅ Email sent successfully:`, {
      emailId: emailResult.data.id,
      recipient: process.env.RECIPIENT_EMAIL,
      subject: `New Event Inquiry from ${name}`,
      from: process.env.FROM_EMAIL || 'Star Universal <onboarding@resend.dev>'
    });
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    const errorTimestamp = new Date().toISOString();
    console.error(`[${errorTimestamp}] [${requestId}] ❌ ERROR - Event contact form failed:`, {
      errorType: error.constructor.name,
      errorMessage: error.message,
      errorCode: error.code,
      stack: error.stack,
      requestData: {
        name: req.body.name,
        email: req.body.email,
        eventType: req.body.eventType
      },
      environment: {
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasRecipientEmail: !!process.env.RECIPIENT_EMAIL,
        nodeEnv: process.env.NODE_ENV
      }
    });
    
    res.status(500).json({ 
      error: 'Failed to send email'
    });
  }
});

// Foundation contact form endpoint
app.post('/api/contact/foundation', async (req, res) => {
  const requestId = `FOUNDATION-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();
  
  console.log(`[${timestamp}] [${requestId}] 📧 Foundation contact form received:`, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    inquiryType: req.body.inquiryType,
    organization: req.body.organization,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.get('user-agent')
  });

  try {
    const { name, email, phone, organization, inquiryType, donationAmount, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !inquiryType || !message) {
      console.error(`[${timestamp}] [${requestId}] ❌ Validation failed - missing required fields:`, {
        missing: {
          name: !name,
          email: !email,
          phone: !phone,
          inquiryType: !inquiryType,
          message: !message
        }
      });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log(`[${timestamp}] [${requestId}] ✅ Validation passed, preparing email...`);
    console.log(`[${timestamp}] [${requestId}] 📤 Sending email via Resend...`);
    
    // Check if RECIPIENT_EMAIL is set
    if (!process.env.RECIPIENT_EMAIL) {
      throw new Error('RECIPIENT_EMAIL environment variable is not set');
    }
    
    // Send email using Resend (works with cloud deployments like Render)
    // Note: 'to' must be an array according to Resend API
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Star Universal <onboarding@resend.dev>',
      to: [process.env.RECIPIENT_EMAIL], // Must be an array
      replyTo: email,
      subject: `New Foundation Inquiry from ${name}`,
      html: formatEmailHTML(req.body, 'foundation'),
      text: formatEmailText(req.body, 'foundation'),
    });
    
    // Log full response for debugging
    console.log(`[${timestamp}] [${requestId}] 📧 Resend API Response:`, JSON.stringify(emailResult, null, 2));
    
    // Check for errors in response
    if (emailResult.error) {
      console.error(`[${timestamp}] [${requestId}] ❌ Resend API Error:`, emailResult.error);
      throw new Error(`Resend API Error: ${JSON.stringify(emailResult.error)}`);
    }
    
    // Resend returns { data: { id: '...' } } on success
    if (!emailResult.data || !emailResult.data.id) {
      console.error(`[${timestamp}] [${requestId}] ❌ Unexpected response structure:`, emailResult);
      throw new Error('Unexpected response from Resend API');
    }
    
    console.log(`[${timestamp}] [${requestId}] ✅ Email sent successfully:`, {
      emailId: emailResult.data.id,
      recipient: process.env.RECIPIENT_EMAIL,
      subject: `New Foundation Inquiry from ${name}`,
      from: process.env.FROM_EMAIL || 'Star Universal <onboarding@resend.dev>'
    });
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    const errorTimestamp = new Date().toISOString();
    console.error(`[${errorTimestamp}] [${requestId}] ❌ ERROR - Foundation contact form failed:`, {
      errorType: error.constructor.name,
      errorMessage: error.message,
      errorCode: error.code,
      stack: error.stack,
      requestData: {
        name: req.body.name,
        email: req.body.email,
        inquiryType: req.body.inquiryType
      },
      environment: {
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasRecipientEmail: !!process.env.RECIPIENT_EMAIL,
        nodeEnv: process.env.NODE_ENV
      }
    });
    
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Travel contact form endpoint
app.post('/api/contact/travel', async (req, res) => {
  const requestId = `TRAVEL-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();
  
  console.log(`[${timestamp}] [${requestId}] 📧 Travel contact form received:`, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    tourType: req.body.tourType,
    destination: req.body.destination,
    travelDate: req.body.travelDate,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.get('user-agent')
  });

  try {
    const { name, email, phone, tourType, destination, travelDate, travelers, budget, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !tourType || !destination || !travelDate) {
      console.error(`[${timestamp}] [${requestId}] ❌ Validation failed - missing required fields:`, {
        missing: {
          name: !name,
          email: !email,
          phone: !phone,
          tourType: !tourType,
          destination: !destination,
          travelDate: !travelDate
        }
      });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log(`[${timestamp}] [${requestId}] ✅ Validation passed, preparing email...`);
    console.log(`[${timestamp}] [${requestId}] 📤 Sending email via Resend...`);
    
    // Check if RECIPIENT_EMAIL is set
    if (!process.env.RECIPIENT_EMAIL) {
      throw new Error('RECIPIENT_EMAIL environment variable is not set');
    }
    
    // Send email using Resend (works with cloud deployments like Render)
    // Note: 'to' must be an array according to Resend API
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Star Universal <onboarding@resend.dev>',
      to: [process.env.RECIPIENT_EMAIL], // Must be an array
      replyTo: email,
      subject: `New Travel Inquiry from ${name}`,
      html: formatEmailHTML(req.body, 'travel'),
      text: formatEmailText(req.body, 'travel'),
    });
    
    // Log full response for debugging
    console.log(`[${timestamp}] [${requestId}] 📧 Resend API Response:`, JSON.stringify(emailResult, null, 2));
    
    // Check for errors in response
    if (emailResult.error) {
      console.error(`[${timestamp}] [${requestId}] ❌ Resend API Error:`, emailResult.error);
      throw new Error(`Resend API Error: ${JSON.stringify(emailResult.error)}`);
    }
    
    // Resend returns { data: { id: '...' } } on success
    if (!emailResult.data || !emailResult.data.id) {
      console.error(`[${timestamp}] [${requestId}] ❌ Unexpected response structure:`, emailResult);
      throw new Error('Unexpected response from Resend API');
    }
    
    console.log(`[${timestamp}] [${requestId}] ✅ Email sent successfully:`, {
      emailId: emailResult.data.id,
      recipient: process.env.RECIPIENT_EMAIL,
      subject: `New Travel Inquiry from ${name}`,
      from: process.env.FROM_EMAIL || 'Star Universal <onboarding@resend.dev>'
    });
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    const errorTimestamp = new Date().toISOString();
    console.error(`[${errorTimestamp}] [${requestId}] ❌ ERROR - Travel contact form failed:`, {
      errorType: error.constructor.name,
      errorMessage: error.message,
      errorCode: error.code,
      stack: error.stack,
      requestData: {
        name: req.body.name,
        email: req.body.email,
        tourType: req.body.tourType,
        destination: req.body.destination
      },
      environment: {
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasRecipientEmail: !!process.env.RECIPIENT_EMAIL,
        nodeEnv: process.env.NODE_ENV
      }
    });
    
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Root endpoint - Show server status
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Star Universal API Server</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 20px;
        }
        .container {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .status {
          display: inline-block;
          background: #4ade80;
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          margin: 20px 0;
          box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
        }
        .info {
          margin-top: 30px;
          line-height: 1.8;
          opacity: 0.9;
        }
        .endpoints {
          margin-top: 30px;
          text-align: left;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
        }
        .endpoints h3 {
          margin-bottom: 15px;
          text-align: center;
        }
        .endpoint {
          margin: 10px 0;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 5px;
          font-family: 'Courier New', monospace;
        }
        .emoji {
          font-size: 3rem;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="emoji">🚀</div>
        <h1>Star Universal API Server</h1>
        <div class="status">✅ Server is Running</div>
        <div class="info">
          <p><strong>Status:</strong> Online and Ready</p>
          <p><strong>Port:</strong> ${PORT}</p>
          <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'production'}</p>
        </div>
        <div class="endpoints">
          <h3>Available Endpoints</h3>
          <div class="endpoint">GET /api/health - Health check</div>
          <div class="endpoint">POST /api/contact/event - Event contact form</div>
          <div class="endpoint">POST /api/contact/foundation - Foundation contact form</div>
          <div class="endpoint">POST /api/contact/travel - Travel contact form</div>
        </div>
        <div class="info" style="margin-top: 30px; font-size: 0.9rem; opacity: 0.7;">
          <p>Server deployed</p>
          <p>Last updated: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'production'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service ready`);
  console.log(`🌐 Server URL: http://localhost:${PORT}`);
});

