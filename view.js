menuDropdown();
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
                <div class="randomizer-title-image" style="background-image: url('img/cuphead-icon.png');"></div>
                <p>Cuphead</p>
            </div>
            <div class="randomizer-content">
                    <div class="randomizer-content-cards">
                        <div class="randomizer-content-cards-image" style="background-image:url('${randomShot1.img_path}')"></div>
                        <p>SHOT-1</p>
                    </div>
                    <div class="randomizer-content-cards">
                        <div class="randomizer-content-cards-image" style="background-image:url('${randomShot2.img_path}')"></div>
                        <p>SHOT-2</p>
                    </div>
                    <div class="randomizer-content-cards">
                        <div class="randomizer-content-cards-image" style="background-image:url('${randomSuper.img_path}')"></div>
                        <p>SUPER</p>
                    </div>
                    <div class="randomizer-content-cards">
                    <div class="randomizer-content-cards-image" style="background-image:url('${randomCharm.img_path}')"></div>
                        <p>CHARM</p>
                    </div>
            </div>
            <div class="randomizer-buttons">
                <button class="randomizeButton" onclick="${model.games.cuphead.view_function}">Randomize</button>
            </div>
        </div>
    `;
    model.view.innerHTML = tempView;
}
function LoLView() {
    let randomChamp = randomLoLChamp();
    let randomSS = randomLoLSummonerSpell();
    let randomSS2 = randomLoLSummonerSpell();
    let randomRole = randomLoLRole();
    while (randomSS2 === randomSS) {
        randomSS2 = randomLoLSummonerSpell();
    }

    let tempView = /*HTML*/`
        <div class="randomizer-inner">
            <div class="randomizer-title">
                <div class="randomizer-title-image" style="background-image: url('img/lol-icon.png');"></div>
                <p>${model.games.lol.name}</p>
            </div>
            <div class="randomizer-content">
                    <div class="randomizer-content-cards">
                        <div class="randomizer-content-cards-image" style="background-image:url('${randomChamp.squarePortraitPath}')"></div>
                        <p>${randomChamp.name}</p>
                    </div>
                    <div class="randomizer-content-cards">
                        <div class="randomizer-content-cards-image" style="background-image:url('${randomRole.img_path}')"></div>
                        <p>${randomRole.name}</p>
                    </div>
                    <div class="randomizer-content-cards toLeft">
                        <div class="randomizer-content-cards-center">
                            <div class="randomizer-content-cards-image summonerSpell" style="background-image:url('${randomSS.img_path}')"></div>
                            <p class="summonerSpellText">${randomSS.name}</p>
                        </div>
                        <div class="randomizer-content-cards-center">
                            <div class="randomizer-content-cards-image summonerSpell" style="background-image:url('${randomSS2.img_path}')"></div>
                            <p class="summonerSpellText">${randomSS2.name}</p>
                        </div>
                    </div>
            </div>
            <div class="randomizer-content">
                <div class="randomizer-content-cards">
                    <div class="randomizer-content-cards-image smaller" style="background-image:url('https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${checkLoLItem().image.full}')"></div>
                </div>
                <div class="randomizer-content-cards">
                    <div class="randomizer-content-cards-image smaller" style="background-image:url('https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${checkLoLItem().image.full}')"></div>
                </div>
                <div class="randomizer-content-cards">
                    <div class="randomizer-content-cards-image smaller" style="background-image:url('https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${checkLoLItem().image.full}')"></div>
                </div>
                <div class="randomizer-content-cards">
                    <div class="randomizer-content-cards-image smaller" style="background-image:url('https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${checkLoLItem().image.full}')"></div>
                </div>
                <div class="randomizer-content-cards">
                    <div class="randomizer-content-cards-image smaller" style="background-image:url('https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${checkLoLItem().image.full}')"></div>
                </div>
                <div class="randomizer-content-cards">
                    <div class="randomizer-content-cards-image smaller" style="background-image:url('https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${checkLoLItem().image.full}')"></div>
                </div>
            </div>
            <div class="randomizer-buttons">
                <button class="randomizeButton" onclick="${model.games.lol.view_function}">Randomize</button>
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
            let name = model.games[tempIndex[i]].name;
            let imgpath = model.games[tempIndex[i]].img_path;
            let viewFunction = model.games[tempIndex[i]].view_function;
            model.menulist.innerHTML += `
                <div onclick="${viewFunction}" class="game-list-card">
                    <div class="game-list-card-image" style="background-image: url('${imgpath}')"></div>
                    <p>${name}</p>
                </div>`;
        }
    } else {
        model.menu.innerHTML = "Show Games";
        model.menulist.innerHTML = "";
    }
}