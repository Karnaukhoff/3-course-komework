const page = document.querySelector(".container");

export function getPageChoiceLevel() {
    page.innerHTML = `
    <div class="choice__container">
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
        <input type="button" id="start-button" value="Старт" class="choice__container_button">
    </div>
        `;
};

export function getPageGame(level) {
    page.innerHTML = `Уровень ${level}`;
};