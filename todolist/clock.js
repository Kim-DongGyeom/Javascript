(function () {
  /**
   * 曜日のリスト
   * []には現在の曜日を数字で表す dayOfWeek　を反映
   * ex) 0 => 日, 1 => 月 ...
   */
  const dayOfWeekList = ['日', '月', '火', '水', '木', '金', '土'];

  // DOM
  const clock = document.querySelector('.clock');

  // utill
  /**
   * itemが 10 未満の場合、 0をつける
   * ex) 1 => 01, 2 => 02 ...
   */
  const setNum = item => String(item).padStart(2, '0');

  // main初期化
  const getTime = () => {};
  const init = () => {
    const date = new Date();

    const year = date.getFullYear();
    /**
     * 月のスタートは 1 ではなく、　0　なので、+1　の作業を加えて、正しい月を表す
     */
    const month = setNum(date.getMonth() + 1);
    const day = setNum(date.getDate());
    const dayOfWeek = date.getDay();

    console.log(year, month, day, dayOfWeekList[dayOfWeek]);
    console.log(clock);
  };
  ㅏ;

  init();
})();
