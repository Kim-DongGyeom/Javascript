const tabButton = document.getElementsByClassName('tab-button');
const tabContent = document.getElementsByClassName('tab-content');

for (let i = 0; i < tabButton.length; i++) {
  tabButton[i].addEventListener('click', () => {
    for (let j = 0; j < tabButton.length; j++) {
      tabButton[j].classList.remove('orange');
      tabContent[j].classList.remove('show');
    }
    tabButton[i].classList.add('orange');
    tabContent[i].classList.add('show');
  });
  console.log(i);
}

// 260309 start step2-8
