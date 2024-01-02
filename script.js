




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
button.addEventListener("click", getNewGrid);


function getNewGrid(number) {
    document.querySelectorAll(".square").forEach(div => div.remove());
    number = prompt("up to 100");
    for (let i = 0; i < number * number; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square")
        container.appendChild(square);
        
        // 16 is the width and height of the grid
        const newWidth = (16 / number) + "px";
        square.style.width = newWidth;

        const newHeight = (16 / number) + "px";
        square.style.height = newWidth;


    
        function getRandomColor() {
            let color = [ ];
            for (let i = 0; i < 3; i++) {

                color.push(Math.floor(Math.random() * 256))
                
            }
            
            return "rgb(" + color.join(", ") + ")";

        }
        

        //hoover effect
        square.addEventListener("mouseover", () => {
            square.style.background = getRandomColor();
        });
        
        square.addEventListener("mouseout", () => {
            square.style.background = getRandomColor();
        });

        
    }

    


    //16 / number of pixel
}






