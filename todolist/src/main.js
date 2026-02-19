(function main() {
  const TODOLIST = 'toDoList';

  // DOM
  const constentMenu = document.querySelector('.constent_menu');
  const toDoInput = document.querySelector('.constent_menu');
  const toDoAddBtn = document.querySelector('.toDo_addBtn');
  const toDoDelBtn = document.querySelector('.toDo_delBtn');
  const toDoList = document.querySelector('.toDo_list');

  let data;
  const loadTodo = () => {
    // データをlocalstrageから取得
    data = JSON.parse(localStorage.getItem(TODOLIST));
    console.log(data);

    /**
     * item: toDoListの要素
     * idx:index
     */
    data.forEach((item, idx) => {
      item.id = idx;
      getToDoList(item);
    });
  };
  const del = id => {
    console.log(data[id]);
    document.getElementById(id).remove();
  };

  const toggle = id => {
    // idとindexが異なる可能性があるため、ループで対象のデータを探す
    /*
    // for文の場合
    for (i = 0; i < data; i++) {
      if (data[i]['id'] === id) {
        data[i]['state'] = !data[i]['state'];
        break;
      }
    }
    */
    const item = data.find(todo => todo.id === id);

    if (item) {
      item.state = !item.state;
    }
  };

  const getToDoList = item => {
    const { id, state, content, time } = item;

    const div = document.createElement('div');
    div.id = id;
    div.className = 'ToDo_list_item';

    const checkBox = document.createElement('input');
    checkBox.className = 'Todo_List_State';
    checkBox.type = 'checkbox';
    checkBox.checked = state;
    checkBox.addEventListener('click', () => {
      toggle(id);
    });
    div.append(checkBox);

    const textDiv = document.createElement('div');
    textDiv.className = 'ToDo_list_Time';
    textDiv.textContent = content;
    div.append(textDiv);

    const TimeDiv = document.createElement('div');
    TimeDiv.className = 'ToDo_list_Time';
    TimeDiv.textContent = time;
    div.append(TimeDiv);

    const delBTN = document.createElement('button');
    delBTN.className = 'ToDo_list_delBtn';
    delBTN.type = 'button';
    delBTN.textContent = '削除';
    delBTN.addEventListener('click', () => {
      del(id);
    });

    div.append(delBTN);

    toDoList.append(div);
  };

  const init = () => {
    loadTodo();
  };
  init();
})();
