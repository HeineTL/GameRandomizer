cupheadView();
function cupheadView() {
    let randomShot1 = randomCupheadItem("guns");
    let randomShot2 = randomCupheadItem("guns");
    while (randomShot2 == randomShot1) {
        randomShot2 = randomCupheadItem("guns");
    }
    let randomSuper = randomCupheadItem("super_arts");
    let randomCharm = randomCupheadItem("charms");

    let tempView = /*HTML*/`
        <div class="randomizer-inner">
            <div class="randomizer-title">
                <img src="img/cuphead-icon.png">
                <p>Cuphead</p>
            </div>
            <div class="randomizer-content">
                    <div class="randomizer-content-cards">
                        <img src="${randomShot1.img_path}">
                        <p>SHOT-1</p>
                    </div>
                    <div class="randomizer-content-cards">
                        <img src="${randomShot2.img_path}">
                        <p>SHOT-2</p>
                    </div>
                    <div class="randomizer-content-cards">
                        <img src="${randomSuper.img_path}">
                        <p>SUPER</p>
                    </div>
                    <div class="randomizer-content-cards">
                        <img src="${randomCharm.img_path}">
                        <p>CHARM</p>
                    </div>
            </div>
            <div class="randomizer-buttons">
                <button onclick="cupheadView()">Randomize</button>
            </div>
        </div>
    `;
    model.view.innerHTML = tempView;
}
function clearView() {
    model.view.innerHTML = "";
}
function menuDropdown() {
    if (model.menu.innerHTML.includes("Show")) {
        model.menu.innerHTML = "Hide Games";
        let tempIndex = Object.keys(model.games);
        for (let i = 0; i < Object.keys(model.games).length; i++) {
            let name = model.games[tempIndex[i]].name
            let imgpath = model.games[tempIndex[i]].img_path
            model.menulist.innerHTML += `
                <div class="game-list-card">
                    <img src="${imgpath}">
                    <p>${name}</p>
                </div>`;
        }
    } else {
        model.menu.innerHTML = "Show Games";
        model.menulist.innerHTML = "";
    }
}