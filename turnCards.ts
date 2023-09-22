import { eraseRandomCards, getRow, totalRandomCards } from './cards'
import {
    page,
    head,
    seconds,
    minutes,
    timerId,
    getPageGame,
    interval,
} from './pages'

let status = `won`
let int: ReturnType<typeof setTimeout>
export let turned1: Array<string | number> = []
export let turned2: Array<string | number> = []

export function eraseTurned1() {
    turned1 = []
}
export function eraseTurned2() {
    turned2 = []
}

let pair1: Array<string> = []
let pair2: Array<string> = []
let pair3: Array<string> = []
let pair4: Array<string> = []
let pair5: Array<string> = []
let pair6: Array<string> = []
let pair7: Array<string> = []
let pair8: Array<string> = []
let pair9: Array<string> = []

export function erasePairs() {
    pair1 = []
    pair2 = []
    pair3 = []
    pair4 = []
    pair5 = []
    pair6 = []
    pair7 = []
    pair8 = []
    pair9 = []
}

function time(sec: number, min: number) {
    return `${min.toString().padStart(2, '0')}.${sec
        .toString()
        .padStart(2, '0')}`
}

function lostMessage(level: number, sec: number, min: number) {
    clearTimeout(int)
    clearTimeout(interval)
    clearTimeout(timerId)
    setTimeout(function () {
        page.innerHTML = `
        ${head()}
        <section class="status__container">
            <form class="status__box" id="status_box">
                <img src="/img/dead.png" alt="lose" class="status__icon">
                <p class="status__text">Вы проиграли!</p>
                <p class="status__text_time">Затраченное время:</p>
                <div class="status__time" id="timer">${time(sec, min)}</div>
                <button class="status__button" id="oneMoreButton">Играть снова</button>
            </form>
        </section>
        <section class="cards" id="cards">
            <div class="first-line card-line">
                ${getRow(1, 'process', level)}
            </div>
            <div class="second-line card-line">
                ${getRow(2, 'process', level)}
            </div>
        </section>
        `
        let header = document.getElementById('header') as HTMLDivElement
        let playAgainButton = document.getElementById('playAgainButton') as HTMLInputElement
        let status_box = document.getElementById('status_box') as HTMLDivElement
        let cards = document.getElementById('cards') as HTMLDivElement

        header.style.filter = 'brightness(0.5)'
        playAgainButton.disabled = true
        status_box.style.zIndex = "2"
        cards.style.filter = 'brightness(0.5)'
        cards.style.zIndex = "1"

        let oneMoreButton = document.getElementById('oneMoreButton') as HTMLInputElement
        oneMoreButton.addEventListener('click', () => {
            clearTimeout(int)
            clearTimeout(interval)
            clearTimeout(timerId)
            eraseRandomCards()
            eraseTurned1()
            eraseTurned2()
            erasePairs()
            getPageGame(level)
            status = `won`
            playAgainButton.disabled = false
        })
    }, 1000)
    status = `lost`
}

function pairs(
    number: number,
    index: number,
    level: number,
    sec: number,
    min: number,
) {
    if (number <= 2) {
        pair1.push(totalRandomCards[index])
        if (pair1.length === 2 && pair1[0] !== pair1[1]) {
            lostMessage(level, sec, min)
        }
    } else if (number <= 4) {
        pair2.push(totalRandomCards[index])
        if (pair2.length === 2 && pair2[0] !== pair2[1]) {
            lostMessage(level, sec, min)
        }
    } else if (number <= 6) {
        pair3.push(totalRandomCards[index])
        if (pair3.length === 2 && pair3[0] !== pair3[1]) {
            lostMessage(level, sec, min)
        }
    } else if (number <= 8) {
        pair4.push(totalRandomCards[index])
        if (pair4.length === 2 && pair4[0] !== pair4[1]) {
            lostMessage(level, sec, min)
        }
    } else if (number <= 10) {
        pair5.push(totalRandomCards[index])
        if (pair5.length === 2 && pair5[0] !== pair5[1]) {
            lostMessage(level, sec, min)
        }
    } else if (number <= 12) {
        pair6.push(totalRandomCards[index])
        if (pair6.length === 2 && pair6[0] !== pair6[1]) {
            lostMessage(level, sec, min)
        }
    } else if (number <= 14) {
        pair7.push(totalRandomCards[index])
        if (pair7.length === 2 && pair7[0] !== pair7[1]) {
            lostMessage(level, sec, min)
        }
    } else if (number <= 16) {
        pair8.push(totalRandomCards[index])
        if (pair8.length === 2 && pair8[0] !== pair8[1]) {
            lostMessage(level, sec, min)
        }
    } else if (number <= 18) {
        pair9.push(totalRandomCards[index])
        if (pair9.length === 2 && pair9[0] !== pair9[1]) {
            lostMessage(level, sec, min)
        }
    }
}

export function turnCard(index: number, level: number) {
    let cardsToWin = 6
    if (level === 2) {
        cardsToWin = 12
    } else if (level === 3) {
        cardsToWin = 18
    }

    if (
        !turned1.includes(totalRandomCards[index]) ||
        !turned2.includes(totalRandomCards[index])
    ) {
        if (!turned1.includes(totalRandomCards[index])) {
            turned1.push(totalRandomCards[index])
            turned1.push(index)
        } else {
            turned2.push(totalRandomCards[index])
            turned2.push(index)
        }
        let clickCardNumber = turned1.length / 2 + turned2.length / 2
        page.innerHTML = `
        ${head()}
        <section class="cards">
            <div class="first-line card-line">
                ${getRow(1, 'process', level)}
            </div>
            <div class="second-line card-line">
                ${getRow(2, 'process', level)}
            </div>
        </section>
        `
        let timer = document.getElementById('timer') as HTMLInputElement

        let sec = seconds
        let min = minutes

        int = setInterval(function () {
            sec++
            if (sec === 60) {
                min++
                sec = 0
            }
            timer.textContent = `${min.toString().padStart(2, '0')}.${sec
                .toString()
                .padStart(2, '0')}`
        }, 1000)
        pairs(clickCardNumber, index, level, sec, min)

        if (clickCardNumber === cardsToWin && status === `won`) {
            clearTimeout(int)
            clearTimeout(interval)
            clearTimeout(timerId)
            setTimeout(function () {
                page.innerHTML = `
        ${head()}
        <section class="status__container">
            <form class="status__box" id="status_box">
            <img src="img/celebration.png" alt="win" class="status__icon">
                <p class="status__text">Вы выиграли!</p>
                <p class="status__text_time">Затраченное время:</p>
                <div class="status__time" id="timer">${time(sec, min)}</div>
                <button class="status__button" id="oneMoreButton">Играть снова</button>
            </form>
        </section>
        <section class="cards" id="cards">
            <div class="first-line card-line">
                ${getRow(1, 'process', level)}
            </div>
            <div class="second-line card-line">
                ${getRow(2, 'process', level)}
            </div>
        </section>
        `
        let header = document.getElementById('header') as HTMLDivElement
        let playAgainButton = document.getElementById('playAgainButton') as HTMLInputElement
        let status_box = document.getElementById('status_box') as HTMLDivElement
        let cards = document.getElementById('cards') as HTMLDivElement

        header.style.filter = 'brightness(0.5)'
        playAgainButton.disabled = true
        status_box.style.zIndex = "2"
        cards.style.filter = 'brightness(0.5)'
        cards.style.zIndex = "1"

                let oneMoreButton =
                    document.getElementById('oneMoreButton') as HTMLInputElement
                oneMoreButton.addEventListener('click', () => {
                    clearTimeout(int)
                    clearTimeout(interval)
                    clearTimeout(timerId)
                    eraseRandomCards()
                    eraseTurned1()
                    eraseTurned2()
                    erasePairs()
                    getPageGame(level)
                    status = `won`
                    playAgainButton.disabled = false
                })
            }, 1000)
        }

        let playAgainButton = document.getElementById('playAgainButton') as HTMLInputElement
        playAgainButton.addEventListener('click', () => {
            clearTimeout(int)
            clearTimeout(interval)
            clearTimeout(timerId)
            eraseRandomCards()
            eraseTurned1()
            eraseTurned2()
            erasePairs()
            getPageGame(level)
        })

        const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.hidden')
        cards.forEach(card => card.addEventListener('click', () => {
            turnCard(Number(card.attributes[2].value), level)
        }))
    }
}
