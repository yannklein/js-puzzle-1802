// ///////////////////////
// Rehearsal
// ///////////////////////

// 1. Select elements (that the user will interact with, that will change)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to click on the button
button.addEventListener("click", (event) => {
  // console.log(event);
  // 3. Change the DOM ( add the class active to hint)
  hint.classList.add("active");
});


// <td>9</td>
// temp1.cellIndex
// 0
// temp1.parentElement.rowIndex
// 2

const canMove = (tile)=>{
  let row = tile.parentElement.rowIndex;
  let col = tile.cellIndex;
  const empty = document.querySelector(".empty")
  let emptyRow = empty.parentElement.rowIndex;
  let emptyCol = empty.cellIndex;

  // if
  // the tile's row is +/- 1 from emtpy row 
  //  AND
  // the tile's col is same as empty
  // OR
  // the tile's col is +/- 1 from emtpy col 
  //  AND
  // the tile's row is same as empty
  // return true

  return ((
      ((row === emptyRow - 1) || ( row === emptyRow + 1))  &&
      (col === emptyCol)
    )
    ||
    (
      ((col === emptyCol - 1) || ( col === emptyCol + 1))  &&
      (row === emptyRow)
    )
  );
};

const swapTile = (tile) => {
  const empty = document.querySelector(".empty");
  empty.classList.remove("empty");
  empty.innerText = tile.innerText;
  tile.classList.add("empty");
  tile.innerText = "";
};

const didWewWin = (tiles) => {
  const numbers = [];
  tiles.forEach((tile) => {
    // every tile here is a <td>XX</td>
    numbers.push(tile.innerText);
  })
  return numbers.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,';
}

// ///////////////////////
// Puzzle challenge
// ///////////////////////
// 1. select all tiles (get a nodelist)
const tiles = document.querySelectorAll("td");
// 2. iterate each tile
tiles.forEach((tile)=>{ 
  // 3. listen to a click on the tile
  tile.addEventListener("click", ()=>{
    // 4. get the location of the tile 
    // 5. check if the empty tile is nearby
    if (canMove(tile)) {
      // 6. if yes we swap the tile and empty space
      swapTile(tile);
      // 7. check the order to see if we win
      if (didWewWin(tiles)) {
        alert("You won! 🥷🎸")
      }
    }
})})
