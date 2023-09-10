import { getPageChoiceLevel, getPageGame } from "./pages.js"
import "./style.css";

getPageChoiceLevel()

const startButton = document.getElementById("start-button")
startButton.addEventListener("click", () => {
    if (document.getElementById("radio1").checked) {
        getPageGame(1)
    } else if (document.getElementById("radio2").checked) {
        getPageGame(2)
    } else if (document.getElementById("radio3").checked) {
        getPageGame(3)
    } else {
        alert("Выберите уровень")
    }
})
