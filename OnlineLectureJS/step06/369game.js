// 369ゲーム
// if/else, function 課題

/**
 * 数値が3の倍数かどうかを判定する。
 * 3の倍数の場合は「拍手」、それ以外は「通過」を出力する。
 */
function game369_01(num) {
  if (num % 3 == 0) {
    console.log('拍手');
  } else {
    console.log('通過');
  }
}

/**
 * 数値が3の倍数かどうかを判定する。
 * 9の倍数の場合は「拍手」を2回出力する。
 */
function game369_02(num) {
  if (num % 9 == 0) {
    console.log('拍手 拍手');
  } else if (num % 3 == 0) {
    console.log('拍手');
  } else {
    console.log('通過');
  }
}

function game369_02(num) {
  if (num % 9 == 0) {
    console.log('拍手 拍手');
  } else if (num % 3 == 0) {
    console.log('拍手');
  } else {
    console.log('通過');
  }
}

/**
 * 369ゲームの判定処理を行う。
 *
 * 渡された数値の一の位が
 * 3・6・9のいずれかに該当する場合は「拍手」を出力する。
 * それ以外の場合は通常の数値を出力する。
 */

function game369_03(num) {
  //   let numStr = String(num).split('');
  //   const NUMBER = Number(numStr[numStr.length - 1]);

  const NUMBER = Math.abs(num) % 10;

  if (NUMBER === 3 || NUMBER === 6 || NUMBER === 9) {
    return console.log('拍手');
  }
  return console.log('NO');
}
game369_03(12345); // NO
game369_03(1234); // NO
game369_03(123); // 拍手
game369_03(12); // NO
