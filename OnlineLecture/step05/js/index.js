const Modal = document.querySelector('.black-bg');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

const email = document.getElementById('email');
const password = document.getElementById('password');

const form = document.querySelector('form');
const badge = document.querySelector('.badge');

const slideContainer = document.querySelector('.slide-container');
const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');
const slide3 = document.querySelector('.slide-3');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /[A-Z]/;

var cnt = 0;
var translateX = 0;

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

const slideImg = (num) => {
  translateX = num;
  slideContainer.style.transform = `translateX(${translateX}vw)`;
};

const SetslideImg = (value) => {
  if (value === '<') {
    translateX += 100;
    if (translateX > 0) {
      translateX = -200;
    }
  }

  if (value === '>') {
    translateX -= 100;
    if (translateX < -200) {
      translateX = 0;
    }
  }
  return translateX;
};

openModal.addEventListener('click', () => {
  Modal.classList.add('show-modal');
});
closeModal.addEventListener('click', () => {
  Modal.classList.remove('show-modal');
});

slide1.addEventListener('click', () => {
  translateX = 0;
  slideImg(0);
  console.log(translateX);
});
slide2.addEventListener('click', () => {
  translateX = -100;
  slideImg(-100);
  console.log(translateX);
});
slide3.addEventListener('click', () => {
  translateX = -200;
  slideImg(-200);
  console.log(translateX);
});
slidePrev.addEventListener('click', () => {
  //   console.log(SetslideImg('<'));
  slideImg(SetslideImg('<'));
  console.log(translateX);
});
slideNext.addEventListener('click', () => {
  //   console.log(SetslideImg('>'));
  slideImg(SetslideImg('>'));
  console.log(translateX);
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
