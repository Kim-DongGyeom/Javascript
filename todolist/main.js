(function main() {
  const loadTodo = () => {
    const toDoList = 'toDoList';
    const data = JSON.parse(localStorage.getItem(toDoList));
    console.log(data);
    data.map(item => {
      console.log(item);
    });
  };

  const init = () => {
    loadTodo();
  };
  init();
})();
