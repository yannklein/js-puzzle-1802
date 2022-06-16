// ///////////////////////
// Rehearsal
// ///////////////////////

// 1. Select elements 
// (that the user interact with, that will change)
// => button, hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to a click on the button
button.addEventListener("click", () => {
  // 3. Change the DOM, display the button
  hint.classList.add("active");
});

// ///////////////////////
// Puzzle challenge
// ///////////////////////

const isNearEmpty = (tile) => {
  const tileCellIndex = tile.cellIndex;
  const tileRowIndex = tile.parentElement.rowIndex;

  const empty = document.querySelector(".empty");
  const emptyCellIndex = empty.cellIndex;
  const emptyRowIndex = empty.parentElement.rowIndex;

  return (Math.abs(tileCellIndex - emptyCellIndex) + Math.abs(tileRowIndex - emptyRowIndex)) === 1;
}

// 1. Select elements
// (that the user interact with, that will change)
// => all the tiles (kind of array, a NodeList full of HTML elements)
const tiles = document.querySelectorAll("tr > td");

// 2. for each tile
tiles.forEach((tile) => {
  // 3. Listen to a click on the tile
  tile.addEventListener("click", () => {
    // 4. Check if the empty space is near the tile
    if (isNearEmpty(tile)) {
      // 5. if yes, we swap the tile and empty
      const empty = document.querySelector(".empty");
      // 6. check if numbers are in right order, if yes we win! (msg prompt)
    }
  });
});


// return true/false depending on if player win or not
const checkIfPlayerWins = () => {
  // leave it to Yann, he also has to work
};

