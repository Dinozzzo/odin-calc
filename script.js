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

// Variable working with AC button
const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
  data = ``;
  display.textContent = data;
});

// Function showing numbers/operators in the display
function showDisplay() {
  if (operateur !== null) {
    display.textContent = firstNum + operateur + data;
  } else {
    display.textContent = data;
  }
}

// Clicking on buttons make them works
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    data += button.textContent;
    showDisplay();
    console.log(data);
  })
);

// Clicking on operators make them works
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) =>
  operator.addEventListener("click", () => {
    operateur = operator.textContent;
    firstNum = data;
    data = ``;
    showDisplay();
    console.log(operateur);
    console.log(firstNum);
  })
);

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  secondNum = data;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  console.log(secondNum);
  let result = operate(operateur, firstNum, secondNum);
  display.textContent = result;
  data = result;
});
