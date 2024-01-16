const formElement = document.querySelector("#calculatorForm");
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const result = document.querySelector("#calcResult");
const operator = document.querySelector("#operator");

function calculator(event) {
  event.preventDefault();
  if (operator.value === "+") {
    result.textContent = Number(input1.value) + Number(input2.value);
  }
  if (operator.value === "-") {
    result.textContent = Number(input1.value) - Number(input2.value);
  }
  if (operator.value === "*") {
    result.textContent = Number(input1.value) * Number(input2.value);
  }
  if (operator.value === "/") {
    result.textContent = Number(input1.value) / Number(input2.value);
  }
  formElement.reset();
}

formElement.addEventListener("submit", calculator);
