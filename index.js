import { getPageChoiceLevel, getPageGame } from "./pages.js"

getPageChoiceLevel()

const startButton = document.getElementById("start-button")
startButton.addEventListener("click", () => {
    if (document.getElementById("radio1").checked) {
        getPageGame(document.getElementById("radio1").value)
    } else if (document.getElementById("radio2").checked) {
        getPageGame(document.getElementById("radio2").value)
    } else if (document.getElementById("radio3").checked) {
        getPageGame(document.getElementById("radio3").value)
    } else {
        alert("Выберите уровень")
    }
})
