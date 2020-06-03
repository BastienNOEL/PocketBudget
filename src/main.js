//configure le jeu

/** @type {import("../typings/phaser")} */


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

var game = new Phaser.Game(config);

var posXTravel = 500;
var posYTravel = 447.5;
var posXpn = 100;
var posYpn = 502;
var posXHome = 100;
var posYHome = 502;
sessionStorage.setItem('lvPlayer', 1);
sessionStorage.setItem('nbStarCoin', 0);
sessionStorage.setItem('nbTentatives',1);
var mission = new Mission();