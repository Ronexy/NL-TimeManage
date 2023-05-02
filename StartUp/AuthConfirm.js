const checkAuth = (studentId) => {
  //　現在のスプレッドシートに対してstudentIdが存在するか確認
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = sheet.getSheets();
  const sheetNames = sheets.map(sheet => sheet.getName());
  if (sheetNames.includes(studentId)) {
    return true;
  }
  return false;
}