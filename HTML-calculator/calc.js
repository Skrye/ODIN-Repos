const add = function(num1, num2) {
  return num1 + num2;
};
const subtract = function(num1, num2) {
  return num1 - num2;
};
const multiply = function(num1, num2) {
  return num1 * num2
};
const divide = function(num1, num2) {
  return num1 / num2;
}
const operate = function(number1, operator, number2, ...rest) {
	let num1 = Number(number1);
	let num2 = Number(number2);
	
  switch (operator) {
    case "+":
      return add(num1, num2)
      break;
    case "-":
      return subtract(num1, num2)
      break;
    case "*":
      return multiply(num1, num2)
      break;
    case "/":
      if (num2 === 0) return null
      else return divide(num1, num2)
      break;
    default:
  }
}

const numberPad = document.querySelector(".number-pad");
const operatorPad = document.querySelector(".operator-pad");
const activeOperation = document.querySelector(".active-operation");
const operationsLog = document.querySelector(".operations-log");
const clearPad = document.querySelector(".clear-button")
let newNumber = "";
let lastInput = "";

const clearButton = function() {
	let button = document.createElement("button");
	button.classList.add("clear-button");
	button.innerHTML = "C";
	button.addEventListener("click", clear);
	clearPad.appendChild(button)
}

function makeRows(element) {
  for (let i = 0; i < 4; i++) {
    let row = document.createElement("row");
    row.classList.add("row");
    row.classList.add(`${element.classList[0]}`);
    element.appendChild(row);
  }
}

makeRows(numberPad);
makeRows(operatorPad);
clearButton();

const numberButtons = ["0", ".", "=", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operatorButtons = ["+", "-", "*", "/"];

const makeButtons = function(element, array) {
  let chunkSize = array.length / 4;
  let rows = document.querySelectorAll(`row.${element.classList[0]}`);
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize);
    for (let j = 0; j < chunk.length; j++) {
      let button = document.createElement("button");
      button.classList.add("button");
			button.classList.add("keys");
      button.classList.add(`${element.classList[0]}`);
      button.setAttribute("id", `${chunk[j]}`)
      button.innerHTML = `${chunk[j]}`;
      if (element == numberPad && chunk[j] != "=") {
      	button.addEventListener("click", activeNumber);
        rows[Math.round((i + 1) / (rows.length))].appendChild(button);
      } else if (element == numberPad && chunk[j] == "=") {
				button.addEventListener("click", equalsPressed);
				rows[Math.round((i + 1) / (rows.length))].appendChild(button);
			}else if (element == operatorPad) {
				button.addEventListener("click", activeOperator);
        rows[i % 4].appendChild(button);
      }
    }
  }
}

function activeNumber() {
	if (lastInput == "equals") {
		clear();
	}
	activeOperation.innerHTML += `${this.id}`;
	lastInput = "number";
}
function activeOperator() {
	activeOperation.innerHTML += ` ${this.id} `
	lastInput = "operator"
}
function equalsPressed() {
		operationsLog.innerHTML += `${activeOperation.innerHTML} = <br>`;
		let operateThis =  activeOperation.innerHTML.split(" ");
		while (operateThis.length > 1) {
			const [number1, operator, number2, ...rest] = operateThis;
			newNumber = operate(number1, operator, number2);
			operateThis = [newNumber, ...rest];
		}
		activeOperation.innerHTML = `${newNumber}`;
		lastInput = "equals";
}
function clear() {
	operationsLog.innerHTML = "";
	activeOperation.innerHTML = "";
}

makeButtons(numberPad, numberButtons);
makeButtons(operatorPad, operatorButtons);
