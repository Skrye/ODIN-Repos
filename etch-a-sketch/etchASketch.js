const container = document.querySelector(".container");

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
			pixel.classList.add("pixel");
			pixel.addEventListener("mousemove", function() { pixel.classList.add("black") })
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
