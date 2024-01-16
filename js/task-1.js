// Отображение списка:
// Создайте веб-страницу с формой для ввода продуктов и кнопкой "Добавить".

// Интерактивный ввод:
// Реализуйте функциональность, позволяющую пользователю вводить названия продуктов в текстовое поле.

// Добавление продуктов:
// Добавьте обработчик события для кнопки "Добавить", который будет добавлять новый продукт в список.

// Отображение списка:
// Создайте элемент (например, <ul>), который будет отображать список добавленных продуктов.
// При каждом добавлении продукта, добавляйте новый элемент списка с его названием.

// Удаление продуктов:
// Добавьте кнопку удаления (<button>) к каждому элементу списка.
// Реализуйте функцию удаления продукта при клике на соответствующую кнопку.

const formElement = document.querySelector("#shoppingForm");
const productListElement = document.querySelector("#shoppingList");

function addRpoduct(event) {
  event.preventDefault();
  const inputElement = document.querySelector("#product");
  const listItemElement = document.createElement("li");
  listItemElement.style.display = "flex";
  listItemElement.style.margin = "5px";
  const textElement = document.createElement("p");
  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Удалить";
  const btnDone = document.createElement("button");
  btnDone.textContent = "Готово";
  btnDone.addEventListener(
    "click",
    (event) => (textElement.style.backgroundColor = "green")
  );
  btnRemove.addEventListener("click", (event) => listItemElement.remove());
  if (inputElement.value.trim()) {
    textElement.textContent = inputElement.value;
    listItemElement.append(textElement);
    listItemElement.append(btnRemove);
    listItemElement.prepend(btnDone);

    productListElement.append(listItemElement);
  }
  formElement.reset();
}

formElement.addEventListener("submit", addRpoduct);
console.log();
