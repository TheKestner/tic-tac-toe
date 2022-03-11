class State {
  constructor() {
    this.player = "X";
  }
}

let stateInstance = new State();


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

  document.body.onload = addCell;
  
  
  
  
  
  
// function addCell() {
//     for (let i = 1; i <= 9; i++){
//      let newDiv = document.createElement("div");
//       newDiv.classList.add("cell");
//      let grid = document.getElementById("grid");
//       grid.appendChild(newDiv);
//     }
//    }