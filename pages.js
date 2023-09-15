import { eraseRandomCards, getCards, getHiddenCards, totalRandomCards } from "./cards.js";
import { turnCard } from "./turnCards.js";

export const page = document.querySelector(".container");

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
        `;
  document.getElementById("container").style.display = "flex";
  document.getElementById("container").style.justifyContent = "center";
  document.getElementById("container").style.alignItems = "center";
}

export let seconds;
export let minutes;

export function realTime() {
    return `${minutes.toString().padStart(2, '0')}.${seconds.toString().padStart(2, '0')}`;
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
            <div class="header-time-time" id="timer">${realTime()}</div>
        </div>
    </section>
    <button class="header-time-button" id="playAgainButton">Начать заново</button>
</div>
    `;
}

export function getPageGame(level) {
  let interval;
  seconds = 0;
  minutes = 0;
  document.getElementById("container").style.display = "block";
  page.innerHTML = `
    ${head()}
    ${getCards(level)}
    `;

  //let randomCards = totalRandomCards;

  setTimeout(function () {
    page.innerHTML = `
        ${head()}
        ${getHiddenCards()}
        `;
    let timer = document.getElementById("timer");
        
    function updateTime() {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        timer.textContent = `${minutes.toString().padStart(2, '0')}.${seconds.toString().padStart(2, '0')}`;
        }
    interval = setInterval(updateTime, 1000);

    
    const cards = document.querySelectorAll(".hidden");
    for (const card of cards) {
      card.addEventListener("click", () => {
        turnCard(Number(card.attributes.index.value), level);
      });
    }
  }, 5000);
  /*let playAgainButton = document.getElementById("playAgainButton")
  playAgainButton.addEventListener("click", () => {
    clearInterval(interval)
    eraseRandomCards()
    getPageGame(level)
    })*/
}
