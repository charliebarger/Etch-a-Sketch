let ignoreInitial = 0;
const sketchContainer = document.querySelector('.content');
const resetGrid = document.querySelector('.reset-button');
const slider = document.getElementById('slider');
const slideWrapper = document.querySelector('.slideWrapper');
const valueHolder = document.createElement('span');
slideWrapper.appendChild(valueHolder);

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
    for (let counter = 0; counter < gridSize **2; counter++){
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
        if (color == 'random'){
            let color = randomColor()
            item.addEventListener('mouseover', () => {
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

 function randomColor(){
     let hexCharacters = '0123456789ABCDEF'
     let hash = '#'
     for (let char =0; char < 6; char++){
         hash += hexCharacters[Math.floor(Math.random() * 16)]
    }
    return(hash)
 }


resetGrid.addEventListener('click', function() {
    reset(20, fixColor)
})

//visual representation of the sliders value as it changes in real time 
slider.oninput = 
 function() {
     valueHolder.innerHTML =
     slider.value;
 };

//when you release the slider, call reset with the value the slider was released on
let fixColor;
slider.addEventListener('mouseup', () =>  {
    reset(slider.value, fixColor);
});

const picker = document.getElementById('color-picker');
picker.onchange = 
    function() {
        fixColor = picker.value;
        addColor(fixColor)
    }


hexColor = document.getElementById('random')
random.addEventListener('click', () => {
    fixColor = 'random';
    addColor(fixColor);
})

erasor = document.getElementById('erasor')
erasor.addEventListener('click', () => {
    fixColor = 'white';
    addColor(fixColor);
} )

black = document.getElementById('black')

black.addEventListener('click', () => {
    fixColor = 'black';
    addColor(fixColor)
}
)