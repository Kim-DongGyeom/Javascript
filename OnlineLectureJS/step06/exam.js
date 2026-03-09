/**
 * 試験の合否判定を行う。
 *
 * 【試験科目】
 * A（100点満点）
 * B（100点満点）
 *
 * 【合格条件】
 * 2科目の合計が120点以上
 * ただし、いずれか1科目でも40点未満の場合は不合格
 */

function exam01(num1, num2) {
  if (num1 >= 40 && num2 >= 40 && num1 + num2 >= 120) {
    return console.log('合格');
  }
  return console.log('不合格');
}
function exam02(num1, num2) {
  if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100) {
    return alert('数値を改めて入力してください。');
  }
  if (num1 >= 40 && num2 >= 40 && num1 + num2 >= 120) {
    return console.log('合格');
  }
  return console.log('不合格');
}

// exam02(50, 50);
// exam02(70, 70);
// exam02(30, 100);
// exam02(-30, 100);
