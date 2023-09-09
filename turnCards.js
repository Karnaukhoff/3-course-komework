import { getRow, totalRandomCards } from "./cards.js"
import { page, head } from "./pages.js"

let status = `won`

export let turned1 = []
export let turned2 = []

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
        pair1.push(totalRandomCards[index])
        if (pair1.length === 2 && pair1[0] !== pair1[1]){
            lostMessage()
        }
    } else if (number <= 4){
        pair2.push(totalRandomCards[index])
        if (pair2.length === 2 && pair2[0] !== pair2[1]){
            lostMessage()
        }
    } else if (number <= 6){
        pair3.push(totalRandomCards[index])
        if (pair3.length === 2 && pair3[0] !== pair3[1]){
            lostMessage()
        }
    } else if (number <= 8){
        pair4.push(totalRandomCards[index])
        if (pair4.length === 2 && pair4[0] !== pair4[1]){
            lostMessage()
        }
    } else if (number <= 10){
        pair5.push(totalRandomCards[index])
        if (pair5.length === 2 && pair5[0] !== pair5[1]){
            lostMessage()
        }
    } else if (number <= 12){
        pair6.push(totalRandomCards[index])
        if (pair6.length === 2 && pair6[0] !== pair6[1]){
            lostMessage()
        }
    } else if (number <= 14){
        pair7.push(totalRandomCards[index])
        if (pair7.length === 2 && pair7[0] !== pair7[1]){
            lostMessage()
        }
    } else if (number <= 16){
        pair8.push(totalRandomCards[index])
        if (pair8.length === 2 && pair8[0] !== pair8[1]){
            lostMessage()
        }
    } else if (number <= 18){
        pair9.push(totalRandomCards[index])
        if (pair9.length === 2 && pair9[0] !== pair9[1]){
            lostMessage()
        }
    } else if (number <= 20){
        pair10.push(totalRandomCards[index])
        if (pair10.length === 2 && pair10[0] !== pair10[1]){
            lostMessage()
        }
    } else if (number <= 22){
        pair11.push(totalRandomCards[index])
        if (pair11.length === 2 && pair11[0] !== pair11[1]){
            lostMessage()
        }
    } else if (number <= 24){
        pair12.push(totalRandomCards[index])
        if (pair12.length === 2 && pair12[0] !== pair12[1]){
            lostMessage()
        }
    } else if (number <= 26){
        pair13.push(totalRandomCards[index])
        if (pair13.length === 2 && pair13[0] !== pair13[1]){
            lostMessage()
        }
    } else if (number <= 28){
        pair14.push(totalRandomCards[index])
        if (pair14.length === 2 && pair14[0] !== pair14[1]){
            lostMessage()
        }
    } else if (number <= 30){
        pair15.push(totalRandomCards[index])
        if (pair15.length === 2 && pair15[0] !== pair15[1]){
            lostMessage()
        }
    } else if (number <= 32){
        pair16.push(totalRandomCards[index])
        if (pair16.length === 2 && pair16[0] !== pair16[1]){
            lostMessage()
        }
    } else if (number <= 34){
        pair17.push(totalRandomCards[index])
        if (pair17.length === 2 && pair17[0] !== pair17[1]){
            lostMessage()
        }
    } else if (number <= 36){
        pair18.push(totalRandomCards[index])
        if (pair18.length === 2 && pair18[0] !== pair18[1]){
            lostMessage()
        }
    }
}

export function turnCard(index, level) {
    let countOfCards = 12
    if (level === 2) {
        countOfCards = 24
    } else if (level === 3) {
        countOfCards = 36
    }

    if (!turned1.includes(totalRandomCards[index]) || !turned2.includes(totalRandomCards[index])) {
        if (!turned1.includes(totalRandomCards[index])){
            turned1.push(totalRandomCards[index])
            turned1.push(index)
        } else {
            turned2.push(totalRandomCards[index])
            turned2.push(index)
        }
        let clickCardNumber = (turned1.length / 2) + (turned2.length / 2)
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