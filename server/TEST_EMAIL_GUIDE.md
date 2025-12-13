# Test Email Sending - Quick Guide

## 🚀 Method 1: Using Test Script (Easiest)

### Step 1: Make sure server is NOT running
```bash
# If server is running, stop it (Ctrl+C)
```

### Step 2: Run test script
```bash
cd server
npm run test-email
```

**Expected Output:**
```
🧪 Testing email service...

Email User: your-email@gmail.com
Recipient: recipient@email.com
SMTP Host: smtp.gmail.com

1. Verifying SMTP connection...
✅ SMTP connection verified!

2. Sending test email...
✅ Test email sent successfully!

📧 Email Details:
   From: "Star Universal Test" <your-email@gmail.com>
   To: recipient@email.com
   Subject: 🧪 Test Email from Star Universal Server
   Message ID: <...>

📬 Check your inbox: recipient@email.com
   (Also check spam folder if not in inbox)
```

---

## 🧪 Method 2: Test via API Endpoint

### Step 1: Start Server
```bash
cd server
npm start
```

You should see:
```
✅ Server is ready to send emails
```

### Step 2: Test Event Form Endpoint

**Using curl:**
```bash
curl -X POST http://localhost:4000/api/contact/event \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "eventType": "Wedding",
    "eventDate": "2024-12-25",
    "guestCount": "100",
    "budget": "₹5L",
    "venue": "Outdoor",
    "message": "This is a test message to verify email service"
  }'
```

**Expected Response:**
```json
{"message": "Email sent successfully"}
```

### Step 3: Check Email Inbox

Check: `mpiyush243@gmail.com` (or your RECIPIENT_EMAIL)

---

## 🧪 Method 3: Test from Frontend

### Step 1: Start Backend
```bash
cd server
npm start
```

### Step 2: Start Frontend
```bash
# In project root
npm run dev
```

### Step 3: Test Contact Form
1. Open: `http://localhost:3000/contact-event`
2. Fill out the form with test data
3. Click "Submit"
4. Check your email inbox!

---

## ✅ Success Indicators

### Test Script Success:
- ✅ See "SMTP connection verified!"
- ✅ See "Test email sent successfully!"
- ✅ Email received in inbox

### API Test Success:
- ✅ Server returns: `{"message": "Email sent successfully"}`
- ✅ Status code: 200
- ✅ Email received in inbox

### Frontend Test Success:
- ✅ Form shows success message
- ✅ Email received in inbox

---

## 🐛 Troubleshooting

### ❌ "SMTP verification failed"
**Problem:** Gmail credentials incorrect
**Fix:**
1. Check `.env` file
2. Verify App Password is correct
3. Make sure 2-Step Verification is enabled
4. Generate new App Password if needed

### ❌ "Error sending email"
**Problem:** Email sending failed
**Fix:**
1. Check server logs for specific error
2. Verify RECIPIENT_EMAIL is correct
3. Check spam folder
4. Verify SMTP settings

### ❌ Email not received
**Check:**
1. Spam/junk folder
2. RECIPIENT_EMAIL is correct
3. Email provider isn't blocking
4. Wait a few seconds (can take 10-30 seconds)

---

## 📋 Quick Test Checklist

- [ ] `.env` file has correct credentials
- [ ] Server can start without SMTP errors
- [ ] See "Server is ready to send emails" message
- [ ] Run test script: `npm run test-email`
- [ ] Check email inbox
- [ ] Check spam folder
- [ ] Email received successfully

---

## 🎯 Recommended Test Flow

1. **First:** Run test script (`npm run test-email`)
   - Quickest way to verify email works
   - Doesn't require server to be running

2. **Second:** Test via API endpoint
   - Verifies full server functionality
   - Tests actual contact form endpoint

3. **Third:** Test from frontend
   - End-to-end test
   - Verifies full user flow

---

## 💡 Pro Tips

1. **Test script is fastest:**
   - No need to start server
   - Direct email test
   - Quick feedback

2. **Check spam folder:**
   - Gmail sometimes filters test emails
   - Check spam/junk folder

3. **Test all three forms:**
   - Event form
   - Foundation form
   - Travel form

4. **Monitor server logs:**
   - Watch for errors
   - Check email sending status

---

## 🚀 Quick Commands

```bash
# Test email (easiest)
cd server
npm run test-email

# Test via API (server must be running)
curl -X POST http://localhost:4000/api/contact/event \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"1234567890","eventType":"Wedding","eventDate":"2024-12-25","message":"Test"}'

# Test health endpoint
curl http://localhost:4000/api/health
```

---

**Ready to test? Run `npm run test-email` in the server folder!** 🎉

