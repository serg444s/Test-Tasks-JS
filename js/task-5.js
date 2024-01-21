// Страница должна содержать кнопку и элемент
// для отображения текущего количества кликов.

// При каждом клике на кнопку счетчик должен увеличиваться на 1.

// Если количество кликов кратно 5, цвет кнопки должен измениться на другой.

// Предусмотрите возможность сброса счетчика и цвета кнопки.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnClick = document.querySelector(".ckick");
const span = document.querySelector(".span");
const btnCansel = document.querySelector(".cansel");

btnClick.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  span.textContent = Number(span.textContent) + 1;
  if (!(span.textContent % 5)) {
    btnClick.style.backgroundColor = getRandomHexColor();
  }
}

btnCansel.addEventListener("click", onBtnCanselClick);

function onBtnCanselClick(event) {
  span.textContent = 0;
  btnClick.style.backgroundColor = "transparent";
}
