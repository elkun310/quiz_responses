# Pre-Deployment Checklist

Complete this checklist before deploying to Netlify.

## Code Quality

- [ ] All JavaScript files have no console errors
- [ ] All CSS is properly formatted
- [ ] HTML is valid and complete
- [ ] No hardcoded sensitive data (API keys, passwords)
- [ ] All imports are correct
- [ ] No broken links or references

## Functionality Testing

### Landing Page
- [ ] Form loads correctly
- [ ] All three fields display (Name, Phone, Agent)
- [ ] Form validation works
- [ ] Error messages display correctly
- [ ] Start Quiz button works

### Quiz Page
- [ ] 30 questions load
- [ ] Questions are randomized
- [ ] Timer starts and counts down
- [ ] Navigation buttons work
- [ ] Answers are saved when navigating
- [ ] Submit button appears on last question

### Results Page
- [ ] Results page displays after submission
- [ ] Score is calculated correctly
- [ ] Performance message displays
- [ ] Retake Quiz button works

### Data Submission
- [ ] Quiz data is sent to backend
- [ ] Data appears in Google Sheet
- [ ] All fields are saved correctly
- [ ] Timestamp is recorded

## Configuration Files

- [ ] `netlify.toml` exists and is configured
- [ ] `package.json` is valid
- [ ] `.gitignore` is set up (if using Git)
- [ ] No `.env` file in repository (use Netlify environment variables)

## Google Apps Script Setup

- [ ] SHEET_ID is set in `backend/google-apps-script.js`
- [ ] SHEET_NAME matches your Google Sheet
- [ ] Google Apps Script is deployed as "Anyone"
- [ ] `initializeSheet()` has been run
- [ ] Headers exist in Google Sheet

## Frontend Configuration

- [ ] API endpoint is correct in `js/app.js` line 16
- [ ] All JavaScript files are linked in `index.html`
- [ ] CSS file is linked in `index.html`
- [ ] Questions database is loaded
- [ ] No console errors on page load

## Responsive Design

- [ ] Test on desktop (1024px+)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (480px)
- [ ] Test on extra small (320px)
- [ ] All buttons are accessible
- [ ] Text is readable on all sizes

## Browser Compatibility

- [ ] Chrome - works
- [ ] Firefox - works
- [ ] Safari - works
- [ ] Edge - works

## Performance

- [ ] Page loads in < 3 seconds
- [ ] No console warnings
- [ ] No memory leaks
- [ ] Smooth animations

## Security

- [ ] No sensitive data in frontend
- [ ] API endpoint is HTTPS
- [ ] Google Apps Script is secure
- [ ] Form validation is working
- [ ] Correct answers are not exposed

## Documentation

- [ ] README.md is complete
- [ ] SETUP_GOOGLE_SHEETS.md is accurate
- [ ] DEPLOYMENT_GUIDE.md is available
- [ ] Comments in code are clear

## Final Checks

- [ ] All files are saved
- [ ] No uncommitted changes (if using Git)
- [ ] Project builds without errors
- [ ] No broken links or missing files
- [ ] All features work as expected

## Deployment Steps

1. [ ] Create GitHub repository (optional but recommended)
2. [ ] Push code to GitHub
3. [ ] Go to https://app.netlify.com
4. [ ] Click "Add new site" → "Import an existing project"
5. [ ] Select GitHub repository
6. [ ] Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
7. [ ] Click "Deploy site"
8. [ ] Wait for deployment to complete
9. [ ] Test live site
10. [ ] Share URL with users

## Post-Deployment

- [ ] Test all functionality on live site
- [ ] Check Google Sheet for data
- [ ] Monitor for errors
- [ ] Share feedback link with users
- [ ] Set up custom domain (optional)
- [ ] Enable auto-deploy from GitHub (optional)

## Troubleshooting

If deployment fails:
1. Check Netlify deployment logs
2. Verify `netlify.toml` is correct
3. Ensure all files are in project root
4. Check for missing dependencies
5. Review console errors

If functionality fails after deployment:
1. Check browser console (F12)
2. Verify API endpoint is correct
3. Check Google Apps Script logs
4. Verify SHEET_ID is set
5. Test data submission

## Success Indicators

✅ Deployment successful when:
- [ ] Site loads without errors
- [ ] All pages are accessible
- [ ] Form works correctly
- [ ] Quiz functionality works
- [ ] Data saves to Google Sheet
- [ ] No console errors
- [ ] HTTPS is enabled
- [ ] Live URL is accessible

## Rollback Plan

If something goes wrong:
1. Go to Netlify dashboard
2. Click your site
3. Go to **Deploys** tab
4. Find previous working deployment
5. Click **Publish deploy**

## Notes

- Netlify provides free HTTPS
- Automatic deployments can be set up from GitHub
- Custom domains can be added later
- Site can be updated by pushing to GitHub
- Rollback is easy if needed
