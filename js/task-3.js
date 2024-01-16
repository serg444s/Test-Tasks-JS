// Отображение изображений:
// Создайте веб-страницу с галереей изображений (например, несколько <img> элементов).

// Интерактивность при клике:
// Реализуйте функциональность, которая будет увеличивать счетчик кликов при каждом клике на изображении.

// Отображение счетчика:
// Добавьте элемент (например, <span>), который будет отображать текущее количество кликов.

// Сброс счетчика:
// Добавьте кнопку "Сброс", которая обнулит счетчик кликов.

// Подсветка активного изображения:
// Подсветите текущее изображение, на котором произошел последний клик, чтобы пользователь видел, на каком изображении он кликнул последним.

const imageGallery = document.querySelector("#imageGallery");
const btnCreate = document.querySelector(".button-create");
const inputNumber = document.querySelector("input");
const count = document.querySelector("#clickCount");
const btnCansel = document.querySelector(".button-remove");

function onClickGalleryCreate(event) {
  imageGallery.innerHTML = "";
  const value = parseInt(inputNumber.value);
  const marcup = [];

  for (let i = 1; i <= value; i++) {
    const src = `https://source.unsplash.com/500x500/?random=${i}&eat,bread,dish,meet,egg;`;
    const item = `<li class="item-gallery"><img class="img-gallery" src="${src}" alt="image" /></li>`;
    marcup.push(item);
  }
  imageGallery.innerHTML = marcup.join("");
}

function onBtnClickCount(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  count.textContent = Number(count.textContent) + 1;
  const currentImg = document.querySelector(".is-active");
  if (currentImg) {
    currentImg.classList.remove("is-active");
  }
  event.target.classList.add("is-active");
}

function onBtnCansel(event) {
  imageGallery.innerHTML = "";
  count.textContent = 0;
  inputNumber.value = "";
}

btnCreate.addEventListener("click", onClickGalleryCreate);
imageGallery.addEventListener("click", onBtnClickCount);
btnCansel.addEventListener("click", onBtnCansel);
