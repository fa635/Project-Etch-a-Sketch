




const container = document.querySelector("div.main");


// 16 * 16 grid = 256 squares
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square")
    container.appendChild(square);

    //hoover effect
    square.addEventListener("mouseover", () => {
        square.style.background = "green";
    });
    
    square.addEventListener("mouseout", () => {
        square.style.background = "white";
    });
}



const button = document.querySelector("button");
button.addEventListener("click", getNewSquares);


function getNewSquares(number) {
    document.querySelectorAll(".square").forEach(div => div.remove());
    number = prompt("up to 100");
    for (let i = 0; i < number * number; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square")
        container.appendChild(square);
    
        //hoover effect
        square.addEventListener("mouseover", () => {
            square.style.background = "green";
        });
        
        square.addEventListener("mouseout", () => {
            square.style.background = "white";
        });
    }
}






