# Testing Email Service Locally

## 🚀 Quick Setup

### Step 1: Create .env File

In the `server/` folder, create a `.env` file:

```bash
cd server
nano .env
```

Or create it manually with these contents:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
RECIPIENT_EMAIL=your-email@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
PORT=4000
```

**Important:** 
- Use your Gmail App Password (not regular password)
- Get it from: https://myaccount.google.com/apppasswords

### Step 2: Install Dependencies

```bash
cd server
npm install
```

### Step 3: Start Server

```bash
npm start
```

You should see:
```
🚀 Server running on port 4000
📧 Email service ready
🌐 Server URL: http://localhost:4000
✅ Server is ready to send emails
```

---

## 🧪 Test Methods

### Method 1: Test with Browser/Postman

#### Test Health Endpoint
Open browser:
```
http://localhost:4000/api/health
```

Should return:
```json
{
  "status": "ok",
  "message": "Server is running",
  "timestamp": "...",
  "uptime": 123.45,
  "environment": "production"
}
```

#### Test Root Page
Open browser:
```
http://localhost:4000/
```

Should show the "Server is Running" status page.

#### Test Contact Form Endpoint (Event)

**Using Browser (GET won't work, use Postman or curl):**

**Using curl:**
```bash
curl -X POST http://localhost:4000/api/contact/event \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "eventType": "Wedding",
    "eventDate": "2024-12-25",
    "guestCount": "100",
    "budget": "₹5L",
    "venue": "Outdoor",
    "message": "This is a test message"
  }'
```

**Using Postman:**
1. Method: POST
2. URL: `http://localhost:4000/api/contact/event`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "1234567890",
  "eventType": "Wedding",
  "eventDate": "2024-12-25",
  "guestCount": "100",
  "budget": "₹5L",
  "venue": "Outdoor",
  "message": "This is a test message"
}
```

### Method 2: Test from Frontend

#### Step 1: Start Backend
```bash
cd server
npm start
```

#### Step 2: Start Frontend
```bash
# In project root
npm run dev
```

#### Step 3: Test Contact Form
1. Open: `http://localhost:3000/contact-event`
2. Fill out the form
3. Submit
4. Check your email inbox!

---

## 📧 Test All Three Forms

### Event Form
```bash
curl -X POST http://localhost:4000/api/contact/event \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "eventType": "Wedding",
    "eventDate": "2024-12-25",
    "guestCount": "150",
    "budget": "₹10L",
    "venue": "Indoor",
    "message": "Test event inquiry"
  }'
```

### Foundation Form
```bash
curl -X POST http://localhost:4000/api/contact/foundation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "9876543210",
    "organization": "Test Org",
    "inquiryType": "donation",
    "donationAmount": "₹5000",
    "message": "Test foundation inquiry"
  }'
```

### Travel Form
```bash
curl -X POST http://localhost:4000/api/contact/travel \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bob Wilson",
    "email": "bob@example.com",
    "phone": "9876543210",
    "tourType": "Nepal Tour",
    "destination": "Nepal",
    "travelDate": "2024-12-20",
    "travelers": "2",
    "budget": "₹50K",
    "message": "Test travel inquiry"
  }'
```

---

## ✅ Success Indicators

### Server Started Successfully
- ✅ See: `🚀 Server running on port 4000`
- ✅ See: `✅ Server is ready to send emails`
- ❌ NO: `SMTP configuration error`

### Email Sent Successfully
- ✅ Server returns: `{"message": "Email sent successfully"}`
- ✅ Check your email inbox (RECIPIENT_EMAIL)
- ✅ Email should have all form data formatted nicely

### Common Issues

#### ❌ SMTP Error
```
SMTP configuration error: Invalid login
```
**Fix:**
- Check EMAIL_PASSWORD is App Password (not regular password)
- Verify EMAIL_USER is correct
- Make sure 2-Step Verification is enabled

#### ❌ Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::4000
```
**Fix:**
```bash
# Find and kill process
lsof -ti:4000 | xargs kill -9

# Or change PORT in .env
PORT=4001
```

#### ❌ CORS Error (from frontend)
**Fix:**
- Server already has CORS enabled
- Make sure backend is running on port 4000
- Check frontend API URL is `http://localhost:4000/api`

---

## 🔍 Debugging

### Check Server Logs
Watch the terminal where server is running for:
- ✅ `✅ Server is ready to send emails` = Good!
- ❌ `SMTP configuration error` = Check credentials
- ❌ Any other errors = Check the error message

### Test SMTP Connection
The server automatically tests SMTP on startup. If you see:
- ✅ `✅ Server is ready to send emails` = SMTP is working
- ❌ `SMTP configuration error` = Fix credentials

### Check Email Inbox
- Check spam folder
- Verify RECIPIENT_EMAIL is correct
- Check email was sent (should arrive within seconds)

---

## 📋 Quick Test Checklist

- [ ] `.env` file created in `server/` folder
- [ ] All environment variables set correctly
- [ ] Gmail App Password generated and added
- [ ] Dependencies installed (`npm install`)
- [ ] Server starts without errors
- [ ] See "Server is ready to send emails" message
- [ ] Health endpoint works: `http://localhost:4000/api/health`
- [ ] Root page works: `http://localhost:4000/`
- [ ] Test contact form submission
- [ ] Email received in inbox

---

## 🎯 Quick Test Commands

```bash
# 1. Go to server folder
cd server

# 2. Install dependencies (if not done)
npm install

# 3. Start server
npm start

# 4. In another terminal, test health
curl http://localhost:4000/api/health

# 5. Test event form
curl -X POST http://localhost:4000/api/contact/event \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"1234567890","eventType":"Wedding","eventDate":"2024-12-25","message":"Test"}'
```

---

## 💡 Pro Tips

1. **Keep server running:**
   - Leave terminal open
   - Server auto-restarts on code changes (if using `npm run dev`)

2. **Test incrementally:**
   - First: Test health endpoint
   - Second: Test SMTP connection (check logs)
   - Third: Test actual email sending

3. **Use real email:**
   - Test with your actual email
   - Check spam folder
   - Verify email formatting

4. **Check logs:**
   - Watch terminal for errors
   - All errors are logged to console

---

## 🚀 Ready to Test?

1. Create `.env` file with your email credentials
2. Run `npm install` in server folder
3. Run `npm start`
4. Test endpoints or use frontend
5. Check your email!

**Good luck!** 🎉

