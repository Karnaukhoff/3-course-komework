import { getCards, getHiddenCards, totalRandomCards } from "./cards.js"
import { turnCard } from "./turnCards.js"

export const page = document.querySelector(".container")

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
    document.getElementById("container").style.display = "flex"
    document.getElementById("container").style.justifyContent = "center"
    document.getElementById("container").style.alignItems = "center"
}

export function head() {
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

export function getPageGame(level) {
    document.getElementById("container").style.display = "block"
    page.innerHTML = `
    ${head()}
    ${getCards()}
    `
    let randomCards = totalRandomCards
    console.log(randomCards)

    setTimeout(function () {
        page.innerHTML = `
        ${head()}
        ${getHiddenCards()}
        `

        const cards = document.querySelectorAll(".hidden")
        for (const card of cards) {
            card.addEventListener("click", () => {
                turnCard(Number(card.attributes.index.value), level)
            })
        }
    }, 5000)

}
