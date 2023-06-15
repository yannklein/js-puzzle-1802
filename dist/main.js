/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/puzzle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/puzzle.js":
/*!***********************!*\
  !*** ./lib/puzzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=main.js.map