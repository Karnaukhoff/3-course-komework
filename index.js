import { getPageChoiceLevel, getPageGame } from "./pages.js"

export let currentLevel = ``

getPageChoiceLevel()

const startButton = document.getElementById("start-button")
startButton.addEventListener("click", () => {
    getPageGame()
    if (document.getElementById("radio1").checked) {
        currentLevel = document.getElementById("radio1").value
    } else if (document.getElementById("radio2").checked) {
        currentLevel = document.getElementById("radio2").value
    } else if (document.getElementById("radio3").checked) {
        currentLevel = document.getElementById("radio3").value
    } else {
        alert("Выберите уровень")
    }
})
