# Contact Forms Setup Guide

## ✅ What's Been Created

### 1. Three Contact Forms
- **ContactEvent** (`/contact-event`) - For event planning inquiries
- **ContactFoundation** (`/contact-foundation`) - For foundation inquiries
- **ContactTravel** (`/contact-travel`) - For travel package inquiries

### 2. Features Implemented

#### Form Validation
- ✅ Email format validation
- ✅ Phone number validation (min 10 digits)
- ✅ Required field validation
- ✅ Date validation (no past dates)
- ✅ Number range validation (guest count, travelers)
- ✅ Real-time error messages
- ✅ Visual error indicators (red borders)

#### User Experience
- ✅ Responsive design (mobile-friendly)
- ✅ Loading states with spinner
- ✅ Success/error messages
- ✅ Auto-clear errors on input
- ✅ Form reset after successful submission
- ✅ Smooth animations

#### Fields by Form

**Event Form:**
- Name, Email, Phone (required)
- Event Type (dropdown)
- Event Date (date picker)
- Guest Count, Budget, Venue (optional)
- Additional Details (textarea)

**Foundation Form:**
- Name, Email, Phone (required)
- Organization (optional)
- Inquiry Type (dropdown)
- Donation Amount (optional)
- Message (required, min 10 chars)

**Travel Form:**
- Name, Email, Phone (required)
- Tour Type (dropdown)
- Destination (required)
- Travel Date (date picker)
- Number of Travelers, Budget (optional)
- Additional Requirements (textarea)

## 🚀 Backend Setup

### Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 2: Configure Email

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

3. **For Gmail users:** You need to create an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Enable 2-Step Verification first
   - Generate app password for "Mail"
   - Use the 16-character password in `EMAIL_PASSWORD`

### Step 3: Start Backend Server

```bash
npm start
# or for development with auto-reload:
npm run dev
```

Server runs on `http://localhost:4000`

### Step 4: Update Frontend API URL

In `src/api/api.js`, update the base URL:

```javascript
baseURL: "http://localhost:4000/api"  // For development
// or
baseURL: "https://your-deployed-backend.com/api"  // For production
```

## 📧 Email Configuration

### Gmail (Recommended for Testing)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Yahoo

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### Custom SMTP

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASSWORD=your-password
```

## 🌐 Deployment

### Backend Deployment Options

1. **Railway** (Easiest)
   - Connect GitHub repo
   - Add environment variables
   - Auto-deploys

2. **Render**
   - Create Web Service
   - Set build: `cd server && npm install`
   - Set start: `cd server && npm start`

3. **Heroku**
   - `heroku create your-app`
   - `heroku config:set EMAIL_USER=...`
   - `git push heroku main`

4. **VPS/Server**
   - Install Node.js
   - Use PM2: `pm2 start server.js`

### Frontend Deployment

After deploying backend, update API URL in frontend:

1. Create `.env` in project root:
   ```env
   VITE_API_BASE_URL=https://your-backend-url.com/api
   ```

2. Update `src/api/api.js`:
   ```javascript
   baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api"
   ```

3. Rebuild and deploy frontend:
   ```bash
   npm run build
   npm run deploy
   ```

## 🧪 Testing

1. Start backend server: `cd server && npm start`
2. Start frontend: `npm run dev`
3. Visit: `http://localhost:3000/contact-event`
4. Fill form and submit
5. Check your email inbox!

## 📝 Routes Added

- `/contact-event` - Event contact form
- `/contact-foundation` - Foundation contact form
- `/contact-travel` - Travel contact form

## 🔒 Security Notes

- Never commit `.env` files
- Use environment variables for sensitive data
- Consider adding rate limiting for production
- Use HTTPS in production
- Validate all inputs on backend (already done)

## 🐛 Troubleshooting

### Emails not sending?
1. Check SMTP credentials
2. For Gmail, verify App Password is correct
3. Check server logs for errors
4. Verify firewall isn't blocking port 587

### CORS errors?
- Backend has CORS enabled
- Make sure backend URL is correct in frontend

### Form validation not working?
- Check browser console for errors
- Verify all required fields are filled
- Check validation functions in form components

## 📞 Support

If you encounter issues:
1. Check server logs
2. Verify email credentials
3. Test SMTP connection
4. Check network/firewall settings

