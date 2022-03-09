// let board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
// let player = "X"



function addCell() {
 for (let i = 1; i <= 9; i++){
  let newDiv = document.createElement("div");
   newDiv.classList.add("cell");
  let grid = document.getElementById("grid");
   grid.appendChild(newDiv);
 }
}

document.body.onload = addCell;


// document.body.onload = grid;





// let cells = document.querySelector('cell');

// document.addEventListener('click', event => {
    

// })