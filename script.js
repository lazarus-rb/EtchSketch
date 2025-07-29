document.addEventListener('DOMContentLoaded', () => {

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("main-container");
    document.body.appendChild(containerDiv);

    const pixelDiv = document.createElement("div");
    pixelDiv.classList.add('pixel-div');
    pixelDiv.style.backgroundColor = 'rgb(255,254,253)';
    containerDiv.appendChild(pixelDiv);
    
    
    pixelDiv.addEventListener("mouseover", darkenPixel);


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