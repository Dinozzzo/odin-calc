function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return `Can't divide by 0.`;
  return a / b;
}

let firstNum = 3;
let operator = `+`;
let nextNum = 5;

function operate(operator, a, b) {
  if (operator === `+`) return add(a, b);
  if (operator === `-`) return subtract(a, b);
  if (operator === `*`) return multiply(a, b);
  if (operator === `/`) return divide(a, b);
  return `Invalid`;
}

let display = document.createElement("p");
display.textContent = `0`;

const buttons = document.querySelectorAll(".digit");

buttons.forEach((button) =>
  button.addEventListener(
    "click",
    () => (display.textContent = button.textContent)
  )
);

const show = document.querySelector(".displayCalc");
show.appendChild(display);
