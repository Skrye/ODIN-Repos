const container = document.querySelector(".container");

let rgbSwitch = document.getElementById("rgbCheck");
let gradualSwitch = document.getElementById("gradualCheck");

function randomNumberGenerator(minNum, maxNum) {
	const min = Math.ceil(minNum);
	const max = Math.floor(maxNum);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRGB() {
	return randomNumberGenerator (0,255);
}

function sketchGrid(number) {
container.innerHTML = "";
	for (let i = 0; i < number; i++) {
		let column = document.createElement("div");
		column.classList.add("column");
		container.appendChild(column);
	}
	let columns = document.querySelectorAll(".column");
	for (let i = 0; i < number; i++) {
		for (let j = 0; j < number; j++) {
			let pixel = document.createElement("div");
			pixel.classList.add("pixel")
			pixel.addEventListener("mouseenter", function() {
				if (rgbSwitch.checked == true) {
					pixel.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
				} else {
					pixel.style.backgroundColor = "black";
				}
				if (gradualSwitch.checked == true) {
					if (pixel.style.opacity < 1) {
						let currentOpacity = Number(pixel.style.opacity) + 0.1;
						console.log(currentOpacity);
						pixel.style.opacity = currentOpacity;
					}
				} else {
					pixel.style.opacity = 1.0;
				}
			});
			columns[i].appendChild(pixel);
		}
	}
}

sketchGrid(16); //initial grid of 16 squares

function newGrid() {
	let gridSize = prompt(16, "Enter a number between 1-100");
	if (gridSize >= 1 && gridSize <= 100) {
		sketchGrid(gridSize);
	} else {
		newGrid();
	}
}
