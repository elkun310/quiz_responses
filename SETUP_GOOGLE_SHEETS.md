# Google Sheets Integration Setup Guide

This guide walks you through setting up Google Sheets integration for the Random Quiz Questions Web App.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Quiz Responses" (or your preferred name)
4. Copy the Spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part

## Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Copy the entire content from `backend/google-apps-script.js`
4. Paste it into the Apps Script editor
5. Replace `YOUR_SPREADSHEET_ID` with your actual Spreadsheet ID from Step 1
6. Save the project

## Step 3: Deploy as Web App

1. In Google Apps Script, click **Deploy** → **New Deployment**
2. Select **Type**: Web app
3. Configure:
   - **Execute as**: Your Google Account
   - **Who has access**: Anyone
4. Click **Deploy**
5. You'll see a deployment URL like:
   ```
   https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallback
   ```
6. Copy this URL

## Step 4: Update Frontend Configuration

1. Open `js/app.js`
2. Find the line with `apiEndpoint`:
   ```javascript
   this.api = new QuizAPI({
       apiEndpoint: 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallback'
   });
   ```
3. Replace `YOUR_SCRIPT_ID` with the script ID from your deployment URL

## Step 5: Initialize the Google Sheet

1. In Google Apps Script, run the `initializeSheet()` function:
   - Click the dropdown next to the play button
   - Select `initializeSheet`
   - Click the play button
   - Authorize if prompted
2. This will create headers in your Google Sheet

## Step 6: Test the Integration

1. Start the quiz app locally: `npm run dev`
2. Fill in the landing form
3. Complete the quiz
4. Submit the quiz
5. Check your Google Sheet - the data should appear in a new row

## Troubleshooting

### "Permission denied" error
- Make sure you deployed the Apps Script as "Anyone" in the deployment settings
- Try redeploying with updated permissions

### Data not appearing in Google Sheet
- Check the browser console for errors (F12 → Console tab)
- Verify the API endpoint URL is correct in `js/app.js`
- Make sure the `SHEET_ID` is correct in `google-apps-script.js`

### CORS errors
- The Apps Script is configured with `mode: 'no-cors'` to avoid CORS issues
- If you still see errors, check the Apps Script logs for details

## Data Format

Your Google Sheet will have the following columns:
- **Timestamp**: When the quiz was submitted
- **Name**: User's full name
- **Phone**: User's phone number
- **Agent Name**: User's agent name
- **Q1 Answer - Q30 Answer**: Answers to all 30 questions
- **Total Score**: Final quiz score (out of 38)

## Security Notes

- The API endpoint is public (Anyone can access)
- Consider adding validation to prevent spam submissions
- Store sensitive data securely
- Never share your Spreadsheet ID publicly

## Next Steps

- Monitor responses in your Google Sheet
- Export data for analysis
- Set up email notifications for new submissions (optional)
- Create charts and dashboards in Google Sheets

## Support

For issues with:
- **Google Sheets**: Visit [Google Sheets Help](https://support.google.com/docs)
- **Google Apps Script**: Visit [Apps Script Documentation](https://developers.google.com/apps-script)
- **Quiz App**: Check the browser console for error messages
