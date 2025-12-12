# Star Universal Backend Email Server

This is the backend server for handling contact form submissions and sending emails using Nodemailer.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and add your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

### 3. Gmail Setup (If using Gmail)

For Gmail, you need to use an **App Password** instead of your regular password:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Generate a new app password for "Mail"
5. Use that 16-character password in `EMAIL_PASSWORD`

### 4. Other Email Providers

For other email providers, update the SMTP settings in `.env`:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

**Custom SMTP:**
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
```

### 5. Run the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will run on `http://localhost:4000` by default.

## API Endpoints

- `POST /api/contact/event` - Event contact form
- `POST /api/contact/foundation` - Foundation contact form
- `POST /api/contact/travel` - Travel contact form
- `GET /api/health` - Health check

## Deployment

### Option 1: Railway

1. Create account at [Railway](https://railway.app)
2. Connect your GitHub repository
3. Add environment variables in Railway dashboard
4. Deploy!

### Option 2: Render

1. Create account at [Render](https://render.com)
2. Create new Web Service
3. Connect your repository
4. Set build command: `cd server && npm install`
5. Set start command: `cd server && npm start`
6. Add environment variables
7. Deploy!

### Option 3: Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables: `heroku config:set EMAIL_USER=...`
5. Deploy: `git push heroku main`

### Option 4: VPS/Server

1. Install Node.js on your server
2. Clone repository
3. Install dependencies: `npm install`
4. Set up environment variables
5. Use PM2 to run: `pm2 start server.js --name staruniversal-api`
6. Set up reverse proxy (nginx) if needed

## Update Frontend API URL

After deploying, update the API URL in `src/api/api.js`:

```javascript
baseURL: "https://your-backend-url.com/api"
```

Or use environment variable:

```javascript
baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api"
```

And create `.env` in root:

```env
VITE_API_BASE_URL=https://your-backend-url.com/api
```

## Troubleshooting

### Email not sending?

1. Check SMTP credentials are correct
2. For Gmail, make sure you're using App Password
3. Check firewall/security settings
4. Verify SMTP host and port are correct
5. Check server logs for error messages

### CORS errors?

The server already has CORS enabled. If you still get errors, make sure:
- Frontend URL is allowed in CORS settings
- Backend is running and accessible

## Security Notes

- Never commit `.env` file to git
- Use environment variables for sensitive data
- Consider rate limiting for production
- Use HTTPS in production

