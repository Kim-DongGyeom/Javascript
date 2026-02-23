(function main() {
	const TODOLIST = 'toDoList';

	// DOM
	//   const constentMenu = document.querySelector('.constent_menu');
	const form = document.querySelector('form');
	const toDoInput = document.querySelector('.toDo_input');
	//   const toDoAddBtn = document.querySelector('.toDo_addBtn');
	const toDoMultiDelBtn = document.querySelector('.toDo_multiDelBtn');
	const toDoList = document.querySelector('.toDo_list');

	const getTime = () => {
		const DAY_OF_WEEK_LIST = ['日', '月', '火', '水', '木', '金', '土'];
		const setNum = item => String(item).padStart(2, '0');
		const date = new Date();
		const year = date.getFullYear();
		const month = setNum(date.getMonth() + 1);
		const day = setNum(date.getDate());
		const dayOfWeek = DAY_OF_WEEK_LIST[date.getDay()];
		const time = date.toString().slice(16, 24);

		return `${year}年 ${month}月 ${day}日 (${dayOfWeek}) ${time}`;
	};

	let data;
	const loadTodo = () => {
		// データをlocalstrageから取得
		data = JSON.parse(localStorage.getItem(TODOLIST)) || [];
		// console.log(data);

		/**
		 * item: toDoListの要素
		 * idx:index
		 */
		data.forEach((item, idx) => {
			item.id = idx;
			getToDoList(item);
		});
	};

	const setToDoList = () => {
		const save = data.map(item => {
			const list = Object.assign({}, item);
			delete list.id;
			delete list.state;
			return list;
		});

		localStorage.setItem(TODOLIST, JSON.stringify(save));
	};

	const findIdx = (list, id) => {
		return list.findIndex(list => list.id === id);
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
		// const item = data.find(todo => todo.id === id);
		const idx = findIdx(data, id);
		data[idx].state = !data[idx].state;
		console.log(data[idx]);
	};

	const toDoMultiDel = () => {
		const filter = data.filter(item => item.state === true);
		filter.forEach(item => {
			toDoDel(item.id);
		});
	};

	const toDoDel = id => {
		document.getElementById(id).remove();
		const idx = findIdx(data, id);
		data.splice(idx, 1);
		console.log(data);
		setToDoList();
	};

	const toDoAdd = e => {
		e.preventDefault();
		if (toDoInput.value) {
			const NewToDoList = {
				id: data.length ? Math.max(...data.map(todo => todo.id)) + 1 : 0,
				state: false,
				content: toDoInput.value,
				time: getTime(),
			};
			data.push(NewToDoList);
			getToDoList(data[data.length - 1]);
			setToDoList();
			toDoInput.value = '';
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
		textDiv.className = 'text';
		textDiv.textContent = content;
		div.append(textDiv);

		const TimeDiv = document.createElement('div');
		TimeDiv.className = 'date';
		TimeDiv.textContent = time;
		div.append(TimeDiv);

		const delBTN = document.createElement('button');
		delBTN.className = 'ToDo_list_delBtn';
		delBTN.type = 'button';
		delBTN.textContent = '削除';
		delBTN.addEventListener('click', () => {
			toDoDel(id);
		});

		div.append(delBTN);

		toDoList.append(div);
	};

	const init = () => {
		loadTodo();
		form.addEventListener('submit', toDoAdd);
		toDoMultiDelBtn.addEventListener('click', toDoMultiDel);
	};
	init();
})();
