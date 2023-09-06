import { currentLevel } from "./index.js"

export let totalRandomCards = []

const pikaT = `<img src="/img/туз пики.jpg" class="photo">`
const pikaK = `<img src="/img/король пики.jpg" class="photo">`
const pikaQ = `<img src="/img/дама пики.jpg" class="photo">`
const pikaJ = `<img src="/img/валет пики.jpg" class="photo">`
const pika10 = `<img src="/img/10 пики.jpg" class="photo">`
const pika9 = `<img src="/img/9 пики.jpg" class="photo">`
const pika8 = `<img src="/img/8 пики.jpg" class="photo">`
const pika7 = `<img src="/img/7 пики.jpg" class="photo">`
const pika6 = `<img src="/img/6 пики.jpg" class="photo">`

const chervT = `<img src="/img/туз черви.jpg" class="photo">`
const chervK = `<img src="/img/король черви.jpg" class="photo">`
const chervQ = `<img src="/img/дама черви.jpg" class="photo">`
const chervJ = `<img src="/img/валет черви.jpg" class="photo">`
const cherv10 = `<img src="/img/10 черви.jpg" class="photo">`
const cherv9 = `<img src="/img/9 черви.jpg" class="photo">`
const cherv8 = `<img src="/img/8 черви.jpg" class="photo">`
const cherv7 = `<img src="/img/7 черви.jpg" class="photo">`
const cherv6 = `<img src="/img/6 черви.jpg" class="photo">`

const bubniT = `<img src="/img/туз бубны.jpg" class="photo">`
const bubniK = `<img src="/img/король бубны.jpg" class="photo">`
const bubniQ = `<img src="/img/дама бубны.jpg" class="photo">`
const bubniJ = `<img src="/img/валет бубны.jpg" class="photo">`
const bubni10 = `<img src="/img/10 бубны.jpg" class="photo">`
const bubni9 = `<img src="/img/9 бубны.jpg" class="photo">`
const bubni8 = `<img src="/img/8 бубны.jpg" class="photo">`
const bubni7 = `<img src="/img/7 бубны.jpg" class="photo">`
const bubni6 = `<img src="/img/6 бубны.jpg" class="photo">`

const krestiT = `<img src="/img/туз крести.jpg" class="photo">`
const krestiK = `<img src="/img/король крести.jpg" class="photo">`
const krestiQ = `<img src="/img/дама крести.jpg" class="photo">`
const krestiJ = `<img src="/img/валет крести.jpg" class="photo">`
const kresti10 = `<img src="/img/10 крести.jpg" class="photo">`
const kresti9 = `<img src="/img/9 крести.jpg" class="photo">`
const kresti8 = `<img src="/img/8 крести.jpg" class="photo">`
const kresti7 = `<img src="/img/7 крести.jpg" class="photo">`
const kresti6 = `<img src="/img/6 крести.jpg" class="photo">`

export const cards = [
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
]

export function getCards() {
    let randomCards1 = []
    for (let i = 0; i < 18; i++) {
        let index = Math.floor(Math.random() * 36)
        if (randomCards1.includes(cards[index])) {
            i--
        } else {
            randomCards1.push(cards[index])
        }
    }

    let randomCards2 = []
    for (let i = 0; i < 18; i++) {
        let index = Math.floor(Math.random() * 18)
        if (randomCards2.includes(randomCards1[index])) {
            i--
        } else {
            randomCards2.push(randomCards1[index])
        }
    }

    for (let i = 0; i < 36; i++){
        if (i % 2 === 1){
            totalRandomCards.push(randomCards1[i/2 - 0.5])
        } 
        else {
            totalRandomCards.push(randomCards2[i/2])
        }
    }
    function getRow(row){
        let min = 0
        let max = 9
        let line = ``
        if (row === 2){
            min = 9
            max = 18
        } else if (row === 3){
            min = 18
            max = 27
        } else if (row === 4){
            min = 27
            max = 36
        }
        for (let i = min; i < max; i++){
            line += totalRandomCards[i]
        }
        return line
    }

    return `
<section class="cards">
    <div class="first-line card-line">
        ${getRow(1)}
    </div>
    <div class="second-line card-line">
        ${getRow(2)}
    </div>
    <div class="third-line card-line">
        ${getRow(3)}
    </div>
    <div class="fourth-line card-line">
        ${getRow(4)}
    </div>
</section>
    `
}

/*export function getHiddenCards() {
    return `
    <section class="cards hidden-cards">
        <div class="first-line card-line">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(0)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(1)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(2)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(3)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(4)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(5)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(6)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(7)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(8)">
        </div>
        <div class="second-line card-line">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(9)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(10)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(11)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(12)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(13)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(14)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(15)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(16)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(17)">
        </div>
        <div class="third-line card-line">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(18)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(19)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(20)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(21)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(22)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(23)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(24)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(25)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(26)">
        </div>
        <div class="fourth-line card-line">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(27)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(28)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(29)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(30)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(31)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(32)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(33)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(34)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(35)">
        </div>
    </section>
    `
}*/

/*
    <section class="cards hidden-cards">
        <div class="first-line card-line">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(0)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(1)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(2)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(3)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(4)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(5)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(6)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(7)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(8)">
        </div>
        <div class="second-line card-line">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(9)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(10)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(11)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(12)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(13)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(14)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(15)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(16)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(17)">
        </div>
        <div class="third-line card-line">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(18)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(19)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(20)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(21)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(22)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(23)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(24)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(25)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(26)">
        </div>
        <div class="fourth-line card-line">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(27)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(28)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(29)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(30)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(31)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(32)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(33)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(34)">
            <img src="/img/hidden-card.jpg" class="photo" onclick="turnCard(35)">
        </div>
    </section>
*/