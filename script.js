let container = document.querySelector("#container");
let button = document.createElement("button");

container.appendChild(button);
button.textContent = "Click Me!"

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("gridBox");
    container.appendChild(newDiv);
};

//Add new styling functionality based on user input. Change flex-basis and height (make sure to take gap into account)//

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

    for (let i = 0; i < (num * num); i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridBox");
        container.appendChild(newDiv);
    }
}


