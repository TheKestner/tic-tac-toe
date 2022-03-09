// let board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
// let player = "X"


//added board
function addCell() {
 for (let i = 1; i <= 9; i++){
  let newDiv = document.createElement("div");
   newDiv.classList.add("cell");
  let grid = document.getElementById("grid");
   grid.appendChild(newDiv);
 }
}


// newDiv.addEventListener("click", addCell());
// console.log(newDiv)
// newDiv.removeEventListener

document.body.onload = addCell;








// let cells = document.querySelector('cell');

// document.addEventListener('click', event => {
    

// })