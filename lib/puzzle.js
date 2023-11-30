// ///////////////////////
// Rehearsal
// ///////////////////////

// 1. Select the elements 
//    (that the user interacts with, 
//    element that will change)
// 2. Listen to an event
// 3. Change the DOM

// 1. Select button, hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to a click on button
button.addEventListener("click", (event) => {
  // console.log(event);
  // 3. Add the active class to hint
  hint.classList.add("active");
})

// ///////////////////////
// Puzzle challenge
// ///////////////////////
// Pseudo-code

const isNearEmpty = (tile) => {
  const empty = document.querySelector(".empty");

  const tileCell = tile.cellIndex; // 1
  const tileRow = tile.parentElement.rowIndex; // 3

  const emptyCell = empty.cellIndex; // 2
  const emptyRow = empty.parentElement.rowIndex; // 3

  // tileCell +/- 1 == emptyCell AND tileRow == emptyRow
  // OR
  // tileCell == emptyCell AND tileRow +/- 1 == emptyRow
  // return true
  return (
    ((tileCell + 1 == emptyCell || tileCell - 1 == emptyCell)
    && tileRow == emptyRow)
    ||
    ((tileRow + 1 == emptyRow || tileRow - 1 == emptyRow)
    && tileCell == emptyCell)
  )
}

const didWeWin = (tiles) => {
  // .map does not work on NodeList
  const numbers = [];
  tiles.forEach((tile) => {
    numbers.push(tile.innerText)
  });

  // numbers --> ["15", "2", ...]
  return numbers.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"
}

// 1. Select all the tiles (querySelectorAll -> NodeList, kind of Array)
const tiles = document.querySelectorAll("td");
// 1.5. Iterate over each tile
tiles.forEach((tile) => {
  // 2. Listen to a click on the tile
  tile.addEventListener("click", (event) => {
    // console.log(event);
    // event.currentTarget represents the clicked html element (= tile)
    const clickedElement = event.currentTarget;
    // 2.5. check if the empty space is near the clicked tile
    if (isNearEmpty(clickedElement)) {
      // 3. if it is, swape the tile/empty
      const empty = document.querySelector(".empty");
      empty.innerText = clickedElement.innerText;
      clickedElement.innerText = "";
      empty.classList.remove("empty");
      clickedElement.classList.add("empty");
      // 4. check if we won!
      if (didWeWin(tiles)) {
        alert("We won! 🇬🇧 🎸");
      }
    };
  });
});