import { turned1, turned2 } from './turnCards'

export let totalRandomCards: string[] = []
export function eraseRandomCards() {
    totalRandomCards = []
}
export const watch = []

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

export const cards: string[] = [
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

export function getRow(row: number, way: string, level: number) {
    let min = 0
    let max = 6
    let line = ``
    if (level > 1 && row == 1) {
        min = 0
        max = 9
    } else if (level === 2 && row === 2) {
        min = 9
        max = 12
    } else if (level === 3 && row === 2) {
        min = 9
        max = 18
    }
    for (let i = min; i < max; i++) {
        if (way === 'open') {
            if ((level === 1 && row === 1) || level > 1) {
                line += totalRandomCards[i]
            }
        } else if (way === 'hidden') {
            if ((level === 1 && row === 1) || level > 1) {
                line += `<img src="/img/hidden-card.jpg" class="hidden" index="${i}"></img>`
            }
        } else if (way === 'process') {
            if ((level === 1 && row === 1) || level > 1) {
                if (
                    turned2.includes(totalRandomCards[i]) &&
                    turned1.includes(totalRandomCards[i])
                ) {
                    line += totalRandomCards[i]
                } else {
                    if (
                        turned1.includes(totalRandomCards[i]) &&
                        turned1.includes(i)
                    ) {
                        line += totalRandomCards[i]
                    } else {
                        line += `<img src="/img/hidden-card.jpg" class="hidden" index="${i}"></img>`
                    }
                }
            }
        }
    }
    return line
}

export function getCards(level: number) {
    let until = 3
    if (level === 2) {
        until = 6
    } else if (level === 3) {
        until = 9
    }

    const randomCards1: string[] = []
    for (let i = 0; i < until; i++) {
        const index = Math.floor(Math.random() * 36)
        if (randomCards1.includes(cards[index])) {
            i--
        } else {
            randomCards1.push(cards[index])
        }
    }

    const randomCards2: string[] = []
    for (let i = 0; i < until; i++) {
        const index = Math.floor(Math.random() * until)
        if (randomCards2.includes(randomCards1[index])) {
            i--
        } else {
            randomCards2.push(randomCards1[index])
        }
    }
    until *= 2
    for (let i = 0; i < until; i++) {
        if (i % 2 === 1) {
            totalRandomCards.push(randomCards1[i / 2 - 0.5])
        } else {
            totalRandomCards.push(randomCards2[i / 2])
        }
    }

    return `
<section class="cards">
    <div class="first-line card-line">
        ${getRow(1, 'open', level)}
    </div>
    <div class="second-line card-line">
        ${getRow(2, 'open', level)}
    </div>
</section>
    `
}

export function getHiddenCards(level: number) {
    return `
    <section class="cards">
        <div class="first-line card-line">
            ${getRow(1, 'hidden', level)}
        </div>
        <div class="second-line card-line">
            ${getRow(2, 'hidden', level)}
        </div>
    </section>
        `
}
