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
    scene: [LoadScene, TitleScene, TravelScene, BoutiqueScene, PereNoelScene, MissionScreen],
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
var posYTravel = 423.5;
var posXpn = 100;
var posYpn = 502;
sessionStorage.setItem('lvPlayer', 1);
var mission = new Mission();