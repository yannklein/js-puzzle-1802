// ///////////////////////
// Rehearsal
// ///////////////////////

// 1. Select elements - that the user will interact with, that will change - (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to an event (click on button)
button.addEventListener("click", (event) => {
  // 3. Change the DOM (add a class active to the hint)
  console.log(event);
  hint.classList.add("active");
});


// ///////////////////////
// Puzzle challenge
// ///////////////////////
// Pseudo-code

// 1. Select all the tiles -> get a NodeList (a kind of Array) full of tds
const tiles = document.querySelectorAll("td");
// 2. For each tile (td), listen to a click
tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    console.log(event);
    const clickedTile = event.currentTarget;
    // 3. when the user click, check if the empty space is near the td
    if(canMove(clickedTile)) {
      // 4. if yes, flip the tiles
      swapeTile(clickedTile);
      // 5. if tils in the right order, win the game alert()
      if(didWeWin(tiles)) {
        alert("You won! 🎉")
      };
    }
  });
});


const isNearEmpty = (cellEmpty, rowEmpty, cellTile, rowTile) => {
  return (Math.abs(cellTile - cellEmpty) + Math.abs(rowTile - rowEmpty)) === 1;
}

const canMove = (tile) => {
  // Build cellEmpty, rowEmpty, cellTile, rowTile
  const cellTile = tile.cellIndex;
  const rowTile = tile.parentElement.rowIndex;
  const empty = document.querySelector(".empty");
  const cellEmpty = empty.cellIndex;
  const rowEmpty = empty.parentElement.rowIndex;
  return isNearEmpty(cellEmpty, rowEmpty, cellTile, rowTile);
}

const swapeTile = (tile) => {
  // Build swapeTile
  const empty = document.querySelector(".empty");
  empty.classList.remove("empty"); // no dot on empty
  empty.innerText = tile.innerText;
  tile.innerText = "";
  tile.classList.add("empty");
}

const didWeWin = (tiles) => {
  // Build didWeWin
  const actualTiles = [];
  tiles.forEach((tile) => {
    actualTiles.push(tile.innerText);
  });
  return actualTiles.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
}