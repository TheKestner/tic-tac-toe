// let board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
// let player = "X"

document.body.onload = addCell;

function addCell() {
 for (let i = 1; i <= 9; i++){
  let newDiv = document.createElement("div");

  const newContent = document.createTextNode("X");

  newDiv.appendChild(newContent);

  let currentDiv = document.getElementById("grid");
  document.body.insertBefore(newDiv, currentDiv);
 }
}







// document.body.onload = grid;





// let cells = document.querySelector('cell');

// document.addEventListener('click', event => {
    

// })