document.addEventListener('DOMContentLoaded', () => {

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("main-container");
    document.body.appendChild(containerDiv);

    const pixelContainer = document.createElement("div");
    pixelContainer.classList.add("pixel-container");
    
    containerDiv.appendChild(pixelContainer);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button-div");
    containerDiv.appendChild(buttonDiv);

    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset!";
    resetButton.addEventListener('click', resetClicked);
    buttonDiv.appendChild(resetButton);

    function resetClicked() {
        let newGridSize = prompt('Please enter a new grid size: ');
        console.log(newGridSize);

        if(newGridSize > 0) {
            while(pixelContainer.firstChild) {
                pixelContainer.removeChild(pixelContainer.firstChild);
            }
            createGrid(newGridSize);

        }

        else {
            alert("Grid size should probably be a number");
            return null;
        }
    }
        

    function createGrid(gridSize) {
            let pixelWidth =  1/gridSize*100;  

            for(let i = 0; i<gridSize; i++) {
                    for(let y = 0; y<gridSize; y++) {
                    const pixelDiv = document.createElement("div");
                    pixelDiv.classList.add('pixel-div');
                    pixelDiv.style.backgroundColor = 'rgb(255,254,253)';
                    
                    
                    pixelDiv.style.width = `${pixelWidth}%`;

                    pixelDiv.style.height = pixelDiv.style.width;

                    pixelContainer.appendChild(pixelDiv);
                    pixelDiv.addEventListener("mouseover", darkenPixel);
                }
        }
    }

    let pixelRowCount = 50; //Default grid size on page load

    createGrid(pixelRowCount);

    function darkenPixel(div) {
        let divToDarken = div;
        let divColor = divToDarken.target.style.backgroundColor;

        let parseColor = divColor.match(/\d+/g); //returns array of individual r/g/b values as strings
        
        let rgbColor = parseColor.map(element => parseInt(element, 10));
        
        rgbColor.forEach((element, index) => {
            if(rgbColor[index] > 25) {
                rgbColor[index] -= 25;
            }
            else rgbColor[index] = 0;
            });

        let newColor = 'rgb(' + rgbColor[0] + ", " + rgbColor[1] + ", " + rgbColor[2] + ")";

        divToDarken.target.style.backgroundColor = newColor;
        
    }



});