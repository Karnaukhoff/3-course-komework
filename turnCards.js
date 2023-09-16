import { getRow, totalRandomCards, watch } from "./cards.js"
import { page, head, seconds, minutes } from "./pages.js"

let status = `won`

export let turned1 = []
export let turned2 = []

export function eraseTurned1(){
    turned1 = []
}
export function eraseTurned2(){
    turned2 = []
}

let pair1 = []
let pair2 = []
let pair3 = []
let pair4 = []
let pair5 = []
let pair6 = []
let pair7 = []
let pair8 = []
let pair9 = []

export function erasePairs(){
    let pair1 = []
    let pair2 = []
    let pair3 = []
    let pair4 = []
    let pair5 = []
    let pair6 = []
    let pair7 = []
    let pair8 = []
    let pair9 = []
}

function lostMessage(){
    setTimeout(() => alert('Вы проиграли!'), 1000)
    status = `lost`
}

function pairs(number, index) {
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
    }
}

export function turnCard(index, level) {
    let cardsToWin = 6
    if (level === 2) {
        cardsToWin = 12
    } else if (level === 3) {
        cardsToWin = 18
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
                ${getRow(1, "process", level)}
            </div>
            <div class="second-line card-line">
                ${getRow(2, "process", level)}
            </div>
        </section>
        `
        let timer = document.getElementById("timer");
        
        let sec = seconds
        let min = minutes
        let int;

        function updateTime() {
            sec++;
            if (sec === 60) {
                min++;
                sec = 0;
            }
            timer.textContent = `${min.toString().padStart(2, '0')}.${sec.toString().padStart(2, '0')}`;
            }
        int = setInterval(updateTime, 1000);
        pairs(clickCardNumber, index)
        
        if (clickCardNumber === cardsToWin && status === `won`){
        setTimeout(() => alert('Вы выиграли!'), 1000)
        }
        //clearInterval(interval)
        const cards = document.querySelectorAll(".hidden")
        for (const card of cards) {
            card.addEventListener("click", () => {
                turnCard(Number(card.attributes.index.value), level)
            })
        }
    } else {
        lostMessage()
    }
}