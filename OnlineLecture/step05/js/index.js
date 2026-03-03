const Modal = document.querySelector('.black-bg');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

const email = document.getElementById('email');
const password = document.getElementById('password');

const form = document.querySelector('form');

const badge = document.querySelector('.badge');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /[A-Z]/;

var cnt = 0;

const inputCheck = () => {
  var emailValue = email.value;
  var passwordValue = password.value;

  if (emailValue === '') {
    alert('Emailを入力してください。');
    return false;
  }

  if (!emailRegex.test(emailValue)) {
    alert('Email形式ではありません。');
    return false;
  }

  if (passwordValue === '') {
    alert('パスワードを入力してください。');
    return false;
  }

  if (!passwordRegex.test(passwordValue)) {
    alert('パスワードには大文字を1文字以上含めてください。');
    return false;
  }
  return true;
};

openModal.addEventListener('click', () => {
  Modal.classList.add('show-modal');
});
closeModal.addEventListener('click', () => {
  Modal.classList.remove('show-modal');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  inputCheck();
});

badge.addEventListener('click', () => {
  cnt++;
  if (cnt % 2 == 0) {
    badge.innerHTML = 'Light';
  } else {
    badge.innerHTML = 'Dark';
  }
});
