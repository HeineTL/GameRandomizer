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
    let randomIndex = randomNumber(model.games.lol.champs.length);

    return model.games.lol.champs[randomIndex];
}