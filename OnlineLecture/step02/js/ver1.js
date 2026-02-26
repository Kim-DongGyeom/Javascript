// ver1 onclick

const alertBox = document.getElementById('alert');

function btn(state) {
  alertBox.style.display = state;
}
function LoginBtn(id, msg, display) {
  const tag = document.getElementById(id);
  //   console.log(tag);

  tag.innerHTML = msg + 'を入力してください。';
  btn(display);
}
