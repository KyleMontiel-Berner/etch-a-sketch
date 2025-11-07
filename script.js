let container = document.querySelector("#container");
let button = document.createElement("button");

container.appendChild(button);
button.textContent = "Click Me!"

for (let i = 0; i < 252; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("gridBox");
    container.appendChild(newDiv);
};

button.addEventListener('click', ()=> {
    let userInput = prompt("How many squares per side?");
    let squaresPerSide = Number(userInput);
    renderNewGrid(squaresPerSide);
});

function renderNewGrid(num) {
    const removedDivs = document.querySelectorAll(".gridBox");

    removedDivs.forEach(div => {
        div.remove();
    });

    for (let i = num; i < (num * num); i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridBox");
        container.appendChild(newDiv);
    }
}


