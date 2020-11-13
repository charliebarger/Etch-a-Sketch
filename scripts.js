let ignoreInitial = 0;
const sketchContainer = document.querySelector('.content');
const resetGrid = document.querySelector('.reset-button');
const slider = document.getElementById('slider');
const slideWrapper = document.querySelector('.slideWrapper');
const valueHolder = document.createElement('span');
slideWrapper.appendChild(valueHolder);

createGrid(initializeSlider(20))

function initializeSlider(initialValue){
    slider.value = initialValue;
    valueHolder.innerHTML = initialValue;
    return(initialValue)
}

// takes the input 'gridSize' adds a grid and appends child divs to it, then calls add color 
function createGrid(gridSize){
    sketchContainer.setAttribute('style',`grid-template-columns: repeat(${gridSize}, 1fr);, grid-template-rows: repeat(${gridSize}, 1fr);` )
    for (let counter = 0; counter < gridSize **2; counter++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('pexels')
        sketchContainer.appendChild(newDiv);
    };
    addColor()
} 
  
//removes every child div from the .content wrapper
function removeGrid(){
    let eachChild = document.querySelectorAll('.content div')
    eachChild.forEach((child) => {
        child.remove()
    }); 
}

//sets the background of divs to a color when hovered over
function addColor(){
    let hover = document.querySelectorAll('.content div');
    removeColor(hover);
    hover.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.setAttribute('style', 'background: blue;')
        });
    });
}

//resets background to white
function removeColor(coloredPixels){
    coloredPixels.forEach((pixel) => {
        pixel.style.background = 'white';
    });
}

//resets grid
function reset(gridSize = 20){
     removeGrid()
     createGrid(gridSize);
     slider.value = gridSize;
     valueHolder.innerHTML = gridSize
 }


resetGrid.addEventListener('click', function() {
    reset()
})

//visual representation of the sliders value as it changes in real time 
slider.oninput = 
 function() {
     valueHolder.innerHTML =
     slider.value;
 };

//when you release the slider, call reset with the value the slider was released on
slider.addEventListener('mouseup', () =>  {
    reset(slider.value);
});
