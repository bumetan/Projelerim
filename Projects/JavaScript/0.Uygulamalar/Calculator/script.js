const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");
const value = element.value;

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();
function updateDisplay() {
  display.value = displayValue;
}
keys.addEventListener("click", function (e) {
  const element = e.target;
  if (!element.matches("button")) return;
  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      handleOperator(value);
      break;
    case ".":
      inputDecimal();
      break;
    case "clear":
      clear();
      break;
    default:
      inputNumber(element.value);
  }
  updateDisplay();
});
function handleOperator(nextOperator) {
  const value = parseFloat(displayValue);

  if (operator && waitingForSecondValue) {
    operator = nextOperator;
    return;
  }

  if (firstValue === null) {
    firstValue = value;
  } else if (operator) {
    const result = calculate(firstValue, value, operator);
    displayValue = `${parseFloa(result.toFixed(7))}`;
    firstValue = result;
  }

  waitingForSecondValue = true;
  operator = nextOperator;
}
function calculate(first, second, operator) {
  if (operator === "+") return first + second;
  else if (operator === "-") {
    return first - second;
  } else if (operator === "*") {
    return first * second;
  } else if (operator === "/") {
    return first / second;
  }
  return second;
}
function inputNumber(num) {
  if (waitingForSecondValue) {
    displayValue = num;
    waitingForSecondValue = false;
  } else {
    displayValue = displayValue === "0" ? num : displayValue + num;
  }
}
function inputDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}
function clear() {
  displayValue = "0";
}
function carp(parametre1, parametre2) {
  if (parametre1 != null && parametre2 != null) {
    if (parametre1 === Number && parametre2 === Number) {
      let sonuc = parametre1 * parametre2;
      return sonuc;
    }
  }
  console.log(sonuc);
}
