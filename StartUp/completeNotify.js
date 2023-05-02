const sendEmail = (studentId, uId) => {
  // studentIdに@oit.ac.jpをつけてメールを送信
  const email = studentId + '@oit.ac.jp';
  const subject = '研究時間管理システム 会員登録完了のお知らせ';
  const body = '会員登録が完了しました。研究頑張ってください！'+"\n"+"ID:"+uId;
  GmailApp.sendEmail(email, subject, body);
  return true;
}
