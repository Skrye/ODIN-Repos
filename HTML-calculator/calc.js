// HTML DOM Elements
const activeOperation = document.getElementById('active-operation');
const operationsLog = document.getElementById('operations-log');
const clearContainer = document.getElementById('clear-button');
const backButton = document.getElementById('backspace-button');
const clearAndBackSpace = document.getElementById('clear-and-backspace');
const buttonContainer = document.getElementById('button-container');
const numberContainer = document.getElementById('numbers');
const operatorContainer = document.getElementById('operators');
const memOperatorContainer = document.getElementById('memory-operators');
const memoryValue = document.getElementById('stored-memory')

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
	activeOperation.innerHTML = '';
	operationsLog.innerHTML = '';
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
	const memoryOption = ['MC', 'M+', 'M-', 'MR'];
	const fullSize = [...numberButtons, ...operatorButtons, ...memoryOption, 'Clear', 'Bkspc'];
	for (let i = 0; i < fullSize.length; i++) {
		let button = document.createElement('button');
		// Button ID's for styling and buttonClicked behavior, click events
		setProperties(button, fullSize[i]);
		// Attach Buttons to Correct Container and row
		attachButton(button, numberButtons.indexOf(fullSize[i]));
	}
}
// Press buttons, stuff happens
	// Add to the active operation if the button pressed is a number
	// AND clear if equals was the last button pressed.
const numberPressed = function() {
	if (equalsPressed.value == true) {
		clear()
	}
	// Number Length Limit w/ new Array because pop
	let getNumber = activeOperation.innerHTML.split(' ')
	let numberLength = getNumber.pop().split('').length;
	if (numberLength >= 16 && this.id != 'Enter') {
		return null;
	}
	activeOperation.innerHTML += `${this.innerHTML}`;
	numberPressed.value = true;
	operatorPressed.value = false;
	equalsPressed.value = false;
}

const operatorPressed = function() {
	let operateThis =  activeOperation.innerHTML.split(' ');
	//disable * and / on empty equations
	if (operateThis[0] === '' && this.id == '*' || this.id == '/' && operateThis[0] === '') {
		return null;
	}
	if (operatorPressed.value == false) {
		activeOperation.innerHTML += ` ${this.innerHTML} `;
		console.log('here')
	} else {
			let newOperation = activeOperation.innerHTML.split(' ').slice();
			newOperation.splice(-2, 1, `${this.innerHTML}`);
			activeOperation.innerHTML = newOperation.join(' ');
		console.log('there')
	}
	numberPressed.value = false;
	operatorPressed.value = true;
	equalsPressed.value = false;
}

const equalsPressed = function() {
	let newNumber = '';
	let operateThis =  activeOperation.innerHTML.split(' ');
	while (operateThis.length > 2) {
		const [number1, operator, number2, ...rest] = operateThis;
		newNumber = operate(number1, operator, number2);
		operateThis = [newNumber, ...rest];
	}
	operationsLog.innerHTML += `${activeOperation.innerHTML} = <br>`;
	let logLength = operationsLog.innerHTML.split(`<br>`);
		if (logLength.length > 4) {
			let newLog1 = logLength.slice(-4, -3);
			let newLog2 = logLength.slice(-3, -2);
			let newLog3 = logLength.slice(-2, -1);
			operationsLog.innerHTML = `${newLog1} <br> ${newLog2} <br> ${newLog3} <br>`;
		}
	activeOperation.innerHTML = `${operateThis}`;
	numberPressed.value = false;
	operatorPressed.value = false;
	equalsPressed.value = true;
}

const positNegatePressed = function() {
	if (numberPressed.value == true) {
		let currentOperation = activeOperation.innerHTML.split(' ');
		let oldNumber = currentOperation.pop();
		if (oldNumber[0] >= 0) {
			let newNumber = -Math.abs(oldNumber)
			currentOperation.push(newNumber)
		} else if (oldNumber < 0) {
			let newNumber = Math.abs(oldNumber)
			currentOperation.push(newNumber)
		}
		numberPressed.value = true;
		activeOperation.innerHTML = currentOperation.join(' ');
	}
}

const decimalPressed = function() {
	let currentOperation = activeOperation.innerHTML.split(' ');
	let currentNumber = currentOperation.pop();
	let hasDecimal = currentNumber.includes('.');
	if (hasDecimal == false) {
		activeOperation.innerHTML += '.';
	} else {
		return null;
	}
	numberPressed.value = false;
	operatorPressed.value = false;
	equalsPressed.value = false;
}

const backspacePressed = function() {
	let currentOperation = activeOperation.innerHTML.split('');
	// backpace for numbers
	let backSpaced = currentOperation.pop()
	// backspsace for operators
	if (backSpaced == ' ') {
		currentOperation.pop();
		currentOperation.pop();
	}
	activeOperation.innerHTML = currentOperation.join('');
	numberPressed.value = false;
	operatorPressed.value = false;
	equalsPressed.value = false;
}

const memoryOperations = function() {
	let activeOp = activeOperation.innerHTML.split(' ')
	let activeNumber = activeOp.pop();
	memoryOperations.value = memoryOperations.value || 0;
	switch (this.id) {
		case 'memAdd':
			memoryOperations.value += Number(activeNumber);
			memoryValue.innerHTML = memoryOperations.value;
			break;
		case 'memSubstract':
			memoryOperations.value -= Number(activeNumber);
			memoryValue.innerHTML = memoryOperations.value;
			break;
		case 'memRecall':
			activeOp.push(memoryOperations.value);
			activeOperation.innerHTML = activeOp.join(' ');
			break;
		case 'memClear':
			memoryOperations.value = 0;
			memoryValue.innerHTML = '';
			break;
		default:
			return null;
	}
}

const setProperties = (button, x) => {
	button.innerHTML = `${x}`;
	switch (x) {
		case '0':
			button.setAttribute('id', '0');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '1':
			button.setAttribute('id', '1');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '2':
			button.setAttribute('id', '2');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '3':
			button.setAttribute('id', '3');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '4':
			button.setAttribute('id', '4');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '5':
			button.setAttribute('id', '5');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '6':
			button.setAttribute('id', '6');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '7':
			button.setAttribute('id', '7');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '8':
			button.setAttribute('id', '8');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '9':
			button.setAttribute('id', '9');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', numberPressed);
			break;
		case '.':
			button.setAttribute('id', 'Decimal');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', decimalPressed);
			break;
		case '=':
			button.setAttribute('id', 'Enter');
			button.classList.add('number', 'button', 'key');
			button.addEventListener('click', equalsPressed);
			break;
		case '+':
			button.setAttribute('id', '+');
			button.classList.add('operator', 'button', 'key');
			button.addEventListener('click', operatorPressed);
			break;
		case '*':
			button.setAttribute('id', '*');
			button.classList.add('operator', 'button', 'key');
			button.addEventListener('click', operatorPressed);
			break;
		case '/':
			button.setAttribute('id', '/');
			button.classList.add('operator', 'button', 'key');
			button.addEventListener('click', operatorPressed);
			break;
		case '-':
			button.setAttribute('id', '-');
			button.classList.add('operator', 'button', 'key');
			button.addEventListener('click', operatorPressed);
			break;
		case '+/-':
			button.setAttribute('id', 'posit-negate');
			button.classList.add('operator', 'button');
			button.addEventListener('click', positNegatePressed);
			break;
		case 'Clear':
			button.setAttribute('id', 'Delete');
			button.classList.add('clear', 'button', 'key');
			button.addEventListener('click', clear);
			break;
		case 'Bkspc':
			button.setAttribute('id', 'Backspace');
			button.classList.add('backspace', 'button', 'key');
			button.addEventListener('click', backspacePressed);
			break;
		case 'MC':
			button.setAttribute('id', 'memClear');
			button.classList.add('memory', 'button');
			button.addEventListener('click', memoryOperations);
			break;
		case 'M+':
			button.setAttribute('id', 'memAdd');
			button.classList.add('memory', 'button');
			button.addEventListener('click', memoryOperations);
			break;
		case 'M-':
			button.setAttribute('id', 'memSubstract');
			button.classList.add('memory', 'button');
			button.addEventListener('click', memoryOperations);
			break;
		case 'MR':
			button.setAttribute('id', 'memRecall');
			button.classList.add('memory', 'button');
			button.addEventListener('click', memoryOperations);
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
		case 'backspace':
			backButton.appendChild(button);
			break;
		case 'memory':
			memOperatorContainer.appendChild(button);
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
make it look nice (keys are responsive for buttons, change colors of operators and equals signs?)
PEMDAS Mode

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
backspace button
disable decimals after 1 is used per number
Memory Buttons
*/
