// Simple test script to send a test email
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log('🧪 Testing email service...\n');
console.log('Email User:', process.env.EMAIL_USER);
console.log('Recipient:', process.env.RECIPIENT_EMAIL);
console.log('SMTP Host:', process.env.SMTP_HOST);
console.log('');

// Test email
const mailOptions = {
  from: `"Star Universal Test" <${process.env.EMAIL_USER}>`,
  to: process.env.RECIPIENT_EMAIL,
  subject: '🧪 Test Email from Star Universal Server',
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .success { color: #4ade80; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>✅ Test Email Successful!</h2>
          </div>
          <div class="content">
            <p>This is a <strong>test email</strong> from your Star Universal server.</p>
            <p>If you received this email, your email service is working correctly! 🎉</p>
            <hr>
            <p><strong>Server Details:</strong></p>
            <ul>
              <li>Server: Star Universal Backend</li>
              <li>Status: Running</li>
              <li>Time: ${new Date().toLocaleString()}</li>
            </ul>
            <p class="success">✅ Email service is operational!</p>
          </div>
        </div>
      </body>
    </html>
  `,
  text: `
    Test Email Successful!
    
    This is a test email from your Star Universal server.
    If you received this email, your email service is working correctly!
    
    Server Details:
    - Server: Star Universal Backend
    - Status: Running
    - Time: ${new Date().toLocaleString()}
    
    ✅ Email service is operational!
  `
};

// Verify connection first
console.log('1. Verifying SMTP connection...');
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP verification failed:', error.message);
    process.exit(1);
  } else {
    console.log('✅ SMTP connection verified!\n');
    
    // Send test email
    console.log('2. Sending test email...');
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Error sending email:', error.message);
        process.exit(1);
      } else {
        console.log('✅ Test email sent successfully!');
        console.log('\n📧 Email Details:');
        console.log('   From:', mailOptions.from);
        console.log('   To:', mailOptions.to);
        console.log('   Subject:', mailOptions.subject);
        console.log('   Message ID:', info.messageId);
        console.log('\n📬 Check your inbox:', process.env.RECIPIENT_EMAIL);
        console.log('   (Also check spam folder if not in inbox)');
        process.exit(0);
      }
    });
  }
});


