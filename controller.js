function randomNumber(val) {
    return Math.floor(Math.random() * val)
}

function randomCuphead(type) {
    if(type == "guns" || type == "charms" || type == "super_arts") {
        let randomIndex = randomNumber(model.games.cuphead[type].length);

        return model.games.cuphead[type][randomIndex];
    }
}