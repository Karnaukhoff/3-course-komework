/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cards.ts":
/*!******************!*\
  !*** ./cards.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards),
/* harmony export */   eraseRandomCards: () => (/* binding */ eraseRandomCards),
/* harmony export */   getCards: () => (/* binding */ getCards),
/* harmony export */   getHiddenCards: () => (/* binding */ getHiddenCards),
/* harmony export */   getRow: () => (/* binding */ getRow),
/* harmony export */   totalRandomCards: () => (/* binding */ totalRandomCards),
/* harmony export */   watch: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _turnCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turnCards */ "./turnCards.ts");

var totalRandomCards = [];
function eraseRandomCards() {
    totalRandomCards = [];
}
var watch = [];
var pikaT = "<img src=\"/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var pikaK = "<img src=\"/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var pikaQ = "<img src=\"/img/\u0434\u0430\u043C\u0430 \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var pikaJ = "<img src=\"/img/\u0432\u0430\u043B\u0435\u0442 \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var pika10 = "<img src=\"/img/10 \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var pika9 = "<img src=\"/img/9 \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var pika8 = "<img src=\"/img/8 \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var pika7 = "<img src=\"/img/7 \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var pika6 = "<img src=\"/img/6 \u043F\u0438\u043A\u0438.jpg\" class=\"photo\">";
var chervT = "<img src=\"/img/\u0442\u0443\u0437 \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var chervK = "<img src=\"/img/\u043A\u043E\u0440\u043E\u043B\u044C \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var chervQ = "<img src=\"/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var chervJ = "<img src=\"/img/\u0432\u0430\u043B\u0435\u0442 \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var cherv10 = "<img src=\"/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var cherv9 = "<img src=\"/img/9 \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var cherv8 = "<img src=\"/img/8 \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var cherv7 = "<img src=\"/img/7 \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var cherv6 = "<img src=\"/img/6 \u0447\u0435\u0440\u0432\u0438.jpg\" class=\"photo\">";
var bubniT = "<img src=\"/img/\u0442\u0443\u0437 \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var bubniK = "<img src=\"/img/\u043A\u043E\u0440\u043E\u043B\u044C \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var bubniQ = "<img src=\"/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var bubniJ = "<img src=\"/img/\u0432\u0430\u043B\u0435\u0442 \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var bubni10 = "<img src=\"/img/10 \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var bubni9 = "<img src=\"/img/9 \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var bubni8 = "<img src=\"/img/8 \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var bubni7 = "<img src=\"/img/7 \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var bubni6 = "<img src=\"/img/6 \u0431\u0443\u0431\u043D\u044B.jpg\" class=\"photo\">";
var krestiT = "<img src=\"/img/\u0442\u0443\u0437 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var krestiK = "<img src=\"/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var krestiQ = "<img src=\"/img/\u0434\u0430\u043C\u0430 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var krestiJ = "<img src=\"/img/\u0432\u0430\u043B\u0435\u0442 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var kresti10 = "<img src=\"/img/10 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var kresti9 = "<img src=\"/img/9 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var kresti8 = "<img src=\"/img/8 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var kresti7 = "<img src=\"/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var kresti6 = "<img src=\"/img/6 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" class=\"photo\">";
var cards = [
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
];
function getRow(row, way, level) {
    var min = 0;
    var max = 6;
    var line = "";
    if (level > 1 && row === 1) {
        min = 0;
        max = 9;
    }
    else if (level === 2 && row === 2) {
        min = 9;
        max = 12;
    }
    else if (level === 3 && row === 2) {
        min = 9;
        max = 18;
    }
    for (var i = min; i < max; i++) {
        if (way === "open") {
            if ((level === 1 && row === 1) || (level > 1)) {
                line += totalRandomCards[i];
            }
        }
        else if (way === "hidden") {
            if ((level === 1 && row === 1) || (level > 1)) {
                line += "<img src=\"/img/hidden-card.jpg\" class=\"hidden\" index=\"".concat(i, "\"></img>");
            }
        }
        else if (way === "process") {
            if ((level === 1 && row === 1) || (level > 1)) {
                if (_turnCards__WEBPACK_IMPORTED_MODULE_0__.turned2.includes(totalRandomCards[i]) && _turnCards__WEBPACK_IMPORTED_MODULE_0__.turned1.includes(totalRandomCards[i])) {
                    line += totalRandomCards[i];
                }
                else {
                    if (_turnCards__WEBPACK_IMPORTED_MODULE_0__.turned1.includes(totalRandomCards[i]) && _turnCards__WEBPACK_IMPORTED_MODULE_0__.turned1.includes(i)) {
                        line += totalRandomCards[i];
                    }
                    else {
                        line += "<img src=\"/img/hidden-card.jpg\" class=\"hidden\" index=\"".concat(i, "\"></img>");
                    }
                }
            }
        }
    }
    return line;
}
function getCards(level) {
    var until = 3;
    if (level === 2) {
        until = 6;
    }
    else if (level === 3) {
        until = 9;
    }
    var randomCards1 = [];
    for (var i = 0; i < until; i++) {
        var index = Math.floor(Math.random() * 36);
        if (randomCards1.includes(cards[index])) {
            i--;
        }
        else {
            randomCards1.push(cards[index]);
        }
    }
    var randomCards2 = [];
    for (var i = 0; i < until; i++) {
        var index = Math.floor(Math.random() * until);
        if (randomCards2.includes(randomCards1[index])) {
            i--;
        }
        else {
            randomCards2.push(randomCards1[index]);
        }
    }
    until *= 2;
    for (var i = 0; i < until; i++) {
        if (i % 2 === 1) {
            totalRandomCards.push(randomCards1[i / 2 - 0.5]);
        }
        else {
            totalRandomCards.push(randomCards2[i / 2]);
        }
    }
    return "\n<section class=\"cards\">\n    <div class=\"first-line card-line\">\n        ".concat(getRow(1, "open", level), "\n    </div>\n    <div class=\"second-line card-line\">\n        ").concat(getRow(2, "open", level), "\n    </div>\n</section>\n    ");
}
function getHiddenCards(level) {
    return "\n    <section class=\"cards\">\n        <div class=\"first-line card-line\">\n            ".concat(getRow(1, "hidden", level), "\n        </div>\n        <div class=\"second-line card-line\">\n            ").concat(getRow(2, "hidden", level), "\n        </div>\n    </section>\n        ");
}


/***/ }),

/***/ "./pages.ts":
/*!******************!*\
  !*** ./pages.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPageChoiceLevel: () => (/* binding */ getPageChoiceLevel),
/* harmony export */   getPageGame: () => (/* binding */ getPageGame),
/* harmony export */   head: () => (/* binding */ head),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   minutes: () => (/* binding */ minutes),
/* harmony export */   page: () => (/* binding */ page),
/* harmony export */   realTime: () => (/* binding */ realTime),
/* harmony export */   seconds: () => (/* binding */ seconds),
/* harmony export */   timerId: () => (/* binding */ timerId)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./cards.ts");
/* harmony import */ var _turnCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turnCards */ "./turnCards.ts");


var page = document.querySelector(".container");
var container = document.getElementById("container");
function getPageChoiceLevel() {
    page.innerHTML = "\n    <form class=\"choice__container\">\n        <p class=\"choice__container_name\">\u0412\u044B\u0431\u0435\u0440\u0438 \n            \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</p>\n            <div class=\"choice__container_levels\">\n                <input type=\"radio\" id=\"radio1\" class=\"radios\" value=\"1\" name=\"radios\">\n                    <label for=\"radio1\">1</label>\n                <input type=\"radio\" id=\"radio2\" class=\"radios\" value=\"2\" name=\"radios\">\n                    <label for=\"radio2\">2</label>\n                <input type=\"radio\" id=\"radio3\" class=\"radios\" value=\"3\" name=\"radios\">\n                    <label for=\"radio3\">3</label>\n            </div>\n        <button id=\"start-button\" class=\"choice__container_button\">\u0421\u0442\u0430\u0440\u0442</button>\n    </form>\n        ";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
}
var seconds;
var minutes;
var timerId;
var interval;
function realTime() {
    return "".concat(minutes.toString().padStart(2, '0'), ".").concat(seconds.toString().padStart(2, '0'));
}
function head() {
    return "\n<div class=\"header\" id=\"header\">\n    <section class=\"header-time\">\n        <div class=\"header-time-min-sec\">\n            <div class=\"header-time-min-sec__time\">min</div>\n            <div class=\"header-time-min-sec__time\"></div>\n            <div class=\"header-time-min-sec__time\">sek</div>\n        </div>\n        <div class=\"header-time\">\n            <div class=\"header-time-time\" id=\"timer\">".concat(realTime(), "</div>\n        </div>\n    </section>\n    <button class=\"header-time-button\" id=\"playAgainButton\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n</div>\n    ");
}
function getPageGame(level) {
    seconds = 0;
    minutes = 0;
    container.style.display = "block";
    page.innerHTML = "\n    ".concat(head(), "\n    ").concat((0,_cards__WEBPACK_IMPORTED_MODULE_0__.getCards)(level), "\n    ");
    timerId = setTimeout(function () {
        page.innerHTML = "\n        ".concat(head(), "\n        ").concat((0,_cards__WEBPACK_IMPORTED_MODULE_0__.getHiddenCards)(level), "\n        ");
        var timer = document.getElementById("timer");
        function updateTime() {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            timer.textContent = "".concat(minutes.toString().padStart(2, '0'), ".").concat(seconds.toString().padStart(2, '0'));
        }
        interval = setInterval(updateTime, 1000);
        var playAgainButton = document.getElementById("playAgainButton");
        playAgainButton.addEventListener("click", function () {
            clearTimeout(interval);
            clearTimeout(timerId);
            (0,_cards__WEBPACK_IMPORTED_MODULE_0__.eraseRandomCards)();
            getPageGame(level);
        });
        var cards = document.querySelectorAll(".hidden");
        var _loop_1 = function (card) {
            card.addEventListener("click", function () {
                (0,_turnCards__WEBPACK_IMPORTED_MODULE_1__.turnCard)(Number(card.attributes.index.value), level);
            });
        };
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            _loop_1(card);
        }
    }, 5000);
    var playAgainButton = document.getElementById("playAgainButton");
    playAgainButton.addEventListener("click", function () {
        clearTimeout(timerId);
        (0,_cards__WEBPACK_IMPORTED_MODULE_0__.eraseRandomCards)();
        getPageGame(level);
    });
}


/***/ }),

/***/ "./turnCards.ts":
/*!**********************!*\
  !*** ./turnCards.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   erasePairs: () => (/* binding */ erasePairs),
/* harmony export */   eraseTurned1: () => (/* binding */ eraseTurned1),
/* harmony export */   eraseTurned2: () => (/* binding */ eraseTurned2),
/* harmony export */   turnCard: () => (/* binding */ turnCard),
/* harmony export */   turned1: () => (/* binding */ turned1),
/* harmony export */   turned2: () => (/* binding */ turned2)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./cards.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ "./pages.ts");


var status = "won";
var int;
var turned1 = [];
var turned2 = [];
function eraseTurned1() {
    turned1 = [];
}
function eraseTurned2() {
    turned2 = [];
}
var header = document.getElementById("header");
var playAgainButton = document.getElementById("playAgainButton");
var status_box = document.getElementById("status_box");
var cards = document.getElementById("cards");
var pair1 = [];
var pair2 = [];
var pair3 = [];
var pair4 = [];
var pair5 = [];
var pair6 = [];
var pair7 = [];
var pair8 = [];
var pair9 = [];
function erasePairs() {
    pair1 = [];
    pair2 = [];
    pair3 = [];
    pair4 = [];
    pair5 = [];
    pair6 = [];
    pair7 = [];
    pair8 = [];
    pair9 = [];
}
function time(sec, min) {
    return "".concat(min.toString().padStart(2, '0'), ".").concat(sec.toString().padStart(2, '0'));
}
function lostMessage(level, sec, min) {
    clearTimeout(int);
    clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.interval);
    clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.timerId);
    setTimeout(function () {
        _pages__WEBPACK_IMPORTED_MODULE_1__.page.innerHTML = "\n        ".concat((0,_pages__WEBPACK_IMPORTED_MODULE_1__.head)(), "\n        <section class=\"status__container\">\n            <form class=\"status__box\" id=\"status_box\">\n                <img src=\"/img/dead.png\" alt=\"lose\" class=\"status__icon\">\n                <p class=\"status__text\">\u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438!</p>\n                <p class=\"status__text_time\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</p>\n                <div class=\"status__time\" id=\"timer\">").concat(time(sec, min), "</div>\n                <button class=\"status__button\" id=\"oneMoreButton\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n            </form>\n        </section>\n        <section class=\"cards\" id=\"cards\">\n            <div class=\"first-line card-line\">\n                ").concat((0,_cards__WEBPACK_IMPORTED_MODULE_0__.getRow)(1, "process", level), "\n            </div>\n            <div class=\"second-line card-line\">\n                ").concat((0,_cards__WEBPACK_IMPORTED_MODULE_0__.getRow)(2, "process", level), "\n            </div>\n        </section>\n        ");
        header.style.filter = "brightness(0.5)";
        playAgainButton.disabled = true;
        status_box.style.zIndex = 2;
        cards.style.filter = "brightness(0.5)";
        cards.style.zIndex = 1;
        var oneMoreButton = document.getElementById("oneMoreButton");
        oneMoreButton.addEventListener("click", function () {
            clearTimeout(int);
            clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.interval);
            clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.timerId);
            (0,_cards__WEBPACK_IMPORTED_MODULE_0__.eraseRandomCards)();
            eraseTurned1();
            eraseTurned2();
            erasePairs();
            (0,_pages__WEBPACK_IMPORTED_MODULE_1__.getPageGame)(level);
            status = "won";
            playAgainButton.disabled = false;
        });
    }, 1000);
    status = "lost";
}
function pairs(number, index, level, sec, min) {
    if (number <= 2) {
        pair1.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair1.length === 2 && pair1[0] !== pair1[1]) {
            lostMessage(level, sec, min);
        }
    }
    else if (number <= 4) {
        pair2.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair2.length === 2 && pair2[0] !== pair2[1]) {
            lostMessage(level, sec, min);
        }
    }
    else if (number <= 6) {
        pair3.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair3.length === 2 && pair3[0] !== pair3[1]) {
            lostMessage(level, sec, min);
        }
    }
    else if (number <= 8) {
        pair4.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair4.length === 2 && pair4[0] !== pair4[1]) {
            lostMessage(level, sec, min);
        }
    }
    else if (number <= 10) {
        pair5.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair5.length === 2 && pair5[0] !== pair5[1]) {
            lostMessage(level, sec, min);
        }
    }
    else if (number <= 12) {
        pair6.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair6.length === 2 && pair6[0] !== pair6[1]) {
            lostMessage(level, sec, min);
        }
    }
    else if (number <= 14) {
        pair7.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair7.length === 2 && pair7[0] !== pair7[1]) {
            lostMessage(level, sec, min);
        }
    }
    else if (number <= 16) {
        pair8.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair8.length === 2 && pair8[0] !== pair8[1]) {
            lostMessage(level, sec, min);
        }
    }
    else if (number <= 18) {
        pair9.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
        if (pair9.length === 2 && pair9[0] !== pair9[1]) {
            lostMessage(level, sec, min);
        }
    }
}
function turnCard(index, level) {
    var cardsToWin = 6;
    if (level === 2) {
        cardsToWin = 12;
    }
    else if (level === 3) {
        cardsToWin = 18;
    }
    if (!turned1.includes(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]) || !turned2.includes(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])) {
        if (!turned1.includes(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index])) {
            turned1.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
            turned1.push(index);
        }
        else {
            turned2.push(_cards__WEBPACK_IMPORTED_MODULE_0__.totalRandomCards[index]);
            turned2.push(index);
        }
        var clickCardNumber = (turned1.length / 2) + (turned2.length / 2);
        _pages__WEBPACK_IMPORTED_MODULE_1__.page.innerHTML = "\n        ".concat((0,_pages__WEBPACK_IMPORTED_MODULE_1__.head)(), "\n        <section class=\"cards\">\n            <div class=\"first-line card-line\">\n                ").concat((0,_cards__WEBPACK_IMPORTED_MODULE_0__.getRow)(1, "process", level), "\n            </div>\n            <div class=\"second-line card-line\">\n                ").concat((0,_cards__WEBPACK_IMPORTED_MODULE_0__.getRow)(2, "process", level), "\n            </div>\n        </section>\n        ");
        var timer_1 = document.getElementById("timer");
        var sec_1 = _pages__WEBPACK_IMPORTED_MODULE_1__.seconds;
        var min_1 = _pages__WEBPACK_IMPORTED_MODULE_1__.minutes;
        /*function updateTime() {
            sec++;
            if (sec === 60) {
                min++;
                sec = 0;
            }
            timer.textContent = `${min.toString().padStart(2, '0')}.${sec.toString().padStart(2, '0')}`;
            }*/
        int = setInterval(function () {
            sec_1++;
            if (sec_1 === 60) {
                min_1++;
                sec_1 = 0;
            }
            timer_1.textContent = "".concat(min_1.toString().padStart(2, '0'), ".").concat(sec_1.toString().padStart(2, '0'));
        }, 1000);
        pairs(clickCardNumber, index, level, sec_1, min_1);
        if (clickCardNumber === cardsToWin && status === "won") {
            clearTimeout(int);
            clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.interval);
            clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.timerId);
            setTimeout(function () {
                _pages__WEBPACK_IMPORTED_MODULE_1__.page.innerHTML = "\n        ".concat((0,_pages__WEBPACK_IMPORTED_MODULE_1__.head)(), "\n        <section class=\"status__container\">\n            <form class=\"status__box\" id=\"status_box\">\n            <img src=\"img/celebration.png\" alt=\"win\" class=\"status__icon\">\n                <p class=\"status__text\">\u0412\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0438!</p>\n                <p class=\"status__text_time\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</p>\n                <div class=\"status__time\" id=\"timer\">").concat(time(sec_1, min_1), "</div>\n                <button class=\"status__button\" id=\"oneMoreButton\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n            </form>\n        </section>\n        <section class=\"cards\" id=\"cards\">\n            <div class=\"first-line card-line\">\n                ").concat((0,_cards__WEBPACK_IMPORTED_MODULE_0__.getRow)(1, "process", level), "\n            </div>\n            <div class=\"second-line card-line\">\n                ").concat((0,_cards__WEBPACK_IMPORTED_MODULE_0__.getRow)(2, "process", level), "\n            </div>\n        </section>\n        ");
                var header = document.getElementById("header");
                var playAgainButton = document.getElementById("playAgainButton");
                var status_box = document.getElementById("status_box");
                var cards = document.getElementById("cards");
                header.style.filter = "brightness(0.5)";
                playAgainButton.disabled = true;
                status_box.style.zIndex = 2;
                cards.style.filter = "brightness(0.5)";
                cards.style.zIndex = 1;
                var oneMoreButton = document.getElementById("oneMoreButton");
                oneMoreButton.addEventListener("click", function () {
                    clearTimeout(int);
                    clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.interval);
                    clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.timerId);
                    (0,_cards__WEBPACK_IMPORTED_MODULE_0__.eraseRandomCards)();
                    eraseTurned1();
                    eraseTurned2();
                    erasePairs();
                    (0,_pages__WEBPACK_IMPORTED_MODULE_1__.getPageGame)(level);
                    status = "won";
                    playAgainButton.disabled = false;
                });
            }, 1000);
        }
        var playAgainButton_1 = document.getElementById("playAgainButton");
        playAgainButton_1.addEventListener("click", function () {
            clearTimeout(int);
            clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.interval);
            clearTimeout(_pages__WEBPACK_IMPORTED_MODULE_1__.timerId);
            (0,_cards__WEBPACK_IMPORTED_MODULE_0__.eraseRandomCards)();
            eraseTurned1();
            eraseTurned2();
            erasePairs();
            (0,_pages__WEBPACK_IMPORTED_MODULE_1__.getPageGame)(level);
        });
        var cards_2 = document.querySelectorAll(".hidden");
        var _loop_1 = function (card) {
            card.addEventListener("click", function () {
                turnCard(Number(card.attributes.index.value), level);
            });
        };
        for (var _i = 0, cards_1 = cards_2; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            _loop_1(card);
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
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./pages.ts");

(0,_pages__WEBPACK_IMPORTED_MODULE_0__.getPageChoiceLevel)();
var startButton = document.getElementById("start-button");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio2");
startButton.addEventListener("click", function () {
    if (radio1.checked) {
        (0,_pages__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(1);
    }
    else if (radio2.checked) {
        (0,_pages__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(2);
    }
    else if (radio3.checked) {
        (0,_pages__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(3);
    }
    else {
        alert("Выберите уровень");
    }
});
//окно выиграл/проиграл

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map