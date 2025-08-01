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

let data = `0`;

function operate(operator, a, b) {
  if (operator === `+`) return add(a, b);
  if (operator === `-`) return subtract(a, b);
  if (operator === `*`) return multiply(a, b);
  if (operator === `/`) return divide(a, b);
  return `Invalid`;
}

let display = document.createElement("p");
display.textContent = data;

const buttons = document.querySelectorAll(".digit");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (data === `0`) {
      data = button.textContent;
    } else {
      data += button.textContent;
    }
    display.textContent = data;
    console.log(data);
  })
);

const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
  data = `0`;
  display.textContent = data;
});

const show = document.querySelector(".displayCalc");
show.appendChild(display);
