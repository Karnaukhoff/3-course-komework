/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ ;(() => {
    // webpackBootstrap
    /******/ "use strict"
    /******/ var __webpack_modules__ = {
        /***/ "./index.js":
            /*!******************!*\
  !*** ./index.js ***!
  \******************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ "./pages.js");\n\r\n\r\n(0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.getPageChoiceLevel)()\r\n\r\nconst startButton = document.getElementById("start-button")\r\nstartButton.addEventListener("click", () => {\r\n    if (document.getElementById("radio1").checked) {\r\n        (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(document.getElementById("radio1").value)\r\n    } else if (document.getElementById("radio2").checked) {\r\n        (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(document.getElementById("radio2").value)\r\n    } else if (document.getElementById("radio3").checked) {\r\n        (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.getPageGame)(document.getElementById("radio3").value)\r\n    } else {\r\n        alert("Выберите уровень")\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://3-course-komework/./index.js?',
                )

                /***/
            },

        /***/ "./pages.js":
            /*!******************!*\
  !*** ./pages.js ***!
  \******************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPageChoiceLevel: () => (/* binding */ getPageChoiceLevel),\n/* harmony export */   getPageGame: () => (/* binding */ getPageGame)\n/* harmony export */ });\nconst page = document.querySelector(".container")\r\n\r\nfunction getPageChoiceLevel() {\r\n    page.innerHTML = `\r\n    <form class="choice__container">\r\n        <p class="choice__container_name">Выбери \r\n            сложность</p>\r\n            <div class="choice__container_levels">\r\n                <input type="radio" id="radio1" class="radios" value="1" name="radios">\r\n                    <label for="radio1">1</label>\r\n                <input type="radio" id="radio2" class="radios" value="2" name="radios">\r\n                    <label for="radio2">2</label>\r\n                <input type="radio" id="radio3" class="radios" value="3" name="radios">\r\n                    <label for="radio3">3</label>\r\n            </div>\r\n        <button id="start-button" class="choice__container_button">Старт</button>\r\n    </form>\r\n        `\r\n    document.getElementById("container").style.display = "flex"\r\n    document.getElementById("container").style.justifyContent = "center"\r\n    document.getElementById("container").style.alignItems = "center"\r\n}\r\n\r\nfunction getPageGame(level) {\r\n    console.log(level)\r\n    document.getElementById("container").style.display = "block"\r\n    page.innerHTML = `\r\n    <div class="header">\r\n        <section class="header-time">\r\n            <div class="header-time-min-sec">\r\n                <div class="header-time-min-sec__time">min</div>\r\n                <div class="header-time-min-sec__time"></div>\r\n                <div class="header-time-min-sec__time">sek</div>\r\n            </div>\r\n            <div class="header-time">\r\n                <div class="header-time-time">00.00</div>\r\n            </div>\r\n        </section>\r\n        <button class="header-time-button">Начать заново</button>\r\n    </div>\r\n\r\n    <section class="cards hidden-cards">\r\n        <div class="first-line card-line">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n        </div>\r\n        <div class="second-line card-line">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n        </div>\r\n        <div class="third-line card-line">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n        </div>\r\n        <div class="fourth-line card-line">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n            <img src="/img/hidden-card.jpg" class="photo">\r\n        </div>\r\n    </section>\r\n\r\n    <section class="cards">\r\n        <div class="first-line card-line">\r\n            <img src="/img/туз пики.jpg" class="photo">\r\n            <img src="/img/король пики.jpg" class="photo">\r\n            <img src="/img/дама пики.jpg" class="photo">\r\n            <img src="/img/валет пики.jpg" class="photo">\r\n            <img src="/img/10 пики.jpg" class="photo">\r\n            <img src="/img/9 пики.jpg" class="photo">\r\n            <img src="/img/8 пики.jpg" class="photo">\r\n            <img src="/img/7 пики.jpg" class="photo">\r\n            <img src="/img/6 пики.jpg" class="photo">\r\n        </div>\r\n        <div class="second-line card-line">\r\n            <img src="/img/туз черви.jpg" class="photo">\r\n            <img src="/img/король черви.jpg" class="photo">\r\n            <img src="/img/дама черви.jpg" class="photo">\r\n            <img src="/img/валет черви.jpg" class="photo">\r\n            <img src="/img/10 черви.jpg" class="photo">\r\n            <img src="/img/9 черви.jpg" class="photo">\r\n            <img src="/img/8 черви.jpg" class="photo">\r\n            <img src="/img/7 черви.jpg" class="photo">\r\n            <img src="/img/6 черви.jpg" class="photo">\r\n        </div>\r\n        <div class="third-line card-line">\r\n            <img src="/img/туз бубны.jpg" class="photo">\r\n            <img src="/img/король бубны.jpg" class="photo">\r\n            <img src="/img/дама бубны.jpg" class="photo">\r\n            <img src="/img/валет бубны.jpg" class="photo">\r\n            <img src="/img/10 бубны.jpg" class="photo">\r\n            <img src="/img/9 бубны.jpg" class="photo">\r\n            <img src="/img/8 бубны.jpg" class="photo">\r\n            <img src="/img/7 бубны.jpg" class="photo">\r\n            <img src="/img/6 бубны.jpg" class="photo">\r\n        </div>\r\n        <div class="fourth-line card-line">\r\n            <img src="/img/туз крести.jpg" class="photo">\r\n            <img src="/img/король крести.jpg" class="photo">\r\n            <img src="/img/дама крести.jpg" class="photo">\r\n            <img src="/img/валет крести.jpg" class="photo">\r\n            <img src="/img/10 крести.jpg" class="photo">\r\n            <img src="/img/9 крести.jpg" class="photo">\r\n            <img src="/img/8 крести.jpg" class="photo">\r\n            <img src="/img/7 крести.jpg" class="photo">\r\n            <img src="/img/6 крести.jpg" class="photo">\r\n        </div>\r\n    </section>\r\n    `\r\n}\n\n//# sourceURL=webpack://3-course-komework/./pages.js?',
                )

                /***/
            },

        /******/
    }
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {}
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId]
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        })
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](
            module,
            module.exports,
            __webpack_require__,
        )
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports
        /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ ;(() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (
                    __webpack_require__.o(definition, key) &&
                    !__webpack_require__.o(exports, key)
                ) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key],
                    })
                    /******/
                }
                /******/
            }
            /******/
        }
        /******/
    })()
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ ;(() => {
        /******/ __webpack_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop)
        /******/
    })()
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ ;(() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module",
                })
                /******/
            }
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true,
            })
            /******/
        }
        /******/
    })()
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ var __webpack_exports__ = __webpack_require__("./index.js")
    /******/
    /******/
})()
