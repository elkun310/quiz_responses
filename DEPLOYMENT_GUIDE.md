# Deployment Guide - Netlify

Complete guide to deploy the Random Quiz Questions Web App to Netlify.

## Prerequisites

- Netlify account (free at https://netlify.com)
- Git installed on your machine
- GitHub account (recommended for easier deployment)

## Option 1: Deploy via Netlify UI (Easiest - No CLI Required)

### Step 1: Prepare Your Project

1. Make sure all files are saved
2. Verify `netlify.toml` exists in project root
3. Ensure all code is working locally

### Step 2: Create GitHub Repository (Recommended)

1. Go to https://github.com/new
2. Create a new repository named `random-quiz-app`
3. Clone it to your machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/random-quiz-app.git
   cd random-quiz-app
   ```
4. Copy all project files into this directory
5. Create `.gitignore` file:
   ```
   node_modules/
   .env
   .DS_Store
   *.log
   ```
6. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: Random Quiz App"
   git push -u origin main
   ```

### Step 3: Deploy to Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Authorize Netlify to access your GitHub account
5. Select your `random-quiz-app` repository
6. Configure build settings:
   - **Build command**: (leave empty - no build needed)
   - **Publish directory**: `.` (current directory)
7. Click **"Deploy site"**
8. Wait for deployment to complete (usually 1-2 minutes)

### Step 4: Get Your Live URL

- After deployment, you'll see a URL like: `https://random-quiz-app-abc123.netlify.app`
- This is your live site!

## Option 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Authenticate with Netlify

```bash
netlify login
```

This will open a browser window to authorize the CLI.

### Step 3: Deploy

Navigate to your project directory and run:

```bash
netlify deploy --prod
```

Follow the prompts:
- Site name: `random-quiz-app` (or your preferred name)
- Publish directory: `.` (current directory)

### Step 4: Verify Deployment

The CLI will provide your live URL.

## Option 3: Drag & Drop Deploy

1. Go to https://app.netlify.com
2. Drag and drop your project folder into the deploy area
3. Wait for deployment to complete
4. Get your live URL

## Post-Deployment Configuration

### Update Google Apps Script Endpoint

After deployment, you need to update the API endpoint in your Google Apps Script to allow requests from your Netlify domain.

1. Get your Netlify URL (e.g., `https://random-quiz-app-abc123.netlify.app`)
2. Go to your Google Apps Script project
3. Update the `doPost` function to allow CORS:

```javascript
function doPost(e) {
    try {
        // Add CORS headers
        const output = ContentService.createTextOutput();
        output.setMimeType(ContentService.MimeType.JSON);
        
        // Your existing code here...
        
        return output;
    } catch (error) {
        // Error handling...
    }
}
```

### Verify the Connection

1. Open your Netlify site
2. Fill in the landing form
3. Complete the quiz
4. Submit
5. Check if data appears in Google Sheet

## Environment Variables (Optional)

If you want to use environment variables for the API endpoint:

1. In Netlify dashboard, go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables**
3. Add:
   - Key: `VITE_API_ENDPOINT`
   - Value: Your Google Apps Script endpoint
4. Update `js/app.js` to use it:
   ```javascript
   const apiEndpoint = process.env.VITE_API_ENDPOINT || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```

## Troubleshooting

### Issue: Site shows blank page

**Solution**:
1. Check browser console (F12) for errors
2. Verify all JavaScript files are loading
3. Check Netlify deployment logs for build errors
4. Ensure `netlify.toml` is configured correctly

### Issue: Form submission fails

**Solution**:
1. Check browser console for CORS errors
2. Verify Google Apps Script endpoint is correct
3. Ensure Google Apps Script is deployed as "Anyone"
4. Check Google Apps Script logs for errors

### Issue: Data not saving to Google Sheet

**Solution**:
1. Verify SHEET_ID is correct in Google Apps Script
2. Check Google Apps Script logs (Executions tab)
3. Ensure sheet name matches in backend
4. Run `initializeSheet()` function again

### Issue: Custom domain not working

**Solution**:
1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait 24-48 hours for DNS to propagate

## Monitoring & Maintenance

### Check Deployment Status

1. Go to https://app.netlify.com
2. Click your site
3. View deployment history
4. Check build logs if needed

### View Analytics

1. Go to **Analytics** tab in Netlify dashboard
2. Monitor traffic and usage

### Enable Auto-Deploy

1. Go to **Site settings** → **Build & deploy** → **Deploy contexts**
2. Configure auto-deploy on git push
3. Any changes pushed to GitHub will auto-deploy

## Custom Domain Setup

### Using Netlify DNS

1. In Netlify dashboard, go to **Domain management**
2. Click **Add custom domain**
3. Enter your domain
4. Follow Netlify's DNS setup instructions

### Using External DNS

1. In Netlify dashboard, go to **Domain management**
2. Add your domain
3. Update DNS records at your domain provider:
   - CNAME: `your-site.netlify.app`

## Security Checklist

- [ ] Google Apps Script is deployed as "Anyone"
- [ ] API endpoint is correct in frontend
- [ ] SHEET_ID is set in Google Apps Script
- [ ] No sensitive data in frontend code
- [ ] HTTPS is enabled (automatic on Netlify)
- [ ] Security headers are configured in `netlify.toml`

## Performance Optimization

### Enable Caching

Already configured in `netlify.toml`:
- JS/CSS files: 1 hour cache
- HTML files: No cache (always fresh)

### Optimize Images

If you add images later:
1. Use optimized formats (WebP, JPEG)
2. Compress before uploading
3. Use appropriate sizes

### Monitor Performance

1. Use Lighthouse (Chrome DevTools)
2. Check Core Web Vitals in Netlify Analytics
3. Optimize based on recommendations

## Rollback Deployment

If something goes wrong:

1. Go to Netlify dashboard
2. Click your site
3. Go to **Deploys** tab
4. Find previous working deployment
5. Click **Publish deploy**

## Success Indicators

✅ Deployment successful when:
- Site loads without errors
- All pages are accessible
- Form validation works
- Quiz functionality works
- Data submits to Google Sheet
- No console errors
- HTTPS is enabled

## Next Steps

1. Test the live site thoroughly
2. Share the URL with users
3. Monitor for errors
4. Collect user feedback
5. Deploy updates as needed

## Support

- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://community.netlify.com
- GitHub Pages Alternative: https://pages.github.com
