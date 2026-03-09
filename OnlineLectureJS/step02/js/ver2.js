// ver2 addEventListener

// Select DOM elements by id
const alertBox = document.getElementById('alert');
const message = document.getElementById('message');

// Select DOM elements by class name
const openBtn = document.getElementsByClassName('open-btn');
const closeBtn = document.getElementsByClassName('close-btn');

openBtn[0].addEventListener('click', (e) => {
  open(e, 'ID');
});
openBtn[1].addEventListener('click', (e) => {
  open(e, 'PW');
});

closeBtn[0].addEventListener('click', (e) => {
  alertBox.style.display = e.target.value;
});

const open = (e, msg) => {
  alertBox.style.display = e.target.value;
  //   alertBox.classList.remove('hidden');
  message.innerHTML = msg + 'を入力してください。';
};

//未使用
function LoginBtn(id, msg, display) {
  return;
}

const btn = (parameter) => {
  return;
};
