const container = document.querySelector("#container");
const button = document.createElement("button");

container.appendChild(button);
button.textContent = "Click Me!"

button.addEventListener('click', ()=> {
    let userInput = prompt("How many squares per side?");
    let squaresPerSide = Number(userInput);
    renderNewGrid(squaresPerSide);
});


for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("gridBox");
    container.appendChild(newDiv);

    newDiv.addEventListener('mouseover', () => {
        newDiv.setAttribute('style', 'background-color: orange;')});
    }

function renderNewGrid(num) {
    const removedDivs = document.querySelectorAll(".gridBox");

    removedDivs.forEach(div => {
        div.remove();
    });

    for (let i = 0; i < (num * num); i++) {
        let calculatedFlexBasis = (960 / num) - 4;
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridBox");
        newDiv.setAttribute('style', `flex-basis: ${calculatedFlexBasis}px; height: ${calculatedFlexBasis}px;`);
        container.appendChild(newDiv);

        newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = "orange";
    })
    }
}


