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
let memory = ``;
let justCalculated = false;

function operate(operator, a, b) {
  if (operator === `+`) return add(a, b);
  if (operator === `-`) return subtract(a, b);
  if (operator === `*`) return multiply(a, b);
  if (operator === `/`) return divide(a, b);
  return `Invalid`;
}

let display = document.createElement("p");
display.textContent = data;

let displayTop = document.querySelector(".displayTop");
displayTop.textContent = memory;

const show = document.querySelector(".displayCalc");
show.appendChild(display);

// AC button
const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
  data = ``;
  display.textContent = data;
  displayTop.textContent = ``;
  firstNum = null;
  secondNum = null;
  oeprateur = null;
  memory = ``;
  justCalculated = false;
  erase.classList.add("clickedAc");
  setTimeout(() => {
    erase.classList.remove("clickedAc");
  }, 125);
});

// Update display
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
    if (justCalculated) {
      data = ``;
      memory = ``;
      displayTop.textContent = ``;
      justCalculated = false;
    }

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
    // Si on vient de faire un "=", on redémarre un calcul à partir du résultat affiché
    if (justCalculated) {
      operateur = operator.textContent;
      memory = display.textContent + operateur;
      displayTop.textContent = memory;
      firstNum = display.textContent;
      data = ``;
      justCalculated = false;
      display.textContent = firstNum + operateur;
      return;
    }

    if (firstNum && operateur && data) {
      secondNum = data;
      firstNum = Number(firstNum);
      secondNum = Number(secondNum);
      let result = operate(operateur, firstNum, secondNum);
      memory += secondNum + operator.textContent;
      data = ``;
      secondNum = ``;
      displayTop.textContent = memory;
      firstNum = result;
      operateur = operator.textContent;
      display.textContent = result + operateur;
    } else {
      firstNum = data;
      operateur = operator.textContent;
      memory += data + operateur;
      displayTop.textContent = memory;
      data = ``;
      display.textContent = firstNum + operateur;
      operator.classList.add("clicked");
      setTimeout(() => {
        operator.classList.remove("clicked");
      }, 125);
    }
  })
);

// 🟰 BOUTON ÉGAL
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (!firstNum || !operateur || data === ``) return;

  secondNum = data;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  let result = operate(operateur, firstNum, secondNum);

  display.textContent = result;
  displayTop.textContent = memory + secondNum + " =";

  // Préparer pour le prochain calcul
  operateur = null;
  data = result;
  firstNum = data;
  justCalculated = true;

  equal.classList.add("clickedEqual");
  setTimeout(() => {
    equal.classList.remove("clickedEqual");
  }, 125);
});
