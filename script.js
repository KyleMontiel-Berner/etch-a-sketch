let container = document.querySelector("#container");
let button = document.createElement("button");


button.addEventListener('click', ()=> {
    let userInput = prompt("How many squares per side?");
    let num = userInput.value;
    return num
});


for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("gridBox");
    container.appendChild(div);
}