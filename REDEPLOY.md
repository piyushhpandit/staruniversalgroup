# How to Redeploy to GitHub Pages

## 🚀 Quick Redeploy (Latest Code)

### Step 1: Make sure all changes are committed

```bash
git add .
git commit -m "Update: latest changes"
git push origin main
```

### Step 2: Build and Deploy

```bash
npm run deploy
```

That's it! This command will:
1. ✅ Automatically build your project (`npm run build`)
2. ✅ Deploy to `gh-pages` branch
3. ✅ GitHub Pages will automatically update your site

### Step 3: Wait for Deployment

- Go to your GitHub repository
- Click on "Actions" tab
- You'll see "pages build and deployment" workflow running
- Wait 1-2 minutes for it to complete
- Your site will be live at: `https://staruniversalgroup.in/`

---

## 📝 Detailed Steps

### Option 1: Using npm script (Recommended)

```bash
# 1. Make sure you're in the project root
cd /Users/piyushmishra/Documents/staruniversal

# 2. Commit any uncommitted changes
git add .
git commit -m "Update: latest changes"

# 3. Push to main branch
git push origin main

# 4. Deploy to GitHub Pages
npm run deploy
```

### Option 2: Manual Steps

```bash
# 1. Build the project
npm run build

# 2. Deploy to gh-pages branch
npx gh-pages -d dist
```

---

## 🔧 Before Redeploying

### 1. Update API URL (If you deployed backend)

If you've deployed your backend server, update the API URL:

**Option A: Using Environment Variable**

1. Create `.env` in project root:
   ```env
   VITE_API_BASE_URL=https://your-backend-url.railway.app/api
   ```

2. The code already uses this (in `src/api/api.js`)

**Option B: Direct Update**

Edit `src/api/api.js`:
```javascript
baseURL: "https://your-backend-url.railway.app/api"
```

### 2. Test Locally First

```bash
# Build and preview
npm run build
npm run preview
```

Visit `http://localhost:4173` to test before deploying.

---

## ✅ Verify Deployment

### 1. Check GitHub Actions

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Look for "pages build and deployment"
4. Should show green checkmark ✅ when done

### 2. Check Your Site

1. Visit: `https://staruniversalgroup.in/`
2. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
3. Test your contact forms
4. Check browser console for errors

### 3. Check Deployment Status

- Go to: `https://github.com/piyushhpandit/staruniversalgroup/settings/pages`
- Should show: "Last deployed by piyushhpandit [time] ago"

---

## 🐛 Troubleshooting

### Deployment fails?

1. **Check for errors:**
   ```bash
   npm run build
   ```
   Fix any build errors first

2. **Check GitHub Actions:**
   - Go to Actions tab
   - Click on failed workflow
   - Check error messages

3. **Clear cache and retry:**
   ```bash
   rm -rf dist node_modules/.vite
   npm run deploy
   ```

### Site not updating?

1. **Hard refresh browser:**
   - `Cmd + Shift + R` (Mac)
   - `Ctrl + Shift + R` (Windows)

2. **Clear browser cache:**
   - Chrome: Settings → Privacy → Clear browsing data

3. **Wait a few minutes:**
   - GitHub Pages can take 1-5 minutes to update

4. **Check gh-pages branch:**
   - Go to your repo → Branches → `gh-pages`
   - Verify latest commit is there

### Build errors?

1. **Check for TypeScript errors:**
   ```bash
   npm run build
   ```

2. **Fix linting errors:**
   ```bash
   npm run lint
   ```

3. **Check console for warnings**

---

## 📋 Deployment Checklist

Before deploying:

- [ ] All code changes committed
- [ ] No build errors (`npm run build` succeeds)
- [ ] Tested locally (`npm run preview`)
- [ ] API URL updated (if backend deployed)
- [ ] Environment variables set (if needed)

After deploying:

- [ ] Check GitHub Actions (should be green ✅)
- [ ] Visit live site
- [ ] Hard refresh to see changes
- [ ] Test contact forms
- [ ] Check browser console for errors

---

## 🔄 Quick Reference

```bash
# Full redeploy process
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy

# Just rebuild and redeploy (if code already committed)
npm run deploy
```

---

## 💡 Pro Tips

1. **Always test locally first:**
   ```bash
   npm run build && npm run preview
   ```

2. **Check deployment status:**
   - GitHub Actions shows real-time progress
   - Usually takes 1-2 minutes

3. **Use meaningful commit messages:**
   ```bash
   git commit -m "Add: contact forms with validation"
   ```

4. **Keep gh-pages branch clean:**
   - Don't manually edit gh-pages branch
   - Always use `npm run deploy`

5. **Monitor your site:**
   - Check after deployment
   - Test all features
   - Verify API connections work

---

## 🎯 Common Commands

```bash
# Build only
npm run build

# Preview build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Check git status
git status

# See recent commits
git log --oneline -5
```

---

## 📞 Need Help?

If deployment fails:
1. Check GitHub Actions logs
2. Verify build succeeds locally
3. Check for TypeScript/ESLint errors
4. Ensure all dependencies are installed

**Your site URL:** `https://staruniversalgroup.in/`

