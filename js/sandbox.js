// let board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
// let player = "X";
// let player = "X" ? "O" : "X"
class State {
  constructor() {
    this.player = "X";
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.winningStates = [
         ['0', '1', '2'],
         ['3', '4', '5'],
         ['6', '7', '8'],
      
      //   // Vertical
         ['0', '3', '6'],
         ['1', '4', '7'],
         ['2', '5', '8'],
      
      //   // Diagonal
        ['0', '4', '8'],
        ['2', '4', '6']
         ]
  }
}

let stateInstance = new State();


// class state {
//   constructor(){

//   this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
//   this.player = "X"

//   // Horizontal
//   winningStates: [
//   ['0', '1', '2'],
//   ['3', '4', '5'],
//   ['6', '7', '8'],

//   // Vertical
//   ['0', '3', '6'],
//   ['1', '4', '7'],
//   ['2', '5', '8'],

//   // Diagonal
//   ['0', '4', '8'],
//   ['2', '4', '6']
//   ]
//  }
// }

function playerChange() {
  stateInstance.player = stateInstance.player === "X" ? "O" : "X";
}



//added board
function addCell() {
 for (let i = 1; i <= 9; i++){
  let newDiv = document.createElement("div");
   newDiv.classList.add("cell");
  let grid = document.getElementById("grid");
   grid.appendChild(newDiv);

  newDiv.addEventListener('click', event => {
    const target = event.target;
     let playerLabel = target;
     playerLabel.textContent = stateInstance.player;
    //  target.appendChild(playerLabel);
    playerChange();
    }, { once: true });
 }
}
//document.getElementby 

// document.addEventListener('click', event => {
//   const target = event.target;
//    let playerLabel = target;
//    playerLabel.textContent = player;
//    target.appendChild(playerLabel);
// })

document.body.onload = addCell;










//target.classList.add 


// newDiv.addEventListener("click", addCell());
// console.log(newDiv)
// newDiv.removeEventListener

// let cells = document.querySelector('cell');

// document.addEventListener('click', event => {
    

// })