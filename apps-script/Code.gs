/**
 * Christmas Crochet Patterns Free — Email Capture Web App
 *
 * HOW TO DEPLOY (2 minutes):
 * 1. Go to https://sheets.new and create a new Google Sheet.
 * 2. With the sheet open: Extensions > Apps Script.
 * 3. Delete any default code, paste this entire file in, then press Ctrl+S.
 * 4. Click Deploy > New deployment.
 * 5. Select type: Web app
 * 6. Description: "Email capture"
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Click Deploy, authorize (Review permissions > Advanced > Go to project),
 *    then copy the Web app URL ending in /exec.
 * 10. Paste that URL into src/config.ts  ->  APPS_SCRIPT_URL
 *
 * Columns are created automatically the first time an email is saved.
 */

var SHEET_NAME = 'Emails';
var COLUMN_HEADERS = ['Timestamp', 'Email', 'Source Page', 'Referrer', 'UTM Campaign'];

/** Main POST endpoint called by the website. */
function doPost(e) {
  try {
    var params = e && e.parameter ? e.parameter : {};
    var email = String(params.email || '').trim().toLowerCase();
    var source = String(params.source || '').trim();
    var referrer = String(params.referrer || '').trim();
    var campaign = String(params.campaign || '').trim();

    if (!isValidEmail_(email)) {
      return json_({ ok: false, error: 'Please enter a valid email address.' });
    }

    var sheet = getOrCreateSheet_();
    var existing = findEmail_(sheet, email);

    if (existing > 0) {
      // Already subscribed — do not duplicate, but still grant the PDF.
      return json_({ ok: true, duplicate: true, message: 'Email already saved.' });
    }

    sheet.appendRow([new Date(), email, source, referrer, campaign]);
    return json_({ ok: true, duplicate: false, message: 'Email saved successfully.' });
  } catch (err) {
    return json_({ ok: false, error: 'Something went wrong: ' + err.message });
  }
}

/** Simple health check so you can confirm the deployment works. */
function doGet() {
  return json_({ ok: true, message: 'Email capture endpoint is live.' });
}

/* ---------------------------------- utils --------------------------------- */

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMN_HEADERS);
    sheet.getRange(1, 1, 1, COLUMN_HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function findEmail_(sheet, email) {
  if (sheet.getLastRow() < 2) return 0;
  var values = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0]).trim().toLowerCase() === email) return i + 2;
  }
  return 0;
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
