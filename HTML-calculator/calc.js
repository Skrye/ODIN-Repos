// HTML DOM Elements
const activeOperation = document.getElementById('active-operation');
const operationsLog = document.getElementById('operations-log');
const clearContainer = document.getElementById('clear-button');
const buttonContainer = document.getElementById('button-container');
const numberContainer = document.getElementById('numbers');
const operatorContainer = document.getElementById('operators');
/* Memory Options to be implemented after I learn how to add it via state-based effect
   instead of "Flip switch, remake all the buttons".
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
	const fullSize = [...numberButtons, ...operatorButtons, 'C/CE'];
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
	if (this.id == 'Enter') {
		let operateThis =  activeOperation.innerHTML.split(' ');
		while (operateThis.length > 1) {
			const [number1, operator, number2, ...rest] = operateThis;
			newNumber = operate(number1, operator, number2);
			operateThis = [newNumber, ...rest];
			console.log(newNumber);
		}
		operationsLog.innerHTML += `${activeOperation.innerHTML} = <br>`;
		activeOperation.innerHTML = `${newNumber}`;
		addToOperation.value = 'equals';
	}
	if (this.classList[0] == 'operator') {
		activeOperation.innerHTML += ` ${this.innerHTML} `;
		addToOperation.value = 'operator';
	}
	if (this.classList[0] == 'number' && this.id != 'Enter') {
		activeOperation.innerHTML += `${this.innerHTML}`;
		addToOperation.value = 'number';
	}
	if (this.classList[0] == 'clear') {
		clear();
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
			button.setAttribute('id', 'positive-negative');
			button.classList.add('operator', 'button');
			break;
		case 'C/CE':
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

init()