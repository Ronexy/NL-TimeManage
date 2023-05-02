// 会員登録
const makeSheet = (studentId, uId) => {
  // studentIdという名前でスプレッドシートをinsert
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.insertSheet(studentId);
  // A1セルにuIdを入力
  const targetSheet = sheet.getSheetByName(studentId);
  targetSheet.getRange('A1').setValue(uId);
  return true;
}

