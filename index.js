import { cards } from "./cards.js"
import { getPageChoiceLevel, getPageGame } from "./pages.js"

export let currentLevel = ``
let countOfCards = 12

let turned = []
/*let clickCardNumber = turned.length
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
let pair18 = []*/

function turnCard(index) {
    if (currentLevel === "2") {
        countOfCards = 24
    } else if (currentLevel === "3") {
        countOfCards = 36
    }

    //нажималась ли уже - если нет, то остальной алгоритм работать не будет
    if (!turned.includes(cards[index])) {
        console.log("no")
    }
    //какая карта по счету
    //определить номер пары

    //перерисовка
    //сравнение
    
    //выиграл или проиграл
}

getPageChoiceLevel()

const startButton = document.getElementById("start-button")
startButton.addEventListener("click", () => {
    getPageGame()
    if (document.getElementById("radio1").checked) {
        currentLevel = document.getElementById("radio1").value
    } else if (document.getElementById("radio2").checked) {
        currentLevel = document.getElementById("radio2").value
    } else if (document.getElementById("radio3").checked) {
        currentLevel = document.getElementById("radio3").value
    } else {
        alert("Выберите уровень")
    }
})
