//cette scene servira a précharger des éléments

class LoadScene extends Phaser.Scene {
    constructor() {
        super("Load");
    }


    preload() {
        this.load.image('BG', 'assets/img/BG/BG.png');
        this.load.image('ground', 'assets/img/Tiles/2.png');
        this.load.image('player', 'assets/img/Object/SnowMan.png');
        this.load.image('igloo1', 'assets/img/Object/Igloo1.png');
        this.load.image('igloo2', 'assets/img/Object/Igloo2.png');
    }

    create(){
        this.add.text(20,20,"Loading Game...");
        this.scene.start("Title");
    }
}