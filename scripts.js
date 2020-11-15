let ignoreInitial = 0;
let fixColor;
const sketchContainer = document.querySelector('.content');
const resetGrid = document.querySelector('.reset-button');
const slider = document.getElementById('slider');
const slideWrapper = document.querySelector('.slideformat');
const valueHolder = document.createElement('span');
valueHolder.classList.add('number')
slideWrapper.appendChild(valueHolder);
const picker = document.getElementById('color-picker');
rainbow = document.getElementById('rainbow');
erasor = document.getElementById('erasor');
black = document.getElementById('black')


createGrid()
addColor()

function initializeSlider(initialValue){
    slider.value = initialValue;
    valueHolder.innerHTML = initialValue;
}

// takes the input 'gridSize' adds a grid and appends child divs to it, then calls add color 
function createGrid(gridSize = 20){
    initializeSlider(gridSize)
    sketchContainer.setAttribute('style',`grid-template-columns: repeat(${gridSize}, 1fr);, grid-template-rows: repeat(${gridSize}, 1fr);` )
    appendPixels(gridSize)
} 

//appends divs to grid
function appendPixels (numberOfPixels){
    for (let counter = 0; counter < numberOfPixels **2; counter++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('pexels')
        sketchContainer.appendChild(newDiv);
    };
}
  
//removes every child div from the .content wrapper
function removeGrid(){
    let eachChild = document.querySelectorAll('.content div')
    eachChild.forEach((child) => {
        child.remove()
    }); 
}

//sets the background of divs to a color when hovered over
function addColor(color = 'black'){
    let hover = document.querySelectorAll('.content div');
    hover.forEach((item) => {
        if (color == 'rainbow'){
            item.addEventListener('mouseover', () => {
            let color = randomColor()
            item.setAttribute('style', `background: ${color} ;`)
            });
        }
        else{
            item.addEventListener('mouseover', () => {
                item.setAttribute('style', `background: ${color} ;`)
            });
        }
    });
}

//resets background to white
function removeColor(){
    let deletion = document.querySelectorAll('.content div');
    deletion.forEach((pixel) => {
        pixel.style.background = 'white';
    });
}

//resets grid
function reset(gridSize = 20, color){
     removeGrid()
     createGrid(gridSize);
     slider.value = gridSize;
     valueHolder.innerHTML = gridSize;
     addColor(color)
 }

//returns a random hex value
 function randomColor(){
     let hexCharacters = '0123456789ABCDEF'
     let hash = '#'
     for (let char =0; char < 6; char++){
         hash += hexCharacters[Math.floor(Math.random() * 16)]
    }
    return(hash)
 }

 //visual representation of the sliders value
slider.oninput = 
 function() {
     valueHolder.innerHTML =
     slider.value;
 };

//Event Listners

 resetGrid.addEventListener('click', function() {
    reset(20, fixColor)
})

slider.addEventListener('mouseup', () =>  {
    reset(slider.value, fixColor);
});

picker.onchange = 
    function() {
        fixColor = picker.value;
        addColor(fixColor)
    }

rainbow.addEventListener('click', () => {
    fixColor = 'rainbow';
    addColor(fixColor);
})

erasor.addEventListener('click', () => {
    fixColor = 'white';
    addColor(fixColor);
} )

black.addEventListener('click', () => {
    fixColor = 'black';
    addColor(fixColor)
}
)
