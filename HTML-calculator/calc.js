// HTML DOM Elements
const activeOperation = document.getElementById('active-operation');
const operationsLog = document.getElementById('operations-log');
const clearContainer = document.getElementById('clear-button');
const buttonContainer = document.getElementById('button-container');
const numberContainer = document.getElementById('numbers');
const operatorContainer = document.getElementById('operators');

/* Memory Options to be implemented after I learn how to add it via state-based
   / Non Global variable effect instead of "Flip switch, remake all the buttons".
const memoryValue = document.getElementByID('stored-memory');
let memoryOptionSwitch = document.getElementById('memory-switch');
const memoryOption = ['MC', 'M+', 'M-', 'MR', 'MU']; */

//Calculator Functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const operate = (number1, operator, number2) => {
	let num1 = Number(number1);
	let num2 = Number(number2);
	switch (operator) {
		case "+":
			return add(num1, num2);
		case "-":
			return subtract(num1, num2);
		case "*":
			return multiply(num1, num2);
		case "/":
			if (num2 === 0) return null;
			else return divide(num1, num2);
			break;
		default:
	}
}
const clear = () => {
	clear.value = clear.value || 0;
	if (clear.value == 0) {
		activeOperation.innerHTML = '';
		clear.value = 1;
	}
	if (clear.value == 1) {
		activeOperation.innerHTML = '';
		operationsLog.innerHTML = '';
		clear.value = 0;
	}
}

// Page Setup
const init = () => {
	makeButtons();
	window.addEventListener('keyup', unPressed);
	window.addEventListener('keydown', keyPressed);
}
const makeButtons = function() {
	const numberButtons = ['0', '.', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const operatorButtons = ['+', '-', '*', '/', '+/-'];
	const fullSize = [...numberButtons, ...operatorButtons, 'Clear'];
	for (let i = 0; i < fullSize.length; i++) {
		let button = document.createElement('button');
		// Button ID's for styling and buttonClicked behavior
		setProperties(button, fullSize[i]);
		// Add Event Listeners/Button functionality
		button.addEventListener('click', addToOperation);
		// Attach Buttons to Correct Container and row
		attachButton(button, numberButtons.indexOf(fullSize[i]));
	}
}
const addToOperation = function() {
	addToOperation.value = addToOperation.value || '';
	let newNumber = '';
	let operateThis =  activeOperation.innerHTML.split(' ');
	// Add to the active operation if the button pressed is a number or decimal
	// AND clear if equals was the last button pressed.
	if (this.classList[0] == 'number' && this.id != 'Enter') {
		if (addToOperation.value == 'equals') {
			clear();
		}
		activeOperation.innerHTML += `${this.innerHTML}`;
		addToOperation.value = 'number';
	}
	// take the current equation, reduce it to one number, log the old equation and display
	// the new number as the start of a new equation.
	if (this.id == 'Enter' && addToOperation.value == 'number') {
		while (operateThis.length > 2) {
			const [number1, operator, number2, ...rest] = operateThis;
			newNumber = operate(number1, operator, number2);
			operateThis = [newNumber, ...rest];
		}
		// Running log of old equations
		operationsLog.innerHTML += `${activeOperation.innerHTML} = <br>`;
		let logLength = operationsLog.innerHTML.split(`<br>`);
		if (logLength.length > 4) {
			let newLog1 = logLength.slice(-4, -3);
			let newLog2 = logLength.slice(-3, -2);
			let newLog3 = logLength.slice(-2, -1);
			operationsLog.innerHTML = `${newLog1} <br> ${newLog2} <br> ${newLog3} <br>`;
		}
		activeOperation.innerHTML = `${operateThis}`;
		addToOperation.value = 'equals';
	}
	//disable * and / on empty equations
	if (operateThis[0] === '' && this.id == '*' || this.id == '/' && operateThis[0] === '') {
		return null;
	}
	// Add or replace an operator in the current equation
	// !!! newOperation puts in commas when splicing the array with more than one number. use join(' ').
	if (this.classList[0] == 'operator' && addToOperation.value != 'operator' && this.id != 'posit-negate') {
		activeOperation.innerHTML += ` ${this.innerHTML} `;
		addToOperation.value = 'operator';
	} else if (this.classList[0] == 'operator' && addToOperation.value == 'operator' && this.id != 'posit-negate') {
			let newOperation = activeOperation.innerHTML.split(' ').slice();
			newOperation.splice(-2, 1, `${this.innerHTML}`);
			activeOperation.innerHTML = newOperation.join(' ');
			addToOperation.value = 'operator';
	}
	// negate or make positive current number
	if (this.id == 'posit-negate' && addToOperation.value == 'number') {
		let currentOperation = activeOperation.innerHTML.split(' ');
		let oldNumber = currentOperation.pop();
		if (oldNumber[0] >= 0) {
			let newNumber = -Math.abs(oldNumber)
			currentOperation.push(newNumber)
		} else if (oldNumber < 0) {
			let newNumber = Math.abs(oldNumber)
			currentOperation.push(newNumber)
		}
		addToOperation.value = 'number';
		activeOperation.innerHTML = currentOperation.join(' ');
	}
	// Clear the current equation or current equation + log
	if (this.classList[0] == 'clear') {
		clear();
	}
}
const setProperties = (button, x) => {
	button.innerHTML = `${x}`;
	switch (x) {
		case '0':
			button.setAttribute('id', '0');
			button.classList.add('number', 'button', 'key');
			break;
		case '1':
			button.setAttribute('id', '1');
			button.classList.add('number', 'button', 'key');
			break;
		case '2':
			button.setAttribute('id', '2');
			button.classList.add('number', 'button', 'key');
			break;
		case '3':
			button.setAttribute('id', '3');
			button.classList.add('number', 'button', 'key');
			break;
		case '4':
			button.setAttribute('id', '4');
			button.classList.add('number', 'button', 'key');
			break;
		case '5':
			button.setAttribute('id', '5');
			button.classList.add('number', 'button', 'key');
			break;
		case '6':
			button.setAttribute('id', '6');
			button.classList.add('number', 'button', 'key');
			break;
		case '7':
			button.setAttribute('id', '7');
			button.classList.add('number', 'button', 'key');
			break;
		case '8':
			button.setAttribute('id', '8');
			button.classList.add('number', 'button', 'key');
			break;
		case '9':
			button.setAttribute('id', '9');
			button.classList.add('number', 'button', 'key');
			break;
		case '.':
			button.setAttribute('id', '.');
			button.classList.add('number', 'button', 'key');
			break;
		case '=':
			button.setAttribute('id', 'Enter');
			button.classList.add('number', 'button', 'key');
			break;
		case '+':
			button.setAttribute('id', '+');
			button.classList.add('operator', 'button', 'key');
			break;
		case '*':
			button.setAttribute('id', '*');
			button.classList.add('operator', 'button', 'key');
			break;
		case '/':
			button.setAttribute('id', '/');
			button.classList.add('operator', 'button', 'key');
			break;
		case '-':
			button.setAttribute('id', '-');
			button.classList.add('operator', 'button', 'key');
			break;
		case '+/-':
			button.setAttribute('id', 'posit-negate');
			button.classList.add('operator', 'button');
			break;
		case 'Clear':
			button.setAttribute('id', 'Delete');
			button.classList.add('clear', 'button', 'key');
			break;
		default:
			return null;
	}
}
const attachButton = (button, x) => {
	switch (button.classList[0]) {
		case 'number':
			let rows = document.querySelectorAll(".number-row");
			rows[Math.floor(x/3)].appendChild(button);
			break;
		case 'operator':
			operatorContainer.appendChild(button);
			break;
		case 'clear':
			clearContainer.appendChild(button);
			break;
		default:
			return null;
	}
}
const keyPressed = (e) => {
	const pressed = document.getElementById(`${e.key}`);
	pressed.click();
	pressed.classList.add('pressed');
	console.table(pressed)
}
const unPressed = (e) => {
	const pressed = document.getElementById(`${e.key}`);
	pressed.classList.remove('pressed');
}

init()

/* To-Do:
character limit for numbers (8?)
backspace button (numbers only)
disable decimals after 1 is used per number
make it look nice (keys are responsive for buttons, change colors of operators and equals signs?)
PEMDAS Mode
Memory Buttons

Done:
Buttons created, assigned unique IDs, and attached to different portions of calculator
logic for calculator done (take input numbers and operators into a string, 
	split at spaces provided by operator, run through a function to reduce to a single value,
	 make that the new first number, and log the old equation)
make operators replace each other if no new number is put in
clear the calculator if a new number is input after hitting equals and nothing else is input 
introduce a log limit
disable "*" and "/" operators if activeOperation is empty
fix styling for different devices (calculator width based on screen size)
+/- or positive and negative function
remove focus outlines (may replace in the future, but this app is not
	designed to be navigated like a web page)
*/
