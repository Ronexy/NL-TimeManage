// C列に対して、A列に記載されている奇数行-偶数行の時間差を計算する
// １行目は関係ない
// ２行目はA3ーA2
// ３行目はA4ーA3

const TimeCount = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('x20005')
  const lastRow = sheet.getLastRow()
  const lastColumn = sheet.getLastColumn()
  const range = sheet.getRange(2, 1, lastRow, lastColumn)
  const values = range.getValues()

  for (let i = 1; i < values.length; i++) {
    if (i % 2 === 0) {
      const time = values[i][0] - values[i - 1][0]
      sheet.getRange(i + 1, 3).setValue(time)
    }
  }
}