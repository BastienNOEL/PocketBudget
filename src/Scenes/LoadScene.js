//cette scene servira a précharger des éléments

class LoadScene extends Phaser.Scene {
    constructor() {
        super("Load");
    }


    preload() {
        this.load.image('bgTitre', 'assets/img/BG/bgTitre.png');
        this.load.image("buttons", "assets/img/Buttons/boutonJouer.png");

        this.load.image('BG', 'assets/img/BG/BG_02.png');
        this.load.image('ground', 'assets/img/Tiles/2.png');
        this.load.image('player', 'assets/img/Object/SnowMan.png');
        this.load.image('igloo1', 'assets/img/Object/Igloo1.png');
        this.load.image('maison', 'assets/img/Object/maison.png');

        this.load.image('murBois', 'assets/img/Object/woodenWall.png');
        this.load.image('solBois', 'assets/img/Object/solEnBois.png');
        this.load.image('cheminee', 'assets/img/Object/cheminee.png');
        this.load.image('sapinNoel', 'assets/img/Object/sapinDeNoel.png');
        this.load.image('santa', 'assets/img/Object/Santa.png');

        this.load.image('dialogueBox', 'assets/img/Object/DialogueBox.png');
        this.load.image('window', 'assets/img/Gui/Window.png');


    }

    create(){
        this.add.text(20,20,"Loading Game...");

        console.log('%c%s', 'color: #8400ff', "Loading game");
       // this.scene.start("Title");
        this.scene.start("PereNoel");
    }
}