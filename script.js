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
  if (b === 0)
    return `ERROR
  `;
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

// Variable working with AC button
const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
  data = ``;
  display.textContent = data;
  erase.classList.add("clickedAc");
  setTimeout(() => {
    erase.classList.remove("clickedAc");
  }, 125);
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
const buttons = document.querySelectorAll(".digit");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    data += button.textContent;
    showDisplay();
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 125);
  })
);

// Clicking on operators make them works and operate the calculation as second operateur
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) =>
  operator.addEventListener("click", () => {
    if (firstNum && operateur && data) {
      secondNum = data;
      firstNum = Number(firstNum);
      secondNum = Number(secondNum);
      let result = operate(operateur, firstNum, secondNum);
      firstNum = result;
      data = ``;
      secondNum = null;
      operateur = operator.textContent;
      display.textContent = result + operateur;
    } else {
      firstNum = data;
      operateur = operator.textContent;
      data = "";
      display.textContent = firstNum + operateur;
      operator.classList.add("clicked");
      setTimeout(() => {
        operator.classList.remove("clicked");
      }, 125);
    }
  })
);

// Operate the calculation and show the result
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  secondNum = data;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  let result = operate(operateur, firstNum, secondNum);
  display.textContent = result;
  operateur = null;
  data = result;
  firstNum = data;
  equal.classList.add("clickedEqual");
  setTimeout(() => {
    equal.classList.remove("clickedEqual");
  }, 125);
});
