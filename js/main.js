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
    const target = event.target;
     let playerLabel = target;
     playerLabel.textContent = player;
     target.appendChild(playerLabel);
  })

  document.body.onload = addCell;