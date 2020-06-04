//configure le jeu

/** @type {import("../typings/phaser")} */

//localStorage.clear();

const config = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1000,
        height: 600
    },
    type: Phaser.AUTO,
    scene: [LoadScene, TitleScene, TravelScene, BoutiqueScene, PereNoelScene, MissionScreen,HomeScene,LutinShopScene,GuiScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },

}


var posXTravel = 500;
var posYTravel = 447.5;
var posXpn = 100;
var posYpn = 502;
var posXHome = 100;
var posYHome = 502;


var game = new Phaser.Game(config);
var LoadDatas = new LocalStorageSave();
var mission = new Mission();
var dataShop = new DonneesLutinShop();
