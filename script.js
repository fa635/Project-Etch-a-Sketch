




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
    

    while (isNaN(number) || number > 100 || number < 0) {
        number = prompt("Enter a valid number between 0 to 100");
    };



    for (let i = 0; i < number * number; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
        
        // 960 is the width and height of the grid
        const newWidth = (960 / number) + "px";
        square.style.width = newWidth;

        const newHeight = (960 / number) + "px";
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
            square.style.filter = "brightness(" + (x -= 10) + "%)"  
        });
        
        square.addEventListener("mouseout", () => {
            square.style.background = getRandomColor();
            square.style.filter = "brightness(" + (y -= 10) + "%)"
        });

        

        
    }
    
    let x = 100;
    let y = 100;

}






