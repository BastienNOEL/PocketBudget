//configure le jeu

/** @type {import("../typings/phaser")} */


const config = {
    width: 1000,
    height: 600,
    type: Phaser.AUTO,
    scene:[LoadScene,TitleScene,TravelScene],
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
