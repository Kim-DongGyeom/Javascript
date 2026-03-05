// html
const dom = document.querySelector('html');

// Modal
const modal = document.querySelector('.black-bg');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

//form
const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

//nav
const badge = document.querySelector('.badge');
const navbarBrand = document.querySelector('.navbar-brand');
const scrollBar = document.querySelector('.scroll-bar');

// slide-box
const slideBox = document.querySelectorAll('.slide-box');
const slideContainer = document.querySelector('.slide-container');
const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');
const slide3 = document.querySelector('.slide-3');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

const lorem = document.querySelector('.lorem');

//
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /[A-Z]/;
//
var cnt = 0;
var rendImgIdx = 0;

//
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
  rendImgIdx = num;
  slideContainer.style.transform = `translateX(-${rendImgIdx}00vw)`;
};

const setslideImg = (value) => {
  if (value === '<') {
    rendImgIdx--;
    if (rendImgIdx < 0) {
      rendImgIdx = slideBox.length - 1;
    }
  }

  if (value === '>') {
    rendImgIdx++;
    if (rendImgIdx > slideBox.length - 1) {
      rendImgIdx = 0;
    }
  }
  return rendImgIdx;
};

const transFontSize = (num) => {
  var result = 30;
  if (num > 100) {
    result = 15;
  }
  return result;
};

openModal.addEventListener('click', () => {
  modal.classList.add('show-modal');
});
closeModal.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

// slide1.addEventListener('click', () => {
//   slideImg(0);
// });
// slide2.addEventListener('click', () => {
//   slideImg(1);
// });
// slide3.addEventListener('click', () => {
//   slideImg(2);
// });

slideBox.forEach((_, index) => {
  document
    .querySelector(`.slide-${index + 1}`)
    .addEventListener('click', () => slideImg(index));
});

slidePrev.addEventListener('click', () => {
  slideImg(setslideImg('<'));
});
slideNext.addEventListener('click', () => {
  slideImg(setslideImg('>'));
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

window.addEventListener('scroll', () => {
  //   console.log(window.scrollX);
  //   console.log(window.scrollY);
  //   window.scrollTo(0, 200);
  //   window.scrollBy(0, 200);
  navbarBrand.style.fontSize = `${transFontSize(window.scrollY)}px`;
});
// console.log(lorem.scrollHeight);
// console.log(lorem.clientHeight);

lorem.addEventListener('scroll', () => {
  //スクロール量
  // console.log(lorem.scrollTop);

  //スクロール可能な高さ
  //   console.log(lorem.scrollHeight);

  // 表示される高さ
  //   console.log(lorem.clientHeight);

  if (lorem.scrollTop + lorem.clientHeight > lorem.scrollHeight - 5) {
    alert('確認済み');
  }
});

console.log('현재 스크롤 량', dom.scrollTop);
console.log('최대 높이', dom.scrollHeight);
console.log('스크롤 가능한 량', dom.clientHeight);

var scrollHeight = 0;

window.addEventListener('scroll', () => {
  scrollHeight = Math.round(
    (window.scrollY / (dom.scrollHeight - dom.clientHeight)) * 100,
  );
  scrollBar.style.width = `${scrollHeight}%`;
  console.log(scrollHeight);
});

// 260304 start step2-7
