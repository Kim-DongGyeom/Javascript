(function clock() {
  // DOM
  const clock = document.querySelector('.clock');

  // main初期化
  const getTime = () => {
    /**
     * 曜日のリスト
     * []には現在の曜日を数字で表す dayOfWeek　を反映
     * ex) 0 => 日, 1 => 月 ...
     */
    const DAY_OF_WEEK_LIST = ['日', '月', '火', '水', '木', '金', '土'];

    // utill
    /**
     * itemが 10 未満の場合、 0をつける
     * ex) 1 => 01, 2 => 02 ...
     */
    const setNum = item => String(item).padStart(2, '0');

    const date = new Date();

    const year = date.getFullYear();
    /**
     * 月のスタートは 1 ではなく、　0　なので、+1　の作業を加えて、正しい月を表す
     */
    const month = setNum(date.getMonth() + 1);
    const day = setNum(date.getDate());
    const dayOfWeek = DAY_OF_WEEK_LIST[date.getDay()];
    const time = date.toString().slice(16, 24);

    clock.textContent = `${year}年 ${month}月 ${day}日 (${dayOfWeek}) ${time}`;
    // console.log(clock);
  };
  const init = () => {
    setInterval(() => {
      getTime();
    }, 1000);
  };

  init();
})();
