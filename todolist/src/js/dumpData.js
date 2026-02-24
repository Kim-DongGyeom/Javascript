(function init() {
  const getTime = () => {
    const DAY_OF_WEEK_LIST = ['日', '月', '火', '水', '木', '金', '土'];

    const setNum = (item) => String(item).padStart(2, '0');
    const date = new Date();
    const year = date.getFullYear();
    const month = setNum(date.getMonth() + 1);
    const day = setNum(date.getDate());
    const dayOfWeek = DAY_OF_WEEK_LIST[date.getDay()];
    const time = date.toString().slice(16, 24);

    return `${year}年 ${month}月 ${day}日 (${dayOfWeek}) ${time}`;
  };

  const Createlist = () => {
    // const TODOLIST = 'test';
    const TODOLIST = 'toDoList';
    const data = [];

    var SetState = false;
    for (let i = 0; i <= 5; i++) {
      SetState = !SetState;
      var addItem = { state: SetState, content: `test-${i}`, time: getTime() };
      data.push(addItem);
    }

    console.log(data);

    const save = data.map((item) => {
      const list = Object.assign({}, item);
      return list;
    });

    localStorage.setItem(TODOLIST, JSON.stringify(save));
  };

  Createlist();
})();
