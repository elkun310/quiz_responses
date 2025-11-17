# Quick Fix Checklist - Data Not Saving

## Immediate Actions (Do These First)

### Step 1: Update Google Apps Script Configuration
- [ ] Open your Google Apps Script project
- [ ] Find line 11: `const SHEET_ID = 'YOUR_SPREADSHEET_ID';`
- [ ] Replace with your actual Spreadsheet ID
  - Get it from your Google Sheet URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
- [ ] Save the script (Ctrl+S)

### Step 2: Update Frontend API Endpoint
- [ ] Open `js/app.js`
- [ ] Find line 16 (inside constructor)
- [ ] Verify the endpoint matches your deployment:
  ```javascript
  apiEndpoint: 'https://script.google.com/macros/s/AKfycbytWIQdwNmI6t7ELybbvUEZ1hGXPXLkdOaWxyasp5-UgzhmX61aIceX9n-08JZNwJDs/exec'
  ```

### Step 3: Initialize the Google Sheet
- [ ] Go to Google Apps Script
- [ ] Click the dropdown next to the play button
- [ ] Select `initializeSheet`
- [ ] Click play button
- [ ] Authorize if prompted
- [ ] Check Google Apps Script logs (Executions tab) for success

### Step 4: Clear Browser Cache & Reload
- [ ] Press Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
- [ ] Clear all cache
- [ ] Reload the quiz app
- [ ] Test again

## Verification Steps

### Check 1: Browser Console
1. Open quiz app
2. Press F12 → Console tab
3. Complete and submit a quiz
4. Look for:
   - ✅ `Validating quiz data:` message
   - ✅ `Quiz submitted successfully:` message
   - ❌ Any red error messages

### Check 2: Google Apps Script Logs
1. Go to Google Apps Script project
2. Click **Executions** (left sidebar)
3. Look for recent execution
4. Click on it to view logs
5. Should see:
   - ✅ `=== Quiz Data Received ===`
   - ✅ `Parsed payload: {...}`
   - ✅ `Data saved to row: X`
   - ❌ Any ERROR messages

### Check 3: Google Sheet
1. Open your Google Sheet
2. Check if new row appeared
3. Should contain:
   - Timestamp
   - Name
   - Phone
   - Agent Name
   - Answers (Q1-Q30)
   - Total Score

## Troubleshooting by Symptom

### Symptom: "Sheet not found" error
**Solution**:
1. Check the sheet name in Google Apps Script (line 12)
2. Verify sheet exists in Google Sheet
3. Make sure sheet name matches exactly (case-sensitive)
4. If sheet doesn't exist, create it or update the name

### Symptom: "Permission denied" error
**Solution**:
1. Go to Google Apps Script
2. Click **Deploy** → **Manage Deployments**
3. Click the deployment
4. Check "Who has access" - should be "Anyone"
5. If not, create new deployment with correct permissions

### Symptom: Data sent but not appearing
**Solution**:
1. Check Google Apps Script logs for errors
2. Verify SHEET_ID is correct
3. Verify sheet name matches
4. Try running initializeSheet() again
5. Check if sheet has headers

### Symptom: No console messages at all
**Solution**:
1. Verify API endpoint is correct in js/app.js
2. Check browser console for network errors
3. Try submitting again
4. Check if quiz data is being collected

## Field Name Reference

**Frontend (js/app.js)**:
- `userInfo.name` - User's name
- `userInfo.phone` - User's phone
- `userInfo.agent` - User's agent name
- `userInfo.timestamp` - When form was submitted

**API (js/api.js)**:
- Converts `userInfo.agent` → `agentName` for backend

**Backend (Google Apps Script)**:
- Expects: `name`, `phone`, `agentName`, `answers`, `totalScore`

## Test Submission

Use this to test if backend is working:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Paste this code:
```javascript
fetch('https://script.google.com/macros/s/AKfycbytWIQdwNmI6t7ELybbvUEZ1hGXPXLkdOaWxyasp5-UgzhmX61aIceX9n-08JZNwJDs/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Test User',
        phone: '555-1234',
        agentName: 'Test Agent',
        answers: {0: 0, 1: 1, 2: 2},
        totalScore: 10
    }),
    mode: 'no-cors'
}).then(r => console.log('Test submission sent'));
```
4. Press Enter
5. Check Google Apps Script logs
6. Check if row appears in sheet

## Success Indicators

✅ Everything is working when:
- Browser console shows "Quiz submitted successfully"
- Google Apps Script logs show "Data saved to row: X"
- New row appears in Google Sheet within 30 seconds
- Row contains all user data and answers

## Still Not Working?

1. **Check SHEET_ID**:
   - Is it correct?
   - Is it a valid spreadsheet?
   - Do you have access to it?

2. **Check Sheet Name**:
   - Does "Quiz Responses" sheet exist?
   - Is the name spelled exactly right?
   - Try creating a new sheet with that name

3. **Check Deployment**:
   - Is it deployed as "Anyone"?
   - Is the URL correct in js/app.js?
   - Try creating a new deployment

4. **Check Permissions**:
   - Can you access the Google Sheet directly?
   - Is the Google Apps Script authorized?
   - Try authorizing again

## Contact Support

If issues persist, provide:
1. Screenshot of Google Apps Script logs
2. Screenshot of browser console errors
3. Confirmation that SHEET_ID is set
4. Confirmation that sheet name exists
5. Confirmation that deployment is "Anyone"
