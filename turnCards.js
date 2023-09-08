import { getRow, totalRandomCards } from "./cards.js"
import { currentLevel } from "./index.js"
import { page, head } from "./pages.js"

let countOfCards = 12

export let turned = []
export let turned1 = []
export let turned2 = []
let clickCardNumber = turned.length
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

export function turnCard(index) {
    let level = currentLevel
    if (level === "2") {
        countOfCards = 24
    } else if (level === "3") {
        countOfCards = 36
    }

    if (!turned.includes(totalRandomCards[index])) {
        turned.push(totalRandomCards[index])
        page.innerHTML = `
        ${head()}
        <section class="cards">
            <div class="first-line card-line">
                ${getRow(1, "process")}
            </div>
            <div class="second-line card-line">
                ${getRow(2, "process")}
            </div>
            <div class="third-line card-line">
                ${getRow(3, "process")}
            </div>
            <div class="fourth-line card-line">
                ${getRow(4, "process")}
            </div>
        </section>
        `
        const cards = document.querySelectorAll(".hidden")
        for (const card of cards) {
            card.addEventListener("click", () => {
                turnCard(Number(card.attributes.index.value))
            })
        }
        
    }
    //определить номер пары и добавить для сравнения (push)


    //сравнение

    //выиграл или проиграл
}