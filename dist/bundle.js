/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cards.js":
/*!******************!*\
  !*** ./cards.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards),
/* harmony export */   getCards: () => (/* binding */ getCards),
/* harmony export */   getHiddenCards: () => (/* binding */ getHiddenCards),
/* harmony export */   getRow: () => (/* binding */ getRow),
/* harmony export */   totalRandomCards: () => (/* binding */ totalRandomCards)
/* harmony export */ });
/* harmony import */ var _turnCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turnCards.js */ "./turnCards.js");


let totalRandomCards = []

const pikaT = `<img src="/img/туз пики.jpg" class="photo">`
const pikaK = `<img src="/img/король пики.jpg" class="photo">`
const pikaQ = `<img src="/img/дама пики.jpg" class="photo">`
const pikaJ = `<img src="/img/валет пики.jpg" class="photo">`
const pika10 = `<img src="/img/10 пики.jpg" class="photo">`
const pika9 = `<img src="/img/9 пики.jpg" class="photo">`
const pika8 = `<img src="/img/8 пики.jpg" class="photo">`
const pika7 = `<img src="/img/7 пики.jpg" class="photo">`
const pika6 = `<img src="/img/6 пики.jpg" class="photo">`

const chervT = `<img src="/img/туз черви.jpg" class="photo">`
const chervK = `<img src="/img/король черви.jpg" class="photo">`
const chervQ = `<img src="/img/дама черви.jpg" class="photo">`
const chervJ = `<img src="/img/валет черви.jpg" class="photo">`
const cherv10 = `<img src="/img/10 черви.jpg" class="photo">`
const cherv9 = `<img src="/img/9 черви.jpg" class="photo">`
const cherv8 = `<img src="/img/8 черви.jpg" class="photo">`
const cherv7 = `<img src="/img/7 черви.jpg" class="photo">`
const cherv6 = `<img src="/img/6 черви.jpg" class="photo">`

const bubniT = `<img src="/img/туз бубны.jpg" class="photo">`
const bubniK = `<img src="/img/король бубны.jpg" class="photo">`
const bubniQ = `<img src="/img/дама бубны.jpg" class="photo">`
const bubniJ = `<img src="/img/валет бубны.jpg" class="photo">`
const bubni10 = `<img src="/img/10 бубны.jpg" class="photo">`
const bubni9 = `<img src="/img/9 бубны.jpg" class="photo">`
const bubni8 = `<img src="/img/8 бубны.jpg" class="photo">`
const bubni7 = `<img src="/img/7 бубны.jpg" class="photo">`
const bubni6 = `<img src="/img/6 бубны.jpg" class="photo">`

const krestiT = `<img src="/img/туз крести.jpg" class="photo">`
const krestiK = `<img src="/img/король крести.jpg" class="photo">`
const krestiQ = `<img src="/img/дама крести.jpg" class="photo">`
const krestiJ = `<img src="/img/валет крести.jpg" class="photo">`
const kresti10 = `<img src="/img/10 крести.jpg" class="photo">`
const kresti9 = `<img src="/img/9 крести.jpg" class="photo">`
const kresti8 = `<img src="/img/8 крести.jpg" class="photo">`
const kresti7 = `<img src="/img/7 крести.jpg" class="photo">`
const kresti6 = `<img src="/img/6 крести.jpg" class="photo">`

const cards = [
    pikaT,
    pikaK,
    pikaQ,
    pikaJ,
    pika10,
    pika9,
    pika8,
    pika7,
    pika6,
    chervT,
    chervK,
    chervQ,
    chervJ,
    cherv10,
    cherv9,
    cherv8,
    cherv7,
    cherv6,
    bubniT,
    bubniK,
    bubniQ,
    bubniJ,
    bubni10,
    bubni9,
    bubni8,
    bubni7,
    bubni6,
    krestiT,
    krestiK,
    krestiQ,
    krestiJ,
    kresti10,
    kresti9,
    kresti8,
    kresti7,
    kresti6,
]

function getRow(row, way){
    let min = 0
    let max = 9
    let line = ``
    if (row === 2){
        min = 9
        max = 18
    } else if (row === 3){
        min = 18
        max = 27
    } else if (row === 4){
        min = 27
        max = 36
    }
    for (let i = min; i < max; i++){
        if (way === "open"){
            line += totalRandomCards[i]
        }
        else if (way === "hidden") {
            line += `<img src="/img/hidden-card.jpg" class="hidden" index="${i}"></img>`
        }
        else if (way === "process") {
            if (_turnCards_js__WEBPACK_IMPORTED_MODULE_0__.turned2.includes(totalRandomCards[i]) && _turnCards_js__WEBPACK_IMPORTED_MODULE_0__.turned1.includes(totalRandomCards[i])){
                line += totalRandomCards[i]
            }
            else {
                if (_turnCards_js__WEBPACK_IMPORTED_MODULE_0__.turned1.includes(totalRandomCards[i]) && _turnCards_js__WEBPACK_IMPORTED_MODULE_0__.turned1.includes(i)){
                    line += totalRandomCards[i]
                } else {
                    line += `<img src="/img/hidden-card.jpg" class="hidden" index="${i}"></img>`   
                }
            }
        }
    }
    return line
}

function getCards() {
    let randomCards1 = []
    for (let i = 0; i < 18; i++) {
        let index = Math.floor(Math.random() * 36)
        if (randomCards1.includes(cards[index])) {
            i--
        } else {
            randomCards1.push(cards[index])
        }
    }

    let randomCards2 = []
    for (let i = 0; i < 18; i++) {
        let index = Math.floor(Math.random() * 18)
        if (randomCards2.includes(randomCards1[index])) {
            i--
        } else {
            randomCards2.push(randomCards1[index])
        }
    }

    for (let i = 0; i < 36; i++){
        if (i % 2 === 1){
            totalRandomCards.push(randomCards1[i/2 - 0.5])
        } 
        else {
            totalRandomCards.push(randomCards2[i/2])
        }
    }

    return `
<section class="cards">
    <div class="first-line card-line">
        ${getRow(1, "open")}
    </div>
    <div class="second-line card-line">
        ${getRow(2, "open")}
    </div>
    <div class="third-line card-line">
        ${getRow(3, "open")}
    </div>
    <div class="fourth-line card-line">
        ${getRow(4, "open")}
    </div>
</section>
    `
}

function getHiddenCards() {
    return `
    <section class="cards">
        <div class="first-line card-line">
            ${getRow(1, "hidden")}
        </div>
        <div class="second-line card-line">
            ${getRow(2, "hidden")}
        </div>
        <div class="third-line card-line">
            ${getRow(3, "hidden")}
        </div>
        <div class="fourth-line card-line">
            ${getRow(4, "hidden")}
        </div>
    </section>
        `
}

/***/ }),

/***/ "./pages.js":
/*!******************!*\
  !*** ./pages.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPageChoiceLevel: () => (/* binding */ getPageChoiceLevel),
/* harmony export */   getPageGame: () => (/* binding */ getPageGame),
/* harmony export */   head: () => (/* binding */ head),
/* harmony export */   page: () => (/* binding */ page)
/* harmony export */ });
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ "./cards.js");
/* harmony import */ var _turnCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turnCards.js */ "./turnCards.js");



const page = document.querySelector(".container")

function getPageChoiceLevel() {
    page.innerHTML = `
    <form class="choice__container">
        <p class="choice__container_name">Выбери 
            сложность</p>
            <div class="choice__container_levels">
                <input type="radio" id="radio1" class="radios" value="1" name="radios">
                    <label for="radio1">1</label>
                <input type="radio" id="radio2" class="radios" value="2" name="radios">
                    <label for="radio2">2</label>
                <input type="radio" id="radio3" class="radios" value="3" name="radios">
                    <label for="radio3">3</label>
            </div>
        <button id="start-button" class="choice__container_button">Старт</button>
    </form>
        `
    document.getElementById("container").style.display = "flex"
    document.getElementById("container").style.justifyContent = "center"
    document.getElementById("container").style.alignItems = "center"
}

function head() {
    return `
<div class="header">
    <section class="header-time">
        <div class="header-time-min-sec">
            <div class="header-time-min-sec__time">min</div>
            <div class="header-time-min-sec__time"></div>
            <div class="header-time-min-sec__time">sek</div>
        </div>
        <div class="header-time">
            <div class="header-time-time" id="timer">00.00</div>
        </div>
    </section>
    <button class="header-time-button">Начать заново</button>
</div>
    `
}

function getPageGame(level) {
    document.getElementById("container").style.display = "block"
    page.innerHTML = `
    ${head()}
    ${(0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.getCards)()}
    `
    let randomCards = _cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards
    console.log(randomCards)

    setTimeout(function () {
        page.innerHTML = `
        ${head()}
        ${(0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.getHiddenCards)()}
        `

        const cards = document.querySelectorAll(".hidden")
        for (const card of cards) {
            card.addEventListener("click", () => {
                ;(0,_turnCards_js__WEBPACK_IMPORTED_MODULE_1__.turnCard)(Number(card.attributes.index.value), level)
            })
        }
    }, 5000)

}


/***/ }),

/***/ "./turnCards.js":
/*!**********************!*\
  !*** ./turnCards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   turnCard: () => (/* binding */ turnCard),
/* harmony export */   turned1: () => (/* binding */ turned1),
/* harmony export */   turned2: () => (/* binding */ turned2)
/* harmony export */ });
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ "./cards.js");
/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.js */ "./pages.js");



let status = `won`

let turned1 = []
let turned2 = []

let pair1 = []
let pair2 = []
let pair3 = []
let pair4 = []
let pair5 = []
let pair6 = []
let pair7 = []
let pair8 = []
let pair9 = []
let pair10 = []
let pair11 = []
let pair12 = []
let pair13 = []
let pair14 = []
let pair15 = []
let pair16 = []
let pair17 = []
let pair18 = []

function pairs(number, index) {
    function lostMessage(){
        setTimeout(() => alert('Вы проиграли!'), 1000)
        status = `lost`
    }
    if (number <= 2 ){
        pair1.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair1.length === 2 && pair1[0] !== pair1[1]){
            lostMessage()
        }
    } else if (number <= 4){
        pair2.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair2.length === 2 && pair2[0] !== pair2[1]){
            lostMessage()
        }
    } else if (number <= 6){
        pair3.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair3.length === 2 && pair3[0] !== pair3[1]){
            lostMessage()
        }
    } else if (number <= 8){
        pair4.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair4.length === 2 && pair4[0] !== pair4[1]){
            lostMessage()
        }
    } else if (number <= 10){
        pair5.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair5.length === 2 && pair5[0] !== pair5[1]){
            lostMessage()
        }
    } else if (number <= 12){
        pair6.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair6.length === 2 && pair6[0] !== pair6[1]){
            lostMessage()
        }
    } else if (number <= 14){
        pair7.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair7.length === 2 && pair7[0] !== pair7[1]){
            lostMessage()
        }
    } else if (number <= 16){
        pair8.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair8.length === 2 && pair8[0] !== pair8[1]){
            lostMessage()
        }
    } else if (number <= 18){
        pair9.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair9.length === 2 && pair9[0] !== pair9[1]){
            lostMessage()
        }
    } else if (number <= 20){
        pair10.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair10.length === 2 && pair10[0] !== pair10[1]){
            lostMessage()
        }
    } else if (number <= 22){
        pair11.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair11.length === 2 && pair11[0] !== pair11[1]){
            lostMessage()
        }
    } else if (number <= 24){
        pair12.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair12.length === 2 && pair12[0] !== pair12[1]){
            lostMessage()
        }
    } else if (number <= 26){
        pair13.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair13.length === 2 && pair13[0] !== pair13[1]){
            lostMessage()
        }
    } else if (number <= 28){
        pair14.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair14.length === 2 && pair14[0] !== pair14[1]){
            lostMessage()
        }
    } else if (number <= 30){
        pair15.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair15.length === 2 && pair15[0] !== pair15[1]){
            lostMessage()
        }
    } else if (number <= 32){
        pair16.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair16.length === 2 && pair16[0] !== pair16[1]){
            lostMessage()
        }
    } else if (number <= 34){
        pair17.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair17.length === 2 && pair17[0] !== pair17[1]){
            lostMessage()
        }
    } else if (number <= 36){
        pair18.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
        if (pair18.length === 2 && pair18[0] !== pair18[1]){
            lostMessage()
        }
    }
}

function turnCard(index, level) {
    let countOfCards = 6
    if (level === 2) {
        countOfCards = 12
    } else if (level === 3) {
        countOfCards = 18
    }

    if (!turned1.includes(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]) || !turned2.includes(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])) {
        if (!turned1.includes(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])){
            turned1.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
            turned1.push(index)
        } else {
            turned2.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])
            turned2.push(index)
        }
        let clickCardNumber = (turned1.length / 2) + (turned2.length / 2)
        _pages_js__WEBPACK_IMPORTED_MODULE_1__.page.innerHTML = `
        ${(0,_pages_js__WEBPACK_IMPORTED_MODULE_1__.head)()}
        <section class="cards">
            <div class="first-line card-line">
                ${(0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.getRow)(1, "process")}
            </div>
            <div class="second-line card-line">
                ${(0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.getRow)(2, "process")}
            </div>
            <div class="third-line card-line">
                ${(0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.getRow)(3, "process")}
            </div>
            <div class="fourth-line card-line">
                ${(0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.getRow)(4, "process")}
            </div>
        </section>
        `
        pairs(clickCardNumber, index)
        console.log(clickCardNumber, countOfCards)
        if (clickCardNumber === countOfCards && status === `won`){
        setTimeout(() => alert('Вы выиграли!'), 1000)
        }

        const cards = document.querySelectorAll(".hidden")
        for (const card of cards) {
            card.addEventListener("click", () => {
                turnCard(Number(card.attributes.index.value), level)
            })
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ "./pages.js");


(0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.getPageChoiceLevel)()

const startButton = document.getElementById("start-button")
startButton.addEventListener("click", () => {
    if (document.getElementById("radio1").checked) {
        (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(1)
    } else if (document.getElementById("radio2").checked) {
        (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(2)
    } else if (document.getElementById("radio3").checked) {
        (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(3)
    } else {
        alert("Выберите уровень")
    }
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map