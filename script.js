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

let firstNum = null;
let operateur = null;
let secondNum = null;

let data = ``;

function operate(operator, a, b) {
  if (operator === `+`) return add(a, b);
  if (operator === `-`) return subtract(a, b);
  if (operator === `*`) return multiply(a, b);
  if (operator === `/`) return divide(a, b);
  return `Invalid`;
}

let display = document.createElement("p");
display.textContent = data;

const show = document.querySelector(".displayCalc");
show.appendChild(display);

const buttons = document.querySelectorAll(".digit");

const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
  data = ``;
  display.textContent = data;
});

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    data += button.textContent;
    display.textContent = data;
    console.log(data);
  })
);

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) =>
  operator.addEventListener("click", () => {
    operateur = operator.textContent;
    // display.textContent = data + operateur;
    firstNum = data;
    data = ``;
    console.log(operateur);
    console.log(firstNum);
  })
);

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  secondNum = data;
  console.log(secondNum);
});
