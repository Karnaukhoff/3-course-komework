const page = document.querySelector(".container")

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

export function getPageGame(level) {
    console.log(level)
    document.getElementById("container").style.display = "block"
    document.getElementById("container").style.height = "100%"
    page.innerHTML = `
    <div class="header">
        <section class="header-time">
            <div class="header-time-min-sec">
                <div class="header-time-min-sec__time">min</div>
                <div class="header-time-min-sec__time"></div>
                <div class="header-time-min-sec__time">sek</div>
            </div>
            <div class="header-time">
                <div class="header-time-time">00.00</div>
            </div>
        </section>
        <button class="header-time-button">Начать заново</button>
    </div>

    <section class="cards hidden-cards">
        <div class="first-line card-line">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
        </div>
    </section>
    `
}

/*
<section class="cards hidden-cards">
        <div class="first-line card-line">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
        </div>
        <div class="second-line card-line">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
        </div>
        <div class="third-line card-line">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
        </div>
        <div class="fourth-line card-line">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
            <img src="/img/hidden-card.jpg" class="photo">
        </div>
    </section>

    <section class="cards">
        <div class="first-line card-line">
            <img src="/img/туз пики.jpg" class="photo">
            <img src="/img/король пики.jpg" class="photo">
            <img src="/img/дама пики.jpg" class="photo">
            <img src="/img/валет пики.jpg" class="photo">
            <img src="/img/10 пики.jpg" class="photo">
            <img src="/img/9 пики.jpg" class="photo">
            <img src="/img/8 пики.jpg" class="photo">
            <img src="/img/7 пики.jpg" class="photo">
            <img src="/img/6 пики.jpg" class="photo">
        </div>
        <div class="second-line card-line">
            <img src="/img/туз черви.jpg" class="photo">
            <img src="/img/король черви.jpg" class="photo">
            <img src="/img/дама черви.jpg" class="photo">
            <img src="/img/валет черви.jpg" class="photo">
            <img src="/img/10 черви.jpg" class="photo">
            <img src="/img/9 черви.jpg" class="photo">
            <img src="/img/8 черви.jpg" class="photo">
            <img src="/img/7 черви.jpg" class="photo">
            <img src="/img/6 черви.jpg" class="photo">
        </div>
        <div class="third-line card-line">
            <img src="/img/туз бубны.jpg" class="photo">
            <img src="/img/король бубны.jpg" class="photo">
            <img src="/img/дама бубны.jpg" class="photo">
            <img src="/img/валет бубны.jpg" class="photo">
            <img src="/img/10 бубны.jpg" class="photo">
            <img src="/img/9 бубны.jpg" class="photo">
            <img src="/img/8 бубны.jpg" class="photo">
            <img src="/img/7 бубны.jpg" class="photo">
            <img src="/img/6 бубны.jpg" class="photo">
        </div>
        <div class="fourth-line card-line">
            <img src="/img/туз крести.jpg" class="photo">
            <img src="/img/король крести.jpg" class="photo">
            <img src="/img/дама крести.jpg" class="photo">
            <img src="/img/валет крести.jpg" class="photo">
            <img src="/img/10 крести.jpg" class="photo">
            <img src="/img/9 крести.jpg" class="photo">
            <img src="/img/8 крести.jpg" class="photo">
            <img src="/img/7 крести.jpg" class="photo">
            <img src="/img/6 крести.jpg" class="photo">
        </div>
    </section>
*/