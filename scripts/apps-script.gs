/**
 * FitEats Transform — Google Apps Script lead handler.
 *
 * Setup:
 * 1. Create a new Google Sheet with headers (row 1):
 *    Timestamp | Name | Phone | Email | Age | Gender | Height | Weight | Goal |
 *    Activity | Food Preference | Medical Conditions | Lifestyle | Meal Preferences |
 *    Budget | Notes | Source | Status
 * 2. Open Extensions > Apps Script, paste this file, save.
 * 3. Deploy > New deployment > Web app:
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Copy the /exec URL into .env.local as NEXT_PUBLIC_APPS_SCRIPT_URL
 *
 * Expected payload (JSON string in the request body):
 * {
 *   "Timestamp": "...", "Name": "...", "Phone": "...", "Email": "...",
 *   "Age": "...", "Gender": "...", "Height": "...", "Weight": "...",
 *   "Goal": "...", "Activity": "...", "Food Preference": "...",
 *   "Medical Conditions": "...", "Lifestyle": "...", "Meal Preferences": "...",
 *   "Budget": "...", "Notes": "...", "Source": "...", "Status": "New"
 * }
 */

var SHEET_NAME = "Sheet1";
var HEADERS = [
  "Timestamp", "Name", "Phone", "Email", "Age", "Gender", "Height", "Weight",
  "Goal", "Food Preference", "Medical Conditions", "Biggest Challenge",
  "Best Time to Contact", "Questions & Comments", "Source", "Status",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    var data = {};
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: "Invalid JSON" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var row = HEADERS.map(function (header) {
      return data[header] !== undefined ? data[header] : "";
    });

    sheet.appendRow(row);
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
