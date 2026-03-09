// setTimeout(() => {
//   document.querySelector('.alert').style.display = 'none';
// }, 1000);

// setInterval(() => {
//   console.log('object');
// }, 1000);

/**
 * 期間限定キャンペーン用のカウントダウン処理。
 *
 * 5秒から1秒ずつ減算し、
 * 残り時間を画面に表示する。
 * 0秒になった場合は、メッセージを非表示にし、
 * タイマーを停止する。
 */
var sec = 5;
const alertTag = document.querySelector('.alert');

const timer = setInterval(() => {
  if (sec > 0) {
    sec--;
    alertTag.textContent = `${sec}秒以内に購入すると特典あり!!`;
  } else {
    alertTag.style.display = 'none';
    clearInterval(timer);
  }
}, 1000);
