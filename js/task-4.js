// Отображение списка событий: ++++
// Создайте веб-страницу с элементом списка (<ul>), в котором каждый элемент представляет событие
// (например, "Конференция", "Мастер-класс", "Встреча").

// Интерактивный аккордеон: +++
// Реализуйте функциональность аккордеона с использованием делегирования событий.
// При клике на заголовок события (<li>), показывайте или скрывайте подробное описание события.

// Ограничение открытых событий:  +++
// Добавьте функциональность, которая позволяет открывать только одно событие за раз.
// При открытии другого события, предыдущее должно закрываться.

// Стилизация:  +++
// Стилизуйте аккордеон для лучшего визуального восприятия
// (например, добавьте анимации для плавного открытия и закрытия).

// Дополнительные детали:
// Добавьте дополнительные детали,
// такие как иконки или цветовое выделение заголовков событий при открытии.

const taskList = document.querySelector("#eventList");

function onTaskClick(event) {
  if (event.target.nodeName !== "H2") {
    return;
  }

  const currentText = event.target.nextElementSibling;
  const allText = document.querySelectorAll(".text");
  const imgEl = document.querySelector(".image");
  const imgAll = document.querySelectorAll(".image");

  if (currentText.classList.contains("no-active")) {
    allText.forEach((element) => {
      element.classList.add("no-active");
    });
    currentText.classList.remove("no-active");

    imgAll.forEach((img) => {
      img.classList.add("no-active");
    });
    currentText.nextElementSibling.classList.remove("no-active");
  } else {
    currentText.classList.add("no-active");
    currentText.nextElementSibling.classList.add("no-active");
  }
}

taskList.addEventListener("click", onTaskClick);
