function randomNumber(val) {
    return Math.floor(Math.random() * val)
}

function randomCupheadItem(type) {
    if(type == "guns" || type == "charms" || type == "super_arts") {
        let randomIndex = randomNumber(model.games.cuphead[type].length);

        return model.games.cuphead[type][randomIndex];
    }
}

function randomLoLChamp() {
    let randomIndex = randomNumber(model.games.lol.champs.length);

    return model.games.lol.champs[randomIndex];
}
function randomLoLSummonerSpell() {
    let randomIndex = randomNumber(model.games.lol.summonerSpells.length);

    return model.games.lol.summonerSpells[randomIndex];
}
function randomLoLRole() {
    let randomIndex = randomNumber(model.games.lol.roles.length);

    return model.games.lol.roles[randomIndex];
}
function randomLoLItem() {
    let arrayNumber = Object.keys(model.games.lol.items.data);

    let randomIndex = randomNumber(arrayNumber.length);

    let randomID = arrayNumber[randomIndex];

    return model.games.lol.items.data[randomID];
}
function checkLoLItem() {
    let item = randomLoLItem();

    if(model.games.lol.itemsPicked.length > 5) {
        model.games.lol.itemsPicked.length = 0;
    }

    // KRÆSJER
    // let ttt = true;

    // while (ttt) {
    //     if(item.tags.includes("Boots")) {
    //         for(let i = 0; i < model.games.lol.itemsPicked.length; i++) {
    //             if(model.games.lol.itemsPicked[i].tags.includes("Boots")) {
    //                 item = randomLoLItem();
    //             }
    //         }
    //     } else {
    //         ttt = false;
    //     }
    // }

    model.games.lol.itemsPicked.push(item);
    return item;
}