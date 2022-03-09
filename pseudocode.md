##Main Goals: 
Recreate tic tac Toe with Js:

1. The HTML for the tic-tac-toe grid should be dynamically rendered in JS.
2. Your code should incorporate the use of at least one Class 
    a.Tip: For most design patterns, you typically use more than one class at a time. For example, in the Composite design pattern, you would need to create at least one Parent class and one Child class
3. The entire project must be Object-Oriented and should at least use one of the following design patterns (any additional design patterns are up to you, including State, Singleton, and more [see Additional Resources at the bottom of the page])
a. Model View Controller (MVC)
b. Composite
4. The game should let the players know who's turn it is.
5. Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
6. The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
7. There should be a Restart Game button that does not refresh the page (set state).
8. During Demo, you should be able to explain what pillars of OOP you used (see Additional Resources), as well as what specific design patterns you incorporated, how you did so, and where they appear in the code.
9. Use the symbols X and O.
10. On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
11. The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.


##pseudocode

* Title
* Dynamic 3x3 grid that is clickable
 - event listener for each gird on board
* Grids should have the correct player symbol X or O
* Restart button - resets state
  - event listener for Restart Button

Onload for dynamic board
Dynamic Function to create 3x3 grid via javascript

Board [
    0,1,2
    3,4,5
    6,7,8
]

Win Conditions for each 
[0,1,2] [3,4,5] [6,7,8]
[0,3,6] [1,4,7] [2,5,8]
[0,4,8] [2,4,6]

Current player switches between X and O


Model:
Board Array of 9x : Each index empty? 

Win cond array of 8x 

Current Player X

End game true when win cond is reached 


View:

init 
render fn onload on body when app/game loads

Ids/display required for App/game



Controller:

fn to Handle current player change X | O | X | O  
possibly done with string and innerHtml

fn for button to restart game
 
fn to handle 