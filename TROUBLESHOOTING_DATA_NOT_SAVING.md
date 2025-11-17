# Troubleshooting: Data Not Appearing in Google Sheet

## Root Causes & Solutions

### Issue 1: Google Apps Script Not Configured with Spreadsheet ID

**Problem**: The Google Apps Script backend needs your actual Google Sheet ID.

**Solution**:
1. Open your Google Sheet
2. Copy the Spreadsheet ID from the URL:
   - URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part
3. Go to your Google Apps Script project
4. Replace `YOUR_SPREADSHEET_ID` on line 11 with your actual ID:
   ```javascript
   const SHEET_ID = 'YOUR_ACTUAL_SPREADSHEET_ID';
   ```
5. Save the script

### Issue 2: Sheet Name Mismatch

**Problem**: The script looks for a sheet named "Quiz Responses" but it might not exist.

**Solution**:
1. In your Google Sheet, check the sheet tab name at the bottom
2. If it's different, update line 12 in Google Apps Script:
   ```javascript
   const SHEET_NAME = 'Your Actual Sheet Name';
   ```
3. Or create a new sheet named "Quiz Responses" in your Google Sheet

### Issue 3: Field Name Mismatch (FIXED)

**Problem**: The frontend was sending `agentName` but app.js was using `agent`.

**Solution**: ✅ Already fixed in `js/api.js` line 54:
```javascript
agentName: userInfo.agent || userInfo.agentName,
```

### Issue 4: Google Apps Script Deployment Issues

**Problem**: The script might not be deployed correctly.

**Solution**:
1. Go to your Google Apps Script project
2. Click **Deploy** → **Manage Deployments**
3. Check if there's an active deployment
4. If not, click **New Deployment**:
   - Type: **Web app**
   - Execute as: **Your Google Account**
   - Who has access: **Anyone**
5. Click **Deploy**
6. Copy the new deployment URL
7. Update `js/app.js` line 16 with the new URL

### Issue 5: Sheet Not Initialized

**Problem**: The sheet doesn't have headers set up.

**Solution**:
1. In Google Apps Script, run the `initializeSheet()` function:
   - Click the dropdown next to the play button
   - Select `initializeSheet`
   - Click the play button
   - Authorize if prompted
2. This will create headers in your sheet

## Debugging Steps

### Step 1: Check Browser Console
1. Open your quiz app in browser
2. Press F12 to open DevTools
3. Go to **Console** tab
4. Complete a quiz and submit
5. Look for console messages:
   - `Validating quiz data:` - Shows the data being sent
   - `Quiz submitted successfully:` - Indicates success
   - Any error messages

### Step 2: Check Google Apps Script Logs
1. Go to your Google Apps Script project
2. Click **Executions** (left sidebar)
3. Look for recent executions
4. Click on any execution to see logs
5. Check for error messages

### Step 3: Verify API Endpoint
1. Open `js/app.js`
2. Check line 16 - verify the endpoint URL is correct
3. Should be: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

### Step 4: Test the Endpoint Directly
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Run this test:
   ```javascript
   fetch('YOUR_ENDPOINT_URL', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
           name: 'Test User',
           phone: '555-1234',
           agentName: 'Test Agent',
           answers: [0, 1, 2],
           totalScore: 10
       }),
       mode: 'no-cors'
   }).then(r => console.log('Response:', r));
   ```
4. Check if you get a response

## Common Issues Checklist

- [ ] Google Apps Script has correct SHEET_ID
- [ ] Sheet name matches in Google Apps Script
- [ ] Sheet has been initialized with headers
- [ ] Google Apps Script is deployed as "Anyone"
- [ ] API endpoint URL is correct in js/app.js
- [ ] Browser console shows no errors
- [ ] Google Apps Script logs show execution
- [ ] Field names match (agent vs agentName)

## Data Flow Diagram

```
Quiz App (Frontend)
    ↓
js/app.js (collects data)
    ↓
js/api.js (formats & sends)
    ↓
Google Apps Script (receives & validates)
    ↓
Google Sheets (stores data)
```

## Quick Fix Checklist

1. **Update Google Apps Script**:
   - [ ] Set correct SHEET_ID
   - [ ] Set correct SHEET_NAME
   - [ ] Run initializeSheet()
   - [ ] Redeploy as web app

2. **Update Frontend**:
   - [ ] Update API endpoint in js/app.js line 16
   - [ ] Clear browser cache (Ctrl+Shift+Delete)
   - [ ] Reload the app

3. **Test**:
   - [ ] Complete a quiz
   - [ ] Check browser console for messages
   - [ ] Check Google Apps Script logs
   - [ ] Check Google Sheet for new row

## If Still Not Working

1. **Check Google Apps Script Error**:
   - Go to Executions tab
   - Look for failed executions
   - Click to see error details

2. **Verify Sheet Access**:
   - Make sure your Google account has access to the sheet
   - Try opening the sheet directly

3. **Check Permissions**:
   - Google Apps Script should be deployed as "Anyone"
   - Not "Only myself"

4. **Try a Fresh Deployment**:
   - Create a new deployment
   - Get new URL
   - Update js/app.js

## Success Indicators

✅ You'll know it's working when:
- Quiz submits without errors
- Browser console shows "Quiz submitted successfully"
- New row appears in Google Sheet within 30 seconds
- Row contains: Timestamp, Name, Phone, Agent Name, Answers, Score

## Support

If issues persist:
1. Check the Google Apps Script logs for specific error messages
2. Verify all field names match between frontend and backend
3. Ensure Google Sheet is accessible
4. Try with a simple test submission first
