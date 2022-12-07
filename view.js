cupheadView();
function cupheadView() {
    let randomShot1 = randomCuphead("guns");
    let tempView = /*HTML*/`
        <div class="randomizer-inner">
                <div class="randomizer-title">
                    <img src="img/cuphead-icon.png">
                    <p>Cuphead</p>
                </div>
                <div class="randomizer-content">
                    <div class="randomizer-content-card-list">
                        <div class="randomizer-content-cards">
                            <img src="img/Cuphead/Guns/ChaserIcon.png">
                            <p>SHOT-1</p>
                        </div>
                        <div class="randomizer-content-cards">
                            <img src="img/Cuphead/Guns/CrackshotIcon.png">
                            <p>SHOT-2</p>
                        </div>
                        <div class="randomizer-content-cards">
                            <img src="img/Cuphead/Super Arts/2.png">
                            <p>SUPER</p>
                        </div>
                        <div class="randomizer-content-cards">
                            <img src="img/Cuphead/Charms/DivineRelicIcon.png">
                            <p>CHARM</p>
                        </div>
                    </div>
                    <div class="randomizer-buttons">
                        <button>Randomize</button>
                    </div>
                </div>
            </div>
    `;
    model.view.innerHTML = tempView;
}
function clearView() {
    model.view.innerHTML = "";
}