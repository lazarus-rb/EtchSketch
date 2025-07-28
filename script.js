document.addEventListener('DOMContentLoaded', () => {

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("main-container");
    document.body.appendChild(containerDiv);

    const pixelDiv = document.createElement("div");
    pixelDiv.classList.add('pixel-div');
    containerDiv.appendChild(pixelDiv);


    function darkenPixel(div) {
        let divToDarken = div;
        divToDarken.target.style.backgroundColor = 'red';
        // let { hue, saturation, lightness } = getHslComponents(divToDarken.target.style.backgroundColor);
        // console.log(divToDarken.target.style.backgroundColor);
    }


    pixelDiv.addEventListener("mouseover", darkenPixel);



});