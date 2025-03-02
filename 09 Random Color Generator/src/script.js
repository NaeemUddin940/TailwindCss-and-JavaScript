const container = document.getElementById('container')


for (let i = 0; i < 30; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}


function randomColor(){
    const character = "0123456789abcdef"
    const colorCharacter = 6;
    let colorCode ="";
    for (let index = 0; index < colorCharacter; index++) {
        const randomNumber = Math.floor(Math.random() * character.length)
        colorCode += character.substring(randomNumber, randomNumber + 1)
    }  
    return colorCode;
}


const colorContainer = document.querySelectorAll('.color-container')
generateColors()
function generateColors(){
    colorContainer.forEach((colorContainer) => {
        const newColorCode = randomColor();
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerText = "#" + newColorCode;
        
    });
}