const container = document.querySelector(".container");

function sketchGrid(number) {
	for (let i = 0; i < number; i++) {
		let column = document.createElement("div");
		column.classList.add("column");
		document.querySelector(".container").appendChild(column);
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
