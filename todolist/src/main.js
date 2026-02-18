(function main() {
  const TODOLIST = 'toDoList';
  const constentMenu = document.querySelector('.constent_menu');
  const toDoInput = document.querySelector('.constent_menu');
  const toDoAddBtn = document.querySelector('.toDo_addBtn');
  const toDoDelBtn = document.querySelector('.toDo_delBtn');
  const toDoList = document.querySelector('.toDo_list');

  const loadTodo = () => {
    const data = JSON.parse(localStorage.getItem(TODOLIST));
    // console.log(data);
    data.forEach((item, idx) => {
      item['id'] = idx + 1;
      getToDoList(item);
      //   console.log(item);
    });
  };

  const getToDoList = item => {
    const { id, state, content, time } = item;
    console.log(state);

    const div = document.createElement('div');
    div.id = id;
    div.className = 'ToDo_list_item';

    const checkBox = document.createElement('input');
    checkBox.className = 'Todo_List_State';
    checkBox.type = 'checkbox';
    checkBox.textContent = state;
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
    delBTN.className = 'ToDo_list_btn';
    delBTN.type = 'button';
    delBTN.textContent = '削除';
    div.append(delBTN);

    toDoList.append(div);
  };

  const init = () => {
    loadTodo();
  };
  init();
})();
