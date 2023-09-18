import { getPageChoiceLevel, getPageGame } from "./pages";
import * as _ from "lodash";

getPageChoiceLevel();

const startButton: any = document.getElementById("start-button");
let radio1: any = document.getElementById("radio1");
let radio2: any = document.getElementById("radio2");
let radio3: any = document.getElementById("radio2");

startButton.addEventListener("click", () => {
  if (radio1.checked) {
    getPageGame(1);
  } else if (radio2.checked) {
    getPageGame(2);
  } else if (radio3.checked) {
    getPageGame(3);
  } else {
    alert("Выберите уровень");
  }
});

//окно выиграл/проиграл
