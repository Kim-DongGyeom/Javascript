// part 1: input/output
var name = 'park';
var id = 0;
function showName() {
  var name = 'kim';
  var id = 1;
  console.log(name);
}
showName(); // name: park -> kim
console.log(id); // id = 0

// part 2
/**
 * 2年後の預金総額を計算する。
 *
 * 【金利条件】
 * 初期預金額が5万円未満の場合：年利15%
 * 初期預金額が5万円以上の場合：年利20%
 *
 * 上記の条件に基づき、複利で2年後の総額を算出する。
 */
var principal = 60000;
var totalPrincipal = 0;

var rate = principal >= 50000 ? 1.2 : 1.15;

totalPrincipal = principal * rate * rate;

console.log(totalPrincipal);
