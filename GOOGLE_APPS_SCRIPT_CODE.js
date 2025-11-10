/**
 * SORAA Waitlist - Google Apps Script
 * 
 * Spreadsheet ID: 1zJoiKfCT86NiMqDPiWgazh-fR2Rs_KIdOwv1u7Weq88
 * Sheet Name: Waitlist
 * 
 * INSTRUCTIONS:
 * 1. Copy this entire code into your Google Apps Script editor
 * 2. Replace the SPREADSHEET_ID below with your actual spreadsheet ID
 * 3. Replace the SHEET_NAME with "Waitlist" (or your sheet name)
 * 4. Save the script
 * 5. Deploy as Web App:
 *    - Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 * 6. Authorize the script when prompted
 * 7. Copy the Web app URL and use it as your endpoint
 */

// Configuration
const SPREADSHEET_ID = '1zJoiKfCT86NiMqDPiWgazh-fR2Rs_KIdOwv1u7Weq88';
const SHEET_NAME = 'Waitlist';

/**
 * Handle POST requests from the waitlist form
 */
function doPost(e) {
  try {
    // Get the email from the request
    // Try both URL-encoded and JSON formats
    let email;
    
    if (e.parameter && e.parameter.email) {
      // URL-encoded format
      email = e.parameter.email;
    } else if (e.postData && e.postData.contents) {
      // JSON format
      try {
        const data = JSON.parse(e.postData.contents);
        email = data.email;
      } catch (parseError) {
        // Try as URL-encoded string
        const params = e.postData.contents.split('&');
        for (const param of params) {
          const [key, value] = param.split('=');
          if (key === 'email') {
            email = decodeURIComponent(value);
            break;
          }
        }
      }
    }
    
    // Validate email
    if (!email || !email.includes('@') || !email.includes('.')) {
      return ContentService.createTextOutput(
        JSON.stringify({ 
          ok: false, 
          error: 'Invalid email address',
          received: email || 'no email received'
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers
      sheet.getRange(1, 1, 1, 2).setValues([['Email', 'Timestamp']]);
      sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
    }
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 2).setValues([['Email', 'Timestamp']]);
      sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
    }
    
    // Check if email already exists (optional - prevents duplicates)
    const emails = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues().flat();
    if (emails.includes(email)) {
      return ContentService.createTextOutput(
        JSON.stringify({ 
          ok: true, 
          message: 'Email already registered',
          duplicate: true
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append the email and timestamp
    const timestamp = new Date();
    sheet.appendRow([email, timestamp]);
    
    // Optional: Format the new row
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 2).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    
    // Also send email notification (optional)
    try {
      MailApp.sendEmail({
        to: 'joinsoraa@gmail.com',
        subject: 'New SORAA Waitlist Signup',
        body: `New email signup: ${email}\n\nTimestamp: ${timestamp.toLocaleString()}\n\nSpreadsheet: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`,
      });
    } catch (emailError) {
      // Log but don't fail if email fails
      console.error('Email notification failed:', emailError);
    }
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ 
        ok: true, 
        message: 'Email added successfully',
        email: email,
        timestamp: timestamp.toISOString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost:', error);
    
    return ContentService.createTextOutput(
      JSON.stringify({ 
        ok: false, 
        error: error.toString(),
        message: error.message || 'Unknown error occurred'
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests for testing
 */
function doGet(e) {
  try {
    // Test connection to spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: 'ok', 
        message: 'SORAA Waitlist API is running',
        spreadsheetId: SPREADSHEET_ID,
        sheetName: SHEET_NAME,
        sheetExists: sheet !== null,
        lastRow: sheet ? sheet.getLastRow() : 0
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: 'error', 
        error: error.toString(),
        message: error.message
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

