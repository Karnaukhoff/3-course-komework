import { getPageChoiceLevel, getPageGame } from './pages'
import * as _ from 'lodash'

getPageChoiceLevel()

const startButton = document.getElementById('start-button')  as HTMLInputElement
let radio1 = document.getElementById('radio1') as HTMLInputElement
let radio2 = document.getElementById('radio2') as HTMLInputElement
//let radio3 = document.getElementById('radio2') as HTMLInputElement

startButton.addEventListener('click', () => {
    if (radio1.checked) {
        getPageGame(1)
    } else if (radio2.checked) {
        getPageGame(2)
    } else if (radio3.checked) {
        getPageGame(3)
    } else {
        alert('Выберите уровень')
    }
})

//окно выиграл/проиграл
