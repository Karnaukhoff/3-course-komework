import { eraseRandomCards, getCards, getHiddenCards } from './cards'
import { turnCard } from './turnCards'

export const page = document.querySelector('.container') as HTMLDivElement
let container = document.getElementById('container') as HTMLDivElement

export function getPageChoiceLevel() {
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

    container.style.display = 'flex'
    container.style.justifyContent = 'center'
    container.style.alignItems = 'center'
}

export let seconds: number
export let minutes: number
export let timerId: ReturnType<typeof setTimeout>
export let interval: ReturnType<typeof setTimeout>

export function realTime() {
    return `${minutes.toString().padStart(2, '0')}.${seconds
        .toString()
        .padStart(2, '0')}`
}

export function head() {
    return `
<div class="header" id="header">
    <section class="header-time">
        <div class="header-time-min-sec">
            <div class="header-time-min-sec__time">min</div>
            <div class="header-time-min-sec__time"></div>
            <div class="header-time-min-sec__time">sek</div>
        </div>
        <div class="header-time">
            <div class="header-time-time" id="timer">${realTime()}</div>
        </div>
    </section>
    <button class="header-time-button" id="playAgainButton">Начать заново</button>
</div>
    `
}

export function getPageGame(level: number) {
    seconds = 0
    minutes = 0
    container.style.display = 'block'
    page.innerHTML = `
    ${head()}
    ${getCards(level)}
    `

    timerId = setTimeout(function () {
        page.innerHTML = `
        ${head()}
        ${getHiddenCards(level)}
        `
        let timer = document.getElementById('timer') as HTMLDivElement

        function updateTime() {
            seconds++
            if (seconds ==== 60) {
                minutes++
                seconds = 0
            }
            timer.textContent = `${minutes
                .toString()
                .padStart(2, '0')}.${seconds.toString().padStart(2, '0')}`
        }
        interval = setInterval(updateTime, 1000)

        let playAgainButton = document.getElementById(
            'playAgainButton',
        ) as HTMLDivElement
        playAgainButton.addEventListener('click', () => {
            clearTimeout(interval)
            clearTimeout(timerId)
            eraseRandomCards()
            getPageGame(level)
        })

        const cards: NodeListOf<Element> =
            document.querySelectorAll('.hidden')
            cards.forEach(card => card.addEventListener('click', () => {
                turnCard(Number(card.attributes[2].value), level)
            }))
    }, 5000)
    let playAgainButton = document.getElementById(
        'playAgainButton',
    ) as HTMLDivElement
    playAgainButton.addEventListener('click', () => {
        clearTimeout(timerId)
        eraseRandomCards()
        getPageGame(level)
    })
}
