# Google Apps Script Setup for Waitlist Form

## The Problem
Your Google Apps Script endpoint is returning "Script function not found: doGet" because:
1. The script needs a `doPost` function to handle POST requests
2. The script needs to be deployed as a web app with proper permissions
3. CORS headers need to be set correctly

## Solution: Deploy This Script

### Step 1: Create/Edit Your Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Create a new project or open your existing one
3. Replace the code with this:

```javascript
function doPost(e) {
  try {
    // Get the email from the POST request
    const email = e.parameter.email || JSON.parse(e.postData.contents).email;
    
    if (!email || !email.includes('@')) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: 'Invalid email' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get or create the spreadsheet
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Email', 'Timestamp']);
    }
    
    // Append the email and timestamp
    sheet.appendRow([email, new Date()]);
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, message: 'Email added successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle GET requests for testing
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Waitlist API is running' })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

### Step 2: Set Up Google Sheet

1. Create a new Google Sheet
2. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
3. Replace `YOUR_SPREADSHEET_ID` in the script with your actual Sheet ID
4. Share the sheet with your Google Apps Script account (or make it editable by the script's service account)

### Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: "Waitlist Form Handler"
   - **Execute as**: **Me** (your account)
   - **Who has access**: **Anyone** (important for CORS!)
4. Click **Deploy**
5. Copy the **Web app URL** - this is your endpoint URL
6. Authorize the script when prompted (first time only)

### Step 4: Update Your Environment Variables

Update your `.env.local` and Vercel environment variables with the new Web app URL from Step 3.

## Alternative: Simple Email Notification (No Spreadsheet)

If you just want to receive emails instead of using a spreadsheet:

```javascript
function doPost(e) {
  try {
    const email = e.parameter.email || JSON.parse(e.postData.contents).email;
    
    if (!email || !email.includes('@')) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: 'Invalid email' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Send email notification
    const subject = 'New Waitlist Signup - SORAA';
    const body = `New email signup: ${email}\n\nTimestamp: ${new Date().toLocaleString()}`;
    
    MailApp.sendEmail({
      to: 'joinsoraa@gmail.com',
      subject: subject,
      body: body,
    });
    
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, message: 'Email sent successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Waitlist API is running' })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

## Testing

After deploying, test the endpoint:

```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "email=test@example.com"
```

You should get a JSON response like:
```json
{"ok": true, "message": "Email added successfully"}
```

## Troubleshooting

1. **"Script function not found"**: Make sure you deployed as a Web app, not an API executable
2. **CORS errors**: Ensure "Who has access" is set to "Anyone"
3. **Permission denied**: Make sure you authorized the script when deploying
4. **Spreadsheet errors**: Verify the Sheet ID is correct and the script has access

## Current Endpoint

Your current endpoint URL:
```
https://script.google.com/macros/s/AKfycby7De2Oj5XfLBHmvoDwlADEVtU9LBw8JRwNH0Wp8LOY0N3wT1E1eNB8uH958qzeyl1x1g/exec
```

Make sure this script has the `doPost` function deployed!

