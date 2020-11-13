let ignoreInitial = 0;

const sketchContainer = document.querySelector('.content');

const resetGrid = document.querySelector('.reset-button');


createGrid()

function createGrid(gridSize =20){

    sketchContainer.setAttribute('style',`grid-template-columns: repeat(${gridSize}, 1fr);, grid-template-rows: repeat(${gridSize}, 1fr);` )

    let counter;

    for (counter = 0; counter < gridSize **2; counter++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('pexels')
    sketchContainer.appendChild(newDiv);
    };

} 


function removeGrid(){
    let eachChild = document.querySelectorAll('.content div')
    eachChild.forEach((child) => {
    child.remove()
}
    ) 
    }



// console.log(hover)

// hover = document.querySelectorAll('.content div');

// hover.forEach((item) => {
//     item.addEventListener('mouseover', () => {
//         item.setAttribute('style', 'background: blue;')
//     });
// })

const eachPixel = document.querySelectorAll('.content div');


function reset(){
     eachPixel.forEach((item) => {
         item.setAttribute('style', 'background-color: white;')
        }
     )
     removeGrid()
     createGrid(50);
 }

resetGrid.addEventListener('click', function() {
    reset()
})



//  const slider = document.getElementById('slider');

// const slideWrapper = document.querySelector('.slideWrapper');
// const valueHolder = document.createElement('span');
// var start_value = slider.getAttribute("value");
// const grid = document.querySelector('.content');

// valueHolder.innerHTML = start_value;

// slider.oninput = 
// function() {
//     valueHolder.innerHTML =
//     slider.value;
// }

// slideWrapper.appendChild(valueHolder)


 slider.addEventListener('mouseup', () =>  {
       let slideNumber = slider.value;
       reset(slideNumber);
   })
