const etchASketch = document.querySelector(".flex-grid");

function newSketchpad(number) {
    for (let i = 0; i < (number); i++) {
        etchASketch.innerHTML += `<div class="column"></div>`;
    }
    let columns = document.querySelectorAll(".column");
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            columns[i].innerHTML += `<div class="pixel"></div>`;
        }
    }
}

function sketch() {
    let pixels = document.querySelectorAll(".pixel")
    pixels.addEventListener("mouseover", (e) => {pixels.classList.add("black")});
}

newSketchpad(16); // Initial grid of 16 squares
sketch();