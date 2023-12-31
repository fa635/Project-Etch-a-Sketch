




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



