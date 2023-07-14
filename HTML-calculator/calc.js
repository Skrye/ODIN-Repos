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

const numberPad = document.getElementsByClassName("number");
const operatorPad = document.getElementsByClassName("operator");

function makeRows(element) {
  for (let i = 0; i < 4; i++) {
    let row = document.createElement("row");
    row.classList.add("row");
    element.appendChild(row);
  }
}

makeRows(numberPad);
makeRows(operatorPad);

/*
const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let factorialStart = 1;
  let factorialCurrent = number;
  while (number > factorialStart) {
    factorialCurrent *= factorialStart;
    factorialStart++;
  }
  if (number > 0) {
    return factorialCurrent;
  } else {
    return 1;
  }
};

const sum = function(array) {
  let total = 0;
  for (let i = 0; i <array.length; i += 1) {
    total += array[i];
  }
  return total;
};
*/