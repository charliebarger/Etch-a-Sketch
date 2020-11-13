let ignoreInitial = 0;
const sketchContainer = document.querySelector('.content');
const resetGrid = document.querySelector('.reset-button');
const slider = document.getElementById('slider');
const slideWrapper = document.querySelector('.slideWrapper');
const valueHolder = document.createElement('span');
var start_value = 20;
slider.value = start_value;
valueHolder.innerHTML = start_value;
slideWrapper.appendChild(valueHolder);

createGrid()

function createGrid(gridSize = start_value){
    sketchContainer.setAttribute('style',`grid-template-columns: repeat(${gridSize}, 1fr);, grid-template-rows: repeat(${gridSize}, 1fr);` )
    for (let counter = 0; counter < gridSize **2; counter++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('pexels')
        sketchContainer.appendChild(newDiv);
    };
    addColor()
} 
    
function removeGrid(){
    let eachChild = document.querySelectorAll('.content div')
    eachChild.forEach((child) => {
        child.remove()
    }); 
}

function addColor(){
    let hover = document.querySelectorAll('.content div');
    removeColor(hover);
    hover.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.setAttribute('style', 'background: blue;')
        });
    });
}

function removeColor(coloredPixels){
    coloredPixels.forEach((pixel) => {
        pixel.style.background = 'white';
    });
}

function reset(gridSize = 20){
     removeGrid()
     createGrid(gridSize);
     slider.value = gridSize;
     valueHolder.innerHTML = gridSize
 }

resetGrid.addEventListener('click', function() {
    reset()
})

slider.oninput = 
 function() {
     valueHolder.innerHTML =
     slider.value;
 };


slider.addEventListener('mouseup', () =>  {
    reset(slider.value);
});
