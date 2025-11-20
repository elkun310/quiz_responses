// Google Apps Script Backend for Quiz Data Collection
// Deploy this as a web app in Google Apps Script
// Instructions:
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Copy this code into the script editor
// 4. Deploy as web app (Execute as: Me, Who has access: Anyone)
// 5. Copy the deployment URL and update it in js/api.js

// Configuration
const SHEET_ID = '1QSqfAzBjj_SoyI_T8pz9n7xNtbZVgL__igtrKCBD9-c'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Quiz Responses'; // Name of the sheet to store responses

/**
 * Main handler for POST requests from the quiz app
 */
function doPost(e) {
    try {
        Logger.log('=== Quiz Data Received ===');
        Logger.log('Raw payload: ' + e.postData.contents);

        // Parse incoming data
        const payload = JSON.parse(e.postData.contents);
        Logger.log('Parsed payload: ' + JSON.stringify(payload));

        // Validate payload
        const validation = validatePayload(payload);
        Logger.log('Validation result: ' + JSON.stringify(validation));

        if (!validation.valid) {
            Logger.log('Validation failed: ' + validation.errors.join(', '));
            return ContentService.createTextOutput(JSON.stringify({
                success: false,
                error: validation.errors.join(', ')
            })).setMimeType(ContentService.MimeType.JSON);
        }

        // Save to Google Sheet
        Logger.log('Saving to sheet...');
        const result = saveToSheet(payload);
        Logger.log('Data saved to row: ' + result);

        return ContentService.createTextOutput(JSON.stringify({
            success: true,
            message: 'Quiz data saved successfully',
            rowNumber: result
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        Logger.log('ERROR in doPost: ' + error.toString());
        Logger.log('Stack: ' + error.stack);
        return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

/**
 * Validate incoming payload
 */
function validatePayload(payload) {
    const errors = [];

    if (!payload.name) errors.push('Name is required');
    if (!payload.phone) errors.push('Phone is required');
    if (!payload.agentName) errors.push('Agent name is required');
    if (!payload.answers) errors.push('Answers are required');
    if (typeof payload.totalScore !== 'number') errors.push('Score is required');

    return {
        valid: errors.length === 0,
        errors: errors
    };
}

/**
 * Save quiz data to Google Sheet
 */
function saveToSheet(payload) {
    try {
        Logger.log('Opening spreadsheet with ID: ' + SHEET_ID);
        const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
        Logger.log('Spreadsheet opened successfully');

        Logger.log('Looking for sheet: ' + SHEET_NAME);
        const sheet = spreadsheet.getSheetByName(SHEET_NAME);

        if (!sheet) {
            Logger.log('ERROR: Sheet not found. Available sheets: ' + spreadsheet.getSheets().map(s => s.getName()).join(', '));
            throw new Error('Sheet "' + SHEET_NAME + '" not found. Available sheets: ' + spreadsheet.getSheets().map(s => s.getName()).join(', '));
        }

        Logger.log('Sheet found successfully');

        // Prepare row data
        Logger.log('Preparing row data...');
        const rowData = prepareRowData(payload);
        Logger.log('Row data prepared: ' + JSON.stringify(rowData.slice(0, 5)) + '... (showing first 5 items)');

        // Append row to sheet
        Logger.log('Appending row to sheet...');
        sheet.appendRow(rowData);
        Logger.log('Row appended successfully');

        // Get the row number that was just added
        const lastRow = sheet.getLastRow();

        Logger.log('Data saved to row ' + lastRow);
        return lastRow;

    } catch (error) {
        Logger.log('ERROR saving to sheet: ' + error.toString());
        Logger.log('Error details: ' + error.stack);
        throw error;
    }
}

/**
 * Prepare row data for Google Sheet
 * Row format: Timestamp | Name | Phone | Agent Name | Timezone Offset | Timezone Name | Q1 Answer | Q2 Answer | ... | Q30 Answer | Total Score | Submitted At
 */
function prepareRowData(payload) {
    const row = [];

    // Add timestamp
    row.push(payload.timestamp || new Date().toISOString());

    // Add user info
    row.push(payload.name);
    row.push(payload.phone);
    row.push(payload.agentName);

    // Add timezone information
    row.push(payload.timezoneOffset || '');
    row.push(payload.timezoneName || '');

    // Add answers for all 30 questions
    for (let i = 0; i < 30; i++) {
        const answer = payload.answers[i];
        if (answer !== undefined) {
            // For MCQs, store the option index; for essays, store the text
            row.push(typeof answer === 'number' ? 'Option ' + String.fromCharCode(65 + answer) : answer);
        } else {
            row.push(''); // Empty if not answered
        }
    }

    // Add total score
    row.push(payload.totalScore);

    // Add submission timestamp
    row.push(payload.submittedAt || new Date().toISOString());

    return row;
}

/**
 * Initialize the Google Sheet with headers
 * Run this function once to set up the sheet
 */
function initializeSheet() {
    try {
        const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
        let sheet = spreadsheet.getSheetByName(SHEET_NAME);

        // Create sheet if it doesn't exist
        if (!sheet) {
            sheet = spreadsheet.insertSheet(SHEET_NAME);
        }

        // Prepare headers
        const headers = [];
        headers.push('Timestamp');
        headers.push('Name');
        headers.push('Phone');
        headers.push('Agent Name');
        headers.push('Timezone Offset');
        headers.push('Timezone Name');

        // Add headers for 30 questions
        for (let i = 1; i <= 30; i++) {
            headers.push('Q' + i + ' Answer');
        }

        headers.push('Total Score');
        headers.push('Submitted At');

        // Set headers in first row
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

        // Format header row
        const headerRange = sheet.getRange(1, 1, 1, headers.length);
        headerRange.setBackground('#4285F4');
        headerRange.setFontColor('#FFFFFF');
        headerRange.setFontWeight('bold');

        // Set column widths
        for (let i = 1; i <= headers.length; i++) {
            sheet.setColumnWidth(i, 150);
        }

        Logger.log('Sheet initialized successfully');

    } catch (error) {
        Logger.log('Error initializing sheet: ' + error.toString());
        throw error;
    }
}

/**
 * Test function to verify the script is working
 */
function testScript() {
    Logger.log('Script is working correctly');
    Logger.log('SHEET_ID: ' + SHEET_ID);
    Logger.log('SHEET_NAME: ' + SHEET_NAME);
}
