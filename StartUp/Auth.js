// post
const doPost = (e) => {

  if (e.parameter.tStamp) {
    // あるなら
    const tStamp = e.parameter.tStamp;
    const uId = e.parameter.uId;
    const studentId = e.parameter.studentId;
    const Status = e.parameter.Status;

    // studentIdに合致するシートを取得
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    const targetSheet = sheet.getSheetByName(studentId);
    // A1セルの値を取得
    const targetUId = targetSheet.getRange('A1').getValue();
    // A1セルの値とuIdが一致するか確認
    if (targetUId == uId) {
      // 最終行に[tStamp, Status]を追加
      const lastRow = targetSheet.getLastRow();
      targetSheet.getRange(lastRow + 1, 1).setValue(tStamp);
      targetSheet.getRange(lastRow + 1, 2).setValue(Status);
      if(Status == "start"){
        return ContentService.createTextOutput('研究開始。Fight!');
      }else if(Status == "end"){
        return ContentService.createTextOutput('研究終了。お疲れ様でした。');
      }
    }
  }else{
    // ないなら
    const email = e.parameter.email;
    const uId = randId();
    // emailのドメインが@oit.ac.jpなら
    if (email.indexOf('@oit.ac.jp') != -1) {
      // oit.ac.jpなら
      // 会員登録完了のお知らせメールを送信
      const studentId = email.split('@')[0];
      if (checkAuth(studentId)) {
        // 会員登録済み
        return ContentService.createTextOutput('会員登録済みです。');
      }
      else {
        makeSheet(studentId, uId);
        sendEmail(studentId, uId);
        return ContentService.createTextOutput('会員登録が完了しました。研究頑張ってください！');
      }
    }
    else{
      return ContentService.createTextOutput('大学のメールアドレスを登録してください。');
    }
  }

}

const randId = () => {
  // 8桁のランダムなアルファベットを生成
  const rand = Math.random().toString(36).slice(-8);
  Logger.log(rand)
  return rand;
}