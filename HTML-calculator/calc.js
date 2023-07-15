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

const operate = function(num1, operator, num2) {
    switch(operator) {
        case add:
            add(num1, num2)
            break;
        case subtract:
            subtract(num1, num2)
            break;
        case multiply:
            multiply(num1, num2)
            break;
        case divide:
            divide(num1, num2)
            break;
        default:
    }
}

const numberPad = document.querySelector(".number-pad");
const operatorPad = document.querySelector(".operator-pad");

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
			button.classList.add(`${element.classList[0]}`);
			button.setAttribute("id", `${chunk[j]}`)
			button.innerHTML = `${chunk[j]}`;
			if (element == numberPad) {
				rows[Math.round((i+1)/(rows.length))].appendChild(button);
			} else {
				rows[i%4].appendChild(button);
			}
		}
	}
}

makeButtons(numberPad, numberButtons);
makeButtons(operatorPad, operatorButtons);