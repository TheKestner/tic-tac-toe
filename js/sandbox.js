// let board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
// let player = "X"
class state {
  constructor(){

  // let board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
  // let player = "X"

  // Horizontal
  winningStates: [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],

  // Vertical
  ['0', '3', '6'],
  ['1', '4', '7'],
  ['2', '5', '8'],

  // Diagonal
  ['0', '4', '8'],
  ['2', '4', '6']
  ]
 }
}

//added board
function addCell() {
 for (let i = 1; i <= 9; i++){
  let newDiv = document.createElement("div");
   newDiv.classList.add("cell");
  let grid = document.getElementById("grid");
   grid.appendChild(newDiv);
 }
}

document.addEventListener('click', event => {
  const target = event.target
  const isCell = target.classList.contains('cell')


  if (isCell) {
    console.log(true)
  }
})

document.body.onload = addCell;



//target.classList.add 


// newDiv.addEventListener("click", addCell());
// console.log(newDiv)
// newDiv.removeEventListener

// let cells = document.querySelector('cell');

// document.addEventListener('click', event => {
    

// })